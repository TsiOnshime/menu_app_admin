export default function Contact() {
  return (
    <section className="py-28">
      <h2 className="text-4xl font-bold text-center text-slate-900 mb-16">
        Let&apos;s Work Together
      </h2>

      <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl p-10">
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-slate-700 mb-1">Name</label>
            <input
              className="w-full border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-400"
              placeholder="Your full name"
            />
          </div>

          <div>
            <label className="block text-slate-700 mb-1">Email</label>
            <input
              className="w-full border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-400"
              placeholder="your.email@example.com"
            />
          </div>

          <div className="md:col-span-2">
            <label className="block text-slate-700 mb-1">Subject</label>
            <input
              className="w-full border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-400"
              placeholder="Project inquiry"
            />
          </div>

          <div className="md:col-span-2">
            <label className="block text-slate-700 mb-1">Message</label>
            <textarea
              rows="5"
              className="w-full border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-400"
              placeholder="Tell me about your project..."
            />
          </div>

          <div className="md:col-span-2 flex justify-center mt-6">
            <button className="px-10 py-3 rounded-xl text-white font-semibold bg-gradient-to-r from-purple-500 to-pink-500 shadow-lg hover:scale-105 transition">
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
