import React, { useReducer } from "react";

function Form() {
  const initialState = { name: "", lastName: "" };
  const [state, dispatch] = useReducer(reducer, initialState);
  function reducer(state, action) {
    switch (action.type) {
      case "Handle Input Text":
        return {
          ...state,
          [action.key]: action.value,
        };
      default:
        return state;
    }
  }

  function handleChange(e) {
    dispatch({
      type: "Handle Input Text",
      key: e.target.name,
      value: e.target.value,
    });
  }
  return (
    <div className="container">
      <form>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            placeholder="Name"
            value={state.name}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="last-name">Last Name</label>
          <input
            type="text"
            className="form-control"
            id="last-name"
            name="lastName"
            placeholder="Lastname"
            value={state.lastName}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}
export default Form;
