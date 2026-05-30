"use client";

import LottieAnimationLoading from "@/src/components/animations/loading";
import { useState } from "react";

export default function AudioPage() {
  const [file, setFile] = useState<File | null>(null);
  const [result, setResult] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  async function handleUpload() {
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
        <div>
          <h2>Resultado</h2>

          <p>Animal: {result.animal}</p>
          <p>Comportamento: {result.comportamento}</p>
          <p>Contexto: {result.contexto}</p>
          <p>Fala: {result.fala}</p>
        </div>
      )}
    </div>
  );
}