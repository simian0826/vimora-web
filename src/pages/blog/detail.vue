<template>
  <div class="blog-detail-page">
    <div class="section first">
      <img src="https://fileprod.obs.cn-east-3.myhuaweicloud.com/mail/images/projects/down-arrow.png" alt="project-info" class="down-arrow-image" />
    </div>

    <div class="section third">
      <div class="desc-block-container">
        <img src="https://fileprod.obs.cn-east-3.myhuaweicloud.com/mail/images/home/down-flower.png" class="down-flower" />
        <h2 class="desc-title">
          Experience Unmatched Luxury
          <br />
          at KBIS South Hall,
          <br />
          Vegas Convention Center
        </h2>
        <div class="desc-content">Booth SL8015 | February 25-27, 2025</div>
      </div>
      <div class="content">
        <div class="desc-content">
          Las Vegas, NV – Immerse yourself in a world of elegance and craftsmanship at the 2025 Kitchen & Bath Industry Show (KBIS) at the Las Vegas Convention Center. Visit our booth, SL8015, to
          experience luxury and timeless design like never before.
        </div>

        <div class="slide-content">
          <img class="bg" src="https://fileprod.obs.cn-east-3.myhuaweicloud.com/mail/images/blog/blog-detail-img.png" />
        </div>

        <div class="desc-content">
          Drawing inspiration from across the globe, we have meticulously curated a collection of designs that radiate sophistication. Whether you're looking for the refined elegance of classic styles
          or the bold allure of modern glamour, we are committed to transforming your space into a one-of-a-kind masterpiece.
        </div>
        <div class="desc-content">
          Our commitment to excellence is reflected in every piece of cabinetry we create. By blending artisanal handcrafting with cutting-edge production techniques, each design is crafted with
          exceptional quality and unparalleled attention to detail.
        </div>
        <div class="desc-content">Join us at KBIS 2025 to discover how our innovative designs can elevate your living spaces and bring your vision to life.</div>

        <div class="desc-content">
          <div class="desc-info-text">Event Details:</div>
          <div class="desc-info-text">Location: Las Vegas Convention Center, South Hall</div>
          <div class="desc-info-text">Booth: SL8015</div>
          <div class="desc-info-text">Dates: February 25-27, 2025</div>
          <div class="desc-info-text">
            For more information or to schedule an appointment, please visit
            <a href="/#/contact">[contact info]</a>
            .
          </div>
        </div>

        <div class="desc-block-container">
          <h2 class="desc-title" style="max-width: 582px; text-align: center">2025 Kitchen Collection</h2>
          <div class="desc-content">Timeless Elegance, Contemporary Function</div>
          <a class="desc-href" href="/#/products">Discover</a>
        </div>
      </div>
    </div>

    <div class="home-carousel-container" v-if="breakpoint !== sizeEnum.XS">
      <HomeCarousel :items="kitchens" />
    </div>

    <div
      v-if="breakpoint === sizeEnum.XS"
      :class="{
        'px-100px': breakpoint !== sizeEnum.XS,
        'pb-200px': breakpoint !== sizeEnum.XS,
      }"
    >
      <ImageSwiper :slides="slidesData" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { ProductListItem } from "@/api/model";
import HomeCarousel from "@/components/HomeCarousel.vue";
// import Png1 from "https://fileprod.obs.cn-east-3.myhuaweicloud.com/mail/images/home/p1.png";
import ImageSwiper from "@/components/ImageSwiper.vue";
import { createBreakpointListen } from "@/hooks/useBreakpoint";
import { sizeEnum } from "@/enums/breakPoint";

const { screenRef: breakpoint } = createBreakpointListen();

const kitchens = ref<ProductListItem[]>([
  { id: "GraceCollection", image: "https://fileprod.obs.cn-east-3.myhuaweicloud.com/mail/images/products/GraceCollection.png", title: "Grace", subtitle: "Timeless and Refined" },
  { id: "AmbedoCollection", image: "https://fileprod.obs.cn-east-3.myhuaweicloud.com/mail/images/products/AmbedoCollection.png", title: "Ambedo", subtitle: "Entrancing Detail" },
  { id: "YugenCollection", image: "https://fileprod.obs.cn-east-3.myhuaweicloud.com/mail/images/products/YugenCollection.png", title: "Yugen", subtitle: "Profound Beyond Words" },
  { id: "FikaCollection", image: "https://fileprod.obs.cn-east-3.myhuaweicloud.com/mail/images/products/FikaCollection.png", title: "Fika ", subtitle: "Pause and Unwind" },
]);

