<template>
<div>
    <input type="text" v-model="message" >
    <p> {{ message }}</p>
    <p> {{ reverse}}</p>
</div>
</template>

<script lang="ts" setup>
import { Ref, ref, computed } from 'vue';


    let message:Ref<string> = ref('');

    const reverse = computed(() : string => {
        return message.value.split('').reverse().join('');
    });

    

</script>

<style scoped>

</style>