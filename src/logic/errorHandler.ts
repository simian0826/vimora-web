import { ErrorItem } from "../type/error";
// import { router } from "../router/index";

const errorTypeList: ErrorItem[] = [
  {
    code: 400,
    handler: () => {
      // router.push("/login");
    },
  },
];

const errorTypes = new Map<number | string, ErrorItem>();

errorTypeList.forEach((item) => {
  errorTypes.set(item.code, item);
});

export { errorTypes };
