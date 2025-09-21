<template>
    <div class="container">
      <PostDetail v-for="(post, index) in info" :key="index" :title="post.title" :content="post.content" @sayHi="showAlert"/>

    </div>
</template>

<script lang="ts" setup>
import PostDetail from './PostDetail.vue';

interface Post {
    title: string;
    content: string;
}



let info: Array<Post> =[
    {title: 'Titulo 1', content: 'Contenido del post 1'},
    {title: 'Titulo 2', content: 'Contenido del post 2'},
    {title: 'Titulo 3', content: 'Contenido del post 3'},
    {title: 'Titulo 4', content: 'Contenido del post 4'},
    {title: 'Titulo 5', content: 'Contenido del post 5'}
]

function showAlert(moge: string): void {
    alert(moge);
    
}



</script>

<style scoped>
.container {
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 100vh;
    font-family: Arial, sans-serif;
    background-color: #f5f5f5;
    justify-content: center;
    gap: 20px;
}
</style>