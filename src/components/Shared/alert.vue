<template>
  <v-alert type="error" @input="onClose" dismissible :value="true">
   {{text}}
  </v-alert>
</template>

<script>
export default {
  name: "alert",
  props : ['text'],
  methods: {
    onClose() {
      this.$emit('dismissed')
    }
  },
}
</script>

<style scoped>

</style>
