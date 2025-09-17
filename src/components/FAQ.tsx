import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQData = [
  {
    question: "What is PhimHub?",
    answer: (
      <>
        <p>
          PhimHub is a premier streaming platform that offers a vast library of
          movies and TV shows. With a user-friendly interface and personalized
          recommendations, PhimHub aims to provide an unparalleled viewing
          experience for all users.
        </p>
      </>
    ),
  },
  {
    question: "How much does PhimHub cost?",
    answer: (
      <>
        <p>
          PhimHub offers a variety of subscription plans to suit different
          needs. You can choose from monthly, quarterly, or annual plans, with
          prices starting as low as $9.99 per month.
        </p>
        <p>
          We also offer a free trial period for new users, allowing you to
          explore the platform and its features before committing to a
          subscription.
        </p>
      </>
    ),
  },
  {
    question: "What content is available on PhimHub?",
    answer: (
      <>
        <p>
          PhimHub offers a diverse range of content, including the latest
          movies, classic films, popular TV shows, and exclusive original
          series. With a user-friendly interface, you can easily browse and
          discover new content tailored to your preferences.
        </p>
      </>
    ),
  },
  {
    question: "How can I watch PhimHub?",
    answer: (
      <>
        <p>
          To watch PhimHub, simply sign up for an account on our website or
          mobile app. Once you&apos;re logged in, you can browse our extensive
          library and start streaming your favorite content instantly.
        </p>
      </>
    ),
  },
  {
    question: "Can I download content for offline viewing?",
    answer: (
      <>
        <p>
          Yes, PhimHub allows users to download select content for offline
          viewing. This feature is available on our mobile app, enabling you to
          enjoy your favorite movies and shows without an internet connection.
        </p>
      </>
    ),
  },
];

function FAQ() {
  return (
    <Accordion
      type="single"
      collapsible
      className="w-full"
      defaultValue="item-1"
    >
      {FAQData.map((item, index) => (
        <AccordionItem key={index} value={`item-${index + 1}`} className="mb-4">
          <div className="flex">
            {index < 9 ? (
              <span className="bg-black-12 border-black-15 rounded-xl border-2 p-5 text-base text-white xl:text-xl">
                0{index + 1}
              </span>
            ) : (
              <span className="bg-black-12 border-black-15 rounded-xl border-2 p-5 text-base text-white xl:text-xl">
                {index + 1}
              </span>
            )}
            <AccordionTrigger>{item.question}</AccordionTrigger>
          </div>
          <AccordionContent className="flex flex-col gap-4 text-balance">
            {item.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}

export default FAQ;
