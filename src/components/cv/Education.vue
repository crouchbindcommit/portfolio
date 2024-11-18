<template>
    <v-card class="mb-4 education-card">
      <v-card-title class="headline education-title">Education</v-card-title>
      <v-card-text>
        <ul>
          <li class="education-item">
            <v-row align="center" no-gutters>
              <v-col cols="12">
                <div class="degree">
                  <h3 class="degree-title">B.S.E, Computer Engineering</h3>
                  <p class="university-name">University of Tennessee, Knoxville</p>
                  <p class="graduation-date">Expected Graduation: May 2025</p>
                </div>
                <p class="coursework-title">Relevant Coursework:</p>
                <div class="coursework">
                    <span class="course-chip">Machine Learning | CS325 </span>
                  <span class="course-chip">Cybersecurity | CS366 </span>
                    <span class="course-chip">Software Engineering | CS340 </span>
                  <span class="course-chip">Systems Programming | CS360 </span>
                  <span class="course-chip">Embedded Systems | ECE455 </span>
                  <span class="course-chip">Digital Logic Design | ECE351 </span>
                      <span class="course-chip">Electronic Devices | ECE335 </span>
                </div>
                      <p class="extracurricular-title">Associated Clubs and Roles:</p>
      <ul class="extracurricular-list">
        <li><strong>Electrical Lead Emeritus</strong> – <em>Lunabotics, University of Tennessee</em></li>
      </ul>

              </v-col>
            </v-row>
          </li>
          <li class="education-item">
            <v-row align="center" no-gutters>
              <v-col cols="12">
                <div class="degree">
                  <h3 class="degree-title">B.S.A, Modern Foreign Language and Literatures (German)</h3>
                  <p class="university-name">University of Tennessee, Knoxville</p>
                  <p class="graduation-date">Expected Graduation: May 2025</p>
                </div>
                <p class="coursework-title">Relevant Coursework:</p>
                <div class="coursework">
                  <span class="course-chip">Advanced German Language | GERM412 </span>
                  <span class="course-chip">Multilingualism in German Speaking Cultures | GERM360 </span>
                  <span class="course-chip">Cinematic Cities: Berlin | GERM425 </span>
                   <span class="course-chip">Afterlife of the Holocaust | GERM350 </span>
                </div>
                   <p class="extracurricular-title">Associated Clubs and Roles:</p>
      <ul class="extracurricular-list">
        <li><strong>Vice President Emeritus</strong> – <em>German Club, University of Tennessee</em></li>
      </ul>
              </v-col>
            </v-row>
          </li>
        </ul>
      </v-card-text>
    </v-card>
  </template>
  
  <script lang="ts" setup>
  </script>
  
  <style scoped>
  .education-card {
    background-color: #2e13c540;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    padding: 20px;
    border-left: 4px solid #ff7f00; /* Subtle left border to match UTK color */
  }
  
  .education-title {
    font-size: 1.6em;
    font-weight: 600;
    color: #d5cece;
  }
  
  .education-item {
    margin-bottom: 20px;
    border-bottom: 1px solid #eee;
    padding-bottom: 10px;
  }
  
  .degree-title {
    font-size: 1.2em;
    font-weight: bold;
    color: #d5cece;
  }
  
  .university-name {
    font-size: 1.1em;
    color: #ff7f00; /* UTK orange */
    font-weight: 500;
  }
  
  .graduation-date {
    font-size: 1em;
    color: #d5cece;
    font-weight: 400;
  }
  
  .coursework-title {
    font-size: 1em;
    color: #d5cece;
    margin: 10px 0 5px;
  }
  
  .coursework {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
  }
  
  .course-chip {
    background-color: #f0f0f0;
    color: #333;
    padding: 5px 12px;
    border-radius: 16px;
    font-size: 0.9em;
    font-weight: 500;
    transition: background-color 0.3s;
  }
  
  .course-chip:hover {
    background-color: #ff7f00; /* Hover effect in UTK orange */
    color: white;
  }
      .extracurricular-title {
    font-size: 1.2em;
    color: #d5cece;
    margin: 15px 0 5px; /* Spacing before list items */
  }

  .extracurricular-list {
    list-style-type: none;
    padding: 0;
    margin: 0;
  }

  .extracurricular-list li {
    font-size: 1em;
    color: #333;
    margin-bottom: 5px;
  }
  </style>
  
