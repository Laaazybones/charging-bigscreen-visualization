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
</template>

<script setup>
import {ref,onMounted} from 'vue';
import DatePicker from '../components/utils/DatePicker.vue';
import MyBaiduMap from '../components/MyBaiduMap.vue';

const center = ref({lng: 0, lat: 0});
const zoom = ref(3);

const handler = ({BMap, map}) => {
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
</style>