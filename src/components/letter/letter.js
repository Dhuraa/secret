const letterMock = `My Dearest\n\nMuch like an unexpected second life, meeting you felt like finding a new path I never knew existed. You are my calm in storms, my laughter in quiet halls, and the gentle push that helps me grow.\n\nI promise to be your companion on every small adventure — to learn with you, to joke with you, and to make even the ordinary feel magical.\n\nThe one who is always right,\nDhura`;


const Letter = () => {
    return (
        <section className="max-w-3xl mx-auto p-6 font-pixel">
        <div className="relative p-6 bg-gray-900 rounded-lg border-4 border-white shadow-[0_0_6px_#fff]">
          <pre className="whitespace-pre-wrap text-white text-lg leading-relaxed">
            {letterMock.replace('[Your Name]', 'Your Beloved')}
          </pre>
        </div>
      </section>      
    );
}

export default Letter;