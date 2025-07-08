<template>
  <div class="home-container">
    <div class="countdown-container" v-if="countdown.isBeforeTarget">
      <img class="bg-flower-1" src="@/assets/images/tuteng.png" />
      <img class="bg-flower-2" src="@/assets/images/tuteng.png" />
      <div class="content">
        <div class="countdown-header">
          <img class="countdown-header-img" src="@/assets/images/logo-kbis.png" />
          <div class="countdown-header-title">Explore Our New Collection At The Kitchen And Bath Industry Show</div>
        </div>
        <div class="countdown-date">
          <div class="countdown-item">
            <div class="countdown-item-value" :key="countdown.days">{{ countdown.days }}</div>
            <div class="countdown-item-title">Days</div>
          </div>
          <span class="colon">:</span>
          <div class="countdown-item">
            <div class="countdown-item-value" :key="countdown.hours">{{ countdown.hours }}</div>
            <div class="countdown-item-title">Hours</div>
          </div>
          <span class="colon">:</span>
          <div class="countdown-item">
            <div class="countdown-item-value" :key="countdown.minutes">{{ countdown.minutes }}</div>
            <div class="countdown-item-title">Minutes</div>
          </div>
          <span class="colon">:</span>
          <div class="countdown-item">
            <div class="countdown-item-value" :key="countdown.seconds">{{ countdown.seconds }}</div>
            <div class="countdown-item-title">Seconds</div>
          </div>
        </div>

        <div class="countdown-desc">
          <div class="countdown-desc-title">25th-27th Feb</div>
          <div class="countdown-desc-location">LAS VEGAS 2025</div>
        </div>
      </div>
    </div>

    <!-- video -->

    <div class="video-container" v-if="realWidthRef >= screenEnum.LG">
      <video poster="https://fileprod.obs.cn-east-3.myhuaweicloud.com/mail/VIMORA_BRAND_VIDEO.jpg" autoplay muted loop playsinline webkit-playsinline id="bg-video">
        <source src="https://fileprod.obs.cn-east-3.myhuaweicloud.com/mail/VIMORA_BRAND_VIDEO.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <img src="@/assets/images/projects/down-arrow.png" alt="project-info" class="down-arrow-image" />
    </div>
    <template v-else>
      <div class="section first">
        <div class="content">
          <img src="@/assets/images/projects/down-arrow.png" alt="project-info" class="down-arrow-image" />
        </div>
      </div>

      <div class="section">
        <div class="desc-block-container">
          <img src="@/assets/images/home/down-flower.png" class="down-flower" />
          <h2 class="desc-title">About VIMORA</h2>
          <div class="desc-content">The journey of crafting timeless elegance</div>
          <a class="desc-href" href="/#/aboutUs">Discover</a>
        </div>
        <div class="content">
          <video poster="https://fileprod.obs.cn-east-3.myhuaweicloud.com/mail/VIMORA_BRAND_VIDEO.jpg" class="video-mobile" controls loop playsinline webkit-playsinline id="bg-video">
            <source src="https://fileprod.obs.cn-east-3.myhuaweicloud.com/mail/VIMORA_BRAND_VIDEO.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </template>

    <!-- product desc -->
    <div class="desc-block-container">
      <img src="@/assets/images/home/down-flower.png" class="down-flower" />
      <h2 class="desc-title">VIMORA Products</h2>
      <div class="desc-content">Redefining Standards with Our Premium Offerings.</div>
      <a class="desc-href" href="/#/products">Discover</a>
    </div>

    <!-- swiper -->
    <div class="home-container-swiper">
      <div class="content">
        <swiper
          :modules="[Pagination]"
          :pagination="{
            clickable: true,
            renderBullet,
          }"
          class="material-swiper"
          @slideChange="handleSlideChange"
        >
          <swiper-slide v-for="(slide, index) in slides" :key="index">
            <div class="slide-content">
              <img class="bg" :src="slide.bgImage" />
              <div class="text-content">
                <h2 class="title">{{ slide.title }}</h2>
                <p class="description">{{ slide.description }}</p>
              </div>
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </div>

    <div class="section">
      <div class="content">
        <div class="desc-block-container" :class="realWidthRef >= screenEnum.LG ? '!pt-[80px]' : '!pt-[140px]'">
          <!-- <img src="@/assets/images/home/down-flower.png" class="down-flower" /> -->
          <h2 class="desc-title">2025 Kitchen Collections</h2>
          <div class="desc-content">
            Designed considering the smallest of details, Vimora kitchens turn every space into a statement. An exquisite blend of form and function shaped using the finest of materials.
          </div>
          <a class="desc-href" href="/#/products">Discover</a>
        </div>
      </div>
    </div>

    <div class="home-carousel-container">
      <HomeCarousel :items="kitchens" v-if="realWidthRef >= screenEnum.LG" />

      <div v-else class="content">
        <div class="country-container">
          <a :href="`/#/products/${item.id}`" class="country-item" v-for="(item, index) in kitchens" :key="index">
            <img :src="item.image" alt="kitchen" />
            <div class="title">{{ item.title }}</div>
            <div class="sub-title">{{ item.subtitle }}</div>
          </a>
        </div>
      </div>
    </div>
    <!-- product desc -->
    <div class="section">
      <div class="desc-block-container">
        <img src="@/assets/images/home/down-flower.png" class="down-flower" />

        <h2 class="desc-title">Craftsmanship & Materials</h2>
        <div class="desc-content">Excellence in every detail.</div>
        <a class="desc-href" href="/#/craftsmanship">Discover</a>
      </div>
    </div>
    <!-- product picture -->
    <div class="home-material-container">
      <div class="content">
        <template v-if="breakpoint !== sizeEnum.XS">
          <div class="material-row">
            <div class="material-column">
              <div class="long-img">
                <img src="https://fileprod.obs.cn-east-3.myhuaweicloud.com/mail/images/home/craft1.jpg" />
              </div>
              <div class="short-img">
                <img src="https://fileprod.obs.cn-east-3.myhuaweicloud.com/mail/images/home/craft2.jpg" />
              </div>
            </div>
            <div class="material-column">
              <div class="short-img">
                <img src="https://fileprod.obs.cn-east-3.myhuaweicloud.com/mail/images/home/craft3.jpg" />
              </div>

              <div class="long-img">
                <img src="https://fileprod.obs.cn-east-3.myhuaweicloud.com/mail/images/home/craft4.jpg" />
              </div>
            </div>
          </div>
        </template>
        <template v-else>
          <div class="material-row">
            <div class="long-img">
              <img src="https://fileprod.obs.cn-east-3.myhuaweicloud.com/mail/images/home/craft1.jpg" />
            </div>
            <div class="short-img">
              <img src="https://fileprod.obs.cn-east-3.myhuaweicloud.com/mail/images/home/craft2.jpg" />
            </div>
            <div class="short-img">
              <img src="https://fileprod.obs.cn-east-3.myhuaweicloud.com/mail/images/home/craft3.jpg" />
            </div>

            <div class="long-img">
              <img src="https://fileprod.obs.cn-east-3.myhuaweicloud.com/mail/images/home/craft4.jpg" />
            </div>
          </div>
        </template>
      </div>
    </div>

    <!-- product desc -->
    <div class="desc-block-container">
      <img src="@/assets/images/home/down-flower.png" class="down-flower" />

      <h2 class="desc-title">News & VIMORA</h2>
      <div class="desc-content">Uncovering the Big Moments.</div>
      <a class="desc-href" href="/#/blogDetail">Discover</a>
    </div>
    <!-- news -->
    <div class="home-container-news">
      <div class="content">
        <a href="/#/blogDetail" v-for="(item, index) in news" :key="index" class="news-item">
          <div class="news-content">
            <div class="news-date">{{ item.date }}</div>
            <div class="news-title">{{ item.content }}</div>
          </div>
          <img class="news-img" :src="item.imgUrl" />
        </a>
      </div>
    </div>

    <div class="desc-block-container">
      <img src="@/assets/images/home/down-flower.png" class="down-flower" />

      <h2 class="desc-title">VIMORA Network</h2>
      <div class="desc-content">Empowering Connections, Driving Success</div>
    </div>

    <!-- map -->
    <div class="home-map-container">
      <div class="content">
        <div class="home-map-box">
          <img class="home-map-img" src="https://fileprod.obs.cn-east-3.myhuaweicloud.com/mail/images/home/map.png" />
          <HomeMapMark v-for="(item, index) in mapMarks" :key="index" :name="item.name" :imageUrl="item.imageUrl" :left="item.left" :top="item.top" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import gsap from "gsap";
