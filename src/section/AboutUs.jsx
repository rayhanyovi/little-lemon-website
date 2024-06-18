import React from "react";

function AboutUs() {
  return (
    <section
      id="about-us"
      className="px-8 relative flex flex-col-reverse md:flex-row lg:flex-row pt-20 lg:px-36 md:px-24 "
    >
      <div className="flex flex-col w-full gap-2">
        <h1 className="text-3xl font-bold text-left">Our Story</h1>
        <p className="text-sm lg:text-lg text-left">
          Get to know the heart and soul behind Little Lemon, <br /> where
          passion for food meets community.
        </p>
        <div className="flex flex-col-reverse md:flex-row mt-8 h-fit gap-8 md:gap-16">
          <div className="w-full md:w-3/5">
            <p className="text-sm md:text-base xl:text-lg 2xl:text-2xl">
              Based in Chicago, Illinois, Little Lemon is a family-owned
              Mediterranean restaurant that masterfully combines traditional
              recipes with a modern twist. Our chefs, inspired by the rich
              culinary heritage of Italy, Greece, and Turkey, create a diverse
              menu of 12–15 seasonal delights that capture the essence of the
              Mediterranean. The rustic and relaxed atmosphere, paired with
              moderate prices, makes Little Lemon a beloved spot for any meal of
              the day.
              <br />
              <br />
              Little Lemon is the realization of a dream shared by two Italian
              brothers, Mario and Adrian. After moving to the United States,
              they sought to bring the authentic flavors of their homeland to
              their new community. Mario, with his extensive experience as a
              chef in Italy, crafts the menu using cherished family recipes.
              Adrian, on the other hand, spearheads the marketing efforts and
              has been instrumental in expanding the menu to include a broader
              range of Mediterranean cuisines. Together, they have created a
              restaurant that is not just a place to eat, but a destination that
              transports diners to the sun-kissed shores of the Mediterranean.
            </p>
            <br />
            <br />
          </div>
          <div className="flex flex-row md:flex-col gap-8 w-full md:w-2/5 md:-mt-24">
            <div className="flex lg:-mt-10">
              <div className="relative z-30 h-fit w-fit overflow-visible">
                <div className="bg-[#495E57] absolute top-[0.5rem] left-[0.5rem] z-[-1] w-full h-full"></div>
                <img
                  src={`${process.env.PUBLIC_URL}/restaurant.png`}
                  alt="hero"
                  className="sm:w-full lg:w-[17rem] z-50 h-auto"
                />
              </div>
            </div>
            <div className="flex justify-end ">
              <div className="relative z-30 h-fit w-fit overflow-visible">
                <div className="bg-[#495E57] absolute top-[0.5rem] left-[0.5rem] z-[-1] w-full h-full"></div>
                <img
                  src={`${process.env.PUBLIC_URL}/Mario_Adrian.png`}
                  alt="hero"
                  className=" lg:w-[19rem] z-50 h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;

/*          <div className="relative ">
            <div className="relative w-[24rem] h-[18rem]">
              <img
                alt="Restaurant"
                className="w-full h-full object-cover relative z-10"
                src={`${process.env.PUBLIC_URL}/restaurant.png`}
              />
              <div className="bg-[#495E57] absolute h-full z-[-1]" />
            </div>
            
            <p className="font-bold mb-4">Check our location here!</p>
            <div className="w-full flex flex-row">
              <iframe
                width="450"
                height="250"
                frameborder="0"
                scrolling="no"
                marginheight="0"
                marginwidth="0"
                src="https://maps.google.com/maps?width=100%25&amp;height=400&amp;hl=en&amp;q=19/20%20Royal%20Hibernian%20Way,%20Duke%20Lane%20Upper,%20Dublin%202%20Dublin%202,%20Dublin,%20D02%20K772,%20Ireland+(Little%20Lemon%20Restaurant)&amp;t=&amp;z=16&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              >
                <a href="https://www.gps.ie/">gps vehicle tracker</a>
              </iframe>
              <div className="flex flex-row gap-4 w-48">
                <i className="fi fi-rs-marker"></i>
                <p className="text-gray-400 italic text-xs">
                  Little Lemon, 19/20 Royal Hibernian Way, Duke Lane Upper,
                  Dublin 2 Dublin 2, Dublin, D02 K772, Ireland
                </p>
              </div>
            </div>
            */
