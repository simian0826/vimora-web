<template>
  <div class="aobut-us-container">
    <div class="section first">
      <div class="content">
        <div class="banner-content" ref="bannerContentRef">
          <div class="title">About VIMORA</div>
          <div class="sub-title">The journey of crafting timeless elegance</div>
        </div>
        <img src="@/assets/images/projects/down-arrow.png" alt="project-info" class="down-arrow-image" />
      </div>
    </div>
    <div class="section second">
      <div class="desc-block-container" id="ourBrandStory">
        <img src="@/assets/images/home/down-flower.png" class="down-flower" />
        <h2 class="desc-title">Our Brand Story</h2>
        <!-- <div class="desc-content">From Vision to Reality: Our Journey</div> -->
      </div>
      <img src="https://fileprod.obs.cn-east-3.myhuaweicloud.com/mail/images/about/bg-icon1.png" class="bg-icon" />

      <div class="content" ref="secondContentRef">
        <div class="left">
          <div class="bg">
            <div class="text-in">Behind the</div>
            <div class="text-out">Name</div>
          </div>
        </div>
        <div class="right">
          <div class="desc">
            Vimora is more than just a word; it is a symbol of life, endurance and nature. An amalgamation of the terms Vita and Mora, this name represents the everlasting strength and beauty of
            nature.
            <br />
            Our philosophy revolves around this name; to bring life into any space by crafting timeless designs using natural and sustainable materials.
          </div>
        </div>
      </div>
    </div>
    <div class="section third">
      <img src="https://fileprod.obs.cn-east-3.myhuaweicloud.com/mail/images/about/bg-icon2.png" class="bg-icon" />

      <div class="content" ref="thirdContentRef">
        <div class="left">
          <div class="desc">
            Akin to our name, our brand is an amalgamation of leaders in design, manufacturing and construction with decades of experience in delivering the finest quality of products.
            <br />
            Since our inception, VIMORA has always been committed to using exquisite craftsmanship in conjunction with innovative technologies to offer unique, tailor-made cabinetry solutions.
          </div>
        </div>
        <div class="right">
          <div class="bg">
            <div class="text-in">The Birth of</div>
            <div class="text-out">VIMORA</div>
          </div>
        </div>
      </div>
    </div>
    <div class="section fourth">
      <img src="https://fileprod.obs.cn-east-3.myhuaweicloud.com/mail/images/about/bg-icon3.png" class="bg-icon" />
      <img src="https://fileprod.obs.cn-east-3.myhuaweicloud.com/mail/images/about/bg-icon4.png" class="bg-icon2" />

      <div class="content" ref="fourthContentRef">
        <div class="left">
          <div class="bg">
            <div class="text-in">A Global</div>
            <div class="text-out">Vision</div>
          </div>
        </div>
        <div class="right">
          <div class="desc">
            Over the years, we've built a robust supply chain to bring our clients the best materials and designs from the world over. We've leveraged this strength to save our clients time and money
            while executing projects globally.
          </div>
        </div>
      </div>
    </div>
    <div class="section fifth">
      <div class="content" ref="fifthContentRef">
        <div class="left">
          <div class="desc">
            At our core, we believe in supporting the communities within our supply chain network. Our commitment extends beyond craftsmanship-we create jobs,support local charities, and prioritize
            sustainability at every step. By using responsibly sourced materials, eliminating animal products,and actively contributing to global reforestation efforts, we ensure that our work leaves
            a positive and lasting impact.
          </div>
        </div>
        <div class="right">
          <div class="bg">
            <div class="text-in">A Sustainable</div>
            <div class="text-out">Mission</div>
          </div>
        </div>
      </div>
    </div>
    <div class="section sixth">
      <div class="desc-block-container" :class="{ '!pt-[120px]': breakpoint !== sizeEnum.XS, '!pt-[80px]': breakpoint === sizeEnum.XS }">
        <img src="@/assets/images/tuteng.png" class="bg" />
        <h2 class="desc-title">Unique Material Palette</h2>
        <div class="desc-content">The Art of Luxury in Every Detail</div>
        <a class="desc-href" href="/#/craftsmanship">Discover</a>
      </div>
      <div class="content">
        <div class="slide-content">
          <img class="bg" src="https://fileprod.obs.cn-east-3.myhuaweicloud.com/mail/images/about/UniqueMaterialPalette.jpg" />
          <div class="text-content" v-if="realWidthRef >= screenEnum.LG">
            <!-- <p class="description">
              Our library has a vast selection of materials to achieve any design you can dream of. Sustainably sourced wood veneers, vegan leathers, brushed metals, natural marbles and more are all
              available at your request.
            </p> -->
          </div>
        </div>
        <div class="outer-text-content" v-if="realWidthRef < screenEnum.LG">
          <!-- <p class="description">
            Our library has a vast selection of materials to achieve any design you can dream of. Sustainably sourced wood veneers, vegan leathers, brushed metals, natural marbles and more are all
            available at your request.
          </p> -->
        </div>
      </div>

      <div
        class="desc-block-container"
        :class="{
          '!mt-[80px] !pt-[120px]': realWidthRef >= screenEnum.LG,
          'mb-20px !py-[40px]': realWidthRef < screenEnum.LG,
        }"
      >
        <img src="@/assets/images/tuteng.png" class="bg" />
        <h2 class="desc-title">Our Locations</h2>
        <div class="desc-content">Where Excellence Meets You.</div>
        <div class="!translate-y-[-20px] text-center"></div>
      </div>
    </div>
    <div class="section seventh">
      <HomeCarousel v-if="realWidthRef >= screenEnum.LG" :items="countries" :showSubtitle="false" />

      <div class="country-container" v-if="realWidthRef < screenEnum.LG">
        <div class="country-item" v-for="(item, index) in mobileCountries" :key="index">
          <img :src="item.image" alt="country" />
          <div class="title">{{ item.title }}</div>
          <div class="sub-title"></div>
        </div>
      </div>

      <div class="desc-block-container" id="appointment">
        <img src="@/assets/images/home/down-flower.png" class="down-flower" />
        <h2 class="desc-title">Contact Us</h2>
        <div class="desc-content">Connect with us to discuss how we can work together to bring your vision to fruition.</div>
      </div>
      <a href="/#/contact" class="contact-btn">Get In Touch</a>
    </div>
    <!-- <div class="section eighth">
      <div class="content">
        <h1 class="title">Contact Us</h1>
        <p class="description">Connect with us to discuss how we can work together to bring your vision to fruition.</p>
        <a href="/#/contact" class="contact-btn">Get In Touch</a>
      </div>
    </div> -->
  </div>
