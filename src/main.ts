import router from "./router/init";
import { createApp } from "vue";
import App from "./App.vue";
import "./css/main.css";

createApp(App).use(router).mount("#app");
