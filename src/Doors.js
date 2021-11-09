import React, { useState } from "react";
import { Context } from "./App";
import Title2 from "./Title2";

function Doors() {
  const { setTitle, counter, setCounter, color, setColor, handleClick } =
    React.useContext(Context);

  return (
    <div className="container">
      <pre>{JSON.stringify(counter, null, 4)}</pre>
      <Title2 />
      <div
        className="doors"
        style={{ backgroundColor: color.red }}
        name="red"
        onClick={handleClick}
      >
        my red
      </div>
      <div
        className="doors"
        style={{ backgroundColor: color.blue }}
        name="blue"
        onClick={handleClick}
      >
        blue
      </div>
      <div
        className="doors"
        style={{ backgroundColor: color.green }}
        name="green"
        onClick={handleClick}
      >
        green
      </div>
    </div>
  );
}
export default Doors;
