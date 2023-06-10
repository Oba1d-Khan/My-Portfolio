import React from "react";

const Home = () => {
  function GoToPortfolio() {
    window.location.href = "#Projects";
  }

  return (
    <section className="text-white  body-font ">
      <div className="container mx-auto my-24 flex px-5  items-center justify-center flex-col">
        <img
          className=" lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
          alt="hero"
          src="circle-dp.png"
        />
        <div className="text-center lg:w-2/3 w-full">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white ">
            Muhammad Obaid Ullah Khan
          </h1>
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white ">
            Front End Developer
          </h1>
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white ">
            Based in Pakistan
          </h1>
          <p className="mb-8 leading-relaxed">
            As a Front-End Web Developer, I'm passionate about creating
            beautiful and user-friendly digital experiences that can make a
            difference in people's lives. I find joy in the challenge of
            designing interfaces that are both aesthetically pleasing and
            intuitive to use. I believe that good design is not just about
            making things look pretty, but it's also about solving problems and
            enhancing the user's experience.
          </p>

          <div className="flex justify-center">
            <button
              className="inline-flex text-white bg-yellow-500 border-0 py-2 px-6 focus:outline-none rounded text-lg hover:text-gray-800 hover:transition-all duration-3500   "
              onClick={GoToPortfolio}
            >
              PortFolio
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 ml-2 my-auto hover:rotate-180"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 15.66L3.53 9.19a.75.75 0 111.06-1.06L10 13.54l5.41-5.41a.75.75 0 111.06 1.06L10 15.66z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
