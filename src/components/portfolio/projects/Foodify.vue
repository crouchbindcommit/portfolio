<template>
    <v-card class="mx-auto my-4" max-width="400">
      <v-img src="/portfolio/foodify/dashboard.png" height="200px"></v-img>
      <v-card-title class="headline">{{title}}</v-card-title>
      <v-card-subtitle>
        App developed to help UTK students find and report free food events.
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
              Foodify is a Fullstack Web Application. The frontend is hosted at
              <a href="https://freefoodify.netlify.app/" target="_blank">freefoodify.netlify.app</a>.
            </p>
            
            <h4>Features Include:</h4>
            <v-list dense>
              <v-list-item>
                <v-list-item-content>
                  <strong>Overview:</strong>
                  <v-list dense>
                    <v-list-item>
                      <v-list-item-content>Ability to Report and See Free-Food Events</v-list-item-content>
                    </v-list-item>
                    <v-list-item>
                      <v-list-item-content>Ability to Like/Dislike a Comment</v-list-item-content>
                    </v-list-item>
                    <v-list-item>
                      <v-list-item-content>Ability to open an event from the Map in Google Maps</v-list-item-content>
                    </v-list-item>
                    <v-list-item>
                      <v-list-item-content>Resources Tab tracks reoccurring Free Food, such as Charity Kitchens</v-list-item-content>
                    </v-list-item>
                  </v-list>
                </v-list-item-content>
              </v-list-item>
  
              <v-list-item>
                <v-list-item-content>
                  <strong>Cybersecure Practices:</strong>
                  <v-list dense>
                    <v-list-item>
                      <v-list-item-content>Password storage uses Bcrypt and Salting for hashing</v-list-item-content>
                    </v-list-item>
                    <v-list-item>
                      <v-list-item-content>Settings for account management are password-protected</v-list-item-content>
                    </v-list-item>
                    <v-list-item>
                      <v-list-item-content>Hidden API endpoints and secured Database/API Keys</v-list-item-content>
                    </v-list-item>
                  </v-list>
                </v-list-item-content>
              </v-list-item>
  
              <v-list-item>
                <v-list-item-content>
                  <strong>Comment and Voting System:</strong>
                  <v-list dense>
                    <v-list-item>
                      <v-list-item-content>Users can report free food events, all users can see and comment on these events</v-list-item-content>
                    </v-list-item>
                    <v-list-item>
                      <v-list-item-content>Comments include timestamp, content, and optionally username</v-list-item-content>
                    </v-list-item>
                    <v-list-item>
                      <v-list-item-content>To prevent abuse, all comments and votes are tied to a user ID</v-list-item-content>
                    </v-list-item>
                    <v-list-item>
                      <v-list-item-content>Users can “Like” OR “Dislike” a comment, with restrictions on vote changes</v-list-item-content>
                    </v-list-item>
                  </v-list>
                </v-list-item-content>
              </v-list-item>
            </v-list>
  
            <!-- Add an example image for the comment system -->
            <v-img src="/portfolio/foodify/comment.png" max-width="100%" class="my-4"></v-img>
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
  const projectLink = "https://freefoodify.netlify.app/";
  const title = "Foodify: Free Food Finder";
  const tags = [
    "Fullstack Development",
    "VueJS",
    "MongoDB",
    "NodeJS",
    "API Development",
    "Database Development",
    "ARCGis API",
  ];
  
  const emit = defineEmits(["emitTitle", "emitTags"]);
  // Emit title and tags when the component mounts
  onMounted(() => {
  emit("emitTitle", title);
  emit("emitTags", tags);
})
  </script>
  