
import React, { useState, useEffect, Component, setState } from 'react';
import ReactECharts from 'echarts-for-react';

function getOption(Data){

    console.log(Data.X);
    return {
        title : { text: '2013년 삼성전자 일봉' },
        tooltip : { trigger: 'axis',
            formatter: function (params) {
                var res = params[0].seriesName + ' ' + params[0].name;
                res += '<br/>  시 : ' + params[0].value[2] + '  종 : ' + params[0].value[1];
                res += '<br/>  고 : ' + params[0].value[4] + '  저 : ' + params[0].value[3];
                return res;
            }
        },
        legend: { data:['일봉'] },
        toolbox: { show : true,
            feature : {
                mark : {show: true},
                dataZoom : {show: true},
                dataView : {show: true, readOnly: false},
                magicType: {show: true, type: ['line', 'bar']},
                restore : {show: true},
                saveAsImage : {show: true}
            }
        },
        dataZoom : { show : true, realtime: true, start : 0, end : 100 },
        xAxis : [ {type : 'category', boundaryGap : true, axisTick: {onGap:false}, splitLine: {show:false}, data : Data.X} ],
        yAxis : [ {type : 'value', scale:true, boundaryGap: [0.01, 0.01] } ],
        series : [ {name:'일봉', type:'k', data: Data.Y} ]
    };                  
}


class Chart extends React.Component {

    constructor(props) { 
        super(props);

        this.state = {data: {} , record: this.props.record};

        const axios = require('axios');
  
        axios.get('https://api.upbit.com/v1/candles/days?market=krw-btc&count=30')
        .then(response => {
          var Xlist = new Array();
          var Ylist = new Array();
          for(var i = 0; i < response.data.length; i++){
            Xlist.push(response.data[i].candle_date_time_utc.split('T')[0]);
            Ylist.push([response.data[i].trade_price, response.data[i].opening_price, response.data[i].low_price, response.data[i].high_price]);
          }
          this.setState( {data : {X : Xlist, Y : Ylist}});      
        });   
    }

    render() {
        return (
            <div className="Chart">
                <ReactECharts option={getOption(this.state.data)} />
            </div>   
        );
    }
}

export default Chart;