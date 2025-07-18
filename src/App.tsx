import NavBar from "./components/NavBar";
import MinimalCard, {
  MinimalCardPrice,
  MinimalCardImage,
  MinimalCardTitle,
  MinimalCardFooter,
} from "./components/ui/MinimalCard";
import DeleteButton from "./components/DeleteButton";
import EditButton from "./components/EditButton";

const HomePage = () => {
  const cards = [
    {
      title: "Sick Alireza Aberoumand",
      price: "1000",
      src: "https://plus.unsplash.com/premium_photo-1751835491662-e09a83886291?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2fHx8ZW58MHx8fHx8",
    },
    {
      title: "Sick title",
      price: "1000",
      src: "https://plus.unsplash.com/premium_photo-1751835491662-e09a83886291?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2fHx8ZW58MHx8fHx8",
    },
    {
      title: "Sick title",
      price: "1000",
      src: "https://plus.unsplash.com/premium_photo-1751835491662-e09a83886291?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2fHx8ZW58MHx8fHx8",
    },
    {
      title: "Sick title lorem ipsum dolor sit amet",
      price: "1000",
      src: "https://plus.unsplash.com/premium_photo-1751835491662-e09a83886291?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2fHx8ZW58MHx8fHx8",
    },
    {
      title: "Sick title",
      price: "1000",
      src: "https://plus.unsplash.com/premium_photo-1751835491662-e09a83886291?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2fHx8ZW58MHx8fHx8",
    },
    {
      title: "Sick title",
      price: "1000",
      src: "https://plus.unsplash.com/premium_photo-1751835491662-e09a83886291?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2fHx8ZW58MHx8fHx8",
    },
  ];
  return (
    <div className="container mx-auto">
      <NavBar />
      <div className="mt-10 flex items-center justify-center">
        <div className="w-full">
          <div className="flex flex-col justify-center rounded-lg p-4">
            <div className="flex flex-wrap items-center justify-center">
              {cards.map((card, index) => (
                <MinimalCard
                  className="m-2 w-full max-w-[460px] min-w-[280px]"
                  key={index}
                >
                  <MinimalCardImage
                    className="h-48 sm:h-64 md:h-80"
                    src={card.src}
                    alt={card.title}
                  />
                  <div className="flex flex-col gap-2">
                    <MinimalCardTitle className="line-clamp-1 text-sm break-words sm:text-base md:text-lg lg:text-xl">
                      {card.title}
                    </MinimalCardTitle>
                    <MinimalCardPrice>
                      <span className="flex items-center gap-1">
                        <span className="text-lg font-bold text-green-500">
                          $
                        </span>
                        {card.price}
                      </span>
                    </MinimalCardPrice>
                    <MinimalCardFooter className="flex justify-end gap-2">
                      <EditButton />
                      <DeleteButton />
                    </MinimalCardFooter>
                  </div>
                </MinimalCard>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
