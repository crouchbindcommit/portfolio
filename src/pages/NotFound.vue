<template>
    <v-container class="text-center d-flex align-center justify-center" style="min-height: 100vh">
      <div>
        <v-icon large color="error" class="mb-4">mdi-alert-circle-outline</v-icon>
        <h1 class="text-h3 font-weight-bold">404 - Page Not Found</h1>
        <p class="text-body-1 mb-4">
          Oops! The page you are looking for doesn't exist or has been moved.
        </p>
        <v-btn color="primary" outlined @click="goHome">
          Go Back Home
        </v-btn>
      </div>
    </v-container>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  import { useRouter } from 'vue-router';
  
  export default defineComponent({
    name: 'NotFound',
    setup() {
      const router = useRouter();
  
      const goHome = () => {
        router.push('/');
      };
  
      return { goHome };
    },
  });
  </script>
  
  <style scoped>
  h1 {
    color: #ff5252;
  }
  
  v-container {
    background-color: #f7f7f7;
  }
  </style>
  
