import ReviewCard from "../component/ReviewCard";

function Review() {
  return (
    <section
      id="review"
      className="flex flex-col pt-20 px-8 lg:px-36 md:px-24 gap-8"
    >
      <div className="flex flex-col w-full gap-2">
        <h1 className="text-3xl font-bold text-right  xl:text-4xl">
          Lemon Love Stories
        </h1>
        <p className="text-sm lg:text-md text-right">
          Discover our guests' favorites, each crafted with care to showcase
          vibrant Mediterranean flavors and culinary tradition
        </p>
      </div>
      <ReviewCard />
    </section>
  );
}

export default Review;
