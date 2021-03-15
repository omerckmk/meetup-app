<template>
<v-container>
  <v-row class="wrap">
    <v-col class="xs12">
      <v-card>
        <v-card-title>
          <h3 class="text--primary">{{ meetup.title }} {{meetup.id}}</h3>
        </v-card-title>
        <v-img
        :src=meetup.imageUrl
        height="400px">
        </v-img>
        <v-card-text>
          <div class="info--text">{{ meetup.date | date }} -{{ meetup.location }}</div>
          <div>{{meetup.description}}
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
  props :['id'],
  computed: {
    meetup() {
      return this.$store.getters.loadedMeetup(this.id);
    }
  },
}
</script>

<style scoped>

</style>
