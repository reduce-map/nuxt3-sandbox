<script setup>
// define page meta for layouts/default.vue
definePageMeta({
  title: 'pages.title.about'
})

useHead({
  meta: [{ property: "og:title", content: "this is og title for about page" }]
})
</script>

<template>
  <h2>{{ $t('pages.about.description') }}</h2>
</template>
