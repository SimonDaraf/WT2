<template>
  <div class="app">
    <Sidebar />
    <div class="body-container">
      <Suspense>
        <router-view />

        <template #fallback>
          Loading...
        </template>
      </Suspense>
    </div>
  </div>
</template>

<script setup>
import Sidebar from './components/Sidebar.vue'
</script>

<style lang="scss">
:root {
  --primary: #7AE2CF;
  --primary-alt: #077A7D;
  --grey: #64748b;
  --dark: #1e293b;
  --dark-alt: #334155;
  --light: #f1f5f9;
  --sidebar-width: 300px;
  --no-data: #334155;
  --min-color: #78232a;
  --max-color: #81ba49;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Fira sans', sans-serif;
}

body {
  background: var(--dark-alt);
  color: var(--light);
  overflow: hidden;
  max-height: 100vh;
  max-width: 100vw;
}

button {
  cursor: pointer;
  appearance: none;
  border: none;
  outline: none;
  background: none;
}

.app {
  display: flex;
  main {
    flex: 1 1 0;
    padding: 2rem;

    @media (max-width: 768px) {
      padding-left: 6rem;
    }
  }

  .body-container {
    background-color: var(--dark);
    border-radius: 2rem;
    margin: 1rem;
    flex: 1 1 0;
    overflow: hidden;
  }
}
</style>
