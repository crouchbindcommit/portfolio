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
                  <v-btn elevation="0" icon class="detail-btn" @click="epriDialog = true">
                    <v-icon>mdi-information-outline</v-icon>
                  </v-btn>
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
                <h3 class="position-title">
                  Data Entry Keyer
                  <v-btn elevation="0" icon class="detail-btn" @click="keyerDialog = true">
                    <v-icon>mdi-information-outline</v-icon>
                  </v-btn>
                </h3>
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
      </ul>
    </v-card-text>

    <!-- Dialog -->
    <v-dialog v-model="epriDialog" max-width="600px">
      <v-card>
        <v-card-title> Fullstck Software Dev Details</v-card-title>
        <v-card-text>
            The <a href="https://www.epri.com/research/products/000000003002004287" target="__blank">PQI webtool</a> is proprietary to EPRI. I specifically developed the navigator and tools pages to display data in modern and convenient structures. 
        </v-card-text>
      
        <v-card-text>
          On the frontend, I restructured the navigator to simplify the drill down approach. Previously, a user had to select all necessary information in one step. For example, to see common components used in the wood industry, a user would have to select Wood Industry -> One of the Processes -> A piece of Equipment, and only then would the user see common components in only that selection of equipment. I maintained this functionality for specifics, but decided to show all relevant processes, components, and equipments at every level, with the displayed information narrowing as the user selects more options.    
          Before my work, the tools page showed hyperlinks to various useful tools. I chose to group pages based on content type, as well as display the information using modern cards and solutions for a more aesthetic UX.      
        </v-card-text>

        <v-card-text>
          In the database, I helped refactor the SQL tables that drove the navigator. I was able to end the need for multiple page tables without losing any data, simplifying the relations in the database. I was also responsible for formatting existing data as well as adding new data to display on the webtool.
        </v-card-text>

        <v-card-text> My experience culminated in the creation of training material proprietary to EPRI. With permission from my project manager, I was able to take a subset of the training material that I created to showcase the work that I accomplished. This can viewed below or downloaded <a href="/portfolio/PQI.pdf" target="__blank"> here</a>. </v-card-text>
        <object data="/portfolio/PQI.pdf" type="application/pdf" width="100%" height="1000px"></object>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" @click="epriDialog = false">Close</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>


    <v-dialog v-model="keyerDialog" max-width="600px">
      <v-card>
        <v-card-title> Data Keyer Details</v-card-title>
        <v-card-text>
            The <a href="http://arnhempostalhistory.org/" target="__blank">Arnhem Postal History Project</a> is a postal history project mapping correspondance in Nazi-Occupied Netherlands. 
        </v-card-text>
      
        <v-card-text> I applied my knowledge of German Language and Nazi-Era Germany to understand and transliterate Dutch and German Postcards into an Excel-powered database. I implemented good data practices by employing concise and consistent keywording. </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" @click="keyerDialog = false">Close</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-card>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const epriDialog = ref(false);
const keyerDialog = ref(false);

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
  
  .detail-btn {
    margin-left: 10px;
    background-color: transparent;
    color: #ff7f00;
    padding: 8px;
    transition: color 0.3s ease;
  }

  .detail-btn:hover {
    color: #d5cece;

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
  
