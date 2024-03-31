import { useState } from "react";
import Content from "./Component";


function App() {
  const [show, setShow] = useState(false)
 
  return (
    <div style={{ padding: 32 }}>
      <button onClick={() => setShow(!show)}>Show</button>
      {show && <Content />}
    </div>
  );
}

export default App;
