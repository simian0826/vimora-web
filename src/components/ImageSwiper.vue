<template>
  <div class="swiper-container">
    <swiper :modules="[Navigation]" :loop="true" class="mySwiper" @swiper="onSwiper">
      <swiper-slide v-for="(slide, index) in slides" :key="index">
        <div class="slide-content">
          <img :src="slide.image" :alt="slide.title" />
          <div class="slide-text">
            <h2>{{ slide.title }}</h2>
            <p>{{ slide.description }}</p>
          </div>
        </div>
      </swiper-slide>

      <div class="custom-prev" @click="slidePrev">
        <img v-if="breakpoint === sizeEnum.XS" src="@/assets/images/projects/mb-swiper-left-arrow.png" alt="Previous" />
        <img v-else src="@/assets/images/craftmanship/slide-left.png" alt="Previous" />
      </div>
      <div class="custom-next" @click="slideNext">
        <img v-if="breakpoint === sizeEnum.XS" src="@/assets/images/projects/mb-swiper-right-arrow.png" alt="Next" />
        <img v-else src="@/assets/images/craftmanship/slide-right.png" alt="Next" />
      </div>
    </swiper>
  </div>
</template>
<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { ref } from "vue";
import type { Swiper as SwiperType } from "swiper";
import { sizeEnum } from "@/enums/breakPoint";
import { createBreakpointListen } from "@/hooks/useBreakpoint";
const { screenRef: breakpoint } = createBreakpointListen();

interface Slide {
  image: string;
  title: string;
  description: string;
}

defineProps<{
  slides: Slide[];
}>();

const swiperInstance = ref<SwiperType | null>(null);

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
.swiper-container {
  position: relative;
}

.slide-content {
  position: relative;
  cursor: grab;
  &:active {
    cursor: grabbing;
  }

  @include responseTo("xs") {
    padding: 0px;
    width: 100vw;
    height: 100vw;
  }

  @include responseTo("sm") {
    padding: 0 70px;
    width: 100%;
    height: 100%;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .slide-text {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    text-align: center;
    color: #fff;

    @include responseTo("xs") {
      width: 80%;
      bottom: 20px;
    }

    @include responseTo("sm") {
      width: calc(100% - 140px);
      bottom: 15%;
    }

    h2 {
      font-size: 42px;
      margin-bottom: 20px;

      @include responseTo("xs") {
        font-size: 24px;
        margin-bottom: 16px;
      }
    }

    p {
      @extend .ivyOra-light;
      font-size: 26px;
      font-weight: 300;
      opacity: 0.9;

      @include responseTo("xs") {
        font-size: 16px;
      }

      // max-width: 600px;
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

  background: transparent;
  aspect-ratio: 142/63;
  @include responseTo("xs") {
    width: 80px;
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
  @include responseTo("xs") {
    left: 20px;
  }
  @include responseTo("sm") {
    left: 0;
  }
}

.custom-next {
  @include responseTo("xs") {
    right: 20px;
  }
  @include responseTo("sm") {
    right: 0;
  }
}
</style>
