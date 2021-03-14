<template>
  <v-container>
    <v-row>
      <v-col class="xs12 col-sm-6 offset-sm-3  ">
        <h2>Create new Meetup</h2>
      </v-col>
    </v-row>
    <v-row>
      <v-col class="xs12">
        <form>
          <v-row>
            <v-col class="xs12 col-sm-6 offset-sm-3">
              <v-text-field
                  v-model="title"
                  name="title"
                  label="Title"
                  id="title"
                  required>
              </v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col class="xs12 col-sm-6 offset-sm-3">
              <v-text-field
                  v-model="location"
                  name="location"
                  label="Location"
                  id="location"
                  required>
              </v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col class="xs12 col-sm-6 offset-sm-3">
              <v-text-field
                  v-model="imageUrl"
                  name="imageUrl"
                  label="İmage URL"
                  id="image-url"
                  required
                  >
              </v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col class="xs12 col-sm-6 offset-sm-3">
              <v-textarea
                  v-model="description"
                  name="description"
                  label="Description"
                  id="description"
                  required
              >
              </v-textarea>
            </v-col>
          </v-row>
          <v-row>
            <v-col class="xs12 col-sm-6 offset-sm-3">
              <img :src=imageUrl alt="">
            </v-col>
          </v-row>
          <v-row>
            <v-col class="xs12 col-sm-6 offset-sm-7">
              <v-btn class="primary">Create Meetup</v-btn>
            </v-col>
          </v-row>
        </form>
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
      imageUrl : '',
      description : ''
    }
  },
}
</script>

<style scoped>

</style>
