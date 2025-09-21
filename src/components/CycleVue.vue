<template>
<div>Hola Mundo, actualizamos</div>
</template>

<script lang="ts" setup>
import { onMounted, onUpdated, onBeforeUnmount} from 'vue';
onMounted(() => {
    console.log('Component mounted');
});
onUpdated(() => {
    console.log('Component updated');
});
onBeforeUnmount(() => {
    console.log('Component before unmount');
});

</script>

<style scoped>

</style>