export default cachedEventHandler(async () => {
  return await useStorage('SEARCH_ITEMS').getItem('data')
})
