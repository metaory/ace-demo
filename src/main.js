import "./assets/main.css";

import { createApp } from "vue";
import VueChartkick from "vue-chartkick";
import "chartkick/chart.js";
import App from "./App.vue";
import { Amplify } from "aws-amplify";
import awsExports from "./aws-exports";
Amplify.configure(awsExports);

const app = createApp(App);
app.use(VueChartkick);

app.mount("#app");
