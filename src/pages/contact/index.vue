<template>
  <div class="contact-us-container">
    <div class="construct-container">
      <!-- Contact Header -->

      <div class="content-block">
        <div class="header">Contact Us</div>
        <div class="detail">You can reach us through the email addresses or the form provided below. We look forward to hearing from you.</div>
      </div>

      <div class="content-block">
        <div class="header">VIMORA</div>
        <el-row>
          <el-col :xs="24" :sm="12" :class="{ 'mb-[40px]': breakpoint === sizeEnum.XS }">
            <div class="sub-header">Mailing Address:</div>
            <div class="detail">2601 S Bayshore Dr, Suite 1710, Miami, FL 33133</div>
          </el-col>
          <el-col :xs="24" class="hidden-sm-and-up" :class="{ 'mb-[40px]': breakpoint === sizeEnum.XS }">
            <div class="sub-header">Telephone:</div>
            <div class="detail">+1 (689) 698-0467</div>
          </el-col>
          <el-col :xs="12" :sm="6" :class="{ 'mb-[40px]': breakpoint === sizeEnum.XS }">
            <div class="sub-header">General Requests:</div>
            <div class="detail">info@vimora.it</div>
          </el-col>
          <el-col :xs="12" :sm="6" :class="{ 'mb-[40px]': breakpoint === sizeEnum.XS }">
            <div class="sub-header">Sales Team:</div>
            <div class="detail">sales@vimora.it</div>
          </el-col>
        </el-row>
        <el-row class="mt-[10px]">
          <el-col :span="12" class="hidden-xs-only">
            <div class="sub-header">Telephone:</div>
            <div class="detail">+1 (689) 698-0467</div>
          </el-col>
          <el-col :xs="12" :sm="6" :class="{ 'mb-[40px]': breakpoint === sizeEnum.XS }">
            <div class="sub-header">After Sales Service:</div>
            <div class="detail">service@vimora.it</div>
          </el-col>
          <el-col :xs="12" :sm="6" :class="{ 'mb-[40px]': breakpoint === sizeEnum.XS }">
            <div class="sub-header">Work With Us</div>
            <div class="detail">info@vimora.it</div>
          </el-col>
        </el-row>
      </div>

      <div class="content-block">
        <div class="header">Send Us A Request</div>

        <div class="contact-form-container" :class="{ 'px-[20px]': breakpoint === sizeEnum.XS }">
          <el-form v-loading="loading" element-loading-background="rgba(250, 249, 239, 0.8)" class="w-full" label-position="top" :model="contactForm" ref="contactFormRef" :rule="rules">
            <el-row :gutter="20">
              <el-col :xs="24" :sm="8">
                <el-form-item label="First Name" prop="firstName" required>
                  <el-input v-model="contactForm.firstName" placeholder="" />
                </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="8">
                <el-form-item label="Last Name" prop="lastName" required>
                  <el-input v-model="contactForm.lastName" placeholder="" />
                </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="8">
                <el-form-item label="Company" prop="company" required>
                  <el-input v-model="contactForm.company" placeholder="" />
                </el-form-item>
              </el-col>
            </el-row>
            <el-row :gutter="20">
              <el-col :xs="24" :sm="12">
                <el-form-item label="Email" prop="email" required>
                  <el-input v-model="contactForm.email" placeholder="" class="custom-input" />
                </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="12">
                <el-form-item label="Telephone" prop="telephone" required>
                  <el-input v-model="contactForm.telephone" placeholder="Please Input" class="custom-input">
                    <template #prepend>
                      <el-select filterable v-model="contactForm.telephoneAreaCode" placeholder="+" style="width: 200px; background-color: transparent; font-size: 16px">
                        <el-option v-for="option in phoneCodeOptions" :key="option.value" :label="option.label" :value="option.value" />
                      </el-select>
                    </template>
                  </el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row :gutter="20">
              <el-col :xs="24" :sm="12">
                <el-form-item label="Inquiry Type" prop="inquiryType" required>
                  <el-select v-model="contactForm.inquiryType" placeholder="-- Select --">
                    <el-option v-for="option in inquiryTypeOptions" :key="option.value" :label="option.label" :value="option.value" />
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="12">
                <el-form-item label="User Type" prop="userType" required>
                  <el-select v-model="contactForm.userType" placeholder="-- Select --">
                    <el-option v-for="option in userTypeOptions" :key="option.value" :label="option.label" :value="option.value" />
                  </el-select>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row :gutter="20">
              <el-col :xs="24" :sm="8">
                <el-form-item label="Country" prop="country" required>
                  <el-select filterable v-model="contactForm.country" placeholder="-- Select --">
                    <el-option v-for="option in countryOptions" :key="option.value" :label="option.label" :value="option.value" />
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="8">
                <el-form-item label="State" prop="state" required>
                  <el-select :disabled="contactForm.country === ''" filterable v-model="contactForm.state" placeholder="-- Select --">
                    <el-option v-for="option in stateOptions" :key="option.value" :label="option.label" :value="option.value" />
                  </el-select>
                </el-form-item>
              </el-col>

              <el-col :xs="24" :sm="8">
                <el-form-item label="City" prop="city" required>
                  <el-select ref="selectRef" :disabled="contactForm.state === ''" filterable v-model="contactForm.city" placeholder="-- Select --">
                    <el-option v-for="option in cityOptions" :key="option.value" :label="option.label" :value="option.value" />
                  </el-select>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row :gutter="20">
              <el-col :xs="24" :sm="24">
                <el-form-item label="Message" prop="message">
                  <el-input v-model="contactForm.message" class="custom-input" :autosize="{ minRows: 4, maxRows: 8 }" type="textarea" placeholder=""></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row :gutter="20">
              <template v-if="breakpoint !== sizeEnum.XS">
                <el-col :xs="24" :sm="24">
                  <el-form-item prop="isAgreed" required>
                    <el-checkbox v-model="contactForm.isAgreed" size="large"></el-checkbox>
                    <div class="ml-10px">
                      By continuing, I declare that I have read the
                      <a class="privacy-link" href="/#/privacyAgreement">Privacy Policy</a>
                      of VIMORA regarding the processing of personal data.
                    </div>
                  </el-form-item>
                </el-col>
              </template>
              <template v-else>
                <el-col :xs="24" :sm="24" class="mb-[20px]">
                  <div class="supplement-text">
                    By continuing, I declare that I have read the
                    <a href="/#/privacyAgreement">Privacy Policy</a>
                    of VIMORA regarding the processing of personal data.
                  </div>
                </el-col>

                <el-col :xs="24" :sm="24" class="mb-[20px]">
                  <el-form-item prop="isAgreed" required>
                    <el-radio-group v-model="contactForm.isAgreed" fill="#492320" text-color="#492320" class="custom-radio-group">
                      <el-radio :label="true">I agree</el-radio>
                      <el-radio :label="false">I do not agree</el-radio>
                    </el-radio-group>
                  </el-form-item>
                </el-col>
              </template>
              <el-col :xs="24" :sm="24">
                <div class="submit-button" @click="handleSubmit">Send</div>
              </el-col>
            </el-row>
          </el-form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, watch, inject } from "vue";
