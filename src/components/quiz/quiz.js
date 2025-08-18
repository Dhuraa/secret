import React, { useState, useEffect } from 'react';

const quizQuestions = [
    {
      question: 'If I say “Do whatever you want,” what does it mean?',
      options: ['You have full freedom', 'I trust you completely', 'You better not do it', 'Surprise me'],
      correct: 2,
    },
    {
      question: 'What’s the safest way to win an argument with me?',
      options: ['Prove your point logically', 'Agree with me immediately','Show evidence',  'Distract me with food'],
      correct: 1,
    },
    {
      question: 'How long is “I’ll be ready in 5 minutes”?',
      options: ['Exactly 5 minutes', '15 minutes', '30 minutes', 'Undefined time dimension known only to me'],
      correct: 3,
    },
    {
      question: ' If I text “ok” instead of “okayyyyyy” what does it mean?',
      options: ['I’m fine', 'I’m annoyed', ' I’m busy', 'My phone battery is low'],
      correct: 1,
    },
    {
      question: 'If I ask “Would you still love me if I was a worm?” what’s the safest answer?',
      options: ['That’s weird', 'Yes, I’d keep you in a cute jar', 'No, worms are gross', ' I’d become a worm too'],
      correct: 3,
    },
    {
      question: 'If I’m looking at you silently for 5 seconds, what does it mean?',
      options: ['I’m daydreaming', 'I’m judging you', 'I’m admiring you', 'I’m planning something'],
      correct: 2,
    },
    {
      question: 'If I say “We’ll watch whatever you want,” what does it mean?',
      options: ['You pick the movie', 'I already have a movie in mind', 'You’ll pick, but I’ll veto it', 'We’ll watch my choice'],
      correct: 3,
    },
    {
      question: 'If I ask “Why didn’t you like my post?” what should you say?',
      options: ['I didn’t see it', 'I was going to like it later', 'I liked it in my heart', 'I thought it was already liked'],
      correct: 2,
    },
    {
      question: 'If I say “I’m not hungry,” what does it mean?',
      options: ['I’m full', 'I’ll eat from your plate later', 'I’m saving space for dessert', 'I’m testing if you know me'],
      correct: 1,
    },
    {
      question: 'If I say “I don’t need ice cream,” what should you do?',
      options: ['Believe me and walk away', 'Buy one anyway and give me the first bite', 'Ask twice just to be sure', 'Buy two so I have options'],
      correct: 1,
    },
  ];
 
  
  const Quiz = () => {
    const [index, setIndex] = useState(0);
    const [selected, setSelected] = useState(null);
    const [score, setScore] = useState(0);
    const [finished, setFinished] = useState(false);
    const [sessionHigh, setSessionHigh] = useState(() => {
      const h = sessionStorage.getItem('bf_highscore');
      return h ? Number(h) : 0;
    });
  
    // useEffect(() => {
    //   // reset when user re-enters
    // }, []);
  
    function handleNext() {
      if (selected === null) return; // require selection
      const q = quizQuestions[index];
      if (selected === q.correct) setScore((s) => s + 1);
      setSelected(null);
      if (index + 1 < quizQuestions.length) {
        setIndex(index + 1);
      } else {
        setFinished(true);
        // update session high
        const prev = Number(sessionStorage.getItem('bf_highscore') || 0);
        if (score + (selected === quizQuestions[index].correct ? 1 : 0) > prev) {
          const newH = score + (selected === quizQuestions[index].correct ? 1 : 0);
          sessionStorage.setItem('bf_highscore', String(newH));
          setSessionHigh(newH);
        }
      }
    }
  
    function restart() {
      setIndex(0);
      setSelected(null);
      setScore(0);
      setFinished(false);
    }
  
    return (
      <section className="max-w-3xl mx-auto font-pixel text-white">
        <div className="p-6 border-4 border-white bg-gray-900 rounded-lg shadow-[0_0_10px_#fff]">
          {/* High score display */}
          <p className="text-sm mb-4 text-yellow-300">
            High score: <span className="text-white">{sessionHigh}</span>
          </p>

          {/* Quiz title */}
          <p className="text-lg mb-6 text-center text-yellow-300">
            How well do you know your girlfriend?
          </p>

          {!finished ? (
            <div>
              {/* Question counter */}
              <div className="mb-4 text-xs text-gray-300 text-center tracking-widest uppercase">
                Question {index + 1} of {quizQuestions.length}
              </div>

              {/* Question box */}
              <div className="p-4 border-2 border-white bg-gray-800 rounded-md shadow-inner mb-4">
                <div className="text-lg mb-3">{quizQuestions[index].question}</div>

                {/* Options */}
                <div className="flex flex-col gap-3">
                  {quizQuestions[index].options.map((opt, i) => (
                    <label
                      key={i}
                      className={`flex items-center gap-3 p-3 border-2 border-white cursor-pointer transition-all duration-200 rounded-md shadow-sm
                      ${selected === i
                        ? 'bg-yellow-300 text-black shadow-[0_0_8px_#FFD700]'
                        : 'hover:bg-white hover:text-black hover:shadow-[0_0_8px_#fff]'
                      }`}
                    >
                      <input
                        type="radio"
                        name={`q-${index}`}
                        className="accent-yellow-300 scale-125"
                        checked={selected === i}
                        onChange={() => setSelected(i)}
                      />
                      <span className="text-sm">{opt}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Buttons */}
              <div className="mt-6 flex gap-4 justify-center">
                <button
                  onClick={handleNext}
                  className="px-5 py-2 border-2 border-white hover:bg-white hover:text-black rounded-md shadow-md transition-all"
                  disabled={selected === null}
                >
                  NEXT
                </button>
                <button
                  onClick={restart}
                  className="px-5 py-2 border-2 border-white hover:bg-white hover:text-black rounded-md shadow-md transition-all"
                >
                  RESTART
                </button>
              </div>
            </div>
          ) : (
            <div className="text-center">
              <div className="text-2xl mb-3 text-yellow-300">
                You scored {score} / {quizQuestions.length}
              </div>
              <div className="mb-6 text-sm">
                Session high score: <span className="text-yellow-300">{sessionHigh}</span>
              </div>
              <button
                onClick={restart}
                className="px-5 py-2 border-2 border-white hover:bg-white hover:text-black rounded-md shadow-md transition-all"
              >
                PLAY AGAIN
              </button>
            </div>
          )}
        </div>
      </section>
    );
  }


export default Quiz;