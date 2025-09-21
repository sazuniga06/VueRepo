<template>
<div class="post-detail">
    <h1>{{ title }}</h1>
    <p>{{ content }}</p>
    <input type="text" v-model="message" />
    <button @click="handleClick">Hola</button>
</div>
</template>

<script lang="ts">
import { defineComponent, Ref , ref} from 'vue';

export default defineComponent({
    name: 'PostDetail',
    props: {
        title: {
            type: String,
            required: true
        },
        content: {
            type: String,
            required: true,
            default: 'Sin Contenido'
        }
    },
    emits: ['sayHi'],
    setup(props, { emit }) {
        const handleClick = () =>{
            emit('sayHi', message.value);
        }
        let message: Ref<string> = ref("");
        return { props, message, handleClick};
    }
});

</script>

<style scoped>
.post-detail {
    background-color: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    width: 400px;
    text-align: center;
}

</style>