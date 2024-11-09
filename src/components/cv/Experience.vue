<template>
    <v-card class="mb-4 experience-card">
      <v-card-title class="headline experience-title">Experience</v-card-title>
      <v-card-text>
        <ul>
          <li class="experience-item">
            <v-row align="center" no-gutters>
              <v-col cols="12">
                <div class="position">
                  <h3 class="position-title">
                    Student Software Developer/Integrator
                    <!-- Tooltip applied directly to the button -->
                    <v-tooltip bottom>
                      <template #default>
                        <v-btn elevation="0" icon class="download-btn" @click="downloadPPT">
                          <v-icon>mdi-download-circle-outline</v-icon>
                          <span>Download PPT to see what I worked on</span>
                        </v-btn>
                        
                      </template>
            
                    </v-tooltip>
                  </h3>
                  <p class="company-name">Electric Power Research Institute, Knoxville, TN</p>
                  <p class="duration">May 2023 – September 2024</p>
                </div>
                <p class="responsibilities-title">Responsibilities:</p>
                <div class="responsibilities">
                  <span class="responsibility-chip">Fullstack Development on Power Quality Investigator</span>
                  <span class="responsibility-chip">Designed Navigator portion of Frontend, helped Refactor Backend</span>
                  <span class="responsibility-chip">Interacted with Power Quality problems and solutions for various industries</span>
                  <span class="responsibility-chip">Used: VueJS, Vuetify, C#, SQL, Python</span>
                </div>
              </v-col>
            </v-row>
          </li>
  
          <li class="experience-item">
            <v-row align="center" no-gutters>
              <v-col cols="12">
                <div class="position">
                  <h3 class="position-title">Data Entry Keyer</h3>
                  <p class="company-name">Arnhem Postal History, George Mason University, Fairfax, VA</p>
                  <p class="duration">September 2023 – April 2024</p>
                </div>
                <p class="responsibilities-title">Responsibilities:</p>
                <div class="responsibilities">
                  <span class="responsibility-chip">Maintained and entered postal data</span>
                  <span class="responsibility-chip">Ensured accurate and timely data entry</span>
                </div>
              </v-col>
            </v-row>
          </li>

           <li class="experience-item">
            <v-row align="center" no-gutters>
              <v-col cols="12">
                <div class="position">
                  <h3 class="position-title">Peer Learning Assistant (Tutor)</h3>
                  <p class="company-name">Vol Study Center, University of Tennessee Knoxville, Knoxville TN</p>
                  <p class="duration">November 2022 – Current</p>
                </div>
                <p class="responsibilities-title">Responsibilities:</p>
                <div class="responsibilities">
                  <span class="responsibility-chip">Assisted undergraduate students in STEM courses during 1-1 sessions</span>
                  <span class="responsibility-chip">Led exam review lectures</span>
                  <span class="responsibility-chip">Math Offered: College Algebra(MATH119), All Calculus I variations (MATH125/MATH131/MATH132/MATH141), Calculus III (MATH241) </span>
                  <span class="responsibility-chip">Engineering Offered: Phyiscs for Engineers I and II (EF141/EF142/EF151/EF152), Computer Methods in Engineer Problem Solving (EF105) </span>
                  <span class="responsibility-chip">EECS Offered: Circuits I (ECE201), Data Structures and Algorithms I (CS202) </span>
                   <span class="responsibility-chip">I also offer every German Language course at UTK! </span>
                </div>
              </v-col>
            </v-row>
          </li>
        </ul>
      </v-card-text>
    </v-card>
  </template>
  
  <script lang="ts" setup>
  const pdfUrl = "@/portfolio/pqi.pdf"
  
  const downloadPPT = () => {
      window.location.href = pdfUrl;
  }
  </script>
  
  <style scoped lang="css">
  .experience-card {
      background-color: #2e13c540;
      border-radius: 8px;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
      padding: 20px;
      border-left: 4px solid #ff7f00; /* UTK color */
  }
  
  .experience-title {
      font-size: 1.6em;
      font-weight: 600;
      color: #d5cece;
  }
  
  .experience-item {
      margin-bottom: 20px;
      border-bottom: 1px solid #eee;
      padding-bottom: 10px;
  }
  
  .position-title {
      font-size: 1.2em;
      font-weight: bold;
      color: #d5cece;
      display: flex;
      align-items: center;
  }
  
  .company-name {
      font-size: 1.1em;
      color: #ff7f00; /* UTK orange */
      font-weight: 500;
  }
  
  .duration {
      font-size: 1em;
      color: #d5cece;
      font-weight: 400;
  }
  
  .responsibilities-title {
      font-size: 1em;
      color: #d5cece;
      margin: 10px 0 5px;
  }
  
  .responsibilities {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
  }
  
  .responsibility-chip {
      background-color: #f0f0f0;
      color: #333;
      padding: 5px 12px;
      border-radius: 16px;
      font-size: 0.9em;
      font-weight: 500;
      transition: background-color 0.3s;
  }
  
  .responsibility-chip:hover {
      background-color: #ff7f00; /* Hover effect in UTK orange */
      color: white;
  }
  
  /* Button style */
  .download-btn {
      margin-left: 10px;
      background-color: transparent;
      color: #ff7f00; /* UTK Orange */
      transition: color 0.3s ease;
      padding: 8px;
  }
  
  .download-btn:hover {
      color: #d5cece; /* Light gray for hover effect */
  }
  
  /* Tooltip style */
  .v-tooltip {
      z-index: 9999; /* Ensure tooltip is visible above other elements */
  }
  </style>
  
