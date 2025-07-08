<template>
  <div class="home-carousel-container">
    <div class="home-carousel-item" v-for="(item, index) in items" :key="index" :class="`${index === activeIndex ? 'active' : ''}`" @click="setActive(index)">
      <img class="bg" :src="item.image" />
      <div class="text-content">
        <span class="kitchen-title">{{ item.title }}</span>
        <div class="supplement-container">
          <template v-if="showSubtitle && activeIndex === index">
            <img src="@/assets/images/home/carousel-right.png" />
            <span class="kitchen-desc">{{ item.subtitle || "Entrancing Detail" }}</span>
            <img src="@/assets/images/home/carousel-left.png" />
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ProductListItem } from "@/api/model";
import { ref, onMounted, onUnmounted, computed } from "vue";

const props = withDefaults(
  defineProps<{
    items: ProductListItem[];
    showSubtitle?: boolean;
  }>(),
  {
    showSubtitle: true,
  },
);

const activeIndex = ref(0);

const setActive = (index: number) => {
  activeIndex.value = index;
};
const length = ref(props.items.length);

const windowWidth = ref(window.innerWidth);
const windowHeight = ref(window.innerHeight);

console.log(windowWidth.value, windowHeight.value);
// 监听窗口大小变化
onMounted(() => {
  window.addEventListener("resize", () => {
    windowWidth.value = window.innerWidth;
    windowHeight.value = window.innerHeight;
  });
});

onUnmounted(() => {
  window.removeEventListener("resize", () => {
    windowWidth.value = window.innerWidth;
    windowHeight.value = window.innerHeight;
  });
});

const containerH = computed(() => {
  return windowWidth.value / windowHeight.value > 16 / 9 ? `${windowHeight.value}px` : "60vh";
});
</script>

<style lang="scss" scoped setup>
.home-carousel-container {
  --aspectRatio: 4/3;
  width: 100%;
  display: flex;
  height: v-bind(containerH);

  .home-carousel-item {
    width: calc((100% - (v-bind(containerH) * var(--aspectRatio))) / (v-bind(length) - 1));
    min-width: 200px;
    transition: all 0.3s ease;
    position: relative;
    height: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    flex-direction: column;
    cursor: pointer;
    .bg {
      width: 100%;
      height: 100%;
      object-fit: cover;
      position: absolute;
      z-index: 0;
    }

    .text-content {
      position: relative;
      z-index: 1;
      text-align: center;
      width: 100%;
      .kitchen-title {
        display: block;
        transition: all 0.3s ease;
        font-size: 36px;
        font-weight: 700;
        padding: 0 16px;
        color: #fff;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
        width: 100%;
      }

      .supplement-container {
        transition: all 0.3s ease;

        opacity: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 32px;
        margin-top: 16px;
        padding-bottom: 64px;
        height: 100px;
        .kitchen-desc {
          font-size: 20px;
          color: #fff;
        }
        img {
          width: 158px;
          height: 30px;
        }
      }
    }

    &.active {
      width: calc(v-bind(containerH) * var(--aspectRatio));
      .kitchen-title {
        font-size: 42px;
      }
      .supplement-container {
        opacity: 0.4;
      }
    }
  }
}
</style>
