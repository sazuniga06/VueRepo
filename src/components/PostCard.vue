<template>
    <div class="post-card">
        <h3>Titulo</h3>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe cum, eveniet maxime molestias labore adipisci asperiores, possimus illo dicta sapiente at repellat sunt molestiae et. Perspiciatis voluptas inventore tenetur at?</p>
        <PostButton />
    </div>
</template>

<script lang="ts" setup>
import PostButton from './PostButton.vue';
</script>

<style scoped>
.post-card {
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 16px;
  margin: 16px 0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
.post-card h3 {
  margin: 0 0 8px;
}
.post-card p {
  color: #555;
}
</style>