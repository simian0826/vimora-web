<script setup lang="ts"></script>

<template>
  <router-view></router-view>
</template>

<script lang="ts" setup>
import { onBeforeMount } from "vue";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

onBeforeMount(async () => {
  // 检测是否为移动设备
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

  // 如果不是移动设备，设置最小宽度
  if (!isMobile) {
    document.body.style.minWidth = "1200px";
  }

  // gsap.registerPlugin(ScrollTrigger);
  // const lenis = new Lenis();
  // lenis.on("scroll", ScrollTrigger.update);

  // gsap.ticker.add((time) => {
  //   lenis.raf(time * 1000);
  // });
});
</script>

<style scoped></style>
