import React from "react";

const Projects = () => {
  return (
    <div id="Projects">
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full ">
        <p className="font-bold text-4xl border-b-2 border-white-400 p-2 flex justify-center">
          PROJECTS
        </p>
        <p className="p-4 mt-10 text-xl">
          <i>Have a look at my Projects ! </i>
        </p>
        <section class="text-gray-600 body-font">
          <div class="container px-5 pt-10 p-24 mx-auto">
            <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
              <div class="p-4 md:w-1/3 sm:mb-0 mb-6">
                <div class="rounded-lg h-64 overflow-hidden">
                  <img
                    alt="content"
                    class="object-cover object-center h-full w-100"
                    src="ecommerce.jpg"
                  />
                </div>
                <h2 class="text-xl font-medium title-font text-white mt-5">
                  E-commerce store
                </h2>
                <p class="text-base leading-relaxed mt-2">
                  Swag shoivdigoitch literally meditation subway tile tumblr
                  cold-pressed. Gastropub street art beard dreamcatcher neutra,
                  ethical XOXO lumbersexual.
                </p>
                <a class="text-yellow-500 inline-flex items-center mt-3">
                  Learn More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
              <div class="p-4 md:w-1/3 sm:mb-0 mb-6">
                <div class="rounded-lg h-64 overflow-hidden">
                  <img
                    alt="content"
                    class="object-cover object-center h-full w-full"
                    src="https://dummyimage.com/1204x504"
                  />
                </div>
                <h2 class="text-xl font-medium title-font text-white mt-5">
                  Weather Application
                </h2>
                <p class="text-base leading-relaxed mt-2">
                  Swag shoivdigoitch literally meditation subway tile tumblr
                  cold-pressed. Gastropub street art beard dreamcatcher neutra,
                  ethical XOXO lumbersexual.
                </p>
                <a class="text-yellow-500 inline-flex items-center mt-3">
                  Learn More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
              <div class="p-4 md:w-1/3 sm:mb-0 mb-6">
                <div class="rounded-lg h-64 overflow-hidden">
                  <img
                    alt="content"
                    class="object-cover object-center h-full w-full"
                    src="https://dummyimage.com/1205x505"
                  />
                </div>
                <h2 class="text-xl font-medium title-font text-white mt-5">
                  Travel Planner
                </h2>
                <p class="text-base leading-relaxed mt-2">
                  Swag shoivdigoitch literally meditation subway tile tumblr
                  cold-pressed. Gastropub street art beard dreamcatcher neutra,
                  ethical XOXO lumbersexual.
                </p>
                <a class="text-yellow-500 inline-flex items-center mt-3">
                  Learn More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Projects;
