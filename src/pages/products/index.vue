<template>
  <div class="product-list-container">
    <div class="section first">
      <div class="content">
        <div class="banner-content" ref="bannerContentRef">
          <div class="title">Collections</div>
          <div class="sub-title">
            Presenting the 2025 Collections:
            <br />
            Crafted with utmost precision to invoke and emotion with each design.
          </div>
        </div>
        <img src="@/assets/images/projects/down-arrow.png" alt="project-info" class="down-arrow-image" />
      </div>
    </div>

    <div class="section">
      <div class="desc-block-container">
        <img src="@/assets/images/home/down-flower.png" class="down-flower" />
        <h2 class="desc-title">Kitchens</h2>
        <div class="desc-content">An exquisite blend of form and function shaped using the finest of materials.</div>
      </div>
      <div class="content">
        <div class="country-container">
          <a :href="`/#/products/${item.id}`" class="country-item" v-for="(item, index) in kitchens" :key="index" :ref="(el) => setListItemRefs(el as HTMLElement, index)">
            <img :src="item.image" alt="kitchen" />
            <div class="title">{{ item.title }}</div>
            <div class="sub-title">{{ item.subtitle }}</div>
          </a>
        </div>
      </div>

      <div class="desc-block-container">
        <img src="@/assets/images/home/down-flower.png" class="down-flower" />
        <h2 class="desc-title">Wardrobes & Storage</h2>
        <div class="desc-content">Presenting a curated solution for every storage need.</div>
      </div>
      <div class="content">
        <div class="country-container">
          <a class="country-item" v-for="(item, index) in wardrobes" :key="index" :ref="(el) => setWardrobesItemRefs(el as HTMLElement, index)">
            <img :src="item.image" alt="country" />
            <div class="title">{{ item.title }}</div>
            <div class="sub-title">{{ item.subtitle }}</div>
          </a>
        </div>
      </div>

      <div class="desc-block-container">
        <img src="@/assets/images/home/down-flower.png" class="down-flower" />
        <h2 class="desc-title">Bathrooms</h2>
        <div class="desc-content">Emphasizing utility in design to transform any space into a haven of serenity.</div>
      </div>

      <div class="content">
        <div class="country-container">
          <a class="country-item" v-for="(item, index) in bathrooms" :key="index" :ref="(el) => setBathroomsItemRefs(el as HTMLElement, index)">
            <img :src="item.image" alt="country" />
            <div class="title">{{ item.title }}</div>
            <div class="sub-title">{{ item.subtitle }}</div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, nextTick } from "vue";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ProductListItem } from "@/api/model";

const bannerContentRef = ref<HTMLElement | null>(null);

let scrollTriggers: ScrollTrigger[] = [];

const kitchens = ref<ProductListItem[]>([
  { id: "GraceCollection", image: "https://fileprod.obs.cn-east-3.myhuaweicloud.com/mail/images/products/GraceCollection.png", title: "Grace", subtitle: "Timeless and Refined" },
  { id: "AmbedoCollection", image: "https://fileprod.obs.cn-east-3.myhuaweicloud.com/mail/images/products/AmbedoCollection.png", title: "Ambedo", subtitle: "Entrancing Detail" },
  { id: "YugenCollection", image: "https://fileprod.obs.cn-east-3.myhuaweicloud.com/mail/images/products/YugenCollection.png", title: "Yugen", subtitle: "Profound Beyond Words" },
  { id: "FikaCollection", image: "https://fileprod.obs.cn-east-3.myhuaweicloud.com/mail/images/products/FikaCollection.png", title: "Fika ", subtitle: "Pause and Unwind" },
]);
const wardrobes = ref<ProductListItem[]>([
  { id: "MerakiCollection", image: "https://fileprod.obs.cn-east-3.myhuaweicloud.com/mail/images/products/Meraki.png", title: "Meraki", subtitle: "Express Your Soul" },
]);
const bathrooms = ref<ProductListItem[]>([
  { id: "ReverieCollection", image: "https://fileprod.obs.cn-east-3.myhuaweicloud.com/mail/images/products/Reverie.png", title: "Reverie", subtitle: "Tranquil Escapes" },
]);

const listItemRefs = ref<HTMLElement[]>([]);
const setListItemRefs = (ref: HTMLElement | null, index: number) => {
  if (ref) {
    listItemRefs.value[index] = ref;
  }
};

const wardrobesItemRefs = ref<HTMLElement[]>([]);
const setWardrobesItemRefs = (ref: HTMLElement | null, index: number) => {
  if (ref) {
    wardrobesItemRefs.value[index] = ref;
  }
};

const bathroomsItemRefs = ref<HTMLElement[]>([]);
const setBathroomsItemRefs = (ref: HTMLElement | null, index: number) => {
  if (ref) {
    bathroomsItemRefs.value[index] = ref;
  }
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

  [listItemRefs.value, wardrobesItemRefs.value, bathroomsItemRefs.value].forEach((itemRefs) => {
    itemRefs.forEach((itemRef) => {
      if (itemRef) {
        gsap.set(itemRef, { opacity: 0, y: 50 });

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
                duration: 0.8,
                ease: "power2.out",
              });
            },
          },
        });
      }
    });
  });
};

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

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
.product-list-container {
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
    background-color: #faf9ef;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;

    @include responseTo("sm") {
      // min-height: 800px;
      // height: 100vh;
      // padding: 40px 0px;
    }

    .content {
      position: relative;
      height: 100%;

      width: 100%;
      max-width: 1200px;
      margin: 0 auto;
      text-align: center;
      @include responseTo("xs") {
        padding: 0px 20px;
      }
    }
    .country-container {
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 40px;
      @include responseTo("xs") {
        gap: 20px;
      }
      .country-item {
        width: 100%;
        aspect-ratio: 661/303;

        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-end;
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
            margin-bottom: 12px;
            font-size: 20px;
          }
          @include responseTo("sm") {
            margin-bottom: 40px;
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
          @include responseTo("xs") {
            margin-bottom: 12px;
            font-size: 12px;
          }
          @include responseTo("sm") {
            margin-bottom: 80px;
            font-size: 26px;
          }
        }
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
        max-width: 1250px;
        @extend .ivyOra-light;

        @include responseTo("xs") {
          font-size: 16px;
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

        @include responseTo("xs") {
          font-size: 16px;
          margin-top: 40px;
          margin-bottom: 20px;
        }
      }
    }

    &.first {
      background-image: url("https://fileprod.obs.cn-east-3.myhuaweicloud.com/mail/images/products/bannerBg.png");
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
      }
    }
  }
}
</style>
