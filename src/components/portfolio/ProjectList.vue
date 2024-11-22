<template>
  <v-container>
    <!-- Search Input -->
    <v-text-field
      v-model="searchQuery"
      label="Search projects by title or tags"
      append-icon="mdi-magnify"
      class="mb-4"
    />

    <!-- Project Grid View -->
    <v-row :dense="true">
      <v-col
        v-for="(project, index) in filteredProjects"
        :key="index"
        :cols="12"
        :sm="6"
        :md="4"
      >
        <!-- Render the project component in grid view -->
        <component
          :is="project.component"
          @emitTitle="updateTitle($event, index)"
          @emitTags="updateTags($event, index)"
          @showDetails="showDetails(project)"
          
        />
      </v-col>
    </v-row>

    <!-- Project Details Modal -->
    <v-dialog v-model="dialog" max-width="600px">
      <v-card v-if="selectedProject" >
        <v-card-title>
          <span class="headline">{{ selectedProject.title }}</span>
        </v-card-title>
        <v-card-text>
          <p>{{ selectedProject.description }}</p>
          <v-chip
            v-for="(tag, index) in selectedProject.tags"
            :key="index"
            class="ma-1"
            color="primary"
            outlined
            small
          >
            {{ tag }}
          </v-chip>
        </v-card-text>
        <v-card-actions>
          <v-btn color="primary" text @click="dialog = false">
            Close
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script setup>
import { ref, computed } from "vue";
import Foodify from "@/components/portfolio/projects/Foodify.vue";
import Phishing from "@/components/portfolio/projects/Phishing.vue";
import So36 from "@/components/portfolio/projects/SO36.vue";
import Rugby from "@/components/portfolio/projects/RaRaRugby.vue";
import Email from "@/components/portfolio/projects/Email.vue";
import CreditCheck from "@/components/portfolio/projects/CreditCheck.vue";
import Hydroponics from "@/components/portfolio/projects/Hydroponics.vue";


import ComingSoon from "@/components/portfolio/projects/ComingSoon.vue";


import AOS from 'aos';
import 'aos/dist/aos.css'

// Reactive properties for modal state, selected project data, and search query
const dialog = ref(false);
const selectedProject = ref(null);
const searchQuery = ref("");

// Array to store project components along with their titles and tags
const projects = ref([
  { component: Foodify, title: "", tags: [], description: "Foodify project details..." },
  { component: Phishing, title: "", tags: [], description: "Phishing project details..." },
  { component: Hydroponics, title: "", tags: [], description: "Automated Hydroponics project details..." },
  { component: So36, title: "", tags: [], description: "SO36 project details..." },
  { component: Rugby, title: "", tags: [], description: "Rugby project details..." },
  { component: Email, title: "", tags: [], description: "Email project details..." },
  { component: CreditCheck, title: "", tags: [], description: "Credit Check project details..." },
  { component: ComingSoon, title: "", tags: [], description: "Coming Soon project details..." }
]);

// Filter projects by title or tags based on search query
const filteredProjects = computed(() => {
  return projects.value.filter(project => {
    const lowerQuery = searchQuery.value.toLowerCase();
    return (
      project.title.toLowerCase().includes(lowerQuery) ||
      project.tags.some(tag => tag.toLowerCase().includes(lowerQuery))
    );
  });
});

// Show project details in the modal
function showDetails(project) {
  selectedProject.value = project;
  dialog.value = true;
}

// Update title when emitted from a project component
function updateTitle(title, index) {
  projects.value[index].title = title;
}

// Update tags when emitted from a project component
function updateTags(tags, index) {
  projects.value[index].tags = tags;
}
</script>

<style lang="css" scoped>

</style>
