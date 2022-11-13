import { createApp } from "vue";
import App from "./App.vue";
import "./style.css";
import { OhVueIcon, addIcons } from "oh-vue-icons";
import {
	BiArrowRight,
	BiCheckCircle,
	BiXCircle,
	RiLogoutCircleRLine,
} from "oh-vue-icons/icons";
import store from "./store/";
import router from "./router";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min";

addIcons(BiArrowRight, BiCheckCircle, BiXCircle, RiLogoutCircleRLine);

const app = createApp(App);
app.component("v-icon", OhVueIcon);
app.use(store);
app.use(router);
app.mount("#app");
