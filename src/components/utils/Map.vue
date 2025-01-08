<template>
    <div class=" w-full h-full" >
        <div ref="chengduMap" class="w-full h-full">地图</div>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import * as echarts from 'echarts'
import mapJson from '@/assets/MapData/chengdu.json'

const chengduMap = ref()

onMounted(() => {
    drawMap()
})

let regions = [
    {
        name: '金牛区',
        itemStyle: {
            areaColor: '#374ba4',
            opacity: 1
        },
    },
    {
        name: '武侯区',
        itemStyle: {
            areaColor: '#fe9b45',
            opacity: 1
        },
    },
    // {
    //     name: '锦江区',
    //     itemStyle: {
    //         areaColor: '#fb691b',
    //         opacity: 1
    //     },
    // },
    {
        name: '成华区',
        itemStyle: {
            areaColor: '#ffc556',
            opacity: 1
        },
    },
    {
        name: '青羊区',
        itemStyle: {
            areaColor: 'yellow',
            opacity: 1
        },
    },
    {
        name: '青白江区',
        itemStyle: {
            areaColor: '#FFA07A',
            opacity: 1
        },
    },
    {
        name: '双流区',
        itemStyle: {
            areaColor: '#D2B48C',
            opacity: 1
        },
    },
]

let scatter = [
    { name: '潮音公交', value: [103.97923, 30.63881, 9] },
    { name: '火北公交', value: [104.06741, 30.69539, 9] },
    { name: '韦家碾公交', value: [104.08470, 30.71958, 9] },
    { name: '普明公交', value: [103.96591, 30.54059, 9] },
    { name: '国防乐园公交', value: [104.03706, 30.58668, 9] },
    { name: '国际商贸城公交', value: [104.08025, 30.80311, 9] },
    { name: '青白江公交', value: [104.22560, 30.89778, 9] },
    { name: '桂林公交', value: [104.18274, 30.71211, 9] },
    { name: '两河公交', value: [103.97441, 30.70665, 9] },
]

function drawMap() {
    var myChart = echarts.init(chengduMap.value)

    echarts.registerMap('chengdu', mapJson) //注册可用的地图
    var option = {
        geo: {
            map: 'chengdu',
            roam: true, //是否允许缩放，拖拽
            zoom: 1, //初始化大小
            //缩放大小限制
            scaleLimit: {
                min: 1, //最小
                max: 10, //最大
            },
            //设置中心点
            center: [103.90, 30.85],
            //省份地图添加背景
            regions: regions,
            itemStyle: {
                areaColor: '#9ADBE8',   // 地图颜色
                color: 'orange',
                borderColor: '#232652',
                borderWidth: 2,
            },
            //高亮状态
            emphasis: {
                itemStyle: {
                    areaColor: '#1af9e5',
                    color: 'red',
                },
            },
        },

        //配置属性
        series: {
            type: 'effectScatter',
            coordinateSystem: 'geo',
            data: scatter,
            showEffectOn: 'render',
            rippleEffect: {
                //涟漪特效相关配置
                brushType: 'fill', //波纹的绘制方式，可选 'stroke' 和 'fill'
            },
            hoverAnimation: true, //是否开启鼠标 hover 的提示动画效果
            label: {
                //图形上的文本标签，可用于说明图形的一些数据信息，比如值，名称等，
                normal: {
                    formatter: '{b}',
                    position: 'right',
                    show: true,
                },
            },
            itemStyle: {
                //图形样式，normal 是图形在默认状态下的样式；emphasis 是图形在高亮状态下的样式，比如在鼠标悬浮或者图例联动高亮时
                normal: {
                    color: '#ffffff', //散点的颜色
                    shadowBlur: 10,
                    shadowColor: 20,
                    fontSize: '12px',
                },
            },
            zlevel: 1,
        },
    }
    myChart.setOption(option)
}
</script>

<style lang="scss" scoped></style>