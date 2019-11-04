import Vue from "vue";
import VueRouter, {Route} from "vue-router";
declare module '*.vue' {
  export default Vue;
}

declare module "vue/types/vue" {
  interface Vue {
    $router: VueRouter;
    $route: Route;
    $https:any;
    $urls:any;
    $Message:any;
    $Modal:any;
  }
}
