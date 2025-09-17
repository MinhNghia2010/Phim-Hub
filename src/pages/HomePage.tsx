import DevicesCard from "@/components/DevicesCard";
import FAQ from "@/components/FAQ";
import NavBar from "@/components/NavBar";
import PageCarousel from "@/components/PageCarousel";
import TextContainer from "@/components/TextContainer";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <NavBar currentPage="home" />

      <div className="animate-fade-in absolute top-0 flex min-h-[90vh] w-full items-center justify-center bg-[url('Background.svg')] mask-y-from-50% mask-y-to-100% bg-cover bg-center">
        <img
          src="/Logo/Abstract Design.svg"
          alt="Design"
          className="animate-fade-in z-10 logo-width"
        />
      </div>

      <div className="containerBox">
        <div className="subContainer mt-[clamp(45vh+150px,45vh+25vw,45vh+435px)] flex w-full flex-col items-center">
          <div className="textContainer px-auto z-30 max-w-[1096px] px-4 text-center sm:px-0">
            <h1 className="mb-5 text-3xl text-white sm:text-5xl xl:text-6xl">
              The Best Streaming Experience
            </h1>
            <p className="text-grey-60 text-sm xl:text-lg">
              PhimHub is the best streaming experience for watching your
              favorite movies and shows on demand, anytime, anywhere. With
              PhimHub, you can enjoy a wide variety of content, including the
              latest blockbusters, classic movies, popular TV shows, and more. You
              can also create your own watchlists, so you can easily find the
              content you want to watch.
            </p>
          </div>
          <Button
            className="bg-red-45 mb-fluid z-30 mt-[50px] text-lg text-white hover:bg-red-800 active:bg-red-950"
            size="default"
            >
            <Play size={24} />
            Start Watching Now
          </Button>
        </div>
      </div>

      <div className="containerBox flex flex-col gap-[150px]">
        {/* Categories */}
        <PageCarousel />
        {/* Devices */}
        <div className="flex w-full flex-col">
          <div className="subContainer">
            <TextContainer
              title="We Provide you streaming experience across various devices."
              description="With PhimHub, you can enjoy your favorite movies and TV shows anytime, anywhere. Our platform is designed to be compatible with a wide range of devices, ensuring that you never miss a moment of entertainment."
            />
          </div>
          <DevicesCard />
        </div>
        {/* FAQ's */}
        <div className="flex w-full flex-col">
          <div className="subContainer relative justify-between">
            <TextContainer
              title="Frequently Asked Questions"
              description="Got questions? We've got answers! Check out our FAQ section to find answers to the most common questions about PhimHub."
            />
            <Button className="bg-red-45 ml-20 h-min w-min px-[14px] py-5 text-sm font-bold text-white xl:px-[18px] xl:py-6 xl:text-lg">
              Ask a Question
            </Button>
          </div>
          <FAQ />
        </div>
        {/* Pricing */}
        {/* CTA */}
      </div>
      {/* Footer */}
    </>
  );
}

export default HomePage;
