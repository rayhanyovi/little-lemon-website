import ReviewCard from "../component/ReviewCard";

function Review() {
  return (
    <header
      id="review"
      className="flex flex-col gap-4 pt-20 px-8 lg:px-36 md:px-24"
    >
      <div className="flex flex-col w-full gap-2">
        <h1 className="text-3xl font-bold text-right">Lemon Love Stories</h1>
        <p className="text-sm lg:text-md text-right">
          Discover our guests' favorites, each crafted with care to showcase
          vibrant Mediterranean flavors and culinary tradition
        </p>
      </div>
      <ReviewCard />
    </header>
  );
}

export default Review;
