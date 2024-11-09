<template>
    <v-container class="introduction" data-aos="fade-up" data-aos-duration="1500" data-aos-offset="100">
        <v-row align="start"> <!-- Ensure both columns start at the top of the row -->
            <!-- Left Column (Text - 60% width) -->
            <v-col cols="12" md="7" class="text-column">
                <!-- Card for the text section with padding and background -->
                <v-card class="text-card">
                    <v-card-title>
                        <span class="typing-effect" style="color: blue;">Hi, I'm Mak.</span>
                    </v-card-title>

                    <!-- Button for more text -->
                    <v-btn color="primary" @click="toggleText" class="more-info-btn">
                        Click to Know More
                    </v-btn>

                    <!-- Conditional rendering for the text -->
                    <v-expand-transition>
                        <div v-if="showText">
                            <br>
                            <p style="color: blue">
                                I'm a passionate Fullstack Developer and aspiring Software Engineer. I'm graduating in
                                May 2025 after earning two bachelor's degrees from the University of Tennessee
                                Knoxville: A German Language BA and Computer Engineering BS. Whether in office working
                                with fullstack or in the classroom battling machine learning, cybersecurity, and
                                embedded systems, my motto stays the same: Learn it, Break it, and Fix it until it's
                                even better.
                            </p>
                            <br>
                            <p style="color: blue">
                                I offer a unique blend of technical skills, leadership experience, and passion for
                                everything I do (Check out my CV or Portfolio). My desire to see clients happy and
                                amazed helps me stay motivated to innovate and grow in every project I take on.
                            </p>
                            <br>
                            <p style="color: blue"> Much like Rock Lee, I consider myself a Genius of Hard Work. </p>
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/ixgDm66bB2Q"
                                frameborder="0"
                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                allowfullscreen>
                            </iframe>
                        </div>
                    </v-expand-transition>
                </v-card>
            </v-col>

            <!-- Right Column (Image - 40% width) -->
            <v-col cols="12" md="5" class="image-column">
                <!-- Image of you with flying animation and frame -->
                <v-img src="/me/utwrfc-superlative.jpg" alt="Photo of Mak" class="fly-in framed-img" height="auto" />
            </v-col>
        </v-row>
    </v-container>

    <v-divider />

    <Timeline />
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Timeline from '@/components/about/Timeline.vue'

// Initialize AOS for animations
onMounted(() => {
    AOS.init({
        duration: 1500,
        easing: 'ease-out-cubic',
        once: true,
    });
});

// Manage visibility of additional text
const showText = ref(false);
const toggleText = () => {
    showText.value = !showText.value;
};
</script>

<style scoped>
/* Column Layout */
.text-column {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    /* Align text at the top of the column */
}

.image-column {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    /* Align image at the top of the column */
}

/* Typewriter effect using CSS */
.typing-effect {
    display: inline-block;
    font-family: 'Courier New', Courier, monospace;
    font-size: 1.5rem;
    white-space: nowrap;
    overflow: hidden;
    width: 0;
    /* Start with zero width */
    border-right: 0.1em solid black;
    /* Cursor effect */
    animation: typing 2s steps(20) 1s forwards, blink 0.75s step-end infinite;
}

@keyframes typing {
    from {
        width: 0;
    }

    to {
        width: 100%;
    }
}

@keyframes blink {
    50% {
        border-color: transparent;
    }
}

/* Flying Image Animation */
.fly-in {
    animation: flyIn 1.5s ease-out forwards;
    transform: translateX(100px);
    /* Start from the right */
}

@keyframes flyIn {
    from {
        transform: translateX(100px);
        opacity: 0;
    }

    to {
        transform: translateX(0);
        opacity: 1;
    }
}

/* Image Frame Styles */
.framed-img {
    border-radius: 15px;
    /* Rounded corners */
    border: 3px solid #42b983;
    /* Green border */
    padding: 5px;
    /* Space between the image and the border */
}

/* Card Style for Text Column */
.text-card {
    padding: 20px;
    /* Adds padding inside the card */
    background-color: #f5f5f5;
    /* Light background color */
    border-radius: 12px;
    /* Rounded corners for card */
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
    /* Subtle shadow */
    margin-bottom: 20px;
    /* Space between card and other elements */
}

/* Button Styles */
.v-btn {
    margin-top: 1rem;
    background-color: #42b983;
    color: white;
}

.v-btn:hover {
    background-color: #367d56;
}

/* V-Expansion Panel Styles (Removed, as it's now a button) */
.more-info-btn {
    margin-top: 1rem;
}
</style>
