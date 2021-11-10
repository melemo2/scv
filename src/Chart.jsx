
import React, { useState, useEffect, Component } from 'react';
import ReactECharts from 'echarts-for-react';
import getStock from "./getStockData.jsx";

function getOption(Data){
    console.log(Data.X);
    console.log(Data.Y);
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
        dataZoom : { show : true, realtime: true, start : 50, end : 100 },
        xAxis : [ {type : 'category', boundaryGap : true, axisTick: {onGap:false}, splitLine: {show:false}, data : Data.X} ],
        yAxis : [ {type : 'value', scale:true, boundaryGap: [0.01, 0.01] } ],
        series : [ {name:'일봉', type:'k', data: Data.Y} ]
    };                  
}

class Chart extends React.Component {

    constructor(props) { 
        super(props);
        this.state = {data: getStock() , record: this.props.record};
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