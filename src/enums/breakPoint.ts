/**
 * @description: break point set
 */
export enum BreakPointEnum {
  XS = 768,
  SM = 768,
  MD = 992,
  LG = 1200,
  XL = 1920,
}

export enum sizeEnum {
  XS = "XS",
  SM = "SM",
  MD = "MD",
  LG = "LG",
  XL = "XL",
  XXL = "XXL",
}

export enum screenEnum {
  XS = 768,
  SM = 768,
  MD = 992,
  LG = 1200,
  XL = 1920,
}

const screenMap = new Map<sizeEnum, number>();

screenMap.set(sizeEnum.XS, screenEnum.XS);
screenMap.set(sizeEnum.SM, screenEnum.SM);
screenMap.set(sizeEnum.MD, screenEnum.MD);
screenMap.set(sizeEnum.LG, screenEnum.LG);
screenMap.set(sizeEnum.XL, screenEnum.XL);

export { screenMap };
