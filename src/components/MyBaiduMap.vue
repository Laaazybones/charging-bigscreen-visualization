<template>
    <baidu-map class="map" :zoom="12" :center="{lng: 116.404, lat: 39.915}" >
    </baidu-map>
</template>

<script setup>
import {ref,onMounted} from 'vue';

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
  height: 100%;
}
</style>