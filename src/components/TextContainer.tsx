interface TextContainerProps {
  title: string;
  description: string;
}

function TextContainer({ title, description }: TextContainerProps) {
  return (
    <div className="m-0">
      <h2 className="mb-4 text-xl text-white sm:mb-6 sm:text-3xl xl:text-5xl">
        {title}
      </h2>
      <p className="text-grey-60 text-sm sm:text-xl">{description}</p>
    </div>
  );
}

export default TextContainer;
