<template>
  <v-container>
    <v-row class="wrap">
      <v-col class="xs12 col-sm-10 col-md-8 offset-sm-1 offset-md-2" >
        <v-card class="info" >
          <v-container fluid>
            <v-row>
              <v-col class="xs5 col-sm-4 col-md-3">
                <v-img
                    height="130px"
                    src="https://upload.wikimedia.org/wikipedia/commons/4/47/New_york_times_square-terabass.jpg">
                </v-img>
              </v-col>
              <v-col class="xs7 col-sm-8 col-md-9">
                <v-card-title class="text--primary">
                  <div>
                    <h5 class="white--text mb-0 ">My Meetup</h5>
                    <div>17th July 2017</div>
                  </div>
                </v-card-title>
                <v-card-actions>
                  <v-btn
                      text
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
}
</script>

<style scoped>

</style>
