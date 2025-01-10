<template>
  <div>
    测试弹窗
  </div>
  <div class=" w-full">
    <button @click="open = true" class=" border bg-cyan-200/50 p-3 m-3 flex items-center justify-center">点击弹窗</button>
    <!-- <ZoomMapTest v-if="open" style="min-width: 300px;min-height: 100px" v-model:show="open"> -->
    <ZoomMapTest v-if="open" class=" w-full h-full" v-model:show="open">
    </ZoomMapTest>
  </div>

  <hr>
  <br><br><br>
  <h1>
    Test
  </h1>
  地图
  <MyBaiduMap />

  <div>
    日期选择器
    <DatePicker />
  </div>

  <hr>
  <hr>

  <div>
    天气数据：
    <!-- {{ weatherData }} -->
    <!-- <Weather /> -->
    <WeatherTest />
  </div>
  
  <hr>
  
  <div class=" w-full h-[300px] bg-cyan-200 ">
    <!-- 地图111 -->
    <!-- <Map class="canvas flex items-center justify-center bg-cyan-900/75 w-11/12 h-[600px] overflow-hidden p-5 m-5 border border-solid border-cyan-200/50"></Map> -->
    <Map class=""></Map>
    地图222
  </div>

  <!-- <div>
    日期111
    <DateTime></DateTime>
  </div> -->

  <hr>


</template>

<script setup>
import { ref, onMounted } from 'vue';
import DatePicker from '../components/utils/DatePicker.vue';
import MyBaiduMap from '../components/MyBaiduMap.vue';
// import axios from 'axios';
import Weather from '../components/utils/Weather.vue';

import DateTime from '../components/utils/DateTime.vue';

import { getWeatherData } from '../utils/weatherRequest';
import WeatherTest from '../components/utils/WeatherTest.vue';
import Map from '../components/utils/Map.vue';
import ZoomMapTest from '../components/utils/ZoomMapTest.vue';

const open = ref(false)

function sumbit() {
  open.value = false
}
function close() {
  open.value = false
}

// ----------------------------------------- 

const center = ref({ lng: 0, lat: 0 });
const zoom = ref(3);

const handler = ({ BMap, map }) => {
  console.log(BMap, map);
  center.value.lng = 116.404;
  center.value.lat = 39.915;
  zoom.value = 15;
}
</script>

<style>
.map {
  width: 100%;
  height: 400px;
}

.dialogButtom {
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  /* 间隔 */
}

.operate {
  width: 100%;
}

.canvas {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
</style>