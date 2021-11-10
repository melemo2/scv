import axios from 'axios';

export default function getStock() {
  
  var Xlist = new Array();
  var Ylist = new Array();

  console.log("click");
  const axios = require('axios');
  axios.get('https://api.upbit.com/v1/candles/days?market=krw-btc&count=10')
  .then(response => {
    for(var i = 0; i < response.data.length; i++){
      Xlist.push(response.data[i].candle_date_time_utc.split('T')[0]);
      Ylist.push([response.data[i].trade_price, response.data[i].opening_price, response.data[i].low_price, response.data[i].high_price]);
    }
  });

  return {X : Xlist, Y : Ylist};
}