import { createApp } from "vue";
import App from "./App.vue";

import store from "./store";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";



var app = createApp(App).use(store);
app.mount("#content");