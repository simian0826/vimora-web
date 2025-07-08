<template>
  <div class="product-detail-container">
    <div class="section first" :style="{ backgroundImage: `url(${breakpoint === sizeEnum.XS ? productDetail.heroBgUrlMobile : productDetail.heroBgUrl})` }">
      <div class="content">
        <div class="banner-content" ref="bannerContentRef">
          <div class="title">{{ productDetail.name }}</div>
          <div class="sub-title">{{ productDetail.subheader }}</div>
        </div>
        <img src="@/assets/images/projects/down-arrow.png" alt="project-info" class="down-arrow-image" />
      </div>
    </div>

    <div class="section production-introduction">
      <div class="desc-block-container">
        <img src="@/assets/images/home/down-flower.png" class="down-flower" />
        <h2 class="desc-title">Product Introduction</h2>
        <div class="desc-content">{{ productDetail.productionIntroduction }}</div>
      </div>
      <div class="desc-block-container">
        <img src="@/assets/images/tuteng.png" class="bg" />
        <h2 class="desc-title">Collection Highlights</h2>
        <div class="desc-content">{{ productDetail.featureHight }}</div>
      </div>
    </div>
    <div class="detail-item-container" v-for="(item, index) in productDetail.details" :key="index" :ref="(el) => setDetailItemRefs(el as HTMLElement, index)">
      <div
        class="content"
        :style="{
          flexDirection: breakpoint === sizeEnum.XS && index % 2 !== 0 ? 'column-reverse' : '',
        }"
      >
        <template v-if="index % 2 === 0">
          <div class="image-container" :ref="(el) => setDetailItemLeftRefs(el as HTMLElement, index)">
            <img :src="item.img" />
          </div>
          <div class="text-container" :ref="(el) => setDetailItemRightRefs(el as HTMLElement, index)">
            <div class="title">{{ item.title }}</div>
            <div class="desc">{{ item.desc }}</div>
          </div>
        </template>
        <template v-else>
          <div class="text-container text-right" :class="{ '!text-left': breakpoint === sizeEnum.XS }" :ref="(el) => setDetailItemLeftRefs(el as HTMLElement, index)">
            <div class="title">{{ item.title }}</div>
            <div class="desc">{{ item.desc }}</div>
          </div>
          <div class="image-container" :ref="(el) => setDetailItemRightRefs(el as HTMLElement, index)">
            <img :src="item.img" />
          </div>
        </template>
      </div>
    </div>

    <div class="section mb-140px" :class="{ '!mb-40px': breakpoint === sizeEnum.XS }">
      <swiper
        :modules="[Pagination]"
        :pagination="{
          clickable: true,
          renderBullet,
        }"
        class="material-swiper"
        @slideChange="handleSlideChange"
      >
        <swiper-slide v-for="(slide, index) in productDetail.productBigImages" :key="index">
          <div class="full-slide-content">
            <img class="bg" :src="slide" />
          </div>
        </swiper-slide>
      </swiper>
    </div>

    <div class="section">
      <div class="content position-relative">
        <swiper :spaceBetween="realWidthRef >= screenEnum.LG ? 25 : 20" :slidesPerView="breakpoint === sizeEnum.XS ? 1 : 4" class="multiple-swiper" @swiper="onSwiper">
          <swiper-slide v-for="(item, index) in productDetail.productSmallImages" :key="index" class="custom-slide">
            <div class="slide-content">
              <img class="bg" :src="item" />
            </div>
          </swiper-slide>
        </swiper>
        <template v-if="(breakpoint === sizeEnum.XS && productDetail.productSmallImages.length > 1) || (breakpoint !== sizeEnum.XS && productDetail.productSmallImages.length > 4)">
          <div class="custom-prev" @click="slidePrev">
            <img src="@/assets/images/craftmanship/slide-left.png" alt="Previous" />
          </div>
          <div class="custom-next" @click="slideNext">
            <img src="@/assets/images/craftmanship/slide-right.png" alt="Next" />
          </div>
        </template>
      </div>
      <div class="desc-block-container" :class="breakpoint === sizeEnum.XS ? 'my-40px' : 'my-100px'">
        <img src="@/assets/images/tuteng.png" class="bg" />

        <h2 class="desc-title">Technical Details</h2>
      </div>
    </div>

    <div class="section property-container">
      <div class="content">
        <Collapse title="Structure" :collapsed="false">
          <div class="structure-container">
            <div class="image-part">
              <img class="main-image" :src="productDetail.structure.mainImage" />
              <div class="sub-images">
                <div class="sub-image" v-for="(item, index) in productDetail.structure.subImages" :key="index">
                  <img :src="item.image" />
                  <div class="sub-image-title">{{ item.name }}</div>
                </div>
              </div>
            </div>
            <div class="text-part">
              <div class="item-container">
                {{ productDetail.structure.desc }}
              </div>
              <div v-if="productDetail.structure.height" class="item-container">
                <span class="label">Height (H):</span>
                {{ productDetail.structure.height }}
              </div>
              <div v-if="productDetail.structure.width" class="item-container">
                <span class="label">Width (W):</span>
                {{ productDetail.structure.width }}
              </div>
              <div v-if="productDetail.structure.depth" class="item-container">
                <span class="label">Depth (D):</span>
                {{ productDetail.structure.depth }}
              </div>
            </div>
          </div>
        </Collapse>
        <Collapse v-for="(property, index) in productDetail.properties" :key="index" :title="property.name">
          <template v-if="isPropertyItemList(property.content)">
            <div class="property-container" :style="propertyColumnNum(property.columnNum)">
              <div class="property-item" v-for="(item, index) in property.content" :key="index">
                <!-- 这里可以添加处理 ProductPropertyItem 数组的代码 -->
                <img :style="propertyImageAspectRatio(property.columnNum)" :src="item.img" />
                <div class="property-item-text">
                  <div v-if="item.propId" class="property-item-id">{{ item.propId }}</div>
                  <div v-if="item.name" class="property-item-name">{{ item.name }}:</div>
                  <div :class="{ '!text-left': property.columnNum !== 4 }" v-if="item.value" class="property-item-value" v-html="item.value"></div>
                </div>
              </div>
            </div>
          </template>
          <template v-else>
            <div class="category-property-container">
              <div class="category-list-container">
                <div
                  class="category-name"
                  :class="{ active: property.content.activeIndex === index }"
                  v-for="(item, index) in property.content.categoryItems"
                  :key="index"
                  @click="handleCategoryClick(property.content, index)"
                >
                  {{ item.category }}
                </div>
              </div>
            </div>
            <div class="property-container" :style="propertyColumnNum(property.columnNum)">
              <div class="property-item" v-for="(item, index) in property.content.categoryItems[property.content.activeIndex].list" :key="index">
                <!-- 这里可以添加处理 ProductPropertyItem 数组的代码 -->
                <img :style="propertyImageAspectRatio(property.columnNum)" :src="item.img" />
                <div class="property-item-text">
                  <div :class="{ '!text-left': property.columnNum !== 4 }" v-if="item.propId" class="property-item-id">{{ item.propId }}</div>
                  <div v-if="item.name" class="property-item-name">{{ item.name }}:</div>
                  <div :class="{ '!text-left': property.columnNum !== 4 }" v-if="item.value" class="property-item-value" v-html="item.value"></div>
                </div>
              </div>
            </div>
          </template>
        </Collapse>

        <div class="flex justify-center" :class="breakpoint !== sizeEnum.XS ? 'pt-100px' : 'pt-40px'">
          <a href="/#/contact" class="more-info-btn">MORE INFO</a>
        </div>
      </div>
    </div>

    <div class="section">
      <div class="desc-block-container">
        <img src="@/assets/images/home/down-flower.png" class="down-flower" />
        <h2 class="desc-title">Other Products</h2>
        <div class="desc-content">{{ productDetail.otherProductDesc }}</div>
      </div>

      <div class="content">
        <div class="other-product-container">
          <a :href="`/#/products/${item.id}`" class="other-product-item" v-for="(item, index) in productDetail.otherProducts" :key="index">
            <img :src="item.heroBgUrl" />
            <div class="title">{{ item.title }}</div>
            <div class="subtitle">{{ item.subtitle }}</div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, nextTick, onBeforeUnmount } from "vue";
