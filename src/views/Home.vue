<template>
<v-container class="d-flex flex-column  ">
  <v-layout class="mt-2 justify-center ">
      <v-btn large to="/meetups" class="info mr-sm-10">
        Explore Meetups
      </v-btn>
      <v-btn large to="/meetups" class="info ">
        Organize Meetup
      </v-btn>
  </v-layout>
  <v-layout  class= "mt-3">
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
  </v-layout>
  <v-layout class="mt-3 text-sm-center">
    <p>Join our awesome meetups</p>
  </v-layout>

</v-container>
</template>

<script>
export default {
  name: "Home",
  components: {

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
  bottom: 50px;
  background-color: rgba(0,0,0,0.3) ;
  font-size: 2em;
  color: white;
  padding: 20px;
}
</style>
