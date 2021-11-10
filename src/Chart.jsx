
import React, { useState, useEffect, Component, setState } from 'react';
import ReactECharts from 'echarts-for-react';
import { getMA } from './Indicators.js';

function getOption(Data){

    return {
        tooltip : { trigger: 'axis',
                    formatter: function (params) {
                        var res = params[0].seriesName + ' ' + params[0].name;
                        res += '<br/>  시 : ' + params[0].value[2] + '  종 : ' + params[0].value[1];
                        res += '<br/>  고 : ' + params[0].value[4] + '  저 : ' + params[0].value[3];
                        return res;
                    },
                axisPointer: {animation: false,type: 'cross',lineStyle: {color: '#00',width: 1,opacity: 0.5}
            }
        },
        grid: [{top : '7%', height : '80%'},{top : '70%', bottom : '13%'}],
        legend: { data:['MA5'] },
        dataZoom: [
            {type: 'slider',xAxisIndex: [0, 1],realtime: false,start: 0,end: 100},
            {type: 'inside',xAxisIndex: [0, 1],start: 0,end: 100}
        ],
        xAxis : [ {type : 'category', boundaryGap : true, axisTick: {onGap:false}, splitLine: {show:false}, data : Data.X} ,
        {type: 'category',gridIndex: 1,scale: true,boundaryGap: true,axisLine: { onZero: false },axisTick: { show: false },splitLine: { show: false },axisLabel: { show: false }}],
        yAxis : [ {type : 'value',scale:true, boundaryGap: [0.01, 0.01], position: 'right' } , {opposite:true, gridIndex : 1, splitNumber: 2, scale:true, boundaryGap: [0.01, 0.01], min: 'dataMin', max: 'dataMax',} ],
        series : [ 
            { name:'Price', type:'k', data: Data.Y, itemStyle: {color: '#f23743', color0: '#297ee4',borderColor: undefined,borderColor0: undefined} },
            { name: 'MA5', type: 'line', data: getMA(5,Data.Y), smooth: true, showSymbol: false, lineStyle: {width: 1} },
            { name: 'Volume', type: 'bar', yAxisIndex: 1, xAxisIndex: 1,itemStyle: {color: '#297ee4', opacity: 0.5}, data: Data.Z, stack: 'Total'},
            { name: 'Volume2', type: 'bar', yAxisIndex: 1, xAxisIndex: 1,itemStyle: {color: '#f23743', opacity: 0.5}, data: Data.Z2, stack: 'Total'},
        ]
    };                  
}


class Chart extends React.Component {

    constructor(props) { 
        super(props);
        this.state = {data: this.props.data, record: this.props.record};
    }

    render() {
        return (
            <div className="Chart">
                <ReactECharts option={getOption(this.state.data)} style={{height: '800px'}} />
            </div>   
        );
    }
}

export default Chart;