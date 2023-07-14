<script setup>
import { API } from 'aws-amplify'
import { ref, onMounted } from 'vue'

const chartData = ref([])
const picked = ref('animal')

function loadData() {
  const apiName = 'aceapi'
  const path = `/items?type=${picked.value}`
  console.log('path:', path)
  API.get(apiName, path)
    .then((res) => {
      console.log('@>', res)
      chartData.value = res.pieChart
    })
    .catch(console.error)
}

function onChange() {
  console.log('ON CHANGE', picked.value)
  loadData()
}

onMounted(() => {
  console.log('MOUNTED')
  loadData()
})
</script>

<template>
  <main>
    <div>
      <button @click="loadData">reload</button>
      <div>Picked: {{ picked }}</div>

      <input
        v-on:change="onChange"
        type="radio"
        id="animal"
        value="animal"
        v-model="picked"
        :checked="true"
      />
      <label for="animal">Animals</label>

      <input
        v-on:change="onChange"
        type="radio"
        id="profession"
        value="profession"
        v-model="picked"
        :checked="false"
      />
      <label for="city">Profession</label>
    </div>

    <pie-chart v-if="chartData" :data="chartData"></pie-chart>
  </main>
</template>

<style scoped>
main {
  display: grid;
}
</style>
