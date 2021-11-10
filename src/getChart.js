
export default function getOption(X, Y){

    return {
        title : {
            text: '2013年上半年上证指数'
        },
        tooltip : {
            trigger: 'axis',
            formatter: function (params) {
                var res = params[0].seriesName + ' ' + params[0].name;
                res += '<br/>  开盘 : ' + params[0].value[0] + '  最高 : ' + params[0].value[3];
                res += '<br/>  收盘 : ' + params[0].value[1] + '  最低 : ' + params[0].value[2];
                return res;
            }
        },
        legend: {
            data:['上证指数']
        },
        toolbox: {
            show : true,
            feature : {
                mark : {show: true},
                dataZoom : {show: true},
                dataView : {show: true, readOnly: false},
                magicType: {show: true, type: ['line', 'bar']},
                restore : {show: true},
                saveAsImage : {show: true}
            }
        },
        dataZoom : {
            show : true,
            realtime: true,
            start : 50,
            end : 100
        },
        xAxis : [
            {
                type : 'category',
                boundaryGap : true,
                axisTick: {onGap:false},
                splitLine: {show:false},
                data : X
            }
        ],
        yAxis : [
            {
                type : 'value',
                scale:true,
                boundaryGap: [0.01, 0.01]
            }
        ],
        series : [
            {
                name:'上证指数',
                type:'k',
                data: Y
            }
        ]
    };
                    
}
