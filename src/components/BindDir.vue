<template>
    <p v-bind:class="{'danger': hasError, 'warning': isWarning, 'success': isSuccess, 'info': !hasError && !isWarning && !isSuccess}" class="Estado">{{ Mensaje }}</p>
    <button @click="cambiarEstado" class="btn"> Cambiar Estado </button>
</template>

<script lang="ts" setup>  
import { Ref,ref } from 'vue';
let hasError = ref(false);
let isWarning = ref(false);
let isSuccess = ref(true);
let Mensaje:Ref<string> = ref("");

function cambiarEstado() {
    if (hasError.value) {
        hasError.value = false;
        isWarning.value = true;
        isSuccess.value = false;
        Mensaje.value = "Advertencia: Verifica esto!";
    } else if (isWarning.value) {
        hasError.value = false;
        isWarning.value = false;
        isSuccess.value = true;
        Mensaje.value = "Completado: ¡Operación satisfactoria!";
    } else if (isSuccess.value) {
        hasError.value = false;
        isWarning.value = false;
        isSuccess.value = false;
        Mensaje.value = "Info: Solo para que lo sepas.";
    } else {
        hasError.value = true;
        isWarning.value = false;
        isSuccess.value = false;
        Mensaje.value = "Error: El mensaje no se envió!";
    }
}

</script>

<style>
.danger {
    color: red;
}
.warning {
    color: orange;
}
.success {
    color: green;
}
.info {
    color: blue;
}

.Estado {
    font-size: 1.5em;
    margin-bottom: 20px;
}
.btn {
    padding: 10px 20px;
    font-size: 1em;
    cursor: pointer;
    background-color: #42b983;
    color: white;
    border: none;
    border-radius: 5px;
}

</style>