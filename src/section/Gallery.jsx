import React from "react";

function Gallery() {
  return (
    <section
      id="about-us"
      className="px-8 relative flex flex-col-reverse md:flex-row lg:flex-row pt-20 lg:px-36 md:px-24"
    >
      <div className="flex flex-col w-full gap-2">
        <h1 className="text-3xl font-bold text-right">Flavorful Moments</h1>
        <p className="text-sm lg:text-lg text-right">
          Step into the vibrant tapestry of Little Lemon's experience through
          our curated gallery, <br />
          where cherished memories are immortalized and shared.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 h-fit p-4">
          <div className="row-span-2">
            <img
              src={`${process.env.PUBLIC_URL}/image 22.png`}
              alt="Image 1"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="">
            <img
              src={`${process.env.PUBLIC_URL}/lasagna.jpg`}
              alt="Image 2"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="">
            <img
              src={`${process.env.PUBLIC_URL}/restaurant.png`}
              alt="Image 3"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="row-span-3">
            <img
              src={`${process.env.PUBLIC_URL}/Mario_Adrian.png`}
              alt="Image 4"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="grid-item">
            <img
              src={`${process.env.PUBLIC_URL}/Mario_Adrian.png`}
              alt="Image 5"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="row-span-2 col-span-2 ">
            <img
              src={`${process.env.PUBLIC_URL}/Mario_Adrian.png`}
              alt="Image 7"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="row-span-2">
            <img
              src={`${process.env.PUBLIC_URL}/Mario_Adrian.png`}
              alt="Image 8"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="grid-item">
            <img
              src={`${process.env.PUBLIC_URL}/Mario_Adrian.png`}
              alt="Image 9"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Gallery;
