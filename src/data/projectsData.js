// src/data/projectsData.js

//images
import pipBoyImage from '../assets/portfolio/pipboy/cover.png';
import fraudImage from '../assets/portfolio/credit-fraud/cover.png';
import foodifyImage from '../assets/portfolio/foodify/cover.png';
import voiceRecognitionImage from '../assets/portfolio/voice/cover.png';
import hydroponicsImage from '../assets/portfolio/hydroponics/cover.png';
import filmWebsiteImage from '../assets/portfolio/claiming-kreuzberg/cover.png';
import maliciousCanvasImage from '../assets/portfolio/canvas-doupe/cover.png';
import rugbyGameImage from '../assets/portfolio/ra-ra-rugby/cover.png';
import emailImage from '../assets/portfolio/email-sender/cover.png';
import creditImage from '../assets/portfolio/credit-check/cover.png';
import allergyImage from '../assets/portfolio/allergy-alarm/cover.png';
import portfolioImage from '../assets/portfolio/portfolio/cover.png';



//documents 
import creditFraudPoster from '../assets/portfolio/credit-fraud/poster.pdf';
import pipBoyPresentation from '../assets/portfolio/pipboy/presentation.pptx';
import foodifyDemo from '../assets/portfolio/foodify/demo.gif';
import hydroponicsReport from '../assets/portfolio/hydroponics/report.pdf';
import hydroponicsPresentation from '../assets/portfolio/hydroponics/presentation.pdf';
import rugbyGameDemo from '../assets/portfolio/ra-ra-rugby/demo.gif';
import rugbyGameSrc from '../assets/portfolio/ra-ra-rugby/godot.zip';
import alarmPresentation from '../assets/portfolio/allergy-alarm/design-presentation.pptx';
import alarmReport from '../assets/portfolio/allergy-alarm/design-report.pdf';
import alarmDemo from '../assets/portfolio/allergy-alarm/demo.mp4';



