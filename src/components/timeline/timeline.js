
 const Timeline = () => {
    const events = [
      { date: '2024-11-17', title: 'Swiped Right', desc: 'That guiness book prompt chnaged everything' },
      { date: '2024-03-23', title: 'First Date', desc: 'Met for First time on an ikea date. Where you didnt let me have guava ice cream' },
      { date: '2024-04-27', title: 'Second Date', desc: 'The date that changed everything' },
    ];
  
    return (
    <section className="max-w-3xl mx-auto p-6 font-pixel">
    <h2 className="text-lg sm:text-xl md:text-2xl text-yellow-300 mb-6 border-b-4 border-white pb-2">
        Memories Timeline
    </h2>

    <div className="space-y-4">
        {events.map((e, i) => (
        <div
            key={i}
            className="p-4 border-4 border-white bg-gray-900 rounded-lg shadow-[0_0_6px_#fff]"
        >
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <div className="text-white">{e.title}</div>
            <div className="text-xs text-yellow-300 mt-2 sm:mt-0">
                {new Date(e.date).toLocaleDateString()}
            </div>
            </div>
            <div className="text-xs text-gray-300 mt-3">{e.desc}</div>
        </div>
        ))}
    </div>
    </section>
    );
  }

export default Timeline;