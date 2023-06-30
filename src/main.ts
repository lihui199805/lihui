import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { initVant } from "@/utils/init";

const app = createApp(App);
initVant(app);
app.use(store);
app.use(router);
app.use(initVant);
app.mount("#app");
