<template>
    <v-app-bar app color="#111111" dark flat class="px-8">
        <v-btn to="/" icon>
            <v-icon color="#A7121D">fas fa-dragon</v-icon>
        </v-btn>
        <v-spacer></v-spacer>
        <v-btn text @click="scroll('home')" to="/">Home</v-btn>
        <v-btn text @click="scroll('about')" to="/about">About Me</v-btn>
        <v-btn text @click="scroll('achievements')" to="/achievements">Achievements</v-btn>
    </v-app-bar>
</template>

<script>
export default{
    methoids: {
        scroll(refName){
            const element = document.getElementById(refName);
            element.scrollIntoView({behaviour: "smooth"});
        }
    }
}
</script>

<style>

</style>