</template>

<script setup lang="ts">
import { ref, onBeforeUnmount, nextTick, onUpdated } from "vue";
import { createBreakpointListen } from "@/hooks/useBreakpoint";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { sizeEnum, screenEnum } from "@/enums/breakPoint";
import HomeCarousel from "@/components/HomeCarousel.vue";

import { ProductListItem } from "@/api/model";
import { onMountedOrActivated } from "@/hooks/onMountedOrActivated";

const bannerContentRef = ref<HTMLElement | null>(null);
const secondContentRef = ref<HTMLElement | null>(null);
const thirdContentRef = ref<HTMLElement | null>(null);
const fourthContentRef = ref<HTMLElement | null>(null);
const fifthContentRef = ref<HTMLElement | null>(null);
const { screenRef: breakpoint, realWidthRef } = createBreakpointListen();

let scrollTriggers: ScrollTrigger[] = [];

const countries = ref<ProductListItem[]>([
  { id: "Italy", image: "https://fileprod.obs.cn-east-3.myhuaweicloud.com/mail/images/about/italy.jpg", title: "Colleferro" },
  { id: "Miami", image: "https://fileprod.obs.cn-east-3.myhuaweicloud.com/mail/images/about/miami.jpg", title: "Miami" },
  { id: "Dubai", image: "https://fileprod.obs.cn-east-3.myhuaweicloud.com/mail/images/about/dubai.jpg", title: "Dubai" },
  { id: "Bangkok", image: "https://fileprod.obs.cn-east-3.myhuaweicloud.com/mail/images/about/bangkok.jpg", title: "Bangkok" },
  { id: "Melbourne", image: "https://fileprod.obs.cn-east-3.myhuaweicloud.com/mail/images/about/melbourne.jpg", title: "Melbourne" },
]);

