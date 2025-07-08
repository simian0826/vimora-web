import type { ErrorMessageMode } from "#/axios";
import { ElMessage, ElMessageBox } from "element-plus";

// import router from '/@/router';
// import { PageEnum } from '/@/enums/pageEnum';

export function checkStatus(status: number, msg: string, errorMessageMode: ErrorMessageMode = "message"): void {
  let errMessage = "";

  switch (status) {
    case 400:
      errMessage = `${msg}`;
      break;
    // 401: Not logged in
    // Jump to the login page if not logged in, and carry the path of the current page
    // Return to the current page after successful login. This step needs to be operated on the login page.
    case 401:
      errMessage = msg || "No Authorization, Please login!";
      break;
    case 403:
      errMessage = "Access forbidden!";
      break;
    // 404请求不存在
    case 404:
      errMessage = "Resource not found!";
      break;
    case 405:
      errMessage = "Request method error!";
      break;
    case 408:
      errMessage = "Request time out!";
      break;
    case 500:
      errMessage = "Server error, please contact admin!";
      break;
    case 501:
      errMessage = "网络未实现!";
      break;
    case 502:
      errMessage = "Network Error!";
      break;
    case 503:
      errMessage = "Server is not avaliable!";
      break;
    case 504:
      errMessage = "Time out!";
      break;
    case 505:
      errMessage = "http version does not support this request!";
      break;
    default:
  }

  if (errMessage) {
    if (errorMessageMode === "modal") {
      ElMessageBox({
        title: "Error",
        message: errMessage,
      });
    } else if (errorMessageMode === "message") {
      ElMessage.error(errMessage);
    }
  }
}
