import React, { useState } from "react";
import GetName from "./getName";
import ShowUser from "./showUsername";
import UserContext from "./userContext";

function UseContext() {
  const [username, setUsername] = useState("");
  return (
    <div className="container">
      <h3>Use Context</h3>
      <UserContext.Provider value={{ username, setUsername }}>
        <GetName />
        <ShowUser />
      </UserContext.Provider>
    </div>
  );
}

export default UseContext;
