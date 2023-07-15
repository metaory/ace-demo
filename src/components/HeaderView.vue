<script setup>
import { ObjectVisualizer } from "object-visualizer";
import "object-visualizer/dist/index.min.css";
const props = defineProps(["user", "signOut"]);
</script>

<template>
  <main>
    <h2>Username: {{ user.username }}</h2>
    <ObjectVisualizer
      :data="props.user"
      rootName="User"
      :expandOnCreatedAndUpdated="() => false"
    ></ObjectVisualizer>
    <button @click="signOut">Sign Out</button>
  </main>
</template>

<style scoped>
main {
  display: grid;
  grid-template-columns: 2fr 4fr 1fr;
}
button {
  display: inline-block;
  padding: 10px 20px;
  height: 3em;
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  text-decoration: none;
  color: #fff;
  background-color: #ff5252;
  border: 2px solid #000;
  border-radius: 10px;
  box-shadow: 5px 5px 0px #000;
  transition: all 0.3s ease;
}

button:hover {
  background-color: #fff;
  color: #ff5252;
  border: 2px solid #ff5252;
  box-shadow: 5px 5px 0px #ff5252;
}

button:active {
  background-color: #fcf414;
  box-shadow: none;
  transform: translateY(4px);
}

.object-visualizer {
  background-color: #fff;
  font-family: arial;
}
</style>
