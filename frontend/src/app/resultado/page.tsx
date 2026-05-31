"use client";
import LottieAnimationAnimais from "@/src/components/animations/animais";
import LottieAnimationLoading from "@/src/components/animations/loading";
import { useEffect, useState } from "react";
import Nav from "../../components/nav/nav";
import { audioService } from "../../services/audio-service";
import "./resultado.css";
import Link from "next/link";
import { FaSpinner } from "react-icons/fa";

export default function Resultado() {
    const file = audioService.getFile();
    const [result, setResult] = useState<any>(null);
    const [loading, setLoading] = useState(false);

    console.log(file);

    function playAudio() {
        if (file) {
            const audio = new Audio(URL.createObjectURL(file));
            audio.play();
        }
    }

    async function handleUpload() {
        console.log(file);
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
            console.log(data);
            setResult(data);
            playAudio();
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        if (file) {
            handleUpload();
        }
    }, [file]);

    return (
        <>
            <Nav />

            {result && (
                <div className="w-full flex flex-col px-[15%] mt-14">

                    <div className="w-full flex flex-col bg-orange-50 border-2 border-orange-500 p-4 rounded-lg">
                        <div className="flex flex-col mx-auto items-center gap-4">
                            <div className="balao-fala">
                                <p>{result.fala}</p>
                            </div>
                            <LottieAnimationAnimais animal={result.animal} />
                        </div>

                        <div className="mt-6 flex gap-2 mx-auto">
                            <span className="font-bold">{result.estado}</span>
                            <span className="text-gray-500">•</span>
                            <span className="text-gray-500">{result.probabilidade}</span>
                        </div>
                    </div>
                </div>
            )}

            {loading &&<div className="w-full flex items-center justify-center mt-14">
                 <LottieAnimationLoading />
            </div>}

            <Link href="/analise" className="button-link">
                <FaSpinner/>
                Gerar nova tradução
            </Link>
        </>
    )
}