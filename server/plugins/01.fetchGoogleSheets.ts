// import { useLogger } from '@nuxt/kit'
// import type { Settings } from '@/types/api'

// import { promises as fs } from 'fs'
// import { join } from 'path'

export default defineNitroPlugin(async () => {
  const storage = useStorage('SEARCH_ITEMS')

  async function fetchSettings() {
    // console.log(endpoint)
    const spreadsheetId = process.env.GOOGLE_SHEETS_SPREADSHEET_ID
    const apiKey = process.env.GOOGLE_SHEETS_KEY
    console.log(spreadsheetId, apiKey)
    const tableName = 'search'
    const result = await $fetch(`https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${tableName}?key=${apiKey}`)
    await storage.setItem('data', result as any)
    console.log(`Settings fetched succesfully!`, result)
  }

  // async function fetchSettings() {
  //   try {
  //     const jsonFilePath = join(process.cwd(), 'search.json')
  //     const data = await fs.readFile(jsonFilePath, 'utf-8')
  //     await storage.setItem('data', JSON.parse(data))
  //   } catch (error) {
  //     console.log('Local JSON file not found or failed to read, fetching from Google Sheets...')
  //   }
  // }

  try {
    await fetchSettings()
  } catch (e) {
    console.error('Error fetching settings.')
    // Error handling here
  }
})
