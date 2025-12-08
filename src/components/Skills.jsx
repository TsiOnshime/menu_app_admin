export default function Skills() {
  const skills = [
    {
      name: "React",
      iconBg: "bg-gradient-to-br from-[#47A8FF] to-[#1F8FFF]",
      icon: "⚛️", // Replace with React icon SVG
    },
    {
      name: "Tailwind",
      iconBg: "bg-gradient-to-br from-[#3BC6F6] to-[#1F9CEB]",
      icon: "🌬️", // Replace with Tailwind icon SVG
    },
    {
      name: "JavaScript",
      iconBg: "bg-gradient-to-br from-[#FFB347] to-[#FF8A00]",
      icon: "🟨", // Replace with JS SVG
    },
    {
      name: "Node.js",
      iconBg: "bg-gradient-to-br from-[#2ECC71] to-[#20B25C]",
      icon: "🟢", // Replace with Node SVG
    },
    {
      name: "Django",
      iconBg: "bg-gradient-to-br from-[#1DBF73] to-[#159F5A]",
      icon: "🐍", // Replace with Django SVG
    },
    {
      name: "Git",
      iconBg: "bg-gradient-to-br from-[#FF7A55] to-[#FF5A37]",
      icon: "🔧", // Replace with Git icon SVG
    },
    {
      name: "Firebase",
      iconBg: "bg-gradient-to-br from-[#FFCF5C] to-[#FF896A]",
      icon: "🔥", // Replace with Firebase SVG
    },
  ];

  return (
    <section className="w-full py-24">
      <h2 className="text-center text-3xl md:text-4xl font-bold text-gray-800 mb-16">
        Skills & Technologies
      </h2>

      <div className="max-w-6xl mx-auto px-6 flex flex-wrap justify-center gap-8">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="w-40 h-44 bg-white rounded-2xl shadow-md flex flex-col items-center justify-center transition hover:shadow-xl"
          >
            <div
              className={`w-20 h-20 rounded-full ${skill.iconBg} flex items-center justify-center text-white text-3xl shadow`}
            >
              {skill.icon}
            </div>

            <p className="mt-4 text-gray-800 font-medium text-lg">
              {skill.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
