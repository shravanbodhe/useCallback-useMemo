import { useState, useCallback } from 'react'

import './App.css'
import Child from './Child';
import ChildWithUsecallbackAndMemo from './ChildWithUsecallbackAndMemo';

function App() {

  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  const increment = () => {
    setCount(count + 1);
  };

  
  const incrementWithUseCallback = useCallback(() => {
    setCount(c => c + 1);
  }, []);
  return (
    <>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <Child count={count} onIncrement={increment} />
  


      {/* <input
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <ChildWithUsecallbackAndMemo count={count} onIncrement={incrementWithUseCallback} /> */}


    </>
  );
}

export default App


