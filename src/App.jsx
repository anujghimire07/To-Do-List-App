import { useState } from "react";
import "./App.css";

function App() {
  let [text, settext] = useState("");
  let [list, setlist] = useState([]);

  return (
    <>
      <div className="container">
        <div className="heading">
          <h2 className="h2">To-Do List</h2>
        </div>
        <div className="libs">
          <label htmlFor="input" className="label">
            Write your goals here:
          </label>
          <input
            className="input"
            type="text"
            value={text}
            onChange={(e) => settext(e.target.value)}
          />
          <button
            className="btn1"
            onClick={() => {
              if (text === "") {
                alert("Task cannot be empty");
              } else {
                setlist([...list, text]);
              }
              settext("");
            }}
          >
            add
          </button>
          <button className="btn2" onClick={() => setlist([])}>
            delete all
          </button>
        </div>
        <div className="list">
          <ol>
            {list.map((item, index) => (
              <li key={index}>
                <input type="checkbox" />
                {item}
                <button
                  onClick={() => setlist(list.filter((_, i) => i !== index))}
                >
                  delete
                </button>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </>
  );
}

export default App;
