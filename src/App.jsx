import "./App.css";
import React, { useRef, useState } from "react";

const style = {
  border: "1px solid black",
  margin: "10px",
  padding: "10px",
}

function App() {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);

const plusStateCountButtonHandler = () => {
setCount(count + 1 );
}
const plusRefCountButtonHandler = () => {
  countRef.current++;
  console.log(countRef.current);
}

  return (
    <>
      <div
        style={style}
      >
        state 영역입니다.{count}
        <br />
        <button onClick={plusStateCountButtonHandler}> state 증가</button>
      </div>
      {/* countRef는 객체, 객체가 만들어진 거고 
    그안에 있는 초기값에 접근하려면 .current로 들어가야됨 */}
      <div
       style={style}>
        ref 영역입니다. {countRef.current}
        <br />
        <button onClick={plusRefCountButtonHandler}> ref 증가</button>
      </div>
    </>
  );
}

export default App;
