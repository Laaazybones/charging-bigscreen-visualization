<template>
  <baidu-map class="map" :zoom="10" :center="{ lng: 104.066541, lat: 30.657299 }" :scroll-wheel-zoom="true" @ready="handleMapReady">
  </baidu-map>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const center = ref({ lng: 0, lat: 0 });
const zoom = ref(3);
const map = ref(null); // 存储地图实例

// 地图初始化完成后的回调
const handleMapReady = ({ map: mapInstance }) => {
  map.value = mapInstance; // 保存地图实例
  console.log('地图已初始化');
};

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
  height: 100%;
}
</style>