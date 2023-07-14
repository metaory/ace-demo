<script setup>
import { API } from 'aws-amplify'
import { ref, onMounted } from 'vue'
const foobar = ref('def')

function getData() {
  const apiName = 'aceapi'
  const path = '/items/foo'
  const myInit = {
    headers: {} // OPTIONAL
  }
  return API.get(apiName, path, myInit)
}
// getData().then(console.log).catch(console.error)
getData()
  .then((res) => {
    console.log('@>', res)
    foobar.value = res
  })
  .catch(console.error)
onMounted(() => {
  console.log('MOUNTED')
})
</script>
<template>
  <h2>{{ foobar }}</h2>
  <pie-chart
    :data="[
      ['Blueberry', 44],
      ['Strawberry', 23]
    ]"
  ></pie-chart>
</template>