import { Swiper, SwiperSlide } from "swiper/vue";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ref, onUnmounted } from "vue";
import ActiveIndicator from "@/assets/images/about/p06.png";
import InactiveIndicator from "@/assets/images/about/p07.png";
import HomeMapMark from "@/components/HomeMapMark.vue";
import { sizeEnum, screenEnum } from "@/enums/breakPoint";

import { Scrollbar } from "swiper/modules";
import "swiper/css/scrollbar";
import SwiperCore from "swiper";
import { Pagination, Controller } from "swiper/modules";

import { createBreakpointListen } from "@/hooks/useBreakpoint";
import HomeCarousel from "@/components/HomeCarousel.vue";
import { ProductListItem } from "@/api/model";

import { useCountdown } from "@/hooks/useCountdown";
import "swiper/css";
import "swiper/css/pagination";
import { COUNT_DOWN_TARGET_DATE } from "@/enums/appEnum";
gsap.registerPlugin(ScrollTrigger);

const { screenRef: breakpoint, realWidthRef } = createBreakpointListen();

console.log(screenEnum);

SwiperCore.use([Scrollbar, Controller]);
const countdown = useCountdown(COUNT_DOWN_TARGET_DATE);

onUnmounted(() => {
  document.body.style.overflow = "";
});

const kitchens = ref<ProductListItem[]>([
  { id: "GraceCollection", image: "https://fileprod.obs.cn-east-3.myhuaweicloud.com/mail/images/products/GraceCollection.png", title: "Grace", subtitle: "Timeless and Refined" },
  { id: "AmbedoCollection", image: "https://fileprod.obs.cn-east-3.myhuaweicloud.com/mail/images/products/AmbedoCollection.png", title: "Ambedo", subtitle: "Entrancing Detail" },
  { id: "YugenCollection", image: "https://fileprod.obs.cn-east-3.myhuaweicloud.com/mail/images/products/YugenCollection.png", title: "Yugen", subtitle: "Profound Beyond Words" },
  { id: "FikaCollection", image: "https://fileprod.obs.cn-east-3.myhuaweicloud.com/mail/images/products/FikaCollection.png", title: "Fika ", subtitle: "Pause and Unwind" },
]);
const activeIndex = ref(0);

