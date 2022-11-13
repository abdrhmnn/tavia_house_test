import { createApp } from "vue";
import App from "./App.vue";
// main styling file
import "./style.css";
// oh vue icons
import { OhVueIcon, addIcons } from "oh-vue-icons";
import {
	BiArrowRight,
	BiCheckCircle,
	BiXCircle,
	RiLogoutCircleRLine,
} from "oh-vue-icons/icons";
// store vuex
import store from "./store/";
// router vue-router
import router from "./router";

// bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min";

addIcons(BiArrowRight, BiCheckCircle, BiXCircle, RiLogoutCircleRLine);

const app = createApp(App);
app.component("v-icon", OhVueIcon);
app.use(store);
app.use(router);
app.mount("#app");
