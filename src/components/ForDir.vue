<template>
    <ul class="country-list">
        <li v-for="country in countries" :key="country.code">{{ country.name }}</li>
    </ul>
</template>

<script lang="ts" setup>
import { Ref,ref } from 'vue';
interface Country {
    name: string;
    code: string;
}
let countries: Ref<Array<Country>> = ref([
    {
        name: 'USA',
        code: 'US'
    },
    {
        name: 'Canada',
        code: 'CA'
    },
    {
        name: 'UK',
        code: 'GB'
    },
    {
        name: 'Australia',
        code: 'AU'
    },
    {
        name: 'Germany',
        code: 'DE'
    },
    {
        name: 'France',
        code: 'FR'
    },
    {
        name: 'India',
        code: 'IN'
    },
    {
        name: 'Japan',
        code: 'JP'
    },
    {
        name: 'China',
        code: 'CN'
    }
])

</script>

<style scoped>
.country-list {
    list-style-type: none;
    padding: 0;
    margin: 0;
    font-size: 1.2em;
    color: #333;
}
.country-list li {
    padding: 10px;
    border-bottom: 1px solid #ddd;
}
</style>