import React, { useContext } from "react";
import UserContext from "./userContext";

function ShowUser() {
  const { username } = useContext(UserContext);
  return <h1>User: {username}</h1>;
}

export default ShowUser;
