import React, { useReducer } from "react";
import { useMainContext } from "./contexApi/MainContext";

function Rtest() {
  const { state, dispatch } = useMainContext();
  // const initialState = {
  //   count: 0,
  //   showText: true,
  //   number: "",
  // };
  // const [state, dispatch] = useReducer(reducer, initialState);

  // function reducer(state, action) {
  //   switch (action.type) {
  //     case "increse-counter":
  //       return {
  //         ...state,
  //         count: state.count + 1,
  //         showText: !state.showText,
  //       };
  //     case "update-fild":
  //       return {
  //         ...state,
  //         [action.field]: action.payload,
  //       };
  //     case "update-number":
  //       return {
  //         ...state,
  //         count: parseInt(action.payload),
  //       };
  //   }
  // }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch({ type: "update-number", payload: state.number });
  }
  return (
    <div className="App">
      <h1>{state.count}</h1>
      {state.showText && <h3>segonz</h3>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="number"
          value={state.number}
          onChange={(e) =>
            dispatch({
              type: "update-fild",
              payload: e.target.value,
              field: "number",
            })
          }
        />
        <button type="submit" onClick={(e) => {}}>
          submit
        </button>
      </form>
      <button onClick={() => dispatch({ type: "increse-counter" })}>Tap</button>
    </div>
  );
}

export default Rtest;
