import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { cn } from "@/lib/utils";

export const values = ["monthly", "yearly"] as const;
export type BillingPeriod = (typeof values)[number];

interface ToggleSwitchProps {
  value: BillingPeriod;
  onChange: (value: BillingPeriod) => void;
}

function ToggleSwitch({ value, onChange }: ToggleSwitchProps) {
  return (
    <ToggleGroup
      type="single"
      className="bg-black-6 border-black-15 rounded-lg border-2 p-2 transition-all duration-300 ease-in-out"
      value={value}
      onValueChange={(newValue) =>
        newValue && onChange(newValue as BillingPeriod)
      }
      aria-label="Toggle between monthly and yearly billing"
    >
      <ToggleGroupItem
        value="monthly"
        aria-label="Toggle monthly"
        className={cn(
          "data-[state=on]:bg-black-12 data-[state=off]:text-grey-60 rounded-lg px-4 py-5 text-xs data-[state=on]:text-white sm:px-5 sm:py-6 sm:text-sm xl:px-6 xl:py-8 xl:text-lg",
        )}
      >
        <span>Monthly</span>
      </ToggleGroupItem>
      <ToggleGroupItem
        value="yearly"
        aria-label="Toggle yearly"
        className={cn(
          "data-[state=on]:bg-black-12 data-[state=off]:text-grey-60 rounded-lg px-4 py-5 text-xs data-[state=on]:text-white sm:px-5 sm:py-6 sm:text-sm xl:px-6 xl:py-8 xl:text-lg",
        )}
      >
        <span>Yearly</span>
      </ToggleGroupItem>
    </ToggleGroup>
  );
}
export default ToggleSwitch;
