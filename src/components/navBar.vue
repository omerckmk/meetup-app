<template>
<v-app>
  <v-toolbar dark class="error">
    <v-app-bar-nav-icon
        @click.native.stop="showNav = !showNav"
        class="hidden-sm-and-up"
    ></v-app-bar-nav-icon>
    <v-toolbar-title>Dev Meetup</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-xs-only">
      <v-btn text>
        <v-icon left>mdi-account-supervisor</v-icon>
        View Meetups
      </v-btn>
    </v-toolbar-items>
  </v-toolbar>
  <v-navigation-drawer v-model="showNav">
      <v-list>
        <v-list-item>
            <v-list-item-action>
              <v-icon>mdi-account-supervisor</v-icon>
            </v-list-item-action>
          <v-list-item-content>View Meetups</v-list-item-content>
        </v-list-item>
      </v-list>
  </v-navigation-drawer>

</v-app>
</template>

<script>
export default {
  name: "navBar",
  data() {
    return {
      showNav: false
    }
  },
};
</script>

<style lang="sass">
  @import "../styles/main"

</style>
