import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="max-w-5xl mx-auto text-center py-12 px-4">
            {/* Undertale-style Content */}
            <div className="bg-black text-white border-4 border-white p-6">
                <div className="text-xl font-pixel leading-relaxed">
                    {/* Dialogue box-like text */}
                    <p className="text-yellow-300 mb-4">
                        * Welcome to the Boyfriend Day Adventure! *
                    </p>
                    <p className="text-white mb-6">
                        * You've just stepped into a special world...* <br />
                        * Here, we celebrate the love between you and your one and only beautiful girlfriend - that is meeeeeeeee!*
                    </p>

                    <p className="text-yellow-300 mb-4">
                        * Much like the game you love the most, this place is full of surprises, fun, and memories! *
                    </p>

                    <p className="text-white mb-6">
                        * Get ready to embark on a journey where you can solve quizzes, and receive lovely coupons that will make your day extra special! *
                    </p>

                    <p className="text-yellow-300">
                        * Will you accept this challenge?* <br />
                        * Your first task is to explore and make the most of your adventure! *
                    </p>
                </div>
            </div>

            {/* Call to Action - Undertale Style */}
            <div className="mt-8">
                <p className="text-white text-lg">
                    * Choose your path below, adventurer! *
                </p>
                <div className="flex justify-center gap-6 mt-4">
                    {/* Link button to the quiz route */}
                    <Link to="/quiz">
                        <button className="px-6 py-3 bg-yellow-400 text-black border-2 border-white font-pixel text-lg hover:bg-yellow-500 transition">
                            Take the Quiz
                        </button>
                    </Link>

                    {/* Link button to the letter route */}
                    <Link to="/letter">
                        <button className="px-6 py-3 bg-yellow-400 text-black border-2 border-white font-pixel text-lg hover:bg-yellow-500 transition">
                            Read My Letter
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};


export default Home;
