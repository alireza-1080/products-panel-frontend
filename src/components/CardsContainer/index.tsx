import Card from "../Card";

const CardsContainer = () => {
  // TODO: get cards from backend
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
    <div className="flex items-center justify-center">
      <div className="w-full">
        <div className="flex flex-col justify-center rounded-lg p-4">
          <div className="flex flex-wrap items-center justify-center">
            {cards.map((card, index) => (
              <Card key={index} {...card} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardsContainer;
