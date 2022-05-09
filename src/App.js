import { useState, memo } from "react";
import "./styles.css";

const Text = memo(({ text }) => {
  console.log(`rendering ${text}`);
  return <div>子组件：{text}</div>;
});

export default function App() {
  console.log("rendering App");
  const [count, setCount] = useState(0);
  return (
    <>
      <h1>Click count {count}</h1>
      <Text text={"foo"} />
      <Text text={"bar"} />
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