const mobileCountries = ref<ProductListItem[]>([
  { id: "Italy", image: "https://fileprod.obs.cn-east-3.myhuaweicloud.com/mail/images/about/italy-m.jpg", title: "Colleferro" },
  { id: "Miami", image: "https://fileprod.obs.cn-east-3.myhuaweicloud.com/mail/images/about/miami-m.jpg", title: "Miami" },
  { id: "Dubai", image: "https://fileprod.obs.cn-east-3.myhuaweicloud.com/mail/images/about/dubai-m.jpg", title: "Dubai" },
  { id: "Bangkok", image: "https://fileprod.obs.cn-east-3.myhuaweicloud.com/mail/images/about/bangkok-m.jpg", title: "Bangkok" },
  { id: "Melbourne", image: "https://fileprod.obs.cn-east-3.myhuaweicloud.com/mail/images/about/melbourne-m.jpg", title: "Melbourne" },
]);

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

  // Create banner scroll trigger
  scrollTriggers.push(
    ScrollTrigger.create({
      trigger: bannerContentRef.value,
      start: "top center",
      end: "bottom center",
      onEnter: () => {
        gsap.to(bannerContentRef.value, {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power2.out",
        });
      },
      onLeave: () => {
        gsap.to(bannerContentRef.value, {
          opacity: 0,
          y: 100,
          ease: "power2.in",
        });
      },
      onEnterBack: () => {
        gsap.to(bannerContentRef.value, {
          opacity: 1,
          y: 0,
          duration: 1.2,
          delay: 0.5,
          ease: "power2.out",
        });
      },
    }),
  );

  // Initialize other sections
  [secondContentRef, thirdContentRef, fourthContentRef, fifthContentRef].forEach((ref) => {
    if (!ref.value) return;

    gsap.set(ref.value, {
      opacity: 0,
      y: breakpoint.value !== sizeEnum.XS ? 100 : 0,
    });

    scrollTriggers.push(
      ScrollTrigger.create({
        trigger: ref.value,
        start: "top 70%",
        end: "bottom center",
        onEnter: () => {
          gsap.to(ref.value, {
            opacity: 1,
            y: 0,
            duration: 1.2,
            delay: 0.2,
            ease: "power2.out",
          });
        },
        onLeave: () => {
          // if (breakpoint.value !== sizeEnum.XS) {
          //   gsap.to(ref.value, {
          //     opacity: 0,
          //     y: 100,
          //     duration: 0.1,
          //     ease: "power2.in",
          //   });
          // }
        },
        onEnterBack: () => {
          if (breakpoint.value !== sizeEnum.XS) {
            gsap.to(ref.value, {
              opacity: 1,
              y: 0,
              duration: 1.2,
              delay: 0.5,
              ease: "power2.out",
            });
          }
        },
        onLeaveBack: () => {
          // if (breakpoint.value !== sizeEnum.XS) {
          //   gsap.to(ref.value, {
          //     opacity: 0,
          //     y: 100,
          //     duration: 1.2,
          //     ease: "power2.in",
          //   });
          // }
        },
      }),
    );
  });
};

