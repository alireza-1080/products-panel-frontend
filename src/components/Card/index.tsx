import DeleteButton from "../DeleteButton";
import EditButton from "../EditButton";
import MinimalCard, {
  MinimalCardFooter,
  MinimalCardImage,
  MinimalCardPrice,
  MinimalCardTitle,
} from "../ui/MinimalCard";

const Card = ({
  title,
  price,
  src,
}: {
  title: string;
  price: string;
  src: string;
}) => {
  return (
    <MinimalCard className="m-2 w-full max-w-[460px] min-w-[280px]">
      <MinimalCardImage
        className="h-48 sm:h-64 md:h-80"
        src={src}
        alt={title}
      />
      <div className="flex flex-col gap-2">
        <MinimalCardTitle className="line-clamp-1 text-sm break-words sm:text-base md:text-lg lg:text-xl">
          {title}
        </MinimalCardTitle>
        <MinimalCardPrice>
          <span className="flex items-center gap-1">
            <span className="text-lg font-bold text-green-500">$</span>
            {price}
          </span>
        </MinimalCardPrice>
        <MinimalCardFooter className="flex justify-end gap-2">
          <EditButton />
          <DeleteButton />
        </MinimalCardFooter>
      </div>
    </MinimalCard>
  );
};

export default Card;
