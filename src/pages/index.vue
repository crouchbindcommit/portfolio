<template>
<link rel="preload" href="/background/yellow-screen.png" as="image">
<link rel="preload" href="/background/cliff.png" as="image">
<link rel="preload" href="/background/standup-paddleboard.png" as="image">
<link rel="preload" href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap" as="font" type="font/woff2" crossorigin="anonymous">
  
  <v-container class="scroll-container" fluid>
    <!-- Section 1 -->
    <div class="background-section background-1" style="background-image: url('/background/yellow-screen.png');">
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
    <div class="background-section background-2" style="background-image: url('/background/cliff.png');">
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
    <div class="background-section background-3" style="background-image: url('/background/standup-paddleboard.png');">
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
import { onMounted } from 'vue';
import AOS from 'aos';
import 'aos/dist/aos.css';

const router = useRouter();

//navigation
const navigateToAbout = () => { router.push('/about'); }
const navigateToResume = () => { router.push('/CV'); }
const navigateToPortfolio = () => { router.push('/portfolio'); }
const navigateToContact = () => { router.push('/contact'); }

onMounted(() => {
  AOS.init({
    duration: 1000,
    easing: 'ease-in-out',
    once: true,
    offset: 200,  // Delay animations
  });
});
</script>


<style scoped>

body,
html {
  margin: 0;
  padding: 0;
  width: 100%;
  overflow-x: hidden;
  /* Prevents horizontal scrolling */
}

/* Main scroll container */
.scroll-container {
  width: 100%;
  overflow-y: auto;
  scroll-behavior: smooth;
}

/* Full-height sections with background images */
.background-section {
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  background-size: cover;
  background-position: center;
  position: relative;
  overflow: hidden;
  /* Ensures no overflow in the section */
}

.content-container {
  max-width: 100%;
  /* Make sure the container fits within the section */
  padding: 20px;
  box-sizing: border-box;
  /* Ensures padding doesn't cause overflow */
}


/* Subtle gradient overlays for Y-axis transition */
.background-1 {
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.2), transparent), url('/background/yellow-screen.png');
}

.background-2 {
  background-image: linear-gradient(to top, rgba(0, 0, 0, 0.2), transparent),
    linear-gradient(to bottom, rgba(0, 0, 0, 0.2), transparent),
    url('/background/cliff.png');
  background-color: #1a2b3c;
  /* Make sure the background color matches the theme */
  background-size: cover;
  background-position: center;
  position: relative;
  height: 100vh;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
}

.background-3 {
  background-image: linear-gradient(to top, rgba(0, 0, 0, 0.2), transparent), url('/background/standup-paddleboard.png');
}


/* Portfolio card styling */
.portfolio-card {
  max-width: 300px;
}

/* Portfolio card styling */
.portfolio-card-blank {
  background: transparent;
  display: inline-block;
  margin: 0 auto;
  /* Center the card */
  text-align: center;
  margin-top: -59p6;
  width: 100%;
  /* Makes the card fit inside the container */
}

.portfolio-name {
  font-size: clamp(40px, 13vw, 100vw);
  /* Responsive font size */
  color: #fed00a;
  -webkit-text-stroke: 1px #452904c1;
  /* Adds a 1px outline */
  font-weight: bold;
  white-space: nowrap;
  text-align: left;
  max-width: 100%;
  /* Ensures the text doesn't overflow */
  margin-bottom: -95px;
  margin-left: 25px;
}

.portfolio-name-subtitle {
  margin-top: 70px;
  /* Adjust this value to shift the subtitle vertically down */
  font-size: 1.2rem;
  /* Optional: adjust the size if necessary */
}




/* Content Container for Section 2 */
.content-container-2 {
  position: absolute;
  top: 10%;
  left: 5%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
}

/* Portfolio card styling */
.portfolio-card-cliff {
  background: transparent;
  display: inline-block;
  text-align: left;
  margin-left: -6%;
  margin-top: -4%;
  padding: 10px;
}

/* Tagline container */
.tagline-container {
  margin-top: -100px;
  margin-left: -30px;
  position: relative;
  text-align: left;
  width: 75vw;
  /* Ensure it doesn't exceed 3/4 of the page width */
  height: 75vh;
  /* Ensure it doesn't exceed 3/4 of the page height */
  max-width: 100%;
  max-height: 100%;
}

/* Top tagline styling */
.tagline-top {
  font-size: clamp(30px, 10vw, 70px);
  /* Responsive size */
  color: #ffffffd3;
  font-weight: bold;
  -webkit-text-stroke: 1px #03020235;
  /* Adds a 1px outline */
  position: absolute;
  top: 10%;
  /* Position it near the top */
  left: 0;
  white-space: nowrap;
  max-width: 100%;
  /* Ensures the text doesn't overflow */
}