import { submitContactUsApi } from "@/api";
import type { ContactUsForm, ContactUsRequest, Dict } from "@/api/model";
import type { FormInstance, FormRules } from "element-plus";
import { ElMessage } from "element-plus";
import { phoneCodeOptions } from "@/data/staticData";
import { regionData } from "@/data/regionData";
import { createBreakpointListen } from "@/hooks/useBreakpoint";
import { sizeEnum } from "@/enums/breakPoint";
const { screenRef: breakpoint } = createBreakpointListen();
const loading = ref(false);
const contactForm = reactive<ContactUsForm>({
  firstName: "",
  lastName: "",
  company: "",
  email: "",
  telephone: "",
  telephoneAreaCode: "",
  inquiryType: "",
  userType: "",
  country: "",
  state: "",
  city: "",
  message: "",
  isAgreed: false,
});

const countryOptions = ref(regionData.map((item) => ({ label: item.label, value: item.value })));
const stateOptions = ref<Dict[]>([]);
const cityOptions = ref<Dict[]>([]);
const contactFormRef = ref<FormInstance>();

const rules = reactive<FormRules>({
  firstName: [{ required: true, message: "Please input your first name", trigger: "blur" }],
  lastName: [{ required: true, message: "Please input your last name", trigger: "blur" }],
  company: [{ required: true, message: "Please input your company", trigger: "blur" }],
  email: [
    { type: "email", message: "Your email format is not correct", trigger: "blur" },
    { required: true, message: "Please input your email", trigger: "blur" },
  ],
  telephone: [{ required: true, message: "Please input your telephone", trigger: "blur" }],
  userType: [{ required: true, message: "Please select your user type", trigger: "change" }],
  inquiryType: [{ required: true, message: "Please select your inquiry type", trigger: "change" }],
  isAgreed: [{ type: "boolean", required: true, message: "Please agree to the privacy policy", trigger: "change" }],
  message: [{ required: false, message: "Please input your message", trigger: "blur" }],
  country: [{ required: true, message: "Please select your country", trigger: "change" }],
  state: [{ required: true, message: "Please select your state", trigger: "change" }],
  city: [{ required: true, message: "Please select your city", trigger: "change" }],
});

