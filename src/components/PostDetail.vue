<template>
<div class="post-detail">
    <h1>{{ props.title }}</h1>
    <p>{{ props.content }}</p>
    <input type="text" v-model="message" />
    <button @click="handleClick">Hola</button>
</div>
</template>

<script lang="ts" setup>
import { defineProps, defineEmits, Ref , ref} from 'vue';

const props = defineProps({
    title: String,
    content: String
});

const emit = defineEmits<{
    (event: 'sayHi', message: string): void;
}>();

let message: Ref<string> = ref('');

const handleClick = () =>{
    emit('sayHi', message.value);
}


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