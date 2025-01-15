<template>
    <v-card class="mb-4 skills-card">
      <v-card-title class="headline skills-title">Skills</v-card-title>
      <v-card-text>
        <v-row>
          <!-- Programming Languages -->
          <v-col cols="12" md="6">
            <p class="skills-category">Programming Languages</p>
            <div class="skills">
              <v-chip class="skill-chip" color="green" text-color="white" outlined>Java</v-chip>
              <v-chip class="skill-chip" color="blue" text-color="white" outlined>C++</v-chip>
              <v-chip class="skill-chip" color="orange" text-color="white" outlined>C</v-chip>
              <v-chip class="skill-chip" color="red" text-color="white" outlined>C#</v-chip>
              <v-chip class="skill-chip" color="blue" text-color="white" outlined>ARM Cortex Assembly</v-chip>
              <v-chip class="skill-chip" color="orange" text-color="white" outlined>VHDL</v-chip>
              <v-chip class="skill-chip" color="red" text-color="white" outlined>Bash</v-chip>
              <v-chip class="skill-chip" color="purple" text-color="white" outlined>PowerShell</v-chip>
              <v-chip class="skill-chip" color="green" text-color="white" outlined>MATLAB</v-chip>
                  <v-chip class="skill-chip" color="green" text-color="white" outlined>SELogic</v-chip>
            </div>
          </v-col>
          <v-col cols="12" md="6">
            <p class="skills-category">Web Development</p>
            <div class="skills">
              <v-chip class="skill-chip" color="green" text-color="white" outlined>HTML5</v-chip>
              <v-chip class="skill-chip" color="blue" text-color="white" outlined>JavaScript</v-chip>
              <v-chip class="skill-chip" color="orange" text-color="white" outlined>CSS</v-chip>
              <v-chip class="skill-chip" color="red" text-color="white" outlined>VueJS / Vuetify</v-chip>
              <v-chip class="skill-chip" color="purple" text-color="white" outlined>EmberJS</v-chip>
              <v-chip class="skill-chip" color="green" text-color="white" outlined>NodeJS</v-chip>
              <v-chip class="skill-chip" color="blue" text-color="white" outlined>API Integration</v-chip>
            </div>
          </v-col>
          
          <v-col cols="12" md="6">
            <p class="skills-category">Database Development</p>
            <div class="skills">
              <v-chip class="skill-chip" color="green" text-color="white" outlined>SQL</v-chip>
              <v-chip class="skill-chip" color="blue" text-color="white" outlined>MongoDB</v-chip>
              <v-chip class="skill-chip" color="orange" text-color="white" outlined>Database Optimization and Refactoring</v-chip>
              <v-chip class="skill-chip" color="red" text-color="white" outlined>Data Manipulation</v-chip>
              <v-chip class="skill-chip" color="purple" text-color="white" outlined>Python Packages (NumPy, Sci-Learn, Pandas, TensorFlow, SMTP)</v-chip>
            </div>
          </v-col>

          <v-col cols="12" md="6">
            <p class="skills-category">Tools and Technologies</p>
            <div class="skills">
              <v-chip class="skill-chip" color="green" text-color="white" outlined>Git / GitHub</v-chip>
              <v-chip class="skill-chip" color="blue" text-color="white" outlined>Microsoft Azure</v-chip>
              <v-chip class="skill-chip" color="orange" text-color="white" outlined>Render</v-chip>
              <v-chip class="skill-chip" color="red" text-color="white" outlined>Fusion360 / AutoCAD / OnShape </v-chip>
              <v-chip class="skill-chip" color="purple" text-color="white" outlined>Arduino</v-chip>
              <v-chip class="skill-chip" color="green" text-color="white" outlined>Visual Studio / KEIL</v-chip>
              <v-chip class="skill-chip" color="blue" text-color="white" outlined>JMP</v-chip>
              <v-chip class="skill-chip" color="orange" text-color="white" outlined>SPICE</v-chip>
            </div>
          </v-col>
          
        </v-row>
      </v-card-text>
    </v-card>
  </template>
  
  <script lang="ts" setup>
  </script>
  
  <style scoped>
  .skills-card {
    background-color: #2e13c540;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    padding: 20px;
    border-left: 4px solid #ff7f00; /* UTK color */
  }
  
  .skills-title {
    font-size: 1.6em;
    font-weight: 600;
    color: #d5cece;
  }
  
  .skills-category {
    font-size: 1.1em;
    font-weight: 500;
    color: #d5cece;
    margin-top: 10px;
  }
  
  .skills {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
  }
  
  .skill-chip {
    font-size: 0.9em;
    font-weight: 500;
    padding: 5px 12px;
    border-radius: 16px;
    transition: background-color 0.3s;
  }
  
  .skill-chip:hover {
    background-color: #ff7f00; /* Hover effect in UTK orange */
    color: white;
  }
  </style>
  
