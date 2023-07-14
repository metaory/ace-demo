<script setup>
import { ref, onMounted } from 'vue'
import { Authenticator } from '@aws-amplify/ui-vue'
import '@aws-amplify/ui-vue/styles.css'
// import LineChart from './components/LineChart.vue'
// import RadarChart from './components/RadarChart.vue'
import ChartsView from './components/ChartsView.vue'

const count = ref(0)

function increment() {
  count.value++
}
</script>

<template>
  <authenticator>
    <template v-slot="{ user, signOut }">
      <h1>Hello {{ user.username }}!</h1>
      <button @click="signOut">Sign Out</button>
      <button @click="increment">Count is: {{ count }}</button>
      <ChartsView />
    </template>
  </authenticator>
</template>

<style scoped></style>
