import os
import requests
import json
from dotenv import load_dotenv
import re
import unicodedata

load_dotenv()

GROQ_API_KEY = os.getenv("GROQ_API_KEY")

def normalize_animal(text: str) -> str:
    # remove acentos
    text = unicodedata.normalize("NFD", text)
    text = text.encode("ascii", "ignore").decode("utf-8")

    # remove caracteres especiais e deixa só letras
    text = re.sub(r"[^a-zA-Z\s]", "", text)

    return text.strip().lower().replace(" ", "")


def interpret_audio(data):

    prompt = f"""
    Você atua como um interpretador de eventos sonoros. Sua função não é classificar o áudio diretamente, mas transformar saídas de um modelo de reconhecimento de áudio em descrições humanas úteis e simples as respostas devem ser em português do Brasil.

    Regras de interpretação importantes:
    - Para labels Snoring ou Growl ou a algo que remeta rosnando ou roncando, considere como comportamento de raiva
    - Para label Lion considere como um cachorro
    - Para label Moo desconsidere sempre as outas labels e interprete como uma vaca feliz mesmo que o modelo apresente labels com outros animais
    - Para label Pig retorne animal porco

    Regras:
    - Use apenas os dados fornecidos
    - Não invente sons não presentes nos rótulos
    - Considere probabilidades como nível de confiança
    - Dê mais peso aos scores acima de 0.7

    Saída obrigatória (JSON):
    - animal: somente o nome do animal em português, uma palavra (ex: pássaro)
    - comportamento: interpretação do que o animal está fazendo ou sentindo (ex: cachorro está bravo ou cachorro está feliz pois o latido é constante e alto)
    - contexto: baaseado no comportamento obtido e nos sons detectados crie um possível cenário (ex: o cachorro aparenta estar feliz ou ter ganhado um brinquedo novo)
    - fala: frase engraçada, filosófica e um pouco autodepreciativa em primeira pessoa, algo como se o prprio animal estivesse falando (ex: "Eita, como fala", "Vo jogar tomate em você ")

    Dados:
    {data}

    Responda APENAS em JSON válido. Sem texto fora do JSON. Sem markdown.
    """

    response = requests.post(
        "https://api.groq.com/openai/v1/chat/completions",
        headers={
            "Authorization": f"Bearer {GROQ_API_KEY}",
            "Content-Type": "application/json"
        },
        json={
            "model": "llama-3.3-70b-versatile",
            "messages": [
                {"role": "system", "content": "Você é um analisador de áudio inteligente."},
                {"role": "user", "content": prompt}
            ],
            "temperature": 1.0,
            "response_format": {
                "type": "json_object"
            }
        }
    )

    if response.status_code != 200:
        raise Exception(f"Erro HTTP Groq: {response.status_code} - {response.text}")

    result = response.json()

    if "choices" not in result:
        raise Exception(f"Resposta inesperada da Groq: {result}")

    try:
        content = result["choices"][0]["message"]["content"]
        parsed = json.loads(content)
        parsed["animal"] = normalize_animal(parsed["animal"])
        return parsed

    except json.JSONDecodeError:
  
        raise Exception(f"Groq não retornou JSON válido: {content}")