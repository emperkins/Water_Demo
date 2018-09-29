<template>
  <v-card
    class="pa-3"
    flat
    height="1000px"
    img="https://cdn.vuetifyjs.com/images/toolbar/map.jpg"
  >
    <v-toolbar
      dense
      floating
    >
      <v-toolbar-side-icon><router-link to="/dashboard"><i class="material-icons">
        view_module
      </i></router-link></v-toolbar-side-icon>

      <v-text-field
        hide-details
        prepend-icon="search"
        single-line
      ></v-text-field>
    </v-toolbar>
  </v-card>
</template>
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
