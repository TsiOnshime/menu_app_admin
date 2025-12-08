import { Linkedin, Github, Twitter, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 py-14 text-center text-slate-300 relative">
      <h3 className="text-2xl font-bold text-white mb-6">Tsion Shimelis</h3>

      <div className="flex justify-center gap-4 mb-6">
        {[Linkedin, Github, Twitter, Mail].map((Icon, i) => (
          <div
            key={i}
            className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-400 to-pink-500 flex items-center justify-center text-white hover:scale-110 transition cursor-pointer"
          >
            <Icon size={20} />
          </div>
        ))}
      </div>

      <p className="text-sm">tsion.shimelis@example.com | +251 912 345 678</p>

      <p className="text-xs text-slate-500 mt-2">
        © 2024 Tsion Shimelis. All rights reserved.
      </p>

      <div className="absolute right-6 bottom-6 bg-white text-slate-700 px-4 py-2 rounded-xl shadow font-medium text-sm">
        Designed by{" "}
        <span className="text-purple-500 font-semibold">Readdy</span>
      </div>
    </footer>
  );
}
