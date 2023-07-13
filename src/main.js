import "./assets/main.css";

import { createApp } from "vue";
import App from "./App.vue";
import { Amplify, API } from "aws-amplify";
import awsExports from "./aws-exports";
Amplify.configure(awsExports);

console.log(">>>>>>>");
function getData() {
  const apiName = "aceapi";
  const path = "/items/foo";
  const myInit = {
    headers: {}, // OPTIONAL
  };
  return API.get(apiName, path, myInit);
}

getData().then(console.log).catch(console.error);

createApp(App).mount("#app");
