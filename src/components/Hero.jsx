import React from "react";

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-[#f7f9ff] flex items-center">
      {/* Background soft circles */}
      <div className="absolute top-[-80px] left-[-80px] w-[250px] h-[250px] rounded-full bg-[#e9efff] opacity-60 blur-2xl"></div>
      <div className="absolute bottom-[-120px] right-[-120px] w-[280px] h-[280px] rounded-full bg-[#e9efff] opacity-60 blur-2xl"></div>

      {/* Centered content */}
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center relative w-full">
        {/* LEFT SIDE */}
        <div className="space-y-6 z-10">
          {/* Status chip */}
          <div className="inline-flex items-center gap-2 bg-white shadow-sm px-4 py-2 rounded-full text-sm font-medium text-gray-700">
            <span className="w-2.5 h-2.5 rounded-full bg-green-400"></span>
            Available for work
          </div>

          {/* Heading */}
          <h1 className="text-5xl font-bold leading-tight">
            Hi, I'm <br />
            <span className="bg-gradient-to-r from-[#1F2A45] to-[#2F5CFF] bg-clip-text text-transparent">
              Tsion
            </span>
          </h1>

          <p className="text-lg font-medium text-gray-700">
            Front-End Developer & UI Builder
          </p>

          <p className="text-gray-600 max-w-md">
            I create pixel-perfect, responsive web experiences that blend
            beautiful design with seamless functionality. Let's build something
            amazing together.
          </p>

          {/* Buttons */}
          <div className="flex gap-4 pt-4">
            <button className="bg-gradient-to-r from-[#1F2A45] to-[#2F5CFF] transition text-white font-medium px-6 py-3 rounded-lg shadow-md flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M4 3a1 1 0 000 2h12a1 1 0 100-2H4zM4 7a1 1 0 000 2h12a1 1 0 100-2H4zM3 12a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM4 15a1 1 0 000 2h8a1 1 0 100-2H4z" />
              </svg>
              View My Work
            </button>

            <button className="border border-gray-300 hover:bg-gray-50 transition font-medium px-6 py-3 rounded-lg flex items-center gap-2 text-gray-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M13 7H7v6h6V7z" />
                <path
                  fillRule="evenodd"
                  d="M5 3a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V7l-4-4H5zm7 4V3.5L15.5 7H12z"
                  clipRule="evenodd"
                />
              </svg>
              Download CV
            </button>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex justify-center z-10">
          <div className="rounded-xl overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.12)]">
            <img
              src="/src/assets/Tsion.png"
              alt="Professional person"
              className="w-[420px] h-[320px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
