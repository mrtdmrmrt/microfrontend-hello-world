import { createApp } from "vue";
import App from "./App";
// import VueRouter from "vue-router";
import { createRouter, createWebHistory } from "vue-router";

import Home from "./components/Home.vue";
import HelloVueApp from "./components/HelloVueApp.vue";
import HelloReactApp from "./components/HelloReactApp.vue";

const routes = [
  { path: "/", component: Home, name: "home" },
  { path: "/vue", component: HelloVueApp, name: "vueApp" },
  { path: "/react", component: HelloReactApp, name: "reactApp" },
];


const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHistory(),
  routes, // short for `routes: routes`
});

const mount = (el) => {
  const app = createApp(App);
  app.use(router);
  app.mount(el);
};

if (process.env.NODE_ENV === "development") {
  const devRoot = document.querySelector("#root");
  if (devRoot) {
    mount(devRoot);
  }
}

export { mount };
