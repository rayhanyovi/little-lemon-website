const dummyData = [
  {
    title: "Nasi Mak Limah Biadab with Peanut Sauce",
    description:
      "Bold and flavorful dish that combines fragrant jasmine rice with spicy sambal, tender marinated chicken, and a medley of fresh vegetables.",
    image: "/food.png",
    isVegan: true,
  },
  {
    title: "Itiak Lado Mudo",
    description:
      "Known for its rich, spicy flavors and tender meat, offering an authentic taste of Indonesian culinary heritage",
    image: "/food.png",
    isVegan: true,
  },
  {
    title: "Ikan Asam Padeh",
    description:
      "Classic Indonesian dish, featuring fish cooked in a tangy and spicy tamarind-based sauce.",
    image: "/food.png",
  },
  {
    title: "Ikan Asam Padeh",
    description:
      "Classic Indonesian dish, featuring fish cooked in a tangy and spicy tamarind-based sauce.",
    image: "/food.png",
    isVegan: true,
  },
];

function MenuCard() {
  return (
    <div className="flex flex-row w-full overflow-x-auto gap-4 snap-x">
      {dummyData.map((item, index) => (
        <div
          key={index}
          className="flex flex-col w-48 h-fit flex-shrink-0 items-center p-4 shadow-lg border md:w-60 lg:w-72 snap-center snap-mandatory"
        >
          <img
            src={`${process.env.PUBLIC_URL}${item.image}`}
            alt={item.title}
            className="h-40 w-40 object-cover"
          />
          <div className="flex flex-col gap-4 w-48 h-64 px-5 md:px-2 justify-between">
            <div className="flex flex-col gap-2">
              {" "}
              <p className="font-bold text-center line-clamp-3 overflow-elipsis">
                {item.title}
              </p>
              <p className="text-center    line-clamp-5 overflow-elipsis text-sm md:text-base">
                {item.description}
              </p>
            </div>

            <div className="w-full flex flex-row justify-center gap-3">
              {item.isVegan ? (
                <p className="border w-8 h-8 text-center rounded-full text-gray-400 border-gray-400 hover:text-green-500 hover:border-green-500 duration-200">
                  x
                </p>
              ) : (
                <></>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default MenuCard;
