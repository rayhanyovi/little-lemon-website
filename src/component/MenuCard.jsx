import { Tooltip } from "antd";
const dummyData = [
  {
    title: "Greek Salad",
    description:
      "A refreshing salad made with tomatoes, cucumbers, olives, onions, and feta cheese, seasoned with olive oil and oregano.",
    image: "/greek-salad.png",
    className: "scale-125",
    isVegan: true,
  },
  {
    title: "Hummus Plate",
    description:
      "Creamy chickpea dip served with pita bread, drizzled with olive oil and sprinkled with paprika.",
    image: "/hummus-plate.png",
    isVegan: true,
  },
  {
    title: "Mediterranean Grilled Chicken",
    description:
      "Tender grilled chicken marinated in Mediterranean herbs and spices, served with grilled vegetables.",
    image: "/grilled-chicken.png",
    className: "scale-[0.85]",
  },
  {
    title: "Caprese Salad",
    description:
      "Fresh salad made with tomatoes, mozzarella cheese, basil leaves, and balsamic vinegar.",
    image: "/caprese-salad.png",
    isVegan: true,
  },
  {
    title: "Falafel Wrap",
    description:
      "Crunchy falafel balls wrapped in pita bread with lettuce, tomatoes, cucumbers, and tahini sauce.",
    image: "/falavel-wrap.png",
    isVegan: true,
    className: "scale-95",
  },
];

function MenuCard() {
  return (
    <div className="flex flex-row w-full overflow-x-auto gap-4 snap-x">
      {dummyData.map((item, index) => (
        <div
          key={index}
          className="flex flex-col w-48 h-fit flex-shrink-0 w-fit items-center p-4 lg:px-8 shadow-lg border md:w-60 lg:w-72 snap-center snap-mandatory gap-2"
        >
          <img
            src={`${process.env.PUBLIC_URL}${item.image}`}
            alt={item.title}
            className={`h-40 w-40 object-cover ${item.className}`}
          />
          <div className="flex flex-col gap-4 h-64 px-5 md:px-2 justify-between">
            <div className="flex flex-col gap-2">
              {" "}
              <p className="font-bold text-center h-12 line-clamp-3 overflow-elipsis">
                {item.title}
              </p>
              <p className="text-center line-clamp-5 overflow-elipsis text-sm md:text-base">
                {item.description}
              </p>
            </div>

            <div className="w-full flex flex-row justify-center gap-3">
              {item.isVegan ? (
                <Tooltip
                  placement="top"
                  title={"Vegan Friendly"}
                  mouseEnterDelay={0}
                >
                  <div className="border w-8 h-8 pt-1 text-center rounded-full text-gray-400 border-gray-400 hover:text-green-500 hover:border-green-500 duration-400">
                    <i class="fi fi-ss-leaf"></i>
                  </div>
                </Tooltip>
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
