<script setup>
// https://v8.i18n.nuxtjs.org/guide/lang-switcher
const { locale, locales } = useI18n()
const switchLocalePath = useSwitchLocalePath()

const availableLocales = computed(() => {
  return (locales.value).filter(i => i.code !== locale.value)
})
</script>

<template>
  ...
  <NuxtLink v-for="locale in availableLocales" :key="locale.code" :to="switchLocalePath(locale.code)">{{
      locale.name
    }}</NuxtLink>
  ...
</template>
