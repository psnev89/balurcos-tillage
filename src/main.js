import { createApp } from "vue";
import router from "@/router";
import pinia from "@/config/pinia";
import "./style.css";

import App from "./App.vue";
const app = createApp(App);

// App Plugins
app.use(router);
app.use(pinia);

app.mount("#app");
