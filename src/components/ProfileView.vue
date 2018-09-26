<template>
  <div>
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

  <v-card
    color="white"
    light
  >
    <v-card-media
      height="200"
      src="https://mynews4.com/resources/media/c41c78d0-6153-4230-bc27-9ee6c5539fa6-large16x9_GoldenGateBridgeSanFranciscoMGN.jpg?1526758392728"
    >
      <v-layout wrap>
        <v-flex xs12>



          <v-progress-linear
            :active="isUpdating"
            class="ma-0"
            color="green lighten-3"
            height="4"
            indeterminate
          ></v-progress-linear>
        </v-flex>
        <v-flex
          text-xs-right
          xs12
        >
          <v-menu
            bottom
            left
            transition="slide-y-transition"
          >
            <v-btn
              slot="activator"
              icon
            >
              <v-icon>more_vert</v-icon>
            </v-btn>
            <v-list>
              <v-list-tile @click="isUpdating = true">
                <v-list-tile-action>
                  <v-icon>mdi-settings</v-icon>
                </v-list-tile-action>
                <v-list-tile-content>
                  <v-list-tile-title>Update</v-list-tile-title>
                </v-list-tile-content>
              </v-list-tile>
            </v-list>
          </v-menu>
        </v-flex>
        <v-layout
          align-start
          column
          justify-end
          pa-3
        >
          <h3 class="headline white--text">{{ name }}</h3>
          <span class="grey--text text--lighten-1">{{ title }}</span>
        </v-layout>
      </v-layout>
    </v-card-media>
    <v-form>
      <v-container>
        <v-layout wrap>
          <v-flex xs12 md6>
            <v-text-field
              v-model="name"
              :disabled="isUpdating"
              box
              color="blue-grey lighten-2"
              label="Name"
            ></v-text-field>
          </v-flex>
          <v-flex xs12 md6>
            <v-text-field
              v-model="title"
              :disabled="isUpdating"
              box
              color="blue-grey lighten-2"
              label="Address"
            ></v-text-field>
          </v-flex>
          <v-flex xs12 md6>
            <v-text-field
              v-model="primary_contact"
              :disabled="isUpdating"
              box
              color="blue-grey lighten-2"
              label="Primary Contact"
            ></v-text-field>
          </v-flex>
          <v-flex xs12 md6>
            <v-text-field
              v-model="phone"
              :disabled="isUpdating"
              box
              color="blue-grey lighten-2"
              label="Phone"
            ></v-text-field>
          </v-flex>
          <v-flex xs12 md6>
            <v-text-field
              v-model="type"
              :disabled="isUpdating"
              box
              color="blue-grey lighten-2"
              label="Type"
            ></v-text-field>
          </v-flex>
          <v-flex xs12 md6>
            <v-text-field
              v-model="title"
              :disabled="isUpdating"
              box
              color="blue-grey lighten-2"
              label="Address"
            ></v-text-field>
          </v-flex>
          <v-flex xs12 md6>
            <v-text-field
              v-model="name"
              :disabled="isUpdating"
              box
              color="blue-grey lighten-2"
              label="Name"
            ></v-text-field>
          </v-flex>
          <v-flex xs12 md6>
            <v-text-field
              v-model="title"
              :disabled="isUpdating"
              box
              color="blue-grey lighten-2"
              label="Address"
            ></v-text-field>
          </v-flex>
          <v-flex xs12 md6>
            <v-text-field
              v-model="name"
              :disabled="isUpdating"
              box
              color="blue-grey lighten-2"
              label="Name"
            ></v-text-field>
          </v-flex>
          <v-flex xs12 md6>
            <v-text-field
              v-model="title"
              :disabled="isUpdating"
              box
              color="blue-grey lighten-2"
              label="Address"
            ></v-text-field>
          </v-flex>
          <v-flex xs12>
            <v-autocomplete
              v-model="friends"
              :disabled="isUpdating"
              :items="people"
              box
              chips
              color="blue-grey lighten-2"
              label="Select Location Contacts"
              item-text="name"
              item-value="name"
              multiple
            >
              <template
                slot="selection"
                slot-scope="data"
              >
                <v-chip
                  :selected="data.selected"
                  close
                  class="chip--select-multi"
                  @input="data.parent.selectItem(data.item)"
                >
                  <v-avatar>
                    <img :src="data.item.avatar">
                  </v-avatar>
                  {{ data.item.name }}
                </v-chip>
              </template>
              <template
                slot="item"
                slot-scope="data"
              >
                <template v-if="typeof data.item !== 'object'">
                  <v-list-tile-content v-text="data.item"></v-list-tile-content>
                </template>
                <template v-else>
                  <v-list-tile-avatar>
                    <img :src="data.item.avatar">
                  </v-list-tile-avatar>
                  <v-list-tile-content>
                    <v-list-tile-title v-html="data.item.name"></v-list-tile-title>
                    <v-list-tile-sub-title v-html="data.item.group"></v-list-tile-sub-title>
                  </v-list-tile-content>
                </template>
              </template>
            </v-autocomplete>
          </v-flex>
        </v-layout>
      </v-container>
    </v-form>
    <v-divider></v-divider>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn
        :loading="isUpdating"
        color="indigo white--text"
        depressed
        @click="isUpdating = true"
      >
        Update
      </v-btn>
    </v-card-actions>
  </v-card>

  </div>
</template>

<script>
  export default {
    data () {
      let srcs = {
        1: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
        2: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
        3: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
        4: 'https://cdn.vuetifyjs.com/images/lists/4.jpg',
        5: 'https://cdn.vuetifyjs.com/images/lists/5.jpg'
      }

      return {
        autoUpdate: true,
        friends: ['Sandra Adams', 'Britta Holt'],
        isUpdating: false,
        name: 'Facility 2',
        people: [
          { header: 'Group 1' },
          { name: 'Sandra Adams', group: 'Group 1', avatar: srcs[1] },
          { name: 'Ali Connors', group: 'Group 1', avatar: srcs[2] },
          { name: 'Trevor Hansen', group: 'Group 1', avatar: srcs[3] },
          { name: 'Tucker Smith', group: 'Group 1', avatar: srcs[2] },
          { divider: true },
          { header: 'Group 2' },
          { name: 'Britta Holt', group: 'Group 2', avatar: srcs[4] },
          { name: 'Jane Smith ', group: 'Group 2', avatar: srcs[5] },
          { name: 'John Smith', group: 'Group 2', avatar: srcs[1] },
          { name: 'Sandra Williams', group: 'Group 2', avatar: srcs[3] }
        ],
        title: '21228 Cabot Blvd Hayward, CA 94545',
        primary_contact: 'John Smith',
        phone: '123-456-7899',
        type: 'Facility',
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
    },

    watch: {
      isUpdating (val) {
        if (val) {
          setTimeout(() => (this.isUpdating = false), 3000)
        }
      }
    }
  }
</script>
