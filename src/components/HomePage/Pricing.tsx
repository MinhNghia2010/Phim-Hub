import { Button } from "../ui/button";

const pricingPlans = [
  {
    name: "Basic Plan",
    description:
      "Enjoy an extensive library of movies and shows, featuring a range of content, including recently released titles and classics.",
    priceMonthly: "$9.99",
    priceYearly: "$99.99",
  },
  {
    name: "Standard Plan",
    description:
      "Unlock HD streaming on two devices simultaneously, along with access to our full content library and exclusive originals.",
    priceMonthly: "$12.99",
    priceYearly: "$129.99",
  },
  {
    name: "Premium Plan",
    description:
      "Experience the best with 4K Ultra HD streaming on up to four devices at once, plus all the benefits of our Standard Plan.",
    priceMonthly: "$14.99",
    priceYearly: "$149.99",
  },
];

interface PricingProps {
  billingPeriod: "monthly" | "yearly";
}

function Pricing({ billingPeriod }: PricingProps) {
  return (
    <div className="grid grid-cols-1 gap-5 transition-all duration-300 ease-in-out sm:gap-6 lg:grid-cols-2 xl:gap-8 2xl:grid-cols-3">
      {pricingPlans.map((plan) => (
        <div
          key={plan.name}
          className="bg-black-10 border-black-15 rounded-lg border-2 p-6 lg:p-10 xl:p-13"
        >
          <h3 className="mb-2 text-lg font-bold text-white md:text-xl xl:text-2xl">
            {plan.name}
          </h3>
          <p className="text-grey-60 text-sm md:text-base xl:text-lg">
            {plan.description}
          </p>
          <div className="my-8 lg:my-10 xl:my-10">
            <span className="text-[24px] font-bold text-white md:text-[30px] xl:text-[36px]">
              {billingPeriod === "monthly"
                ? plan.priceMonthly
                : plan.priceYearly}
            </span>
            <span className="text-grey-60 text-sm md:text-base xl:text-lg">
              {billingPeriod === "monthly" ? " / month" : " / year"}
            </span>
          </div>
          <div className="flex w-full gap-3 lg:justify-between lg:gap-4 xl:gap-5 max-[426px]:flex-col">
            <Button className="bg-black-6 border-black-15 rounded-md border-2 py-4 text-sm text-white lg:grow-1 lg:py-5 lg:text-base xl:py-6 2xl:text-lg hover:bg-black active:bg-black-12">
              Start Free Trial
            </Button>
            <Button className="bg-red-45 rounded-md py-4 text-sm text-white lg:grow-1 lg:py-5 lg:text-base xl:py-6 2xl:text-lg hover:bg-red-800 active:bg-red-950">
              Choose Plan
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Pricing;
