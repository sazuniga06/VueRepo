<template>
    <div class="container">
        <h1>Contador usando Composition API</h1>
        <h2>{{ count }}</h2>
        <div class="buttons">
            <button @click="increment">Incrementar</button>
            <button @click="decrement">Decrementar</button>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, Ref ,ref } from 'vue';
export default defineComponent({
    name: 'CounterCompositionApi',
    components: {},
    setup() {
        let count:Ref = ref(0);
        const increment = ():void => {
            count.value++;
        };
        const decrement = ():void => {
            count.value--;
        };
        return {
            count,
            increment,
            decrement
        };
    }
});

</script>

<style>
.container {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
    font-family: Arial, sans-serif;
    background-color: #f5f5f5;
}
h1 {
    color: #42b983;
    text-align: center;
    font-size: 36px;
    margin-bottom: 20px;
}
button {
    margin: 5px;
    padding: 10px 15px;
    background-color: #42b983;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
    transition: background-color 0.3s;
    position: center;
    flex-direction: row;
}
button:hover {
    background-color: #297959;
}
h2 {
    color: #42b983;
    font-size: 48px;
    margin: 20px 0;
    text-align: center;
}
</style>