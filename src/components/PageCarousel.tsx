import {
  Carousel,
  CarouselContent,
  CarouselItem,
  useCarousel,
} from "@/components/ui/carousel";
import GenreCard from "@/components/GenreCard";
import Pagination from "@/components/Pagination";
import TextContainer from "@/components/TextContainer";
import { useEffect, useState } from "react";

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

function CarouselPaginationControls() {
  const { api } = useCarousel();
  const [selectedSnap, setSelectedSnap] = useState(0);
  const [snapCount, setSnapCount] = useState(0);
  const STEP = 3;

  useEffect(() => {
    if (!api) return;
    const update = () => {
      setSnapCount(api.scrollSnapList().length);
      setSelectedSnap(api.selectedScrollSnap() ?? 0);
    };
    api.on("select", update);
    update();
    return () => {
      api.off("select", update);
    };
  }, [api]);

  const pageIndex = Math.floor(selectedSnap / STEP);
  const totalPages = Math.ceil(snapCount / STEP);

  const goToPage = (page: number) => {
    if (!api) return;
    const targetSnap = Math.min(page * STEP, snapCount - 1);
    api.scrollTo(targetSnap);
  };

  const prev = () => {
    if (!api) return;
    const target = Math.max(selectedSnap - STEP, 0);
    api.scrollTo(target);
  };

  const next = () => {
    if (!api) return;
    const target = Math.min(selectedSnap + STEP, snapCount - 1);
    api.scrollTo(target);
  };

  return (
    <Pagination
      onPrev={prev}
      onNext={next}
      currentIndex={pageIndex}
      total={totalPages}
      onIndicatorClick={goToPage}
    />
  );
}

function PageCarousel() {
  return (
    <Carousel className="w-full">
      <div className="subContainer flex justify-between">
        <TextContainer
          title="Explore our wide variety of categories"
          description="Whether you're looking for a comedy to make you laugh, a drama to make you think, or a documentary to learn something new"
        />
        <CarouselPaginationControls />
      </div>
      <CarouselContent>
        {genres.map((g, idx) => (
          <CarouselItem key={idx} className="basis-1/5">
            <GenreCard img={g.img} genre={g.genre} />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}

export default PageCarousel;
