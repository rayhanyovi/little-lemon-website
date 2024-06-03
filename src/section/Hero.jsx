function Hero() {
  return (
    <header className="flex flex-row items-end px-36 py-20 gap-8">
      <div className="flex flex-col w-10/12 gap-8 z-30">
        <h1 className="text-5xl font-bold">
          Seasonal Delights with Mediterranean Roots
        </h1>
        <p className="text-xl">
          "Enjoy a dynamic menu that changes with the seasons, featuring
          Mediterranean classics and innovative new dishes."
        </p>
        <button className="bg-[#F4CE14] w-fit px-4 py-2 font-semibold hover:bg-yellow-300 duration-200">
          Reserve Now
        </button>
        <div className="flex flex-row gap-2">
          <div className="flex flex-row items-center relative w-20">
            <img className="rounded-full h-10" src="/stark.jpg"></img>
            <img
              className="rounded-full h-10 absolute left-5"
              src="/stark.jpg"
            ></img>
            <img
              className="rounded-full h-10 absolute left-9"
              src="/stark.jpg"
            ></img>
          </div>
          <div>
            <p>Our Happy Customer</p>
            <div className="flex flex-row gap-2">
              <i className="fi fi-ss-star text-lg text-[#F4CE14]"></i>{" "}
              <span>
                <b>4.9</b> (1.5K Reviews)
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full relative z-30">
        <img src="/hero.png" alt="hero" className="relative w-11/12 z-20" />
        <div className="bg-[#495E57] h-80 w-11/12 absolute top-5 left-3 z-0"></div>
      </div>

      <img src="/leaves.png" className="w-8/12 z-10 absolute right-0 top-20" />
    </header>
  );
}

export default Hero;
