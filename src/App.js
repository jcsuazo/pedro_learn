import React from "react";
import "./styles.css";
import Doors from "./Doors";
import Title from "./Title";

export const Context = React.createContext();

export default function App() {
  const [title, setTitle] = React.useState("This is the title");
  const [counter, setCounter] = React.useState(false);
  const [color, setColor] = React.useState({
    red: "red",
    blue: "blue",
    green: "green",
  });

  function handleClick(event) {
    const name = event.target.getAttribute("name");
    if (counter) {
      setTitle("hello world");
    }
    setCounter(true);

    setColor(function (preValue) {
      switch (name) {
        case "red":
          return { ...preValue, [name]: "black" };
        case "blue":
          return { ...preValue, [name]: "yellow" };
        case "green":
          return { ...preValue, [name]: "purple" };
        default:
          return preValue;
      }
    });
  }

  const initialValues = {
    color,
    title,
    counter,
    setColor,
    setTitle,
    setCounter,
    handleClick,
  };

  return (
    <Context.Provider value={initialValues}>
      <div>
        <Title />
        <Doors />
      </div>
    </Context.Provider>
  );
}
