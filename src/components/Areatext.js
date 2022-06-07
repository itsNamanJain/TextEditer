import React, { useState } from "react";
import FalseWords  from "./Falsewords";
export default function Areatext(props) {
  const [count,setCount]=   useState(0);

  // let ListofWords = ["Hello","Bye","Good", "Desk"];
  // let count=0;
  const checkWords=()=>{
    setCount();
    let words = text.split(" ");
    let ct=0;
    for(let i=0;i<words.length;i++){
      if(FalseWords.includes(words[i].toLowerCase()))
      ct++;
    }
    setCount(ct)
  }
  const UpperCase = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase!", "success");
  };
  const LowerCase = () => { 
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase!", "success");
  };
  const CopyTo = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Copied to Clipboard!", "success");
  };
  const ClearTo = () => {
    setText("");
    props.showAlert("Text is Cleared!", "success");
  };
  const RemoveSpace = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra Spaces Removed!", "success");
  };
  const ChangeOn = (event) => {
    setText(event.target.value);
    // count= checkWords();
  };
  const [text, setText] = useState("");

  return (
    <>
      <div>
        <h1>{props.heading}</h1>

        <div className="mb-3">
          <textarea
            value={text}
            onChange={ChangeOn}
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="6"
          ></textarea>
        </div>
        <button
          disabled={text.length === 0}
          className="btn btn-primary my-3 mx-3"
          onClick={UpperCase}
        >
          UpperCase
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary my-3 mx-3"
          onClick={LowerCase}
        >
          LowerCase
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary my-3 mx-3"
          onClick={CopyTo}
        >
          Copy
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary my-3 mx-3"
          onClick={ClearTo}
        >
          Clear
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary my-3 mx-3"
          onClick={RemoveSpace}
        >
          Remove Extra Spaces
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary my-3 mx-3"
          onClick={checkWords}
        >
          Check Words
        </button>
      </div>
      <div className="container my-3">
        <h2>Your Text Summary</h2>
        <p>
          {
            text.split(/\s+/).filter((element) => {
              return element.length !== 0;
            }).length
          }{" "}
          words and {text.length} characters.

        </p>
        <p>No of False Words are {count}</p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Nothing to preview!"}</p>
      </div>
    </>
  );
}
