import { useRef, useState } from "react";

function Content() {
  const [count, setCount] = useState(60)

  const handleStart = () => {

  }

  const handleStop = () => {

  }
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>  
    </div>
  );
}

export default Content;
