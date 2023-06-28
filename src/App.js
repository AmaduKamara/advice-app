import { useEffect, useState } from "react";

const App = () => {
  const [advice, setAdvice] = useState();
  const [adviceCount, setAdviceCount] = useState(0);

  const getAdvice = async () => {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    setAdvice(data.slip.advice);
    setAdviceCount((c) => c + 1);
  };

  useEffect(() => {
    getAdvice();
  }, []);

  return (
    <div>
      <div className="container mx-auto py-16">
        <h1 className="text-center text-3xl font-semibold leading-9 text-teal-400">
          React Advice App
        </h1>
        <div className="w-[700px] container mx-auto mt-10 rounded-xl p-10 bg-teal-50 shadow-xl">
          <h3 className="text-center text-xl">{advice}</h3>
          <br />
          <p className="text-sm">
            You have read <span>{adviceCount}</span> pieces of advice
          </p>
        </div>

        <div className="flex justify-center mt-16">
          <button
            onClick={getAdvice}
            className="py-4 cursor-pointer px-24 bg-teal-400 text-white text-lg"
          >
            Get Advice
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
