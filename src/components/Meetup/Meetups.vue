<template>
  <v-container>
    <v-row class="wrap " v-for="meetup in meetups" :key="meetup.id">
      <v-col class="xs12 col-sm-10 col-md-8 offset-sm-1 offset-md-2" >
        <v-card class="info">
          <v-container fluid>
            <v-row>
              <v-col class="xs5 col-sm-4 col-md-3">
                <v-img
                    height="130px"
                    :src=meetup.imageUrl>
                </v-img>
              </v-col>
              <v-col class="xs7 col-sm-8 col-md-9">
                <v-card-title class="text--primary">
                  <div>
                    <h5 class="white--text mb-0 ">{{ meetup.title }}</h5>
                    <div>{{ meetup.date | date }}</div>
                  </div>
                </v-card-title>
                <v-card-actions>
                  <v-btn
                      text
                      @click="onLoadMeetup(meetup.id)"
                  >
                    <v-icon left light>mdi-arrow-right-thick</v-icon>
                    View Meetup
                  </v-btn>
                </v-card-actions>
              </v-col>
            </v-row>
          </v-container>
        </v-card>
      </v-col>
      <v-col></v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Meetups",
  computed: {
    meetups() {
      return this.$store.getters.loadedMeetups;
    }
  },
  methods: {
    onLoadMeetup(id) {
      this.$router.push('/meetup/'+id);
    }
  },
}
</script>

<style scoped>

</style>
