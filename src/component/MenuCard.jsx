const dummyData = [
  {
    title: "Nasi Mak Limah Biadab",
    description:
      "Bold and flavorful dish that combines fragrant jasmine rice with spicy sambal, tender marinated chicken, and a medley of fresh vegetables.",
    image: "/Asset 16@4x.png",
  },
  {
    title: "Itiak Lado Mudo",
    description:
      "Known for its rich, spicy flavors and tender meat, offering an authentic taste of Indonesian culinary heritage",
    image: "/Asset 16@4x.png",
  },
  {
    title: "Ikan Asam Padeh",
    description:
      "Classic Indonesian dish, featuring fish cooked in a tangy and spicy tamarind-based sauce.",
    image: "/Asset 16@4x.png",
  },
];

function MenuCard() {
  return (
    <div className="flex flex-row border-4 border-red-500 w-48 overflow-x-scroll">
      {dummyData.map((item, index) => (
        <div
          key={index}
          className="flex flex-col items-center p-4 border-2 border-green-400 "
        >
          <img
            src={`${process.env.PUBLIC_URL}${item.image}`}
            alt={item.title}
            className="h-10"
          />
          <div className="flex flex-col gap-4">
            <p className="font-bold text-center">{item.title}</p>
            <p className="text-center">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default MenuCard;
