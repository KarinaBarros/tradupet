"use client";

import LottieAnimationAnimais from "@/src/components/animations/animais";
import LottieAnimationLoading from "@/src/components/animations/loading";
import { useState } from "react";
import "./analise.css";

export default function AudioPage() {
  const [file, setFile] = useState<File | null>(null);
  const [result, setResult] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  async function handleUpload() {
    setResult(null);
    if (!file) return;

    setLoading(true);
    setResult(null);

    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await fetch("http://localhost:8000/analyze", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      setResult(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex flex-col">
      <h1>Audio Analyzer</h1>
      <input
        type="file"
        accept="audio/*"
        onChange={(e) => setFile(e.target.files?.[0] || null)}
      />
      <button onClick={handleUpload} disabled={loading}>
        {loading ? "Analisando..." : "Enviar"}
      </button>
      {loading && <LottieAnimationLoading />}
      {result && (
        <div className="w-full flex flex-col items-start m-auto">
          <h2>Resultado</h2>

          <div className="m-auto flex flex-col bg-gray-100 p-4 rounded-lg">
            <div className="balao-fala">
              <p>{result.fala}</p>
            </div>
            <LottieAnimationAnimais animal={result.animal} />
          </div>
          <p>Comportamento: {result.comportamento}</p>
          <p>Contexto: {result.contexto}</p>
        </div>
      )}
    </div>
  );
}