import axios from 'axios';

export function getStock() {
  const axios = require('axios');
  axios.get(`https://api.upbit.com/v1/candles/minutes/60?market=krw-btc&count=70`)
      .then(dataa => {
          console.log(dataa);
  });
}
