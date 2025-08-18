import React from "react";
import { Route, Routes, Link,} from "react-router-dom"; // Import Routes instead of Switch
import Quiz from "./components/quiz/quiz";
import Coupons from "./components/coupons/coupons";
import Timeline from "./components/timeline/timeline";
import Letter from "./components/letter/letter";
import Home from "./components/home/home";

function Navbar() {
  const tabs = [
    { id: "letter", label: "Letter" },
    { id: "quiz", label: "Quiz" },
    { id: "coupons", label: "Coupons" },
    { id: "timeline", label: "Memories" },
  ];

  return (
    <nav className="w-full bg-black border-b border-green-500">
      <div className="max-w-5xl mx-auto py-4 flex items-center justify-between">
        {/* Desktop Tabs */}
        <div className="hidden md:flex items-center gap-4">
          {tabs.map((t) => (
            <Link
              key={t.id}
              to={`/${t.id}`} // Link to corresponding route
              className={`px-3 py-2 border-2 border-white`}
            >
              <span className="pixel-2d text-xs">{t.label.toUpperCase()}</span>
            </Link>
          ))}
        </div>

        {/* Logo + Title */}
        <div className="flex items-center gap-3">
          {/* Pixel 2D title */}
          <h1 className="pixel-2d text-yellow-300 text-sm sm:text-base ml-1">
            <div className="flex">HAPPY BOYFRIEND DAY</div>
          </h1>
          <div className="ml-4">
            <img src={process.env.PUBLIC_URL + "/Frisk.png"} alt="Undertale Heart" width={100} />
          </div>
        </div>

        {/* Mobile Dropdown */}
        <div className="md:hidden">
          <select
            className="bg-black text-white border-2 border-white p-2"
          >
            {tabs.map((t) => (
              <Link
                key={t.id}
                to={`/${t.id}`} // Link to corresponding route
                className={`px-3 py-2 border-2 border-white`}>
                <option key={t.id} value={t.id}>
                  {t.label.toUpperCase()}
                </option>
              </Link>

            ))}
          </select>
        </div>
      </div>
    </nav>
  );
}

export default function App() {
  return (
    <div className="relative min-h-screen bg-black text-white font-pixel overflow-hidden">
      {/* 🔹 Green Grid Background */}
      <div className="absolute inset-0 z-0 grid grid-cols-4 grid-rows-3 border border-green-500 pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <div key={i} className="border border-green-500" />
        ))}
      </div>

      {/* 🔸 Foreground Content */}
      <div className="relative z-10">
        <Navbar />

        <main className="py-8 px-4">
          <div className="max-w-5xl mx-auto p-2">
            {/* ✅ Routes only (HashRouter already in index.js) */}
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/letter" element={<Letter />} />
              <Route path="/quiz" element={<Quiz />} />
              <Route path="/coupons" element={<Coupons />} />
              <Route path="/timeline" element={<Timeline />} />
            </Routes>
          </div>
        </main>

        <footer className="py-6 text-center text-xs text-yellow-300 border-t-2 border-white">
          <span className="block">
            Made with ❤️ — by your one and only girlfriend Dhura
          </span>
          <span className="block mt-1 text-white">© 2025 All Rights Reserved</span>
        </footer>
      </div>
    </div>
  );
}
