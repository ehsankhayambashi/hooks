import React, { useRef } from "react";

function Ref() {
  const inputRef = useRef(null);
  return (
    <div className="container">
      <h3>useRef</h3>
      <input type="text" ref={inputRef} />
      <button
        onClick={() => {
          inputRef.current.value = "";
          inputRef.current.focus();
        }}
      >
        click
      </button>
    </div>
  );
}

export default Ref;
