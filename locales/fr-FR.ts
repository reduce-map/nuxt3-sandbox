export default defineI18nLocale(async (locale) => {
  return {
    "layouts": {
      // write in france
      "title": "Bienvenue",
    },
    "pages": {
      "title": {
        "top": "Accueil",
        "about": "Ceci est une page d'accueil"
      }
    }
  }
});
// or
//
// export default {
//   welcome: 'Welcome'
// }