const inquiryTypeOptions = [
  { label: "New Project", value: "new_project" },
  { label: "New Dealership", value: "new_dealership" },
  { label: "Press", value: "press" },
  { label: "Careers", value: "careers" },
  { label: "Marketing", value: "marketing" },
  { label: "Other", value: "other" },
];

const userTypeOptions = [
  { label: "End User", value: "end_user" },
  { label: "Architect/Interior Designer", value: "architect_designer" },
  { label: "Developer/Contractor", value: "developer_contractor" },
  { label: "Press", value: "press" },
  { label: "Other", value: "other" },
];

const lenis = inject("lenis");

const handleVisibleChange = (visible) => {
  if (visible) {
    lenis?.stop();
  } else {
    lenis?.start();
  }
};

const handleSubmit = async () => {
  const { telephoneAreaCode, isAgreed, ...formData } = contactForm;

  if (!isAgreed) {
    ElMessage.warning("Please agree to the privacy policy");
    return;
  }

  if (await contactFormRef.value?.validate()) {
    loading.value = true;
    const contactFormRequest: ContactUsRequest = {
      ...formData,
      telephone: telephoneAreaCode + contactForm.telephone,
    };
    try {
      await submitContactUsApi(contactFormRequest);
      ElMessage.success("We've recieved your message!");
    } catch (error) {
      ElMessage.error("Failed to submit your message");
    } finally {
      loading.value = false;
    }
    loading.value = false;
  }
};

watch(
  () => contactForm,
  () => {
    // formRef.value?.validate();
  },
  { deep: true },
);

watch(
  () => contactForm.country,
  (newCountry) => {
    // 根据选择的国家更新州选项
    const selectedCountry = regionData.find((item) => item.value === newCountry);
    stateOptions.value = selectedCountry?.children || [];
    contactForm.state = "";
    contactForm.city = "";
  },
);

watch(
  () => contactForm.state,
  (newState) => {
    // 根据选择的州更新城市选项
    const selectedState = stateOptions.value.find((item) => item.value === newState);
    cityOptions.value = selectedState ? selectedState.children || [] : [];
    contactForm.city = ""; // 清空城市
  },
);

// onMounted(() => {
//   formRef.value?.validate();
// });
</script>

<style lang="scss">
:root {
  --el-fill-color-light: transparent !important;
  --el-input-bg-color: transparent !important;
  --el-select-bg-color: transparent !important;
  --el-fill-color-blank: transparent !important;
  --el-select-dropdown-bg-color: rgba(255, 255, 255, 0.9) !important;
  --el-border-radius-base: 0px !important;
  --el-border-radius-small: 0px !important;
  --el-border-radius-round: 0px !important;
  --el-border-color: rgba(73, 35, 32, 0.3) !important;
  --el-border-color-hover: #492320 !important;
  --el-input-hover-border-color: #492320 !important;
  --el-input-focus-border-color: #492320 !important;
  --el-input-focus-box-shadow: 0 0 0 1px #492320 inset !important;

  --el-select-border-color-hover: #492320 !important;
  --el-select-input-focus-border-color: #492320 !important;
  --el-input-focus-color: #492320 !important;
  --el-checkbox-checked-bg-color: #492320 !important;
  --el-checkbox-checked-border-color: #492320 !important;
  --el-select-option-selected-text-color: #492320 !important;
  --el-input-border-color: rgba(73, 35, 32, 0.3) !important;
  --el-input-border-color-hover: #492320 !important;
  --el-input-focus-border-color: #492320 !important;
  --el-input-focus-box-shadow: 0 0 0 1px #492320 inset !important;
}
.el-select-dropdown__item.is-selected {
  --el-color-primary: #492320 !important;
  color: #492320 !important;
  span {
    text-shadow: 0 0 2px #492320 !important;
  }
}

