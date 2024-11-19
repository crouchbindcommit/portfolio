<template>
    <!-- Other App Bar for Other Pages -->
    <v-app-bar v-if="!isIndexPage" app  flat>
        <v-btn 
          :class="{'active-btn': isActivePage('/')}" 
          @click="navigateToIndex"
        >
          Index
        </v-btn>
        <v-btn 
          :class="{'active-btn': isActivePage('/about')}" 
          @click="navigateToAbout"
        >
          About
        </v-btn>
        <v-btn 
          :class="{'active-btn': isActivePage('/portfolio')}" 
          @click="navigateToPortfolio"
        >
          Portfolio
        </v-btn>
        <v-btn 
          :class="{'active-btn': isActivePage('/CV')}" 
          @click="navigateToResume"
        >
          CV
        </v-btn>
        <v-btn 
          :class="{'active-btn': isActivePage('/contact')}" 
          @click="navigateToContact"
        >
          Contact
        </v-btn>
    </v-app-bar>

    <!-- Background Images for Index Page -->
    <div v-if="isIndexPage" class="background-images"></div>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const router = useRouter();
const route = useRoute();

// Check if the current route is the index page
const isIndexPage = computed(() => route.name === 'Home'); // Ensure this matches the actual name of your index route

const navigateToIndex = () => navigateTo('/');

const navigateToAbout = () => navigateTo('/about');

const navigateToResume = () => navigateTo('/CV');

const navigateToPortfolio = () => navigateTo('/portfolio');

const navigateToContact = () => navigateTo('/contact');

const navigateTo = (path: string) => {
    if (route.path === path) {
        alert("Oh No! You're already visiting this page!");
    } else {
        router.push(path);
    }
};

// Checks if the current route is the active page
const isActivePage = (path: string) => route.path === path;
</script>

<style scoped>
/* Active button style */
.active-btn {
    background-color: #3f51b5 !important; /* Darker background color for active button */
    color: white !important; /* Ensure text stays visible */
}

/* Add additional styles for the toolbar */
.v-app-bar {
    padding-top: 0; /* Prevent padding on top */
}

/* Apply additional styles to ensure content starts from the top */
html,
body {
    height: 100%;
    margin: 0;
    padding: 0;
    overflow: hidden;
}
</style>
