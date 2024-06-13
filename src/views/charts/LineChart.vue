<script setup>
import {ref,onMounted} from 'vue'
import * as echarts from 'echarts';

let chart = ref()
onMounted(()=>{
    chartInit()
})
const chartInit = ()=>{
    var chart_49db5491e29448b2a642ae2d2aa3bb91 = echarts.init(chart.value);
    var option_49db5491e29448b2a642ae2d2aa3bb91 = {
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
            "type": "line",
            "name": "\u5f39\u5e55\u6570",
            "connectNulls": false,
            "xAxisIndex": 0,
            "symbolSize": 4,
            "showSymbol": true,
            "smooth": false,
            "clip": true,
            "step": false,
            "data": [
                [
                    "\u7b2c01\u96c6",
                    27536
                ],
                [
                    "\u7b2c02\u96c6",
                    17452
                ],
                [
                    "\u7b2c03\u96c6",
                    12745
                ],
                [
                    "\u7b2c04\u96c6",
                    17554
                ],
                [
                    "\u7b2c05\u96c6",
                    17372
                ],
                [
                    "\u7b2c06\u96c6",
                    22180
                ],
                [
                    "\u7b2c07\u96c6",
                    15915
                ],
                [
                    "\u7b2c08\u96c6",
                    11686
                ],
                [
                    "\u7b2c09\u96c6",
                    13582
                ],
                [
                    "\u7b2c10\u96c6",
                    17862
                ],
                [
                    "\u7b2c11\u96c6",
                    13772
                ],
                [
                    "\u7b2c12\u96c6",
                    14209
                ]
            ],
            "hoverAnimation": true,
            "label": {
                "show": false,
                "margin": 8
            },
            "logBase": 10,
            "seriesLayoutBy": "column",
            "lineStyle": {
                "show": true,
                "width": 1,
                "opacity": 1,
                "curveness": 0,
                "type": "solid"
            },
            "areaStyle": {
                "opacity": 0
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
                        "yAxis": 16822.083333333332
                    }
                ]
            },
            "zlevel": 0,
            "z": 0,
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
                "\u5f39\u5e55\u6570"
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
        chart_49db5491e29448b2a642ae2d2aa3bb91.setOption(option_49db5491e29448b2a642ae2d2aa3bb91);
    
    
}
</script>


<template>
    <div ref="chart" id="925de075a3864f9bb82f52bc1d277bbf" class="chart-container" style="width:650px; height: 350px; "></div>
</template>