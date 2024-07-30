// import { useLogger } from '@nuxt/kit'
// import type { Settings } from '@/types/api'

import { promises as fs } from 'fs'
import { join } from 'path'

export default defineNitroPlugin(async () => {
  const storage = useStorage('SEARCH_ITEMS')

  // async function fetchSettings() {
  //   console.log(endpoint)
  //   const result = await $fetch(`https://sheets.googleapis.com/v4/spreadsheets/1IEEXsWTRvIt71k7rbujNz1RxiFebHN6hkqhmRLDErwo/values/search?key=AIzaSyAt-EvlLnwuOWZQf4XlxEMFzkmrP93oe0A`)
  //   await storage.setItem('settings', result as any)
  //   console.log(`Settings fetched succesfully!`, result)
  // }

  async function fetchSettings() {
    try {
      // Попытка прочитать данные из локального JSON-файла
      const jsonFilePath = join(process.cwd(), 'search.json')
      const data = await fs.readFile(jsonFilePath, 'utf-8')
      await storage.setItem('data', JSON.parse(data))
    } catch (error) {
      console.log('Local JSON file not found or failed to read, fetching from Google Sheets...')
    }
  }

  try {
    await fetchSettings()
  } catch (e) {
    console.error('Error fetching settings.')
    // Error handling here
  }
})
