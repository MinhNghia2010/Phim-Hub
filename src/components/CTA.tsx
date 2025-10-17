import TextContainer from "./TextContainer";
import { Button } from "./ui/button";

function CTA() {
  return (
    <div className="relative overflow-hidden rounded-xl px-8 py-12 md:px-15 md:py-20 xl:px-20 xl:py-25">
      <div className="absolute inset-0 bg-[url('/CTA.png')] bg-cover bg-center"></div>
      <div className="absolute inset-0 bg-[url('/Masks/Fade_Out_Left.png')] bg-cover bg-center"></div>
      <div className="relative z-10 flex flex-col items-center justify-between gap-8 text-center lg:flex-row lg:text-left">
        <TextContainer
          title="Start your free trial today!"
          description="This is a clear and concise call to action that encourages users to sign up for a free trial of PhimHub."
        />
        <Button className="bg-red-45 text-white hover:bg-red-800 active:bg-red-950 xl:px-6 xl:py-4 xl:text-lg">
          Start Free Trial
        </Button>
      </div>
    </div>
  );
}

export default CTA;
