<template>
    <span class=" text-center block mb-4 text-lg font-semibold">成都市未来三日天气</span>
    <div class="flex flex-wrap gap-4 p-1 bg-gray-50 rounded-lg">
        <div class="flex space-x-4 overflow-x-auto">
            <div v-for="item in weatherView" :key="item.fxDate"
                class="w-48 h-24 p-1 border rounded-lg shadow-sm grid place-items-center bg-white">
                <div class=" text-center font-medium text-xs text-black">{{ item.fxDate }}</div>
                <img src="@/assets/imgs/weather/sunny.svg" alt="sunny" class=" content-center w-6 h-6">
                <div class=" text-center text-gray-600">{{ item.textDay }}</div>
                <div class=" text-center text-gray-600">{{ item.tempMax }}/{{ item.windDirDay }}</div>
            </div>
        </div>
    </div>
</template>

<script lang="js" setup>
import { ref, onMounted } from 'vue';
import { getWeatherData } from '../../utils/weatherRequest';

const response = ref(null);
const weatherView = ref([]);    // 用于展示的数据 对象数组

async function getWeatherDataFun() {
    console.log('0@get weather data... ');
    response.value = await getWeatherData();
    console.log('2@weather data: ', response.value);
}

function remakeWeatherData(dailyData) {
    return dailyData.map(item => {
        // 处理日期格式，将 "yyyy-MM-dd" 转换为 "MM-dd"
        const formattedDate = item.fxDate ? item.fxDate.split('-').slice(1).join('-') : '';

        return {
            fxDate: formattedDate, // 处理后的日期
            textDay: item.textDay || '', // 白天天气现象
            textNight: item.textNight || '', // 夜间天气现象
            tempMax: item.tempMax || 0, // 最高温度
            tempMin: item.tempMin || 0, // 最低温度
            windDirDay: item.windDirDay || '', // 白天风向
            windDirNight: item.windDirNight || '' // 夜间风向
        };
    });
}


async function weatherDataHandler() {
    await getWeatherDataFun();
    // getWeatherDataFun().then(() => {
    //     console.log('3@weather raw data: ', response.value);
    //     console.log('4@weather daily data: ', response.value.data.daily)
    //     console.log('5@remake data: ', remakeWeatherData(response.value.data.daily))
    //     const weatherView = remakeWeatherData(response.value.data.daily);
    // })
    console.log('3@weather raw data: ', response.value);
    console.log('4@weather daily data: ', response.value.data.daily)
    console.log('5@remake data: ', remakeWeatherData(response.value.data.daily))
    weatherView.value = remakeWeatherData(response.value.data.daily);
}

weatherDataHandler();

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