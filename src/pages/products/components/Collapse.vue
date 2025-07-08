<template>
  <div class="collapsed-container">
    <div class="header" @click="collapsedRef = !collapsedRef">
      <div class="title">{{ props.title }}</div>
      <el-icon :size="20">
        <ArrowDown v-if="!collapsedRef" />
        <ArrowUp v-else />
      </el-icon>
    </div>
    <div
      class="content"
      :style="{
        height: collapsedRef ? '0' : 'auto',
      }"
    >
      <slot></slot>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
const props = defineProps({
  title: {
    type: String,
  },
  collapsed: {
    type: Boolean,
    default: true,
  },
});
const collapsedRef = ref(props.collapsed);
</script>

<style scoped lang="scss">
.collapsed-container {
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top: 1px solid #000;
    cursor: pointer;
    @include responseTo("xs") {
      padding: 10px 0;
    }
    .title {
      font-family: "IvyOra";
      font-weight: 300;
      font-size: 26px;
      color: #231f20;
      line-height: 32px;

      @include responseTo("xs") {
        font-size: 18px;
        line-height: 24px;
      }
      @include responseTo("sm") {
        padding: 6px 0;
      }
    }
  }
  .content {
    overflow: hidden;
    transition: height 0.6s;
  }
}
</style>
