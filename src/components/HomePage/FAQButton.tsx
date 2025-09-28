import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

function FAQButton() {
  function handleClick() {
    console.log("Clicked");
  }

  return (
    <Button
      className={cn(
        "bg-red-45 m-0 h-min w-min px-3 py-3 text-sm font-bold text-white lg:px-[14px] lg:py-5 xl:px-[18px] xl:py-6 xl:text-lg",
        "hover:bg-red-800 active:bg-red-950",
      )}
      onClick={handleClick}
    >
      Ask a Question
    </Button>
  );
}

export default FAQButton;
