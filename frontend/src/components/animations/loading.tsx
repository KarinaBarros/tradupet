import { useEffect, useState } from "react";
import animationData from "../../assets/animations/loading.json";
import "./lottie.css";


type LottieComponent = typeof import("react-lottie-player")["default"];

export default function LottieAnimationLoading() {
  const [Lottie, setLottie] = useState<LottieComponent | null>(null);
  const [isClient, setIsClient] = useState(false);

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
    <div className="container-lottie-github">
      <div className="container-github">
        <div className="animacao">
          {Lottie && (
            <Lottie
              loop
              play
              animationData={animationData}
            />
          )}
        </div>
      </div>
    </div>
  );
}