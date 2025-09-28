"use client";

import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  useCarousel,
} from "@/components/ui/carousel";
import GenreCard from "@/components/HomePage/GenreCard";
import TextContainer from "@/components/TextContainer";

const genres = [
  { img: "/Category/Action.svg", genre: "Action" },
  { img: "/Category/Adventure.svg", genre: "Adventure" },
  { img: "/Category/Comedy.svg", genre: "Comedy" },
  { img: "/Category/Drama.svg", genre: "Drama" },
  { img: "/Category/Horror.svg", genre: "Horror" },
  { img: "/Category/Romance.svg", genre: "Romance" },
  { img: "/Category/Sci-Fi.svg", genre: "Sci-Fi" },
  { img: "/Category/Thriller.svg", genre: "Thriller" },
  { img: "/Category/Animation.svg", genre: "Animation" },
  { img: "/Category/Documentary.svg", genre: "Documentary" },
  { img: "/Category/Fantasy.svg", genre: "Fantasy" },
];

export const totalGenres = genres.length;

function CarouselProgressBar() {
  const { api } = useCarousel();
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [totalSlides, setTotalSlides] = React.useState(0);

  React.useEffect(() => {
    if (!api) return;

    const updateSlideInfo = () => {
      setCurrentSlide(api.selectedScrollSnap());
      setTotalSlides(api.scrollSnapList().length);
    };

    api.on("select", updateSlideInfo);
    updateSlideInfo();

    return () => {
      api.off("select", updateSlideInfo);
    };
  }, [api]);

  const progress =
    totalSlides > 0 ? ((currentSlide + 1) / totalSlides) * 100 : 0;

  const handleProgressBarClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!api || totalSlides === 0) return;

    const rect = event.currentTarget.getBoundingClientRect();
    const clickX = event.clientX - rect.left;
    const clickPercentage = (clickX / rect.width) * 100;

    const targetSlide = Math.floor((clickPercentage / 100) * totalSlides);
    const clampedSlide = Math.max(0, Math.min(targetSlide, totalSlides - 1));

    api.scrollTo(clampedSlide);
  };

  return (
    <div className="mt-5 w-full">
      <div
        className="bg-black-15 hover:bg-black-20 mx-auto h-1 w-full cursor-pointer overflow-hidden rounded-full transition-colors duration-200 lg:w-[30vw] xl:h-1.5"
        onClick={handleProgressBarClick}
      >
        <div
          className="pointer-events-none h-full rounded-full bg-red-50 transition-all duration-300 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}

function PageCarousel() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true }),
  );

  return (
    <div className="w-full">
      <div className="subContainer">
        <TextContainer
          title="Explore our wide variety of categories"
          description="Whether you're looking for a comedy to make you laugh, a drama to make you think, or a documentary to learn something new"
        />
      </div>
      <div className="relative px-12">
        <Carousel
          plugins={[plugin.current]}
          className="w-full"
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
        >
          <CarouselContent>
            {genres.map((g, idx) => (
              <CarouselItem
                key={idx}
                className="basis-1/1 sm:basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5"
              >
                <GenreCard img={g.img} genre={g.genre} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="text-white" />
          <CarouselNext className="text-white" />
          <CarouselProgressBar />
        </Carousel>
      </div>
    </div>
  );
}

export default PageCarousel;
