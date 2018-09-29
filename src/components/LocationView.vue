<template>
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
    <v-flex>
      <v-card
        class="pa-5"
        flat
      >
        <img src="@/assets/American-Demo2.jpg" width="85%" align="center">
      </v-card>

    <v-data-table
      :headers="headers1"
      :items="desserts"
      hide-actions
      class="elevation-1"
    >
      <template slot="items" slot-scope="props">
        <td>{{ props.item.name }}</td>
        <td class="text-xs-right">{{ props.item.calories }}</td>
        <td class="text-xs-right">{{ props.item.fat }}</td>
        <td class="text-xs-right">{{ props.item.carbs }}</td>
        <td class="text-xs-right">{{ props.item.protein }}</td>
        <td class="text-xs-right">{{ props.item.iron }}</td>
      </template>
    </v-data-table>

    </v-flex>
  </v-layout>


</template>

<script>
  export default {
    data () {
      return {
        headers1: [
          {
            text: 'Dessert (100g serving)',
            align: 'left',
            sortable: false,
            value: 'name'
          },
          { text: 'Calories', value: 'calories' },
          { text: 'Fat (g)', value: 'fat' },
          { text: 'Carbs (g)', value: 'carbs' },
          { text: 'Protein (g)', value: 'protein' },
          { text: 'Iron (%)', value: 'iron' }
        ],
        desserts: [
          {
            value: false,
            name: 'Frozen Yogurt',
            calories: 159,
            fat: 6.0,
            carbs: 24,
            protein: 4.0,
            iron: '1%'
          },
          {
            value: false,
            name: 'Ice cream sandwich',
            calories: 237,
            fat: 9.0,
            carbs: 37,
            protein: 4.3,
            iron: '1%'
          },
          {
            value: false,
            name: 'Eclair',
            calories: 262,
            fat: 16.0,
            carbs: 23,
            protein: 6.0,
            iron: '7%'
          },
          {
            value: false,
            name: 'Cupcake',
            calories: 305,
            fat: 3.7,
            carbs: 67,
            protein: 4.3,
            iron: '8%'
          },
          {
            value: false,
            name: 'Gingerbread',
            calories: 356,
            fat: 16.0,
            carbs: 49,
            protein: 3.9,
            iron: '16%'
          },
          {
            value: false,
            name: 'Jelly bean',
            calories: 375,
            fat: 0.0,
            carbs: 94,
            protein: 0.0,
            iron: '0%'
          },
          {
            value: false,
            name: 'Lollipop',
            calories: 392,
            fat: 0.2,
            carbs: 98,
            protein: 0,
            iron: '2%'
          },
          {
            value: false,
            name: 'Honeycomb',
            calories: 408,
            fat: 3.2,
            carbs: 87,
            protein: 6.5,
            iron: '45%'
          },
          {
            value: false,
            name: 'Donut',
            calories: 452,
            fat: 25.0,
            carbs: 51,
            protein: 4.9,
            iron: '22%'
          },
          {
            value: false,
            name: 'KitKat',
            calories: 518,
            fat: 26.0,
            carbs: 65,
            protein: 7,
            iron: '6%'
          }
        ],
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
      }
    }
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
