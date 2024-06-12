function Hero() {
  return (
    <header
      id="home"
      className="flex flex-col-reverse pt-20  gap-8 lg:px-36 lg:flex-row overflow-hidden border-4 border-purple-400"
    >
      <div className="flex flex-col w-full gap-8 z-30">
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
            <img
              className="rounded-full h-10 border border-slate-100  border-2 border-slate-100"
              src={`${process.env.PUBLIC_URL}/stark.jpg`}
              alt=""
            ></img>
            <img
              className="rounded-full h-10 absolute left-5 border-2 border-slate-100"
              src={`${process.env.PUBLIC_URL}/stark.jpg`}
              alt=""
            ></img>
            <img
              className="rounded-full h-10 absolute left-9  border-2 border-slate-100"
              src={`${process.env.PUBLIC_URL}/stark.jpg`}
              alt=""
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
      <div className="w-full relative z-30 items-center flex flex-col">
        <img
          src={`${process.env.PUBLIC_URL}/hero.png`}
          alt="hero"
          className="relative w-[25rem] z-20"
        />
        <div className="bg-[#495E57] w-[25rem] h-60 w-full absolute top-10 left-5 z-0"></div>
      </div>

      <img
        src={`${process.env.PUBLIC_URL}/leaves.png`}
        className="w-96 z-10 absolute left-20 top-12 -rotate-12"
        alt=""
      />
    </header>
  );
}

export default Hero;
