<template>
    <div class="container">
      <ModelDir/>
    </div>
</template>

<script lang="ts" setup>
import ModelDir from './components/ModelDir.vue';


</script>

<style scoped>
.container {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
    font-family: Arial, sans-serif;
    background-color: #f5f5f5;
    justify-content: center;
    gap: 20px;
}
</style>
