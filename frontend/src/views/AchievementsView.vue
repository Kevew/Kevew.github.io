<template>
  <v-app :style="{ background: $vuetify.theme.themes.dark.background}">
    <Navbar />
    <p>Achieve</p>
  </v-app>
</template>

<script>
  import Navbar from '../components/NavBar'

  export default {
    name: 'AchievementsView',

    components: {
      Navbar,
    },
  }
</script>