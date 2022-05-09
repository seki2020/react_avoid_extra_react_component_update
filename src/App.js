import { useEffect, useState } from "react";
import "./styles.css";

export default function App() {
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);

  return (
    <div className="App">
      <h1
        onClick={() => {
          setShow(!show);
        }}
      >
        {show ? "hide tab1" : "show tab1"}
      </h1>
      {show && <Tab1 />}
      <h1
        onClick={() => {
          setShow2(!show2);
        }}
      >
        {show2 ? "hide tab2" : "show tab2"}
      </h1>
      {show2 && <Tab2 />}
    </div>
  );
}

function Tab1() {
  const [text, setText] = useState("loading tab1");

  useEffect(() => {
    setTimeout(() => {
      setText("tab1");
    }, 1000);
  }, []);
  console.log("render tab1");
  return <div>{text}</div>;
}

function Tab2() {
  const [text, setText] = useState("loading tab2");

  useEffect(() => {
    setTimeout(() => {
      setText("tab2");
    }, 1000);
  }, []);
  console.log("render tab2");
  return <div>{text}</div>;
}
