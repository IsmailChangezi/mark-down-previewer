import "./App.css";
import MarkDown from "./Components/MarkDown";
import TextArea from "./Components/TextArea";
import React, { useState } from "react";
import { InitialState } from "./Components/InitialState";
function App() {
  const [text, setText] = useState(InitialState);

  const handleChange = (e) => {
    setText(() => e.target.value);
  };

  return (
    <div className="App">
      <h1 className="title">MarkDown previewer</h1>
      <TextArea text={text} handleChange={handleChange} />
      <MarkDown text={text} />
    </div>
  );
}

export default App;
