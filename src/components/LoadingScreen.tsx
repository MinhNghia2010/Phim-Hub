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
        <div className="logo relative h-15 w-15 lg:h-30 lg:w-30 xl:h-[202px] xl:w-[202px]">
          <img
            src="/Logo/BigPlayBtn.svg"
            alt="PlayBtn"
            className="absolute top-5 left-[22px] w-5 lg:top-[42px] lg:left-11 lg:w-10 xl:top-[65px] xl:left-[69px] xl:w-18"
          />
          <img
            src="/Logo/BigVector.svg"
            alt="Vector"
            className="animate-slow-spin absolute"
          />
        </div>
        <h1 className="text-4xl text-white lg:text-6xl xl:text-7xl">PhimHub</h1>
      </div>
      <Progress
        value={33}
        className="h-[0.3rem] w-[50vw] md:w-[40vw] xl:w-[540px]"
      />
    </div>
  );
}
export default LoadingScreen;
