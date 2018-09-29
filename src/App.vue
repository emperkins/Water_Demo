<template>
  <v-app>
  <div id="app">
    <div id="nav">
      <v-toolbar color="indigo" dark
                 app
                 :clipped-left="clipped"
                 pa-0 ma-0
      >
        <v-toolbar-title class="hidden-sm-and-down"><router-link to="/"><img src="@/assets/FACS-Logo-transparent.svg" width="100px" alt="FACS Logo"></router-link></v-toolbar-title>
        <v-spacer></v-spacer>
      </v-toolbar>
    </div>
    <v-content>
    <router-view/>
    </v-content>
    <v-footer :fixed="fixed" app>
      <span>&copy; 2018</span>
    </v-footer>
  </div>
  </v-app>
</template>

<script>
    export default {
        data () {
            return {
                clipped: false,
                fixed: false,
                headers: [{
                    icon: 'bubble_chart'
                }],
                items: [
                    { title: 'Dashboard', icon: 'dashboard', href: 'https://facs-jc-api-demo.azurewebsites.net/dashboard' }
                ],
                buildings: [
                    ['Floor 1', 'layers', 'https://facs-jc-api-demo.azurewebsites.net/locationview'],
                    ['Floor 2', 'layers', 'https://facs-jc-api-demo.azurewebsites.net/locationview']
                ],
                admins: [
                    ['Management', 'people_outline', 'https://facs-jc-api-demo.azurewebsites.net/profileview'],
                    ['Settings', 'settings', 'https://facs-jc-api-demo.azurewebsites.net/profileview']
                ],
                cruds: [
                    ['Create', 'add'],
                    ['View', 'insert_drive_file', 'https://facs-jc-api-demo.azurewebsites.net/listview'],
                    ['Delete', 'delete']
                ],
                right: null,
                miniVariant: false,
                right: true,
                rightDrawer: false
            }
        },
        name: 'app'
    }
</script>
<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
  #nav {
    padding: 0px;
  }

  #nav a {
    font-weight: bold;
    color: #2c3e50;
    text-decoration: none;
  }

  #nav a.router-link-exact-active {
    color: #42b983;
    text-decoration: none;
  }

</style>
