export default defineNuxtPlugin(async () => {
  const asyncData = await useFetch('/api/search-items')
  console.log(123123, asyncData)

  return {
    provide: {
      searchItems: asyncData.data.value
    }
  }
})

