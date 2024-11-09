<template>
    <v-card class="mx-auto my-4" max-width="400">
      <v-img src="/portfolio/creditCheck/code.png" height="200px"></v-img>
      <v-card-title class="headline"> {{title}}</v-card-title>
      <v-card-subtitle>
       Program to redefine credit scores for individuals without a financial history. 
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
      </v-card-actions>
  
      <!-- Popup for Details -->
      <v-dialog v-model="dialog" max-width="500px">
        <v-card>
          <v-card-title>
            <span class="headline">{{title}}</span>
          </v-card-title>
          <v-card-text>
            <p>
             At the Deutsche Bank Inagural Eary Career Hackathon, I was placed on a team with three other students and tasked to develop something innovative. Our prompt challenged us to think of a new way to classify credit score. There was a 7 hour time limit.
            </p>
            <p> Our project was originally developed using VueJS and NodeJS for API, but due to hosting issues, we decided to move to AngularJS. </p>
            <v-list dense>
              <v-list-item>
                <v-list-item-content>
                  <strong>What makes it Innovative?</strong>
                    <p> We chose to cater to students and consider more than just previous transactions when deciding credit score. We also consider: </p>
                  <v-list dense>
                    <v-list-item>
                      <v-list-item-content>GPA (the higher, the better)</v-list-item-content>
                    </v-list-item>
                    <v-list-item>
                      <v-list-item-content>Graduation Year (The closer to graduation, the more likely to be employed)</v-list-item-content>
                    </v-list-item>
                    <v-list-item>
                      <v-list-item-content>College Major (favors highly employed disciplines)</v-list-item-content>
                    </v-list-item>
                    <v-list-item>
                      <v-list-item-content>Work History (favors those who have had at least part time jobs if not internships or co-ops)</v-list-item-content>
                    </v-list-item>
                    <v-list-item>
                      <v-list-item-content>Parental Income (expecting that parents may be able to help repay loans)</v-list-item-content>
                    </v-list-item>
                    </v-list>
                </v-list-item-content>
                </v-list-item>
              </v-list>
              <p> This project could be improved by focusing on the psychology of the user. For example, one user may gross $50k and take a $1k loan, but because repaying isn't a priority, their score should be low. Another user may gross $2k with a $1k loan, but prioritize loan payments, and therefore should have a higher credit score.</p>
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
  const title = "Credit Check";
  const tags = [
   "Web Development",
    "VueJs",
    "MySQL",
    "AngularJS",
    "Python",
    "API Development",
  ];
  
  const emit = defineEmits(["emitTitle", "emitTags"]);
  // Emit title and tags when the component mounts
  onMounted(() => {
  emit("emitTitle", title);
  emit("emitTags", tags);
})
  </script>
  