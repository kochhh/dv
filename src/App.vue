<template>
  <div id="app" class="layout">
    <app-header />
    <main class="main">
      <router-view />
    </main>
    <app-footer />
  </div>
</template>

<script>
import AppHeader from '@/components/AppHeader.vue';
import AppFooter from '@/components/AppFooter.vue';

export default {
  name: 'App',

  components: {
    AppHeader, AppFooter,
  },

  metaInfo: {
    title: 'Главная',
    titleTemplate: '%s — Движение Вверх',
    htmlAttrs: {
      lang: 'ru',
    },
  },
};
</script>
