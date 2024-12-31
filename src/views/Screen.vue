<template>
  <!-- -->
  <div class="bg-[url('assets/imgs/bg.jpg')] bg-cover bg-center ">
    <!-- 上部 -->
    <div class=" w-full text-white p-5 flex overflow-hidden pl-[68px]">
      <div class=" justify-center align-middle text-center text-[#3498db] mr-5 
      border border-[#19BA8B]/[.17] border-solid w-[180px] h-[35px] ">
        <button>充电场站分布图</button>
      </div>
      <div class=" justify-center align-middle text-center text-[#3498db] w-1/5 mr-5">
        <button>车流量热力图</button>
      </div>
      <div class=" justify-center align-middle text-center text-[#3498db] w-1/5 mr-5">
        新能源电动车运营监控大屏
      </div>
      <div class=" justify-center align-middle text-center text-[#3498db] w-1/5 mr-5">
        <button>停车场动态图</button>
      </div>
      <div class=" justify-center align-middle text-center text-[#3498db] w-1/5 mr-5">
        <button>互联互通桩分布图</button>
      </div>
    </div>
    <!-- 上部第二行 -->
    <div class=" w-full text-white p-5 flex overflow-hidden">

      <!-- 数据块一 -->
      <div class="justify-center align-middle text-center text-[#3498db] w-1/5 mr-5 pl-12">
        <!-- 边框 -->
        <div
          class=" bg-[#182855]/[.90] grid place-items-center 
          border border-[#19BA8B]/[.17] w-[180px] h-[70px] border-solid relative before:absolute before:top-0 before:left-0 before:w-2 before:h-2 before:border-t-2 before:border-l-2 before:border-cyan-500/[.50] after:absolute after:bottom-0 after:right-0 after:w-2 after:h-2 after:border-b-2 after:border-r-2 after:border-cyan-500/[.50]">
          <div class="block text-xs">订单量（次）</div>
          <div class="block text-white text-xl">{{ data.testVal.topData.dealAmount }}</div>
        </div>
      </div>

      <div class=" justify-center align-middle text-center text-[#3498db] w-1/5 mr-5 pl-12">
        <div
          class=" bg-[#182855]/[.90] grid place-items-center border border-[#19BA8B]/[.17] w-[180px] h-[70px] border-solid relative before:absolute before:top-0 before:left-0 before:w-2 before:h-2 before:border-t-2 before:border-l-2 before:border-cyan-500/[.50] after:absolute after:bottom-0 after:right-0 after:w-2 after:h-2 after:border-b-2 after:border-r-2 after:border-cyan-500/[.50]">
          <div class="block text-xs">充电度数（kWh）</div>
          <div class="block text-white text-xl">{{ data.testVal.topData.chargeAmount }}</div>
        </div>
      </div>

      <div class=" justify-center align-middle text-center text-[#3498db] w-1/5 mr-5 pl-12">
        <div
          class=" bg-[#182855]/[.90] grid place-items-center border border-[#19BA8B]/[.17] w-[180px] h-[70px] border-solid relative before:absolute before:top-0 before:left-0 before:w-2 before:h-2 before:border-t-2 before:border-l-2 before:border-cyan-500/[.50] after:absolute after:bottom-0 after:right-0 after:w-2 after:h-2 after:border-b-2 after:border-r-2 after:border-cyan-500/[.50]">
          <div class="block text-xs">营业额（元）</div>
          <div class="block text-white text-xl">{{ data.testVal.topData.money }}</div>
        </div>
      </div>

      <div class=" justify-center align-middle text-center text-[#3498db] w-1/5 mr-5 pl-12">
        <div
          class=" bg-[#182855]/[.90] grid place-items-center border border-[#19BA8B]/[.17] w-[180px] h-[70px] border-solid relative before:absolute before:top-0 before:left-0 before:w-2 before:h-2 before:border-t-2 before:border-l-2 before:border-cyan-500/[.50] after:absolute after:bottom-0 after:right-0 after:w-2 after:h-2 after:border-b-2 after:border-r-2 after:border-cyan-500/[.50]">
          <div class="block text-xs">会员总数（个）</div>
          <div class="block text-white text-xl">{{ data.testVal.topData.vipAmount }}</div>
        </div>
      </div>

      <div class=" justify-center align-middle text-center text-[#3498db] w-1/5 mr-5 pl-12">
        <div
          class=" bg-[#182855]/[.90] grid place-items-center border border-[#19BA8B]/[.17] w-[180px] h-[70px] border-solid relative before:absolute before:top-0 before:left-0 before:w-2 before:h-2 before:border-t-2 before:border-l-2 before:border-cyan-500/[.50] after:absolute after:bottom-0 after:right-0 after:w-2 after:h-2 after:border-b-2 after:border-r-2 after:border-cyan-500/[.50]">
          <div class="block text-xs">充电场站（个）</div>
          <div class="block text-white text-xl">{{ data.testVal.topData.stationAmount }}</div>
        </div>
      </div>

    </div>
    <div v-if="data" class="h-screen text-white p-5 flex overflow-hidden">
      <!-- <h1>正在开发中...</h1> -->

      <!-- <div class=" flex-1 gap-2"> -->
      <!-- 左 -->
      <div class="flex-1 mr-5 bg-opacity-50 bg-slate-200 p-3 flex flex-col">

      </div>

      <!-- 中 -->
      <div class="w-1/2 mr-5 flex flex-col">

      </div>

      <!-- 右 -->
      <div class="flex-1 bg-opacity-50 bg-slate-200 p-3 flex flex-col">
      </div>

      <!-- </div> -->
    </div>
  </div>
</template>

<script setup>
import HorizontalBar from '../components/HorizontalBar.vue';
import MapChart from '../components/MapChart.vue';
import RadarBar from '../components/RadarBar.vue';
import Relation from '../components/Relation.vue';
import RingBar from '../components/RingBar.vue';
import TotalData from '../components/TotalData.vue';
import VerticalBar from '../components/VerticalBar.vue';
import WordCloud from '../components/WordCloud.vue';

import { ref } from 'vue'
import { getVisualization } from '../api/visualization.js'

const data = ref(null)
const loadData = async () => {
  data.value = await getVisualization()
  data.value.testVal = {
    topData: {
      dealAmount: 1000,
      chargeAmount: 2000,
      money: 3000,
      vipAmount: 4000,
      stationAmount: 5000
    }
  }
  // console.log('@@', data.value);
  console.log('@', data.value.testVal);
}
loadData()


setInterval(() => {
  loadData()
}, 50000);
</script>

<style lang="scss" scoped></style>