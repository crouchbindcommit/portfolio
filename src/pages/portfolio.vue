<template>
    <v-container class="text-center py-6">
      <v-row>
        <v-col cols="12">
          <h1 class="display-1 font-weight-bold mb-6 text-primary">Welcome to my Portfolio</h1>
        </v-col>
      </v-row>
      <ProjectList />
    </v-container>
  </template>
  
  <script setup lang="ts">
    import ProjectList from "@/components/portfolio/ProjectList.vue";
  </script>
  
  <style scoped>
    /* Add your custom styles here */
    h1 {
      font-size: 3rem;
      color: #1E88E5; /* Vuetify's primary color */
      text-transform: uppercase;
      letter-spacing: 1px;
      margin-bottom: 1.5rem;
    }
  
    .v-container {
      padding: 2rem;
    
      border-radius: 12px;
    }
  
    .v-row {
      margin-top: 1.5rem;
    }
  </style>
  