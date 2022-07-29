import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("converted to uppercase", "success");
  };

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("converted to lowerercase", "success");
  };
  const handleCopy = () => {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("text copy", "success");
  };

  const reverseText = () => {
    let newText = text.split("").reverse().join("");
    setText(newText);
    props.showAlert("string reverse", "success");
  };

  const handleclClick = () => {
    let newText = "";
    setText(newText);
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const [text, setText] = useState("");
  //setText("new text");
  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "#042743" }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "dark" ? "grey" : "white",
              color: props.mode === "dark" ? "white" : "#042743",
            }}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button
          type="button"
          class="btn btn-primary mx-1"
          onClick={handleUpClick}
        >
          convert to uppercase
        </button>

        <button
          type="button"
          class="btn btn-primary mx-1"
          onClick={handleLoClick}
        >
          convert to Lowercase
        </button>

        <button type="button" class="btn btn-primary" onClick={handleclClick}>
          clear
        </button>

        <button type="button" class="btn btn-primary mx-1" onClick={handleCopy}>
          copyText
        </button>

        <button
          type="button"
          class="btn btn-primary mx-1"
          onClick={reverseText}
        >
          Reverse string
        </button>
      </div>
      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "#042743" }}
      >
        <h1>Your text summary</h1>
        <p>
          {text.split(" ").length} words and {text.length} cahracters
        </p>
        <p>{0.008 * text.split(" ").length}</p>
        <h2>preview</h2>
        <p>
          {text.length > 0
            ? text
            : "Enter something in the textbox above to preview it here"}
        </p>
      </div>
    </>
  );
}
