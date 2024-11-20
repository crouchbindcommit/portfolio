<template>
  <link rel="preload" href="/background/yellow-screen.png" as="image">
  <link rel="preload" href="/background/cliff.png" as="image">
  <link rel="preload" href="/background/standup-paddleboard.png" as="image">
  <link rel="preload" href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap" as="font" type="font/woff2" crossorigin="anonymous">
  
  <v-container class="scroll-container" fluid>
    <!-- Section 1 -->
    <div
      class="background-section background-1"
      :style="isMobile ? 'background-color: #FED00A;' : 'background-image: url(/background/yellow-screen.png);'"
    >
      <v-container class="content-container" data-aos="fade-up">
        <v-card class="portfolio-card-blank" elevation="0">
          <div class="portfolio-name-wrapper">
            <v-card-title class="portfolio-name">Makayla</v-card-title>
            <v-card-title class="portfolio-name">Mckinney.</v-card-title>
          </div>
          <v-card-text class="portfolio-name-subtitle">Fullstack Developer. <u>Computer Engineer.</u> Dreamer. Doer.</v-card-text>
          <v-btn color="#1b1a17" @click="navigateToAbout" class="navigate-btn">About Me</v-btn>
        </v-card>
      </v-container>
    </div>

    <!-- Section 2 -->
    <div
      class="background-section background-2"
      :style="isMobile ? 'background-color: #1B1A17;' : 'background-image: url(/background/cliff.png);'"
    >
      <v-container class="content-container-2" data-aos="fade-up" data-aos-duration="1500" data-aos-offset="100">
        <v-card class="portfolio-card-cliff" elevation="0">
          <v-card-text>
            <div class="tagline-container">
              <div class="tagline-top">Developing Today,</div>
              <div class="tagline-bottom">Evolving Tomorrow.</div>
            </div>
          </v-card-text>
        </v-card>
      </v-container>
      <v-btn class="portfolio-btn" color="#581845" elevation="6" @click="navigateToPortfolio" data-aos="fade-up" data-aos-duration="1000" data-aos-offset="100">
        View Portfolio
      </v-btn>
    </div>

    <!-- Section 3 -->
    <div
      class="background-section background-3"
      :style="isMobile ? 'background-color: #3A3B3C;' : 'background-image: url(/background/standup-paddleboard.png);'"
    >
      <v-container class="content-container">
        <div class="cta-container" data-aos="fade-up">
          <div class="cta-text">Let's Build the Future, <br> Together</div>
          <div class="cta-icons">
            <v-btn icon href="https://www.linkedin.com/in/makayla-mckinney-b45129208/">
              <v-icon>mdi-linkedin</v-icon>
            </v-btn>
            <v-btn icon href="https://github.com/crouchbindcommit">
              <v-icon>mdi-github</v-icon>
            </v-btn>
            <v-btn icon href="mailto:mmckin22@vols.utk.edu">
              <v-icon>mdi-email</v-icon>
            </v-btn>
          </div>
        </div>
      </v-container>
    </div>
  </v-container>

  <v-footer app>
    <v-container class="pa-0" fluid>
      <v-row class="fill-height" align="center" justify="center">
        <v-col class="d-flex justify-center" cols="auto">
          <v-btn @click="navigateToAbout">About</v-btn>
          <v-btn @click="navigateToPortfolio">Portfolio</v-btn>
          <v-btn @click="navigateToResume">CV</v-btn>
          <v-btn @click="navigateToContact">Contact</v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>


<script lang="ts" setup>
import { useRouter } from 'vue-router';
import { onMounted, ref } from 'vue';
import AOS from 'aos';
import 'aos/dist/aos.css';

const router = useRouter();
const isMobile = ref(false);

// Detect mobile devices
const detectMobile = () => {
  isMobile.value = window.innerWidth <= 768; // Adjust breakpoint if needed
};

onMounted(() => {
  AOS.init({
    duration: 1000,
    easing: 'ease-in-out',
    once: true,
    offset: 200,
  });
  detectMobile();
  window.addEventListener('resize', detectMobile);
});

const navigateToAbout = () => router.push('/about');
const navigateToResume = () => router.push('/CV');
const navigateToPortfolio = () => router.push('/portfolio');
const navigateToContact = () => router.push('/contact');
</script>



<style scoped>
/* General styles */
body, html {
  margin: 0;
  padding: 0;
  width: 100%;
  overflow-x: hidden; /* Prevents horizontal scrolling */
}

.scroll-container {
  width: 100%;
  overflow-y: auto;
  scroll-behavior: smooth;
}

/* Section backgrounds */
.background-section {
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

/* Desktop-specific styles */
@media (min-width: 768px) {
  .background-1 {
    background-image: url('/background/yellow-screen.png');
    background-size: cover;
    background-position: center;
  }

  .background-2 {
    background-image: url('/background/cliff.png');
    background-size: cover;
    background-position: center;
  }

  .background-3 {
    background-image: url('/background/standup-paddleboard.png');
    background-size: cover;
    background-position: center;
  }
}

/* Mobile-friendly backgrounds (solid colors or gradients) */
@media (max-width: 767px) {
  .background-1 {
    background-color: #f7e7a9; /* Light yellow fallback */
  }

  .background-2 {
    background-color: #87c0cd; /* Teal fallback */
  }

  .background-3 {
    background-color: #ffdda1; /* Light orange fallback */
  }
}

/* Content container adjustments */
.content-container, .content-container-2 {
  padding: 20px;
  text-align: center;
  color: #fff;
}
</style>

