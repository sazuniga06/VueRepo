<template>
    <div class="post-container">
        <PostCard />
        <PostCard />
        <PostCard />
    </div>
</template>

<script lang="ts" setup>    
import PostCard from './PostCard.vue';
</script>

<style scoped>  
.post-container {
  max-width: auto;
  margin: 0 auto;
  padding: 20px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
  flex-direction: column    ;
}

</style>