import { createBreakpointListen } from "@/hooks/useBreakpoint";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination } from "swiper/modules";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { sizeEnum, screenEnum } from "@/enums/breakPoint";
import ActiveIndicator from "@/assets/images/about/p06.png";
import InactiveIndicator from "@/assets/images/about/p07.png";

import { CategoryProperty, ProductDetailVO, ProductPropertyItem } from "@/api/model";
import type { Swiper as SwiperType } from "swiper";
import Collapse from "./components/Collapse.vue";
import { productDetailList } from "@/data/productData";

import "swiper/css";
import "swiper/css/pagination";
import { useRoute } from "vue-router";
const route = useRoute();

const bannerContentRef = ref<HTMLElement | null>(null);

const { screenRef: breakpoint, realWidthRef } = createBreakpointListen();
let scrollTriggers: ScrollTrigger[] = [];

gsap.registerPlugin(ScrollTrigger);

const productDetail = ref<ProductDetailVO>({
  id: "",
  heroBgUrl: "",
  heroBgUrlMobile: "",
  name: "",
  subheader: "",
  productionIntroduction: "",
  featureHight: "",
  details: [],
  productBigImages: [],
  productSmallImages: [],
  structure: {
    desc: "",
    height: "",
    width: "",
    depth: "",
    mainImage: "",
    subImages: [],
  },
  properties: [],
  otherProductDesc: "",
  otherProducts: [],
});

