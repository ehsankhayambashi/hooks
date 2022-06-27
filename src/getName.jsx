import React, { useContext } from "react";
import UserContext from "./userContext";

function GetName() {
  const { setUsername, username } = useContext(UserContext);
  return (
    <input
      type="text"
      onChange={(e) => {
        setUsername(e.target.value);
      }}
      value={username}
    />
  );
}

export default GetName;
