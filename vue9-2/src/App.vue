<template>
  <div id="app">
    <!-- https://github.com/vuetifyjs/vuetify/blob/stable/packages/docs/src/examples/layouts/dark.vue -->
    <v-app id="inspire" dark>
    <v-navigation-drawer
      v-model="drawer"
      clipped
      fixed
      app
    >
      <v-list dense>
        <!-- 法一 使用 router link 法二 使用 goPage-->
        <!-- <router-link to="/"> -->
          <v-list-tile @click="goPage('/')">
            <v-list-tile-action>
              <v-icon>dashboard</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>Home</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        <!-- </router-link> -->
        <!-- <router-link to="/production"> -->
          <v-list-tile @click="goPage('/production/15')">
            <v-list-tile-action>
              <v-icon>settings</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>Production</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        <!-- </router-link> -->
      </v-list>
    </v-navigation-drawer>
    <v-toolbar app fixed clipped-left>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>Application</v-toolbar-title>
    </v-toolbar>
    <v-content>
      <v-container fluid fill-height>
        <v-layout justify-center align-center>
          <v-flex shrink>
            <router-view/>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
    <v-footer app fixed>
      <span>&copy; 2017</span>
    </v-footer>
  </v-app>
  </div>
</template>

<script>
import { RouterLink } from 'vue-router';
import { mapState } from 'vuex';

export default {
    name: "app",
    data() {
        return {
            msg: "Welcome to Your Vue.js App",
            drawer: null
        };
    },
    computed: {
        ...mapState({
            userName: state => state.userName
        })
    },
    components: { RouterLink },
    methods: {
      goPage(url) {
        if (this.$route.path != url)
          this.$router.push({ path: url });
      }
    }
}
</script>
<style>
</style>
