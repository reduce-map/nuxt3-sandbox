<template>
  <div>
    <form @submit.prevent="applyFilters">
      <div v-for="(header, index) in headers" :key="index">
        <label :for="header">{{ header }}</label>
        <input v-model="filters[header]" :id="header" :name="header" />
      </div>
      <button type="submit">Search</button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { useRouter, useRoute } from 'vue-router'

const route = useRoute()
const router = useRouter()
const headers = ref<string[]>([])
const filters = ref<Record<string, string>>({})

watch(route, () => {
  // Reset filters on route change
  headers.value = Object.keys(route.query)
  filters.value = { ...route.query }
}, { immediate: true })

const applyFilters = () => {
  router.push({
    path: '/q',
    query: { ...filters.value }
  })
}
</script>
