import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue'
import Dashboard from '../views/Dashboard.vue'
import Login from '../views/Login.vue'
import Callback from '../components/Callback.vue'
import Error from '../components/Error.vue'
import MapView from '../components/MapView.vue'
import ProfileView from '../components/ProfileView.vue'
import ListView from '../components/ListView.vue'
import LocationView from '../components/LocationView.vue'
import WaterSystem from '../components/WaterSystem.vue'
import ControlPoints from '../components/ControlPoints.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/callback',
            name: 'Callback',
            component: Callback
        },
        {
            path: '/dashboard',
            name: 'Dashboard',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: Dashboard
        },
        {
            path: '/error',
            name: 'Error',
            component: Error
        },
        {
            path: '/mapview',
            name: 'MapView',
            component: MapView
        },
        {
            path: '/profileview',
            name: 'ProfileView',
            component: ProfileView
        },
        {
            path: '/listview',
            name: 'ListView',
            component: ListView
        },
        {
            path: '/locationview',
            name: 'LocationView',
            component: LocationView
        },
        {
            path: '/watersystem',
            name: 'WaterSystem',
            component: WaterSystem
        },
        {
            path: '/controlpoints',
            name: 'ControlPoints',
            component: ControlPoints
        },
        {
            path: '/login',
            name: 'Login',
            component: Login
        }
    ]
})
