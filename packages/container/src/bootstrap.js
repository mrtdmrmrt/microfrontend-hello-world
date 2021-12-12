import { createApp } from "vue";
import App from "./App";
// import VueRouter from "vue-router";
import { createRouter, createWebHistory } from "vue-router";

import HelloVueApp from "./components/HelloVueApp.vue";

const routes = [{ path: "/vue", component: HelloVueApp, name:"vueApp" }];

// const router = new VueRouter({
//   mode: "history",
//   routes, // short for `routes: routes`
// });

const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHistory(),
  routes, // short for `routes: routes`
});

const mount = (el) => {
    console.log("el",el)
    console.log("router", router);
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
