<template>
  <v-container>
    <v-row>
      <v-col cols="xs12" sm="6" class="offset-sm-3">
        <h2>Create new Meetup</h2>
      </v-col>
    </v-row>
    <v-row>
      <v-col class="xs12">
        <ValidationObserver v-slot="{ handleSubmit }">
          <form @submit.prevent="handleSubmit(onCreateMeetup)">
            <v-row>
              <v-col cols="xs12" sm="6"  class="offset-sm-3">
                <ValidationProvider v-slot="{ errors }" mode="passive" name="title" rules="required">
                  <v-text-field
                      id="title"
                      v-model="title"
                      label="Title"
                      name="title"
                      required>
                  </v-text-field>
                  <span>{{ errors[0] }}</span>
                </ValidationProvider>
              </v-col>
            </v-row>
            <v-row>
              <v-col  cols="xs12" sm="6" class="offset-sm-3">
                <ValidationProvider v-slot="{ errors }" mode="passive" name="location" rules="required">
                  <v-text-field
                      id="location"
                      v-model="location"
                      label="Location"
                      name="location"
                      required>
                  </v-text-field>
                  <span>{{ errors[0] }}</span>
                </ValidationProvider>
              </v-col>
            </v-row>
            <v-row>
              <v-col  cols="xs12" sm="6" class="offset-sm-3">
                <ValidationProvider v-slot="{ errors }" mode="passive" name="imageUrl" rules="required">
                  <v-text-field
                      id="image-url"
                      v-model="imageUrl"
                      label="İmage URL"
                      name="imageUrl"
                      required
                  >
                  </v-text-field>
                  <span>{{ errors[0] }}</span>
                </ValidationProvider>
              </v-col>
            </v-row>
            <v-row>
              <v-col   cols="xs12" sm="6" class="offset-sm-3">
                <ValidationProvider v-slot="{ errors }" mode="passive" name="description" rules="required">
                  <v-textarea
                      id="description"
                      v-model="description"
                      label="Description"
                      name="description"
                      required
                  >
                  </v-textarea>
                  <span>{{ errors[0] }}</span>
                </ValidationProvider>
              </v-col>
            </v-row>
            <v-row>
              <v-col   cols="xs12" sm="6" class=" offset-sm-3">
                <img :src=imageUrl height="175px">
              </v-col>
            </v-row>
            <v-row>
              <v-col  sm="6" cols="xs12" class=" offset-sm-3">
                <h4>Choose a Date & Time</h4>
              </v-col>
            </v-row>
            <v-row class="mb-2">
              <v-col sm="4" cols="xs12" class="offset-sm-3">
                <v-date-picker v-model="date"></v-date-picker>
              </v-col>
              <v-col sm="8" cols="xs12" class="offset-sm-3">
                <v-time-picker v-model="time" format="24hr"></v-time-picker>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="xs12" sm="6" class=" offset-sm-7">
                <v-btn class="primary" type="submit">Create Meetup</v-btn>
              </v-col>
            </v-row>
          </form>
        </ValidationObserver>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "CreateMeetup",
  data() {
    return {
      title: '',
      location: '',
      imageUrl: '',
      description: '',
      date : '',
      time : ''
    }
  },
  computed: {
  },
  methods: {
    onCreateMeetup() {
      const formModel = {
        title: this.title,
        location: this.location,
        imageUrl: this.imageUrl,
        description: this.description,
        date: `${this.date}  ${this.time}`
      }
      this.$store.dispatch('createMeetup', formModel);
      this.$router.push('/meetups');

    }


  },
}
</script>

<style scoped>

</style>
