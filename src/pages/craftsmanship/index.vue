<template>
  <div class="craftsmanship-container">
    <div class="section first">
      <div class="content">
        <div class="banner-content" ref="bannerContentRef">
          <div class="title">Craftsmanship & Materials</div>
          <div class="sub-title">Transforming raw materials into impeccable works of art</div>
        </div>
        <img src="@/assets/images/projects/down-arrow.png" alt="project-info" class="down-arrow-image" />
      </div>
    </div>
    <div class="desc-block-container">
      <img src="@/assets/images/home/down-flower.png" class="down-flower" />
      <h2 class="desc-title">Craftsmanship</h2>
      <div class="desc-content">We craft each product with the singular focus on imbuing timeless elegance into our designs.</div>
    </div>
    <div class="intro-container">
      <div class="intro-item" v-for="(item, index) in introList" :key="index" :ref="(el) => setIntroItemRefs(el as HTMLElement, index)">
        <div class="intro-wrapper" :style="{ flexDirection: index % 2 ? 'row-reverse' : 'row' }">
          <div class="intro-left" :ref="(el) => setIntroItemLeftRefs(el as HTMLElement, index)">
            <img class="left-img" :src="index % 2 ? item.rightImg : item.leftImg" alt="intro-left" />
          </div>
          <div class="intro-right">
            <img class="right-img" :src="index % 2 ? item.leftImg : item.rightImg" alt="intro-right" :ref="(el) => setIntroItemRightRefs(el as HTMLElement, index)" />
            <div
              v-if="breakpoint !== sizeEnum.XS"
              class="intro-description"
              :class="index % 2 ? 'text-left' : 'text-right'"
              :style="{ 'align-self': index % 2 ? 'start' : 'end' }"
              v-html="item.desc"
              :ref="(el) => setIntroItemDescRefs(el as HTMLElement, index)"
            ></div>
            <div
              v-else
              class="inner-intro-icon"
              :class="index % 2 ? 'rotate-180 ' : 'rotate-0 '"
              :style="{
                'align-self': index % 2 ? 'start' : 'end',
              }"
            >
              <img src="@/assets/images/craftmanship/intro/intro-icon.png" alt="intro-icon" />
            </div>
          </div>
        </div>
        <div
          class="intro-icon"
          v-if="breakpoint !== sizeEnum.XS"
          :class="index % 2 ? 'rotate-180 ' : 'rotate-0 '"
          :style="{
            'align-self': index % 2 ? 'start' : 'end',
          }"
        >
          <img src="@/assets/images/craftmanship/intro/intro-icon.png" alt="intro-icon" />
        </div>
        <div class="outer-intro-description" :class="index % 2 ? 'text-left' : 'text-right'" v-else v-html="item.desc" :ref="(el) => setIntroItemDescRefs(el as HTMLElement, index)"></div>
      </div>
    </div>
    <section class="materials">
      <div class="desc-block-container" :class="{ '!py-[160px]': breakpoint !== sizeEnum.XS }">
        <img src="@/assets/images/tuteng.png" class="bg" />

        <h2 class="desc-title">Materials</h2>
        <div class="desc-content">
          Our wide gamut of materials offer each client the opportunity to create a space that is bespoke to their unique vision. The possibilities are virtually endless through the combination of
          different materials, colors, textures and surfaces.
        </div>
      </div>

      <div class="materials__grid">
        <div class="materials__column">
          <div class="materials__items">
            <MaterialCard
              ref="materialCardRef1"
              image="https://fileprod.obs.cn-east-3.myhuaweicloud.com/mail/images/craftmanship/material1.jpg"
              title="Woods"
              description="Choose between species of Oak, Walnut, Eucalyptus and more to make your space one with nature."
            />
            <MaterialCard
              ref="materialCardRef2"
              image="https://fileprod.obs.cn-east-3.myhuaweicloud.com/mail/images/craftmanship/material3.jpg"
              title="Metals"
              description="A unique element to contrast with woods or lacquers and invoke phenomenal beauty."
            />
          </div>
          <div v-if="breakpoint !== sizeEnum.XS" class="materials__icon">
            <img src="@/assets/images/craftmanship/intro/intro-icon.png" alt="Decorative icon" />
          </div>
        </div>

        <div class="materials__column materials__column--right">
          <div v-if="breakpoint !== sizeEnum.XS" class="materials__icon materials__icon--right">
            <img src="@/assets/images/craftmanship/intro/intro-icon.png" alt="Decorative icon" />
          </div>
          <div class="materials__items">
            <MaterialCard
              ref="materialCardRef3"
              image="https://fileprod.obs.cn-east-3.myhuaweicloud.com/mail/images/craftmanship/material2.jpg"
              title="Lacquers"
              description="Add a contemporary touch of elegance to your space using textures ranging from matte lacquers to concrete and stone finishes."
            />
            <MaterialCard
              ref="materialCardRef4"
              image="https://fileprod.obs.cn-east-3.myhuaweicloud.com/mail/images/craftmanship/material4.jpg"
              title="Eco Leathers"
              description="Offering a sustainable, stylish alternative to traditional materials, combining luxury with environmental responsibility."
            />
          </div>
        </div>
      </div>
    </section>
    <div class="desc-block-container">
      <img src="@/assets/images/home/down-flower.png" class="down-flower" />
      <h2 class="desc-title">Why VIMORA</h2>
      <!-- <div class="desc-content">For Unmatched Expertise and Reliable Solutions.</div> -->
    </div>

    <div v-if="breakpoint !== sizeEnum.XS" class="three-column-images">
      <div class="image-wrapper" v-for="(item, index) in whyChooseList" :key="index">
        <img :src="item.image" :alt="`Craftsmanship image ${index + 1}`" />
        <div class="overlay" v-if="item.title">
          <h3>{{ item.title }}</h3>
          <p>{{ item.description }}</p>
        </div>
      </div>
    </div>

    <div v-else class="materials__grid">
      <div class="materials__column">
        <div class="materials__items" v-for="(item, index) in whyChooseList" :key="index">
          <MaterialCard :image="item.image" :title="item.title" :description="item.description" />
        </div>
      </div>
    </div>
    <div class="desc-block-container">
      <!-- <img src="@/assets/images/home/down-flower.png" class="down-flower" /> -->
      <h2 class="desc-title">VIMORA Products</h2>
      <div class="desc-content">Redefining Standards with Our Premium Offerings.</div>
      <a class="desc-href" href="/#/products">Discover</a>
    </div>
    <div
      :class="{
        'px-100px': realWidthRef >= screenEnum.LG,
        'pb-200px': realWidthRef >= screenEnum.LG,
      }"
    >
      <ImageSwiper :slides="slidesData" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, nextTick } from "vue";
