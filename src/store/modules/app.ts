import { HeroSection, SystemModule, BasicInfo } from "./../../api/model/index";
import type { ProjectConfig, HeaderSetting, MenuSetting, TransitionSetting, MultiTabsSetting } from "#/config";
import type { BeforeMiniState } from "#/store";

import { defineStore } from "pinia";
import { store } from "@/store";

import { ThemeEnum } from "@/enums/appEnum";
import { PROJ_CFG_KEY } from "@/enums/cacheEnum";
import { Persistent } from "@/utils/cache/persistent";
import { deepMerge } from "@/utils";
import { getBasicInfoApi, getHeroSectionApi } from "@/api";

interface AppState {
  darkMode?: ThemeEnum;
  // Page loading status
  pageLoading: boolean;
  // project config
  projectConfig: ProjectConfig | null;
  // When the window shrinks, remember some states, and restore these states when the window is restored
  beforeMiniInfo: BeforeMiniState;
  heroSections: HeroSection[];
  basicInfo: BasicInfo;
}
let timeId: TimeoutHandle;
export const useAppStore = defineStore({
  id: "app",
  state: (): AppState => ({
    darkMode: undefined,
    pageLoading: false,
    projectConfig: Persistent.getLocal(PROJ_CFG_KEY),
    beforeMiniInfo: {},
    heroSections: [],
    basicInfo: {},
  }),
  getters: {
    getPageLoading(): boolean {
      return this.pageLoading;
    },

    getBeforeMiniInfo(): BeforeMiniState {
      return this.beforeMiniInfo;
    },

    getProjectConfig(): ProjectConfig {
      return this.projectConfig || ({} as ProjectConfig);
    },

    getHeaderSetting(): HeaderSetting {
      return this.getProjectConfig.headerSetting;
    },
    getMenuSetting(): MenuSetting {
      return this.getProjectConfig.menuSetting;
    },
    getTransitionSetting(): TransitionSetting {
      return this.getProjectConfig.transitionSetting;
    },
    getMultiTabsSetting(): MultiTabsSetting {
      return this.getProjectConfig.multiTabsSetting;
    },
    getHeroSections(): HeroSection[] {
      return this.heroSections;
    },
    getBasicInfo(): BasicInfo {
      return this.basicInfo;
    },
  },
  actions: {
    setPageLoading(loading: boolean): void {
      this.pageLoading = loading;
    },

    setBeforeMiniInfo(state: BeforeMiniState): void {
      this.beforeMiniInfo = state;
    },

    setProjectConfig(config: DeepPartial<ProjectConfig>): void {
      this.projectConfig = deepMerge(this.projectConfig || {}, config);
      Persistent.setLocal(PROJ_CFG_KEY, this.projectConfig);
    },
    setHeroSections(sections: HeroSection[]): void {
      this.heroSections = sections;
    },
    setBasicInfo(basicInfo: BasicInfo): void {
      this.basicInfo = basicInfo;
    },

    async resetAllState() {
      Persistent.clearAll();
    },
    async setPageLoadingAction(loading: boolean): Promise<void> {
      if (loading) {
        clearTimeout(timeId);
        // Prevent flicker
        timeId = setTimeout(() => {
          this.setPageLoading(loading);
        }, 50);
      } else {
        this.setPageLoading(loading);
        clearTimeout(timeId);
      }
    },
    async fetchHeroSectionsAction(): Promise<HeroSection[]> {
      try {
        const res = await getHeroSectionApi();
        this.setHeroSections(res);
        return res;
      } catch (error) {
        throw new Error("Failed to fetch hero sections");
      }
    },
    fetchHeroSectionByModule(moduleId: SystemModule): HeroSection | undefined {
      if (!(this.getHeroSections && this.getHeroSections.length > 0)) {
        return undefined;
      }
      return this.getHeroSections.find((section) => section.module === moduleId);
    },
    async fetchBasicInfoAction(): Promise<BasicInfo> {
      try {
        const res = await getBasicInfoApi();
        this.setBasicInfo(res);
        return res;
      } catch (error) {
        throw new Error("Failed to fetch basic info");
      }
    },
  },
});

// Need to be used outside the setup
export function useAppStoreWithOut() {
  return useAppStore(store);
}
