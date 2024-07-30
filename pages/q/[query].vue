<template>
  <div>
    <h1>Search Results for {{ query }} {{ queryParams }}</h1>
    <div v-if="filteredResults.length">
      <ul>
        <li v-for="(item, index) in filteredResults" :key="index">
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
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import { useFetch } from '#app'

const route = useRoute()
// const query = ref(route.params.query)

const query = ref(route.params.query)
const queryParams = ref(route.query)
// const query = ref(route.params.)

const { data: sheetData } = await useFetch('/api/search-items')

const filteredResults = computed(() => {
  if (!sheetData.value || !sheetData.value.values) return []
  // const headers = sheetData.value.values[0]
  const items = sheetData.value.values.slice(1)

  // return items.filter(item => {
  //   return Object.keys(route.query).every(key => {
  //     const index = headers.indexOf(key)
  //     return index !== -1 && item[index]?.toLowerCase().includes(route.query[key].toLowerCase())
  //   })
  // })
  return items
})
</script>
