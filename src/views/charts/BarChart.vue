<script setup>
import {ref,onMounted} from 'vue'
import * as echarts from 'echarts';

let chart = ref()
onMounted(()=>{
    chartInit()
})
const chartInit = ()=>{
    var chart_a3305b4967ce4615a9d4ad0a5ecac71d = echarts.init(chart.value);
    var option_a3305b4967ce4615a9d4ad0a5ecac71d = {
    "animation": true,
    "animationThreshold": 2000,
    "animationDuration": 1000,
    "animationEasing": "cubicOut",
    "animationDelay": 0,
    "animationDurationUpdate": 300,
    "animationEasingUpdate": "cubicOut",
    "animationDelayUpdate": 0,
    "aria": {
        "enabled": false
    },
    "series": [
        {
            "type": "bar",
            "name": "\u70b9\u8d5e\u6570",
            "legendHoverLink": true,
            "data": [
                433552,
                273250,
                181883,
                293676,
                280789,
                382336,
                133524,
                131979,
                208268,
                217005,
                134239,
                124505
            ],
            "realtimeSort": false,
            "showBackground": false,
            "stackStrategy": "samesign",
            "cursor": "pointer",
            "barMinHeight": 0,
            "barCategoryGap": "20%",
            "barGap": "30%",
            "large": false,
            "largeThreshold": 400,
            "seriesLayoutBy": "column",
            "datasetIndex": 0,
            "clip": true,
            "zlevel": 0,
            "z": 2,
            "label": {
                "show": false,
                "margin": 8
            },
            "markPoint": {
                "label": {
                    "show": true,
                    "position": "inside",
                    "color": "#fff",
                    "margin": 8
                },
                "data": [
                    {
                        "name": "Max",
                        "type": "max"
                    },
                    {
                        "name": "Min",
                        "type": "min"
                    }
                ]
            },
            "markLine": {
                "silent": false,
                "precision": 2,
                "label": {
                    "show": true,
                    "margin": 8
                },
                "data": [
                    {
                        "name": "yAxis=y",
                        "yAxis": 232917.16666666666
                    }
                ]
            },
            "rippleEffect": {
                "show": true,
                "brushType": "stroke",
                "scale": 2.5,
                "period": 4
            }
        }
    ],
    "legend": [
        {
            "data": [
                "\u70b9\u8d5e\u6570"
            ],
            "selected": {},
            "show": true,
            "left": "center",
            "top": "20px",
            "orient": "horizontal",
            "padding": 5,
            "itemGap": 10,
            "itemWidth": 25,
            "itemHeight": 14,
            "textStyle": {
                "fontSize": 12
            },
            "backgroundColor": "transparent",
            "borderColor": "#ccc",
            "borderRadius": 0,
            "pageButtonItemGap": 5,
            "pageButtonPosition": "end",
            "pageFormatter": "{current}/{total}",
            "pageIconColor": "#2f4554",
            "pageIconInactiveColor": "#aaa",
            "pageIconSize": 15,
            "animationDurationUpdate": 800,
            "selector": false,
            "selectorPosition": "auto",
            "selectorItemGap": 7,
            "selectorButtonGap": 10
        }
    ],
    "tooltip": {
        "show": true,
        "trigger": "item",
        "triggerOn": "mousemove|click",
        "axisPointer": {
            "type": "line"
        },
        "showContent": true,
        "alwaysShowContent": false,
        "showDelay": 0,
        "hideDelay": 100,
        "enterable": false,
        "confine": false,
        "appendToBody": false,
        "transitionDuration": 0.4,
        "textStyle": {
            "fontSize": 14
        },
        "borderWidth": 0,
        "padding": 5,
        "order": "seriesAsc"
    },
    "xAxis": [
        {
            "show": true,
            "scale": false,
            "nameLocation": "end",
            "nameGap": 15,
            "gridIndex": 0,
            "inverse": false,
            "offset": 0,
            "splitNumber": 5,
            "minInterval": 0,
            "splitLine": {
                "show": true,
                "lineStyle": {
                    "show": true,
                    "width": 1,
                    "opacity": 1,
                    "curveness": 0,
                    "type": "solid"
                }
            },
            "data": [
                "\u7b2c01\u96c6",
                "\u7b2c02\u96c6",
                "\u7b2c03\u96c6",
                "\u7b2c04\u96c6",
                "\u7b2c05\u96c6",
                "\u7b2c06\u96c6",
                "\u7b2c07\u96c6",
                "\u7b2c08\u96c6",
                "\u7b2c09\u96c6",
                "\u7b2c10\u96c6",
                "\u7b2c11\u96c6",
                "\u7b2c12\u96c6"
            ]
        }
    ],
    "yAxis": [
        {
            "show": true,
            "scale": false,
            "nameLocation": "end",
            "nameGap": 15,
            "gridIndex": 0,
            "inverse": false,
            "offset": 0,
            "splitNumber": 5,
            "minInterval": 0,
            "splitLine": {
                "show": true,
                "lineStyle": {
                    "show": true,
                    "width": 1,
                    "opacity": 1,
                    "curveness": 0,
                    "type": "solid"
                }
            }
        }
    ],
    "title": [
        {
            "show": true,
            "target": "blank",
            "subtarget": "blank",
            "padding": 5,
            "itemGap": 10,
            "textAlign": "auto",
            "textVerticalAlign": "auto",
            "triggerEvent": false
        }
    ]
};
        chart_a3305b4967ce4615a9d4ad0a5ecac71d.setOption(option_a3305b4967ce4615a9d4ad0a5ecac71d);
    
    
} 

</script>


<template>
    <div ref="chart" id="d2b9861355f5452fbbed42e59d4e6eec" class="chart-container" style="width:600px; height:480px; "></div>
</template>