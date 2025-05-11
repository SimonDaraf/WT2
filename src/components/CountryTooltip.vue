<template>
  <div class="container">
    <div class="color-container" ref="colorContainer">

    </div>
    <h3>{{ country }}</h3>
    <p>{{ data }}</p>
  </div>
</template>

<script setup>
import { defineProps, onMounted, ref } from 'vue'

const colorContainer = ref(null)

const props = defineProps({
  country: String,
  data: String,
  color: String
})

onMounted(() => {
  colorContainer.value.style.background = props.color
})
</script>

<style lang="scss" scoped>
.container {
  display: inline-block;
  margin: 20px;
  width: 200px;
  height: min-content;
  position: relative;
  background: var(--dark-alt);
  border-radius: 10px;

  .color-container {
    position: absolute;
    top: 5px;
    left: 5px;
    width: 15px;
    height: 15px;
    border-radius: 180px;
  }

  h3 {
    max-width: 150px;
    margin: auto;
  }
}
</style>