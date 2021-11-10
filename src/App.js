
import React, { useState } from 'react';
import './App.css';
import * as getStockData from "./getStockData.js";
import Chart from "./Chart.js";

function App() {

  var [record, r] = useState({d:[
    ['2013/1/24', 2320.26,2320.26,2287.3,2362.94],
    ['2013/1/25', 2300,2291.3,2288.26,2308.38],
    ['2013/1/28', 2295.35,2346.5,2295.35,2346.92],
    ['2013/1/29', 2347.22,2358.98,2337.35,2363.8],
    ['2013/1/30', 2360.75,2382.48,2347.89,2383.76],
    ['2013/1/31', 2383.43,2385.42,2371.23,2391.82],
    ['2013/2/1', 2377.41,2419.02,2369.57,2421.15],
    ['2013/2/4', 2425.92,2428.15,2417.58,2440.38],
    ['2013/2/5', 2411,2433.13,2403.3,2437.42]]});

  return (
    <div className="App">
      
      <Chart data = {record} />
      <button onClick={getStockData.getStock}>Activate Lasers</button>
    </div>
  );
}

export default App;
