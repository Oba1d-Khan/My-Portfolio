import React from "react";

const CTA = () => {
  return (
    <div>
      <div class="container my-24 px-6 mx-auto">
        <section class="mb-32 text-yellow-400 text-center">
          <div class="px-6 py-12 md:px-12">
            <h2 class="text-5xl my-12 font-bold tracking-tight">
              Got an inspiring project concept? <br />
              <span class="text-white text-4xl">
                Let's ignite the possibilities and turn it into reality
                together!
              </span>
            </h2>
            <a
              class="inline-block px-7 py-3 bg-yellow-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-yellow-500 hover:shadow-lg focus:bg-yellow-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-yellow-500 active:shadow-lg transition duration-150 ease-in-out mb-2 md:mr-2"
              href="#!"
              role="button"
              data-mdb-ripple="true"
              data-mdb-ripple-color="light"
            >
              Get started
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CTA;
