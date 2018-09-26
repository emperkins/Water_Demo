<template>
  <v-container fluid>
    <v-slide-y-transition mode="out-in">
      <v-layout column align-center><br><br>
        <h1>Page Not Found</h1><br>
<hr>
        <h2>Sorry, the page you are looking for cannot be found.</h2><br>
        <h2>Click below to return to the home page.</h2><br>
        <router-link to="/"><v-btn small center color="indigo" dark>FACSTrack Home</v-btn></router-link>
      </v-layout>
    </v-slide-y-transition>
  </v-container>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #1d3443;
    text-decoration: none;
  }
</style>
