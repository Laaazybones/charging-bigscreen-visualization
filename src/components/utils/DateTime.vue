<template>
    <div class=" w-full h-28 p-10 mt-5 flex justify-center items-center bg-opacity-50  bg-gray-500/50">
        <div ref="dateTime" class="text-center">
            {{ date }} {{ time }} {{ week }}
        </div>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'

// const dateTime = ref(null)
const date = ref('') // 当前日期
const time = ref('') // 当前时间
const week = ref('') // 当前星期

// 格式化日期、时间、星期
function updateDateTime() {
    const now = new Date()

    // 格式化日期：YYYY年MM月DD日
    date.value = now.toLocaleDateString('zh-CN', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
    }).replace(/\//g, '年').replace(/\//g, '月') + '日'

    // 格式化时间：HH:MM:SS
    time.value = now.toLocaleTimeString('zh-CN', {
        hour12: false, // 24小时制
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    })

    // 格式化星期：星期X
    const weekDays = ['日', '一', '二', '三', '四', '五', '六']
    week.value = `星期${weekDays[now.getDay()]}`
}

onMounted(() => {
    updateDateTime() // 初始化
    setInterval(updateDateTime, 1000) // 每秒更新一次
})
</script>

<style lang="scss" scoped></style>