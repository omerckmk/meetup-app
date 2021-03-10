<template>
  <v-app>
    <v-toolbar dark class="primary">
      <v-app-bar-nav-icon
          @click.native.stop="showNav = !showNav"
          class="hidden-sm-and-up"
      ></v-app-bar-nav-icon>
      <v-toolbar-title>
        <router-link to="/" tag="span" style="cursor: pointer">Dev Meetup</router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-xs-only">
        <v-btn
            class="text-decoration-none"
            text
            v-for="item in menuItems"
            :key="item.title"
            router
            :to="item.link"
        >

          <v-icon left dark>{{ item.icon }}</v-icon>
          {{ item.title }}
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-navigation-drawer
        temporary
        v-model="showNav"
    >
      <v-list>
        <v-list-item v-for="item in menuItems"
                     :key="item.title"
                     router
                     :to="item.link"
                     class="text-decoration-none"
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
      menuItems: [
        {icon: 'mdi-account-supervisor', title: 'View Meetups', link: '/meetups'},
        {icon: 'mdi-map-marker', title: 'Organize Meetup', link: '/meetups/new'},
        {icon: 'mdi-account', title: 'Profile', link: '/profile'},
        {icon: 'mdi-face', title: 'Sign Up', link: '/signup'},
        {icon: 'mdi-lock-open', title: 'Sign in', link: '/signin'},
      ]

    }
  },

};
</script>
<style lang="sass">
@import '../node_modules/vuetify/src/styles/main'

</style>
