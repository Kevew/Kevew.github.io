<template>
  <v-app :style="{ background: $vuetify.theme.themes.dark.background}">
    <Navbar />
    <v-container fluid>
      <v-row>
        <v-col cols="6">
          <v-img src="@/assets/HomePhoto1.jpg" contain max-height="500"></v-img>
        </v-col>
        <v-col cols="6">
          <h5 class="red--text text-darken-4 top">Hello there!</h5>
          <h1 class="white--text">My name is Qi Wen Wei (Preferred name: Kevin Wei)</h1>
          <p class="grey--text">
            I'm a highschool student looking for a career in computer science. <br> <br>
            Currently have experience in Full-Stack Development using Vue, <br>Game Development and Competitive Programming
          </p>
          <v-btn tile color="#A7121D" dark to="/about">Learn more about Me </v-btn>
        </v-col>
      
      <v-col id="about">
        <h4 class="white--text subTitleText">Featured Projects</h4>
      </v-col>
      </v-row>
      <v-row>
        <v-col md="3">
        <v-card class="pa-2 py-12" outlined tile height="820px" color="#1E1E1E">
          <v-img src="@/assets/EarlofMarchLogo.png" contain></v-img>
          <p class="subTitleText white--text">Earl of March Virtual Tour</p>
          <p class="grey--text">A fully functioning virtual tour of Earl of March where you can explore classrooms, hallways and the outdoor area around the school. 
            Designed for people new to the school, students are capable of navigating their classrooms with the assistance of the built-in guide system. With smooth 
            camera rotation, you can enhance the experience by modifying customizable camera settings in the options menu. 
          </p>
          <v-btn class="smooth" tile color="#A7121D" dark to="/achievements">Learn More About It </v-btn>
        </v-card>
      </v-col>
      <v-col md="3">
        <v-card class="pa-2 py-12" outlined tile height="820px" color="#1E1E1E">
          <v-img src="@/assets/BotanicalRumble.jpg" contain></v-img>
          <p class="subTitleText white--text">Botanical Rumble</p>
          <p class="grey--text">My last Virtual Ventures project I did. It's a 2D multiplayer street fighter style of game with a beautiful artstic style. <br><br>
          One of the main difficulties in development in the game was networking. It's a simple concept on paper but complex in pratice. Overcoming network issues and developing a reliable way for basic game mechanics to become "network capable" can become challenging, especially when we are beginners to networking. I can say that after working on this project, I feel multiple times more confident to tackle network based projects in the future. </p>
          <v-btn class="smooth" tile color="#A7121D" dark href="https://botanicalrumble.itch.io/botanical-rumble-desktop-edition" target="_blank">Itch.Io Website </v-btn>
        </v-card>
      </v-col>
      <v-col md="3">
        <v-card class="pa-2 py-12" outlined tile height="820px" color="#1E1E1E">
          <v-img src="@/assets/Fatato.jpg" contain></v-img>
          <p class="subTitleText white--text">Fatato</p>
          <p class="grey--text">This was my first game jam participation. Although very primitive and basic, it was a completely finished project. I built this project in  
            Global Game Jam hosted by Virtual Ventures back in 2019 with a small team that was quickly assembled. <br><br>
          
            I think the biggest accomplisment I did for this project was that it was a fully finished game. It has a main menu, gameplay and even music! You are capable of playing the game in it's entirely without bugs. All developed under half a day! <br><br>I still look back to this day with a smile.</p>
            <v-btn class="smooth" tile color="#A7121D" dark href="https://bossjr.itch.io/fatato" target="_blank">Itch.Io Website </v-btn>
        </v-card>
      </v-col>
      <v-col md="3">
        <v-card class="pa-2 py-12" outlined tile height="820px" color="#1E1E1E">
          <v-img src="@/assets/DiceyJourney.jpg" contain></v-img>
          <p class="subTitleText white--text">A Dicey Journey</p>
          <p class="grey--text">The most recent game jam that I particapated in. During summer of 2022, GMTK Game Jam 2022 was nearby so me and a few co-workers from 
            Virtual Ventures decided to get together and have some fun. <br><br>

            The theme of the game jam was "Roll of a Dice" so we quickly came up with a concept of a 3D platformer game where the ground is made of dices. Depending on the face of the dice you fall on, it may give you special effects. 
          </p>
          <v-btn class="smooth" tile color="#A7121D" dark href="https://miaminimia.itch.io/a-dicey-journey" target="_blank">Itch.Io Website </v-btn>
        </v-card>
      </v-col>
      </v-row>
      <div class="contact-container">
        <div class="contact-box">
          <div class="contact">
            <h2 class="white--text">Contact Me</h2>
            <input v-model="emailName" type="text" class="field" placeholder="Your Name">
            <input v-model="email" type="email" class="field" placeholder="Your Email"> 
            <textarea v-model="emailMessage" class="field area" placeHolder="Message"></textarea>
            <button @click="sendEmail" class="btn">Send</button>
          </div>
        </div>
      </div>
      <footer>
        <div class="footer-content">
          <p>For more information about me. Please check out the following links</p>
          <ul class="social">
            <li><a href="https://github.com/Kevew" target="_blank">Github</a></li>
            <li><a href="https://www.linkedin.com/in/kevin-wei-9b42a3230/" target="_blank">Linkedin</a></li>
          </ul>
          <p>Website developed fully by Kevin Wei <br>
          Email: wei00033@gmail.com</p>
        </div>
      </footer>
    </v-container>
  </v-app>
</template>

<script>
  import Navbar from '../components/NavBar';

  export default {
    name: 'HomeView',

    components: {
      Navbar,
    },
    data() {
      return {
        emailName: "",
        email: "",
        emailMessage: "",

        myEmail: "wei000333@gmail.com",
      }
    },
    methods: {
      sendEmail(){
        
      }
    }
  }
</script>

<style>
  @import '@/css/homeView.css';
</style>