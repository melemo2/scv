
function parseData(res) {
    var Xlist = new Array(); // Time
    var Ylist = new Array(); // Price
    var Zlist = new Array(); // Volume up
    var Z2list = new Array(); // Volume down
    for(var i = 0; i < res.length; i++){
        Xlist.push(res[i].candle_date_time_utc.split('T')[0]);
        Ylist.push([res[i].trade_price, res[i].opening_price, res[i].low_price, res[i].high_price]);
        if (res[i].opening_price <= res[i].trade_price) {
            Zlist.push(res[i].candle_acc_trade_volume);
            Z2list.push('-');
        }else{
            Z2list.push(res[i].candle_acc_trade_volume);
            Zlist.push('-');
        }
        

    }
    return {X : Xlist, Y : Ylist, Z : Zlist, Z2 : Z2list};
}

export function getData() {
	const promiseMSFT = fetch("https://api.upbit.com/v1/candles/days?market=krw-btc&count=31")
		.then(response => response.json())
		.then(data => parseData(data))
	return promiseMSFT;
}