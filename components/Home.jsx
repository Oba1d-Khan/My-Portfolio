import React from "react";

const Home = () => {
  return (
    <section class="text-white  body-font ">
      <div class="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
        <img
          class=" lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
          alt="hero"
          src="profile-favicon.svg"
        />
        <div class="text-center lg:w-2/3 w-full">
          <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-white ">
            Muhammad Obaid Ullah Khan
          </h1>
          <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-white ">
            Front End Developer
          </h1>
          <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-white ">
            Based in Pakistan
          </h1>
          <p class="mb-8 leading-relaxed">
            As a Front-End Web Developer, I'm passionate about creating
            beautiful and user-friendly digital experiences that can make a
            difference in people's lives. I find joy in the challenge of
            designing interfaces that are both aesthetically pleasing and
            intuitive to use. I believe that good design is not just about
            making things look pretty, but it's also about solving problems and
            enhancing the user's experience.
          </p>

          {/* Buttons */}

          <div class="flex justify-center">
            <button class="inline-flex text-white bg-yellow-500 border-0 py-2 px-6 focus:outline-none hover:text-indigo-500 rounded text-lg">
              Button
            </button>
            <button class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
              Button
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
