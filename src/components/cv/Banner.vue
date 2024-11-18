<template>
    <v-banner class="name-banner" dark>
        <v-row justify="space-between" align="center">
            <!-- Left section with your name -->
            <v-col cols="auto">
                <div class="banner-text">
                    <h1>Makayla's Portfolio</h1>
                    <p class="tagline">Computer Engineer | Fullstack Developer | Security Enthusiast</p>
                </div>
            </v-col>

            <!-- Right section with the download button -->
            <v-col cols="auto">
                <v-tooltip bottom>
                    <template v-slot:activator="{ props }">
                        <v-btn
                            color="orange"
                            @click="downloadResume"
                            icon
                            v-bind="props"
                        >
                            <v-icon>mdi-download</v-icon>
                        </v-btn>
                    </template>
                    <span>Download Resume</span>
                </v-tooltip>
            </v-col>
        </v-row>
    </v-banner>
</template>

<script lang="ts" setup>
const downloadResume = () => {
    const resumeUrl = "/Resume.pdf"; // Adjust the path to where your resume is stored
    window.location.href = resumeUrl;
};
</script>

<style scoped>
.name-banner {
    background-color: #1a1a1a;
    padding: 16px;
}

.banner-text h1 {
    font-size: 2.4em;
    font-weight: bold;
    color: #ff7f00; /* UTK orange color */
}

.banner-text .tagline {
    font-size: 1.1em;
    color: #d5cece; /* Light gray color */
}

.v-btn {
    font-size: 1.1em;
    text-transform: none;
}

.v-btn:hover {
    background-color: #ff7f00; /* Highlight color on hover */
}
</style>
