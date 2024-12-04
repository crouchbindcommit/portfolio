<template>
    <v-card class="mx-auto my-4" max-width="400">
      <v-img src="/portfolio/website.png" height="200px"></v-img>
      <v-card-title class="headline">{{title}}</v-card-title>
      <v-card-subtitle>
        My Personal Portfolio, Built for Scratch
      </v-card-subtitle>
  
      <v-card-text>
        <v-chip
          v-for="item in tags"
          :key="item"
          class="ma-1"
          color="primary"
          outlined
          small
        >
          {{ item }}
        </v-chip>
      </v-card-text>
  
      <v-card-actions>
        <v-btn color="primary" @click="dialog = true">Learn More</v-btn>
        <v-btn color="secondary" :href="projectLink" target="_blank">Visit Site</v-btn>
      </v-card-actions>
  
      <!-- Popup for Details -->
      <v-dialog v-model="dialog" max-width="500px">
        <v-card>
          <v-card-title>
            <span class="headline">{{title}}</span>
          </v-card-title>
          <v-card-text>
            <p>
              I built my portfolio from scratch. It is launched from netlify and hosted on
              <a href="https://www.makmckinney.com" target="_blank">www.makmckinney.com</a>.
            </p>
            
            <h4>Features Include:</h4>
            <v-list dense>
              <v-list-item>
                <v-list-item-content>
                  <strong>Overview:</strong>
                  <v-list dense>
                    <v-list-item>
                      <v-list-item-content>Ability to Review and Download my CV</v-list-item-content>
                    </v-list-item>
                    <v-list-item>
                      <v-list-item-content>Ability to Review and interact with my Projects</v-list-item-content>
                    </v-list-item>
                    <v-list-item>
                      <v-list-item-content>Review of who I am, as a person and engineer</v-list-item-content>
                    </v-list-item>
                    <v-list-item>
                      <v-list-item-content>Ability to Contact me</v-list-item-content>
                    </v-list-item>
                  </v-list>
                </v-list-item-content>
              </v-list-item>
  
  

            </v-list>
  
          </v-card-text>
          <v-card-actions>
            <v-btn color="primary" text @click="dialog = false">Close</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-card>
  </template>
  
  <script setup>
  import { ref, onMounted, defineEmits } from "vue";
  
  const dialog = ref(false);
  const projectLink = "www.makmckinney.com";
  const title = "My Portfolio";
  const tags = [
    "Fullstack Development",
    "VueJS",
    "Personal Branding",
    "URL Masking", 
  ];
  
  const emit = defineEmits(["emitTitle", "emitTags"]);
  // Emit title and tags when the component mounts
  onMounted(() => {
  emit("emitTitle", title);
  emit("emitTags", tags);
})
  </script>
  
