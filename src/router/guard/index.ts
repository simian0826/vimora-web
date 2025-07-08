import { Router } from "vue-router";
// import { useCountdown } from "@/hooks/useCountdown";
// import { COUNT_DOWN_TARGET_DATE } from "@/enums/appEnum";

export function createPageGuard(router: Router) {
  router.beforeEach((to, _, next) => {
    // const countdown = useCountdown(COUNT_DOWN_TARGET_DATE);
    // if (countdown.value.isBeforeTarget && to.path !== "/home") {
    //   next({ path: "/home" });
    // } else {
    //   next();
    // }
    next();
  });

  router.afterEach(() => {});
}