// news
const news = [
  {
    date: "Dec.24",
    content: "VIMORA at KBIS 2025: Unveiling Luxury at the Las Vegas Convention Center.",
    imgUrl: "https://fileprod.obs.cn-east-3.myhuaweicloud.com/mail/images/home/new.jpg",
  },
];
// swiper
const slides = [
  {
    title: "Kitchens",
    description: "An exquisite blend of form and function shaped using the finest of materials.",
    bgImage: "https://fileprod.obs.cn-east-3.myhuaweicloud.com/mail/images/home/kitchens.jpg",
  },
  {
    title: "Wardrobes & Storage",
    description: "Presenting a curated solution for every storage need.",
    bgImage: "https://fileprod.obs.cn-east-3.myhuaweicloud.com/mail/images/home/Wardrobs&Storage.jpg",
  },
  {
    title: "Bathrooms",
    description: "Emphasizing utility in design to transform any space into a haven of serenity.",
    bgImage: "https://fileprod.obs.cn-east-3.myhuaweicloud.com/mail/images/home/bathrooms.jpg",
  },
];
const mapMarks = [
  {
    name: "Miami, USA",
    imageUrl: "https://fileprod.obs.cn-east-3.myhuaweicloud.com/mail/images/about/miami.jpg",
    left: "26.5%",
    top: "28%",
  },
  {
    name: "Colleferro, Italy",
    imageUrl: "https://fileprod.obs.cn-east-3.myhuaweicloud.com/mail/images/about/italy.jpg",
    left: "53%",
    top: "19%",
  },
  {
    name: "Dubai, UAE",
    imageUrl: "https://fileprod.obs.cn-east-3.myhuaweicloud.com/mail/images/about/dubai.jpg",
    left: "64%",
    top: "29%",
  },
  {
    name: "Bangkok, Thailand",
    imageUrl: "https://fileprod.obs.cn-east-3.myhuaweicloud.com/mail/images/about/bangkok.jpg",
    left: "77%",
    top: "35%",
  },
  {
    name: "Melbourne, Australia",
    imageUrl: "https://fileprod.obs.cn-east-3.myhuaweicloud.com/mail/images/about/melbourne.jpg",
    left: "89%",
    top: "63%",
  },
];
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
</script>

