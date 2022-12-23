<template>
  <v-app :style="{ background: $vuetify.theme.themes.dark.background}">
    <Navbar />
    <v-container fluid>
      <v-row style="padding-top: 100px">
        <v-col cols="6">
          <v-img src="@/assets/AboutPagePhoto.jpg" contain max-height="500"></v-img>
        </v-col>
        <v-col cols="6">
          <h5 class="red--text text-darken-4" style="font-size:30px;padding-top:100px">12/21/2005</h5>
          <h1 class="white--text"  style="font-size: 48px">Kevin Wei</h1>
          <p class="grey--text">
            I love learning and experiencing new things while also helping others in their interest in coding.
            I have a strong interest in technology such as networking, A.I and software development
            which is why I hope to enter the technology sector in the future!
          </p>
        </v-col>
      </v-row>

      <section class="FAQ">
        <h2 class="FAQtitle">More About Me</h2>

        <div @click="openFAQ(0)" class="FAQdiv">
          <div class="question">
            <h3>Who am I?</h3>

            <svg width="15" height="10" viewBox="0 0 42 25">
              <path d="M3 3L21 21L39 3" stroke="white" stroke-width="7" stroke-linecap="round"/>
            </svg>
          </div>
          <div class="answer">
            <p>
              I am currently a Grade 12 High School Student attending Earl of March Secondary School. My current passion is networking,
               A.I. and software development. As a hobby, I also love to code (not just for school) anything from solving competitive programming
                problems to game development.
            </p>
          </div>
        </div>

        <div @click="openFAQ(1)" class="FAQdiv">
          <div class="question">
            <h3>How did I discover coding?</h3>

            <svg width="15" height="10" viewBox="0 0 42 25">
              <path d="M3 3L21 21L39 3" stroke="white" stroke-width="7" stroke-linecap="round"/>
            </svg>
          </div>
          <div class="answer">
            <p>
              I originally started coding by coming across a <a href="https://www.youtube.com/watch?v=K5F-aGDIYaM&list=PL6gx4Cwl9DGAjkwJocj7vlc_mFU-4wXJq">Youtube 
                Series</a> on the Python programming language. 
                Following the tutorial, I developed my first game, a simplistic 2D snake game completely developed in Python.
            </p>
          </div>
        </div>
        
        <div @click="openFAQ(2)" class="FAQdiv">
          <div class="question">
            <h3>Previous Math Experience</h3>

            <svg width="15" height="10" viewBox="0 0 42 25">
              <path d="M3 3L21 21L39 3" stroke="white" stroke-width="7" stroke-linecap="round"/>
            </svg>
          </div>
          <div class="answer">
            <p>
              Before coding, I had some competitive math experience. Namely, I was active on <a href="https://artofproblemsolving.com/alcumus" target="_blank">AOPS Alcumus</a> 
              (Art of Problem Solving) from 2016-2018.
            </p>
            <img src="@/assets/AOPS.jpg">
            <p>
              I achieved 3rd place in Ottawa for AMC8 back in 2018!
            </p>
            <img src="@/assets/AMC8.jpg">
          </div>
        </div>

        <div @click="openFAQ(3)" class="FAQdiv">
          <div class="question">
            <h3>Furthering my Programming Experience in VV (Virtual Ventures)</h3>

            <svg width="15" height="10" viewBox="0 0 42 25">
              <path d="M3 3L21 21L39 3" stroke="white" stroke-width="7" stroke-linecap="round"/>
            </svg>
          </div>
          <div class="answer">
            <p>
              In 2017, I enrolled in a club called <a href="https://carleton.ca/vv/clubprojects/" target="_blank">Intermediate Engineering Design Studio (Grades 7-12)</a>
              Its goal was to make students experience the full software development lifestyle that comes with any tech project. Here are two of my favorite projects
              <a href="https://docs.google.com/presentation/d/1A2erx_96anwyrVEBjN2hmZiu5Holr6Tvqioauukw2PY/edit?usp=sharing" target="_blank">Bubble Shooter</a> or 
              <a href="https://docs.google.com/presentation/d/1R0L7FRoSW0pJyYyXSvn9eZYlKWU6jrrgWlblBRTnbBQ/edit?usp=sharing" target="_blank">Botanical Rumble</a>
            </p>
            <img src="@/assets/BotanicalRumble.jpg">
          </div>
        </div>

        <div @click="openFAQ(4)" class="FAQdiv">
          <div class="question">
            <h3>Competitive Programming</h3>

            <svg width="15" height="10" viewBox="0 0 42 25">
              <path d="M3 3L21 21L39 3" stroke="white" stroke-width="7" stroke-linecap="round"/>
            </svg>
          </div>
          <div class="answer">
            <p>
              2018 was the year I began competitive programming. I loved the logical and problem-solving aspects of it.
               I solved hundreds of problems on sites such as Codeforces and Atcoder. My biggest goal was to enter the honor roll of the CCC Contest.
                In 2022, I achieved it by entering Group 3 of the Senior Contest with a score of 45 (Top 3% in Canada).
            </p>
            <img src="@/assets/CCCResultCaption.jpg">
          </div>
        </div>

        <div @click="openFAQ(5)" class="FAQdiv">
          <div class="question">
            <h3>Competitive Programming Club</h3>

            <svg width="15" height="10" viewBox="0 0 42 25">
              <path d="M3 3L21 21L39 3" stroke="white" stroke-width="7" stroke-linecap="round"/>
            </svg>
          </div>
          <div class="answer">
            <p>Seeing how niche the topic was I and a friend co-founded Earl of March's Competitive Programming Club. 
              We do weekly discussions on competitive programming problems and algorithms. 
              We also simulate virtual contests and compete against each other for fun.</p>
            <img src="@/assets/ClubPhoto.png">
          </div>
        </div>

        <div @click="openFAQ(6)" class="FAQdiv">
          <div class="question">
            <h3>VV Instructor (My First Job)</h3>

            <svg width="15" height="10" viewBox="0 0 42 25">
              <path d="M3 3L21 21L39 3" stroke="white" stroke-width="7" stroke-linecap="round"/>
            </svg>
          </div>
          <div class="answer">
            <p>From 2021 to the present, I transitioned away from being a club member at Virtual Ventures. 
              I first volunteered, acquiring the 40 hours necessary to graduate, before volunteering another 90 hours because I loved the program. 
              Seeing my enthusiasm, I was promoted to being an actual Instructor where I help coordinate and help fellow students. 
              During the Summer of 2022, I acquired a full-time position as a STEM instructor where I dealt with kids from kindergarten to high school. 
              It was the best experience I ever had!
            </p>
            <img src="@/assets/2022InstructorCaption.jpg">
          </div>
        </div>

        <div @click="openFAQ(7)" class="FAQdiv">
          <div class="question">
            <h3>Nokia Co-Op</h3>

            <svg width="15" height="10" viewBox="0 0 42 25">
              <path d="M3 3L21 21L39 3" stroke="white" stroke-width="7" stroke-linecap="round"/>
            </svg>
          </div>
          <div class="answer">
            <p>I currently work at Nokia as a Co-Op student where I do full-stack development for OTS (Order Tracking System). It's their in-house website 
              where they store a lot of data and I was given the task to develop and maintain it. I had to learn many languages such as Javascript, Node.Js, and HTML/CSS.
              At the same time, I was introduced to the concept of databases and learned how to connect the backend and frontend to it (MySQL).
            </p>
          </div>
        </div>
      </section>


      <v-row>
        <h1 class="white--text titleText" style="padding-top: 200px">Resume (Takes a bit to load)</h1>
      </v-row>
      <v-row>
        <iframe class="center2" src="https://drive.google.com/file/d/1N_CUNCeNTkxB3EOpseqAaynQ8Vplo98u/preview" width="75%" height="880" allow="autoplay"></iframe>
      </v-row>
      <v-row>
        <v-btn class="center2" tile color="#A7121D" dark href="https://drive.google.com/uc?export=download&id=1N_CUNCeNTkxB3EOpseqAaynQ8Vplo98u" download="Resume.pdf">Download</v-btn>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
  import Navbar from '../components/NavBar'

  export default {
    name: 'AboutView',

    components: {
      Navbar,
    },
    data(){
      return{
        FAQOpen: []
      }
    },
    methods:{
      openFAQ(id){
        this.FAQOpen[id].classList.toggle("active");
      }
    },
    mounted(){
      this.FAQOpen = document.querySelectorAll(".FAQdiv");
    }
  }
</script>

<style>
  @import '@/css/aboutView.css';
</style>