const handleCategoryClick = (item: CategoryProperty, index: number) => {
  item.activeIndex = index;
};

const setDetailItemRefs = (ref: HTMLElement | null, index: number) => {
  detailItemRefs.value[index] = ref;
};

const setDetailItemLeftRefs = (ref: HTMLElement | null, index: number) => {
  detailItemLeftRefs.value[index] = ref;
};

const setDetailItemRightRefs = (ref: HTMLElement | null, index: number) => {
  detailItemRightRefs.value[index] = ref;
};

const initializeAnimations = () => {
  if (!bannerContentRef.value) return;

  // Clear existing ScrollTriggers
  scrollTriggers.forEach((trigger) => trigger.kill());
  scrollTriggers = [];

  // Reset initial states
  gsap.set(bannerContentRef.value, {
    opacity: 0,
    y: 100,
  });

  // Banner animation
  gsap.to(bannerContentRef.value, {
    opacity: 1,
    y: 0,
    duration: 1.2,
    ease: "power2.out",
    delay: 0.2,
    scrollTrigger: {
      trigger: bannerContentRef.value,
      start: "top center",
      end: "bottom center",
      toggleActions: "restart reset restart reset",
    },
  });

  detailItemRefs.value.forEach((itemRef, idx) => {
    if (itemRef) {
      gsap.set(detailItemLeftRefs.value[idx], { x: -50 });
      gsap.set(detailItemRightRefs.value[idx], { x: 50 });
      gsap.set(itemRef, { opacity: 0, y: 50 }); // 设置初始状态

      gsap.to(itemRef, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: itemRef,
          start: "top 70%", // 进入可视区域的40%
          end: "bottom 0%",
          toggleActions: "restart none none none",
          onLeaveBack: () => {
            gsap.to(itemRef, {
              opacity: 0,
              duration: 0.6,
              ease: "power2.out",
              onComplete: () => {
                gsap.set(itemRef, { y: 50 }); // 设置初始状态
                gsap.set(detailItemLeftRefs.value[idx], { x: -50 });
                gsap.set(detailItemRightRefs.value[idx], { x: 50 });
              },
            }); // 设置初始状态
          },
        },
        onStart: () => {
          gsap.to(detailItemLeftRefs.value[idx], { x: 0, duration: 0.8, ease: "power2.out" });
          gsap.to(detailItemRightRefs.value[idx], { x: 0, duration: 0.8, ease: "power2.out" });
        },
      });
      // 使用 ScrollTrigger 触发动画
      // scrollTriggers.push(
      //   ScrollTrigger.create({
      //     trigger: itemRef,
      //     start: "top 70%", // 进入可视区域的40%
      //     end: "bottom 30%",

      //     // onEnter: () => {
      //     //   gsap.to(itemRef, {
      //     //     opacity: 1,
      //     //     y: 0,
      //     //     duration: 1,
      //     //     ease: "power2.out",
      //     //   });
      //     // },
      //     // once: true, // 只执行一次
      //   }),
      // );
    }
  });
};