<style scoped lang="scss">
.home-container {
  --page-padding-sm: 0 40px;
  width: 100%;
  background-color: #faf9ef;

  .countdown-container {
    width: 100vw;
    height: 100vh;
    padding: 60px 0px;
    display: flex;
    position: fixed;
    z-index: 9999;
    background-color: #faf9ef;
    color: #00526a;

    justify-content: center;
    align-items: center;
    .content {
      // @include responseTo("lg") {
      //   display: flex;
      //   align-items: center;
      //   justify-content: center;
      //   flex-wrap: wrap;
      //   align-content: center;
      // }

      .countdown-header {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        position: relative;
        z-index: 3;
        gap: 20px;
      }

      .countdown-header-img {
        margin-top: 20px;
        aspect-ratio: 722/98;
        width: 50%;

        @include responseTo("xs") {
          width: 100%;
          margin-top: 60px;
        }
        @include responseTo("lg") {
          margin-top: 120px;
        }
      }
      .countdown-header-title {
        margin-top: 20px;
        @extend .theSeasons-bold;
        font-size: 32px;
        line-height: 1.33;
        @include responseTo("xs") {
          font-size: 28px;
        }
      }
    }

    .countdown-date {
      width: 100%;

      margin-top: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      z-index: 3;

      gap: 20px;
      @include responseTo("xs") {
        gap: 10px;
      }

      .colon {
        font-size: 32px;
        @extend .theSeasons-bold;
        color: #00526a;
      }

      .countdown-item {
        width: 140px;
        height: 140px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        border: 1px solid #00526a;
        border-radius: 10px;

        @include responseTo("xs") {
          width: 80px;
          height: 80px;
        }

        .countdown-item-value {
          font-size: 64px;
          @extend .ivyOra-light;
          font-weight: 500;
          color: #00526a;
          animation: scaleNumber 1s ease;

          @include responseTo("xs") {
            font-size: 28px;
          }
        }
        .countdown-item-title {
          font-size: 24px;
          @extend .theSeasons-bold;
          color: #00526a;

          @include responseTo("xs") {
            font-size: 14px;
          }
        }
      }
    }

    .countdown-desc {
      margin-top: 40px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 10px;
      position: relative;
      z-index: 3;
      @extend .ivyOra-light;

      .countdown-desc-title {
        font-size: 42px;
        color: #00526a;
        @include responseTo("xs") {
          font-size: 36px;
          margin-top: 40px;
        }
      }
      .countdown-desc-location {
        font-size: 42px;
        color: #00526a;
        font-weight: bold;

        @include responseTo("xs") {
          font-size: 36px;
          margin-top: 20px;
        }
      }
    }

    .bg-flower-1 {
      --size: 500px;

      @include responseTo("xs") {
        --size: 300px;
      }
      position: fixed;
      width: var(--size);
      height: var(--size);
      top: -50px;
      left: calc(-1 * var(--size) / 2);
      z-index: 2;
    }

    .bg-flower-2 {
      --size: 500px;
      @include responseTo("xs") {
        --size: 300px;
      }
      width: var(--size);
      height: var(--size);
      position: fixed;
      bottom: -50px;
      right: calc(-1 * var(--size) / 2);
      z-index: 2;
    }
  }

  .video-container {
    position: relative;
    width: 100%;
    @include responseTo("xs") {
      aspect-ratio: 16/9;
    }

    @include responseTo("lg") {
      height: 100vh;
    }
    #bg-video {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
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
  }

  .section {
    width: 100%;
    background-color: #faf9ef;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;

    .content {
      width: 100%;
      max-width: 1200px;
      position: relative;
      margin: 0 auto;

      .video-mobile {
        @include responseTo("xs") {
          width: 100%;
          object-fit: cover;
        }
        @include responseTo("sm") {
          width: 100%;
          padding: var(--page-padding-sm);
          object-fit: cover;
        }
      }
    }

    &.first {
      background-image: url("https://fileprod.obs.cn-east-3.myhuaweicloud.com/mail/images/home/banner.jpg");
      display: flex;
      justify-content: center;
      align-items: center;
      color: #fff;
      font-size: 32px;
      font-weight: 600;
      aspect-ratio: 1;

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
    }
  }

  .home-container-divider {
    width: 100%;
    height: 348px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: #faf9ef;
    .divider-icon {
      width: 212px;
      height: 212px;
      border: 1px dashed black;
    }
    .divider-lg-icon {
      width: 282px;
      height: 282px;
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

  // swiper
  .home-container-swiper {
    width: auto;
    background-color: #faf9ef;

    .content {
      width: 100%;
      max-width: 1200px;
      margin: 0 auto;
    }
    .material-swiper {
      width: 100%;
      box-sizing: border-box;
      cursor: grab;

      @include responseTo("xs") {
        aspect-ratio: 1/1;
      }

      @include responseTo("sm") {
        // padding: var(--page-padding-sm);
        aspect-ratio: 1537/760;
      }
      @include responseTo("lg") {
        aspect-ratio: 1537/760;
      }

      &:active {
        cursor: grabbing;
      }

      :deep(.swiper-pagination) {
        bottom: 0;
        padding-bottom: 20px;

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
    .slide-content {
      height: 100%;
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
        object-fit: cover;
      }

      .text-content {
        margin: 0 auto;
        text-align: center;

        @include responseTo("xs") {
          padding: 0 20px;
          margin-bottom: 60px;
          width: 100%;
        }

        @include responseTo("sm") {
          padding: 0 20px;
          margin-bottom: 100px;
          width: 100%;
        }

        @include responseTo("lg") {
          margin-bottom: 132px;
          max-width: 1200px;
          width: 75%;
        }
        .title {
          font-size: 42px;
          font-weight: bold;
          margin-bottom: 30px;
          font-family: "TheSeasons";
          // font-family: "IvyOra";
          // font-weight: 300;

          @include responseTo("xs") {
            font-size: 24px;
            margin-bottom: 16px;
          }
          @include responseTo("sm") {
            font-size: 30px;
            margin-bottom: 16px;
          }
        }

        .description {
          width: 100%;
          font-size: 26px;
          line-height: 1.5;
          font-family: "IvyOra";

          @include responseTo("xs") {
            font-size: 16px;
          }
          @include responseTo("sm") {
            font-size: 22px;
          }
        }
      }
    }
  }

  .home-material-container {
    background-color: #faf9ef;
    width: 100%;
    .material-row {
      display: flex;
      flex-wrap: wrap;
      width: 100%;
      margin: 0 auto;

      @include responseTo("xs") {
        gap: 20px;
      }
      @include responseTo("sm") {
        gap: 20px;
        flex-direction: row;
      }
      @include responseTo("lg") {
        gap: 30px;
      }

      .material-column {
        display: flex;
        width: 100%;
        @include responseTo("xs") {
          gap: 20px;
        }
        @include responseTo("sm") {
          gap: 20px;
          width: 100%;
          overflow: hidden;
        }
        @include responseTo("lg") {
          gap: 30px;
        }
      }
      .long-img {
        aspect-ratio: 1006/473;
        object-fit: cover;

        @include responseTo("xs") {
          width: 100%;
        }
        @include responseTo("sm") {
          flex: 2;
        }
        @include responseTo("lg") {
          flex: 2;
        }
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
      .short-img {
        aspect-ratio: 499/473;
        object-fit: cover;
        flex: 1;
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
    }
  }
  // material
  .home-container-material {
    background-color: #faf9ef;
    width: 100%;
    gap: 34px;
    display: grid;
    img {
      width: 100%;
      height: 400px;
    }
    .material-desc {
      position: absolute;
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      bottom: 53px;
      .material-desc-title {
        font-weight: normal;
        font-size: 42px;
        color: #fff;
        margin-bottom: 18px;
      }
      .material-desc-content {
        @extend .ivyOra-light;
        font-size: 26px;
        color: #fff;
        opacity: 0.7;
      }
    }
  }

  // news
  .home-container-news {
    width: 100%;
    background-color: #faf9ef;

    .content {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      max-width: 1200px;
      width: 100%;
      margin: 0 auto;
      border-top: 1px dashed #000;
      border-bottom: 1px dashed #000;
      padding: 36px 0;

      @include responseTo("xs") {
        padding: 20px 20px;
      }

      .news-item {
        display: flex;
        width: 100%;
        align-items: center;
        color: #231f20;

        @include responseTo("xs") {
          flex-direction: column-reverse;
        }
        @include responseTo("sm") {
          flex-direction: column-reverse;
        }
        @include responseTo("lg") {
          flex-direction: row;
        }

        .news-content {
          display: flex;
          justify-content: space-between;
          // align-items: center;

          @include responseTo("xs") {
            margin-top: 20px;
          }
          @include responseTo("sm") {
            margin-top: 20px;
            padding: var(--page-padding-sm);
            width: 100%;
          }
          @include responseTo("lg") {
            padding: 0;
          }
          .news-title {
            font-size: 22px;
            text-align: left;
            @extend .ivyOra-light;
            @include responseTo("xs") {
              font-size: 16px;
            }
            @include responseTo("sm") {
              font-size: 26px;
            }
            @include responseTo("lg") {
              margin-right: 50px;
              line-height: 1.3;
            }
          }

          .news-date {
            font-size: 32px;
            text-align: left;
            font-family: "IvyOra";
            font-weight: 500;
            @include responseTo("xs") {
              font-size: 18px;
              margin-right: 20px;
            }
            @include responseTo("sm") {
              font-size: 26px;
              margin-right: 20px;
            }
            @include responseTo("lg") {
              margin-right: 100px;
            }
          }
        }

        .news-img {
          aspect-ratio: 517 / 220;
          @include responseTo("xs") {
            width: 100%;
          }
          @include responseTo("sm") {
            width: 100%;
            padding: var(--page-padding-sm);
          }
          @include responseTo("lg") {
            width: 550px;
            padding: 0;
          }
        }
      }
    }
  }

  // map
  .home-map-container {
    width: 100%;

    background-repeat: no-repeat;
    background-position: center;
    background-color: #faf9ef;

    .home-map-box {
      width: 100%;
      position: relative;
      aspect-ratio: 1348/663;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
  .swiper-slide-active {
    z-index: 9 !important;
  }
  .swiper-slide-next {
    z-index: 10 !important;
  }
}

.content {
  position: relative;
  height: 100%;

  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
  @include responseTo("xs") {
    padding: 0 20px;
  }
}

.home-carousel-container {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  .country-container {
    width: 100%;
    display: flex;
    flex-direction: column;

    @include responseTo("sm") {
      padding: var(--page-padding-sm);
    }

    .country-item {
      width: 100%;
      aspect-ratio: 661/303;

      position: relative;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-end;

      @include responseTo("xs") {
        margin-bottom: 20px;
      }

      @include responseTo("sm") {
        margin-bottom: 40px;
      }

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        z-index: 0;
        position: absolute;
      }
      .title {
        width: 100%;
        font-weight: bold;
        color: #fff;
        margin-bottom: 12px;
        position: relative;
        z-index: 1;
        text-align: center;

        @include responseTo("xs") {
          font-size: 20px;
        }

        @include responseTo("sm") {
          font-size: 36px;
        }
      }
      .sub-title {
        font-weight: 300;
        color: #fff;
        font-family: "IvyOra";
        position: relative;
        z-index: 1;
        text-align: center;

        @include responseTo("sm") {
          font-size: 12px;
          margin-bottom: 12px;
        }

        @include responseTo("sm") {
          font-size: 26px;
          margin-bottom: 40px;
        }
      }
    }
  }
}

@keyframes scaleNumber {
  0% {
    transform: scale(1.2);
  }

  100% {
    transform: scale(1);
  }
}
</style>
