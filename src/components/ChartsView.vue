<script setup>
import { API } from "aws-amplify";
import { ref } from "vue";
import LoadingView from "./LoadingView.vue";

const chartData = ref([]);
const picked = ref("animal");
const loading = ref(false);

function loadData() {
  loading.value = true;
  const apiName = "aceapi";
  const path = `/items?type=${picked.value}`;
  API.get(apiName, path)
    .then((res) => {
      console.log("@>", res);
      chartData.value = res.pieChart;
      loading.value = false;
    })
    .catch((e) => {
      console.error(e);
      loading.value = false;
    });
}

loadData();
</script>

<template>
  <main>
    <div class="filter">
      <button @click="loadData">fetch</button>
      <div>Type: {{ picked }}</div>

      <form action="">
        <label class="form-control">
          <input type="radio" value="animal" v-model="picked" v-on:change="loadData" checked />
          animal
        </label>

        <label class="form-control">
          <input type="radio" value="profession" v-model="picked" v-on:change="loadData" />
          profession
        </label>
      </form>
    </div>
    <LoadingView v-if="loading" />
    <pie-chart v-if="chartData" :data="chartData"></pie-chart>
  </main>
</template>

<style scoped>
main {
  display: grid;
}

.filter {
  display: grid;
  grid-gap: 20px;
  grid-auto-flow: column;
  background-color: #ebebeb;
  border-radius: 12px;
  margin-top: 20px;
}

input[type="radio"] {
  accent-color: #ff5252 !important;
}

button {
  background-color: #856bd3;
  color: white;
  outline: none;
  border: none;
  border-radius: 12px;
}
</style>
