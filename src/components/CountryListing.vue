<template>
  <div class="container">
    <span ref="square" class="material-icons">square</span> <span>{{ country }}:</span> <span>{{ data }}</span>
  </div>
</template>

<script setup>
import { defineProps, onMounted, ref } from 'vue';

const square = ref(null)

const props = defineProps({
  country: String,
  data: String,
  color: String
})

onMounted(() => {
  square.value.style.color = props.color
})
</script>

<style lang="scss" scoped>
  .container {
    width: 100%;
    display: inline-flex;
    justify-content: start;
    align-items: center;
    gap: 10px;
  }
</style>