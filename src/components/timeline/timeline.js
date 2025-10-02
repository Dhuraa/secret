
 const Timeline = () => {
    const events = [
      { date: '2024-11-17', title: 'Swiped Right', desc: 'The day we matched on hingeeee' },
      { date: '2024-03-23', title: 'Ikea Date', desc: 'Met for First time on an ikea date. Where you didnt let me have guava soft serve' },
      { date: '2024-04-27', title: 'Museum Date', desc: 'The date that changed everything !!! Best museum date everrrrrr' },
      { date: '2024-05-09', title: 'Confession Day', desc: 'Despite all the hesitation, we finally admitted our crush on each other' },
      { date: '2024-05-28', title: 'First I Love You', desc: 'The day we said “I love you” to each other for the very first time' },
      { date: '2024-10-03', title: 'Boyfriend Day', desc: 'And fianlly we reached todayyyy. Happy Boyfriend Day!!!!' },
    ];
  
    return (
    <section className="max-w-4xl mx-auto p-6 font-pixel">
    <h2 className="text-lg sm:text-xl md:text-2xl text-yellow-300 mb-6 pb-2">
        Memories Timeline
    </h2>

    <div className="space-y-4">
        {events.map((e, i) => (
        <div
            key={i}
            className="p-4 border-4 border-white bg-black"
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