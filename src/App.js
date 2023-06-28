import { useEffect, useState } from "react";
import Message from "./components/Message";

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

        <Message advice={advice} adviceCount={adviceCount} />

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
