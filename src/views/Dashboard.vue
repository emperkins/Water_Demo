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
      <v-toolbar color="white" light>
        <v-toolbar-side-icon><router-link to="/mapview"><i class="material-icons">
          room
        </i></router-link></v-toolbar-side-icon>


        <v-btn icon>
          <v-icon>search</v-icon>
        </v-btn>
      </v-toolbar>
      <v-card
        height="100%">
        <v-container
          fluid
          grid-list-md
        >
          <v-layout row wrap>
            <v-container fluid grid-list-md>
              <v-layout row wrap>
                <v-flex
                        v-for="card in cards"
                        :key="card.title"
                        d-flex xs12 sm6 md4>
                  <v-card>

                  <router-link to="/profileview">
                    <v-card-media
                            :src="card.src"
                            height="200px"
                    >
                      <v-container
                              fill-height
                              fluid
                              pa-2
                      >
                        <v-layout fill-height>
                          <v-flex xs3 align-end flexbox>
                            <span class="headline white--text" v-text="card.title"></span>
                          </v-flex>
                        </v-layout>
                      </v-container>
                    </v-card-media></router-link>

                  <v-card-actions>
                    <v-container fluid grid-list-sm>
                      <v-layout>
                        <v-img
                                :src="card.polar"
                                :lazy-src="card.polar"
                                aspect-ratio="1"
                                height="auto"
                                width="50%"
                                contain
                                class="white lighten-2"
                        ></v-img>
                        <v-progress-circular
                                :value="card.value"
                                :color="card.color"
                                size="80"
                        >
                          {{ card.value }}
                        </v-progress-circular>
                      </v-layout>
                      </v-containter>
                      <v-container>
                        <v-data-table
                                :headers="card.headers"
                                :items="card.systems"
                                hide-actions
                                class="elevation-1"
                        >
                          <template slot="items" slot-scope="props">

                            <td><router-link to="/watersystem">{{ props.item.name }}</router-link></td>
                            <td class="text-xs-right">{{ props.item.score }}</td>
                            <td class="text-xs-right">
                              <v-progress-linear
                                      :color="props.item.hwcolor"
                                      height="10"
                                      :value="props.item.hwvalue"
                              ></v-progress-linear></td>
                          </template>
                        </v-data-table>
                      </v-container>
                  </v-card-actions>
                </v-card>
                </v-flex>
              </v-layout>
            </v-container>
          </v-layout>
        </v-container>
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
      cards: [
        {
            title: 'Facility 1',
            src: 'https://forensicanalytical.com/wp-content/uploads/2018/08/Downtown-Los-Angeles-Aerial-View-600x400-1.jpg',
            value: 80,
            color: 'yellow',
            flex: 4,
            polar: 'https://d2mvzyuse3lwjc.cloudfront.net/doc/en/Tutorial/images/Polar_Plot_with_Error_Bar/Polar_Plot_with_Error_Bar_06.png',
            headers: [
                {
                    text: 'Water System',
                    align: 'left',
                    sortable: false,
                    value: 'name'
                },
                { text: 'Score', value: 'score' },
                { text: 'Progress', value: 'progress' }
            ],
            systems: [
                {
                    value: false,
                    name: 'Hot Water',
                    watersrc: '/watersystem#tab-Hot Water',
                    score: 2.1,
                    hwcolor: 'info',
                    hwvalue: 20
                },
                {
                    value: false,
                    name: 'Cold Water',
                    watersrc: '/watersystem#tab-Cold Water',
                    score: 3.8,
                    hwcolor: 'warning',
                    hwvalue: 60
                },
                {
                    value: false,
                    name: 'Incoming',
                    watersrc: '/watersystem#tab-Incoming',
                    score: 5.9,
                    hwcolor: 'success',
                    hwvalue: 90
                },
                {
                    value: false,
                    name: 'Chiller',
                    watersrc: '/watersystem#tab-Chiller',
                    score: 1.0,
                    hwcolor: 'error',
                    hwvalue: 10
                }
            ]
        },
        {
            title: 'Facility 2',
            src: 'https://forensicanalytical.com/wp-content/uploads/2018/08/San-Francisco-Golden-Gate-Bridge-600x400.jpg',
            value: 50,
            color: 'red',
            flex: 4,
            polar: 'https://d2mvzyuse3lwjc.cloudfront.net/doc/en/Tutorial/images/Polar_Plot_with_Error_Bar/Polar_Plot_with_Error_Bar_06.png',
            headers: [
                {
                    text: 'Water System',
                    align: 'left',
                    sortable: false,
                    value: 'name'
                },
                { text: 'Score', value: 'score' },
                { text: 'Progress', value: 'progress' }
            ],
            systems: [
                {
                    value: false,
                    name: 'Hot Water',
                    score: 2.1,
                    hwcolor: 'info',
                    hwvalue: 20
                },
                {
                    value: false,
                    name: 'Cold Water',
                    score: 3.8,
                    hwcolor: 'warning',
                    hwvalue: 60
                },
                {
                    value: false,
                    name: 'Incoming',
                    score: 5.9,
                    hwcolor: 'success',
                    hwvalue: 90
                },
                {
                    value: false,
                    name: 'Chiller',
                    score: 1.0,
                    hwcolor: 'error',
                    hwvalue: 10
                }
            ]
        },
        {
            title: 'Facility 3',
            src: 'https://forensicanalytical.com/wp-content/uploads/2018/08/San-Diego-Skyline-600x400-1.jpg',
            value: 90,
            color: 'green',
            flex: 4,
            polar: 'https://d2mvzyuse3lwjc.cloudfront.net/doc/en/Tutorial/images/Polar_Plot_with_Error_Bar/Polar_Plot_with_Error_Bar_06.png',
            headers: [
                {
                    text: 'Water System',
                    align: 'left',
                    sortable: false,
                    value: 'name'
                },
                { text: 'Score', value: 'score' },
                { text: 'Progress', value: 'progress' }
            ],
            systems: [
                {
                    value: false,
                    name: 'Hot Water',
                    score: 2.1,
                    hwcolor: 'info',
                    hwvalue: 20
                },
                {
                    value: false,
                    name: 'Cold Water',
                    score: 3.8,
                    hwcolor: 'warning',
                    hwvalue: 60
                },
                {
                    value: false,
                    name: 'Incoming',
                    score: 5.9,
                    hwcolor: 'success',
                    hwvalue: 90
                },
                {
                    value: false,
                    name: 'Chiller',
                    score: 1.0,
                    hwcolor: 'error',
                    hwvalue: 10
                }
            ]
        },
        {
            title: 'Facility 4',
            src: 'https://forensicanalytical.com/wp-content/uploads/2018/08/Sacramento-Gold-Tower-Bridge-600x401.jpg',
            value: 20,
            color: 'red',
            flex: 4,
            polar: 'https://d2mvzyuse3lwjc.cloudfront.net/doc/en/Tutorial/images/Polar_Plot_with_Error_Bar/Polar_Plot_with_Error_Bar_06.png',
            headers: [
                {
                    text: 'Water System',
                    align: 'left',
                    sortable: false,
                    value: 'name'
                },
                { text: 'Score', value: 'score' },
                { text: 'Progress', value: 'progress' }
            ],
            systems: [
                {
                    value: false,
                    name: 'Hot Water',
                    score: 2.1,
                    hwcolor: 'info',
                    hwvalue: 20
                },
                {
                    value: false,
                    name: 'Cold Water',
                    score: 3.8,
                    hwcolor: 'warning',
                    hwvalue: 60
                },
                {
                    value: false,
                    name: 'Incoming',
                    score: 5.9,
                    hwcolor: 'success',
                    hwvalue: 90
                },
                {
                    value: false,
                    name: 'Chiller',
                    score: 1.0,
                    hwcolor: 'error',
                    hwvalue: 10
                }
            ]
        },
        {
            title: 'Facility 5',
            src: 'https://forensicanalytical.com/wp-content/uploads/2018/08/Downtown-Los-Angeles-Aerial-View-600x400-1.jpg',
            value: 100,
            color: 'green',
            flex: 4,
            polar: 'https://d2mvzyuse3lwjc.cloudfront.net/doc/en/Tutorial/images/Polar_Plot_with_Error_Bar/Polar_Plot_with_Error_Bar_06.png',
            headers: [
                {
                    text: 'Water System',
                    align: 'left',
                    sortable: false,
                    value: 'name'
                },
                { text: 'Score', value: 'score' },
                { text: 'Progress', value: 'progress' }
            ],
            systems: [
                {
                    value: false,
                    name: 'Hot Water',
                    score: 2.1,
                    hwcolor: 'info',
                    hwvalue: 20
                },
                {
                    value: false,
                    name: 'Cold Water',
                    score: 3.8,
                    hwcolor: 'warning',
                    hwvalue: 60
                },
                {
                    value: false,
                    name: 'Incoming',
                    score: 5.9,
                    hwcolor: 'success',
                    hwvalue: 90
                },
                {
                    value: false,
                    name: 'Chiller',
                    score: 1.0,
                    hwcolor: 'error',
                    hwvalue: 10
                }
            ]
        },
        {
            title: 'Facility 6',
            src: 'https://forensicanalytical.com/wp-content/uploads/2018/08/San-Francisco-Golden-Gate-Bridge-600x400.jpg',
            value: 50,
            color: 'red',
            flex: 4,
            polar: 'https://d2mvzyuse3lwjc.cloudfront.net/doc/en/Tutorial/images/Polar_Plot_with_Error_Bar/Polar_Plot_with_Error_Bar_06.png',
            headers: [
                {
                    text: 'Water System',
                    align: 'left',
                    sortable: false,
                    value: 'name'
                },
                { text: 'Score', value: 'score' },
                { text: 'Progress', value: 'progress' }
            ],
            systems: [
                {
                    value: false,
                    name: 'Hot Water',
                    score: 2.1,
                    hwcolor: 'info',
                    hwvalue: 20
                },
                {
                    value: false,
                    name: 'Cold Water',
                    score: 3.8,
                    hwcolor: 'warning',
                    hwvalue: 60
                },
                {
                    value: false,
                    name: 'Incoming',
                    score: 5.9,
                    hwcolor: 'success',
                    hwvalue: 90
                },
                {
                    value: false,
                    name: 'Chiller',
                    score: 1.0,
                    hwcolor: 'error',
                    hwvalue: 10
                }
            ]
        },
        {
            title: 'Facility 7',
            src: 'https://forensicanalytical.com/wp-content/uploads/2018/08/San-Diego-Skyline-600x400-1.jpg',
            value: 60,
            color: 'orange',
            flex: 4,
            polar: 'https://d2mvzyuse3lwjc.cloudfront.net/doc/en/Tutorial/images/Polar_Plot_with_Error_Bar/Polar_Plot_with_Error_Bar_06.png',
            headers: [
                {
                    text: 'Water System',
                    align: 'left',
                    sortable: false,
                    value: 'name'
                },
                { text: 'Score', value: 'score' },
                { text: 'Progress', value: 'progress' }
            ],
            systems: [
                {
                    value: false,
                    name: 'Hot Water',
                    score: 2.1,
                    hwcolor: 'info',
                    hwvalue: 20
                },
                {
                    value: false,
                    name: 'Cold Water',
                    score: 3.8,
                    hwcolor: 'warning',
                    hwvalue: 60
                },
                {
                    value: false,
                    name: 'Incoming',
                    score: 5.9,
                    hwcolor: 'success',
                    hwvalue: 90
                },
                {
                    value: false,
                    name: 'Chiller',
                    score: 1.0,
                    hwcolor: 'error',
                    hwvalue: 10
                }
            ]
        },
        {
            title: 'Facility 8',
            src: 'https://forensicanalytical.com/wp-content/uploads/2018/08/Sacramento-Gold-Tower-Bridge-600x401.jpg',
            value: 100,
            color: 'green',
            flex: 4,
            polar: 'https://d2mvzyuse3lwjc.cloudfront.net/doc/en/Tutorial/images/Polar_Plot_with_Error_Bar/Polar_Plot_with_Error_Bar_06.png',
            headers: [
                {
                    text: 'Water System',
                    align: 'left',
                    sortable: false,
                    value: 'name'
                },
                { text: 'Score', value: 'score' },
                { text: 'Progress', value: 'progress' }
            ],
            systems: [
                {
                    value: false,
                    name: 'Hot Water',
                    score: 2.1,
                    hwcolor: 'info',
                    hwvalue: 20
                },
                {
                    value: false,
                    name: 'Cold Water',
                    score: 3.8,
                    hwcolor: 'warning',
                    hwvalue: 60
                },
                {
                    value: false,
                    name: 'Incoming',
                    score: 5.9,
                    hwcolor: 'success',
                    hwvalue: 90
                },
                {
                    value: false,
                    name: 'Chiller',
                    score: 1.0,
                    hwcolor: 'error',
                    hwvalue: 10
                }
            ]
        },
        {
            title: 'Facility 9',
            src: 'https://forensicanalytical.com/wp-content/uploads/2018/08/Downtown-Los-Angeles-Aerial-View-600x400-1.jpg',
            value: 80,
            color: 'yellow',
            flex: 4,
            polar: 'https://d2mvzyuse3lwjc.cloudfront.net/doc/en/Tutorial/images/Polar_Plot_with_Error_Bar/Polar_Plot_with_Error_Bar_06.png',
            headers: [
                {
                    text: 'Water System',
                    align: 'left',
                    sortable: false,
                    value: 'name'
                },
                { text: 'Score', value: 'score' },
                { text: 'Progress', value: 'progress' }
            ],
            systems: [
                {
                    value: false,
                    name: 'Hot Water',
                    score: 2.1,
                    hwcolor: 'info',
                    hwvalue: 20
                },
                {
                    value: false,
                    name: 'Cold Water',
                    score: 3.8,
                    hwcolor: 'warning',
                    hwvalue: 60
                },
                {
                    value: false,
                    name: 'Incoming',
                    score: 5.9,
                    hwcolor: 'success',
                    hwvalue: 90
                },
                {
                    value: false,
                    name: 'Chiller',
                    score: 1.0,
                    hwcolor: 'error',
                    hwvalue: 10
                }
            ]
        },
        {
            title: 'Facility 10',
            src: 'https://forensicanalytical.com/wp-content/uploads/2018/08/San-Francisco-Golden-Gate-Bridge-600x400.jpg',
            value: 100,
            color: 'green',
            flex: 4,
            polar: 'https://d2mvzyuse3lwjc.cloudfront.net/doc/en/Tutorial/images/Polar_Plot_with_Error_Bar/Polar_Plot_with_Error_Bar_06.png',
            headers: [
                {
                    text: 'Water System',
                    align: 'left',
                    sortable: false,
                    value: 'name'
                },
                { text: 'Score', value: 'score' },
                { text: 'Progress', value: 'progress' }
            ],
            systems: [
                {
                    value: false,
                    name: 'Hot Water',
                    score: 2.1,
                    hwcolor: 'info',
                    hwvalue: 20
                },
                {
                    value: false,
                    name: 'Cold Water',
                    score: 3.8,
                    hwcolor: 'warning',
                    hwvalue: 60
                },
                {
                    value: false,
                    name: 'Incoming',
                    score: 5.9,
                    hwcolor: 'success',
                    hwvalue: 90
                },
                {
                    value: false,
                    name: 'Chiller',
                    score: 1.0,
                    hwcolor: 'error',
                    hwvalue: 10
                }
            ]
        },
        {
            title: 'Facility 11',
            src: 'https://forensicanalytical.com/wp-content/uploads/2018/08/San-Diego-Skyline-600x400-1.jpg',
            value: 50,
            color: 'red',
            flex: 4,
            polar: 'https://d2mvzyuse3lwjc.cloudfront.net/doc/en/Tutorial/images/Polar_Plot_with_Error_Bar/Polar_Plot_with_Error_Bar_06.png',
            headers: [
                {
                    text: 'Water System',
                    align: 'left',
                    sortable: false,
                    value: 'name'
                },
                { text: 'Score', value: 'score' },
                { text: 'Progress', value: 'progress' }
            ],
            systems: [
                {
                    value: false,
                    name: 'Hot Water',
                    score: 2.1,
                    hwcolor: 'info',
                    hwvalue: 20
                },
                {
                    value: false,
                    name: 'Cold Water',
                    score: 3.8,
                    hwcolor: 'warning',
                    hwvalue: 60
                },
                {
                    value: false,
                    name: 'Incoming',
                    score: 5.9,
                    hwcolor: 'success',
                    hwvalue: 90
                },
                {
                    value: false,
                    name: 'Chiller',
                    score: 1.0,
                    hwcolor: 'error',
                    hwvalue: 10
                }
            ]
        },
        {
            title: 'Facility 12',
            src: 'https://forensicanalytical.com/wp-content/uploads/2018/08/Sacramento-Gold-Tower-Bridge-600x401.jpg',
            value: 80,
            color: 'yellow',
            flex: 4,
            polar: 'https://d2mvzyuse3lwjc.cloudfront.net/doc/en/Tutorial/images/Polar_Plot_with_Error_Bar/Polar_Plot_with_Error_Bar_06.png',
            headers: [
                {
                    text: 'Water System',
                    align: 'left',
                    sortable: false,
                    value: 'name'
                },
                { text: 'Score', value: 'score' },
                { text: 'Progress', value: 'progress' }
            ],
            systems: [
                {
                    value: false,
                    name: 'Hot Water',
                    score: 2.1,
                    hwcolor: 'info',
                    hwvalue: 20
                },
                {
                    value: false,
                    name: 'Cold Water',
                    score: 3.8,
                    hwcolor: 'warning',
                    hwvalue: 60
                },
                {
                    value: false,
                    name: 'Incoming',
                    score: 5.9,
                    hwcolor: 'success',
                    hwvalue: 90
                },
                {
                    value: false,
                    name: 'Chiller',
                    score: 1.0,
                    hwcolor: 'error',
                    hwvalue: 10
                }
            ]
        },
        {
            title: 'Facility 13',
            src: 'https://forensicanalytical.com/wp-content/uploads/2018/08/Downtown-Los-Angeles-Aerial-View-600x400-1.jpg',
            value: 60,
            color: 'orange',
            flex: 4,
            polar: 'https://d2mvzyuse3lwjc.cloudfront.net/doc/en/Tutorial/images/Polar_Plot_with_Error_Bar/Polar_Plot_with_Error_Bar_06.png',
            headers: [
                {
                    text: 'Water System',
                    align: 'left',
                    sortable: false,
                    value: 'name'
                },
                { text: 'Score', value: 'score' },
                { text: 'Progress', value: 'progress' }
            ],
            systems: [
                {
                    value: false,
                    name: 'Hot Water',
                    score: 2.1,
                    hwcolor: 'info',
                    hwvalue: 20
                },
                {
                    value: false,
                    name: 'Cold Water',
                    score: 3.8,
                    hwcolor: 'warning',
                    hwvalue: 60
                },
                {
                    value: false,
                    name: 'Incoming',
                    score: 5.9,
                    hwcolor: 'success',
                    hwvalue: 90
                },
                {
                    value: false,
                    name: 'Chiller',
                    score: 1.0,
                    hwcolor: 'error',
                    hwvalue: 10
                }
            ]
        },
        {
            title: 'Facility 14',
            src: 'https://forensicanalytical.com/wp-content/uploads/2018/08/San-Francisco-Golden-Gate-Bridge-600x400.jpg',
            value: 100,
            color: 'green',
            flex: 4,
            polar: 'https://d2mvzyuse3lwjc.cloudfront.net/doc/en/Tutorial/images/Polar_Plot_with_Error_Bar/Polar_Plot_with_Error_Bar_06.png',
            headers: [
                {
                    text: 'Water System',
                    align: 'left',
                    sortable: false,
                    value: 'name'
                },
                { text: 'Score', value: 'score' },
                { text: 'Progress', value: 'progress' }
            ],
            systems: [
                {
                    value: false,
                    name: 'Hot Water',
                    score: 2.1,
                    hwcolor: 'info',
                    hwvalue: 20
                },
                {
                    value: false,
                    name: 'Cold Water',
                    score: 3.8,
                    hwcolor: 'warning',
                    hwvalue: 60
                },
                {
                    value: false,
                    name: 'Incoming',
                    score: 5.9,
                    hwcolor: 'success',
                    hwvalue: 90
                },
                {
                    value: false,
                    name: 'Chiller',
                    score: 1.0,
                    hwcolor: 'error',
                    hwvalue: 10
                }
            ]
        },
        {
            title: 'Facility 15',
            src: 'https://forensicanalytical.com/wp-content/uploads/2018/08/San-Diego-Skyline-600x400-1.jpg',
            value: 50,
            color: 'red',
            flex: 4,
            polar: 'https://d2mvzyuse3lwjc.cloudfront.net/doc/en/Tutorial/images/Polar_Plot_with_Error_Bar/Polar_Plot_with_Error_Bar_06.png',
            headers: [
                {
                    text: 'Water System',
                    align: 'left',
                    sortable: false,
                    value: 'name'
                },
                { text: 'Score', value: 'score' },
                { text: 'Progress', value: 'progress' }
            ],
            systems: [
                {
                    value: false,
                    name: 'Hot Water',
                    score: 2.1,
                    hwcolor: 'info',
                    hwvalue: 20
                },
                {
                    value: false,
                    name: 'Cold Water',
                    score: 3.8,
                    hwcolor: 'warning',
                    hwvalue: 60
                },
                {
                    value: false,
                    name: 'Incoming',
                    score: 5.9,
                    hwcolor: 'success',
                    hwvalue: 90
                },
                {
                    value: false,
                    name: 'Chiller',
                    score: 1.0,
                    hwcolor: 'error',
                    hwvalue: 10
                }
            ]
        },
        {
            title: 'Facility 16',
            src: 'https://forensicanalytical.com/wp-content/uploads/2018/08/Sacramento-Gold-Tower-Bridge-600x401.jpg',
            value: 80,
            color: 'yellow',
            flex: 4,
            polar: 'https://d2mvzyuse3lwjc.cloudfront.net/doc/en/Tutorial/images/Polar_Plot_with_Error_Bar/Polar_Plot_with_Error_Bar_06.png',
            headers: [
                {
                    text: 'Water System',
                    align: 'left',
                    sortable: false,
                    value: 'name'
                },
                { text: 'Score', value: 'score' },
                { text: 'Progress', value: 'progress' }
            ],
            systems: [
                {
                    value: false,
                    name: 'Hot Water',
                    score: 2.1,
                    hwcolor: 'info',
                    hwvalue: 20
                },
                {
                    value: false,
                    name: 'Cold Water',
                    score: 3.8,
                    hwcolor: 'warning',
                    hwvalue: 60
                },
                {
                    value: false,
                    name: 'Incoming',
                    score: 5.9,
                    hwcolor: 'success',
                    hwvalue: 90
                },
                {
                    value: false,
                    name: 'Chiller',
                    score: 1.0,
                    hwcolor: 'error',
                    hwvalue: 10
                }
            ]
        },
        {
            title: 'Facility 17',
            src: 'https://forensicanalytical.com/wp-content/uploads/2018/08/Downtown-Los-Angeles-Aerial-View-600x400-1.jpg',
            value: 60,
            color: 'orange',
            flex: 4,
            polar: 'https://d2mvzyuse3lwjc.cloudfront.net/doc/en/Tutorial/images/Polar_Plot_with_Error_Bar/Polar_Plot_with_Error_Bar_06.png',
            headers: [
                {
                    text: 'Water System',
                    align: 'left',
                    sortable: false,
                    value: 'name'
                },
                { text: 'Score', value: 'score' },
                { text: 'Progress', value: 'progress' }
            ],
            systems: [
                {
                    value: false,
                    name: 'Hot Water',
                    score: 2.1,
                    hwcolor: 'info',
                    hwvalue: 20
                },
                {
                    value: false,
                    name: 'Cold Water',
                    score: 3.8,
                    hwcolor: 'warning',
                    hwvalue: 60
                },
                {
                    value: false,
                    name: 'Incoming',
                    score: 5.9,
                    hwcolor: 'success',
                    hwvalue: 90
                },
                {
                    value: false,
                    name: 'Chiller',
                    score: 1.0,
                    hwcolor: 'error',
                    hwvalue: 10
                }
            ]
        },
        {
            title: 'Facility 18',
            src: 'https://forensicanalytical.com/wp-content/uploads/2018/08/San-Francisco-Golden-Gate-Bridge-600x400.jpg',
            value: 100,
            color: 'green',
            flex: 4,
            polar: 'https://d2mvzyuse3lwjc.cloudfront.net/doc/en/Tutorial/images/Polar_Plot_with_Error_Bar/Polar_Plot_with_Error_Bar_06.png',
            headers: [
                {
                    text: 'Water System',
                    align: 'left',
                    sortable: false,
                    value: 'name'
                },
                { text: 'Score', value: 'score' },
                { text: 'Progress', value: 'progress' }
            ],
            systems: [
                {
                    value: false,
                    name: 'Hot Water',
                    score: 2.1,
                    hwcolor: 'info',
                    hwvalue: 20
                },
                {
                    value: false,
                    name: 'Cold Water',
                    score: 3.8,
                    hwcolor: 'warning',
                    hwvalue: 60
                },
                {
                    value: false,
                    name: 'Incoming',
                    score: 5.9,
                    hwcolor: 'success',
                    hwvalue: 90
                },
                {
                    value: false,
                    name: 'Chiller',
                    score: 1.0,
                    hwcolor: 'error',
                    hwvalue: 10
                }
            ]
        },
        {
            title: 'Facility 19',
            src: 'https://forensicanalytical.com/wp-content/uploads/2018/08/San-Diego-Skyline-600x400-1.jpg',
            value: 60,
            color: 'orange',
            flex: 4,
            polar: 'https://d2mvzyuse3lwjc.cloudfront.net/doc/en/Tutorial/images/Polar_Plot_with_Error_Bar/Polar_Plot_with_Error_Bar_06.png',
            headers: [
                {
                    text: 'Water System',
                    align: 'left',
                    sortable: false,
                    value: 'name'
                },
                { text: 'Score', value: 'score' },
                { text: 'Progress', value: 'progress' }
            ],
            systems: [
                {
                    value: false,
                    name: 'Hot Water',
                    score: 2.1,
                    hwcolor: 'info',
                    hwvalue: 20
                },
                {
                    value: false,
                    name: 'Cold Water',
                    score: 3.8,
                    hwcolor: 'warning',
                    hwvalue: 60
                },
                {
                    value: false,
                    name: 'Incoming',
                    score: 5.9,
                    hwcolor: 'success',
                    hwvalue: 90
                },
                {
                    value: false,
                    name: 'Chiller',
                    score: 1.0,
                    hwcolor: 'error',
                    hwvalue: 10
                }
            ]
        },
        {
            title: 'Facility 20',
            src: 'https://forensicanalytical.com/wp-content/uploads/2018/08/Sacramento-Gold-Tower-Bridge-600x401.jpg',
            value: 60,
            color: 'orange',
            flex: 4,
            polar: 'https://d2mvzyuse3lwjc.cloudfront.net/doc/en/Tutorial/images/Polar_Plot_with_Error_Bar/Polar_Plot_with_Error_Bar_06.png',
            headers: [
                {
                    text: 'Water System',
                    align: 'left',
                    sortable: false,
                    value: 'name'
                },
                { text: 'Score', value: 'score' },
                { text: 'Progress', value: 'progress' }
            ],
            systems: [
                {
                    value: false,
                    name: 'Hot Water',
                    score: 2.1,
                    hwcolor: 'info',
                    hwvalue: 20
                },
                {
                    value: false,
                    name: 'Cold Water',
                    score: 3.8,
                    hwcolor: 'warning',
                    hwvalue: 60
                },
                {
                    value: false,
                    name: 'Incoming',
                    score: 5.9,
                    hwcolor: 'success',
                    hwvalue: 90
                },
                {
                    value: false,
                    name: 'Chiller',
                    score: 1.0,
                    hwcolor: 'error',
                    hwvalue: 10
                }
            ]
        },
        {
            title: 'Facility 21',
            src: 'https://forensicanalytical.com/wp-content/uploads/2018/08/Downtown-Los-Angeles-Aerial-View-600x400-1.jpg',
            value: 100,
            color: 'green',
            flex: 4,
            polar: 'https://d2mvzyuse3lwjc.cloudfront.net/doc/en/Tutorial/images/Polar_Plot_with_Error_Bar/Polar_Plot_with_Error_Bar_06.png',
            headers: [
                {
                    text: 'Water System',
                    align: 'left',
                    sortable: false,
                    value: 'name'
                },
                { text: 'Score', value: 'score' },
                { text: 'Progress', value: 'progress' }
            ],
            systems: [
                {
                    value: false,
                    name: 'Hot Water',
                    score: 2.1,
                    hwcolor: 'info',
                    hwvalue: 20
                },
                {
                    value: false,
                    name: 'Cold Water',
                    score: 3.8,
                    hwcolor: 'warning',
                    hwvalue: 60
                },
                {
                    value: false,
                    name: 'Incoming',
                    score: 5.9,
                    hwcolor: 'success',
                    hwvalue: 90
                },
                {
                    value: false,
                    name: 'Chiller',
                    score: 1.0,
                    hwcolor: 'error',
                    hwvalue: 10
                }
            ]
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
