import React, { useReducer } from "react";
import { Route, Routes, Link } from "react-router-dom";
import Form from "./form";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Rtest from "./reducerTest";
import Ref from "./ref";
import UseContext from "./useContext";
import { doSumtging } from "./myTest";

function App() {
  return (
    <React.Fragment>
      <Link to="/form" className="m-3">
        From
      </Link>
      <Link to="/reducer" className="m-3">
        reducer test
      </Link>
      <Link to="/ref" className="m-3">
        useRef
      </Link>
      <Link to="/context" className="m-3">
        useContext
      </Link>
      <Routes>
        <Route path="/form" element={<Form />} />
        <Route path="/reducer" element={<Rtest />} />
        <Route path="/ref" element={<Ref />} />
        <Route path="/context" element={<UseContext />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
