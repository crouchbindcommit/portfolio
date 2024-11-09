<template>
  <v-container fluid class="contact-container">
    <v-row justify="end">
      <v-col cols="12" md="6" class="contact-info">
        <v-card class="contact-card" elevation="2">
          <v-card-title class="text-center">
            <h2>Contact Me</h2>
          </v-card-title>

          <v-card-text class="text-center">
            <p>
              I look forward to partnering with you on your next design adventure. Please reach out to me on any of the platforms below.
            </p>

            <v-row justify="center">
              <!-- GitHub -->
              <v-col cols="auto">
                <v-btn
                  color="black"
                  href="https://github.com/crouchbindcommit"
                  target="_blank"
                  icon
                  aria-label="GitHub"
                >
                  <v-icon>mdi-github</v-icon>
                </v-btn>
              </v-col>

              <!-- LinkedIn -->
              <v-col cols="auto">
                <v-btn
                  color="primary"
                  href="https://www.linkedin.com/in/makayla-mckinney-b45129208/"
                  target="_blank"
                  icon
                  aria-label="LinkedIn"
                >
                  <v-icon>mdi-linkedin</v-icon>
                </v-btn>
              </v-col>

              <!-- Email -->
              <v-col cols="auto">
                <v-btn
                  color="orange"
                  :href="'mailto:mmckin22@vols.utk.edu'"
                  icon
                  aria-label="Email"
                >
                  <v-icon>mdi-email</v-icon>
                </v-btn>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts" setup>
</script>

<style scoped>
.contact-container {
  background-image: url('/background/woods.jpg'); /* Path to your photo */
  background-size: cover;
  background-position: center; /* Center the background image */
  height: 100vh; /* Full screen height */
  display: flex;
  align-items: center;
  padding: 32px;
}

.contact-info {
  background: rgba(255, 255, 255, 0.8); /* Light background to enhance readability */
  padding: 20px;
  border-radius: 8px;
  width: 100%;
  max-width: 500px;
  margin-right: 100px;
}

.contact-card {
  background-color: transparent;
  padding: 16px;
  color: #1c1919;
}

.contact-card h2 {
  color: #333;
}

.v-btn {
  margin: 8px;
}

.v-btn:hover {
  background-color: #ff7f00; /* Highlight on hover */
}
</style>
