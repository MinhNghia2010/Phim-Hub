import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardHeader, CardTitle } from "./ui/card";

interface GenreCardProps {
  img: string;
  genre: string;
}

function GenreCard({ img, genre }: GenreCardProps) {
  return (
    <Card className="border-black-15 bg-black-10 hover:hover:text-red-45 border-1 p-5 text-sm text-white sm:p-6 sm:text-[1rem] xl:p-8 xl:text-lg">
      <div className="relative">
        <img src={img} alt={genre} />
        <div className="fade-cover-up h-full"></div>
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