import { createBreakpointListen } from "@/hooks/useBreakpoint";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { sizeEnum, screenEnum } from "@/enums/breakPoint";

import "swiper/css";
import "swiper/css/pagination";
import MaterialCard from "@/components/MaterialCard.vue";
import ImageSwiper from "@/components/ImageSwiper.vue";
const { screenRef: breakpoint, realWidthRef } = createBreakpointListen();

const introList = [
  {
    leftImg: "https://fileprod.obs.cn-east-3.myhuaweicloud.com/mail/images/craftmanship/intro1.jpg",
    rightImg: "https://fileprod.obs.cn-east-3.myhuaweicloud.com/mail/images/craftmanship/intro2.jpg",
    desc: "Each production run is meticulously studied to consistently improve our processes with each iteration, enabling us to minimize wastage and support a sustainable use of resources.",
  },
  {
    leftImg: "https://fileprod.obs.cn-east-3.myhuaweicloud.com/mail/images/craftmanship/intro3.jpg",
    rightImg: "https://fileprod.obs.cn-east-3.myhuaweicloud.com/mail/images/craftmanship/intro4.jpg",
    desc: "Advanced machinery supports our craftsmen to produce each element<br> with the smallest of margins.",
  },
  {
    leftImg: "https://fileprod.obs.cn-east-3.myhuaweicloud.com/mail/images/craftmanship/intro5.jpg",
    rightImg: "https://fileprod.obs.cn-east-3.myhuaweicloud.com/mail/images/craftmanship/intro6.jpg",
    desc: "Our production focuses on sustainability by innovating products and services while continuously improving sourcing and processes to minimize environmental impact.",
  },
];
const bannerContentRef = ref<HTMLElement | null>(null);
const introItemRefs = ref<HTMLElement[]>([]);
const introItemLeftRefs = ref<HTMLElement[]>([]);
const introItemRightRefs = ref<HTMLElement[]>([]);
const introItemDescRefs = ref<HTMLElement[]>([]);

