import { Dict } from "@/api/model";

import { defineStore } from "pinia";
import { store } from "@/store";

import { getProductCategoryApi } from "@/api";

interface ProductState {
  productCategories: Dict[];
}
export const useProductStore = defineStore({
  id: "product",
  state: (): ProductState => ({
    productCategories: [],
  }),
  getters: {
    getProductCategories(): Dict[] {
      return this.productCategories;
    },
  },
  actions: {
    setProductCategories(categories: Dict[]): void {
      this.productCategories = categories;
    },
    async fetchProductCategoriesAction() {
      try {
        const res = await getProductCategoryApi();
        this.setProductCategories(res);
        return res;
      } catch (error) {
        throw new Error("Failed to fetch product categories");
      }
    },
  },
});

// Need to be used outside the setup
export function useProdctStoreWithOut() {
  return useProductStore(store);
}
