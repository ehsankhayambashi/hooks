import React, { createContext, useContext, useReducer } from "react";

const AppContext = createContext();

const initialState = {
  count: 0,
  showText: true,
  number: "",
};

export function MainContext({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  function reducer(state, action) {
    switch (action.type) {
      case "increse-counter":
        return {
          ...state,
          count: state.count + 1,
          showText: !state.showText,
        };
      case "update-fild":
        return {
          ...state,
          [action.field]: action.payload,
        };
      case "update-number":
        return {
          ...state,
          count: parseInt(action.payload),
        };
    }
  }

  return (
    <AppContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export const useMainContext = () => useContext(AppContext);
