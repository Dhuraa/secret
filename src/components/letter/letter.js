const letterMock = `Dear Tanmayyy

Usually, when I write a letter, I know where to start, but for this one I am truly lost. You came into my life when I felt lost and hopeless, and you showed me what it feels like to be truly loved and to have someone who is there for you, no matter what. I may not always be great at expressing my feelings, but I do want you to know I genuinely love you a lot. There have been times with you when I felt extremely emotional because I have these overwhelming feelings for you, and it gets frustrating when I am unable to express them because you deserve to know how much you mean to me. I love how patient, kind, caring, sweet, funny, and smart you are (the list is infinite, but that's enough for today). You are THE boyfriend, partner, and best friend anyone could ask for, and I swear I can't go a single day without you.

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
