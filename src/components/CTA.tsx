import TextContainer from "./TextContainer";
import { Button } from "./ui/button";

function CTA() {
    return(
        <div className="relative xl:px-20 xl:py-25 px-8 py-12 md:px-15 md:py-20 rounded-xl overflow-hidden">
            <div className="absolute inset-0 bg-[url('/CTA.png')] bg-cover bg-center"></div>
            <div className="absolute inset-0 bg-[url('/Masks/Fade_Out_Left.png')] bg-cover bg-center"></div>
            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between text-center lg:text-left gap-8">
                <TextContainer title="Start your free trial today!" description="This is a clear and concise call to action that encourages users to sign up for a free trial of PhimHub."/>
                <Button className="bg-red-45 text-white xl:text-lg xl:px-6 xl:py-4 hover:bg-red-800 active:bg-red-950">
                    Start Free Trial
                </Button>
            </div>
        </div>
    );
}

export default CTA;