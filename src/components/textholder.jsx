import { useState } from "react";
import ButtonsArea from "./buttonArea";
function TextHolder() {
  const [lines, setLines] = useState(0);
  const [text, setTask] = useState("");
  const [char, setChar] = useState(text.length);
  function updateTask(e) {
    setTask((x) => {
      x = e.target.value;
      setChar((y) => x.length);
      setLines((z) => {
        return x.split("\n").length;
      });
      return x;
    });
  }
  return (
    <>
      <div className="w-full bg-gray-400">
        <div className="container mx-auto p-2 relative">
          <textarea
            placeholder="Enter Text Here..."
            name=""
            id=""
            rows="10"
            value={text}
            onChange={updateTask}
            className="w-full border-2 border-black rounded-lg bg-gray-100 text-black p-2"
          ></textarea>
          <div className="info absolute bottom-4 right-4 flex gap-2 text-sm bg-slate-600 text-white px-1 rounded">
            <span>Char: {char}</span>
            <span>Lines: {lines}</span>
          </div>
        </div>
      </div>
      <ButtonsArea setText={setTask} setChar={setChar} setLines={setLines} />
    </>
  );
}
export default TextHolder;
