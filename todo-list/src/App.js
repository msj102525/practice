import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import TodoBoard from './components/TodoBoard';

// 1. input창이 있고 버튼이 있다.
// 2. input창에 값을 입력하고 버튼을 클릭하면 아이템이 추가된다.
// 3. item 삭제버튼을 누르면 삭제가 가능하다.

function App() {
  const [inputValue, setInputValue] = useState('');
  const [todoList, setTodoList] = useState([]);
  const addItem = () => {
    // console.log("im herererer", inputValue);
    setTodoList([...todoList, inputValue]);
  }

  return (
    <main>
      <input value={inputValue} type='text' onChange={
        (event) => setInputValue(event.target.value)} />
      <button onClick={addItem}>추가</button>

      <TodoBoard todoList={todoList} />
    </main>
  );
}

export default App;
