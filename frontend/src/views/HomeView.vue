<template>
  <v-app :style="{ background: $vuetify.theme.themes.dark.background}">
    <Navbar />
    <v-container fluid>
      <v-row>
        <v-col cols="6">
          <v-img src="home1.jpg" contain max-height="500"></v-img>
        </v-col>
        <v-col cols="6">
          <h5 class="red--text text-darken-4 top">Yo</h5>
          <h1 class="white--text">Coder</h1>
          <p class="grey--text">
            Who am I? Well, idk
          </p>
          <v-btn tile color="#A7121D" dark to="/about">About Me </v-btn>
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
          <v-img src="home1.jpg" contain></v-img>
          <p class="grey--text">Test</p>
        </v-card>
      </v-col>
      <v-col md="3">
        <v-card class="pa-2 py-12" outlined tile height="600px" color="#1E1E1E">
          <v-img src="home1.jpg" contain></v-img>
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

<style scoped>

.top{
  margin-top: 180px;
}

.topInverse{
  margin-top: -250px;
}

.topTolbar{
  margin-top: 100px;
  text-align: center;
}

.first{
  width: 100%;
  height: 610px;
  background: linear-gradient(
    to right,
    #181818,
    #181818 50%,
    #111111 50%,
    #111111 50%
  );
  text-align: center;
  padding: 2rem 2rem;
}

.second{
  width: 100%;
  height: 400px;
  background: #181818;
  text-align: center;
  padding: 2rem 2rem;
}

.secondchild1{
  display: inline-block;
  background-color: #1e1e1e;
  padding: 2rem, 1rem;
  vertical-align: middle;
  text-align: left;
  margin-top: 250px;
}

.child{
  display: inline-block;
  padding: 2rem 1rem;
  vertical-align: middle;
  text-align: left;
  margin-right: 8px;

}
.bgColor1{
  background-color: #1e1e1e;
}

.bgColor2{
  background-color: #ce1d2a;
}

.child1{
  display: inline-block;
  padding: 2rem 1rem;
  vertical-align: middle;
  margin-right: 5px;
  width: 240px;
}

.child2{
  display: inline-block;
  width: 245px;
  vertical-align: middle;
}

.mRight{
  margin-right: 8px;
}
.mButton{
  margin-bottom: 8px;
}

.padding{
  padding: 8px 0px;
}

.col-12.padd{
  padding: 12px 0 !important;
}

.col-12.childcol{
  padding: 0 !important;
}

h1.number{
  font-size: 50px;
  font-weight: bold;
}

</style>