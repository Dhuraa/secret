const couponsData = [
  {
    id: "cafe",
    title: "Café Hopping Date",
    description:
      "An afternoon of exploring new cafés together, complete with coffee, desserts, and laughs.",
    terms: "Valid once. Drinks on me.",
  },
  {
    id: "movie",
    title: "Movie Date",
    description:
      "Redeem for one movie night (dress code: comfy). Popcorn is mandatory to share.",
    terms: "Valid for one movie of my choiceeeee.",
  },
  {
    id: "gamenight",
    title: "Game Night Date",
    description:
      "An evening dedicated to gaming together — you pick the game, I’ll be your player two.",
    terms: "Valid once. Winner gets bragging rights.",
  },
  {
    id: "yourcall",
    title: "Your Rules Day",
    description:
      "A full day where I do as you say — your choices, your plans, your rules.",
    terms: "Valid for one day. No outrageous requests allowed 😉.",
  },
  {
    id: "drunkme",
    title: "Drunk Me Pass",
    description:
      "Redeem for a tipsy, giggly version of me who will either dance, sing, or confess cute things I normally wouldn’t.",
    terms:
      "Valid once. Must be redeemed responsibly.",
  },
  {
    id: "cuddle",
    title: "Cuddle Marathon",
    description:
      "Redeem for unlimited cuddles, snuggles, and warmth (minimum 30 minutes, maximum endless).",
    terms: "Valid anytime you need comfort. No expiry.",
  },
  {
    id: "makeout",
    title: "Makeout Session",
    description:
      "Redeem for a spontaneous makeout session — no excuses, no interruptions.",
    terms: "Valid once per coupon. One-year expiry.",
  },
];

// --- Utility ---
function formatDateYYYYMMDD(date) {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}

function humanDate(date) {
  return date.toLocaleDateString(undefined, {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

const Coupons = () => {
  const issued = new Date();
  const expiry = new Date(issued);
  expiry.setFullYear(expiry.getFullYear() + 1);

  return (
    <section className="max-w-5xl mx-auto p-6 font-pixel">
      <h2 className="text-2xl font-bold text-yellow-300 mb-6 text-center">
        🎟 Coupons & Vouchers 🎟
      </h2>

      <div className="grid gap-8 md:grid-cols-2">
        {couponsData.map((c) => (
          <div
            key={c.id}
            className="p-4 bg-black border-4 border-white hover:shadow-[0_0_15px_#fff] transition-all duration-200"
          >
            <div className="flex items-start justify-between">
              <div>
                <div className="text-lg font-bold text-white">{c.title}</div>
                <div className="text-sm text-gray-300 mt-1">
                  {c.description}
                </div>
              </div>
              <div className="text-xs text-gray-400">
                Expires {humanDate(expiry)}
              </div>
            </div>

            <div className="mt-3 text-xs text-gray-400">T&amp;C: {c.terms}</div>

            <div className="mt-4 flex items-center gap-2">
              <button
                onClick={() => alert(`Send screenshot to your gf to redeem itttttttt!`)}
                className="px-3 py-1 rounded border-2 border-white bg-gray-800 text-white hover:bg-white hover:text-black transition-all duration-150"
              >
                Redeem
              </button>
              <button
                onClick={() =>
                  navigator.clipboard?.writeText(
                    `${c.title} - Expires ${formatDateYYYYMMDD(expiry)}`
                  )
                }
                className="px-3 py-1 rounded border-2 border-white bg-transparent text-white hover:bg-white hover:text-black transition-all duration-150"
              >
                Copy
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Coupons;
