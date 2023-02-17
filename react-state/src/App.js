import React,{useState} from 'react';
import './App.css';
import Box from './Box';

export default function App() {
  let count = 0;
  const [count2, setCount2] = useState(0);

  const increase = () => {
    count  = count + 1;
    setCount2(count2+1);
    console.log("count -> ", count, "state count2 ->", count2);
  }
  
  return (
    <main>
      <div>{count}</div>
      <div>state:{count2}</div>
      <button onClick={increase}>증가</button>




      {/* <Box name="문댕동" num="1" />
      <Box name="문딩동" num="2" />
      <Box name="문동댕" num="3" />
      <Box name="댕동문" num="4" /> */}

    </main>
  );
}

