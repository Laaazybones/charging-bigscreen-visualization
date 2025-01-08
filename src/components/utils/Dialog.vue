<script setup>
defineProps(['show'])

import Map from './Map.vue';

function closeCanvas() {
    this.show = false;
}
</script>



<template>
    <div v-if="show">
        <div class="canvas flex items-center justify-center bg-cyan-900/75 w-11/12 h-[600px] overflow-hidden p-5 m-5 border border-solid border-cyan-200/50">
            <button class="absolute top-2 right-2 p-2 bg-red-500 text-white rounded-full hover:bg-red-600"
            @click="closeCanvas">
                x
            </button>
            <Map></Map>
        </div>
    </div>
</template>

<style scoped>
.box {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border: 2px solid #000;
    padding: 5px;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    background-color: white;
}

.canvas {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.main {
    top: 0;
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .5);
}
</style>
