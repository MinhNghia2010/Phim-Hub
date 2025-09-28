import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";
import { Card, CardHeader, CardTitle } from "../ui/card";

interface GenreCardProps {
  img: string;
  genre: string;
}

function GenreCard({ img, genre }: GenreCardProps) {
  return (
    <Card className="border-black-15 bg-black-10 hover:border-red-45 flex aspect-[6/7] flex-col border-1 p-5 text-sm text-white transition-all duration-150 sm:p-6 sm:text-[1rem] xl:text-lg">
      <div className="relative w-full flex-1 overflow-hidden mask-b-from-50% mask-b-to-100%">
        <img src={img} alt={genre} className="h-full w-full object-cover" />
      </div>

      <div className="flex items-center justify-between">
        <CardHeader className="p-0">
          <CardTitle>{genre}</CardTitle>
        </CardHeader>
        <Button className="p-0">
          <ArrowRight size={20} />
        </Button>
      </div>
    </Card>
  );
}

export default GenreCard;
