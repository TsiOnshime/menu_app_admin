import React from "react";
import { FiCode, FiBook, FiAward } from "react-icons/fi";
import { PiBuildingFill } from "react-icons/pi"; // university icon alternative

const education = [
  {
    icon: <PiBuildingFill size={32} className="text-white" />,
    gradient: "from-[#1F2A45] to-[#2F5CFF]",
    school: "Addis Ababa University",
    field: "Software Engineering",
    years: "2022 – 2028",
  },
  {
    icon: <FiCode size={32} className="text-white" />,
    gradient: "from-[#2F5CFF] to-[#1F2A45]",
    school: "ALX Software Engineering",
    field: "Backend Development",
    years: "2025 – 2025",
    
  },
  {
    icon: <FiAward size={32} className="text-white" />,
    gradient: "from-[#059669] to-[#0f766e]",
    school: "freeCodeCamp",
    field: "Web Development Certification",
    years: "2025 – 2025",
    
  },
];

export default function Education() {
  return (
    <section className="w-full py-16">
      {/* Title */}
      <h2 className="text-center text-4xl font-extrabold text-gray-900 mb-16">
        Education
      </h2>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto px-6">
        {education.map((item, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition p-10 text-center flex flex-col items-center"
          >
            {/* Icon circle */}
            <div
              className={`w-20 h-20 rounded-full bg-gradient-to-br ${item.gradient} flex items-center justify-center mb-6`}
            >
              {item.icon}
            </div>

            {/* School */}
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              {item.school}
            </h3>

            {/* Field */}
            <p
              className="mb-2"
            >
              {item.field}
            </p>

            {/* Years */}
            <p className="text-gray-500 text-sm">{item.years}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
