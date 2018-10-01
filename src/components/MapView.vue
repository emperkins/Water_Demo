<template>
  <div>
    <v-layout row>
  <div>
    <v-navigation-drawer
            persistent
            :mini-variant="miniVariant"
            :clipped="clipped"
            v-model="drawer"
            enable-resize-watcher
            fixed
            app
    >
      <v-list>
        <v-list-tile
                value="true"
                v-for="(header, i) in headers"
                :key="i"
        >
          <v-list-tile-action>
            <v-icon v-html="header.icon"></v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title><router-link to="/">FACS Water</router-link></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>

      <v-divider></v-divider>

      <v-list dense class="pt-0">
        <v-list-tile
                v-for="item in items"
                :key="item.title"
                :href="item.href"
                @click=""
        >
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>

          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>

      <v-list>
        <v-list-group
                prepend-icon="location_city"
                value="true"
        >
          <v-list-tile slot="activator">
            <v-list-tile-title>Facility 2</v-list-tile-title>
          </v-list-tile>



          <v-list-group
                  no-action
                  sub-group
                  value="true"
          >
            <v-list-tile slot="activator">
              <v-list-tile-title>Location Profile</v-list-tile-title>
            </v-list-tile>

            <v-list-tile
                    v-for="(admin, i) in admins"
                    :key="i"
                    :href="admin[2]"
                    @click=""
            >
              <v-list-tile-title v-text="admin[0]"></v-list-tile-title>
              <v-list-tile-action>
                <v-icon v-text="admin[1]"></v-icon>
              </v-list-tile-action>
            </v-list-tile>
          </v-list-group>

          <v-list-group
                  no-action
                  sub-group
                  value="true"
          >
            <v-list-tile slot="activator">
              <v-list-tile-title>Building Diagrams</v-list-tile-title>
            </v-list-tile>

            <v-list-tile
                    v-for="(building, i) in buildings"
                    :key="i"
                    :href="building[2]"
                    @click=""
            >
              <v-list-tile-title v-text="building[0]"></v-list-tile-title>
              <v-list-tile-action>
                <v-icon v-text="building[1]"></v-icon>
              </v-list-tile-action>
            </v-list-tile>
          </v-list-group>

          <v-list-group
                  sub-group
                  no-action
          >
            <v-list-tile slot="activator">
              <v-list-tile-title>Documents</v-list-tile-title>
            </v-list-tile>

            <v-list-tile
                    v-for="(crud, i) in cruds"
                    :key="i"
                    :href="crud[2]"
                    @click=""
            >
              <v-list-tile-title v-text="crud[0]"></v-list-tile-title>
              <v-list-tile-action>
                <v-icon v-text="crud[1]"></v-icon>
              </v-list-tile-action>
            </v-list-tile>
          </v-list-group>
        </v-list-group>
      </v-list>
      <v-list>
        <v-list-tile
                value="true"
                v-for="(header, i) in headers"
                :key="i"
        >
          <v-list-tile-action>
            <v-icon v-html=" "></v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title @click="handleLogout()">Log Out</v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar color="indigo" dark
               app
               :clipped-left="clipped"
    >
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title class="hidden-sm-and-down"><router-link to="/"><img src="@/assets/FACS-Logo-transparent.svg" width="100px"></router-link></v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn flat small @click="handleLogout()">Log Out</v-btn>
    </v-toolbar>
  </div>
      <v-flex xs12>
  <v-card
    class="pa-3"
    flat
    height="900px"
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
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
    import Auth from './../auth/AuthService';
    const auth = new Auth();
    export default {
        methods: {
            handleLogout() {
                auth.logout();
            }
        },
        data: () => ({
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
            drawer: false
        })
    }
</script>

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
