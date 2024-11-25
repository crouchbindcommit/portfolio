<template>
    <v-card class="mx-auto my-4" max-width="400">
      <v-img src="/portfolio/PIP/PIP_Interface.png" height="200px"></v-img>
      <v-card-title class="headline">{{title}}</v-card-title>
      <v-card-subtitle>
        Embedded custom <a href="https://fallout.fandom.com/wiki/Pip-Boy" target="__blank">PIP-boy</a>.
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
        <v-btn color="secondary" :href="projectLink" target="_blank">See Demo</v-btn>
      </v-card-actions>
  
      <!-- Popup for Details -->
      <v-dialog v-model="dialog" max-width="500px">
        <v-card>
          <v-card-title>
            <span class="headline">{{title}}</span>
          </v-card-title>
          <v-card-text>
            <p>
              (Mostly) lore accurate PIPBoy created using C and Texas Instruments TM4C123GH6PM board.
            </p>
            
            <h4>Features Include:</h4>
            <v-list dense>
              <v-list-item>
                <v-list-item-content>
                  <strong>Overview:</strong>
                  <v-list dense>
                    <v-list-item>
                      <v-list-item-content>Ability to View Local Weather</v-list-item-content>
                    </v-list-item>
                    <v-list-item>
                      <v-list-item-content>Ability to see Local Time</v-list-item-content>
                    </v-list-item>
                    <v-list-item>
                      <v-list-item-content>Ability to listen to (8-bit) music through DAC Audio Jack</v-list-item-content>
                    </v-list-item>
                    <v-list-item>
                      <v-list-item-content>Resting State Screen</v-list-item-content>
                    </v-list-item>
                  </v-list>
                </v-list-item-content>
              </v-list-item>
    </v-list>
 
  
              <div id="pdf-container" style="position: relative; width: 100%; height: 1000px;">
                    <iframe id="pdf-frame" src="/portfolio/PIP/PIP_Presentation.pdf" type="application/pdf" width="100%"
                        height="100%"></iframe>
                </div>
              
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
  const projectLink = "https://www.youtube.com/watch?v=DNfblcrEts0";
  const title = "ARM Cortex M4 PIP-Boy";
  const tags = [
    "Embedded Systems",
    "ARM Cortex M4",
    "Bitmap Imaging",
    "Weather API",
    "Finite State Machine",
    "Digital Logic Design",
  ];
  
  const emit = defineEmits(["emitTitle", "emitTags"]);
  // Emit title and tags when the component mounts
  onMounted(() => {
  emit("emitTitle", title);
  emit("emitTags", tags);
})
  </script>
  
