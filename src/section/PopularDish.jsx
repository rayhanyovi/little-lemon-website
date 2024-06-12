import MenuCard from "../component/MenuCard";

function PopularDish() {
  return (
    <header id="populardish" className="flex flex-col gap-4 pt-20 lg:px-36">
      <div className="flex flex-col w-full gap-2">
        <h1 className="text-3xl font-bold">Popular Dish</h1>
        <p className="text-md">
          Discover our guests' favorites, each crafted with care to showcase
          vibrant Mediterranean flavors and culinary tradition
        </p>
      </div>
      <MenuCard />
    </header>
  );
}

export default PopularDish;
