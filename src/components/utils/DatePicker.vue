<template>
    <div class="demo-date-picker">
        <div class="block">
            <span class=" text-center text-base font-semibold">数据选择</span>
            <br>
            <br>
            <el-date-picker v-model="value1" type="date" :placeholder="dateView" :default-value="new Date()" />
        </div>
        <!-- <div class="block">
        <span class="demonstration">daterange</span>
        <el-date-picker
          v-model="value2"
          type="daterange"
          start-placeholder="Start Date"
          end-placeholder="End Date"
          :default-value="[new Date(2010, 9, 1), new Date(2010, 10, 1)]"
        />
      </div> -->
    </div>
</template>

<script lang="js" setup>
import { ref, onMounted } from 'vue'


// 获取当前日期
const defaultDate = new Date();
const year = defaultDate.getFullYear();
const month = String(defaultDate.getMonth() + 1).padStart(2, '0');  // 补零
const day = String(defaultDate.getDate()).padStart(2, '0'); // 补零

// 计算属性：生成 "month-day" 格式的日期字符串
const dateView = `${year}-${month}-${day}`;

// el-date-picker 的 v-model 绑定值
const value1 = ref('');


// const value2 = ref('')


// let defaultDate = new Date();
// let year = defaultDate.getFullYear();
// let month = defaultDate.getMonth() + 1;
// let day = defaultDate.getDate();
// const dateView = ref('${month}-${day}')


</script>
<style scoped>
.demo-date-picker {
    display: flex;
    width: 100%;
    padding: 0;
    flex-wrap: wrap;
}

.demo-date-picker .block {
    padding: 30px 0;
    text-align: center;
    border-right: solid 1px var(--el-border-color);
    flex: 1;
}

.demo-date-picker .block:last-child {
    border-right: none;
}
</style>