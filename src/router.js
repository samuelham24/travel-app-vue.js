import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  linkExactActiveClass: "vue-active-class",
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
      props: true
    },
    {
      path: "/destination/:slug",
      name: "DestinationDetails",
      props: true,
      component: () =>
        import(
          /* webpackChunkName: "about" */ "./views/DestinationDetails.vue"
        ),
      children: [
        {
          path: ":experienceSlug",
          name: "experienceDetails",
          props: true,
          component: () =>
            import(
              /*webpackChunkName: "ExperienceDetails"*/ "./views/ExperienceDetails.vue"
            )
        }
      ]
    }
  ]
});
