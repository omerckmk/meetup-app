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
          <v-carousel>
            <v-carousel-item
                v-for="meetup in meetups"
                :key="meetup.id"
                :src="meetup.imgurl"
                reverse-transition="fade-transition"
                transition="fade-transition"
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
    height() {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs': return 200
        case 'sm': return 300
        case 'md': return 300
        case 'lg': return 300
        case 'xl': return 350
      }
      return 300
    }
  },
  data() {
    return {
      meetups: [
        {imgurl : 'https://upload.wikimedia.org/wikipedia/commons/4/47/New_york_times_square-terabass.jpg' , id : '1',
          title : 'Meetup in New York'},
        {imgurl : 'https://upload.wikimedia.org/wikipedia/commons/4/4b/La_Tour_Eiffel_vue_de_la_Tour_Saint-Jacques%2C_Paris_ao%C3%BBt_2014_%282%29.jpg' , id : '2',
          title : 'Meetup in Paris'},
        {imgurl : 'https://upload.wikimedia.org/wikipedia/commons/c/cc/Istanbul_Fatih_Sultan_Mehmet_Bridge_IMG_7247_1725.jpg' , id : '3',
          title : 'Meetup in Istanbul'}

      ]
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
