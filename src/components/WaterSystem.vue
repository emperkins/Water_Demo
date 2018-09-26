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
                <v-card height="100%">
                    <v-card-text>
                        <h1 class="text-lg-left">Facility 2 Water Systems</h1>
                        <hr>
                    </v-card-text>



                    <v-tabs
                            show-arrows
                            grow
                    >
                        <v-tabs-slider color="indigo"></v-tabs-slider>

                        <v-tab
                                v-for="card in cards"
                                :href="'#tab-' + card.title"
                                :key="card.title"
                        >
                            {{ card.title }}
                        </v-tab>

                        <v-tabs-items>
                            <v-tab-item
                                    v-for="card in cards"
                                    :id="'tab-' + card.title"
                                    :key="card.title"
                            >
                                                <v-flex
                                                        d-flex
                                                        xs12
                                                >
                                                    <v-card
                                                            height="100%"
                                                    >
                                                        <v-container>
                                                        <v-card-text>System Score:</v-card-text>
                                                        <v-progress-circular
                                                                :value="card.hwvalue"
                                                                :color="card.hwcolor"
                                                                size="100"
                                                        >
                                                            {{ card.score }}
                                                        </v-progress-circular>
                                                        </v-container>
                                                        <router-link to="/controlpoints"><v-btn color="indigo" dark>View {{ card.title }} Control Points</v-btn></router-link>
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
                                                    </v-card>
                                                </v-flex>
                            </v-tab-item>
                        </v-tabs-items>
                    </v-tabs>



        <v-container fluid grid-list-md>
            <v-layout row wrap>
        <v-flex d-flex>
            <v-layout row wrap>
                <v-flex
                        v-for="card in cards"
                        :key="card.title"
                        d-flex
                >
                    <router-link to="#tab-Chiller">
                    <v-card>
                        <v-card-text>{{ card.title }}</v-card-text>
                        <v-progress-circular
                                :value="card.hwvalue"
                                :color="card.hwcolor"
                                size="60"
                        >
                            Score: {{ card.score }}
                        </v-progress-circular>
                        <v-card-text></v-card-text>
                    </v-card></router-link>
                </v-flex>
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
                            title: 'Hot Water',
                            value: 90,
                            color: 'green',
                            score: 2.1,
                            hwcolor: 'info',
                            hwvalue: 20,
                            headers: [
                                {
                                    text: 'Score Type',
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
                                    name: 'Temp Score',
                                    watersrc: '/watersystem#tab-Hot Water',
                                    score: 2.1,
                                    hwcolor: 'info',
                                    hwvalue: 20
                                },
                                {
                                    value: false,
                                    name: 'Oxidant Score',
                                    watersrc: '/watersystem#tab-Hot Water',
                                    score: 2.1,
                                    hwcolor: 'info',
                                    hwvalue: 20
                                },
                                {
                                    value: false,
                                    name: 'Water Age Score',
                                    watersrc: '/watersystem#tab-Hot Water',
                                    score: 2.1,
                                    hwcolor: 'info',
                                    hwvalue: 20
                                },
                                {
                                    value: false,
                                    name: 'Frequency Score',
                                    watersrc: '/watersystem#tab-Hot Water',
                                    score: 2.1,
                                    hwcolor: 'info',
                                    hwvalue: 20
                                }
                                ]
                        },
                        {
                            title: 'Cold Water',
                            value: 50,
                            color: 'red',
                            score: 3.8,
                            hwcolor: 'warning',
                            hwvalue: 60,
                            headers: [
                                {
                                    text: 'Score Type',
                                    align: 'left',
                                    sortable: false,
                                    value: 'name'
                                },
                                {text: 'Score', value: 'score'},
                                { text: 'Progress', value: 'progress' }
                            ],
                            systems: [
                                {
                                    value: false,
                                    name: 'Temp Score',
                                    watersrc: '/watersystem#tab-Hot Water',
                                    score: 2.1,
                                    hwcolor: 'info',
                                    hwvalue: 20
                                },
                                {
                                    value: false,
                                    name: 'Oxidant Score',
                                    watersrc: '/watersystem#tab-Hot Water',
                                    score: 2.1,
                                    hwcolor: 'info',
                                    hwvalue: 20
                                },
                                {
                                    value: false,
                                    name: 'Water Age Score',
                                    watersrc: '/watersystem#tab-Hot Water',
                                    score: 2.1,
                                    hwcolor: 'info',
                                    hwvalue: 20
                                },
                                {
                                    value: false,
                                    name: 'Frequency Score',
                                    watersrc: '/watersystem#tab-Hot Water',
                                    score: 2.1,
                                    hwcolor: 'info',
                                    hwvalue: 20
                                }
                            ]
                        },
                        {
                            title: 'Incoming',
                            value: 80,
                            color: 'yellow',
                            score: 5.9,
                            hwcolor: 'success',
                            hwvalue: 90,
                            headers: [
                                {
                                    text: 'Score Type',
                                    align: 'left',
                                    sortable: false,
                                    value: 'name'
                                },
                                {text: 'Score', value: 'score'},
                                { text: 'Progress', value: 'progress' }
                            ],
                            systems: [
                                {
                                    value: false,
                                    name: 'Temp Score',
                                    watersrc: '/watersystem#tab-Hot Water',
                                    score: 2.1,
                                    hwcolor: 'info',
                                    hwvalue: 20
                                },
                                {
                                    value: false,
                                    name: 'Oxidant Score',
                                    watersrc: '/watersystem#tab-Hot Water',
                                    score: 2.1,
                                    hwcolor: 'info',
                                    hwvalue: 20
                                },
                                {
                                    value: false,
                                    name: 'Water Age Score',
                                    watersrc: '/watersystem#tab-Hot Water',
                                    score: 2.1,
                                    hwcolor: 'info',
                                    hwvalue: 20
                                },
                                {
                                    value: false,
                                    name: 'Frequency Score',
                                    watersrc: '/watersystem#tab-Hot Water',
                                    score: 2.1,
                                    hwcolor: 'info',
                                    hwvalue: 20
                                }
                            ]
                        },
                        {
                            title: 'Chiller',
                            value: 60,
                            color: 'orange',
                            score: 1.0,
                            hwcolor: 'error',
                            hwvalue: 10,
                            headers: [
                                {
                                    text: 'Score Type',
                                    align: 'left',
                                    sortable: false,
                                    value: 'name'
                                },
                                {text: 'Score', value: 'score'},
                                { text: 'Progress', value: 'progress' }
                            ],
                            systems: [
                                {
                                    value: false,
                                    name: 'Temp Score',
                                    watersrc: '/watersystem#tab-Hot Water',
                                    score: 2.1,
                                    hwcolor: 'info',
                                    hwvalue: 20
                                },
                                {
                                    value: false,
                                    name: 'Oxidant Score',
                                    watersrc: '/watersystem#tab-Hot Water',
                                    score: 2.1,
                                    hwcolor: 'info',
                                    hwvalue: 20
                                },
                                {
                                    value: false,
                                    name: 'Water Age Score',
                                    watersrc: '/watersystem#tab-Hot Water',
                                    score: 2.1,
                                    hwcolor: 'info',
                                    hwvalue: 20
                                },
                                {
                                    value: false,
                                    name: 'Frequency Score',
                                    watersrc: '/watersystem#tab-Hot Water',
                                    score: 2.1,
                                    hwcolor: 'info',
                                    hwvalue: 20
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
            text: 'Lorem ipsum dolor sit amet,',
            lorem: 'Lorem ipsum dolor sit amet,',
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
