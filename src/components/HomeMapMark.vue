<template>
  <div :style="iconStyle">
    <el-tooltip effect="customized">
      <template #content><img class="mark-img" :src="imageUrl" /></template>
      <div>
        <img class="pin-icon" src="@/assets/images/home/location.png" />
        <div class="mark-title">{{ name }}</div>
        <!-- <div class="wave-circle"></div> -->
      </div>
    </el-tooltip>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const props = defineProps({
  name: String,
  imageUrl: String,
  left: String,
  top: String,
});

const showImage = ref(false);
const circleRadius = ref(10);
const increasing = ref(true);

const iconStyle = {
  position: "absolute",
  left: `${props.left}`,
  top: `${props.top}`,
};
</script>

<style lang="scss">
.el-popper.is-customized {
  /* Set padding to ensure the height is 32px */
  padding: 4px;
  border-radius: 8px;
  background: #faf9ef;
}

.el-popper.is-customized .el-popper__arrow::before {
  background: #faf9ef;
  border-color: #00526a 1px solid;
}
.location-fill {
  font-size: 24px;
}
.pin-icon {
  width: 30px;
  height: 30px;
  z-index: 0;
  position: relative;

  @include responseTo("xs") {
    width: 16px;
    height: 16px;
    transform: translateY(-5px);
  }
}
.wave-circle {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(0, 79, 103, 0.2);
  border-radius: 50%;
  width: 0px;
  height: 0px;
  @include responseTo("xs") {
    animation: wave-m 3s infinite;
  }
  @include responseTo("sm") {
    animation: wave 3s infinite;
  }
  @keyframes wave {
    0% {
      width: 0px;
      height: 0px;
    }
    50% {
      width: 80px;
      height: 80px;
    }
    100% {
      width: 0px;
      height: 0px;
    }
  }
  @keyframes wave-m {
    0% {
      width: 0px;
      height: 0px;
    }
    50% {
      width: 30px;
      height: 30px;
    }
    100% {
      width: 0px;
      height: 0px;
    }
  }
}
.mark-title {
  font-size: 28px;
  color: #004f67;
  @extend .ivyOra-light;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  z-index: 10;
  text-shadow: 0 0 1px #faf9ef !important;
  // background-color: #faf9ef;
  @include responseTo("xs") {
    font-size: 12px;
    top: -30px;
  }
  @include responseTo("sm") {
    top: -40px;
    font-size: 16px;
  }
}
.mark-img {
  // position: absolute;
  // left: 30px;
  // top: -35px;
  border-radius: 4px;
  width: 180px;
  aspect-ratio: 178/ 111;
  z-index: 10;
}
</style>