const scrollTo = () => {
  const hash = window.location.hash.split("#")[2] || window.location.hash;
  if (hash) {
    // Remove # from hash
    const targetId = hash;
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      // Use GSAP to scroll to element
      gsap.to(window, {
        duration: 1.2,
        scrollTo: {
          y: targetElement,
          offsetY: 100, // Add offset to account for fixed header
        },
        ease: "power2.inOut",
      });
    }
  }
};

// Register ScrollTrigger and ScrollToPlugin
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
onUpdated(() => {
  scrollTo();
}),
  onMountedOrActivated(() => {
    scrollTo();
    nextTick(() => {
      initializeAnimations();

      // Get hash from URL
    });
  });

onBeforeUnmount(() => {
  // Clean up all ScrollTriggers when component is unmounted
  scrollTriggers.forEach((trigger) => trigger.kill());
});
</script>

<style scoped lang="scss">
.aobut-us-container {
  --bgTextFS-SM: 32px;
  --bgTextFS-xs: 20px;

  --descFS-SM: 22px;
  --descFS-xs: 14px;

  --page-padding-sm: 0 40px;
  --content-gap-lg: 56px;
  --content-gap-sm: 36px;

  width: 100%;
  position: relative;
  color: #000;
  font-family: "TheSeasons";
  background-color: #faf9ef;

  // background-color: rgb(26, 26, 26);

  .section {
    width: 100%;
    background-color: #faf9ef;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;

    @include responseTo("sm") {
      // min-height: 800px;
      // height: 100vh;
      padding: 40px;
    }
    @include responseTo("lg") {
      padding: 40px 0px;
    }

    .content {
      max-width: 1200px;
      margin: 0 auto;
      height: 100%;
      position: relative;
      @include responseTo("sm") {
        align-items: flex-end;
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

    &.first {
      background-image: url("https://fileprod.obs.cn-east-3.myhuaweicloud.com/mail/images/about/banner.jpg");
      display: flex;
      justify-content: center;
      align-items: center;
      color: #fff;
      font-size: 32px;
      font-weight: 600;
      height: 100vh;

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
      }
    }

    &.second,
    &.fourth {
      font-family: "TheSeasons";

      .content {
        display: flex;
        justify-content: center;
        z-index: 1;
        @include responseTo("lg") {
          gap: var(--content-gap-lg);
          height: 100%;
        }
        @include responseTo("sm") {
          gap: var(--content-gap-sm);
          height: 100%;
        }

        @include responseTo("xs") {
          padding: 20px;
          flex-wrap: wrap;
        }
        .left {
          display: flex;

          @include responseTo("xs") {
            width: 100%;
          }
          @include responseTo("sm") {
            width: 50%;
            align-items: center;
            height: 100%;
          }

          .bg {
            width: 100%;
            position: relative;
            @include responseTo("xs") {
              font-size: var(--bgTextFS-xs);
            }
            @include responseTo("sm") {
              font-size: var(--bgTextFS-SM);
            }
            .text-in {
              position: absolute;
              bottom: 0px;
              left: 20px;
              width: 100%;
              color: #fff;
              font-weight: 500;
            }
            .text-out {
              position: absolute;
              left: 20px;
              width: 100%;
              color: #c4a18d;
              font-weight: 600;
              @include responseTo("xs") {
                bottom: calc(-1 * var(--bgTextFS-xs));
              }
              @include responseTo("sm") {
                bottom: calc(-1 * var(--bgTextFS-SM));
              }
            }
          }
        }
        .right {
          display: flex;
          justify-content: center;
          // align-items: flex-end;

          @include responseTo("xs") {
            width: 100%;
            margin-top: 60px;
          }
          @include responseTo("sm") {
            width: 50%;

            height: 100%;
          }
          .desc {
            @extend .ivyOra-light;
            color: #231f20;
            @include responseTo("xs") {
              font-size: var(--descFS-xs);
              line-height: 1.4;
            }
            @include responseTo("sm") {
              font-size: var(--descFS-SM);

              line-height: 30px;
              //margin-top: 180px;
            }
          }
        }
      }
    }

    &.third,
    &.fifth {
      .content {
        display: flex;
        justify-content: center;
        z-index: 1;

        @include responseTo("lg") {
          gap: var(--content-gap-lg);
          height: 100%;
        }
        @include responseTo("sm") {
          gap: var(--content-gap-sm);
          height: 100%;
        }

        @include responseTo("xs") {
          padding: 20px;
          flex-wrap: wrap;
          flex-direction: column-reverse;
        }

        .left {
          display: flex;
          @include responseTo("xs") {
            width: 100%;
            margin-top: 60px;
          }
          @include responseTo("sm") {
            width: 50%;

            align-items: center;
            height: 100%;
          }
          .desc {
            @extend .ivyOra-light;
            color: #231f20;
            text-align: right;
            @include responseTo("xs") {
              font-size: var(--descFS-xs);
              line-height: 1.4;
            }
            @include responseTo("sm") {
              font-size: var(--descFS-SM);
              line-height: 1.3;
              margin-top: 180px;
            }
          }
        }
        .right {
          display: flex;
          justify-content: center;

          @include responseTo("xs") {
            width: 100%;
          }
          @include responseTo("sm") {
            width: 50%;
            align-items: center;
            height: 100%;
          }

          .bg {
            width: 100%;
            position: relative;
            @include responseTo("xs") {
              font-size: var(--bgTextFS-xs);
            }
            @include responseTo("sm") {
              font-size: var(--bgTextFS-SM);
            }

            .text-in {
              position: absolute;
              bottom: 0px;
              right: 20px;
              width: 100%;
              color: #fff;
              font-weight: 500;
              text-align: right;
            }
            .text-out {
              position: absolute;
              width: 100%;
              color: #c4a18d;
              text-align: right;
              right: 20px;

              font-weight: 600;
              @include responseTo("xs") {
                bottom: calc(-1 * var(--bgTextFS-xs));
              }
              @include responseTo("sm") {
                bottom: calc(-1 * var(--bgTextFS-SM));
              }
            }
          }
        }
      }
    }
    &.second {
      // background-image: url("@/assets/images/about/a1bg_02.png");
      // background-size: cover;
      position: relative;

      .bg-icon {
        --scale: 0.8;
        width: calc(700px * var(--scale));
        height: calc(400px * var(--scale));
        position: absolute;
        top: 330px;
        left: 0px;
        z-index: 0;

        @include responseTo("xs") {
          --scale: 0.5;

          top: 150px;
        }
      }
      .content {
        .left {
          .bg {
            @include responseTo("xs") {
              aspect-ratio: 1/1;
            }
            @include responseTo("sm") {
              aspect-ratio: 528/352;
            }

            background-image: url("https://fileprod.obs.cn-east-3.myhuaweicloud.com/mail/images/about/p02.png");
          }
        }
      }
    }
    &.third {
      // background-image: url("@/assets/images/about/a2_bg_03.jpg");
      position: relative;

      .bg-icon {
        --scale: 0.8;
        width: calc(768px * var(--scale));
        height: calc(522px * var(--scale));
        position: absolute;
        top: -200px;
        right: 0px;
        z-index: 0;
      }
      .content {
        .right {
          .bg {
            aspect-ratio: 490/360;

            background-image: url("https://fileprod.obs.cn-east-3.myhuaweicloud.com/mail/images/about/p03.png");
          }
        }
      }
    }
    &.fourth {
      position: relative;
      .bg-icon {
        --scale: 1;
        width: calc(380px * var(--scale));
        height: calc(611px * var(--scale));
        position: absolute;
        top: 100px;
        right: 0px;
        z-index: 0;

        @include responseTo("xs") {
          --scale: 0.8;
          top: -200px;
        }
      }
      .bg-icon2 {
        --scale: 0.8;
        width: calc(585px * var(--scale));
        height: calc(545px * var(--scale));
        position: absolute;
        bottom: -500px;
        left: 0px;
        z-index: 0;
        @include responseTo("xs") {
          --scale: 0.5;
        }
      }
      .content {
        .left {
          .bg {
            aspect-ratio: 581/387;

            background-image: url("https://fileprod.obs.cn-east-3.myhuaweicloud.com/mail/images/about/p04.png");
          }
        }
      }
    }
    &.fifth {
      .content {
        .right {
          .bg {
            aspect-ratio: 539/396;
            position: relative;
            z-index: 2;
            background-image: url("https://fileprod.obs.cn-east-3.myhuaweicloud.com/mail/images/about/p05.png");
          }
        }
      }
    }
    &.sixth {
      .content {
        aspect-ratio: 1536/760;

        .slide-content {
          height: 100%;
          width: 100%;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          align-items: center;
          color: #fff;
          position: relative;

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

        .outer-text-content {
          width: 100%;
          padding: 20px 20px;
          margin: 0 auto;
          text-align: center;
          position: relative;

          .description {
            width: 100%;
            font-size: 16px;
            line-height: 1.3;
            @extend .ivyOra-light;
            margin-bottom: 45px;
            opacity: 0.8;

            @include responseTo("xs") {
              font-size: 14px;
            }
          }
        }
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
          padding-bottom: 20px;

          .swiper-pagination-bullet {
            width: 60px;
            height: 60px;
            background: transparent;
            opacity: 1;
            margin: 0 10px;
            transition: all 0.3s ease;

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
    }
    &.seventh {
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      flex-direction: column;

      .flower-logo {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);

        z-index: 0;
      }
      .content {
        text-align: center;
        padding: 0 20px;
      }

      .country-container {
        width: 100%;
        display: flex;
        flex-direction: column;

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
      .contact-btn {
        background-image: url(@/assets/images/about/contact-btn.png);
        background-size: 100% 100%;
        background-repeat: no-repeat;
        background-position: center;
        color: #ece8ca;
        font-family: "IvyOra";
        font-weight: 300;
        text-align: center;
        aspect-ratio: 204/54;

        @include responseTo("xs") {
          // margin-top: 20px;
          width: 102px;
          font-size: 12px;
          line-height: 27px;
        }
        @include responseTo("sm") {
          width: 204px;
          font-size: 16px;

          line-height: 54px;
          margin-bottom: 40px;
        }
      }
    }

    &.eighth {
      .content {
        background-image: url("https://fileprod.obs.cn-east-3.myhuaweicloud.com/mail/images/about/p10.png");

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: #fff;
        width: 100%;
        max-width: 1200px;
        margin: 0 auto;
        text-align: center;
        padding: 0 20px;
        @include responseTo("xs") {
          height: 100vw;
        }
        @include responseTo("sm") {
          aspect-ratio: 1536 / 760;
        }

        .title {
          font-size: 42px;
          font-weight: bold;
          margin-bottom: 50px;

          @include responseTo("xs") {
            font-size: 24px;
            margin-bottom: 20px;
          }
        }

        .description {
          font-size: 26px;
          line-height: 1.5;
          font-family: "IvyOra";
          font-weight: 300;
          max-width: 600px;

          @include responseTo("xs") {
            font-size: 14px;
          }
        }
        .contact-btn {
          background-image: url(@/assets/images/about/contact-btn.png);
          background-size: 100% 100%;
          background-repeat: no-repeat;
          background-position: center;
          color: #ece8ca;
          font-family: "IvyOra";
          font-weight: 300;
          text-align: center;
          aspect-ratio: 204/54;

          @include responseTo("xs") {
            margin-top: 20px;
            width: 102px;
            font-size: 12px;
            line-height: 27px;
          }
          @include responseTo("sm") {
            margin-top: 50px;
            width: 204px;
            font-size: 16px;

            line-height: 54px;
          }
        }
      }
    }
  }
}
</style>
