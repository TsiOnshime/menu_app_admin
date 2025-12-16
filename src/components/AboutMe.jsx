import React from "react";
import { FaLinkedinIn, FaGithub, FaEnvelope } from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";
import { FaGraduationCap, FaCoffee } from "react-icons/fa";
import { PiAsteriskBold } from "react-icons/pi";
import { LuLightbulb, LuTarget, LuUsers } from "react-icons/lu";
import Avatar from "../assets/avatar.jpg";
export default function AboutMe() {
  return (
    <section className="w-full bg-[#f7f9ff] py-20" id="about">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-[#1F2A45]">About Me</h2>
        <div className="w-20 h-1 bg-gradient-to-r from-[#1F2A45] to-[#2F5CFF] mx-auto mt-3 rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-3 gap-8">
        {/* LEFT LARGE CARD */}
        <div className="lg:col-span-2 bg-white rounded-2xl shadow-md p-10 space-y-6">
          <h3 className="text-2xl font-semibold text-[#1F2A45]">
            Hello! I'm Tsion Shimelis
          </h3>

          <p className="text-gray-600 leading-relaxed">
            I'm a 4th-year Software Engineering student specializing in
            front-end development, passionate about transforming ideas into
            clean, responsive, and user-friendly digital experiences. I focus on
            writing high-quality, maintainable code and crafting interfaces that
            feel intuitive and modern.
          </p>

          <p className="text-gray-600 leading-relaxed">
            I’ve completed multiple real-world projects using React, Tailwind
            CSS, Firebase, and modern JavaScript tools. Whether it’s building a
            full UI from scratch, improving performance, or polishing the user
            experience, I approach every project with professionalism and
            attention to detail. My goal is to deliver reliable, pixel-perfect
            work that helps clients succeed—on time, every time.
          </p>

          {/* STATS */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-[#f1f5ff] rounded-xl p-5 text-center">
              <h4 className="text-2xl font-bold text-[#1F2A45]">10+</h4>
              <p className="text-gray-500 text-sm">Projects Completed</p>
            </div>

            <div className="bg-[#eef8ff] rounded-xl p-5 text-center">
              <h4 className="text-2xl font-bold text-[#2F5CFF]">98%</h4>
              <p className="text-gray-500 text-sm">Client Satisfaction</p>
            </div>

            <div className="bg-[#e9f9f0] rounded-xl p-5 text-center">
              <h4 className="text-2xl font-bold text-[#1F2A45]">5+</h4>
              <p className="text-gray-500 text-sm">Tech Stacks</p>
            </div>
          </div>

          {/* TAGS */}
          <div className="flex flex-wrap gap-3 pt-4">
            {/* Creative Problem Solver */}
            <span className="px-4 py-2 rounded-full bg-[#f0f4ff] text-gray-700 flex items-center gap-2 text-sm font-medium">
              <LuLightbulb className="text-[#2F5CFF] text-lg" />
              Creative Problem Solver
            </span>

            {/* Detail Oriented */}
            <span className="px-4 py-2 rounded-full bg-[#f0f4ff] text-gray-700 flex items-center gap-2 text-sm font-medium">
              <LuTarget className="text-[#2F5CFF] text-lg" />
              Detail Oriented
            </span>

            {/* Team Player */}
            <span className="px-4 py-2 rounded-full bg-[#f0f4ff] text-gray-700 flex items-center gap-2 text-sm font-medium">
              <LuUsers className="text-[#2F5CFF] text-lg" />
              Team Player
            </span>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="space-y-8">
          {/* PROFILE CARD */}
          <div className="bg-white rounded-2xl shadow-md p-8 text-center">
            <img
              src={Avatar}
              alt="Profile"
              className="w-28 h-28 rounded-full mx-auto mb-4 object-cover"
            />
            <h4 className="text-xl font-semibold text-[#1F2A45]">
              Tsion Shimelis
            </h4>
            <p className="text-gray-500 text-sm mb-4">Front-End Developer</p>

            {/* Social Icons */}
            <div className="flex justify-center gap-4">
              <a
                className="bg-[#2F5CFF] w-10 h-10 text-white rounded-full flex items-center justify-center hover:bg-[#1F2A45] transition"
                href="https://www.linkedin.com/in/tsion-shimelis-44729a397/" target="_blank"
              >
                <FaLinkedinIn size={18} />
              </a>
              <a
                className="bg-[#2F5CFF] w-10 h-10 text-white rounded-full flex items-center justify-center hover:bg-[#1F2A45] transition"
                href="https://github.com/TsiOnshime" target="_blank"
              >
                <FaGithub size={18} />
              </a>
              <a
                className="bg-[#2F5CFF] w-10 h-10 text-white rounded-full flex items-center justify-center hover:bg-[#1F2A45] transition"
                href="mailto:tshimelis23@gmail.com"
              >
                <FaEnvelope size={18} />
              </a>
            </div>
          </div>

          {/* QUICK FACTS */}
          <div className="bg-white rounded-2xl shadow-md p-8">
            <h4 className="text-lg font-semibold text-[#1F2A45] mb-4">
              Quick Facts
            </h4>

            <ul className="space-y-4 text-gray-600">
              <li className="flex items-center gap-3">
                <HiLocationMarker className="text-black text-xl" />
                Addis Ababa, Ethiopia
              </li>

              <li className="flex items-center gap-3">
                <FaGraduationCap className="text-[#2F5CFF] text-xl" />
                Software Engineering, AAU
              </li>

              <li className="flex items-center gap-3">
                <FaCoffee className="text-[#F4A259] text-xl" />
                Coffee Enthusiast
              </li>

              <li className="flex items-center gap-3">
                <span className="bg-[#D9F7BE] text-[#237804] px-2 py-1 rounded-md text-sm font-semibold">
                  A|E
                </span>
                Amharic, English
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
