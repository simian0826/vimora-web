<template>
  <div
    class="hero-seciton-container"
    :style="{
      '--url': `url(${heroSection?.background})`,
    }"
  >
    <div class="carousel-item-container">
      <div class="content-container">
        <div class="content-block">
          <div class="header">{{ heroSection?.header }}</div>
          <div class="sub-header">{{ heroSection?.content }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { SystemModule } from "@/api/model";
import { onMounted, computed } from "vue";
import { useAppStore } from "@/store/modules/app";
interface HeroSectionProps {
  module: SystemModule;
}
const appStore = useAppStore();

const props = defineProps<HeroSectionProps>();
const heroSection = computed(() => appStore.fetchHeroSectionByModule(props.module));
onMounted(() => {
  console.log(props.module);
});
</script>
<style scoped lang="scss">
.hero-seciton-container {
  --url: url("/assets/home-banner.png");
  --backgroundSize: 100%;
  // background-attachment: fixed;
  background-image: var(--url);
  background-clip: content-box;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;

  @include responseTo("xs") {
    height: 400px;
  }
  @include responseTo("sm") {
    height: 800px;
  }

  .carousel-item-container {
    width: 100%;
    height: 100%;

    // linear-gradient(360deg, #222, rgba(34, 34, 34, 0))

    .content-container {
      margin: 0 auto;
      width: 100%;
      height: 100%;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      position: relative;
      @include responseTo("sm") {
        max-width: 1100px;
      }
      .content-block {
        position: absolute;
        background-color: #00000066;
        @include responseTo("sm") {
          width: 700px;
          bottom: 100px;
          left: 40px;
          padding: 60px;
        }
        @include responseTo("xs") {
          padding: 30px 20px;

          width: 95%;
          top: 40%;
          left: 50%;
          transform: translateX(-50%);
        }

        .header {
          width: 100%;
          color: #f9f9f9;
          font-size: 26px;
          line-height: 1.2;
          font-weight: 300;
        }
        .sub-header {
          color: #f9f9f9;
          font-size: 15px;

          line-height: 1.5;

          @include responseTo("sm") {
            margin-bottom: 24px;
            margin-top: 30px;
            width: 80%;
          }
          @include responseTo("xs") {
            margin-bottom: 10px;
            margin-top: 10px;
            width: 100%;
          }
        }
      }
    }
  }
}
</style>
