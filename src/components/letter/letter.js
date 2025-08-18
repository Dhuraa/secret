const letterMock = `My Dearest

Much like an unexpected second life, meeting you felt like finding a new path I never knew existed. You are my calm in storms, my laughter in quiet halls, and the gentle push that helps me grow.

I promise to be your companion on every small adventure — to learn with you, to joke with you, and to make even the ordinary feel magical.

The one who is always right,
Dhura`;

const Letter = () => {
  return (
    <section className="max-w-4xl mx-auto p-6">
      <div className="relative p-6 bg-black border-4 border-white">
        <pre className="whitespace-pre-wrap text-white text-lg leading-relaxed font-pixel">
          {letterMock}
        </pre>
      </div>
    </section>
  );
};


export default Letter;
