<template>
  <v-app :style="{ background: $vuetify.theme.themes.dark.background}">
    <Navbar />
    <v-container fluid>
      <v-row style="padding-top: 100px">
        <v-col cols="6">
          <v-img src="@/assets/logo.png" contain max-height="500"></v-img>
        </v-col>
        <v-col cols="6">
          <h5 class="red--text text-darken-4" style="font-size:30px;padding-top:100px">Born: 12/21/2005</h5>
          <h1 class="white--text"  style="font-size: 48px">Name: Kevin Wei</h1>
          <p class="grey--text" style="font-size: 22px">
            As of 2022, I currently go to Earl of March (Secondary School). It's located just west of Ottawa near the small suburb of Kanata.
            I attend school dilgently focusing on classes related to the technology sector. On weekends, I go to Carleton University to work as a Instructor for
            <a href="https://carleton.ca/vv/clubs/fallclubs/">VV</a>. <br><br> I have a strong interest in technology such as networking, A.I and software development
            which is why I hoping to enter the sector in the future!
          </p>
        </v-col>
      </v-row>
      <v-row>
        <h1 class="white--text titleText" style="padding-top: 400px">From Math To Code</h1>
      </v-row>
      <v-row>
        <v-col cols="3">
          <v-img src="@/assets/logo.png" contain max-height="500"></v-img>
        </v-col>
        <v-col cols="3">
          <v-img src="@/assets/logo.png" contain max-height="500"></v-img>
        </v-col>
        <v-col cols="6">
          <h5 class="white--text text-darken-4 subTitleText">Set Up</h5>
          <p class="grey--text">
             I like mathematics a lot. When I was first introduced to it, I loved the logical aspect of it. Subjects such as writing and art can have multiple
             answers where unlike Mathematics, there will always be a single most efficent way of solving a problem. Finding that problem was especially fun for me.
             Back in 2015-2017, I dipped my toes into the competitive field of math and put in quite some effort. Most of my pratice stemmed from <a href="https://artofproblemsolving.com/online"> AOPS </a>
             and <a href="https://cemc.uwaterloo.ca/contests/past_contests.html">Waterloo Contests</a> such as Gauss and Pascal. I even did quite good in the AMC8 where 
             I achieved 3rd place in Ottawa. However, while I enjoyed these problems I felt as though math was too restrictive and lacked any sort of goal. In 2017-2018, this 
             sense of directionless started to affect me in my interest. I was starting to get bored with math.
             <br> <br>
             But just as my interset in math wavered, a new interest was begining to rise. Programming. I first came across programming through a youtube series
             where the youtuber developed a snake game  as well as a tank game (<a href="https://www.youtube.com/watch?v=K5F-aGDIYaM&list=PL6gx4Cwl9DGAjkwJocj7vlc_mFU-4wXJq">link</a>). 
             Looking back, I realized that I 100% was copying his code without understanding it. However, as I saw my program develop with each tutorial I was getting more and more
             immersed.
             <br> <br>
             Much like mathematics, Programming was 100% logical. 
             It had a strict set of rules but gave enough freedom to explore so many more pathways that math quickly faded from my mind. 
          </p>
        </v-col>
        <v-col cols="3">
          <v-img src="@/assets/logo.png" contain max-height="500"></v-img>
        </v-col>
        <v-col cols="3">
          <v-img src="@/assets/logo.png" contain max-height="500"></v-img>
        </v-col>
        <v-col cols="6">
          <p class="grey--text">
            Wanting to learn more about coding, in 2017 I enrolled for a saturday club called <a href="https://carleton.ca/vv/clubprojects/">Intermediate Engineering & Design Studio (Grades 7-12)</a>
            The basic premise was for students to make a team and experience the full software development lifestyle. This means, team managemenet, product design,
            product development and release. There was a total of about 60 hours in total (actually 50 because 2 of the weeks were for presentations) which wasn't 
            a lot of time but I did develop some cool projects. Some examples are my <a href="https://docs.google.com/presentation/d/1A2erx_96anwyrVEBjN2hmZiu5Holr6Tvqioauukw2PY/edit?usp=sharing">3D Movement Game</a>
            or <a href="https://docs.google.com/presentation/d/1R0L7FRoSW0pJyYyXSvn9eZYlKWU6jrrgWlblBRTnbBQ/edit?usp=sharing">2D Plant Fighting</a>. 
            These projects helped me develop not only as a programmer but in many other crucial skills such as teamwork as communication. <br> <br>
            Although most of these projects were a casual thing, I also still enjoyed the competitive side of programming. In 2018, I found out about competitive programming.
            It's frankly a pretty niche in coding. Most people in software want to develop the next amazon or google but like math, I also loved the logical thinking side of it.
            Wanting to get more people interested, me and a friend got together and founded the competitive programming club at my school. It's still running to this day! 
            The big contest I wanted to get a decent score in was the <a href="https://www.cemc.uwaterloo.ca/contests/ccc-cco.html">CCC</a> and in 2021, I achieve group 3
            in senior with a score of 45 (Top 3%).
            <br><br>
            Nowadays, I have a co-op at Nokia as a Network and Software Installation (though I mostly do full-stack development). I am constantly looking for new 
            opportunities and new ways to improve myself. I hope to see you in the future, whatever that may be!
          </p>
        </v-col>
      </v-row>
      <v-row>
        <h1 class="white--text titleText" style="padding-top: 200px">Resume</h1>
      </v-row>
      <v-row>
        <v-btn class="center" tile color="#A7121D" dark to="/about">Download</v-btn>
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
  }
</script>

<style>
  @import '@/css/aboutView.css';
</style>