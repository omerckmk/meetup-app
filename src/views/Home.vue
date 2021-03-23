<template>
  <v-container >
    <v-row class="wrap mt-1">
      <v-col cols="xs12" sm="6" class="text-sm-center text-sm-right"  >
        <v-btn large text to="/meetups" class="info">
          Explore Meetups
        </v-btn>
      </v-col>
      <v-col cols="xs12" sm="6" class="text-sm-center text-sm-left">
        <v-btn large text  to="/meetups/new" class="info">
          Organize Meetups
        </v-btn>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="xs12" class="text-center">
        <v-progress-circular
            indeterminate
            color="primary"
            :width="7"
            :size="70"
            v-if="loading"
        ></v-progress-circular>
      </v-col>
    </v-row>
    <v-row class="wrap mt-0" v-if="!loading">
        <v-col cols="xs12" >
          <v-carousel >
            <v-carousel-item
                style="cursor: pointer"
                v-for="meetup in meetups"
                :key="meetup.id"
                :src="meetup.imageUrl"
                reverse-transition="fade-transition"
                transition="fade-transition"
                @click="onLoadMeetup(meetup.id)"
            >
              <div class="title">{{meetup.title}}</div>
            </v-carousel-item>
          </v-carousel>
        </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Home",
  components: {

  },
  computed: {
    meetups () {
      return  this.$store.getters.featuredMeetups
    },
    loading() {
      return this.$store.getters.loading
    }
  },
  methods: {
    onLoadMeetup(id) {
        this.$router.push('/meetup/'+id);
    }
  },
};
</script>
<style scoped>
.title {
  position: absolute;
  right: 400px;
  bottom: 50px;
  background-color: rgba(0,0,0,0.3);
  color: white;
  font-size: 2em;
  padding: 20px;
}
</style>
