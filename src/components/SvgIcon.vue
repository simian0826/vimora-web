<template>
  <svg :style="{ width: witdth, height: height }">
    <use :xlink:href="prefix + iconName" :fill="fillColor"></use>
  </svg>
</template>

<script setup lang="ts">
defineProps({
  prefix: {
    type: String,
    default: "#icon-",
  },
  iconName: {
    type: String,
    default: "",
  },
  fillColor: {
    type: String,
    default: "",
  },
  witdth: {
    type: String,
    default: "30px",
  },
  height: {
    type: String,
    default: "30px",
  },
});
</script>

<style scoped></style>
