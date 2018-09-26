<template>
    <v-container fluid>
        <v-layout column align-center><br><br>
            <h1>Client Login</h1><br>
            <hr width="15%">
            <br>
            <v-form>
                <v-container>
                    <v-layout center>
                        <v-flex xs10 offset-xs1>

                        </v-flex>
                    </v-layout>
                    <v-btn block color="indigo" dark v-show="isLoggedIn()" @click="handleLogout()">Log Out</v-btn>
                    <v-btn block color="indigo" dark v-show="!isLoggedIn()" @click="handleLogin()">Log In</v-btn>
                </v-container>
            </v-form>
            <br>
            <small>Forgot Password?</small>
        </v-layout>
    </v-container>
</template>

<script>
    import Auth from './../auth/AuthService';
    const auth = new Auth();
    export default {
        name: 'ExtraComponent',
        methods: {
            handleLogin() {
                auth.login();
            },
            handleLogout() {
                auth.logout();
            },
            isLoggedIn() {
                return auth.isAuthenticated();
            },
        },
    };
</script>

