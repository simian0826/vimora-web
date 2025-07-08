import SvgIcon from "./SvgIcon.vue";

const allGlobalComponent = { SvgIcon };
export default {
  install(app: { component: (arg0: string, arg1: any) => void }) {
    Object.keys(allGlobalComponent).forEach((key) => app.component(key, allGlobalComponent[key as keyof typeof allGlobalComponent]));
  },
};
