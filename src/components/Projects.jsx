export default function FeaturedProjects() {
  const projects = [
    {
      title: "E-Commerce Platform",
      desc: "Modern online shopping experience with React and Stripe integration",
      img: "/images/ecommerce.png",
      tags: ["React", "Tailwind", "Stripe"],
    },
    {
      title: "Task Management App",
      desc: "Collaborative project management tool with real-time updates",
      img: "/images/taskapp.png",
      tags: ["React", "Firebase", "Tailwind"],
    },
    {
      title: "Portfolio Website",
      desc: "Responsive portfolio site for creative professionals",
      img: "/images/portfolio.png",
      tags: ["React", "CSS3", "JavaScript"],
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

                <div className="flex flex-wrap gap-2">
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
