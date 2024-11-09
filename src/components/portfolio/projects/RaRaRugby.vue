<template>
    <v-card class="mx-auto my-4" max-width="400">
      <v-img src="/portfolio/rararugby/start.png" height="200px"></v-img>
      <v-card-title class="headline">RaRaRugby: Womens' 7s Rugby</v-card-title>
      <v-card-subtitle>
        Game developed using agile methodology in Tandem with other minigames as a jack-box style PE Minigame.
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
        <v-btn color="secondary" :href="projectLink" target="_blank">Download Game (ZIP)</v-btn>
      </v-card-actions>
  
      <!-- Popup for Details -->
      <v-dialog v-model="dialog" max-width="500px">
        <v-card>
          <v-card-title>
            <span class="headline">{{title}}</span>
          </v-card-title>
          <v-card-text>
            <p>
              Rugby video games are scarce in general, but very few are the Rugby <a href="https://olympics.com/en/news/rugby-sevens-15-union-differences-paris-2024" target="__blank">7s</a> variety. Even fewer include womens' teams. Our version combines these two gaps to create a very basic playable womens 7s match.
            </p>
            <p> This game was developed as a sub-game for a larger School Subject Smackdown game. It was a jack-box style school game. Our team consisted of 8 students, and our Rugby subteam consisted of 2. </p>
            
            <h4>Features Include:</h4>
            <v-list dense>
              <v-list-item>
                <v-list-item-content>
                  <strong>Overview:</strong>
                  <v-list dense>
                    <v-list-item>
                      <v-list-item-content>Run/Chase Mechanic</v-list-item-content>
                    </v-list-item>
                    <v-list-item>
                      <v-list-item-content>Collision Mechanics</v-list-item-content>
                    </v-list-item>
                    <v-list-item>
                      <v-list-item-content>Start/Restart Screen</v-list-item-content>
                    </v-list-item>
                    <v-list-item>
                      <v-list-item-content>Timed Play: Score before the timer runs out!</v-list-item-content>
                    </v-list-item>
                  </v-list>
                </v-list-item-content>
              </v-list-item>
              </v-list>

            <v-img src="/portfolio/rararugby/win.gif" max-width="100%" class="my-4"></v-img>
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
  const projectLink = "/portfolio/rararugby/godot.zip";
  const title = "RaRaRugby: MVP (Minimum Viable Product) Womens' 7s Rugby";
  const tags = [
    "Game Development",
    "Physis Mechanisms",
    "Godot",
    "Agile Development",
  ];
  
  const emit = defineEmits(["emitTitle", "emitTags"]);
  // Emit title and tags when the component mounts
  onMounted(() => {
  emit("emitTitle", title);
  emit("emitTags", tags);
})
  </script>
  