const activeIndex = ref(0);

const renderBullet = (index, className) => {
  const imgSrc = activeIndex.value === index ? ActiveIndicator : InactiveIndicator;
  return `<div  class="${className}"><img  src="${imgSrc}" /></div>`;
};
const handleSlideChange = (swiper) => {
  activeIndex.value = swiper.activeIndex;
  const bullets = document.querySelectorAll(".swiper-pagination-bullet img");
  bullets.forEach((bullet, idx) => {
    (bullet as HTMLImageElement).src = activeIndex.value === idx ? ActiveIndicator : InactiveIndicator;
  });
};

const muntiSwiperInstance = ref<SwiperType | null>(null);

const onSwiper = (swiper: SwiperType) => {
  muntiSwiperInstance.value = swiper;
};
const slideNext = () => {
  if (muntiSwiperInstance.value) {
    muntiSwiperInstance.value.slideNext();
  }
};

const slidePrev = () => {
  if (muntiSwiperInstance.value) {
    muntiSwiperInstance.value.slidePrev();
  }
};

const isPropertyItemList = (content: any): content is ProductPropertyItem[] => {
  return Array.isArray(content) && content.every((item) => typeof item === "object" && !("activeIndex" in item));
};

const propertyColumnNum = (columnNum: number) => {
  switch (columnNum) {
    case 2:
      return breakpoint.value !== sizeEnum.XS ? "grid-template-columns: repeat(2, 1fr);" : "grid-template-columns: repeat(1, 1fr);";
    case 3:
      return breakpoint.value !== sizeEnum.XS ? "grid-template-columns: repeat(3, 1fr);" : "grid-template-columns: repeat(1, 1fr);";
    case 4:
      return breakpoint.value !== sizeEnum.XS ? "grid-template-columns: repeat(4, 1fr);" : "grid-template-columns: repeat(3, 1fr);";
  }
};
const propertyImageAspectRatio = (columnNum: number) => {
  switch (columnNum) {
    case 2:
      return "aspect-ratio: 734/312;";
    case 3:
      return "aspect-ratio: 499/387;";
    case 4:
      return "aspect-ratio: 1/1;";
  }
};
const detailItemRefs = ref<(HTMLElement | null)[]>(Array(productDetail.value?.details?.length || 0).fill(null));
const detailItemLeftRefs = ref<(HTMLElement | null)[]>(Array(productDetail.value?.details?.length || 0).fill(null));
const detailItemRightRefs = ref<(HTMLElement | null)[]>(Array(productDetail.value?.details?.length || 0).fill(null));

onMounted(() => {
  const id = route.params.id as string;
  const foundProduct = productDetailList.find((product) => product.id === id);

  if (foundProduct) {
    productDetail.value = foundProduct;
  }
  nextTick(() => {
    initializeAnimations();
  });
});

onBeforeUnmount(() => {
  // Clean up all ScrollTriggers when component is unmounted
  scrollTriggers.forEach((trigger) => trigger.kill());
});
</script>

