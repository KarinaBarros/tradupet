from fastapi import FastAPI, UploadFile, File
from fastapi.middleware.cors import CORSMiddleware

from audio_model import analyze_audio
from llm import interpret_audio

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def root():
    return {"status": "YAMNet API online"}


@app.post("/analyze")
async def analyze(file: UploadFile = File(...)):
    # ler bytes do arquivo
    audio_bytes = await file.read()

    # analisar direto da memória
    results = analyze_audio(audio_bytes)

    # interpretar com LLM
    interpretation = interpret_audio(results)

    return interpretation