/* Bottom tagline styling */
.tagline-bottom {
  font-size: clamp(30px, 10vw, 70px);
  /* Responsive size */
  color: #5c261cd3;
  font-weight: bold;
  -webkit-text-stroke: 1px #5c261cd3;
  /* Adds a 1px outline */
  position: absolute;
  top: 30%;
  /* Position it vertically lower */
  left: 10%;
  /* Shift it slightly to the right */
  white-space: nowrap;
  max-width: 100%;
  /* Ensures the text doesn't overflow */
}

/* Button styling */
.portfolio-btn {
  position: absolute;
  bottom: 10%;
  /* Adjust the distance from the bottom */
  right: 15%;
  /* Adjust the distance from the right edge */
  font-size: 2rem;
  /* Increase font size */
  font-weight: bold;
  color: #ffffff;
  /* White text for visibility */
  border-radius: 50px;
  /* More rounded corners */
  padding: 20px 40px;
  /* More spacious vertical and horizontal padding */
  display: flex;
  align-items: center;
  /* Vertically center the text */
  justify-content: center;
  /* Horizontally center the text */
  height: auto;
  /* Adjust based on padding */
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.3);
  /* Stronger shadow for depth */
  transition: all 0.3s ease-in-out;
  /* Smooth transition */
  text-transform: uppercase;
  /* Uppercase for emphasis */
}

.portfolio-btn:hover {
  transform: scale(1.05);
  /* Slight grow effect */
  background-color: #704c8c;
  /* Change background color slightly */
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.4);
  /* Stronger shadow on hover */
}

.portfolio-btn:active {
  transform: scale(0.98);
  /* Slight shrink effect on click */
}

.portfolio-btn .v-btn__content {
  transition: color 0.3s ease;
}

.portfolio-btn:hover .v-btn__content {
  color: #fff;
  /* Hover text color */
}


/* CTA Container for Section 3 */
.cta-container {
  position: absolute;
  top: 10%;
  /* Positioning the text in the top area */
  right: 5%;
  /* Right aligned */
  text-align: right;
  color: #ffffff;
  /* White text color */
  max-width: 50%;
  /* Limit the width of the container */
}

.cta-text {
  font-size: clamp(40px, 10vw, 80px);
  font-weight: bold;
  margin-bottom: 20px;
  /* Space between text and icons */
  -webkit-text-stroke: 1px #03020235;
}

.cta-icons {
  display: flex;
  justify-content: flex-end;
  /* Align icons to the right */
  gap: 20px;
}

.cta-icons v-btn {
  background-color: rgba(255, 255, 255, 0.3);
  /* Slight background for buttons */
  border-radius: 50%;
}

.cta-icons v-btn:hover {
  background-color: rgba(255, 255, 255, 0.6);
  /* On hover effect */
}

.cta-icons v-icon {
  font-size: 2rem;
  /* Size for the icons */
  color: #fed00a;
  /* Icon color */
}

.v-footer {
  background-color: #333;
  color: white;
  padding: 10px 0;
}

.v-btn {
  color: white;
  margin: 0 10px;
}

.v-footer .v-btn:hover {
  color: #f7b400; /* You can adjust hover effect here */
}


/* Mobile Responsive Styles */
@media (max-width: 600px) {
  /* Adjust font sizes for mobile */
  .portfolio-name {
    font-size: clamp(30px, 10vw, 60px);
    margin-left: 10px;
    margin-bottom: -50px;
  }

  .portfolio-name-subtitle {
    font-size: 1rem;
    margin-top: 50px;
  }

  /* Center content and adjust padding/margins for better mobile view */
  .portfolio-card-blank {
    text-align: center;
    margin-left: 0;
    padding: 10px;
  }

  /* Adjust tagline styles for mobile */
  .tagline-top,
  .tagline-bottom {
    font-size: clamp(20px, 8vw, 40px);
    position: static;
    margin: 5px 0;
    text-align: center;
  }

  .tagline-container {
    width: 90vw;
    height: auto;
    margin: 0 auto;
  }

  /* Adjust button size and placement */
  .portfolio-btn {
    bottom: 5%;
    right: 10%;
    font-size: 1.5rem;
    padding: 15px 30px;
    width: 80%;
    margin: 0 auto;
  }

  /* CTA text and icons adjustments for mobile */
  .cta-container {
    top: 20%;
    right: 5%;
    max-width: 90%;
    text-align: center;
    margin: 0 auto;
  }

  .cta-text {
    font-size: clamp(30px, 8vw, 50px);
    margin-bottom: 10px;
  }

  .cta-icons {
    justify-content: center;
    gap: 15px;
  }

  /* Footer button adjustments */
  .v-footer {
    text-align: center;
  }

  .v-footer .v-btn {
    margin: 5px;
    font-size: 0.8rem;
  }

  /* Adjust background sections to make sure images scale properly */
  .background-section {
    height: auto;
    padding: 20px 0;
    background-size: contain;
  }

  /* Make content containers full width on mobile */
  .content-container,
  .content-container-2 {
    padding: 10px;
    width: 100%;
  }
}

</style>
