
<template>
    <div v-if="show">
        <!-- <div class="canvas flex items-center justify-center bg-cyan-900/75 w-11/12 h-[600px] overflow-hidden p-5 m-5 border border-solid border-cyan-200/50"> -->
        <div class="canvas flex items-center justify-center bg-cyan-900/75 w-11/12 h-[600px] overflow-hidden p-5 m-5 border border-solid border-cyan-200/50">
            <button class="absolute h-8 w-8 top-2 right-2 p-2 bg-red-500 text-white flex items-center justify-center rounded-full hover:bg-red-600"
            @click="closeCanvas">
                ×
            </button>
            <Map></Map>
        </div>
    </div>
</template>

<script setup>
import Map from './Map.vue';

const props = defineProps(['show'])
const emit = defineEmits(['update:show'])

function closeCanvas() {
    emit('update:show', false);
    console.log('修改成功，show:', props.show)
}

</script>


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
