import { Progress } from "@/components/ui/progress";
import { useEffect } from "react";

function LoadingScreen({ onComplete }: { onComplete?: () => void }) {
  useEffect(() => {
    const timeout = setTimeout(() => {
      onComplete && onComplete();
    }, 1000);

    return () => clearTimeout(timeout);
  }, [onComplete]);

  return (
    <div className="flex min-h-dvh min-w-dvh flex-col items-center justify-center gap-8 bg-black">
      <div className="flex items-center gap-4">
        <div className="logo relative h-[202px] w-[202px]">
          <img
            src="/Logo/BigPlayBtn.svg"
            alt="PlayBtn"
            className="absolute top-[65px] left-[69px]"
          />
          <img
            src="/Logo/BigVector.svg"
            alt="Vector"
            className="animate-slow-spin absolute"
          />
        </div>
        <h1 className="text-7xl text-white">PhimHub</h1>
      </div>
      <Progress value={33} className="h-[0.3rem] w-[540px]" />
    </div>
  );
}
export default LoadingScreen;
