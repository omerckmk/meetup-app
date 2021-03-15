<template>
  <v-app>
    <div>
      <v-toolbar
          class="primary"
          dark
          dense>
        <v-app-bar-nav-icon
            class="hidden-sm-and-up"
            @click.stop="showNav = !showNav"
        ></v-app-bar-nav-icon>
        <v-toolbar-title style="cursor: pointer">
          <router-link tag="span" to="/">Dev Meetup</router-link>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items class="hidden-xs-only">
          <v-btn
              v-for="item in menuItems"
              :key="item.title"
              :to="item.link"
              class="text-decoration-none"
              router
              text
          >
            <v-icon dark left>{{ item.icon }}</v-icon>
            {{ item.title }}
          </v-btn>
        </v-toolbar-items>
      </v-toolbar>
    </div>
    <v-navigation-drawer
        v-model="showNav"
        absolute
        temporary
    >
      <v-list>
        <v-list-item v-for="item in menuItems"
                     :key="item.title"
                     :to="item.link"
                     link

        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>{{ item.title }}</v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>


export default {
  name: "App",
  components: {},
  data() {
    return {
      showNav: false,
    }
  },
  computed: {
    menuItems() {
      let menuItems = [
        {icon: 'mdi-face', title: 'Sign Up', link: '/signup'},
        {icon: 'mdi-lock-open', title: 'Sign in', link: '/signin'},
      ]
      if (this.userIsAuthenticated) {
        menuItems = [
          {icon: 'mdi-account-supervisor', title: 'View Meetups', link: '/meetups'},
          {icon: 'mdi-map-marker', title: 'Organize Meetup', link: '/meetups/new'},
          {icon: 'mdi-account', title: 'Profile', link: '/profile'}
        ]

      }
      return menuItems
    },
    userIsAuthenticated() {
      return this.$store.getters.user !== null && this.$store.getters.user !== undefined
    }
  },

};
</script>
<style lang="sass">

@import '../node_modules/vuetify/src/styles/main'

</style>
