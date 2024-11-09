<template>
    <v-card class="mx-auto my-4" max-width="400">
      <v-img src="/portfolio/email/code.png" height="200px"></v-img>
      <v-card-title class="headline"> {{title}}</v-card-title>
      <v-card-subtitle>
       Web "Scraper" and Automatic Email Sender to automate the fundraising research project for local womens' rugby team.
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
        <v-btn color="secondary" :href="videoLink" target="_blank">Download Sample <br>Email</v-btn>
      </v-card-actions>
  
      <!-- Popup for Details -->
      <v-dialog v-model="dialog" max-width="500px">
        <v-card>
          <v-card-title>
            <span class="headline">{{title}}</span>
          </v-card-title>
          <v-card-text>
            <p>
             I developed this python project to automate finding and contacting potential donors for my local senior side Womens' Rugby Team. It follows three steps:
            </p>
            <v-list dense>
                <v-list-item> Web Searching: I use google API to search for emails associated with businesses in an excel sheet and save the emails. The program saves each email as it is querried. This sacrifices a larger time complexity, but ensures that even if the query limit is prematurely reached, previous emails are still saved. </v-list-item>
                <v-list-item> Human Interaction: There is no program to call both Web Searching and the next step (Email Sending) so that a human can double check the web search. There are times the search is wrong: for instance, the search couldn't find an email for a local brewery but could find an article about the brewery on the local university's student newspaper, and logged the newspaper's editor's email. Fundraisers can't afford to email the wrong people!</v-list-item>
                <v-list-item> Sending the Email: There is no limit to email sending. There is structure for different cases, and has a set space for attachments. More detail will be below.</v-list-item>
            </v-list>
            
            <h4>Structure</h4>
            <v-img src="/portfolio/email/directory.png" max-width="100%" class="my-4"></v-img>
            <v-list dense>
              <v-list-item>
                <v-list-item-content>
                  <strong>:</strong>
                  <v-list dense>
                    <v-list-item>
                      <v-list-item-content>Attachments directory can contain any file type. For our purposes, there is a png image that celebrates the previous year sponsors and a pdf version of the sponsorship package. </v-list-item-content>
                    </v-list-item>
                    <v-list-item>
                      <v-list-item-content>Email Templates provides customization. My excel database includes a field to denote previous donors. The email template for new donors focuses on explaining who the team is and what kind of donation we want to have (the project was specifically looking for silent auction donations). The previous donor template focuses on thanking the business for having donated in years prior, explains what the money donated was used for, and reminds what kind of donation we are looking for this year.</v-list-item-content>
                    </v-list-item>

                    <v-list-item>
                      <v-list-item-content>The DATA.xlsx file can and should be renamed to fit the need of the email client. scrape.py will read the spreadsheet when called and query based on business names, then write to that document and save the email as well as the location the email was found (to streamline manual verification). Once the user is ready, sender.py sends either the new donor or previous donor email in markdown format, including the attachments, to the recipient. If a first and/or last name is known, the client sends to the direct name. Otherwise, it sends to the business name. settings.py is meant to allow non-computer users to have customization abilities. The HOST, PORT, SENDER email, device specific PASSWORD, email DISPLAY NAME, device specifc API KEY, and device specific CSE ID are saved in this file. This is bad security practice, especially if made public, but was intentionally done for ease of use. If this project were intended for users with computer science background, these variables would be stored as user shell variables. However, it is meant for the board of the senior side rugby team, and there is no guarantee that they will have shell experience. The SUBJECT LINE of the email and the EXCEL FILE to pull data from are also listed in the settings.py document so that the project can easily be manipulated should scope or purpose of emails change.</v-list-item-content>
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
  const videoLink = "/portfolio/email/email.pdf";

  const dialog = ref(false);
  const title = "Fast Fund Email Sender";
  const tags = [
    "Fundraising/Marketing",
    "Python (Pandas, SMTP)",
    "Google API",
    "Web Indexing",
    "Project Development",
  ];
  
  const emit = defineEmits(["emitTitle", "emitTags"]);
  // Emit title and tags when the component mounts
  onMounted(() => {
  emit("emitTitle", title);
  emit("emitTags", tags);
})
  </script>
  