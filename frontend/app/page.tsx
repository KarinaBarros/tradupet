"use client";
import Link from "next/link";

export default function Home() {

  return (
    <div className="flex flex-col">
      <h1>Home</h1>
      <Link href="/analise">Ir para análise de áudio</Link>
    </div>
  );
}