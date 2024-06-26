import MenuCard from "../component/MenuCard";

function PopularDish() {
  return (
    <section
      id="popular-dish"
      className="flex flex-col gap-8 pt-20 px-8 lg:px-36 md:px-24"
    >
      <div className="flex flex-col w-full gap-2">
        <h1 className="text-3xl font-bold  xl:text-4xl">Popular Dish</h1>
        <p className="text-sm lg:text-md">
          Discover our guests' favorites, each crafted with care to showcase
          vibrant Mediterranean flavors and culinary tradition
        </p>
      </div>
      <MenuCard />
    </section>
  );
}

export default PopularDish;
