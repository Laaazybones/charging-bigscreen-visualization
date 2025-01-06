<template>
    <span class=" text-center block mb-4 text-lg font-semibold">成都市未来三日天气</span>
    <div class="flex flex-wrap gap-4 p-1 bg-gray-50 rounded-lg">
        <div class="flex space-x-4 overflow-x-auto">
            <div v-for="item in weather" :key="item.fxDate" 
            class="w-48 h-24 p-1 border rounded-lg shadow-sm grid place-items-center bg-white">
                <div class=" text-center font-medium text-xs text-blue-800">{{ item.fxDate }}</div>
                <img src="@/assets/imgs/weather/sunny.svg" alt="sunny" class=" content-center w-6 h-6">
                <div class=" text-center text-gray-600">{{ item.textDay }}</div>
                <div class=" text-center text-gray-600">{{ item.tempMax }}/{{ item.windDirDay }}</div>
            </div>
        </div>
    </div>
</template>

<script lang="js" setup>

const weather = [
    {
        'fxDate': '01.06',
        'textDay': '阴',
        'textNight': '小雨',
        'tempMax': '13',
        'tempMin': '1',
        'windDirDay': '北风',
        'windDirNight': '北风'
    },
    {
        'fxDate': '01.07',
        'textDay': '晴',
        'textNight': '晴',
        'tempMax': '14',
        'tempMin': '2',
        'windDirDay': '西风',
        'windDirNight': '北风'
    },
    {
        'fxDate': '01.08',
        'textDay': '多云',
        'textNight': '晴',
        'tempMax': '15',
        'tempMin': '3',
        'windDirDay': '西南风',
        'windDirNight': '南风'
    },
]

</script>


<style scoped></style>