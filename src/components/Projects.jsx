import portfolio from "../images/portfolio1.png";
import innovate from "../images/innovate.png";
import codeflow from "../images/codeflow.png";
export default function FeaturedProjects() {
  const projects = [
    {
      title: "Corporate Service Platform",
      desc: "A modern, responsive corporate services web app built with React and Tailwind CSS. Clean UI, intuitive navigation, and designed for businesses to showcase services and information with high performance.",
      img: innovate,
      tags: ["React", "Tailwind", "Stripe"],
      link: "https://innovatecorp2.onrender.com/",
    },
    {
      title: "CodeFlow Landing Page",
      desc: "A modern, responsive landing page built with React and Tailwind CSS. Designed for smooth navigation and visually engaging UI, highlighting features and call-to-action sections.",
      img: codeflow,
      tags: ["React", "Firebase", "Tailwind"],
      link: "https://codeflow-landingpage.onrender.com",
    },
    {
      title: "Personal Portfolio Website",
      desc: "A modern, responsive personal portfolio built with React and Tailwind CSS. Features smooth animations, clean grid layouts, and a pastel UI theme to showcase projects, skills, and experience professionally.",
      img: portfolio,
      tags: ["React", "Tailwind", "Stripe"],
      link: "https://userportfolio-4szw.onrender.com",
    },
    {
      title: "Weather Dashboard",
      desc: "Interactive weather app with location-based forecasts",
      img: "/images/weather.png",
      tags: ["React", "API", "Tailwind"],
    },
    {
      title: "Blog Platform",
      desc: "Content management system with rich text editor",
      img: "/images/blog.png",
      tags: ["Next.js", "Tailwind", "Prisma"],
    },
  ];

  return (
    <section className="w-full py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-center text-4xl font-bold mb-12">
          Featured Projects
        </h2>

        {/* GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((p, i) => (
            <div
              key={i}
              className="
                bg-white rounded-2xl overflow-hidden shadow-lg 
                transition-all duration-300
                hover:-translate-y-3 hover:shadow-2xl
              "
            >
              <img src={p.img} alt="" className="w-full h-48 object-cover" />

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{p.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{p.desc}</p>
                <a
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Open ${p.title} in a new tab`}
                  className="inline-block mt-2 text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 focus:ring-2 focus:ring-purple-300 px-3 py-1 rounded-lg transition-colors"
                >
                  View site
                </a>

                <div className="flex flex-wrap gap-2 mt-4">
                  {p.tags.map((tag, t) => (
                    <span
                      key={t}
                      className="px-3 py-1 text-xs rounded-full bg-purple-100 text-purple-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
