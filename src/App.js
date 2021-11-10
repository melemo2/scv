
import React, { useState, useEffect } from 'react';
import './App.css';
import Chart from "./Chart.jsx";

function App() {

  //<button onClick={ setData(getStock()) }>load sd</button>
  return (
    <div className="App">
      <Chart record={0} />
      
    </div>
  );
}

export default App;
