export default function Hero() {
  return (
    <section className="relative flex items-center justify-center min-h-screen w-full overflow-hidden bg-gradient-to-br from-[#fdfaff] via-[#f7f3ff] to-[#eef6ff]">
      {/* Background Blobs */}
      <div className="absolute w-[900px] h-[900px] rounded-full bg-[#f8eaff] opacity-40 blur-3xl -top-40 -left-60" />
      <div className="absolute w-[700px] h-[700px] rounded-full bg-[#e3f0ff] opacity-40 blur-3xl top-20 -right-40" />
      <div className="absolute w-[500px] h-[500px] rounded-full bg-[#ffe6f7] opacity-40 blur-3xl bottom-10 left-1/3" />

      {/* Content */}
      <div className="relative z-10 text-center px-6">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
          Hi, I'm{" "}
          <span className="bg-gradient-to-r from-[#c471ed] to-[#f64f59] bg-clip-text text-transparent">
            Tsion
          </span>
        </h1>

        <h2 className="text-xl md:text-2xl text-gray-700 mb-4">
          Front-End Developer & UI Builder
        </h2>

        <p className="text-gray-600 max-w-xl mx-auto text-sm md:text-base mb-8 leading-relaxed">
          Crafting beautiful, responsive web experiences with modern
          technologies and thoughtful design
        </p>

        <button
          className="px-8 py-3 rounded-lg text-white font-medium shadow-lg
                           bg-gradient-to-r from-[#c471ed] to-[#f64f59]
                           hover:opacity-90 transition"
        >
          View My Work
        </button>
      </div>
    </section>
  );
}
