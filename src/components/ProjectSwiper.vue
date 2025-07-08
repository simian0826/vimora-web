<template>
  <swiper
    :loop="true"
    :modules="[Navigation]"
    :slides-per-view="'auto'"
    :space-between="0"
    :centered-slides="true"
    :initial-slide="0"
    :speed="600"
    :allow-touch-move="true"
    class="project-swiper"
    @swiper="onSwiper"
    :style="{
      height: `calc((${isMobile ? '100vw - 130px' : '100vw - 440px'}) / ${isMobile ? 1.55 : props.aspectRatio ?? 2.05})`,
    }"
  >
    <swiper-slide v-for="(project, index) in projects" :key="index">
      <div class="project-slide">
        <img :src="project" alt="project-banner" class="project-banner" />
        <div class="overlay"></div>
        <!-- <h2>{{ project.title }}</h2> -->
      </div>
    </swiper-slide>

    <div class="custom-prev" @click="slidePrev">
      <img v-if="!isMobile" src="@/assets/images/projects/swiper-left-arrow.png" alt="prev" class="default" />
      <img v-if="isMobile" src="@/assets/images/projects/mb-swiper-left-arrow.png" alt="prev" class="mobile-arrow" />
      <img v-if="!isMobile" src="@/assets/images/projects/swiper-right-arrow.png" alt="prev" class="hover" />
    </div>
    <div class="custom-next" @click="slideNext">
      <img v-if="!isMobile" src="@/assets/images/projects/swiper-right-arrow.png" alt="next" class="hover" />
      <img v-if="isMobile" src="@/assets/images/projects/mb-swiper-right-arrow.png" alt="next" class="mobile-arrow" />
      <img v-if="!isMobile" src="@/assets/images/projects/swiper-left-arrow.png" alt="next" class="default" />
    </div>
  </swiper>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import { ref, onMounted, onUnmounted } from "vue";
import "swiper/css";
import "swiper/css/navigation";

const props = defineProps<{
  projects: string[];
  aspectRatio?: number;
}>();

const swiperInstance = ref<SwiperType | null>(null);

const isMobile = ref(false);

const checkMobile = () => {
  isMobile.value = window.innerWidth <= 768;
};

onMounted(() => {
  checkMobile(); // 初始检查
  window.addEventListener("resize", checkMobile);
});

onUnmounted(() => {
  window.removeEventListener("resize", checkMobile);
});

const onSwiper = (swiper: SwiperType) => {
  swiperInstance.value = swiper;
};

const slideNext = () => {
  if (swiperInstance.value) {
    swiperInstance.value.slideNext();
  }
};

const slidePrev = () => {
  if (swiperInstance.value) {
    swiperInstance.value.slidePrev();
  }
};
</script>

<style scoped lang="scss">
.project-swiper {
  width: 100%;
  // font-size: 0;
}

.swiper-slide {
  width: calc(100vw - 440px);
  height: 100%;

  @include responseTo("xs") {
    width: calc(100vw - 130px);
  }

  .project-banner {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    transition: opacity 0.3s ease;

    @include responseTo("xs") {
      background: linear-gradient(90deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0) 20%, rgba(0, 0, 0, 0) 80%, rgba(0, 0, 0, 0.5) 100%);
    }
  }

  &.swiper-slide-active {
    .overlay {
      opacity: 0;
    }
  }

  .project-slide {
    width: 100%;
    height: 100%;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;

    h2 {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      color: white;
      font-size: 2rem;
      z-index: 2;
    }
  }
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

  img {
    width: 158px;
    height: 30px;

    &.hover {
      display: none;
      transform: rotate(180deg);
    }
  }

  &:hover {
    .default {
      display: none;
    }
    .hover {
      display: block;
    }
  }

  &.disabled {
    opacity: 0.5;
    cursor: not-allowed;
    pointer-events: none;
  }

  @include responseTo("xs") {
    img {
      width: 103px;
      height: 40px;
    }
  }
}
.custom-prev {
  left: 38px;
  @include responseTo("xs") {
    left: 10px;
  }
  img {
    &.hover {
      display: none;
      transform: rotate(180deg);
    }
  }
}

.custom-next {
  right: 38px;
  @include responseTo("xs") {
    right: 10px;
  }
  img {
    transform: rotate(180deg);
    @include responseTo("xs") {
      transform: rotate(0deg);
    }
    &.hover {
      display: none;
      transform: rotate(0deg);
    }
  }
}
</style>
