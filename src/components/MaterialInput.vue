<template>
  <div class="input-container">
    <template v-if="$props.type != 'textArea'">
      <span class="label" :class="isLabel ? 'activate' : ''">{{ props.label }}</span>
      <input class="input" :value="$props.modelValue" v-bind="props" @focus="handleFoucus" @blur="handleBlur" @input="handleChange" />
    </template>
    <template v-else>
      <span class="label-text-area" :class="isLabel ? 'activate' : ''">{{ props.label }}</span>
      <textarea rows="3" class="text-area" :value="$props.modelValue" v-bind="props" @focus="handleFoucus" @blur="handleBlur" @input="handleChange" />
    </template>
  </div>
</template>

<script setup lang="ts">
import { ref, onBeforeMount } from "vue";
type MaterilaInputProps = {
  type?: string;
  modelValue: string;
  label: string;
};

const emit = defineEmits(["update:modelValue", "change", "blur", "focus"]);
const props = defineProps<MaterilaInputProps>();
const isLabel = ref(false);

const handleChange = (e) => {
  emit("update:modelValue", e.target.value);
  emit("change", e.target.value);
};
const handleFoucus = (e) => {
  isLabel.value = true;
  emit("focus", e);
};
const handleBlur = (e) => {
  if (props.modelValue) {
    isLabel.value = true;
  } else {
    isLabel.value = false;
  }
  emit("blur", e);
};
console.log(props);

onBeforeMount(() => {
  if (props.modelValue) {
    isLabel.value = true;
  } else {
    isLabel.value = false;
  }
});
</script>
<style scoped lang="scss">
.input-container {
  position: relative;
  width: 100%;

  // &:has(.input:focus) {
  //   .label {
  //     top: 10px;
  //     font-size: 13px;
  //   }
  // }

  .label {
    position: absolute;
    z-index: 2;
    top: 50%;
    left: 20px;
    transform: translateY(-50%);
    font-size: 20px;
    transition: all 0.3s;

    &.activate {
      top: 10px;
      font-size: 14px;
    }
  }
  .input {
    width: 100%;
    padding: 10px 20px;
    border: 1px solid #999;
    border-radius: 5px;
    box-sizing: border-box;
    outline: none;
    transition: border-color 0.3s ease;
    background-color: transparent;

    height: 64px;
    position: relative;
    z-index: 1;
    &:focus,
    &:hover {
      border-color: #fff;
    }
  }

  .label-text-area {
    position: absolute;
    z-index: 2;
    top: 20px;
    left: 20px;
    font-size: 20px;
    transition: all 0.3s;

    &.activate {
      top: -4px;
      font-size: 14px;
    }
  }

  .text-area {
    width: 100%;
    padding: 22px 20px;
    border: 1px solid #999;
    border-radius: 5px;
    box-sizing: border-box;
    outline: none;
    transition: border-color 0.3s ease;
    background-color: transparent;
    position: relative;
    z-index: 1;
    &:focus,
    &:hover {
      border-color: #fff;
    }
  }
}
</style>
