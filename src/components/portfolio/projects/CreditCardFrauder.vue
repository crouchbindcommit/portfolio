<template>
    <v-card class="mx-auto my-4" max-width="400">
      <v-img src="/portfolio/CreditCardFrauder/poster.png" height="200px"></v-img>
      <v-card-title class="headline">{{title}}</v-card-title>
      <v-card-subtitle>
        Machine Learning Model to Predict Credit Card Fraud Occurances.
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
        <v-btn color="secondary" :href="projectLink" target="_blank">See Poster</v-btn>
      </v-card-actions>
  
      <!-- Popup for Details -->
      <v-dialog v-model="dialog" max-width="500px">
        <v-card>
          <v-card-title>
            <span class="headline">{{title}}</span>
          </v-card-title>
          <v-card-text>
            <p>
             I worked on a team of three to develop an algorithm to detect credit card fraud. I implemented the Random Forest algorithm in Python and helped generate data visualizations. I helped to implement a K Fold Cross Validation but we found the increase in accuracy from the RF base to be negligible. The Random Forest Model was improved by Ada Boosting.
            </p>
            
            
            <object data=projectLink type="application/pdf" width="100%" height="1000px"></object>
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
  const projectLink = "/portfolio/CreditCardFrauder/Project-Poster.pdf";
  const title = "Credit Card Fraud Detection with Machine Learning";
  const tags = [
    "Machine Learning",
    "Random Forest Algorithm",
    "K Fold Cross",
    "Ada Boost Algorithm",
    "Python",
    "Data Analysis",
    "Research Presentation"
  ];
  
  const emit = defineEmits(["emitTitle", "emitTags"]);
  // Emit title and tags when the component mounts
  onMounted(() => {
  emit("emitTitle", title);
  emit("emitTags", tags);
})
  </script>
  