const materialCardRef1 = ref<any>();
const materialCardRef2 = ref<any>();
const materialCardRef3 = ref<any>();
const materialCardRef4 = ref<any>();

const setIntroItemRefs = (ref: HTMLElement, index: number) => {
  introItemRefs.value[index] = ref;
};

const setIntroItemLeftRefs = (ref: HTMLElement, index: number) => {
  introItemLeftRefs.value[index] = ref;
};

const setIntroItemRightRefs = (ref: HTMLElement, index: number) => {
  introItemRightRefs.value[index] = ref;
};

const setIntroItemDescRefs = (ref: HTMLElement, index: number) => {
  introItemDescRefs.value[index] = ref;
};

let scrollTriggers: ScrollTrigger[] = [];
gsap.registerPlugin(ScrollTrigger);

const initializeAnimations = () => {
  if (!bannerContentRef.value) return;
  let start = "top 30%";
  let introItemOffset = 70;
  if (realWidthRef.value >= screenEnum.LG) {
    start = "top 30%";
    introItemOffset = 70;
  } else if (realWidthRef.value >= screenEnum.SM && realWidthRef.value < screenEnum.LG) {
    start = "top 70%";
    introItemOffset = 50;
  } else {
    start = "top 70%";
    introItemOffset = 40;
  }

  // Clear existing ScrollTriggers
  scrollTriggers.forEach((trigger) => trigger.kill());
  scrollTriggers = [];

  // Reset initial states
  gsap.set(bannerContentRef.value, {
    opacity: 0,
    y: 100,
  });

  [materialCardRef1.value?.cardRef, materialCardRef2.value?.cardRef, materialCardRef3.value?.cardRef, materialCardRef4.value?.cardRef].forEach((itemRef) => {
    console.log(itemRef);
    if (itemRef) {
      gsap.set(itemRef, { opacity: 0, y: 50 });
    }
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

  introItemRefs.value.forEach((itemRef, idx) => {
    if (itemRef) {
      gsap.set(itemRef, { opacity: 0 });
      if (idx % 2 === 0) {
        gsap.set(introItemRightRefs.value[idx], { x: introItemOffset });
      } else {
        gsap.set(introItemRightRefs.value[idx], { x: -introItemOffset });
      }
      gsap.set(introItemLeftRefs.value[idx], { y: -introItemOffset });

      gsap.set(introItemDescRefs.value[idx], { y: introItemOffset });
    }

    gsap.to(itemRef, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power2.out",

      scrollTrigger: {
        trigger: itemRef,
        start: "top 50%", // 进入可视区域的40%
        end: "bottom 0%",
        toggleActions: "restart none none none",

        onLeaveBack: () => {
          gsap.to(itemRef, {
            opacity: 0,
            duration: 0.8,
            ease: "power2.out",
            onComplete: () => {
              if (idx % 2 === 0) {
                gsap.set(introItemRightRefs.value[idx], { x: introItemOffset });
              } else {
                gsap.set(introItemRightRefs.value[idx], { x: -introItemOffset });
              }
              gsap.set(introItemLeftRefs.value[idx], { y: -introItemOffset });

              gsap.set(introItemDescRefs.value[idx], { y: introItemOffset });
            },
          }); // 设置初始状态
        },
      },
      onStart: () => {
        gsap.to(introItemLeftRefs.value[idx], { y: 0, duration: 0.8, ease: "power2.out" });
        gsap.to(introItemRightRefs.value[idx], { x: 0, duration: 0.8, ease: "power2.out" });
        gsap.to(introItemDescRefs.value[idx], { y: 0, duration: 0.8, ease: "power2.out" });
      },
    });
  });
  [materialCardRef1.value?.cardRef, materialCardRef2.value?.cardRef, materialCardRef3.value?.cardRef, materialCardRef4.value?.cardRef].forEach((itemRef) => {
    if (itemRef) {
      gsap.to(itemRef, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: itemRef,
          start: "top center",
          end: "bottom center",
          toggleActions: "restart none none none",

          onLeaveBack: () => {
            gsap.to(itemRef, {
              opacity: 0,
              duration: 0.8,
              ease: "power2.out",
            }); // 设置初始状态
          },
        },
      });
    }
  });
};

