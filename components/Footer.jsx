import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="h-0.5 bg-gradient-to-r from-gray-500 via-white to-gray-500 "></div>

      <div className="text-white ">
        <div className="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col justify-between">
          <a className="flex  title-font font-medium items-center md:justify-start  ">
            <img src="ObaidKhan_Logo.png" className="w-20" alt="" />

            <span className="ml-3 text-2xl">Obaid Khan</span>
          </a>
          <p className="text-sm sm:ml-6 sm:mt-0 mt-4 ">
            © 2023 Portfolio —
            <a
              href="https://github.com/Oba1d-Khan"
              rel="noopener noreferrer"
              className=" ml-1"
              target="_blank"
            >
              @Oba1d-Khan
            </a>
          </p>
        </div>
      </div>
      <div className="h-2 bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 "></div>
    </footer>
  );
};

export default Footer;
