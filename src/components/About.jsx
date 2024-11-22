import React from "react";

export default function About() {

  return (
    <section id="about">
      <div className="container px-5 py-10 mx-auto flex md:flex-row flex-col items-center lg:px-40">
        <div className="lg-flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hi, I'm Sushil.
            <br className="hidden lg:inline-block" />I love to build products.
          </h1>
          <p className="mb-8 leading-relaxed">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi
            sequi aliquid qui, aspernatur obcaecati ea corrupti doloremque
            eligendi ex, amet reiciendis quaerat earum cupiditate fuga minus
            praesentium porro exercitationem enim!
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-2 focus:outline-none hover:bg-green-600 rounded text-lg"
            >
              Connect with me
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg"
            >
              See My Projects
            </a>
          </div>
        </div>
        <div className="lg:mx-w-lg md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            src="https://images.unsplash.com/photo-1603575448360-153f093fd0b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzd8fGRldmVsb3BlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60"
            // src="./Sushil_dp.png"
            alt="hero"
          />
        </div>
      </div>
    </section>
  );
}
