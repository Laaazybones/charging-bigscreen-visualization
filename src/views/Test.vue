<template>
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
      <Weather/>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import DatePicker from '../components/utils/DatePicker.vue';
import MyBaiduMap from '../components/MyBaiduMap.vue';
// import { getWeatherData } from '../utils/weatherRequest';
// import axios from 'axios';
import Weather from '../components/utils/Weather.vue';

// getWeatherData();

// const weatherDataRaw = null;
// async function getWeatherData() {
//   const requestData = await axios({
//     url: 'https://devapi.qweather.com/v7/weather/3d?location=101270101',
//     method: 'GET',
//     headers: { 'X-QW-Api-Key': '958dc2572f934599bec8cf8c90863aaf' }
//   });
//   console.log('@weather data: ', requestData);
//   weatherDataRaw = requestData;
// }

// console.log('@@', weatherDataRaw);



// getWeatherData();
// console.log('@@weather data: ', weatherDataRaw);

// const viewWeatherData = ['fxDate', 'textDay', 'textNight', 'tempMax', 'tempMin', 'windDirDay', 'windDirNight'];

// const weatherData = weatherDataRaw.map(item => {
//   const newWeatherItem = {};
//   viewWeatherData.forEach(field => {
//     if (item.hasOwnProperty(field)) {
//       newWeatherItem[field] = item[field];
//     }
//   });
//   return newWeatherItem;
// })

// console.log(weatherData);


const center = ref({ lng: 0, lat: 0 });
const zoom = ref(3);

const handler = ({ BMap, map }) => {
  console.log(BMap, map);
  center.value.lng = 116.404;
  center.value.lat = 39.915;
  zoom.value = 15;
}

// const weatherData = weatherRequest.getWeatherData();
// console.log('@weatherData: ', weatherData);
</script>

<style>
.map {
  width: 100%;
  height: 400px;
}
</style>