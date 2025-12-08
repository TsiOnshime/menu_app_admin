import avatar from "../assets/avatar.jpg";
export default function AboutMe() {
  return (
    <section className="w-full py-24">
      <h2 className="text-center text-3xl md:text-4xl font-bold text-gray-800 mb-16">
        About Me
      </h2>

      <div className="max-w-5xl mx-auto px-6">
        <div className="bg-white rounded-3xl shadow-xl p-10 flex flex-col md:flex-row gap-10 items-center">
          <div className="flex-shrink-0">
            <img
              src={avatar}
              alt="Tsion"
              className="w-[380px] h-[320px] object-cover rounded-2xl shadow-sm"
            />
          </div>

          {/* Text Content */}
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Hello! I'm Tsion Shimelis
            </h3>

            <p className="text-gray-600 leading-relaxed mb-4">
              I'm a passionate front-end developer with a love for creating
              intuitive and beautiful user interfaces. With expertise in modern
              web technologies,I bring designs to life with clean, efficient
              code and attention to detail.
            </p>

            <p className="text-gray-600 leading-relaxed mb-6">
              My journey in web development started with curiosity and has
              evolved into a deep passion for building digital experiences that
              make a difference. I enjoy collaborating with teams and clients to
              turn ideas into reality.
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-2 text-sm rounded-full bg-[#f7e8ff] text-[#a04dc7] font-medium">
                Creative Problem Solver
              </span>
              <span className="px-4 py-2 text-sm rounded-full bg-[#ffe4f0] text-[#d6406c] font-medium">
                Detail Oriented
              </span>
              <span className="px-4 py-2 text-sm rounded-full bg-[#e4eaff] text-[#3b63d6] font-medium">
                Team Player
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
