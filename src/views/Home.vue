<template>
  <v-container >
    <v-row class="wrap">
      <v-col class="xs12 col-sm-6 text-sm-center text-sm-right"  >
        <v-btn large text to="/meetups" class="info">
          Explore Meetups
        </v-btn>
      </v-col>
      <v-col class="xs12 col-sm-6 text-sm-center text-sm-left">
        <v-btn large text  to="/meetups/new" class="info">
          Organize Meetups
        </v-btn>
      </v-col>
    </v-row>
    <v-row >
        <v-col class="xs12 " >
          <v-carousel >
            <v-carousel-item
                style="cursor: pointer"
                v-for="meetup in meetups"
                :key="meetup.id"
                :src="meetup.imgurl"
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
