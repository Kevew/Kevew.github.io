<template>
  <v-app :style="{ background: $vuetify.theme.themes.dark.background}">
    <Navbar />
    <v-container fluid>
      <v-row>
        <v-col cols="6">
          <v-img src="@/assets/logo.png" contain max-height="500"></v-img>
        </v-col>
        <v-col cols="6">
          <h5 class="red--text text-darken-4 top">Hello there!</h5>
          <h1 class="white--text">My name is Kevin Wei</h1>
          <p class="grey--text">
            I'm a highschool student looking for a career in computer science. <br> <br>
            Currently have experience in Full-Stack Development using Vue, <br>Game Development and Competitive Programming
          </p>
          <v-btn tile color="#A7121D" dark to="/about">Learn more about Me </v-btn>
        </v-col>
      <v-col cols="12" class="padd">
        <div class="first" id="project">
          <v-row>
            <v-col cols="12">
              <div class="child bgColor1">
                <v-icon color="#A7121D" x-large class="ml-3">
                  mdi-palette-swatch
                </v-icon>
                <h3 class="white--text ml-3mt-4">UI Design</h3>
                <p class="grey--text ml-3 mt-6">
                  asoidjasiodjasoidjasiodjoi
                </p>
                <v-btn color="#A7121D" dark text>
                  know more
                  <v-icon right>mdi-arrow-right</v-icon>
                </v-btn>
              </div>
              <div class="child bgColor2">
                <v-icon x-large class="ml-3" dark>mdi-shopping</v-icon>
                <h3 class="white--text ml-3 mt-4">Product Design</h3>
                <p class="grey--text ml-3 mt-6">
                  SAJDLAKSJDLAKSDJLAKSDJLASKD
                </p>
                <v-btn dark text>
                  know more
                  <v-icon right>mdi-arrow-right</v-icon>
                </v-btn>
              </div>
              <div class="child bgColor1">
                <v-icon color="#A7121D" x-large class="ml-3">mdi-book-open-page-variant</v-icon>
                <h3 class="white--text ml-3 mt-4">Branding</h3>
                <p class="grey--text ml-3 mt-6">
                  LSKAJDLKJDLAK
                </p>
                <v-btn dark text>
                  know more
                  <v-icon right>mdi-arrow-right</v-icon>
                </v-btn>
              </div>
              <v-col cols="12" class="mt-10">
                <div class="child1">
                  <h1 class="red--text text-darken-4 mt-4 number">12</h1>
                  <h3 class="white--text mt-4">Years Experience</h3>
                </div>
                <div class="child2 mRight">
                  <v-row>
                    <v-col cols="12" class="childcol">
                      <div class="child2 mButton padding bgColor1">
                        <h1 class="red--text text--darken-4">0</h1>
                        <p class="grey--text">TESTETSTESTEST</p>
                      </div>
                    </v-col>
                    <v-col cols="12" class="childcol">
                      <div class="child2 padding bgColor1">
                        <h1 class="red--text text--darken-4">122</h1>
                        <p class="grey--text">Lul</p>
                      </div>
                    </v-col>
                  </v-row>
                </div>
                <div class="child2 mRight">
                  <v-row>
                    <v-col cols="12" class="childcol">
                      <div class="child2 mButton padding bgColor1">
                        <h1 class="red--text text--darken-4">0</h1>
                        <p class="grey--text">YEA</p>
                      </div>
                    </v-col>
                    <v-col cols="12" class="childcol">
                      <div class="child2 padding bgColor1">
                        <h1 class="red--text text--darken-4">122</h1>
                        <p class="grey--text">Lul</p>
                      </div>
                    </v-col>
                  </v-row>
                </div>
              </v-col>
            </v-col>
          </v-row>
        </div>
      </v-col>
      <v-col md="3" offset-md="3" id="about">
        <h4 class="white--text">Featured Projects</h4>
        <p class="grey--text">Lorem ipsum</p>
      </v-col>
      <v-col md="3" class="text-end">
        <v-btn tile color="#A7121D" dark> View All </v-btn>
      </v-col>
      <v-col md="3" offset-md="3">
        <v-card class="pa-2 py-12" outlined tile height="600px" color="#1E1E1E">
          <v-img src="@/assets/logo.png" contain></v-img>
          <p class="grey--text">Test</p>
        </v-card>
      </v-col>
      <v-col md="3">
        <v-card class="pa-2 py-12" outlined tile height="600px" color="#1E1E1E">
          <v-img src="@/assets/logo.png" contain></v-img>
          <p class="grey--text">Test</p>
        </v-card>
        
      </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
  import Navbar from '../components/NavBar'

  export default {
    name: 'HomeView',

    components: {
      Navbar,
    },
  }
</script>

<style>
  @import '@/css/homeView.css';
</style>