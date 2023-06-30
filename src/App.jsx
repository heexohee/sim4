
import './App.css';
import React, { useRef } from 'react';


function App() {
  const ref = useRef('초기값');
  console.log('ref', ref);

  ref.current = '변경값';

  return (
    <div className="App">
      ㅇㅅㅇ
    </div>
  );
}

export default App;
