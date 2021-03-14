<template>
  <v-container>
    <v-row>
      <v-col class="xs12 col-sm-6 offset-sm-3  ">
        <h2>Create new Meetup</h2>
      </v-col>
    </v-row>
    <v-row>
      <v-col class="xs12">
        <ValidationObserver v-slot="{ handleSubmit }">
        <form @submit.prevent="handleSubmit(onSubmit)">
          <v-row>
            <v-col class="xs12 col-sm-6 offset-sm-3">
              <ValidationProvider mode="passive" name="title" rules="required|alpha" v-slot="{ errors }">
                <v-text-field
                    v-model="title"
                    name="title"
                    label="Title"
                    id="title"
                    required>
                </v-text-field>
                <span>{{ errors[0] }}</span>
              </ValidationProvider>
            </v-col>
          </v-row>
          <v-row>
            <v-col class="xs12 col-sm-6 offset-sm-3">
              <ValidationProvider mode="passive" name="location" rules="required|alpha" v-slot="{ errors }">
                <v-text-field
                    v-model="location"
                    name="location"
                    label="Location"
                    id="location"
                    required>
                </v-text-field>
                <span>{{ errors[0] }}</span>
              </ValidationProvider>
            </v-col>
          </v-row>
          <v-row>
            <v-col class="xs12 col-sm-6 offset-sm-3">
              <ValidationProvider mode="passive" name="imageUrl" rules="required|alpha" v-slot="{ errors }">
                <v-text-field
                    v-model="imageUrl"
                    name="imageUrl"
                    label="İmage URL"
                    id="image-url"
                    required
                >
                </v-text-field>
                <span>{{ errors[0] }}</span>
              </ValidationProvider>
            </v-col>
          </v-row>
          <v-row>
            <v-col class="xs12 col-sm-6 offset-sm-3">
              <ValidationProvider mode="passive" name="description" rules="required|alpha" v-slot="{ errors }">
                <v-textarea
                    v-model="description"
                    name="description"
                    label="Description"
                    id="description"
                    required
                >
                </v-textarea>
                <span>{{ errors[0] }}</span>
              </ValidationProvider>
            </v-col>
          </v-row>
          <v-row>
            <v-col class="xs12 col-sm-6 offset-sm-3">
              <img :src=imageUrl alt="">
            </v-col>
          </v-row>
          <v-row>
            <v-col class="xs12 col-sm-6 offset-sm-7">
              <v-btn type="submit" class="primary">Create Meetup</v-btn>
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
      imageUrl : '',
      description : ''
    }
  },
  methods: {
    onSubmit () {
      alert('Form has been submitted!');
    }


  },
}
</script>

<style scoped>

</style>
