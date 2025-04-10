<template>
  <v-app>
    <v-main>
      <LegacyPopup />
      <NavBar />
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts" setup>
import NavBar from './components/NavBar.vue';
import LegacyPopup from './components/LegacyPopup.vue';
</script>
