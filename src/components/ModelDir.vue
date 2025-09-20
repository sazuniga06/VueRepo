<template>
    <form>
        <label for="nombre">Nombre:</label>
        <input type="text" id="nombre" v-model="nombre" />
        <select v-model="pais">
            <option disabled value="">Seleccione su pais</option>
            <option value="España">España</option>
            <option value="Francia">Francia</option>
            <option value="Alemania">Alemania</option>
        </select>
        <p>Su nombre es: {{ nombre }}!</p>
        <p>Su pais es: {{ pais }}!</p>
        <input type = "checkbox" id="terminos" v-model="terminos" /> Acepto los terminos y condiciones

    </form>
</template>


<script lang="ts" setup>
    import { Ref, ref } from 'vue';
    let nombre: Ref<string> = ref('');
    let terminos: Ref<boolean> = ref(false);
    let pais: Ref<string> = ref('');

</script>

<style scoped>

</style>