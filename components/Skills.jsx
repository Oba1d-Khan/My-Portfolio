import React from "react";

const Skills = () => {
  return (
    <div name="skills" id="Skills">
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full ">
        <div className="">
          <p className="font-bold text-4xl border-b-2 border-white-400 p-2 flex justify-center">
            SKILLS
          </p>
          <p className="p-4 text-xl">
            <i>I have worked with these technologies !</i>
          </p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          <div className="shadow-md hover:shadow-orange-500 hover:scale-105 duration-200 py-2 rounded-full">
            <img src="/html5-logo.png" alt="" className="w-20 mx-auto" />
            <p className="mt-4">HTML</p>
          </div>
          <div className="shadow-md hover:shadow-blue-500 hover:scale-105 duration-200 py-2 rounded-full">
            <img src="/css-logo.png" alt="" className="w-20 h-30 mx-auto" />
            <p className="mt-4">CSS</p>
          </div>
          <div className="shadow-md hover:shadow-sky-500 hover:scale-105 duration-200 py-2 rounded-full">
            <img
              src="/tailwind-logo.png"
              alt=""
              className="w-20  mx-auto mt-2"
            />
            <p className="mt-4">Tailwind</p>
          </div>
          <div className="shadow-md hover:shadow-yellow-300 hover:scale-105 duration-200 py-2 rounded-full">
            <img src="/js-logo.png" alt="" className="w-20 mx-auto" />
            <p className="mt-4">JavaScript</p>
          </div>

          <div className="shadow-md hover:shadow-blue-600 hover:scale-105 duration-200 py-2 rounded-full">
            <img src="/ts-logo.png" alt="" className="w-20 mx-auto" />
            <p className="mt-4">TypeScript</p>
          </div>
          <div className="shadow-md hover:shadow-sky-400 hover:scale-105 duration-200 py-2 rounded-full">
            <img src="/React-logo.png" alt="" className="w-20 mx-auto" />
            <p className="mt-4">React.JS</p>
          </div>
          <div className="shadow-md hover:shadow-gray-900 hover:scale-105 duration-200 py-2 rounded-full">
            <img src="/next-logo.png" alt="" className="w-20 mx-auto" />
            <p className="mt-4">Next.JS</p>
          </div>
          <div className="shadow-md hover:shadow-red-700 hover:scale-105 duration-200 py-2 rounded-full">
            <img src="/npm-logo.png" alt="" className="w-20 mx-auto" />
            <p className="mt-4">NPM</p>
          </div>
          <div className="shadow-md hover:shadow-orange-700 hover:scale-105 duration-200 py-2 rounded-full">
            <img src="/java-logo.png" alt="" className="w-20 mx-auto" />
            <p className="mt-4">Java</p>
          </div>
          <div className="shadow-md  hover:shadow-sky-400 hover:scale-105 duration-200 py-2 rounded-full">
            <img
              src="/docker-logo.png"
              alt=""
              className="w-30 h-20 object-cover mx-auto"
            />
            <p className="mt-4">Docker</p>
          </div>
          <div className="shadow-md  hover:shadow-blue-600 hover:scale-105 duration-200 py-2 rounded-full">
            <img src="/k8.png" alt="" className="w-20 mx-auto" />
            <p className="mt-4">Kubernetes</p>
          </div>
          <div className="shadow-md  hover:shadow-gray-900 hover:scale-105 duration-200 py-2 rounded-full">
            <img src="/linux-logo.png" alt="" className="w-20 mx-auto" />
            <p className="mt-4">Linux</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
