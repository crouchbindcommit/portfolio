<template>
    <div class="timeline-banner">
        <h2>My Story</h2>
    </div>

    <div class="timeline-container">
        <!-- Vertical trunk line for the tree (behind everything else) -->
        <div class="timeline-trunk"></div>

        <!-- Iterate through events to render them -->
        <div v-for="(event, index) in timelineEvents" :key="index" class="timeline-item"
        data-aos="fade-up" data-aos-duration="1500" data-aos-offset="100">
            <!-- Arrow connecting the node to the event card -->
            <div :class="['timeline-arrow', index % 2 === 0 ? 'right' : 'left']">
                <div class="arrow-up"></div>
                <div class="arrow-down"></div>
            </div>

            <!-- Event Card (Branch) -->
            <div :class="['timeline-card', index % 2 === 0 ? 'right' : 'left']" :style="getCardStyles(index)">
                <div class="timeline-date">
                    <span>{{ event.date }}</span>
                </div>
                
                <!-- Optional Image Section -->
                <img v-if="event.image" :src="event.image" :alt="`Image for ${event.title}`" class="timeline-image" />

                <div class="timeline-description">
                    <h3>{{ event.title }}</h3>
                    <p>{{ event.description }}</p>
                </div>
            </div>
        </div>
    </div>
</template>


<script setup lang="ts">
import { onMounted } from 'vue';
import AOS from 'aos';
import 'aos/dist/aos.css';

const timelineEvents = [
    {
      date: "Fall 2008",
      title: "First year of Tradition: Engineering Halloween",
      description: "Introduced to very rudimentary concepts of engineering in a playful manner by building lifesize halloween yard decorations out of 8020 alumnum and clothing from consignment stores."  ,
      image: "/me/stuffy.jpg",
    },
    {
        date: "Fall 2020",
        title: "Started at UTK as a German Major",
        description: "Began academic journey at the University of Tennessee Knoxville as a German Language major.",
        image: "/me/germ-major.png"
    },
    {
        date: "Spring 2021",
        title: "Declared Computer Engineering",
        description: "Declared Computer Engineering as second major, taking a giant leap of faith towards a frighting challenge. First time daring to pursue the passion to develop and design.",
        image: "/me/solder.jpg"
    },
    {
        date: "Fall 2021 - September 2023",
        title: "Lunabotics Electrical Design Lead",
        description: "Led the Electrical Design team for UTK's Lunabotics team during maiden years, working on hardware design for a lunar rover.",
        image: "/me/tn-electrical-lead.jpg",

    },
    {
        date: "Fall 2022 - Current",
        title: "Peer Learning Assistant (Tutor) at the Vol Study Center",
        description: "Tutoring undergraduate students in computer engineering and German language courses, developing passion for helping others succeed academically.",

    },
    {
        date: "Spring 2022",
        title: "Earned the Deutsches Sprachdiplom der Kultusministerkonferenz II",
        description: "Achieved the German Language Diploma (DSD II), validating my proficiency in the language.",
        image: "/me/dsd.png"
    },
    {
        date: "Fall 2023 - Spring 2024",
        title: "Data Entry Keyer for the Arnhem Postal History Project at George Washington University",
        description: "Contributed to historical research by entering data for the postal history project. Temporarily learned a few words in Dutch."
    },
    {
        date: "Summer 2023 - Fall 2024",
        title: "Student Software Developer/Integrator at the Electric Power Research Institute",
        description: "Worked as a fullstack software developer, contributed directly to refactoring SQL database and modernizing frontend by abandoning aspx pages and implementing javascript framework. Beyond development practices, learned power quality mitigation techniques and basic understandings of semiconductor, utility, and CNC machining industries.",
        image: "/me/epri.jpg"
    },
      {
        date: "Spring 2022 - Spring 2023",
        title: "Vice President of University of Tennessee German Club",
        description: "Led cultural and social events for the German Club, fostered community of language enthusiasts on and off campus. Encouraged collegiate participation in monthly community German meets.",
        image: "/me/germ-vp.jpg"
    },
    {
        date: "Spring 2023 - Fall 2024",
        title: "Recruitment Chair for the University of Tennessee Women’s Rugby Club",
        description: "Oversaw recruitment and organized events to expand and strengthen the team. Currently, the big sister to two littles on the UTWRFC squad, as well as being a little myself on the Knoxville Minx squad.",
        image: "/me/running.jpg"
    },
    {
        date: "Summer 2023 - Fall 2024",
        title: "Student Participant of the WATTS Up Toastmasters Chapter at the Electric Power Research Institute",
        description: "Participated in Toastmasters to develop  public speaking and leadership skills. Presented a 7-minute personal speech and a 7-minute internship recap. Won Rookie of the Year 2023."
    },
    {
        date: "Fall 2024",
        title: "Invited to Deutsche Bank's First Early Career Hackathon in Cary, North Carolina",
        description: "Selected to participate in Deutsche Bank's inaugural hackathon, focusing on innovation in finance.",
        image: "/me/db.jpg"
    },
    {
        date: "Spring 2025",
        title: "Graduaton!", 
        description: "Graduating in May 2025 with a BS in Computer Engineering and a BA in German Language and Literature."
    }
];

