import { useState } from "react";
import reactLogo from "./assets/react.svg";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="w-full bg-slate-500 flex justify-center items-center">
      <h1 className="p-8 text-slate-100 text-3xl">Hello Boi</h1>
      <h2 className="p-8 text-slate-100 text-3xl">Hi</h2>
    </div>
  );
}

export default App;
