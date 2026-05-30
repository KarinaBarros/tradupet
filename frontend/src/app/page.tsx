"use client";
import Link from "next/link";
import Nav from "../components/nav/nav";
import "./page.css";
import { FaCat, FaDog, FaVolumeUp, FaCrow } from "react-icons/fa";
import { GiSheep, GiPig, GiCow } from "react-icons/gi";

export default function Home() {

  return (
    <>
      <Nav />
      <div className="w-full flex flex-col">
        <Link href="/analise" className="mx-auto mt-14 px-6 py-3 text-white rounded-2xl bg-cyan-300 hover:bg-cyan-400 transition">
          Começar agora!
        </Link>

        <div className="flex flex-col items-center mx-auto mt-8">
          <span className="text-4xl">Descubra o que seu animal</span>
          <span className="text-5xl font-bold">realmente quer dizer</span>
        </div>

        <div className="flex flex-col mx-auto mt-14">
          <span className="text-sm">Exemplo de tradução</span>
          <div className="flex flex-col p-4 rounded-lg border-2 border-cyan-300">
            <div className="flex items-center ">
              <FaCat className="text-3xl" />
              <div className="ml-4 flex flex-col">
                <span className="font-bold">Gato</span>
                <span className="text-sm text-red-500">Revoltado  </span>
              </div>
            </div>
            <div className="mt-2 bg-gray-100 rounded-lg p-4">
              <span className="">"Eu quero mais ração! Comi fazem 5 minutos!"</span>
            </div>
            <img src="/Container.png" className="mt-4" alt="Container" />
          </div>
        </div>

        <div className="flex flex-col items-center mx-auto mt-14">
          <span className="text-5xl font-bold">Como funciona?</span>
          <span>Quer descobrir o que o seu PET disse? É só seguir os três passos abaixo para saber!</span>
        </div>

        <div className="flex mx-auto mt-14 gap-4">
          <div className="w-60 h-70 flex flex-col items-center p-4 rounded-lg border-2 border-cyan-300">
            <div className="flex items-center w-full justify-between">
              <div className="w-10 h-10 rounded-full border border-cyan-400"></div>
              <span className="text-4xl text-cyan-300 font-bold">01</span>
            </div>
            <span className="mt-6 font-bold">Envie um áudio</span>
            <span className="mt-4 text-sm text-gray-500">MP3 limpo, sem ruído externo, até 10 segundos.</span>
            <div className="mt-4 bg-gray-200 rounded-lg px-2">
              <span className="text-sm font-bold">MP3 • WAV • OGG • máx 10s</span>
            </div>
          </div>

          <div className="w-60 h-70 flex flex-col items-center p-4 rounded-lg border-2 border-orange-300">
            <div className="flex items-center w-full justify-between">
              <div className="w-10 h-10 rounded-full border border-orange-400"></div>
              <span className="text-4xl text-orange-300 font-bold">02</span>
            </div>
            <span className="mt-6 font-bold">IA analisa tudo</span>
            <span className="mt-4 text-sm text-gray-500">Reconhecimento de padrões sonoros, frequências vocais, emoções e nível de caos do animal.</span>
            <div className="mt-4 bg-orange-200 rounded-lg px-2">
              <span className="text-sm font-bold">Speech AI • Emotion Engine • Meme ML</span>
            </div>
          </div>

          <div className="w-60 h-70 flex flex-col items-center p-4 rounded-lg border-2 border-pink-300">
            <div className="flex items-center w-full justify-between">
              <div className="w-10 h-10 rounded-full border border-pink-400"></div>
              <span className="text-4xl text-pink-300 font-bold">01</span>
            </div>
            <span className="mt-6 font-bold">Resultado meme</span>
            <span className="mt-4 text-sm text-gray-500">A IA traduz o drama animal em frases hilárias e virais.</span>
            <div className="mt-4 bg-pink-200 rounded-lg px-2">
              <span className="text-sm font-bold">Compartilhe • Baixe • Viralize</span>
            </div>
          </div>
        </div>

        <span className="mx-auto mt-14 text-5xl font-bold">SUPORTAMOS 6 IDIOMAS</span>

        <div className="flex flex-col mx-auto mt-8 gap-4">
          <div className="flex gap-4">
            <div className="w-60 h-60 flex flex-col p-4 rounded-lg border-2 border-gray-500">
              <FaDog className="text-7xl mx-auto" />
              <span className="mt-6 font-bold">Cachorrês</span>
              <div className="mt-2 flex items-center">
                <FaVolumeUp className="text-orange-500 text-sm" />
                <span className="text-sm text-orange-500">Au Au Au!</span>
                <span className="text-sm text-gray-400 ml-1">• Ansioso 87%</span>
              </div>
              <span className="mt-4 text-sm text-gray-500">"Eu lati 14 vezes porque ouvi UM barulho."</span>
            </div>

            <div className="w-60 h-60 flex flex-col p-4 rounded-lg border-2 border-gray-500">
              <FaCat className="text-7xl mx-auto" />
              <span className="mt-6 font-bold">Gatês</span>
              <div className="mt-2 flex items-center">
                <FaVolumeUp className="text-purple-500 text-sm" />
                <span className="text-sm text-purple-500">Miau!</span>
                <span className="text-sm text-gray-400 ml-1">• Revoltado 94%</span>
              </div>
              <span className="mt-4 text-sm text-gray-500">"A comida apareceu 2 segundos atrasada. Processo iniciado."</span>
            </div>

            <div className="w-60 h-60 flex flex-col p-4 rounded-lg border-2 border-gray-500">
              <GiSheep className="text-7xl mx-auto" />
              <span className="mt-6 font-bold">Ovelhês</span>
              <div className="mt-2 flex items-center">
                <FaVolumeUp className="text-green-400 text-sm" />
                <span className="text-sm text-green-400">Béé Béé</span>
                <span className="text-sm text-gray-400 ml-1">• Zen 72%</span>
              </div>
              <span className="mt-4 text-sm text-gray-500">"Onde a maioria vai, eu vou. É filosofia."</span>
            </div>

          </div>

          <div className="flex gap-4">
            <div className="w-60 h-60 flex flex-col p-4 rounded-lg border-2 border-gray-500">
              <FaCrow className="text-7xl mx-auto" />
              <span className="mt-6 font-bold">Passarês</span>
              <div className="mt-2 flex items-center">
                <FaVolumeUp className="text-cyan-500 text-sm" />
                <span className="text-sm text-cyan-500">Piu Piu Piu</span>
                <span className="text-sm text-gray-400 ml-1">• Épico 99%</span>
              </div>
              <span className="mt-4 text-sm text-gray-500">"Eu canto às 5h porque sou uma lenda."</span>
            </div>

            <div className="w-60 h-60 flex flex-col p-4 rounded-lg border-2 border-gray-500">
              <GiPig className="text-7xl mx-auto" />
              <span className="mt-6 font-bold">Porcoês</span>
              <div className="mt-2 flex items-center">
                <FaVolumeUp className="text-pink-500 text-sm" />
                <span className="text-sm text-pink-500">Oinc Oinc</span>
                <span className="text-sm text-gray-400 ml-1">• Chateado 88%</span>
              </div>
              <span className="mt-4 text-sm text-gray-500">"Eu só queria lama e respeito. Não era difícil."</span>
            </div>

            <div className="w-60 h-60 flex flex-col p-4 rounded-lg border-2 border-gray-500">
              <GiCow className="text-7xl mx-auto" />
              <span className="mt-6 font-bold">Vacaês</span>
              <div className="mt-2 flex items-center">
                <FaVolumeUp className="text-orange-500 text-sm" />
                <span className="text-sm text-orange-500">Muuuuu</span>
                <span className="text-sm text-gray-400 ml-1">• Entediado 88%</span>
              </div>
              <span className="mt-4 text-sm text-gray-500">"MUU significa: me dê capim. É simples."</span>
            </div>

          </div>
        </div>

        <footer className="mt-14">
          <span className="text-2xl font-bold">Entenda o que o seu PET quer te contar!</span>
          <p className="text-sm">Junte-se ao caos animal.</p>
          <Link href="/analise" className="mx-auto text-black mt-2 px-6 py-3 rounded-2xl bg-white">
            Quero saber o que meu pet fala
          </Link>
        </footer>
        <span className="ml-auto mt-1 mr-4 pb-10 text-sm text-gray-400">TraduPET! • De animais (humanos) para animais (pets) • © 2026</span>
      </div>
    </>
  );
}