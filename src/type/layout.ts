import { CategoryListItem } from "./productList";
export type FooterNavItem = {
  sectionName?: string;
  link: string;
  linkType?: "type" | "external" | "scroll";
  children?: FooterNavItem[];
  suffixIcon?: string;
  prefixIcon?: string;
};
export type MenuItem = {
  name: string;
  path: string;
  children?: MenuItem[];
};
export type ProductsMenuItem = CategoryListItem & {
  image: string;
};
