import { createApp } from "vue";
import App from "./App.vue";

import icon from "@hui-zi/components/icon";
import "@hui-zi/theme-chalk/src/index.scss";
const plugins = [icon];
const app = createApp(App);

plugins.forEach((plugin) => app.use(plugin)); // 组件注册成全局组件

app.mount("#app");
