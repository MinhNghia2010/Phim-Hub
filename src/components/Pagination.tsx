import { Button } from "@/components/ui/button";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { totalGenres } from "./PageCarousel";

interface PaginationProps {
  onPrev?: () => void;
  onNext?: () => void;
  currentIndex?: number;
  total?: number;
  onIndicatorClick?: (idx: number) => void;
}

function Pagination({
  onPrev,
  onNext,
  currentIndex = 0,
  total = Math.ceil(totalGenres / 5),
}: PaginationProps) {
  return (
    <div className="bg-black-6 border-black-10 ml-20 hidden h-min w-min rounded-xl border-4 p-3 sm:flex xl:p-4">
      <Button variant="secondary" size="icon" onClick={onPrev}>
        <ChevronLeftIcon size={24} />
      </Button>
      <div className="indicator-container mx-4 flex w-20 items-center justify-between space-x-1">
        {Array.from({ length: total }).map((_, i) => (
          <div
            key={i}
            className={`indicator transition-all duration-200 ${
              i === currentIndex ? "bg-red-45" : "bg-black-20"
            }`}
          ></div>
        ))}
      </div>
      <Button variant="secondary" size="icon" onClick={onNext}>
        <ChevronRightIcon size={24} />
      </Button>
    </div>
  );
}

export default Pagination;
