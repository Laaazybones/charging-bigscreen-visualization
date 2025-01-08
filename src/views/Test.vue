<template>
    <div>
    测试弹窗
  </div>
  <div class="operate">
    <button @click="open=true" class=" border bg-cyan-200/50 p-3 m-3 flex items-center justify-center">点击弹窗</button>
  </div>
  <Dialog v-if="open" style="min-width: 300px;min-height: 100px" :show=true>
    <template #form>
      <div class="dialogButtom">
        <button @click=sumbit>确定</button>
        <button @click=close>取消</button>
      </div>
    </template>
  </Dialog>

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

  <div>
    地图111
    <!-- 地图 -->
    <Map></Map>
    <!-- <MapChart class=" bg-opacity-50 bg-slate-800 p-3 mt-4 flex-1" :data="data.mapData" /> -->
  </div>

  <div>
    日期111
    <!-- <DateTime></DateTime> -->

  </div>

  <hr>


</template>

<script setup>
import { ref, onMounted } from 'vue';
import DatePicker from '../components/utils/DatePicker.vue';
import MyBaiduMap from '../components/MyBaiduMap.vue';
// import axios from 'axios';
import Weather from '../components/utils/Weather.vue';
import Map from '../components/utils/Map.vue';
import DateTime from '../components/utils/DateTime.vue';

import { getWeatherData } from '../utils/weatherRequest';
import WeatherTest from '../components/utils/WeatherTest.vue';

import Dialog from '../components/utils/Dialog.vue';

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
.dialogButtom{
  display: flex;
  justify-content: flex-end;
  gap: 10px; /* 间隔 */
}
.operate {
  width: 100%;
}
</style>