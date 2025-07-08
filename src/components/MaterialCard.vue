<template>
  <div class="material-card" ref="cardRef">
    <div class="material-card__image">
      <img :src="image" :alt="title" />
    </div>
    <div class="material-card__content">
      <h3 class="material-card__title">{{ props.title }}</h3>
      <p class="material-card__desc">{{ props.description }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, defineExpose } from "vue";

interface Props {
  image: string;
  title: string;
  description: string;
}

const props = defineProps<Props>();

const cardRef = ref<HTMLElement | null>(null);

// 暴露 ref 给父组件
defineExpose({
  cardRef,
});
</script>

<style scoped lang="scss">
.material-card {
  display: flex;
  flex-direction: column;
  gap: 20px;

  &__image {
    aspect-ratio: 16/9;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.3s ease;

      &:hover {
        transform: scale(1.05);
      }
    }
  }

  &__title {
    color: #231f20;
    font-weight: bold;
    margin-bottom: 10px;
    @include responseTo("xs") {
      font-size: 16px;
    }
    @include responseTo("sm") {
      font-size: 26px;
    }
  }

  &__desc {
    @extend .ivyOra-light;
    color: #231f20;

    line-height: 1.5;
    @include responseTo("xs") {
      font-size: 14px;
    }
    @include responseTo("sm") {
      font-size: 20px;
    }
  }
}
</style>
