# TraduPet

Sistema fullstack que realiza análise de audio com inteligência artificial, criado para identificar sons de animais usando o **YAMNet (TensorFlow)** e interpretar sentimento/ação do animal em sentido figurado utilizando a **LLM via Groq API**.

O projeto roda completamente via Docker, sem necessidade de instalar Node ou Python localmente.

**Projeto desenvolvido para a Codecon Summit 2026.**

---

# Sobre o projeto

## O sistema funciona em três etapas:

### 1. Upload de áudio

O usuário envia um arquivo de áudio pelo frontend (Next.js).

### 2. Análise de áudio (YAMNet)

O backend processa o áudio usando o modelo YAMNet (TensorFlow Hub), identificando sons como:

- cachorro
- gato
- silêncio
- sons ambientais
- vocalizações

### 3. Interpretação com LLM (Groq)

Os resultados do modelo são enviados para uma LLM que transforma os dados em linguagem natural:

- Animal detectado
- Comportamento
- Contexto da situação
- Frase divertida

---

# Arquitetura do sistema

```Frontend (Next.js)```
        
```API Backend (FastAPI)```
        
```Modelo YAMNet (TensorFlow)```
        
```LLM (Groq API)```
        
```Resposta JSON```

---

# Estrutura do projeto
- nome-projeto/
- frontend/          
- backend/           
- docker-compose.yml 
- README.md
---
# Tecnologias utilizadas
## Frontend
- Next.js
- React

## Backend
- FastAPI
- Python 3.11
- TensorFlow
- TensorFlow Hub (YAMNet)
- Librosa
- NumPy
- Requests

## IA
- Groq API (LLaMA)
- modelo YAMNet para análise de áudio

## Infraestrutura
- Docker
- Docker Compose
- Docker Desktop

---

# Como rodar o projeto

## Pré-requisitos

- Docker instalado
- Docker Compose instalado
- Docker Desktop

---

## Configurando as variáveis de ambiente

Você vai precisar de uma chave da API do Groq obtida gratuitamente em:

https://console.groq.com/

Após crie um novo arquivo em backend/.env

Coloque sua chave da API:

`GROQ_API_KEY=sua_chave_aqui`

---

## Subindo o projeto

No terminal do projeto, execute o comando:

```bash
docker compose up --build
```

### Observação:

Até iniciar vai ser mô correria e o code clean vai para o espaço, mas fique tranquilo(a) sua máquina não vai explodir.

O Docker estará baixando dependências, montando containers e preparando a IA. Aproveite para tomar um café enquanto o TraduPet aprende a falar "au-au" e "miau".

---

# Endopoints e Acessos

Após o projeto subir, acesse:

- Frontend (Next.js):
http://localhost:3000

- Backend (FastAPI):
http://localhost:8000

- Swagger (documentação da API):
http://localhost:8000/docs

## Comandos Úteis
Parar o projeto
```bash
docker compose down
```

Reset completo (limpar containers e rebuild)
```bash
docker compose down -v
docker compose up --build
```
---
# API
## Analisar Áudio
### Endpoint

```http
POST /analyze
```

### Entrada
```Arquivo de áudio (mp3, wav)```

### Saída
```json
{
  "animal": "cachorro",
  "comportamento": "latindo alto e constante",
  "contexto": "ambiente doméstico com possível visitante",
  "fala": "esse cachorro tá mais alerta que porteiro de condomínio"
}
```
---
# Testando a API

 Acesse o Swagger:

http://localhost:8000/docs

--- 

# Fluxo do sistema
1: Upload de áudio (Frontend)

2: FastAPI recebe arquivo
        
3: YAMNet processa áudio
        
4: Groq interpreta resultados
        
5: JSON final enviado ao frontend

---

# UX/UI

Protótipo

https://www.figma.com/design/NTPiFhAWgVkhr30uyXXTjh/TraduPET-?node-id=0-1&p=f&t=gMwPxdLPn04fZdk8-0

# Status do projeto
- MVP funcional
- Dockerizado
- Integração com LLM
- Processamento de áudio com YAMNet
- UI em evolução
- Melhorias futuras
---
# Autores
#### Equipe CTRL + She:
- Alexsane Souza
- Karina Barros
- Isabela Costa
- Mia
- Beatriz Souza

---

# Projeto para estudo de:

- IA aplicada a áudio
- LLMs
- Arquitetura fullstack com Docker

---