.contact-us-container {
  @include responseTo("sm") {
    padding: 0 40px;
  }
  @include responseTo("lg") {
    padding: 0 0px;
  }
  input {
    font-family: "IvyOra" !important;
    font-weight: 300 !important;
  }

  .el-select__placeholder {
    span {
      font-family: "IvyOra" !important;
      font-weight: 300 !important;
    }
  }
  .el-textarea__inner {
    font-family: "IvyOra" !important;
    font-weight: 300 !important;
  }
  /* 添加针对前置下拉框的样式 */
  .el-input-group__prepend {
    box-shadow: unset !important;
    .el-select {
      .el-input {
        .el-input__wrapper {
          border-radius: 0 !important;
        }
      }
    }
  }
  .el-input__wrapper {
    &.is-focus {
      box-shadow: 0 0 0 1px #492320 inset !important;
    }
  }
  .el-select__wrapper {
    &.is-focused {
      box-shadow: 0 0 0 1px #492320 inset !important;
    }
  }
  .el-textarea__inner {
    &.is-focus {
      box-shadow: 0 0 0 1px #492320 inset !important;
    }
  }

  .el-checkbox__inner {
    &:hover {
      --el-checkbox-input-border-color-hover: #492320 !important;
    }
  }
  .el-checkbox {
    ---el-checkbox-text-color: #231f20 !important;
  }
  .el-checkbox__input + .el-checkbox__label {
    color: #231f20 !important;
  }
  .el-checkbox__input.is-checked + .el-checkbox__label {
    color: #231f20 !important;
  }
  .el-checkbox__input.is-checked .el-checkbox__inner {
    background-color: #492320 !important;
    border-color: #492320 !important;
  }

  .el-radio__label {
    color: #ccc !important;
  }

  .el-radio__input.is-checked + .el-radio__label {
    color: #231f20 !important;
  }
  .el-radio__inner:after {
    background: #00526a;
    width: 70%;
    height: 70%;
  }
  .el-radio__input.is-checked .el-radio__inner {
    &::after {
      translate: translate(-49%, -51%) scale(1) !important;
    }
    background: #ece8ca;
    border-color: #00526a;
  }

  width: 100%;
  position: relative;
  // color: #fff;
  font-family: "TheSeasons";
  background-color: #faf9ef;
  padding-top: 100px;

  .construct-container {
    padding-top: 50px;
    padding-bottom: 80px;
    margin: 0 auto;
    color: #231f20;

    @include responseTo("sm") {
      max-width: 1200px;
      min-height: 100%;
    }
    @include responseTo("xs") {
      width: 100%;
      padding-bottom: 20px;
    }

    .content-block {
      margin-bottom: 60px;
      .header {
        @extend .theSeasons-bold;
        color: #231f20;

        font-size: 24px;
        font-weight: 700;
        margin-bottom: 20px;
        @include responseTo("xs") {
          padding: 0 20px;
          font-size: 22px;
        }
      }
      .sub-header {
        color: #231f20;
        font-family: "IvyOra";
        margin-bottom: 6px;
        @include responseTo("xs") {
          padding: 0 20px;
          font-size: 16px;
          font-weight: 300;
        }
        @include responseTo("sm") {
          font-size: 18px;
          font-weight: bold;
        }
      }
      .detail {
        font-size: 14px;
        @extend .ivyOra-light;

        line-height: 1.3;
        color: #231f20;

        @include responseTo("xs") {
          padding: 0 20px;
          font-size: 16px;
        }
      }

      .contact-form-container {
        width: 100%;

        .supplement-text {
          font-size: 14px;
          font-family: "IvyOra";
          font-weight: 300;
          line-height: 1.3;
          color: #231f20;
          a {
            color: #00526a;
            text-decoration: underline;
            text-decoration-thickness: 1px;
            text-underline-offset: 4px;
          }
        }

        .submit-button {
          width: 97px;
          height: 61px;
          background-image: url("@/assets/images/contact/submit-btn.png");
          background-size: 100% 100%;
          background-repeat: no-repeat;
          background-position: center;
          text-align: center;
          color: #ece8ca;
          font-size: 18px;
          line-height: 61px;
          cursor: pointer;
          font-family: "IvyOra";
          font-weight: 300;

          @include responseTo("xs") {
            transform: scale(0.8);
            transform-origin: top left;
          }
        }

        .privacy-link {
          color: #00526a;
          text-decoration: underline;
          text-decoration-thickness: 1px;
          text-underline-offset: 4px;
        }
      }
    }
  }
}

:deep(.el-button) {
  background-color: #00526a;
  color: #fff;
  border-color: #00526a;

  &:hover {
    background-color: rgba(0, 82, 106, 0.8);
    border-color: rgba(0, 82, 106, 0.8);
  }
}

:deep(.el-radio-group) {
  fill: #492320 !important;
  color: #492320 !important;
}
</style>
