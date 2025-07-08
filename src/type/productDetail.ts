export type ProductDetail = {
  id: string;
  mainInfo: {
    title: string;
    categoty: string;
    desc: string;
    imgs: string[];
  };
  productName: string;
  productInfoImg: string;
  properties: ProductDetailProperty[];
  certificate: string[];
};

export type ProductDetailProperty = {
  name: string;
  items: { label: string; value: string }[];
};
