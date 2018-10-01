<template>
    <div id="app" style="height:100%; min-width: 30%;">
        <v-app id="inspire">
            <div
                    id="e3"
                    style="height: 100%; margin: auto;"
                    class="grey lighten-3"
            >
                <v-toolbar
                        color="indigo"
                        dark
                >
                    <v-toolbar-side-icon></v-toolbar-side-icon>
                    <v-toolbar-title>Facility Name</v-toolbar-title>
                    <v-spacer></v-spacer>
                    <v-btn icon>
                        <v-icon>search</v-icon>
                    </v-btn>
                </v-toolbar>

                <v-card
                        height="94%">
                    <v-container
                            fluid
                            grid-list-lg
                    >
                        <v-layout row wrap>

                                <v-layout row wrap>
                                    <v-container fluid grid-list-md>
                                        <v-layout row wrap>
                                            <v-flex d-flex xs12 sm12 md4>
                                                <v-card flat="true" color="white" class="black--text">
                                                    <v-layout>
                                                        <v-card-title
                                                                v-for="card in cards"
                                                                :key="card.title"
                                                                primary-title>
                                                            <div>
                                                            <div>System Score: </div>
                                                            <div class="headline" color="red">{{card.value}}</div>
                                                            </div>
                                                        </v-card-title>
                                                    </v-layout>
                                                </v-card>
                                            </v-flex>
                                        <v-flex d-flex xs12 sm12 md8>
                                            <v-card flat="true" color="white" class="black--text">
                                                <v-layout>
                                        <div style="align-content: center; width: 90%">
                                            <Polar/>
                                        </div>
                                                </v-layout>
                                            </v-card>
                                        </v-flex>
                                        </v-layout>
                                    </v-container>
                                </v-layout>
                            <v-container>
                                <v-data-table
                                        v-for="card in cards"
                                        :key="card.title"
                                        :headers="card.headers"
                                        :items="card.systems"
                                        hide-actions
                                        class="elevation-1"
                                >
                                    <template slot="items" slot-scope="props">

                                        <td><router-link to="/watersystem">{{ props.item.name }}</router-link></td>
                                        <td class="text-xs-right">{{ props.item.score }}</td>
                                    </template>
                                </v-data-table>
                            </v-container>
                        </v-layout>
                    </v-container>
                </v-card>
            </div>
        </v-app>
    </div>
</template>

<script>
    import Polar from '../components/Polar'
    import Auth from '../auth/AuthService';
    const auth = new Auth();
    export default {
        components: {
            Polar
        },
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
                            value: 'name',
                            width: '50%'
                        },
                        { text: 'Score', value: 'score', width: '50%' }
                    ],
                    systems: [
                        {
                            value: false,
                            name: 'Hot Water',
                            watersrc: '/watersystem#tab-Hot Water',
                            score: 2.1
                        },
                        {
                            value: false,
                            name: 'Cold Water',
                            watersrc: '/watersystem#tab-Cold Water',
                            score: 3.8
                        },
                        {
                            value: false,
                            name: 'Incoming',
                            watersrc: '/watersystem#tab-Incoming',
                            score: 5.9
                        },
                        {
                            value: false,
                            name: 'Chiller',
                            watersrc: '/watersystem#tab-Chiller',
                            score: 1.0
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