// Initialize AOS on mounted
onMounted(() => {
    AOS.init();
});

// Function to generate dynamic Z-axis styles for cards
const getCardStyles = (index: number) => {
    // Push some cards closer and some further back for the Z-axis effect
    const zOffset = index % 2 === 0 ? 50 : -50;
    const xOffset = index % 2 === 0 ? "20%" : "-20%"; // Creating a "ladder" effect

    return {
        transform: `translate3d(${xOffset}, 0, ${zOffset}px)`, // Move along X and Z axis
    };
};
</script>

<style scoped lang="css">

/* Image styling within timeline cards */
.timeline-image {
    width: 100%; /* Makes image take up full width of the card */
    height: auto; /* Maintains aspect ratio */
    border-radius: 8px;
    margin-bottom: 1rem; /* Adds space between the image and the text */
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

/* Banner or Flag for the Timeline Section */
.timeline-banner {
  width: 100%;
  background-color: #42b983; /* Green background */
  color: white; /* White text */
  text-align: center;
  padding: 1rem 0; /* Padding for top and bottom */
  font-size: 2rem; /* Large text for emphasis */
  font-weight: bold;
  border-radius: 5px;
  margin-bottom: 2rem; /* Space between the banner and the timeline */
  text-transform: uppercase; /* Optional: makes text all caps */
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1); /* Optional: Adds some shadow for depth */
}

/* Responsive adjustments for smaller screens */
@media (max-width: 720px) {
  .timeline-banner {
    font-size: 1.5rem; /* Adjust font size for smaller screens */
    padding: 0.8rem 0; /* Reduce padding for smaller screens */
  }

  .timeline-container {
    padding: 0 1rem; /* Add padding to the container to prevent text from touching the sides */
  }

  .timeline-item {
    margin: 1.5rem 0;
    width: 100%;
  }

  .timeline-card {
    width: 100%; /* Ensure cards take full width on smaller screens */
    padding: 1.5rem; /* Reduced padding for smaller cards */
    margin: 0 auto; /* Center the card */
  }

  .timeline-date {
    font-size: 1rem; /* Adjust font size of dates for better mobile readability */
  }

  .timeline-content {
    font-size: 1rem; /* Adjust content text for smaller screen */
  }

  /* Reduce margin for mobile view */
  .timeline-item .timeline-content {
    margin-top: 1rem;
  }
}

/* Additional fixes for very small screens (less than 480px) */
@media (max-width: 480px) {
  .timeline-banner {
    font-size: 1.25rem; /* Further reduce font size for small phones */
    padding: 0.6rem 0; /* Further reduce padding */
  }

  .timeline-item {
    margin: 1rem 0;
    padding: 0.5rem 0;
  }

  .timeline-card {
    padding: 1rem; /* Smaller padding for mobile cards */
  }

  .timeline-date {
    font-size: 0.9rem; /* Further reduce font size of dates for tiny screens */
  }

  .timeline-content {
    font-size: 0.9rem; /* Ensure content fits well */
  }
}

/* To ensure no horizontal scrolling */
body {
  overflow-x: hidden;
  margin: 0; /* Reset margin for the body */
  padding: 0;
  box-sizing: border-box; /* Ensure padding and borders are accounted for */
}
</style>
