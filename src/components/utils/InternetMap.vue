<template>
  <div class=" flex justify-center items-center">
    <span class=" text-center text-base font-semibold">【互联互通桩分布图】</span>
  </div>
  <baidu-map class="map" :zoom="10" :center="{ lng: 104.066541, lat: 30.657299 }">
  </baidu-map>
</template>

<script setup>
import { ref, onMounted } from 'vue';

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
  height: 100%;
}
</style>