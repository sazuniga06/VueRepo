<template>
    <h1>Directivas de Vue.js</h1>
    <h2>Ejemplo de uso de la directiva v-if</h2>
    <div class="input-group">
        <label for="edad">Ingresa tu edad: </label>
        <input type="number" id="edad" v-model="Edad" />
    </div>
    <h3 v-if = "Edad == 0"> Por favor ingresa tu edad </h3>
    <h3 v-else-if="Edad >= 18"> Eres mayor de edad </h3>
    <h3 v-else> Eres menor de edad </h3>
</template>

<script lang="ts" setup>  
import { ref } from 'vue';
const Edad = ref(0);

</script>

<style scoped> 
h1, h2 {
    color: #42b983;
    text-align: center;
}
div {
    margin: 20px 0;
    text-align: center;
}
.input-group {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
}
input {
    padding: 5px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 4px;
}
h3 {
    color: #333;
    text-align: center;
}
label {
    font-weight: bold;
}

</style>