<template>
  <v-container>
    <v-row>
      <v-col v-if="error" sm="6" cols="xs12" class="offset-sm-3">
        <app-alert :text="error.message" @dismissed="onDismissed"></app-alert>
      </v-col>
    </v-row>
    <v-row>
      <v-col class="xs12 col-sm-6 offset-sm-3">
        <v-card>
          <v-card-text>
            <v-container>
              <ValidationObserver v-slot="{ handleSubmit }">
                <form @submit.prevent="handleSubmit(onSignin)">
                  <v-row>
                    <v-col cols="xs12" >
                      <ValidationProvider v-slot="{ errors }" mode="passive" name="email" rules="required|email">
                        <v-text-field id="email"
                                      v-model="email"
                                      label="E-mail"
                                      name="email"
                                      type="email">

                        </v-text-field>
                        <span>{{ errors[0] }}</span>
                      </ValidationProvider>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col class="xs12">
                      <ValidationProvider v-slot="{ errors }" mode="passive" name="password" rules="required">
                        <v-text-field id="password"
                                      v-model="password"
                                      label="Password"
                                      name="password"
                                      type="password">

                        </v-text-field>
                        <span>{{ errors[0] }}</span>
                      </ValidationProvider>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col class="xs12">
                      <v-btn type="submit" :loading="loading" :disabled="loading">Sign in</v-btn>
                    </v-col>
                  </v-row>
                </form>
              </ValidationObserver>
            </v-container>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Signup",
  data() {
    return {
      email: '',
      password: '',
    }
  },
  computed: {
    user () {
      return this.$store.getters.user
    },
    error() {
      return this.$store.getters.error
    },
    loading() {
      return this.$store.getters.loading
    }
  },
  watch: {
    user(value) {
      if ( value !== null && value !== undefined) {
        this.$router.push('/');
      }
    }
  },
  methods: {
    onSignin() {
      this.$store.dispatch('signUserin', {email : this.email , password : this.password})
    },
    onDismissed() {
      this.$store.dispatch('clearError')
    }
  },
}
</script>

<style scoped>

</style>