// Register ScrollTrigger plugin

const whyChooseList = [
  {
    image: "https://fileprod.obs.cn-east-3.myhuaweicloud.com/mail/images/craftmanship/why1.jpg",
    title: "Material Science",
    description: "Chosen for its beauty, character and durability, each material is rigorously refined and tested to ensure perfection.",
  },
  {
    image: "https://fileprod.obs.cn-east-3.myhuaweicloud.com/mail/images/craftmanship/why2.jpg",
    title: "Equipment",
    description: "Utilizing the latest advancements in production machinery to deliver precision at every step.",
  },
  {
    image: "https://fileprod.obs.cn-east-3.myhuaweicloud.com/mail/images/craftmanship/why3.jpg",
    title: "Workmanship",
    description: "Our artisans meticulously ensure that no detail is overlooked. A testament to time-honored craftsmanship.",
  },
];

const slidesData = [
  {
    image: "https://fileprod.obs.cn-east-3.myhuaweicloud.com/mail/images/home/kitchens.jpg",
    title: "Kitchens",
    description: "An exquisite blend of form and function shaped using the finest of materials.",
  },
  {
    image: "https://fileprod.obs.cn-east-3.myhuaweicloud.com/mail/images/home/Wardrobs&Storage.jpg",
    title: "Wardrobes & Storage",
    description: "Presenting a curated solution for every storage need.",
  },
  {
    image: "https://fileprod.obs.cn-east-3.myhuaweicloud.com/mail/images/home/bathrooms.jpg",
    title: "Bathrooms",
    description: "Emphasizing utility in design to transform any space into a haven of serenity.",
  },
  // ... 其他幻灯片数据
];

onMounted(() => {
  nextTick(() => {
    initializeAnimations();
  });
});

onBeforeUnmount(() => {
  // Clean up all ScrollTriggers when component is unmounted
  scrollTriggers.forEach((trigger) => trigger.kill());
});
</script>

