<template>
  <div>横向柱状图</div>
</template>

<script setup>
const props = defineProps({
  data: {
    type: Object,
    required: true
  }
});


console.log(props.data)
</script>

<style lang="scss" scoped>
</style>