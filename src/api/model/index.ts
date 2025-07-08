export type SystemModule = "home" | "about us" | "contact us" | "product" | "project";

export type Pagenigation = {
  page: number;
  pageSize: number;
};

export type ListRequest<T> = T & Pagenigation;

export type ListResult<T> = {
  list: T[];
  total: number;
};

export type HeroSection = {
  background: string;
  header: string;
  content: string;
  module: SystemModule;
};

export type BasicInfo = {
  address?: string;
  email?: string;
};

export type HomePage = {
  processItems: HomeProcessItem[];
  introductionItems: HomeIntroductionItem[];
  productCategoryItems: HomeProductionCategoryItem[];
  leaders: Member[];
  clientLogos: string[];
};

export type HomeIntroductionItem = {
  title: string;
  subTitle: string;
  description: string;
  image: string;
  infoRight: IntroductionInfo;
  infoLeft: IntroductionInfo;
  productId: number;
};

export type HomeProcessItem = {
  title: number;
  image: string;
  detailText: string;
};
export type IntroductionInfo = {
  info: string;
  supplementary: string;
};

export type HomeProductionCategoryItem = {
  title: string;
  image: string;
  category: string;
};

export type Member = {
  id: number;
  name: string;
  image: string;
  description: string;
};

export type Dict = {
  label: string;
  value: string;
  children?: Dict[];
};

export type AboutUsPage = {
  qualityItems: AboutUsQualityItem[];
  needHelpHeader: string;
  needHelpDesc: string;
  teamMembers: Member[];
};

export type AboutUsQualityItem = {
  title: string;
  desc: string;
  image: string;
};

export type Project = {
  image: string | undefined;
  id: number;
  title: string;
  subtitle: string;
  type: string;
  location: string;
  description: string;
  projectImages: string[];
  materials: ProjectMaterial[];
};

export type ProjectDetail = {
  id: string;
  name: string;
  location: string;
  desc: string[];
  type: string;
  year: string;
  state: string;
  units: string;
  products: string[];
  bannerImage: string;
  mbBannerImage: string;
  projectPoster: string;
  recommendedSwiperImages: {
    id: number;
    image: string;
  }[];
  materialsGridImages: {
    id: number;
    image: string;
  }[];
  relatedProjects: {
    id: number;
    image: string;
    name: string;
    location: string;
  }[];
};

export type ProjectMaterial = {
  projectId: number;
  title: string;
  subtitle: string;
  image: string;
  taxType: string;
};

export type ContactUsRequest = {
  firstName: string;
  lastName: string;
  company: string;
  email: string;
  telephone: string;
  inquiryType: string;
  userType: string;
  country: string;
  city: string;
  state?: string;
  message: string;
};
export type ContactUsForm = ContactUsRequest & {
  isAgreed: boolean;
  telephoneAreaCode: string;
};

export type SendEmailType = {
  email: string;
  type: "subscribe" | "applyForJob";
};

export type ProductListItem = {
  id: string;
  title: string;
  subtitle?: string;
  image: string;
  type?: string;
};

export type ProductDetailVO = {
  id: string;
  heroBgUrl: string;
  heroBgUrlMobile: string;
  name: string;
  subheader: string;
  productionIntroduction: string;
  details: {
    img: string;
    title: string;
    desc: string;
  }[];
  productBigImages: string[];
  productSmallImages: string[];
  structure: {
    desc: string;
    height?: string;
    width?: string;
    depth?: string;
    mainImage: string;
    subImages: {
      name: string;
      image: string;
    }[];
  };
  properties: ProductProperty[];
  otherProducts: {
    id: string;
    title: string;
    subtitle: string;
    heroBgUrl: string;
  }[];
};

export type ProductProperty = {
  name: string;
  columnNum: 2 | 3 | 4;
  content: CategoryProperty | ProductPropertyItem[];
};

export type ProductPropertyItem = {
  img: string;
  propId?: string;
  name?: string;
  value?: string;
};

export type CategoryProperty = {
  activeIndex: number;
  categoryItems: CategoryPropertyItem[];
};

export type CategoryPropertyItem = {
  category: string;
  list: ProductPropertyItem[];
};
