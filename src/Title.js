import React from "react";
import { Context } from "./App";

function Title() {
  const { title } = React.useContext(Context);
  return (
    <div>
      <h1>{title}</h1>
    </div>
  );
}

export default Title;