const slidesData = [
  {
    image: "https://fileprod.obs.cn-east-3.myhuaweicloud.com/mail/images/products/GraceCollection.png",
    title: "Grace",
    description: "Timeless and Refined",
  },
  {
    image: "https://fileprod.obs.cn-east-3.myhuaweicloud.com/mail/images/products/AmbedoCollection.png",
    title: "Ambedo",
    description: "Entrancing Detail",
  },
  {
    image: "https://fileprod.obs.cn-east-3.myhuaweicloud.com/mail/images/products/YugenCollection.png",
    title: "Yugen",
    description: "Profound Beyond Words",
  },
  {
    image: "https://fileprod.obs.cn-east-3.myhuaweicloud.com/mail/images/products/FikaCollection.png",
    title: "Fika",
    description: "Pluse and Unwind",
  },
  // ... 其他幻灯片数据
];
</script>

<style scoped lang="scss">
.blog-detail-page {
  --bgTextFS-SM: 32px;
  --bgTextFS-xs: 20px;

  --descFS-SM: 22px;
  --descFS-xs: 14px;

  width: 100%;
  position: relative;
  color: #000;
  font-family: "TheSeasons";

  background-color: #faf9ef;

  .section {
    width: 100%;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;

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
        text-align: center;

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
        max-width: 1200px;
        @extend .ivyOra-light;

        @include responseTo("xs") {
          font-size: 18px;
          line-height: 1.3;
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
      }
    }

    &.first {
      background-image: url("https://fileprod.obs.cn-east-3.myhuaweicloud.com/mail/images/blog/blog-detail-banner.png");
      display: flex;
      justify-content: center;
      align-items: center;
      color: #fff;
      font-size: 32px;
      font-weight: 600;
      height: 100vh;
      position: relative;

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

    &.third {
      .content {
        width: 100%;
        max-width: 1200px;
        margin: 0 auto;

        @include responseTo("sm") {
          height: 100%;
          padding: 0 120px;
        }
        @include responseTo("xs") {
          padding: 20px;
          flex-wrap: wrap;
          flex-direction: column-reverse;
        }

        .desc-content {
          margin: 0 auto;
          width: 100%;
          font-family: "IvyOra";
          font-size: 24px;
          font-weight: 300;
          line-height: 36px;
          color: #231f20;
          margin-top: 40px;
          &:first-child {
            margin-top: 0;
          }
          @include responseTo("xs") {
            font-size: 18px;
            line-height: 1.3;

            // margin-bottom: 20px;
          }
          .desc-info-text {
            color: #00526a;
            font-weight: bold;
          }
        }

        .slide-content {
          aspect-ratio: 1536/760;

          width: 100%;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          align-items: center;
          color: #fff;
          position: relative;

          @include responseTo("xs") {
            margin: 20px 0;
          }
          @include responseTo("sm") {
            margin: 40px 0;
          }
          .bg {
            width: 100%;
            height: 100%;
            position: absolute;
            z-index: 0;
          }

          .text-content {
            width: 100%;
            max-width: 700px;
            margin: 0 auto;
            text-align: center;
            position: relative;
            .title {
              font-size: 52px;
              font-weight: bold;
              margin-bottom: 30px;
              // font-family: "TheSeasons";
              font-family: "IvyOra";

              @include responseTo("xs") {
                font-size: 32px;
              }
            }

            .description {
              width: 100%;
              font-size: 20px;
              line-height: 1.3;
              font-family: "IvyOra";
              font-weight: 300;
              margin-bottom: 45px;
              opacity: 0.8;

              @include responseTo("xs") {
                font-size: 16px;
              }
            }
          }
        }
      }
    }
  }
}
</style>
