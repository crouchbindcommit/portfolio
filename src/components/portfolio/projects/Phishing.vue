<template>
    <v-card class="mx-auto my-4" max-width="400">
      <v-img src="/portfolio/phishing/phishing.png" height="200px"></v-img>
      <v-card-title class="headline"> {{title }}</v-card-title>
      <v-card-subtitle>
       Copy of Canvas Login Page created to demonstrate Phishing attacks, such as through SQL Injection.
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
        <v-btn color="secondary" :href="videoLink" target="_blank">See Demo</v-btn>
      </v-card-actions>
  
      <!-- Popup for Details -->
      <v-dialog v-model="dialog" max-width="500px">
        <v-card>
          <v-card-title>
            <span class="headline">{{title}}</span>
          </v-card-title>
          <v-card-text>
            <p>
             I developed this malicious site in a team with three other students. I implemented an automatic download; This project used a benign text document to demonstrate the feature, but an attacker would use a trojan virus. I helped implement the SQL Injection that allowed our malicious site to steal user details. 
            </p>
            
            <h4>Features Include:</h4>
            <v-list dense>
              <v-list-item>
                <v-list-item-content>
                  <strong>Overview:</strong>
                  <v-list dense>
                    <v-list-item>
                      <v-list-item-content>Ability to Steal Login Information</v-list-item-content>
                    </v-list-item>
                    <v-list-item>
                      <v-list-item-content>Comfort for User: The "virus" has a displayed SHA-256 hash</v-list-item-content>
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
  const videoLink = "https://www.youtube.com/watch?v=cyj4AtBYGww0";

  const dialog = ref(false);
  const title = "Malicious Canvas Doupe";
  const tags = [
    "Web Development",
    "Cybersecurity",
    "Phishing",
    "SQL Injection",
    "SHA-256",
    "ReactJS",
  ];
  
  const emit = defineEmits(["emitTitle", "emitTags"]);
  // Emit title and tags when the component mounts
  onMounted(() => {
  emit("emitTitle", title);
  emit("emitTags", tags);
})
  </script>
  