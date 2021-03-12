<template>
<v-container>
  <v-row class="wrap">
    <v-col class="xs12">
      <v-card>
        <v-card-title>
          <h3 class="text--primary">{{ meetup.title }}</h3>
        </v-card-title>
        <v-img
        :src=meetup.imgurl
        height="400px">
        </v-img>
        <v-card-text>
          <div class="info--text">{{ meetup.date }} - Where it takes place</div>
          <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab animi aspernatur aut blanditiis consectetur corporis, doloribus dolorum error exercitationem illum ipsa itaque laborum molestiae nobis quaerat repellat reprehenderit ut voluptas!
          </div>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn class="error">Register</v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</v-container>
</template>

<script>
export default {
name: "Meetup",
  props : ['id']
  ,
  computed: {
    meetup() {
      return this.$store.getters.loadedMeetup(this.id);
    }
  },
}
</script>

<style scoped>

</style>
