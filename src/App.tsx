import { useState } from 'react';
import './App.css';

function App() {
  function rotate() {
    setDegree(deg => deg + 20);
  }

  const [rotationDegree, setDegree] = useState(0);
  return (
    <div>
      <img 
        alt="mi imagia" 
        style={{
          transform: `rotate(${rotationDegree}deg)`
        }}
        src="https://pixabay.com/get/g27bff157a2a6d5c92a2bebe3850e59356f20044e4a5d2f62a130a9dc12cc61b1b7750523deb960cad88f98b67f51584d753d5eb6c1c7d240cf4f2c24bda6f9ba_640.jpg" />
      <button
        onClick={() => rotate()}>Rotate</button>
    </div>
  );
}

export default App;
