import { Link } from "react-scroll";
import React from "react";
function Navbar() {
  return (
    <nav className="flex flex-row justify-evenly items-center p-4 border-b-2 border-[#495E57] mx-8 md:mx-20 ">
      <ul className="list-none flex flex-row gap-12 font-semibold w-full justify-center">
        <li>
          <Link
            to="home"
            smooth={true}
            duration={250}
            className="cursor-pointer hover:font-bold duration-200"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="popular-dish"
            smooth={true}
            duration={250}
            className="cursor-pointer hover:font-bold duration-200"
          >
            Menus
          </Link>
        </li>
        <li>
          <Link
            to="review"
            smooth={true}
            duration={250}
            className="cursor-pointer hover:font-bold duration-200"
          >
            Review
          </Link>
        </li>
      </ul>
      <img
        src={`${process.env.PUBLIC_URL}//Asset 16@4x.png`}
        className="h-10 w-full object-contain"
      />
      <ul className="list-none flex flex-row gap-12 font-semibold w-full justify-center">
        <li>
          <Link
            to="about-us"
            smooth={true}
            duration={250}
            className="cursor-pointer hover:font-bold duration-200"
          >
            Our Story
          </Link>
        </li>
        <li>
          <Link
            to="gallery"
            smooth={true}
            duration={250}
            className="cursor-pointer hover:font-bold duration-200"
          >
            Gallery
          </Link>
        </li>
        <li>
          <Link
            to="reserve"
            smooth={true}
            duration={250}
            className="cursor-pointer hover:font-bold duration-200"
          >
            Reservation
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
