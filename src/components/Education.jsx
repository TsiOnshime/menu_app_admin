export default function Education() {
  const education = [
    {
      title: "Addis Ababa University",
      subtitle: "Computer Science",
      date: "2018 - 2022",
      color: "from-pink-500 to-purple-500",
      icon: "🏛️",
    },
    {
      title: "ALX Software Engineering",
      subtitle: "Full-Stack Development",
      date: "2022 - 2023",
      color: "from-blue-400 to-cyan-400",
      icon: "💻",
    },
    {
      title: "freeCodeCamp",
      subtitle: "Web Development Certification",
      date: "2021 - 2022",
      color: "from-green-400 to-green-600",
      icon: "🌼",
    },
  ];

  return (
    <section className="w-full py-20 ">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-center text-4xl font-bold mb-14">Education</h2>

        <div className="grid md:grid-cols-3 gap-10">
          {education.map((edu, i) => (
            <div
              key={i}
              className="
                bg-white rounded-2xl shadow-lg p-10 text-center
                transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl
              "
            >
              {/* Icon */}
              <div
                className={`
                  mx-auto mb-6 w-16 h-16 flex items-center justify-center
                  rounded-full text-white text-3xl font-bold
                  bg-gradient-to-tr ${edu.color}
                `}
              >
                {edu.icon}
              </div>

              <h3 className="text-xl font-semibold mb-1">{edu.title}</h3>
              <p className="text-purple-600 font-medium">{edu.subtitle}</p>
              <p className="text-gray-600 mt-2">{edu.date}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
