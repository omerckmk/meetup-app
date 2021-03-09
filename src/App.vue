<template>
  <v-app>
    <navBar/>
    <v-main>

    </v-main>
  </v-app>
</template>

<script>
import navBar from "./components/navBar";

export default {
  name: "App",

  components: {
    navBar
  },

  data: () => ({
    //
  })
};
</script>
