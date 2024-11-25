<template>
    <v-card class="mx-auto my-4" max-width="400">
        <iframe src="https://giphy.com/embed/VyPgFPD2QcQKI" width="480" height="362" style="" frameBorder="0"
            class="giphy-embed" allowFullScreen></iframe>
        <p><a href="https://giphy.com/gifs/fallout-VyPgFPD2QcQKI"></a></p>
        <v-card-title class="headline">In Development</v-card-title>
        <v-card-subtitle>
            See an Overview of my Current Projects
        </v-card-subtitle>

        <v-card-text>
            <v-chip v-for="item in tags" :key="item" class="ma-1" color="primary" outlined small>
                {{ item }}
            </v-chip>
        </v-card-text>

        <v-card-actions>
            <v-btn color="primary" @click="dialog = true">Learn More</v-btn>
            <v-btn color="secondary" :href="projectLink" target="_blank">Visit GITHUB</v-btn>
        </v-card-actions>

        <!-- Popup for Details -->
        <v-dialog v-model="dialog" max-width="500px">
            <v-card>
                <v-card-title>
                    <span class="headline">Foodify: The Free Food Finding App</span>
                </v-card-title>
                <v-card-text>
                    <p>
                        As a passionate engineer, I'm always developing something. I currently have three must-watch
                        projects on the way:
                    </p>
                    <v-list dense>
                        <v-list-item>
                            <v-list-item-content>
                                <strong>Wearable Allergy Alarm:</strong>
                                <v-list dense>
                                    <v-list-item>
                                        <v-list-item-content>Using the nRF52 Bluefruit to run a watch that senses
                                            environmental and food allergens. Will connect to a fullstack application.
                                        </v-list-item-content>
                                    </v-list-item>
                                    <v-list-item>
                                        <v-list-item-content>Features will include sensing temperature, humidity,
                                            barometric pressure, pulse, and heart rate. There will also be a camera
                                            module to scan barcodes. All data will be sent to a database and displayed
                                            on an LCD screen.</v-list-item-content>
                                    </v-list-item>
                                </v-list>
                            </v-list-item-content>
                        </v-list-item>
                        <v-list-item>
                            <v-list-item-content>
                                <strong>Credit Card Detection using Machine Learning</strong>
                                <v-list dense>
                                    <v-list-item>
                                        <v-list-item-content>Developing and testing algorithms based on the Random Forest Algorithm to predict whether a charge is fraudulent or not
                                        </v-list-item-content>
                                    </v-list-item>
                                    <v-list-item>
                                        <v-list-item-content>Currently have 99.8% accuracy, but next steps are to determine most valuable features and to minimize risk of overfitting.</v-list-item-content>
                                    </v-list-item>
                                </v-list>
                            </v-list-item-content>
                        </v-list-item>
                       <v-list-item>
                            <v-list-item-content>
                                <strong>Grace Apple Medicine Website:</strong>
                                <v-list dense>
                                    <v-list-item>
                                        <v-list-item-content>Current found under <a href="https://www.graceapple.com/" target="__blank">www.graceapple.com</a> but was created before learning web development principles.
                                        </v-list-item-content>
                                    </v-list-item>
                                    <v-list-item>
                                        <v-list-item-content>Update will use ReactJS for better user experience and efficiency.</v-list-item-content>
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

const dialog = ref(false);
const projectLink = "https://github.com/crouchbindcommit";
const title = "In Development";
const tags = [
    "Fullstack Development",
    "Embedded Systems",
    "Arm CORTEX M",
    "C",
    "Python",
    "Machine Learning",
    "Random Forest Model",
];

const emit = defineEmits(["emitTitle", "emitTags"]);
  // Emit title and tags when the component mounts
  onMounted(() => {
  emit("emitTitle", title);
  emit("emitTags", tags);
})
</script>
