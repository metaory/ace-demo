<script setup>
import { Authenticator } from '@aws-amplify/ui-vue'
import '@aws-amplify/ui-vue/styles.css'
import ChartsView from './components/ChartsView.vue'
</script>

<template>
  <authenticator>
    <template v-slot="{ user, signOut }">
      <main>
        <header>
          <h1>Hello {{ user.username }}!</h1>
          <button @click="signOut">Sign Out</button>
        </header>
        <ChartsView />
      </main>
    </template>
  </authenticator>
</template>

<style scoped>
main {
  display: grid;
}
</style>
