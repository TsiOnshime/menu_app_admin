export default function Experience() {
  const experiences = [
    {
      title: "Freelance Front-End Developer",
      date: "2022 - Present",
      bullets: [
        "Built 15+ responsive websites using React and Tailwind CSS",
        "Improved website performance by 40% through optimization techniques",
        "Maintained 98% client satisfaction rate through effective communication",
      ],
      desc: "Developed responsive web applications for various clients, focusing on user experience and modern design principles. Collaborated with designers and backend developers to deliver high-quality solutions.",
    },
    {
      title: "Personal Projects",
      date: "2021 - Present",
      bullets: [
        "Developed 10+ personal projects showcasing various technologies",
        "Contributed to 5+ open-source projects on GitHub",
        "Mentored 3 junior developers through coding bootcamp programs",
      ],
      desc: "Continuously working on personal projects to explore new technologies and improve skills. Focus on creating innovative solutions and contributing to open-source community.",
    },
  ];

  return (
    <section className="w-full py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-center text-4xl font-bold mb-14">Experience</h2>

        <div className="flex flex-col gap-10">
          {experiences.map((exp, i) => (
            <div
              key={i}
              className="
                bg-white rounded-2xl shadow-lg px-8 py-10
                transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl
              "
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-semibold">{exp.title}</h3>
                <span className="text-purple-600 font-medium text-sm">
                  {exp.date}
                </span>
              </div>

              <p className="text-gray-600 mb-6">{exp.desc}</p>

              <ul className="text-gray-700 space-y-2">
                {exp.bullets.map((b, idx) => (
                  <li key={idx} className="flex gap-2">
                    <span className="text-gray-500">•</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
