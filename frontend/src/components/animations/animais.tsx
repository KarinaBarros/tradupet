import { useEffect, useState } from "react";
import "./lottie.css";
import cachorro from "../../assets/animations/cachorro.json";
import gato from "../../assets/animations/gato.json";
import passaro from "../../assets/animations/passaro.json";
import ovelha from "../../assets/animations/ovelha.json";
import porco from "../../assets/animations/porco.json";
import vaca from "../../assets/animations/vaca.json";

type Props = {
    animal: string;
};

type LottieComponent = typeof import("react-lottie-player")["default"];

export default function LottieAnimationAnimais({ animal }: Props) {
    const [animation, setAnimation] = useState<any>(null);
    const [Lottie, setLottie] = useState<LottieComponent | null>(null);
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        console.log("Animal recebido:", animal);
        switch (animal) {
            case "cachorro":
                setAnimation(cachorro);
                break;
            case "gato":
                setAnimation(gato);
                break;
            case "passaro":
                setAnimation(passaro);
                break;
            case "ovelha":
                setAnimation(ovelha);
                break;
            case "porco":
                setAnimation(porco);
                break;
            case "vaca":
                setAnimation(vaca);
                break;
            default:
                setAnimation(null);
        }
    }, [animal]);

    useEffect(() => {
        setIsClient(true);
      }, []);
    
      useEffect(() => {
        if (!isClient) return;
    
        import("react-lottie-player").then((module) => {
          setLottie(() => module.default);
        });
      }, [isClient]);
    
      if (!isClient) {
        return null;
      }

        return (
    <div className="container-lottie">      
        <div className="animacao">
          {Lottie && animation &&(
            <Lottie
              loop
              play
              animationData={animation}
            />
          )}
        </div>     
    </div>
  );

}