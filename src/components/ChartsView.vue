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
      <button @click="loadData">fetch again</button>
      <div><em>Type:</em> {{ picked }}</div>

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

em {
  color: #7c7c7c;
}

.filter {
  display: grid;
  grid-gap: 20px;
  grid-auto-flow: column;
  grid-template-columns: 1fr 3fr 1fr;
  background-color: #ccc;
  border-radius: 12px;
  margin-top: 20px;
  height: 40px;
  align-items: center;
}

input[type="radio"] {
  accent-color: #ff5252 !important;
  width: 20px;
  height: 20px;
}

button {
  background-color: hsl(260deg 60% 50% / 90%);
  color: white;
  outline: none;
  border: none;
  border-radius: 12px;
  margin-left: 10px;
}

button:hover {
  background-color: hsl(260deg 90% 50% / 90%);
}
</style>
