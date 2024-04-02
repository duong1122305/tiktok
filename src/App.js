import userEvent from "@testing-library/user-event";
import { useRef, useState, useEffect } from "react";

function Content() {
  const [count, setCount] = useState(60);

  const timerId = useRef();

  const prevCount = useRef() 

  useEffect(() => {
    prevCount.current = count
  }, [count]);

  const handleStart = () => {
    timerId.current = setInterval(() => {
      setCount((prev) => prev - 1);
    }, 1000);
  };

  const handleStop = () => {
    clearInterval(timerId.current);
  };

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
    </div>
  );
}

export default App;
