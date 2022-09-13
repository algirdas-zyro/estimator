import { createApp } from "vue";
import { createPinia } from "pinia";
import * as Vue from "vue";
import { enableVueBindings } from "@syncedstore/core";
enableVueBindings(Vue);

import App from "./App.vue";
import router from "./router";

const app = createApp(App);

// app.use(ElementPlus);
app.use(createPinia());
app.use(router);

app.mount("#app");
