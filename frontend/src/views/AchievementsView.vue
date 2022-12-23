<template>
  <v-app dark flat class="px-8" :style="{ background: $vuetify.theme.themes.dark.background}">
      <Navbar />
      <section class="main-container">
          <div class="item-nav-bar">
              <div class="item-nav">
                  <i @click="btnLeftClick" class="uil uil-angle-left left-btn"></i>
                  <i @click="btnRightClick" class="uil uil-angle-right right-btn"></i>
                  <ul @mousemove="mouseMove" @mousedown="mouseDown" @mouseup="mouseUp" class="item-menu">
                      <li @click="tabBtnClick(0)" class="item active">CCC Result</li>
                      <li @click="tabBtnClick(1)" class="item">Virtual Ventures</li>
                      <li @click="tabBtnClick(2)" class="item">Nokia Co-Op</li>
                      <li @click="tabBtnClick(3)" class="item">Earl of March Virtual Tour</li>
                      <li @click="tabBtnClick(4)" class="item">Earl of March Competitive Programming Club</li>
                  </ul>
              </div>
          </div>

          <div class="tab-content">
            <div class="tab active">
              <div class="row">
                <div class="left-column">
                  <div class="img-card">
                    <img @click="openImage(0)" src="@/assets/CCCResult.jpg" alt="">
                  </div>
                </div>
                <div class="right-column">
                  <div class="info">
                    <h1 class="white--text titleText">CCC Contest</h1>
                    <p>The Canadian Computing Competition (CCC) is a fun programming contest designed for people with an interest in competitive programming.
                      Designed for beginners and veterans, it is a three-hour contest where participants are given problems requiring problem-solving skills which 
                      they must write out code for it. There are two main levels for the contest:<br> <br>
                      ⚪ Junior level — any participant with beginner programming skills <br>
                      ⚪ Senior level — any participant with intermediate to advanced programming skills <br> <br>If you would like to learn more about the CCC,
                      click <a href="https://cemc.uwaterloo.ca/contests/ccc-cco.html">here</a>. <br> <br>
                      For the past 3 years, I've been attending each contest with consistent improvement each time. <br>
                      ⚪ 2020 Senior Contest: 31 Points<br>
                      ⚪ 2021 Senior Contest: 41 Points<br><br>
                      Last year, in 2022, I achieved my highest score yet. A total of 45 points in the Senior Contest pushing me to enter the honor roll group 3. 
                      This is around the top 3% in Canada and the highest score in my entire school.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div class="tab">
              <div class="row">
                <div class="left-column">
                  <div class="img-card">
                    <img @click="openImage(1)" src="https://carleton.ca/vv/wp-content/uploads/Website-Banner.png" alt="">
                  </div>
                </div>
                <div class="right-column">
                  <div class="info">
                    <h1 class="white--text titleText">Virtual Ventures</h1>
                    <p>Virtual Ventures is a not-for-profit organization run under the Faculty of Engineering and Design at Carleton University.
                      I first applied for its Intermediate Engineering & Design Studio (Grades 7-12) which is a club that runs every Saturday from 1pm to 5pm.
                      The goal of the club is to research and develop a product throughout 12 meetings. This can be a video game, animation, or app.

                      <br><br>

                      When I first joined this club back in 2017, I didn't know what I was getting into. This club, unlike other sorts of STEM outreachs, forces 
                      the members to be independent. There are instructors but you must first research whatever problem you are encountering before asking. 
                      As a result, this club was an excellent opportunity to learn about teamwork, independent work, and communication. 
                    </p>
                  </div>
                </div>
                <div class="img-card">
                    <img @click="openImage(2)" src="@/assets/2019VV.jpg" alt="">
                  </div>
                <div class="right-column">
                  <div class="info"><p>A photo of my team members back in early 2021</p></div>
                </div>
                <div class="right-column">
                  <div class="info">
                    <p>While 12 weeks of development may seem like much, if you actually calculate it, it's about 48 hours of total development time. 
                      This doesn't include two meetings for presentation and week 1 for design, which really leaves you with only 36 hours to develop a project.
                      This is basically the same thing as a 2-day game jam which is not a lot of time. <br> <br>

                      Still, from 2017 to early 2021, I rigorously attended this club multiple times. I learned how to use Unity, C#, and Java as I tried out different projects.
                      My favorite two are: 
                      <a href="https://docs.google.com/presentation/d/1R0L7FRoSW0pJyYyXSvn9eZYlKWU6jrrgWlblBRTnbBQ/edit?usp=sharing" target="_blank">Botanical Rumble</a>
                      and <a href="https://docs.google.com/presentation/d/1A2erx_96anwyrVEBjN2hmZiu5Holr6Tvqioauukw2PY/edit?usp=sharing" target="_blank">Bubble Shooter</a>
                    </p>
                  </div>
                </div>
                <div class="left-column">
                  <div class="img-card">
                    <img @click="openImage(3)" src="@/assets/2022Instructor.jpg" alt="">
                  </div>
                </div>
                <div class="right-column">
                  <div class="img-card">
                    <img @click="openImage(4)" src="@/assets/2022Instructor2.jpg" alt="">
                  </div>
                </div>
                <div class="right-column">
                  <div class="info">
                    <p> With my last project in 2021 and the club moving to virtual, I wanted to take it up a notch
                      . I took the initiative and asked the instructors running the club if I could volunteer for it. Thru this, I
                      managed to get my 40 hours of volunteer plus an extra 90 hours as well. As 2022 rolled around, I was promoted to being an actual instructor and worked
                      every Saturday by answering questions and helping out the students. <br> <br>

                      It was one of the best experiences I've ever had and I've learned a lot. I worked with kids from kindergarten all the way up to grade 9. The first
                      week was quite chaotic but with the help of my co-workers, I got the hang of it. We coordinated lesson plans, ensured discipline and was mindful 
                      of the campers situations. During the process, I even taught some of the lesson plans myself. It was quite interesting interacting with people with
                      different outlooks than mine. <br> <br>

                      Since then, I've worked as another Saturday Club Instructor and now fill in as a substitute in case an instructor is missing or can't make it.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="tab">
              <div class="row">
                <div class="left-column">
                  <div class="img-card">
                    <img @click="openImage(5)" src="@/assets/NokiaLogo.webp" alt="">
                  </div>
                </div>
                <div class="right-column">
                  <div class="info">
                    <h1 class="white--text titleText">Nokia</h1>
                    <p>Recently, I took a co-op course for my 2022 Fall semester. Seeing an opportunity for a Nokia Co-Op and with my 
                       prior experiences in the technology sector, I decided to apply for it. The Co-Op was about
                       Software Installations and Networking. It was an excellent fit for me, who at this point in time, was looking to explore different aspects of technology
                       so I could get a better understanding of what I want to do in the future.<br><br>

                       For the first month of the Co-Op, I spent a lot of time learning about networking and exactly how it worked. The lab I worked in was large with
                       hundreds of chassis constantly doing jobs. However, over the first month, as I explored different tasks, I found a task that suited my abilities much
                       better. One of the tools my supervisor uses quite often is something called OTS. It's basically their in-house order tracking system and seeing a chance.
                       I asked to do some tasks related to it. As a result, from the second month onwards, I was given the task to help develop and maintain the OTS website.
                       Since the website used NodeJs, Vue Js, and HTML, I had to learn quite a bit. I even used most of the knowledge gained to develop this very website.

                       <br><br>

                       I wasn't the only one working on the project. This experience was the first thing I coordinated on a technical level for code. I had to ensure
                       my code was readable to others which was not a problem I've faced till now. GitHub was another big aspect of the teamwork I experienced as it had
                       dedicated issue pages with easy flexibility. I had to get others to review my code to make sure that the changes I do won't cause other people's 
                       environment to have problems.

                       <br><br>

                       I find this experience fascinating because professionalism was at the forefront of my thoughts and I really felt the gap of experience between
                       me and some of my co-workers. Problems that may take hours for me to solve was a problem they experienced before and can easily solve now. 
                       The whole atmosphere was something new that I had to get use to. This Co-Op
                       experience taught me a lot and widen my horizons on what I was capable of doing.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div class="tab">
              <div class="row">
                <div class="left-column">
                  <div class="img-card">
                    <img @click="openImage(6)" src="@/assets/EarlofMarchLogo.png" alt="">
                  </div>
                </div>
                <div class="right-column">
                  <div class="info">
                    <h1 class="white--text titleText">Grade 12 CS Project</h1>
                    <p> In 2021, I took my Grade 12 CS class early because I was really excited about it. We were given a semester to create a personal project of our choice.
                      Thinking about the project, I ultimately decided to develop an Earl of March Virtual
                      Tour where you can explore the school from anywhere you want.   <br><br>

                      However, at the end of the semester, I felt a bit unsatisfied with the product and as such, I talked with a guidance counselor at my school and 
                      decided to continue the project. I even managed to get paid for the extra work I did on the project by the school itself. At the end of the project,
                      you can visit the inside and outdoor areas of the school, using the path system to find specific rooms and lots of options for customization.

                      <br><br>If you want to see the final product you can click 
                      <a href="https://drive.google.com/file/d/1w0Su5SMSDWzM00CLSP4brSDWwLz8cb-B/view?usp=sharing" target="_blank">right here</a>
                      <br>Code for the project could also be found <a href="https://github.com/Kevew/Earl-of-March-VirtualTour">here</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div class="tab">
              <div class="row">
                <div class="left-column">
                  <div class="img-card">
                    <img @click="openImage(7)" src="@/assets/ClubAdvertisement.jpg" alt="">
                  </div>
                </div>
                <div class="right-column">
                  <div class="info">
                    <h1 class="white--text titleText">Founding A Club</h1>
                    <p> In 2021, wanting to further my competitive programming skills, I co-founded the Competitive Programming Club with one of my friends. Having
                      practically no experience in such a thing, the first year of the guitclub went so-so. We had two weekly meetings where we discussed algorithms and 
                      solved problems. However, due to a lack of experience, we didn't get many members. Despite that, we persevered all the way to the end of the school year
                      and prepared for the next year. <br> <br>

                      This year went much better. Using last year's experience, we turned to club back into in-person meetings and managed to get an average active member count of 6-7
                      people. I and my co-founder decided that it would be better to have one meeting per week this year and worked out presentations for the members where
                      we discuss ideas, problems, and algorithms with them. We also do virtual contests with them where we have fun competing against each other for fun.
                      All in all, it's been a great experience with them.
                    </p>
                  </div>
                </div>
                <div class="left-column">
                  <div class="img-card">
                    <img @click="openImage(8)" src="@/assets/ClubContest.jpg" alt="">
                  </div>
                </div>
                <div class="right-column">
                  <div class="img-card">
                    <img @click="openImage(9)" src="@/assets/ClubPhoto.png" alt="">
                  </div>
                </div>
                <div class="right-column">
                  <div class="info">
                    <p> Here are some examples of our dicussions: <br>
                      <a href="https://docs.google.com/presentation/d/1r3vfKaHoYgg565cam1942WoJPU4ZWSTmaOQa6EqYHww/edit?usp=sharing" target="_blank">Dicussion Of A Problem</a> <br>
                      <a href="https://docs.google.com/presentation/d/1uqlGYOVXFEdq3BgKva775yKgqx-XtmqYBwUPJXSPYWo/edit?usp=sharing" target="_blank">Dicussion of ASCII</a> <br>
                      <a href="https://docs.google.com/presentation/d/1XOsFTnPsaDgy6FpFZP7jSH49OK5cyZZoR0U1_1999xM/edit?usp=sharing" target="_blank">Dicussion of Sorting</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
      </section>

      <div class="popup-img">
        <span @click="closeImage">&times;</span>
        <img src="@/assets/CCCResult.jpg">
      </div>
  </v-app>
