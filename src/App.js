import './App.css';
import React, { useState, useEffect } from 'react';
import Quiz from './components/quiz/quiz';
import Coupons from './components/coupons/coupons';
import Timeline from './components/timeline/timeline';
import Letter from './components/letter/letter';

// --- Components ---
// function Navbar({ active, setActive }) {
//   const tabs = [
//     { id: 'letter', label: 'Letter' },
//     { id: 'quiz', label: 'Quiz' },
//     { id: 'coupons', label: 'Coupons' },
//     { id: 'timeline', label: 'Memories' },
//   ];

//   return (
//     <nav className="w-full bg-gradient-to-r from-amber-50 via-rose-50 to-emerald-50 shadow-sm">
//       <div className="max-w-4xl mx-auto px-4 py-3 flex items-center justify-between">
//         <div className="flex items-center gap-3">
//           <div className="w-12 h-12 rounded-full bg-amber-200 flex items-center justify-center ring-2 ring-amber-300 font-semibold">💌</div>
//           <div>
//             <h1 className="text-lg font-semibold text-rose-800">Happy Boyfriend Day</h1>
//           </div>
//         </div>
//         <div className="hidden md:flex items-center gap-3">
//           {tabs.map((t) => (
//             <button
//               key={t.id}
//               onClick={() => setActive(t.id)}
//               className={`px-3 py-1 rounded-full text-sm font-medium ${active === t.id ? 'bg-rose-200 text-rose-900 shadow' : 'text-rose-700 hover:bg-rose-100'}`}>
//               {t.label}
//             </button>
//           ))}
//         </div>
//         <div className="md:hidden">
//           <select value={active} onChange={(e) => setActive(e.target.value)} className="rounded-md p-1">
//             {tabs.map(t => <option key={t.id} value={t.id}>{t.label}</option>)}
//           </select>
//         </div>
//       </div>
//     </nav>
//   );
// }
// Include this in your index.html <head>:
// <link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" rel="stylesheet">

// ensure the font-link + CSS above are loaded globally

function Navbar({ active, setActive }) {
  const tabs = [
    { id: 'letter', label: 'Letter' },
    { id: 'quiz', label: 'Quiz' },
    { id: 'coupons', label: 'Coupons' },
    { id: 'timeline', label: 'Memories' },
  ];

  return (
    <nav className="w-full bg-black border-b-4 border-white">
      <div className="max-w-4xl mx-auto py-4 flex items-center justify-between">
        {/* Logo + Title */}
        <div className="flex items-center gap-3">
          {/* Pixel 2D title */}
          <h1 className="pixel-2d text-yellow-300 text-sm sm:text-base ml-1">
            HAPPY BOYFRIEND DAY
          </h1>
        </div>

        {/* Desktop Tabs */}
        <div className="hidden md:flex items-center gap-4">
          {tabs.map((t) => (
            <button
              key={t.id}
              onClick={() => setActive(t.id)}
              className={`px-3 py-2 border-2 border-white ${
                active === t.id
                  ? 'bg-yellow-400 text-black'
                  : 'bg-black text-white hover:bg-yellow-400 hover:text-black'
              }`}
            >
              <span className="pixel-2d text-xs">{t.label.toUpperCase()}</span>
            </button>
          ))}
        </div>

        {/* Mobile Dropdown */}
        <div className="md:hidden">
          <select
            value={active}
            onChange={(e) => setActive(e.target.value)}
            className="bg-black text-white border-2 border-white p-2"
          >
            {tabs.map((t) => (
              <option key={t.id} value={t.id}>
                {t.label.toUpperCase()}
              </option>
            ))}
          </select>
        </div>
      </div>
    </nav>
  );
}




// --- App ---
export default function App() {
  const [active, setActive] = useState('letter');

  return (
    <div className="min-h-screen bg-black text-white font-pixel">
      <Navbar active={active} setActive={setActive} />

      <main className="py-8 px-4">
        <div className="max-w-4xl mx-auto p-2">
          {active === "letter" && <Letter />}
          {active === "quiz" && <Quiz />}
          {active === "coupons" && <Coupons />}
          {active === "timeline" && <Timeline />}
        </div>
      </main>

      <footer className="py-6 text-center text-xs text-yellow-300 border-t-2 border-white">
      <img 
        src="https://www.pockettactics.com/wp-content/sites/pockettactics/2022/05/undertale-frisk-580x334.jpg" 
        alt="Undertale Heart" 
        width={100} 
      />
        <span className="block">Made with ❤️ — by your one and only girlfriend Dhura</span>
        <span className="block mt-1 text-white">© 2025 All Rights Reserved</span>
      </footer>
    </div>
  );
}

