import Vue from "vue";
import Home from "@/pages/Home";
import Resume from "@/pages/resume.vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      components: {
        default: Home,
      },
    },
    {
      path: "/resume",
      name: "resume",
      components: {
        default: Resume,
      },
    },
  ],
});