</template>

<script>

import Navbar from '../components/NavBar'

export default{
  name: 'AchievementsView',
  components: {
      Navbar,
  },
  data () {
      return {
          itemMenu: [],
          btnLeft: [],
          btnRight: [],
          activeDrag: false,
          tabs: [],
          items: [],
          popUpImage: [],
          popUp: [],
          allImages: []
      }
  },
  methods: {
      checkVisibility(){
          let scrollLeftValue = Math.ceil(this.itemMenu.scrollLeft);
          let scrollableWidth = this.itemMenu.scrollWidth - this.itemMenu.clientWidth;
          this.btnLeft.style.display = scrollLeftValue > 0 ? "block" : "none";
          this.btnRight.style.display = scrollableWidth > scrollLeftValue ? "block" : "none";
      },
      btnRightClick () {
          this.itemMenu.scrollLeft += 150;
          setTimeout(() => this.checkVisibility(), 50);
      },
      btnLeftClick () {
          this.itemMenu.scrollLeft -= 150;
          setTimeout(() => this.checkVisibility(), 50);
      },
      mouseMove(event) {
          if(!this.activeDrag) return;
          this.itemMenu.scrollLeft -= event.movementX;
          this.checkVisibility();
          this.itemMenu.classList.add("dragging");
      },
      mouseDown() {
          this.activeDrag = true;
      },
      mouseUp() {
          this.activeDrag = false;
          this.itemMenu.classList.remove("dragging");
      },
      tabBtnClick(tabBtnNumber) {
          this.items.forEach((Btn) => {Btn.classList.remove("active")});
          this.tabs.forEach((Btn) => {Btn.classList.remove("active")});
          this.items[tabBtnNumber].classList.add("active");
          this.tabs[tabBtnNumber].classList.add("active");
      },
      resizeEvent(){
        this.btnRight.style.display = (this.itemMenu.scrollWidth > this.itemMenu.clientWidth || this.itemMenu.scrollWidth >= this.window.innerWidth) ? "block" : "none";
        this.btnLeft.style.display = (this.itemMenu.scrollWidth >= window.innerWidth) ? "" : "none";
      },
      openImage(id){
        this.popUp.style.display = "block";
        this.popUpImage.src = this.allImages[id].getAttribute('src');
      },
      closeImage(){
        this.popUp.style.display = "none";
      }
  },
  mounted() {
      this.itemMenu = document.querySelector(".item-menu");
      this.btnLeft = document.querySelector(".left-btn");
      this.btnRight = document.querySelector(".right-btn");

      this.items = document.querySelectorAll(".item");
      this.tabs = document.querySelectorAll(".tab");

      this.popUpImage = document.querySelector(".popup-img img");
      this.popUp = document.querySelector(".popup-img");
      this.allImages = document.querySelectorAll(".img-card img");

      document.querySelector(".v-main").style.padding = "60px 0px 0px 0px";

      this.btnRight.style.display = (this.itemMenu.scrollWidth > this.itemMenu.clientWidth || this.itemMenu.scrollWidth >= window.innerWidth) ? "block" : "none";
      this.btnLeft.style.display = (this.itemMenu.scrollWidth >= window.innerWidth) ? "" : "none";
  },
  emits: ['selectButton'],
  created() {
    window.addEventListener("resize", this.resizeEvent);
  },
  destroyed() {
    window.removeEventListener("resize", this.resizeEvent);
  },
}
</script>
<style>
  @import '@/css/achievementView.css';
  @import 'https://unicons.iconscout.com/release/v4.0.0/css/line.css';
</style>