const projectsData = [
  {
    title: 'PIPBoy MARK I',
    shortDescription: 'A wearable information hub inspired by the Fallout universe. Provides real-time data, tunes, weather updates, and more.',
    longDescription: `
      <h2>Project Overview</h2>
      <p>The <strong>PIPBoy MARK I</strong> is a wearable device designed to be the ultimate companion in the post-apocalyptic world, inspired by the iconic PIPBoy from the *Fallout* video game series. In a world ravaged by nuclear disaster, this device serves as a <em>survival companion</em> by offering essential functions such as real-time weather, location tracking, health monitoring, and more—all in a compact and user-friendly interface.</p>
      <p>The device is built on a fully embedded system, offering a unique alternative to larger, less space-efficient systems commonly used in similar projects. Unlike many modern PIPBoy replicas, which often rely on Python or operating systems, the MARK I operates seamlessly on a microcontroller-based system without an operating system, ensuring greater space efficiency and faster performance.</p>
      <h3>Key Features:</h3>
      <ul>
        <li><strong>Real-Time Weather:</strong> Fetches real-time weather data to ensure the wearer is prepared for the elements.</li>
        <li><strong>Health Metrics:</strong> Monitors vital statistics and provides health updates.</li>
        <li><strong>Audio and Sound:</strong> Plays ambient audio, music, and more to enhance the survival experience.</li>
        <li><strong>Location Tracking:</strong> GPS integration for navigation and map functionalities.</li>
      </ul>
      <h3>Technologies Used:</h3>
      <ul>
        <li>Microcontroller-based system (no OS)</li>
        <li>Finite State Machine for mode transitions</li>
        <li>I2C for LCD and RTC communication</li>
        <li>8-bit DAC for audio output</li>
        <li>API for weather fetching</li>
      </ul>
      <p>The MARK I is designed to be lightweight, portable, and highly functional, offering a truly unique experience for both casual users and die-hard fans of the Fallout series.</p>
    `,
    image: pipBoyImage,
    skills: ['C', 'Microcontroller', 'Embedded Systems', 'API Integration', 'Arm Cortex M4', 'Finite State Machine', 'Digital Logic Design'],
    github: 'https://github.com/crouchbindcommit/pipBoy',
    liveDemo: 'https://www.youtube.com/watch?v=DNfblcrEts0',
    documents: [
      {
        name: 'Project Presentation',
        url: pipBoyPresentation,
      },
    ],
  },

  {
    title: 'Credit Fraud Detection',
    shortDescription: 'Machine Learning Model to Predict Credit Fraud.',
    longDescription: `
      <h2>Project Overview</h2>
      <p>The <strong>Credit Fraud Catcher</strong> project focuses on detecting fraudulent transactions in the financial sector. As digital transactions become more common, credit fraud remains a significant issue for consumers and financial institutions alike. This project implements a machine learning solution that can predict and flag fraudulent credit card transactions in real time, helping mitigate the risks associated with fraudulent activity.</p>
      <p>We used a <strong>Random Forest Classifier</strong> as the core of our solution, which is one of the most effective and widely used machine learning techniques. The system analyzes transaction data to identify patterns of fraudulent activities, allowing financial entities to intervene in time and prevent losses.</p>
      <h3>Key Features:</h3>
      <ul>
        <li><strong>High Accuracy:</strong> The Random Forest Classifier achieved an impressive <strong>98% accuracy</strong> in detecting fraudulent transactions.</li>
        <li><strong>Real-Time Detection:</strong> The system is capable of analyzing transactions in real time, ensuring that fraud is detected quickly.</li>
        <li><strong>Model Optimization:</strong> We used <strong>K-Fold Cross Validation</strong> and <strong>AdaBoost</strong> to optimize the model, improving its classification strength.</li>
        <li><strong>Feature Engineering:</strong> Key features like <strong>transaction amount</strong>, <strong>time of transaction</strong>, and <strong>user history</strong> were used to enhance the model's fraud detection capabilities.</li>
      </ul>
      <h3>Technologies Used:</h3>
      <ul>
        <li><strong>Machine Learning:</strong> We used the <strong>Random Forest Classifier</strong> for fraud detection and <strong>AdaBoost</strong> for boosting model performance.</li>
        <li><strong>Data Preprocessing:</strong> Data cleaning, feature scaling, and handling imbalanced datasets were performed using standard techniques.</li>
        <li><strong>Cross-Validation:</strong> We implemented <strong>K-Fold Cross Validation</strong> to optimize the model and prevent overfitting.</li>
        <li><strong>Evaluation Metrics:</strong> The model was evaluated using <strong>accuracy</strong>, <strong>precision</strong>, <strong>recall</strong>, and <strong>F1-score</strong>.</li>
      </ul>
      <p>The Credit Fraud Catcher system can be applied to real-time transaction monitoring, providing a scalable and accurate fraud detection system for the financial industry. By integrating this system, financial institutions can greatly reduce the risk of fraud, safeguarding both businesses and consumers.</p>
    `,
    image: fraudImage,
    skills: ['Machine Learning', 'Random Forest Algorithm', 'K Fold Cross', 'Ada Boost Algorithm', 'Python', 'Data Analysis', 'Research Presentation'],
    github: 'https://github.com/crouchbindcommit/credit-frauder',
    liveDemo: '',
    documents: [
      {
        name: 'Project Poster',
        url: creditFraudPoster,
      },
    ],
  },

  {
    title: 'Free Foodify',
    shortDescription: 'Website for UTK Students to find and share free food around Knoxville.',
    longDescription: `
      <h2>Project Overview</h2>
      <p><strong>Foodify: Free Food Finder</strong> is a full-stack web application designed to help users easily find and report free food events in their area. Hosted at <a href="https://freefoodify.netlify.app" target="_blank">freefoodify.netlify.app</a>, the platform allows users to contribute information about food-related events and access resources like charity kitchens offering free meals. With a user-friendly interface and robust security features, Foodify is a valuable tool for anyone looking to save money and access free food resources.</p>
      <p>Foodify enables users to view, report, and interact with free food events through a seamless map integration with Google Maps. The application also includes a comment and voting system where users can share feedback and rate events based on their experiences.</p>
      <h3>Key Features:</h3>
      <ul>
        <li><strong>Free Food Events Reporting:</strong> Users can report and view free food events in their area. These events can be displayed on an interactive map, and users can open event locations directly in <strong>Google Maps</strong> for easy navigation.</li>
        <li><strong>Comment and Voting System:</strong> Each event allows users to leave comments, rate events, and interact with other users' feedback. Comments can include a timestamp, content, and optionally, a username.</li>
        <li><strong>Resources Tab:</strong> Tracks recurring free food sources, such as <strong>charity kitchens</strong> that provide regular meals for those in need.</li>
        <li><strong>Account Management:</strong> Users can create and manage their accounts, ensuring a personalized experience with secure access to their data.</li>
      </ul>
      <h3>Cybersecurity Practices:</h3>
      <ul>
        <li><strong>Password Storage:</strong> Passwords are securely stored using <strong>Bcrypt</strong> and <strong>Salting</strong> for hashing to ensure user credentials remain safe.</li>
        <li><strong>Account Management:</strong> Settings for account management are password-protected, ensuring that users' personal information remains secure.</li>
        <li><strong>Secure API and Database:</strong> All sensitive data and API endpoints are protected with hidden and secured keys to prevent unauthorized access.</li>
      </ul>
      <h3>Comment and Voting System:</h3>
      <ul>
        <li><strong>Event Reporting:</strong> Users can report free food events, which are then available for other users to view, comment, and interact with. All users can see and comment on these events.</li>
        <li><strong>Timestamped Comments:</strong> Each comment includes a timestamp and can include the user’s username (if provided).</li>
        <li><strong>Anti-Abuse Measures:</strong> To prevent abuse, all comments and votes are tied to a unique <strong>user ID</strong>, ensuring accountability.</li>
        <li><strong>Voting Restrictions:</strong> Users can "Like" or "Dislike" a comment, but once a vote is cast, changes are restricted to prevent manipulation of feedback.</li>
      </ul>
      <h3>Technologies Used:</h3>
      <ul>
        <li><strong>Frontend:</strong> Built with <strong>React</strong> and hosted on <a href="https://freefoodify.netlify.app" target="_blank">Netlify</a>.</li>
        <li><strong>Backend:</strong> Powered by <strong>Node.js</strong> with <strong>Express</strong> for building RESTful APIs and handling requests.</li>
        <li><strong>Database:</strong> Data is securely stored in a <strong>NoSQL database</strong>, with encrypted and protected data endpoints.</li>
        <li><strong>Authentication:</strong> User authentication is managed with secure password storage practices, including Bcrypt and Salting.</li>
      </ul>
      <p>Foodify provides an essential service to individuals and communities looking to access free food resources while ensuring a secure and safe platform for interaction and feedback. The app is designed to be easy to use, allowing users to access and contribute valuable information about free food sources.</p>
    `,
    image: foodifyImage,
    skills: ['VueJS', 'NodeJS', 'FullStack Development', 'MongoDB', 'API Development', 'Database Development', 'ARCGis API'],
    github: 'https://github.com/crouchbindcommit/free-foody',
    liveDemo: foodifyDemo,
    documents: [
      {
        name: '',
        url: '',
      },
    ],
  },


  {
    title: 'Voice Recognize',
    shortDescription: 'A 44.79% Accurate Voice Recognition model in MATLab.',
    longDescription: `
    <h2>Project Overview</h2>
<p><strong>Speech Recognition Project</strong> aims to analyze the pitch contours and cepstrum features of speech recordings to identify unique characteristics in a speaker's voice. This project involves recording multiple speech samples, analyzing their pitch contours, and evaluating the ability to distinguish between different speakers using machine learning techniques.</p>

<p>The project investigates how the pitch contour of a voice can be used to identify speakers, especially in an environment with multiple similar recordings. The challenge lies in the nuances of human speech, such as rhythm, cadence, syllable stress, and intonation, which can make it difficult for a system to differentiate between speakers, especially when the recordings have similarities.</p>

<h3>Key Features:</h3>
<ul>
<li><strong>Pitch Contour Analysis:</strong> The project analyzed the pitch contours of voice recordings to identify similarities and differences between speakers. It was expected that native English speakers would show similar pitch contours in their speech.</li>
<li><strong>Euclidean Distance Metric:</strong> Used to measure the similarity between the pitch contours of different speakers, which helped in determining the accuracy of speaker differentiation.</li>
<li><strong>Cepstrum Analysis:</strong> Investigated how cepstral analysis, which focuses on the spectral features of voice, could be used alongside pitch contour analysis to improve recognition accuracy.</li>
<li><strong>Speaker Comparison:</strong> The system compared the pitch contour of various speakers, including a baseline comparison to assess how similar or different the voices were.</li>
</ul>

<h3>Technologies Used:</h3>
<ul>
<li><strong>Machine Learning:</strong> Used Euclidean distance and other algorithms to compare pitch contours and differentiate between speakers.</li>
<li><strong>Speech Analysis:</strong> Pitch and cepstrum analysis were used to process the voice recordings and extract relevant features for recognition.</li>
<li><strong>Data Analysis:</strong> A variety of speech features were considered, including cadence, rhythm, and syllable stress, to understand how they impact speaker differentiation.</li>
</ul>

<h3>Cybersecurity Practices:</h3>
<ul>
<li><strong>Data Integrity:</strong> Efforts were made to ensure the quality and consistency of the recorded voice samples by minimizing variables and ensuring uniformity across recordings.</li>
<li><strong>Model Validation:</strong> The accuracy of the machine learning model was evaluated, and improvements were suggested, such as including additional checks to differentiate between male and female voices.</li>
</ul>

<h3>Challenges and Insights:</h3>
<ul>
<li><strong>Pitch Contour Similarities:</strong> The system had difficulty differentiating between speakers with similar pitch contours, such as in the case of male speakers who exhibit similar cadence and rhythm patterns.</li>
<li><strong>Emotional and Environmental Factors:</strong> Pitch can be influenced by emotional states or environmental noise, making speaker identification harder. Cepstrum analysis was proposed to handle these physical voice characteristics.</li>
<li><strong>Improving Accuracy:</strong> While initial accuracy was low (44%), future work could focus on incorporating additional checks for gender differentiation or other unique speech features to improve performance.</li>
</ul>

<h3>Conclusion and Future Work:</h3>
<p>The <strong>Speech Recognition Project</strong> highlighted the complexities of speaker identification through pitch and cepstrum analysis. By combining both methods, we could improve recognition by focusing on the emotional patterns of speech (pitch) while also considering the physical aspects (cepstrum). Although challenges remain, particularly in distinguishing between speakers with similar characteristics, this project demonstrates the potential for further advancements in speech recognition systems.</p>

<p>In future iterations, more robust models incorporating multiple features could be developed to further improve the accuracy and robustness of speaker recognition systems, particularly in varied environments.</p>

    `,
    image: voiceRecognitionImage,
    skills: ['MATLAB', 'Machine Learning', 'Signals and Systems', 'Voice', 'Pitch',],
    github: 'https://github.com/crouchbindcommit/voiceRecognition',
    liveDemo: '',
    documents: [
      {
        name: '',
        url: '',
      },
    ],
  },


  {
    title: 'Malicious Canvas Doupe',
    shortDescription: 'A benign attack website to practice security principles.',
    longDescription: `
    <h2>Project Overview</h2>
<p><strong>Malicious Canvas Doupe</strong> is a demonstration of a malicious website designed to showcase a potential security vulnerability, specifically focusing on **SQL Injection** attacks. In this project, I worked with three other students to build a malicious site capable of stealing user login details and executing automatic downloads of harmful files. The website was designed to simulate a **Trojan virus attack**, using a benign text document as a placeholder for the malicious payload.</p>

<p>While the project was intended for educational purposes, it highlights the risks associated with improperly secured websites and demonstrates how a **SQL Injection** vulnerability can be exploited to steal sensitive user information, including login credentials. The **automatic download** feature was set up to simulate how an attacker could use this vulnerability to inject and execute harmful software, such as a **Trojan virus**.</p>

<h3>Key Features:</h3>
<ul>
<li><strong>Ability to Steal Login Information:</strong> The site utilizes a **SQL Injection** vulnerability to access user login details from the backend database. This feature highlights the risks of improperly secured user authentication systems.</li>
<li><strong>Automatic Download:</strong> The website automatically triggers a download of a file, simulating the behavior of a **Trojan virus** that could be used to infect a user's device. In this case, a benign text document is used as a placeholder.</li>
<li><strong>SHA-256 Hash Display:</strong> The "virus" displays a SHA-256 hash, providing a sense of transparency and comfort for the user, while also demonstrating how attackers can use cryptographic hashes in malicious activities.</li>
<li><strong>Educational Purpose:</strong> This project is a proof of concept, intended to demonstrate the importance of securing user input and preventing SQL injection vulnerabilities in web applications.</li>
</ul>

<h3>Technologies Used:</h3>
<ul>
<li><strong>SQL Injection:</strong> The primary attack vector, where untrusted input was used to manipulate SQL queries and gain unauthorized access to sensitive data.</li>
<li><strong>Web Development:</strong> The website was developed using **HTML**, **CSS**, and **JavaScript**, with a backend vulnerability that allowed for the exploitation of user data.</li>
<li><strong>SHA-256 Hashing:</strong> The use of **SHA-256 hashes** to simulate how malicious software might use cryptographic techniques to mask or disguise its true purpose.</li>
<li><strong>Trojan Simulation:</strong> The automatic download functionality demonstrated how attackers can exploit a web vulnerability to trigger harmful downloads.</li>
</ul>

<h3>Cybersecurity Focus:</h3>
<ul>
<li><strong>SQL Injection Vulnerability:</strong> The main focus of the project was to demonstrate the power of SQL injection attacks. By manipulating backend SQL queries, we were able to access and extract sensitive user data such as login credentials.</li>
<li><strong>Automatic Download Behavior:</strong> The project demonstrated how attackers can automatically trigger malicious downloads, showing how a legitimate user’s actions could be hijacked.</li>
<li><strong>Ethical Considerations:</strong> This project was built with educational purposes in mind. We emphasize the importance of understanding vulnerabilities in web applications to better defend against cyber attacks.</li>
</ul>

<h3>Conclusion:</h3>
<p>The <strong>Malicious Canvas Doupe</strong> project serves as a powerful example of the dangers posed by unprotected SQL databases and the potential consequences of **SQL injection** vulnerabilities. Through this demonstration, we illustrated how attackers can exploit such vulnerabilities to steal sensitive information and deploy harmful software on a user's system.</p>

<p>While the project was not intended to cause harm, it serves as a reminder of the importance of securing web applications against common vulnerabilities. Developers must ensure proper validation and sanitization of user inputs to avoid exploitation through SQL injection and similar attack techniques.</p>


    `,
    image: maliciousCanvasImage,
    skills: ['Cybersecurity', 'SQL Injection', 'APACHE WebServer', 'Trojan', 'SHA-256'],
    github: 'https://github.com/ToeJammm/phishing',
    liveDemo: 'https://www.youtube.com/watch?v=cyj4AtBYGww0',
    documents: [
      {
        name: '',
        url: '',
      },
    ],
  },



  {
    title: 'Hydro ponics',
    shortDescription: 'Automated Hydroponics Tank built with Digital Logic.',
    longDescription: `
    <h2>Project Overview</h2>
<p>The <strong>Automated Hydroponic Tank</strong> is a fully integrated hydroponic system designed to automate key processes such as nutrient solution distribution, water aeration, and lighting control. The project was developed by a team of four students, with each member contributing unique expertise. I contributed the project idea, scope, and the research behind the development, helping to structure the VHDL code along with my team members.</p>

<p>The goal of the project was to create a modular, indoor hydroponic system capable of sustaining plants without soil by circulating water with nutrients and providing artificial lighting. The system is designed to be reliable and easy to use, offering full automation for the care of plants.</p>

<h3>Key Features:</h3>
<ul>
<li><strong>Water-Tight Tank:</strong> A custom-built acrylic tank that holds the water and houses the plant, ensuring the system is watertight to protect electronics from water damage.</li>
<li><strong>Water Pump:</strong> A pump circulates water within the system, ensuring that the water is properly aerated and that the nutrients are distributed evenly.</li>
<li><strong>Solenoid Nutrient Release:</strong> A solenoid valve controls the release of nutrients into the water, ensuring that the plants receive the proper nourishment for growth.</li>
<li><strong>Day/Night Cycle:</strong> The system features a day/night cycle for lighting control, simulating natural conditions to enhance plant growth.</li>
<li><strong>Water Aeration:</strong> Ensures that the water remains clean, free of algae, and oxygenated for healthy plant roots.</li>
</ul>

<h3>Technologies Used:</h3>
<ul>
<li><strong>VHDL Programming:</strong> The system's behavior is controlled by a VHDL program running on the <strong>Basys 3 Board</strong>, with timing logic that drives the system’s operations such as nutrient distribution and water aeration.</li>
<li><strong>Logic Level Shifting:</strong> The project used MOSFETs (BSS138) to shift logic levels from the 3.3V output of the Basys board to the 5V required by the relays controlling the pump and solenoid.</li>
<li><strong>Relay Logic:</strong> The pump, lights, and solenoid were controlled through relays, which were driven by the VHDL program.</li>
<li><strong>Power Supply:</strong> The system is powered by a 120VAC to 12VDC laptop charger, with additional voltage regulation using a buck converter to step down to 5V for the Basys 3 board and other components.</li>
<li><strong>Timer Logic:</strong> The timer was implemented by counting clock cycles on the 100 MHz internal clock of the Basys 3, allowing the system to track time for operations such as lighting cycles and nutrient dispensing.</li>
</ul>

<h3>System Operation:</h3>
<ul>
<li><strong>Day/Night Cycle:</strong> The VHDL program uses a timer to simulate a day/night cycle, turning the grow lights on and off at appropriate times to mimic natural light conditions.</li>
<li><strong>Nutrient Distribution:</strong> The solenoid valve is triggered based on the timing logic to release nutrients into the water at specific intervals, ensuring the plant receives the necessary nutrients for optimal growth.</li>
<li><strong>Water Aeration:</strong> The pump continuously circulates water to keep it oxygenated and prevent stagnation, ensuring a healthy growing environment for the plant.</li>
</ul>

<h3>Challenges and Solutions:</h3>
<ul>
<li><strong>Logic Level Shifting:</strong> The Basys 3 board operates at 3.3V, but the relays used to control the pump and solenoid require 5V logic. This challenge was resolved by using BSS138 MOSFETs for logic level shifting.</li>
<li><strong>Power Supply Management:</strong> Different components required different voltages. A 12VDC laptop charger was used to power the system, with a buck converter stepping down the voltage to 5V for the Basys 3 and other components.</li>
<li><strong>Timer Implementation:</strong> The Basys 3 board does not have a built-in timer module, so we created a custom timer using clock cycles to track time for the day/night cycle and other timed operations.</li>
</ul>

<h3>Conclusion:</h3>
<p>The <strong>Automated Hydroponic Tank</strong> project successfully demonstrates the application of embedded systems and VHDL programming for controlling an indoor hydroponic environment. By automating critical operations such as nutrient delivery, water aeration, and lighting control, this system provides a reliable and efficient solution for plant growth without the need for soil.</p>

<p>While we encountered some challenges with logic level shifting and power management, the system was ultimately successful in creating a fully functional hydroponic tank that can be used for growing plants in a controlled, automated environment. This project highlights the intersection of hardware design, software programming, and environmental control in a practical, real-world application.</p>


    `,
    image: hydroponicsImage,
    skills: ['VHDL', 'System Design', 'Hardware Design', 'Field Programmable Gate Array (FPGA)', 'Project Development'],
    github: '',
    liveDemo: 'https://www.youtube.com/watch?v=cyj4AtBYGww0',
    documents: [
      {
        name: 'Project Report',
        url: hydroponicsReport,
      },
      {
        name: 'Project Presentation',
        url: hydroponicsPresentation
      },
    ],
  },

  {
    title: 'Film Website',
    shortDescription: 'HTML Website to display visual culture and filmspace.',
    longDescription: `
    <h2>Project Overview</h2>
<p><strong>German Film Project Website</strong> is a visual representation designed to explore the relationship between color, film, and the cultural significance of Berlin's **SO36** district, as portrayed in cinema. Instead of opting for a traditional essay format, I chose web development to offer greater accessibility to my work while also setting the visual tone for my analysis. The website serves as a resource for those seeking to understand the cultural and cinematic importance of SO36, with a particular focus on the 1984 film <em>Decoder</em>.</p>

<p>The project integrates **pictures**, **analysis**, and **key definitions**, providing users with an engaging and educational experience. Through web development, I was able to enhance the accessibility and interactivity of my work, offering a unique approach to presenting the material. The color scheme, styling, and layout were carefully chosen to reflect the visual aesthetics and atmosphere of the film <em>Decoder</em>, which is a critical part of understanding the social context of Berlin's SO36 neighborhood.</p>

<h3>Key Features:</h3>
<ul>
<li><strong>Pictures, Analysis, and Key Definitions:</strong> The website provides a visual and textual breakdown of SO36 as seen in the film <em>Decoder</em> (1984), highlighting key scenes, themes, and the historical context of the neighborhood.</li>
<li><strong>HTML and CSS Styling:</strong> The site’s design uses HTML and CSS to guide the visual tone, matching the aesthetic of the <em>Decoder</em> film. The color scheme, layout, and typography reflect the gritty, urban vibe of Berlin during the 1980s.</li>
<li><strong>Film Representation:</strong> The website serves as a platform for analyzing how color, framing, and other film techniques were used to portray the cultural and political environment of the SO36 district in the <em>Decoder</em> film.</li>
<li><strong>Accessibility and Interactivity:</strong> The website was built with accessibility in mind, providing easy navigation for users to explore the visual and textual components of the project, from images and film stills to analysis and key definitions.</li>
</ul>

<h3>Technologies Used:</h3>
<ul>
<li><strong>HTML5:</strong> Used for structuring the website’s content, ensuring that all elements are properly formatted and easily navigable for users.</li>
<li><strong>CSS3:</strong> Custom CSS was used to style the website, focusing on creating a visual tone that complements the film’s aesthetic and atmosphere.</li>
<li><strong>Responsive Design:</strong> The website was built to be fully responsive, ensuring it looks great on any device, from desktops to smartphones.</li>
<li><strong>Film Aesthetics:</strong> The styling choices (color palette, layout, and typography) were specifically selected to match the visual tone of the 1984 film <em>Decoder</em>, with particular attention to the gritty and experimental visual style used in the film.</li>
</ul>

<h3>Conclusion:</h3>
<p>The <strong>German Film Project Website</strong> serves as an innovative way to present the cultural and cinematic significance of Berlin's SO36 district through the lens of the film <em>Decoder</em> (1984). By utilizing web development, I was able to create an engaging and interactive platform that combines analysis with visual elements, offering a unique perspective on film, color, and culture.</p>

<p>Rather than simply writing an essay, the website allows for a more immersive exploration of the subject, with the HTML and CSS design guiding the viewer’s experience. This project underscores the power of web development in enhancing accessibility and providing a creative outlet for academic work.</p>
    `,
    image: filmWebsiteImage,
    skills: ['HTML', 'CSS', 'German Language / Literature', 'Web Development'],
    github: '',
    liveDemo: 'https://crouchbindcommit.github.io/So36Berlin/index.html',
    documents: [
      {
        name: '',
        url: '',
      },
    ],
  },


  {
    title: 'Ra-Ra-Rugby',
    shortDescription: 'GODOT Game developed to play Womens 7s Rugby.',
    longDescription: `
  <h2>Project Overview</h2>
<p><strong>Women's Rugby 7s Mini-Game</strong> is a simple yet significant addition to the world of sports video games. Rugby games are already scarce, and even fewer focus on Rugby 7s or include women's teams. This project addresses both gaps by offering a playable women’s 7s match, making a statement on representation while keeping gameplay intuitive and fun.</p>

<p>This mini-game was developed as a <strong>sub-game</strong> for a larger jackbox-style classroom game called <em>School Subject Smackdown</em>. Our development team consisted of eight students, and the Rugby sub-team was a focused pair. Despite its scope, the game delivered a complete and engaging sports experience within a broader educational entertainment platform.</p>

<h3>Key Features:</h3>
<ul>
  <li><strong>Run/Chase Mechanic:</strong> Players can run and be pursued by defenders using velocity and acceleration logic, creating dynamic movement across the field.</li>
  <li><strong>Collision Mechanics:</strong> Real-time collision detection and resolution based on 3D vector math enable realistic tackling and ball possession changes.</li>
  <li><strong>Start/Restart Screen:</strong> Players are introduced to the game via a title screen and can reset matches to play multiple rounds with ease.</li>
  <li><strong>Timed Play:</strong> A countdown timer sets the pace—players must score before the clock runs out, adding urgency and challenge to the match.</li>
</ul>

<h3>Technologies Used:</h3>
<ul>
  <li><strong>Godot Engine:</strong> All game development was done in the Godot Engine, using its node-based architecture and built-in scripting for 3D gameplay.</li>
  <li><strong>3D Mathematics:</strong> Vector operations, raycasting, and spatial transforms were used to build custom physics and movement systems without relying on prebuilt behaviors.</li>
  <li><strong>GDScript:</strong> Core logic for player movement, collision handling, scoring, and UI transitions was written in Godot’s Python-like scripting language.</li>
  <li><strong>Lightweight Design:</strong> While the game was part of a larger suite, it was designed to be modular and playable on its own, with a clear interface and focused gameplay loop.</li>
</ul>

<h3>Conclusion:</h3>
<p>The <strong>Women's Rugby 7s Mini-Game</strong> proves that even small, focused games can make a meaningful impact. By centering a women’s team in a rarely represented sport, and building the mechanics from scratch using 3D math in Godot, this project highlights both technical skill and creative intention.</p>

<p>The result is a game that’s easy to pick up but technically grounded, combining classroom engagement with real-time gameplay that reflects our dedication to inclusive game design and hands-on problem solving in 3D development environments.</p>
 
  `,
    image: rugbyGameImage,
    skills: ['GODOT', 'Game Development', '3D Mathematics', 'Agile Method'],
    github: 'https://github.com/utk-cs340-fall23/SchoolSubjectSmackdown',
    liveDemo: rugbyGameDemo,
    documents: [
      {
        name: 'Rugby Game ZIP',
        url: rugbyGameSrc,
      },
    ],
  },

  {
    title: 'Email Sender',
    shortDescription: 'Fundraising Tool for Local Womens Rugby Team',
    longDescription: `
  <h2>Project Overview</h2>
<p><strong>Automated Donor Outreach Tool for Women’s Rugby</strong> is a Python-based utility designed to assist my local senior side women’s rugby team in streamlining the process of identifying and contacting potential donors. The tool automates web searching for emails, allows for human verification, and supports templated email sending with attachments. Its design prioritizes both functionality and accessibility for non-technical users on the team’s board.</p>

<p>The project was created with practical fundraising in mind, specifically targeting silent auction donations. It accommodates differences between new and returning sponsors and ensures manual oversight in cases where web automation may yield inaccurate results.</p>

<h3>Key Features:</h3>
<ul>
  <li><strong>Web Searching with Google API:</strong> The tool queries the web using business names listed in an Excel spreadsheet. Each found email is saved immediately upon discovery, mitigating data loss if the API limit is reached mid-process. This approach prioritizes data retention over runtime efficiency.</li>
  
  <li><strong>Manual Verification Workflow:</strong> The system intentionally separates the web search and email sending stages to allow for human verification. This prevents misdirected outreach — for example, when a search finds a journalist’s email instead of the intended business contact.</li>
  
  <li><strong>Email Sending Logic:</strong> Emails are sent in markdown format with support for file attachments. The system distinguishes between new and returning donors, sending personalized messages with appropriate content and tone for each case.</li>
</ul>

<h3>Project Structure:</h3>
<ul>
  <li><strong>Attachments Directory:</strong> Supports any file type. For this campaign, it included a PNG image showcasing last year’s sponsors and a PDF version of the current sponsorship package.</li>
  
  <li><strong>Email Templates:</strong> The tool supports customized messaging. Returning donors receive messages thanking them and explaining the impact of their past support, while new donors receive an introduction to the team and the silent auction fundraising goal.</li>
  
  <li><strong>Excel Integration:</strong> The <code>DATA.xlsx</code> file (renameable) serves as the project’s data source. <code>scrape.py</code> reads the business names, performs the web search, and writes both the email and source URL back into the spreadsheet for easy review.</li>
  
  <li><strong>Email Dispatch:</strong> <code>sender.py</code> reads the updated spreadsheet and sends the appropriate email (new or returning) to each contact. When available, the system addresses recipients by name; otherwise, it defaults to the business name.</li>
  
  <li><strong>Accessible Configuration (<code>settings.py</code>):</strong> Designed for ease-of-use by non-technical users. Email credentials, API keys, sender display name, subject line, and the Excel filename are all stored here. While this method sacrifices best security practices, it prioritizes usability for the intended audience.</li>
</ul>

<h3>Technologies Used:</h3>
<ul>
  <li><strong>Python:</strong> Core logic and automation for querying, processing, and emailing.</li>
  <li><strong>Google Search API:</strong> Used for web scraping email addresses based on business names.</li>
  <li><strong>OpenPyXL:</strong> For reading from and writing to Excel files.</li>
  <li><strong>smtplib and email.mime:</strong> To construct and send emails with support for markdown and attachments.</li>
</ul>

<h3>Conclusion:</h3>
<p><strong>The Automated Donor Outreach Tool</strong> supports grassroots fundraising through thoughtful, accessible automation. By combining custom email generation, real-time web search, and clear opportunities for human verification, the project helps ensure effective and accurate donor communication.</p>

<p>While built for a specific local rugby initiative, the structure and design of this tool are flexible enough to be adapted for other community fundraising efforts, making it a valuable model for accessible, semi-automated outreach.</p>

  `,
    image: emailImage,
    skills: ['Python', 'Google API', 'Web Indexing', 'Fundraising', 'Marketing'],
    github: '',
    liveDemo: '',
    documents: [
      {

      },
    ],
  },

  {
    title: 'Credit Check',
    shortDescription: 'Innovative Credit Score for the Deutsche Bank',
    longDescription: `
  <h2>Project Overview</h2>
<p><strong>Alternative Credit Scoring Model</strong> was developed during the inaugural Deutsche Bank Early Career Hackathon. I was placed on a team with three other students and challenged to create an innovative approach to rethinking how credit scores are calculated. We had just 7 hours to brainstorm, prototype, and present our solution.</p>

<p>The project initially began using VueJS and NodeJS for frontend and backend development, respectively. However, due to unexpected hosting constraints, we transitioned the frontend to AngularJS to meet the final submission requirements within the time limit.</p>

<h3>Key Features:</h3>
<ul>
  <li><strong>Student-Focused Credit Evaluation:</strong> Our model was designed with students in mind—an often overlooked demographic in traditional credit scoring systems.</li>
  
  <li><strong>Expanded Scoring Metrics:</strong> Rather than relying solely on financial history, we considered a range of academic and socioeconomic factors:
    <ul>
      <li><strong>GPA:</strong> Higher GPA scores positively influence credit evaluation, signaling responsibility and performance.</li>
      <li><strong>Graduation Year:</strong> Students closer to graduation are considered more likely to gain stable employment soon.</li>
      <li><strong>College Major:</strong> Certain disciplines with higher employment rates receive favorable scoring.</li>
      <li><strong>Work History:</strong> Prior part-time jobs, internships, or co-op experiences improve scores by showing early financial engagement.</li>
      <li><strong>Parental Income:</strong> A proxy for potential financial backing, parental income was factored in to account for support systems that could influence repayment likelihood.</li>
    </ul>
  </li>
</ul>

<h3>Innovative Thinking:</h3>
<p>The project pushed boundaries by incorporating behavioral and contextual data into credit evaluation. A traditional model might assign equal scores to two users who take out a $1,000 loan, regardless of personal financial behavior. However, we discussed future enhancements that consider <strong>psychological prioritization of repayment</strong>. For example:</p>

<ul>
  <li>A user earning $50,000 annually who delays repayment may indicate low financial responsibility, resulting in a lower score.</li>
  <li>Conversely, a user earning $2,000 who prioritizes repayment demonstrates a high degree of responsibility and should receive a higher score.</li>
</ul>

<h3>Technologies Used:</h3>
<ul>
  <li><strong>AngularJS:</strong> Used for the final user interface after pivoting from VueJS due to deployment limitations.</li>
  <li><strong>NodeJS:</strong> Powered the backend API to process user input and simulate score calculation logic.</li>
  <li><strong>JavaScript & REST:</strong> Enabled real-time interaction between frontend inputs and backend logic.</li>
</ul>

<h3>Conclusion:</h3>
<p><strong>The Alternative Credit Scoring Model</strong> reimagines financial evaluation through the lens of potential, behavior, and background—not just past transactions. By targeting student users and emphasizing holistic metrics, the project opens up credit opportunity to a group often underrepresented by traditional scoring systems.</p>

<p>Future development could deepen the behavioral aspect of credit evaluation, using machine learning or behavioral economics to build profiles that more accurately reflect financial reliability beyond raw income or debt history.</p>

  `,
    image: creditImage,
    skills: ['AngularJS', 'NodeJS', 'Rest API', 'Javascript', 'Hackathon', 'Xtreme Programming'],
    github: '',
    liveDemo: '',
    documents: [
      {

      },
    ],
  },

  {
    title: 'Wearable Allergy Analyzer',
    shortDescription: 'Fullstack device to detect imminent allergic reaction',
    longDescription: `
  <h2>Project Overview</h2>
<p><strong>Wearable Allergy Alarm</strong> is a health-focused wearable device designed to monitor environmental and physiological indicators of allergic reactions in real time. Developed as part of a senior capstone project, this device provides users with early alerts about potential allergic conditions and logs data through a connected mobile app. The project blends hardware engineering, software development, and user-centered design to address a growing gap in allergy technology.</p>

<p>As a core contributor to the hardware side of the project, I implemented the environmental and health sensors, established Bluetooth communication, and designed the custom PCB and electrical schematics for the system. The goal was to create a compact, reliable, and low-power wearable capable of tracking environmental and health data, transmitting it to a mobile app, and alerting users to potential allergens based on configurable thresholds.</p>

<h3>Key Features:</h3>
<ul>
  <li><strong>Environmental Monitoring:</strong> Implemented a BME180 sensor to track temperature and atmospheric pressure—both important factors in predicting allergy flare-ups.</li>
  <li><strong>Health Tracking:</strong> Integrated the MAX30102 sensor for pulse oximetry and heart rate monitoring, helping detect physiological responses to allergens.</li>
  <li><strong>Bluetooth Low Energy (BLE):</strong> Configured the Adafruit Feather nRF52832 to transmit sensor data using BLE, allowing seamless sync with the companion mobile app.</li>
  <li><strong>OLED Display Interface:</strong> Used a 0.96" SSD1306 OLED to display real-time sensor data and trigger alerts when critical thresholds are crossed.</li>
  <li><strong>Custom PCB Design:</strong> Designed and wired a custom PCB to house all components, ensure compact integration, and support safe power delivery from a 3.7V LiPo battery.</li>
  <li><strong>Companion App Integration:</strong> Hardware communicates with a React Native app via BLE, with backend services powered by Node.js and Firebase for data storage and analytics.</li>
</ul>

<h3>Technologies & Tools Used:</h3>
<ul>
  <li><strong>nRF52832 (Adafruit Feather):</strong> Bluetooth-enabled microcontroller used as the core hardware platform.</li>
  <li><strong>BME180:</strong> Environmental sensor used for detecting temperature and pressure fluctuations associated with allergen triggers.</li>
  <li><strong>MAX30102:</strong> Health sensor used for pulse and SpO2 measurement during suspected allergic reactions.</li>
  <li><strong>BLE Protocol:</strong> Implemented Bluetooth Low Energy for real-time data transfer and power efficiency.</li>
  <li><strong>KiCad:</strong> Used to design and route the custom PCB layout with proper power regulation and component placement.</li>
  <li><strong>I2C Bus Protocol:</strong> Used for communication between the microcontroller and sensors to reduce pin usage and improve modularity.</li>
</ul>

<h3>Design Highlights:</h3>
<ul>
  <li><strong>Power Optimization:</strong> Designed with low current draw in mind (~37 mA total) and utilized BLE to minimize battery consumption.</li>
  <li><strong>Alert System:</strong> The wearable triggers visual alerts when either environmental or physiological conditions cross set danger thresholds (e.g., heart rate > 120 bpm and SpO2 < 90%).</li>
  <li><strong>Schematics and Layout:</strong> Created detailed schematics and wiring diagrams to support accurate prototyping and manufacturing of the wearable device.</li>
</ul>

<h3>Conclusion:</h3>
<p><strong>The Wearable Allergy Alarm</strong> is a multidisciplinary health tech device focused on empowering individuals with allergy conditions to take control of their environment and health. My contributions focused on the hardware development lifecycle—sensor integration, BLE communication, schematic design, and PCB layout. Together with a companion app and backend infrastructure, this project demonstrates how accessible, real-time health data can improve preventative care and quality of life for users with allergies.</p>

  `,
    image: allergyImage,
    skills: ['I2C', 'Sensor Integration', 'Schematics Design', 'PCB Design', 'Bluetooth'],
    github: 'https://github.com/breanna-s/Wearable-Allergy-Analyzer',
    liveDemo: alarmDemo,
    documents: [
      {
        name: 'Design Report',
        url: alarmReport,
      },
      {
        name: 'Design Presentation',
        url: alarmPresentation,
      },
    ],
  },

  {
    title: 'My Portfolio',
    shortDescription: 'Interactive portfolio showcasing full-stack and embedded systems work',
    longDescription: `
    <h2 class="text-xl font-semibold mb-2">Project Overview</h2>
    <p><strong>makmckinney.com</strong> is my personal portfolio website, built to showcase my interdisciplinary projects in software engineering, embedded systems, and hardware design. It functions both as a resume and an interactive hub for detailed technical writeups, live demos, and linked documentation.</p>

    <p class="mt-4">The site is fully custom-built using <strong>React</strong>, <strong>Tailwind CSS</strong>, and deployed via <strong>Netlify</strong> with DNS integration. The aesthetic was designed to reflect both professionalism and creativity, with scrapbook-inspired elements on the landing page and smooth animations powered by Framer Motion and GSAP.</p>

    <h3 class="text-lg font-medium mt-6">Key Features:</h3>
    <ul class="list-disc list-inside space-y-2">
      <li><strong>Scrapbook-style Landing Page:</strong> Includes textured backgrounds, doodle-styled circular avatar, and interactive post-it note components.</li>
      <li><strong>Interactive Projects Page:</strong> Users can browse projects by tag, keyword, or layout (grid, carousel, or list).</li>
      <li><strong>Reusable Components:</strong> Modular card and page components make adding or editing projects seamless and maintainable.</li>
      <li><strong>Custom CV & Contact Pages:</strong> Built with tailored animations and dynamic form validation.</li>
      <li><strong>Mobile-Responsive:</strong> Every page is optimized for phones, tablets, and desktop displays.</li>
    </ul>

    <h3 class="text-lg font-medium mt-6">Technologies & Tools:</h3>
    <ul class="list-disc list-inside space-y-2">
      <li>React (functional components, hooks)</li>
      <li>Tailwind CSS for utility-first design</li>
      <li>Framer Motion + GSAP for animation</li>
      <li>Netlify for hosting and DNS management</li>
      <li>Vite for fast dev builds</li>
    </ul>

    <h3 class="text-lg font-medium mt-6">Conclusion:</h3>
    <p>This portfolio was designed not only to present my work but to reflect the same level of craft and polish I bring to my engineering projects. The structure supports constant iteration and is built with accessibility, interactivity, and scalability in mind.</p>
  `,
    image: portfolioImage,
    skills: [
      'React',
      'Tailwind CSS',
      'Framer Motion',
      'GSAP',
      'Netlify',
      'Responsive Design',
      'UI/UX',
      'Component Architecture'
    ],
    github: 'https://github.com/breanna-s/portfolio-site', // Replace with actual repo if public
    liveDemo: 'https://www.makmckinney.com',
    documents: [
      { name: '', url: '' },

    ],
  }

  // Add more projects here...
];

export default projectsData;

