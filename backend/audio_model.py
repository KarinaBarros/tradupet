import io
import tensorflow_hub as hub
import tensorflow as tf
import numpy as np
import librosa
import soundfile as sf

# carregar modelo
model = hub.load("https://tfhub.dev/google/yamnet/1")

# carregar labels
class_map_path = model.class_map_path().numpy().decode("utf-8")
class_names = []

with open(class_map_path, "r") as f:
    for line in f.readlines()[1:]:
        class_names.append(line.strip().split(",")[2])


def analyze_audio(audio_bytes):
    # transformar bytes em arquivo na memória
    audio_file = io.BytesIO(audio_bytes)

    # carregar áudio
    waveform, sr = librosa.load(audio_file, sr=16000)

    # rodar YAMNet
    scores, embeddings, spectrogram = model(waveform)

    # média das predições
    mean_scores = np.mean(scores.numpy(), axis=0)

    # top 5
    top_indices = np.argsort(mean_scores)[::-1][:5]

    results = []

    for i in top_indices:
        results.append({
            "label": class_names[i],
            "score": float(mean_scores[i])
        })

    print("YAMNet results:", results)

    return results