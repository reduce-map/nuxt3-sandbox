<template>
  <div>
    <h1>All Search Results</h1>
    <h2>Search Results</h2>
    <h2>Search Results</h2>
    <h2>Search Results</h2>
    <h2>Search Results</h2>
    <h2 class="mb-4">Search Results</h2>
    <div v-if="sheetData && sheetData.values && sheetData.values.length">
      <ul>
        <li v-for="(item, index) in sheetData.values.slice(1)" :key="index">
          <NuxtLink :to="`/sheet/${index}`">{{ item.join(', ') }}</NuxtLink>
        </li>
      </ul>
    </div>
    <div v-else>
      <p>No results found.</p>
    </div>
  </div>
</template>

<script setup lang="ts">
// import { ref } from 'vue'
import { useFetch } from '#app'

// Fetch data for all items
const { data: sheetData, error } = await useFetch('/api/search-items')

// Check for errors in data fetching
if (error.value) {
  console.error('Error fetching data:', error.value)
}
</script>
