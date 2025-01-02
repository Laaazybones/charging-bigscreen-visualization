<template>
  <!-- -->
  <div class="bg-[url('assets/imgs/bg.jpg')] bg-cover bg-center ">

    <!-- 上部 -->
    <div class=" w-full text-white p-5 flex overflow-hidden justify-between pl-16 pr-20">

      <div class=" bg-[#182855]/[.90] grid place-items-center justify-center align-middle text-center text-[#3498db]  
      border border-[#19BA8B]/[.17] border-solid  h-[35px] w-[180px] mr-5 ">
        <button>充电场站分布图</button>
      </div>

      <div class=" bg-[#182855]/[.90] grid place-items-center justify-center align-middle text-center text-[#3498db]
      border border-[#19BA8B]/[.17] border-solid w-[180px] mr-5 h-[35px]">
        <button>车流量热力图</button>
      </div>

      <div class=" grid place-items-center justify-center align-middle text-center text-white text-xl w-1/5 ">
        新能源电动车运营监控大屏
      </div>

      <div class=" bg-[#182855]/[.90] grid place-items-center justify-center align-middle text-center text-[#3498db] 
      border border-[#19BA8B]/[.17] border-solid w-[180px] mr-5 h-[35px]">
        <button>停车场动态图</button>
      </div>

      <div class=" bg-[#182855]/[.90] grid place-items-center justify-center align-middle text-center text-[#3498db] 
      border border-[#19BA8B]/[.17] w-[180px] h-[35px] border-solid">
        <button>互联互通桩分布图</button>
      </div>

    </div>

    <!-- 上部第二行 -->
    <div class=" w-full text-white p-5 flex overflow-hidden justify-between">

      <!-- 数据块一 -->
      <div class="justify-center align-middle text-center text-[#3498db] w-1/5 mr-5 pl-12">
        <!-- 边框 -->
        <div
          class=" bg-[#182855]/[.90] grid place-items-center 
          border border-[#19BA8B]/[.17] w-[180px] h-[70px] border-solid relative 
          before:absolute before:top-0 before:left-0 before:w-2 before:h-2 before:border-t-2 before:border-l-2 before:border-cyan-500/[.50] 
          after:absolute after:bottom-0 after:right-0 after:w-2 after:h-2 after:border-b-2 after:border-r-2 after:border-cyan-500/[.50]">
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

    <!-- 下部纵向布局 -->
    <div v-if="data" class="h-screen text-white p-5 flex overflow-hidden">

      <!-- <div class=" flex-1 gap-2"> -->
      <!-- 左 -->
      <div class="w-1/4  mr-5 bg-opacity-50 bg-slate-200 p-3 flex flex-col">
        <div class=" p-2 mb-2 bg-orange-500 h-1/2 overflow-hidden">
          <!-- 块一 -->
          <MyBaiduMap class="w-full h-full"/>
        </div>
        <div class=" p-2 mb-2 bg-orange-500 h-1/4">
          块二
        </div>
        <div class=" p-2 bg-orange-500 h-1/4">
          块三
        </div>
      </div>

      <!-- 中 -->
      <div class="w-1/2 mr-5 flex flex-col">

      </div>

      <!-- 右 -->
      <div class="w-1/4 bg-opacity-50 bg-slate-200 p-3 flex flex-col">
        <div class=" p-2 mb-2 bg-orange-500 h-1/2 overflow-hidden">
          <!-- 块四 -->
          <MyBaiduMap/>
        </div>
        <div class=" p-2 bg-orange-500 h-1/2 overflow-hidden">
          <!-- 块五 -->
          <MyBaiduMap/>
        </div>
      </div>

      <!-- </div> -->
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { getVisualization } from '../api/visualization.js'
import MyBaiduMap from '../components/MyBaiduMap.vue'

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
  console.log('@', data.value.testVal);
}
loadData()


setInterval(() => {
  loadData()
}, 50000);
</script>

<style lang="scss" scoped>
.bm-view {
  width: 100%;
  height: 300px;
}
</style>