<style scoped lang="scss">
.craftsmanship-container {
  --page-padding-sm: 40px;
  width: 100%;
  position: relative;
  color: #000;
  font-family: "TheSeasons";
  // background-color: rgb(26, 26, 26);
  background-color: #faf9f0;
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
      @include responseTo("lg") {
        width: 300px;
        height: 300px;
      }
    }
    .down-flower {
      // position: absolute;
      // bottom: 0;
      // left: 50%;
      // transform: translateX(-50%);
      aspect-ratio: 83/188;

      @include responseTo("xs") {
        width: 40px;
        aspect-ratio: 83/188;
        margin-bottom: 20px;
      }
      @include responseTo("sm") {
        height: 126px;
      }
      @include responseTo("lg") {
        width: 83px;
        height: 188px;
      }
    }
    .desc-title {
      position: relative;
      font-weight: bold;

      @include responseTo("xs") {
        font-size: 24px;
        margin-bottom: 20px;
        margin-top: 20px;
      }
      @include responseTo("sm") {
        font-size: 36px;
        margin-bottom: 20px;
        margin-top: 40px;
      }
      @include responseTo("lg") {
        font-size: 42px;
        margin-bottom: 34px;
        margin-top: 20px;
      }
    }
    .desc-content {
      position: relative;

      font-size: 26px;
      line-height: 1.5;
      color: #231f20;
      text-align: center;
      // max-width: 1250px;
      font-family: "IvyOra";
      font-weight: 300;

      @include responseTo("xs") {
        font-size: 18px;
        line-height: 1.3;

        // margin-bottom: 20px;
      }
      @include responseTo("sm") {
        font-size: 30px;
        line-height: 1.3;
        padding: var(--page-padding-sm);
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

      @include responseTo("xs") {
        font-size: 18px;
        margin-top: 20px;
        margin-bottom: 30px;
      }
      @include responseTo("sm") {
        font-size: 30px;
        margin-top: 20px;
        margin-bottom: 30px;
      }
    }
  }
  .intro-container {
    display: flex;
    width: 100%;
    flex-direction: column;
    // padding: 0 100px;
    max-width: 1200px;
    margin: 0 auto;
    gap: 50px;
    @include responseTo("xs") {
      padding: 0 20px;
    }
    @include responseTo("sm") {
      padding: var(--page-padding-sm);
      gap: 20px;
    }

    @include responseTo("lg") {
      gap: 50px;
    }
    .intro-item {
      display: flex;
      flex-direction: column;
      width: 100%;

      .intro-wrapper {
        display: flex;
        width: 100%;
        gap: 34px;
        @include responseTo("xs") {
          gap: 10px;
        }
        .intro-left {
          @include responseTo("xs") {
            width: 34%;
          }
          @include responseTo("sm") {
            width: 30%;
          }

          .left-img {
            width: 100%;
            @include responseTo("xs") {
              aspect-ratio: 240/346;
            }
            @include responseTo("sm") {
              aspect-ratio: 473/803;
            }
            object-fit: cover;
          }
          .inner-intro-icon {
            width: 60px;
            aspect-ratio: 112/34;
            align-self: end;
            img {
              width: 100%;
              object-fit: cover;
            }
          }
        }
        .intro-right {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: end;

          .right-img {
            @include responseTo("xs") {
              aspect-ratio: 445/289;
            }
            @include responseTo("sm") {
              aspect-ratio: 1032/670;
            }
            width: 100%;
          }
          .inner-intro-icon {
            width: 60px;
            aspect-ratio: 112/34;
            align-self: end;
            img {
              width: 100%;
              object-fit: cover;
            }
          }

          .intro-description {
            @extend .ivyOra-light;
            font-size: 20px;
            margin-top: 20px;
            line-height: 1.3;
          }
        }
      }
      .outer-intro-description {
        @extend .ivyOra-light;
        margin-top: 20px;
        line-height: 1.3;
      }
      .intro-icon {
        width: 112px;
        height: 34px;
        align-self: end;
        margin-top: 40px;
        img {
          width: 100%;
        }
      }
    }
    .intro-item-right {
      .intro-wrapper {
        flex-direction: row-reverse;
        .intro-left {
          width: 30%;
          @include responseTo("xs") {
            width: 34%;
          }
          @include responseTo("sm") {
            width: 30%;
          }
          aspect-ratio: 473/803;
        }
        .intro-right {
          flex: 1;
          align-items: start;
          img {
            width: 100%;
            aspect-ratio: 1032/670;
            object-fit: cover;
          }
        }
      }
      .intro-icon {
        align-self: start;
        transform: rotate(180deg);
      }
    }
  }
  .materials {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    // @include responseTo("xs") {
    //   padding: 0 20px;
    // }
    @include responseTo("sm") {
      padding: var(--page-padding-sm);
    }

    &__title {
      font-size: 42px;
      color: #231f20;
      margin-bottom: 40px;
      position: relative;
      z-index: 1;
    }

    &__desc {
      @extend .ivyOra-light;
      line-height: 1.3;
      font-size: 20px;
      color: #231f20;
      text-align: center;
      position: relative;
      z-index: 1;
      max-width: 1200px;
    }

    &__grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 40px;
      // padding: 0 100px;

      @include responseTo("xs") {
        grid-template-columns: 1fr;
        padding: 0 20px;
      }
    }

    &__column {
      display: flex;
      flex-direction: column;
      gap: 50px;

      &--right {
        .materials__items {
          text-align: right;
          @include responseTo("xs") {
            text-align: left;
          }
        }
      }
    }

    &__items {
      display: flex;
      flex-direction: column;
      gap: 50px;
    }

    &__icon {
      width: 112px;
      height: 34px;
      margin-top: 54px;
      transform: rotate(180deg);

      &--right {
        align-self: flex-end;
      }

      img {
        width: 100%;
        height: 100%;
      }
    }
  }
  .section {
    width: 100%;

    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;

    @include responseTo("sm") {
      min-height: 800px;
      height: 100vh;
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

    &.first {
      background-image: url("https://fileprod.obs.cn-east-3.myhuaweicloud.com/mail/images/craftmanship/banner.jpg");

      display: flex;
      justify-content: center;
      align-items: center;
      color: #fff;
      font-size: 32px;
      font-weight: 600;
      height: 100vh;

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
            font-size: 42px;
            margin-bottom: 40px;
            @extend .theSeasons-bold;
            @include responseTo("xs") {
              font-size: 26px;
              margin-bottom: 20px;
            }
          }
          .sub-title {
            font-size: 26px;
            @extend .ivyOra-light;
            @include responseTo("xs") {
              font-size: 18px;
              font-weight: 300;
              text-align: center;
            }
          }
        }
        .down-arrow-image {
          width: 30px;
          height: 158px;
          margin-left: 50%;
          transform: translateX(-50%);
          animation: floatArrow 2s ease-in-out infinite;
          opacity: 0.3;
          position: absolute;
          bottom: 34px;
        }

        @keyframes floatArrow {
          0% {
            transform: translateX(-50%) translateY(0);
            opacity: 0.3;
          }
          50% {
            transform: translateX(-50%) translateY(15px);
            opacity: 1;
          }
          100% {
            transform: translateX(-50%) translateY(0);
            opacity: 0.3;
          }
        }
      }
    }
  }
}