<style scoped lang="scss" setup>
.product-detail-container {
  --bgTextFS-SM: 32px;
  --bgTextFS-xs: 20px;

  --descFS-SM: 22px;
  --descFS-xs: 14px;

  width: 100%;
  position: relative;
  color: #000;
  font-family: "TheSeasons";
  background-color: #faf9ef;

  // background-color: rgb(26, 26, 26);

  .section {
    width: 100%;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;

    @include responseTo("sm") {
      // min-height: 800px;
      // height: 100vh;
      // padding: 40px 0px;
    }
    &.production-introduction,
    &.property-container {
      @include responseTo("sm") {
        padding: 0px 40px;
      }
      @include responseTo("lg") {
        padding: 0px 0px;
      }
    }

    .content {
      width: 100%;
      max-width: 1200px;
      margin: 0 auto;

      @include responseTo("xs") {
        padding: 0 25px;
      }

      .custom-prev,
      .custom-next {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        z-index: 10;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all 0.3s ease;

        background: transparent;

        aspect-ratio: 142/63;
        @include responseTo("xs") {
          width: 100px;
        }
        @include responseTo("sm") {
          width: 142px;
        }
        img {
          width: 100%;
          height: 100%;
        }
      }

      .custom-prev {
        left: 5px;
        @include responseTo("xs") {
          left: 0px;
        }
        @include responseTo("sm") {
          left: -80px;
        }
      }

      .custom-next {
        right: 5px;
        @include responseTo("xs") {
          right: 5px;
        }
        @include responseTo("sm") {
          right: -80px;
        }
      }
    }
    .multiple-swiper {
      position: relative;
    }
    .material-swiper {
      height: 100%;
      width: 100%;
      cursor: grab;

      &:active {
        cursor: grabbing;
      }

      :deep(.swiper-pagination) {
        bottom: 0;
        padding-bottom: 60px;

        @include responseTo("xs") {
          padding-bottom: 20px;
        }

        .swiper-pagination-bullet {
          width: 20px;
          height: 20px;
          background: transparent;
          opacity: 1;
          margin: 0 10px;
          transition: all 0.3s ease;

          @include responseTo("xs") {
            width: 16px;
            height: 16px;
          }

          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }

          &-active {
            opacity: 1;
            transform: scale(1.2);
          }
        }
      }
    }
    .full-slide-content {
      width: 100%;
      aspect-ratio: 1920/968;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      align-items: center;
      color: #fff;
      // padding: 0 20%;
      text-align: center;
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      position: relative;

      .bg {
        width: 100%;
        height: 100%;
        position: absolute;
        z-index: -1;
      }
    }
    .slide-content {
      width: 100%;
      aspect-ratio: 356/319;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      align-items: center;
      color: #fff;
      // padding: 0 20%;
      text-align: center;
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      position: relative;

      .bg {
        width: 100%;
        height: 100%;
        position: absolute;
        z-index: -1;
      }
    }

    .structure-container {
      display: flex;
      justify-content: center;

      @include responseTo("xs") {
        flex-direction: column;
        gap: 20px;
      }
      @include responseTo("sm") {
        flex-direction: row;
        gap: 128px;
        padding: 40px 0px;
      }

      .image-part {
        display: flex;
        flex-wrap: wrap;
        @include responseTo("xs") {
          width: 100%;
        }
        @include responseTo("sm") {
          width: 480px;
        }
        .main-image {
          width: 100%;
          aspect-ratio: 567/464;
          margin-bottom: 40px;
          @include responseTo("xs") {
            margin-bottom: 20px;
          }
        }
        .sub-images {
          width: 100%;
          display: flex;
          gap: 40px;
          @include responseTo("xs") {
            gap: 20px;
          }
          .sub-image {
            flex: 1;

            .sub-image-title {
              font-size: 22px;
              font-weight: 300;
              margin-top: 20px;
              font-family: "IvyOra";
              color: #231f20;
              text-align: center;
              @include responseTo("xs") {
                font-size: 12px;
                line-height: 1.3;
              }
            }
            img {
              width: 100%;
              aspect-ratio: 1;
              object-fit: cover;
            }
          }
        }
      }
      .text-part {
        display: flex;
        flex: 1;
        flex-direction: column;

        .item-container {
          width: 100%;
          border-top: 1px solid #231f20;
          font-family: "IvyOra";
          color: #231f20;
          font-weight: 300;

          // &:last-child {
          //   border-bottom: 1px solid #231f20;
          // }

          @include responseTo("xs") {
            padding: 20px 0;
            font-size: 16px;
            line-height: 1.3;
          }
          @include responseTo("sm") {
            padding: 40px 0;
            font-size: 20px;
            line-height: 1.2;
          }
          .label {
            font-weight: 400;
          }
        }
      }
    }

    .property-container {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 40px;
      padding: 40px 0;
      @include responseTo("xs") {
        gap: 20px;
        padding: 20px 0;
        grid-template-columns: repeat(3, 1fr);
      }
      .property-item {
        display: flex;

        gap: 20px;
        flex-direction: column;

        @include responseTo("xs") {
          gap: 16px;
        }
        @include responseTo("sm") {
          gap: 20px;
        }
        img {
          width: 100%;
          aspect-ratio: 1;
          object-fit: cover;
          @include responseTo("xs") {
            margin-bottom: 0px;
          }
          @include responseTo("sm") {
            margin-bottom: 36px;
          }
        }
        .property-item-text {
          font-size: 22px;
          font-weight: 300;
          font-family: "IvyOra";
          color: #231f20;
          text-align: center;
          @include responseTo("xs") {
            font-size: 12px;
            line-height: 1.3;
          }
          .property-item-id {
          }
          .property-item-name {
          }
          .property-item-value {
          }
        }
      }
    }

    .category-property-container {
      padding: 40px 0;
      @include responseTo("xs") {
        padding: 20px 0;
      }
      .category-list-container {
        display: flex;
        gap: 80px;
        padding-left: 40px;
        @include responseTo("xs") {
          gap: 20px;
          padding-left: 0px;
        }

        .category-name {
          font-size: 22px;
          font-weight: 300;
          font-family: "IvyOra";
          color: #231f20;
          text-align: center;
          cursor: pointer;
          transition: all 0.3s ease;

          @include responseTo("xs") {
            font-size: 16px;
          }
          &.active {
            text-decoration: underline;
            text-decoration-thickness: 1px;
            text-underline-offset: 4px;
          }
        }
      }
    }

    .other-product-container {
      display: flex;
      gap: 20px;

      @include responseTo("xs") {
        flex-direction: column;
        gap: 40px;
        padding: 40px 0;
      }

      .other-product-item {
        display: flex;
        flex-direction: column;
        font-weight: 300;
        line-height: 1.5;
        font-family: "IvyOra";
        color: #231f20;
        text-align: center;

        img {
          width: 100%;
          aspect-ratio: 498/319;
          margin-bottom: 20px;
        }
      }
    }

    .more-info-btn {
      aspect-ratio: 203/53;
      background-image: url(@/assets/images/about/contact-btn.png);
      background-size: 100% 100%;
      background-repeat: no-repeat;
      background-position: center;
      color: #faf9ef;
      font-weight: 300;
      font-family: "IvyOra";
      display: flex;
      justify-content: center;
      align-items: center;

      @include responseTo("xs") {
        width: 140px;
        font-size: 14px;
        line-height: 1.5;
      }
      @include responseTo("sm") {
        width: 203px;
        font-size: 20px;
        line-height: 53px;
      }
    }

    .bg {
      transition: all 0.3s ease;
      background-size: 100% 100%;
      background-repeat: no-repeat;
      background-position: center;
      &:hover {
        background-size: 105% 105% !important;
      }
    }

    .desc-block-container {
      padding: 80px 0px;
      background-color: #faf9ef;
      display: flex;
      width: 100%;
      flex-direction: column;
      align-items: center;
      position: relative;

      @include responseTo("xs") {
        padding: 40px 20px;
      }
      .bg {
        position: absolute;
        z-index: 0;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        @include responseTo("xs") {
          width: 150px;
          height: 150px;
        }
        @include responseTo("sm") {
          width: 300px;
          height: 300px;
        }
      }
      .down-flower {
        // position: absolute;
        // bottom: 0;
        // left: 50%;
        // transform: translateX(-50%);
        @include responseTo("sm") {
          width: 83px;
          height: 188px;
        }
        @include responseTo("xs") {
          width: 40px;
          aspect-ratio: 83/188;
          margin-bottom: 20px;
        }
      }
      .desc-title {
        position: relative;

        @include responseTo("xs") {
          font-size: 24px;
          margin-bottom: 20px;
          margin-top: 20px;
          font-weight: bold;
        }
        @include responseTo("sm") {
          font-size: 42px;
          margin-bottom: 34px;
          margin-top: 20px;
        }
      }
      .desc-content {
        position: relative;

        font-size: 24px;
        line-height: 1.5;
        color: #231f20;
        text-align: center;
        max-width: 1250px;
        font-family: "IvyOra";
        font-weight: 300;

        @include responseTo("xs") {
          font-size: 18px;
          line-height: 1.3;

          // margin-bottom: 20px;
        }
      }
      .desc-href {
        position: relative;

        font-size: 24px;
        text-decoration: underline;
        text-decoration-thickness: 1px;
        text-underline-offset: 4px;
        margin-top: 43px;
        margin-bottom: 53px;
        font-weight: 300;
      }
    }
    &.first {
      // background-image: url("v-bind(productDetail.heroBgUrl)");
      display: flex;
      justify-content: center;
      align-items: center;
      color: #fff;
      font-size: 32px;
      font-weight: 600;
      @include responseTo("xs") {
        width: 100%;
        aspect-ratio: 750 / 800;
      }
      @include responseTo("sm") {
        height: 100vh;
      }

      .down-arrow-image {
        position: absolute;
        bottom: 30px;
        left: 50%;
        width: 30px;
        height: 158px;
        transform: translateX(-50%);
        animation: floatArrow 2s ease-in-out infinite;
        opacity: 0;
      }

      @keyframes floatArrow {
        0% {
          transform: translateX(-50%) translateY(0) scale(0.9);
          opacity: 0;
        }
        100% {
          transform: translateX(-50%) translateY(15px) scale(1);
          opacity: 1;
        }
      }

      .content {
        max-width: 1200px;
        margin: 0 auto;
        height: 100%;
        position: relative;
        .banner-content {
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;

          .title {
            font-size: 48px;
            font-weight: 600;
            margin-bottom: 40px;

            @include responseTo("xs") {
              font-size: 30px;
              font-weight: 600;
              margin-bottom: 20px;
            }
          }
          .sub-title {
            font-size: 32px;
            font-weight: 500;
            font-family: "IvyOra";
            @include responseTo("xs") {
              font-size: 24px;
              font-weight: 400;
              text-align: center;
            }
          }
        }
      }
    }
  }

  .detail-item-container {
    width: 100%;
    margin-bottom: 40px;
    @include responseTo("sm") {
      padding: 0 40px;
    }

    .content {
      width: 100%;
      max-width: 1200px;
      margin: 0 auto;
      display: flex;
      justify-content: center;
      gap: 40px;

      @include responseTo("xs") {
        padding: 0 25px;
        flex-direction: column;
        gap: 30px;
      }

      .image-container {
        flex: 1;
        img {
          width: 100%;
          aspect-ratio: 741/509;
        }
      }

      .text-container {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        color: #231f20;
        .title {
          font-size: 24px;

          font-weight: bold;
          margin-bottom: 30px;

          @include responseTo("xs") {
            font-size: 20px;
          }
        }
        .desc {
          font-size: 22px;
          font-weight: 300;
          line-height: 1.3;
          font-family: "IvyOra";

          @include responseTo("xs") {
            font-size: 18px;
          }
        }
      }
    }
  }
}
</style>
