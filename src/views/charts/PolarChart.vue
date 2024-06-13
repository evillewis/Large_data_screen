<script setup>
import {ref,onMounted} from 'vue'
import * as echarts from 'echarts';

let chart = ref()
onMounted(()=>{
    chartInit()
})
const chartInit = ()=>{
    var chart_3193e5d09b5f41e2b35bec76267175f4 = echarts.init(chart.value);
    var option_3193e5d09b5f41e2b35bec76267175f4 = {
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
            "coordinateSystem": "polar",
            "symbolSize": 4,
            "data": [
                2883,
                47,
                99,
                125,
                153,
                583,
                818,
                1462,
                1942,
                5075,
                5188,
                5734
            ],
            "label": {
                "show": false,
                "margin": 8
            },
            "areaStyle": {
                "opacity": 0
            }
        }
    ],
    "legend": [
        {
            "data": [
                ""
            ],
            "selected": {}
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
    "radiusAxis": {
        "nameGap": 15,
        "inverse": false,
        "scale": false,
        "splitNumber": 5,
        "minInterval": 0
    },
    "angleAxis": {
        "startAngle": 90,
        "data": [
            "\u6731\u671d\u9633",
            "\u53f6\u519b",
            "\u5f90\u9759",
            "\u53f6\u9a70\u654f",
            "\u6731\u6c38\u5e73",
            "\u5468\u6625\u7ea2",
            "\u6731\u6676\u6676",
            "\u738b\u7476",
            "\u9648\u51a0\u58f0",
            "\u4e25\u826f",
            "\u666e\u666e",
            "\u5f20\u4e1c\u5347"
        ],
        "clockwise": false,
        "type": "category",
        "scale": false,
        "splitNumber": 5
    },
    "polar": {
        "center": [
            "50%",
            "50%"
        ]
    }
};
        chart_3193e5d09b5f41e2b35bec76267175f4.setOption(option_3193e5d09b5f41e2b35bec76267175f4);
}

</script>


<template>
    <div ref="chart" id="3193e5d09b5f41e2b35bec76267175f4" class="chart-container" style="width:600px; height:500px; "></div>
</template>
