export const SIDE_BAR_MINI_WIDTH = 48;
export const SIDE_BAR_SHOW_TIT_MINI_WIDTH = 80;
export const COUNT_DOWN_TARGET_DATE = "2025-02-24T22:00:00";
export enum ContentEnum {
  // auto width
  FULL = "full",
  // fixed width
  FIXED = "fixed",
}

// menu theme enum
export enum ThemeEnum {
  DARK = "dark",
  LIGHT = "light",
}

export enum SettingButtonPositionEnum {
  AUTO = "auto",
  HEADER = "header",
  FIXED = "fixed",
}

export enum SessionTimeoutProcessingEnum {
  ROUTE_JUMP,
  PAGE_COVERAGE,
}

/**
 * 权限模式
 */
export enum PermissionModeEnum {
  // role
  ROLE = "ROLE",
  // black
  BACK = "BACK",
  // route mapping
  ROUTE_MAPPING = "ROUTE_MAPPING",
}

//  Route switching animation
export enum RouterTransitionEnum {
  ZOOM_FADE = "zoom-fade",
  ZOOM_OUT = "zoom-out",
  FADE_SIDE = "fade-slide",
  FADE = "fade",
  FADE_BOTTOM = "fade-bottom",
  FADE_SCALE = "fade-scale",
}

//
export enum LoginTypeEnum {
  ACCOUT_LOGIN = "ACCOUT_LOGIN",
  SSO_LOGIN = "SSO_LOGIN",
}
