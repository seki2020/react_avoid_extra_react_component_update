import { useState, memo } from "react";

const Text = ({ text }) => {
  const [clickTag, setClickTag] = useState(0);

  console.log(`rendering ${text}`);
  return (
    <div
      onClick={() => {
        console.log(1);
        setClickTag(clickTag + 1);
      }}
    >
      子组件：{text} - {clickTag}
    </div>
  );
};

export default function App() {
  console.log("rendering App");
  const [count, setCount] = useState(0);
  const [isChildrenShow, toggleIsChildrenShow] = useState(true);
  return (
    <>
      <h1
        onClick={() => {
          toggleIsChildrenShow(!isChildrenShow);
        }}
      >
        Click count {count}, CLICK to hide all children
      </h1>
      <div style={{ display: isChildrenShow ? "block" : "none" }}>
        <Text text={"foo"} />
        <Text text={"bar"} />
      </div>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        reset App(用来强制更新App组件)
      </button>
      <p>首次载入会初始化3个组件，之后点击只会初始化App</p>
      <p>
        <img src={require("./memo.png")} alt="memo.png" />
      </p>
    </>
  );
}
