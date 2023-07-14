<script setup>
import { Authenticator } from '@aws-amplify/ui-vue'
import '@aws-amplify/ui-vue/styles.css'
import HeaderView from './components/HeaderView.vue'
import ChartsView from './components/ChartsView.vue'
</script>

<template>
  <authenticator>
    <template v-slot="{ user, signOut }">
      <HeaderView :user="user" :signOut="signOut" />
      <ChartsView />
    </template>
  </authenticator>
</template>

<style scoped>
main {
  display: grid;
}
</style>
