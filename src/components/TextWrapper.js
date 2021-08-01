import React from "react";

function TextWrapper(props) {
  return (
    <form style={{ height: "100%", widht: "100%" }}>
      <textarea style={{ height: "100%", width: "100%" }}>
        {props.text}
      </textarea>
    </form>
  );
}

export default TextWrapper;
