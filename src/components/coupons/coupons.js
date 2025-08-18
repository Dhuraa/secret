
const couponsData = [
    {
      id: 'movie',
      title: 'Movie Date Scroll',
      description: 'Redeem for one movie night (dress code: comfy). Popcorn is mandatory to share.',
      terms: 'Valid for one cinema or home movie night. Cuddles mandatory. Coupon expires one year from issue date.',
    },
    {
      id: 'dinner',
      title: 'Dinner Feast Voucher',
      description: 'A homecooked 3-course dinner by yours truly (you pick the cuisine).',
      terms: "If I burn it, dessert is free. Valid once. Expires one year from issue date.",
    },
    {
      id: 'adventure',
      title: 'Day Adventure Pass',
      description: 'A day trip to anywhere within 3 hours travel. Snacks and laughs included.',
      terms: 'Transportation not included if outside agreed distance. One-year expiry.',
    },
  ];

  // --- Utility ---
function formatDateYYYYMMDD(date) {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, '0');
  const d = String(date.getDate()).padStart(2, '0');
  return `${y}-${m}-${d}`;
}

function humanDate(date) {
  return date.toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' });
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
        {couponsData.map(c => (
          <div
            key={c.id}
            className="p-4 bg-black border-4 border-white hover:shadow-[0_0_15px_#fff] transition-all duration-200"
          >
            <div className="flex items-start justify-between">
              <div>
                <div className="text-lg font-bold text-white">
                  {c.title}
                </div>
                <div className="text-sm text-gray-300 mt-1">
                  {c.description}
                </div>
              </div>
              <div className="text-xs text-gray-400">
                Expires {humanDate(expiry)}
              </div>
            </div>

            <div className="mt-3 text-xs text-gray-400">
              T&amp;C: {c.terms}
            </div>

            <div className="mt-4 flex items-center gap-2">
              <button
                onClick={() => alert(`Redeemed ${c.title}!`)}
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
}

export default Coupons;