.material-card {
  display: flex;
  flex-direction: column;
  gap: 20px;

  &__image {
    aspect-ratio: 16/9;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.3s ease;

      &:hover {
        transform: scale(1.05);
      }
    }
  }

  &__title {
    font-size: 26px;
    color: #231f20;
    font-weight: 500;
    margin-bottom: 10px;
  }

  &__desc {
    font-size: 18px;
    color: #231f20;
    line-height: 1.5;
    font-weight: 300;
  }
}

.three-column-images {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
  margin-bottom: 80px;

  @include responseTo("sm") {
    gap: 20px;
  }
  @include responseTo("lg") {
    gap: 40px;
  }

  .image-wrapper {
    position: relative;
    aspect-ratio: 612/821;
    overflow: hidden;
    cursor: pointer;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.3s ease;
    }

    .overlay {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      padding: 40px 20px;
      background: linear-gradient(to top, rgba(0, 0, 0, 0.7), transparent);
      color: #fff;

      h3 {
        font-family: "TheSeasons";
        font-size: 36px;
        margin-bottom: 40px;
        text-align: center;
        @include responseTo("sm") {
          font-size: 26px;
          margin-bottom: 20px;
        }
        @include responseTo("lg") {
          font-size: 36px;
          margin-bottom: 40px;
        }
      }

      p {
        @extend .ivyOra-light;
        line-height: 1.3;
        font-weight: 300;
        text-align: center;
        color: #fff;
        opacity: 0.9;
        @include responseTo("sm") {
          font-size: 16px;
          height: 100px;
        }
        @include responseTo("lg") {
          font-size: 20px;
          height: 120px;
        }
      }
    }

    &:hover {
      img {
        transform: scale(1.05);
      }
    }
  }
}
</style>
