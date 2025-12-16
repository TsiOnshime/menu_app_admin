export default function Testimonials() {
  const testimonials = [
    {
      text: `"Tsion delivered exceptional work on our e-commerce platform. Her attention to detail and technical expertise made our project a huge success."`,
      name: "Hailemariam Gebeyehu",
      role: "Project Manager",
    },
    {
      text: `"Working with Tsion was a pleasure. She understood our requirements perfectly and delivered a beautiful, responsive website ahead of schedule."`,
      name: "Woinshet Abate",
      role: "Startup Founder",
    },
    {
      text: `"Tsion's code quality is outstanding. She writes clean, maintainable code and always follows best practices. Highly recommended!"`,
      name: "Sofonias Kebede",
      role: "Senior Developer",
    },
  ];

  return (
    <section className="py-24">
      <h2 className="text-4xl font-bold text-center text-slate-900 mb-16">
        What People Say
      </h2>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
        {testimonials.map((item, i) => (
          <div key={i} className="bg-white rounded-2xl p-8 shadow-xl relative">
            <span className="text-6xl text-grey-10 font-serif absolute -top-4">
              “
            </span>

            <p className="text-slate-600 leading-relaxed mt-6">{item.text}</p>

            <div className="mt-6">
              <h4 className="font-bold text-slate-900">{item.name}</h4>
              <p className="text-blue-700 font-medium">{item.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
