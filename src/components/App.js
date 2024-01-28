import React, { useEffect, useState } from "react";
import '../styles/App.css';

const App = () => {

  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => { setCount(count + 1) }}>Increment</button>
    </div>
  )
}


export default App;