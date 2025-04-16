<script setup>
import WorldMap from './components/Map.vue'
</script>

<template>
  <div class="container">
    <div class="header">

    </div>

    <div class="content">
      <WorldMap class="map-element"></WorldMap>
    </div>

    <div class="menu">

    </div>

    <div class="footer">

    </div>
  </div>
</template>

<style scoped>
  .container {
    height: 100%;
    display: grid;
    grid-template-areas:
      "header header"
      "menu content"
      "footer footer";
    grid-template-columns: 75px auto;
    grid-template-rows: 75px auto 75px;
  }

  .container > div.header {
    grid-area: header;
  }

  .container > div.content {
    grid-area: content;
    position: relative;
    /* background: rgb(91,88,135);
    background: linear-gradient(90deg, rgba(91,88,135,1) 0%, rgba(17,18,50,1) 100%); */
    background-color: #181818;
    border-radius: 20px 0 0 20px;
  }

  .container > div.menu {
    grid-area: menu;
  }

  .container > div.footer {
    grid-area: footer;
  }
</style>
