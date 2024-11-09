<template>
    <v-card class="mx-auto my-4" max-width="400">
      <v-img src="/portfolio/so36/index.png" height="200px"></v-img>
      <v-card-title class="headline"> {{title}}</v-card-title>
      <v-card-subtitle>
       HTML Website to display the Visual Culture around Berlin City-Scapes, specifically at <a href="https://www.so36.com/tickets">SO36</a>.
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
             I designed this website as a visual representation of color and film in Berlin. I chose web development instead of an essay for easier accessibilty to my work, as well as ability to set the visual tone. 
            </p>
            
            <h4>Features Include:</h4>
            <v-list dense>
              <v-list-item>
                <v-list-item-content>
                  <strong>Overview:</strong>
                  <v-list dense>
                    <v-list-item>
                      <v-list-item-content>Pictures, Analysis, and Key Definitions for those seeking to experience SO36 in Film</v-list-item-content>
                    </v-list-item>
                    <v-list-item>
                      <v-list-item-content>HTML and CSS Styling to guide the visual tone to match those ofthe <a href="https://www.youtube.com/watch?v=-Vu2ySzInU8" target="__blank"> Decoder (1984)</a> film. </v-list-item-content>
                    </v-list-item>
                    </v-list>
                </v-list-item-content>
                </v-list-item>
              </v-list>
            <!-- Add an example image for the comment system -->
            <v-img src="/portfolio/so36/hover.png" max-width="100%" class="my-4"></v-img>
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
  const projectLink = "https://crouchbindcommit.github.io/So36Berlin/index.html";
  
  const dialog = ref(false);
  const title = "German Film Project Website";
  const tags = [
    "Web Development",
    "HTML5",
    "CSS",
    "German Language/Literature",
    "Film Analysis",
  ];
  
  const emit = defineEmits(["emitTitle", "emitTags"]);
  // Emit title and tags when the component mounts
  onMounted(() => {
  emit("emitTitle", title);
  emit("emitTags", tags);
})
  </script>
  
  