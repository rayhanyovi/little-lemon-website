import { Link } from "react-scroll";
import React from "react";
function Hero() {
  return (
    <header
      id="home"
      className="px-8 relative flex flex-col-reverse md:flex-row lg:flex-row pt-20 gap-8 lg:px-36 md:px-24 overflow-hidden"
    >
      <img
        src={`${process.env.PUBLIC_URL}/leaves.png`}
        className="w-96 z-10 absolute -top-10 md:-right-20 md:-top-10 md:w-[35rem]"
        alt=""
      />
      <div className="flex flex-col w-full gap-8 z-30 md:w-fit">
        <h1 className="text-4xl lg:text-5xl font-bold  xl:text-6xl">
          Seasonal Delights with Mediterranean Roots
        </h1>
        <p className="md:text-lg lg:text-xl">
          "Enjoy a dynamic menu that changes with the seasons, featuring
          Mediterranean classics and innovative new dishes."
        </p>
        <Link
          to="reserve"
          smooth={true}
          duration={250}
          className="bg-[#F4CE14] w-fit px-2 py-1 md:px-4 py-2 font-semibold hover:bg-yellow-300 duration-200 cursor-pointer"
        >
          Reservation
        </Link>

        <div className="flex flex-row gap-2 ">
          <div className="flex flex-row items-center relative w-20">
            <img
              className="rounded-full h-10 border border-slate-100"
              src={`${process.env.PUBLIC_URL}/stark.jpg`}
              alt=""
            />
            <img
              className="rounded-full h-10 absolute left-5 border-2 border-slate-100"
              src={`${process.env.PUBLIC_URL}/stark.jpg`}
              alt=""
            />
            <img
              className="rounded-full h-10 absolute left-9 border-2 border-slate-100"
              src={`${process.env.PUBLIC_URL}/stark.jpg`}
              alt=""
            />
          </div>
          <div>
            <p>Our Happy Customer</p>
            <div className="flex flex-row gap-2 text-sm md:text-base">
              <i className="fi fi-ss-star text-xs text-[#F4CE14] lg:text-base"></i>
              <span>
                <b>4.9</b> (1.5K Reviews)
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="relative z-30 h-fit">
        <div className="bg-[#495E57] absolute top-[0.5rem] left-[0.75rem] z-[-1] w-full h-full"></div>
        <img
          src={`${process.env.PUBLIC_URL}/hero.png`}
          alt="hero"
          className="sm:w-full md:w-[2000px] lg:w-[80rem] z-50 h-auto"
        />
      </div>
    </header>
  );
}

export default Hero;
