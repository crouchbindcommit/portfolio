<template>
    <v-card class="mx-auto my-4" max-width="400">
        <v-img src="/portfolio/hydroponics/tank.png" height="200px"></v-img>
        <v-card-title class="headline"> {{ title }}</v-card-title>
        <v-card-subtitle>
            Hydroponics Tank built with Digital Logic
        </v-card-subtitle>
        <v-card-text>
            <v-chip v-for="item in tags" :key="item" class="ma-1" color="primary" outlined small>
                {{ item }}
            </v-chip>
        </v-card-text>

        <v-card-actions>
            <v-btn color="primary" @click="dialog = true">Learn More</v-btn>
            <v-btn color="secondary" :href="videoLink" target="_blank">Read <br> Writeup</v-btn>
        </v-card-actions>

        <!-- Popup for Details -->
        <v-dialog v-model="dialog" max-width="500px">
            <v-card>
                <v-card-title>
                    <span class="headline">{{ title }}</span>
                </v-card-title>
                <v-card-text>
                    <a href="https://youtube.com/shorts/cI3ZA0WCz2s" target="_blank">See Demo Here.</a>
                    <br /> 
                    <br /> 
                    <p>
                        I helped develop this automated hydroponic tank. I contributed the project idea and scope and
                        the research behind the creation of the project. I helped my team member structure the VHDL
                        code.
                    </p>
                    <br />

                    The project scope included a watertight tank, pump to circulate water, solenoid to release
                    nutrients, and VHDL program to drive the system. We employed logic level shifting, relay logic, and
                    timer logic to accomplish a day/night cycle, nutrient distribution, and water aeration.
                </v-card-text>

                <div id="pdf-container" style="position: relative; width: 100%; height: 1000px;">
                    <iframe id="pdf-frame" src="/portfolio/hydroponics/Hydroponics_Presentation.pdf" type="application/pdf" width="100%"
                        height="100%"></iframe>
                </div>
                <v-card-actions>
                    <v-btn color="primary" text @click="dialog = false">Close</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-card>
</template>

<script setup>
import { ref, onMounted, defineEmits } from "vue";

const videoLink = "/portfolio/hydroponics/hydroponics_report.pdf";

const dialog = ref(false);
const title = "Hydroponics";
const tags = [
    "VHDL",
    "System Design",
    "Hardware Design",
    "Project Development",
];

// Define emits
const emit = defineEmits(["emitTitle", "emitTags"]);

// Emit title and tags when the component mounts
onMounted(() => {
    emit("emitTitle", title);
    emit("emitTags", tags);

});
</script>
