"use client";

import { useRef, useState } from "react";
import Nav from "../../components/nav/nav";
import { FaMusic, FaUpload, FaRegClock, FaShieldAlt, FaVolumeUp, FaArrowRight } from "react-icons/fa";
import "./analise.css";
import { useRouter } from "next/navigation";
import { audioService } from "../../services/audio-service";
import cachorro from "../../assets/icons/cachorro.png";
import gato from "../../assets/icons/gato.png";
import ovelha from "../../assets/icons/ovelha.png";
import passaro from "../../assets/icons/passaro.png";
import porco from "../../assets/icons/porco.png";
import vaca from "../../assets/icons/vaca.png";
import Image from "next/image";

export default function AudioPage() {
  const [file, setFile] = useState<File | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  function OpenSelector() {
    inputRef.current?.click();
  }

  function selectedFile(e: React.ChangeEvent<HTMLInputElement>) {
    const arqivo = e.target.files?.[0];
    if (arqivo) {
      setFile(arqivo);
    }
  }

  function releseFile(e: React.DragEvent<HTMLDivElement>) {
    e.preventDefault();
    const arqivo = e.dataTransfer.files?.[0];
    if (arqivo) {
      setFile(arqivo);
    }
  }

  const handleFile = () => {
    const f = file;
    if (!f) return;

    audioService.setFile(f);

    router.push("/resultado");
  };

  async function animalAudio(animal: string) {
    const res = await fetch(`/audios/${animal}.mp3`);
    const blob = await res.blob();
    const f = new File([blob], `${animal}.mp3`, {
      type: "audio/mpeg",
    });
    if (!f) return;
    audioService.setFile(f);
    router.push("/resultado");
  }


  return (
    <>
      <Nav />
      <div className="flex flex-col px-[15%] mt-14">

        <h1 className="text-4xl font-bold mx-auto">Envie o áudio</h1>
        <span className="text-orange-500 mx-auto mt-4">Nossos neurônios artificiais estão famintos por drama animal</span>

        <div onClick={OpenSelector} onDragOver={(e) => e.preventDefault()} onDrop={releseFile}
          className="w-full mt-6 py-10 bg-gray-100 border-2 border-pink-300 border-dashed rounded-lg flex flex-col items-center justify-center cursor-pointer">
          <FaUpload className="text-cyan-400 text-4xl" />
          <span className="mt-4 text-2xl font-semibold text-orange-500 mt-2">Arraste o áudio aqui</span>
          <span className="text-orange-500 mt-2">ou <strong>clique para selecionar</strong></span>
          <span className="text-sm text-gray-500 mt-2 h-5">{file && file.name}</span>
        </div>
        <input type="file" accept="audio/*" onChange={selectedFile} ref={inputRef} hidden />

        {file &&
          <button onClick={handleFile} className="flex items-center mx-auto mt-4 px-6 py-3 text-white rounded-2xl bg-cyan-300 hover:bg-cyan-400 transition">
            <FaArrowRight className="mr-2" />
            Traduzir
          </button>
        }

        <div className="w-full flex flex-col border-2 border-gray-300 mt-6 p-4 rounded-lg gap-4">
          <span className="text-lg font-semibold">Regras do arquivo</span>

          <div className="flex gap-4 w-full">
            <div className="flex gap-2 w-full bg-blue-50 p-2 rounded-lg">
              <FaMusic className="text-blue-400 text-sm" />
              <div className="flex flex-col">
                <span className="text-sm text-gray-500">Formato</span>
                <span className="font-bold">MP3 • WAV • OGG</span>
              </div>
            </div>

            <div className="flex gap-2 w-full bg-blue-50 p-2 rounded-lg">
              <FaRegClock className="text-blue-400 text-sm" />
              <div className="flex flex-col">
                <span className="text-sm text-gray-500">Duração</span>
                <span className="font-bold">Máx. 10 segundos</span>
              </div>
            </div>
          </div>

          <div className="flex gap-4 w-full">
            <div className="flex gap-2 w-full bg-blue-50 p-2 rounded-lg">
              <FaShieldAlt className="text-blue-400 text-sm" />
              <div className="flex flex-col">
                <span className="text-sm text-gray-500">Ambiente</span>
                <span className="font-bold">Sem ruído externo</span>
              </div>
            </div>

            <div className="flex gap-2 w-full bg-blue-50 p-2 rounded-lg">
              <FaVolumeUp className="text-blue-400 text-sm" />
              <div className="flex flex-col">
                <span className="text-sm text-gray-500">Qualidade</span>
                <span className="font-bold">Áudio claro do animal</span>
              </div>
            </div>
          </div>
        </div>

        <span className="text-sm text-orange-500 mt-4">Sem áudio? Use uma amostra:</span>
        <div className="w-full flex flex-col gap-2 mt-2">
          <div className="flex gap-w w-full border-2 border-orange-500 bg-orange-100 p-4 rounded-lg items-center gap-4"
            onClick={() => animalAudio("cachorro")}>
            <Image src={cachorro} className="w-10 h-8" alt="Cachorro" />
            <div className="flex flex-col">
              <span className="font-bold">Cachorro ansioso</span>
              <span className="text-sm text-gray-500">Latido frenético • 10s</span>
            </div>
            <button className="bg-orange-500 hover:bg-orange-600 text-white py-1 px-4 rounded-xl flex items-center ml-auto">
              Usar
              <FaArrowRight className="ml-2" />
            </button>
          </div>
        </div>

        <div className="w-full flex flex-col gap-2 mt-2">
          <div className="flex gap-w w-full border-2 border-purple-500 bg-purple-100 p-4 rounded-lg items-center gap-4"
            onClick={() => animalAudio("gato")}>
            <Image src={gato} className="w-10 h-8" alt="Gato" />
            <div className="flex flex-col">
              <span className="font-bold">Gato reclamão</span>
              <span className="text-sm text-gray-500">Miado dramático • 6s</span>
            </div>
            <button className="bg-purple-500 hover:bg-purple-600 text-white py-1 px-4 rounded-xl flex items-center ml-auto">
              Usar
              <FaArrowRight className="ml-2" />
            </button>
          </div>
        </div>

        <div className="w-full flex flex-col gap-2 mt-2">
          <div className="flex gap-w w-full border-2 border-blue-500 bg-blue-100 p-4 rounded-lg items-center gap-4"
            onClick={() => animalAudio("passaro")}>
            <Image src={passaro} className="w-10 h-8" alt="Passaro" />
            <div className="flex flex-col">
              <span className="font-bold">Pássaro lendário</span>
              <span className="text-sm text-gray-500">Canto épico • 2s</span>
            </div>
            <button className="bg-blue-500 hover:bg-blue-600 text-white py-1 px-4 rounded-xl flex items-center ml-auto">
              Usar
              <FaArrowRight className="ml-2" />
            </button>
          </div>
        </div>
        
      </div>
    </>
  );
}