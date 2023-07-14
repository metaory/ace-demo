<script setup>
defineProps(["user", "signOut"]);
</script>

<template>
  <main>
    <h2>Username: {{ user.username }}</h2>
    <button @click="signOut">Sign Out</button>
  </main>
</template>

<style scoped>
main {
  display: grid;
  grid-template-columns: 3fr 1fr;
}
</style>
