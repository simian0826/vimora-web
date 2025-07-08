<template>
  <div class="layout-container">
    <div class="nav-header">
      <div class="nav-content">
        <div class="mobile-menu" @click="toggleMobileMenu">
          <el-icon size="24" color="#fff"><Menu /></el-icon>
        </div>
        <div class="menu-items left hidden-xs-only">
          <div v-for="item in menu.slice(0, 3)" :key="item.path" class="menu-item" :class="{ 'is-active': activeRoute === item.path }" @click="menuItemClick(item)">
            {{ item.name }}
          </div>
        </div>
        <div class="logo">
          <img src="@/assets/images/logo_tm.png" alt="logo" />
        </div>
        <div class="mb-logo">
          <img src="@/assets/images/mb-nav-header.png" alt="logo" />
        </div>
        <div class="menu-items right hidden-xs-only">
          <div v-for="item in menu.slice(3)" :key="item.path" class="menu-item" :class="{ 'is-active': activeRoute === item.path }" @click="menuItemClick(item)">
            {{ item.name }}
          </div>
        </div>
      </div>
    </div>
    <div class="child-view">
      <router-view v-slot="{ Component, route }">
        <transition name="animation" mode="out-in">
          <component :is="Component" :key="route.path" />
        </transition>
      </router-view>
    </div>

    <div class="footer hidden-xs-only">
      <div class="footer-content">
        <img class="footer-logo" src="@/assets/images/footer/pic2_06.png" alt="footer" />

        <el-row :gutter="realWidthRef >= screenEnum.LG ? 60 : 20">
          <el-col :sm="14" :lg="16">
            <div class="menu-container">
              <div class="menu-column" v-for="(item, index) in footerNav" :key="index">
                <template v-if="item.linkType === 'scroll'">
                  <div class="title">
                    <router-link :to="item.link">
                      {{ item.sectionName }}
                    </router-link>
                  </div>
                </template>

                <template v-else-if="item.linkType === 'type'">
                  <div class="title">
                    <router-link :to="item.link">{{ item.sectionName }}</router-link>
                  </div>
                </template>
                <template v-else>
                  <div class="title">
                    {{ item.sectionName }}
                  </div>
                </template>

                <ul v-if="item.children">
                  <li :key="subIndex" v-for="(subItem, subIndex) in item.children">
                    <div class="menu-item-container">
                      <img v-if="subItem.prefixIcon" :src="subItem.prefixIcon" class="prefix-icon" />
                      <template v-if="item.sectionName === 'CONTACT US'">
                        <a :href="subItem.link">{{ subItem.sectionName }}</a>
                      </template>
                      <template v-else>
                        <router-link v-if="item.linkType === 'scroll'" :to="`${item.link}${subItem.link}`" :v-scroll-to="`#${subItem.link}`">{{ subItem.sectionName }}</router-link>
                        <router-link v-else :to="`${subItem.link}`">
                          {{ subItem.sectionName }}
                        </router-link>
                      </template>

                      <img v-if="subItem.suffixIcon" :src="subItem.suffixIcon" class="suffix-icon" />
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </el-col>
          <el-col :sm="10" :lg="8" class="!flex flex-wrap justify-end content-start">
            <div class="input-container" v-loading="loading" element-loading-background="rgba(250, 249, 239, 0.8)">
              <input v-model="signUpEmail" type="text" placeholder="Email Address" />
              <div class="footer_submit" @click="signUpHandler">
                <span>Sign up</span>
              </div>
            </div>
            <div class="confirm-container">
              <div class="confirm-item">
                <el-checkbox v-model="isAgreePolicy" />
                <span>
                  By proceeding, I declare that I have read the
                  <a href="/#/privacyAgreement">privacy policy</a>
                  the
                  <a href="/#/privacyAgreement">privacy policy</a>
                  for the processing of personal data by VIMORA.
                </span>
              </div>
              <div class="confirm-item">
                <el-checkbox v-model="isAgreeUsage" />
                <span>I consent to the processing of my personal data for the purposes of traditional and automated direct marketing.</span>
              </div>
            </div>
            <!-- <div class="supplement-text">Sign up to receive updates on new product launches, special events and more!</div> -->
          </el-col>
        </el-row>

        <el-row class="mt-[40px]">
          <el-col :span="10">
            <div class="motto">Traditional woodworking meets contemporary luxury to create spaces of timeless sophistication.</div>
          </el-col>
          <el-col :span="12" :offset="2">
            <div class="company-name-container">
              <img class="flower-img" src="@/assets/images/footer/pic1_03.png" />
              <div class="company-name">VIMORA</div>
              <div class="sub-company-name">Crafting Timeless Elegance</div>
            </div>
            <div class="copyright-container">Copyright © 2025 Vimora</div>
          </el-col>
        </el-row>
      </div>
    </div>

    <div class="mobile-footer hidden-sm-and-up">
      <div class="footer-content">
        <div class="footer-logo-wrap">
          <img class="footer-logo" src="@/assets/images/footer/pic2_06.png" alt="footer" />
        </div>
        <div class="footer-input-container">
          <div class="input-container" v-loading="loading" element-loading-background="rgba(250, 249, 239, 0.8)">
            <input v-model="signUpEmail" type="text" placeholder="Email Address" @change="() => {}" />
            <div class="footer_submit" @click="signUpHandler">
              <span>Sign up</span>
            </div>
          </div>
        </div>

        <div class="confirm-container">
          <div class="confirm-item">
            <el-checkbox v-model="isAgreePolicy" />
            <span>
              By proceeding, I declare that I have read the
              <a href="/#/privacyAgreement">privacy policy</a>
              the
              <a href="/#/privacyAgreement">privacy policy</a>
              for the processing of personal data by VIMORA.
            </span>
          </div>
          <div class="confirm-item">
            <el-checkbox v-model="isAgreeUsage" />
            <span>I consent to the processing of my personal data for the purposes of traditional and automated direct marketing.</span>
          </div>
        </div>
        <!-- <div class="supplement-text">Sign up to receive updates on new product launches, special events and more!</div> -->

        <div class="menu-section">
          <div class="menu-content-wrap">
            <div class="menu-header-wrap">
              <div class="menu-title">MENU</div>
            </div>
            <div class="menu-grid-wrap">
              <img :src="HomeSuffixIcon" alt="star" class="star-icon" />
              <div class="menu-grid">
                <router-link v-for="item in menu" :key="item.path" :to="item.path" class="menu-item">
                  {{ item.name }}
                </router-link>
              </div>
            </div>
          </div>
        </div>

        <div class="contact-section">
          <div class="menu-title">CONTACT</div>
          <div class="contact-item-container">
            <a href="tel:+16896980467" class="contact-item">
              <img :src="PhonePrefixIcon" class="contact-icon" />
              +1 (689) 698-0467
            </a>
            <a href="mailto:info@vimora.it" class="contact-item">
              <img :src="MailPrefixIcon" class="contact-icon" />
              info@vimora.it
            </a>
          </div>
        </div>

        <div class="footer-bottom">
          <div class="footer-title">
            <img :src="HomeSuffixIcon" alt="footer" class="footer-title-icon" />
            VIMORA
          </div>
          <div class="footer-bottom-content">
            <div class="motto">Crafting Timeless Elegance</div>
            <div class="copyright">© Copyrights 2025 VIMORA</div>
            <div class="motto-desc">The artistry of ltaly's finest woodworking with contemporary luxury. creating spaces of timeless sophistication.</div>
          </div>
        </div>
      </div>
    </div>

    <!-- 替换原有的 el-drawer -->
    <transition name="mobile-menu">
      <div v-if="showMobileMenu" class="custom-mobile-menu">
        <div class="menu-overlay"></div>
        <div class="menu-content">
          <div class="menu-header">
            <img src="@/assets/images/mb-nav-header.png" alt="logo" class="menu-logo" />
            <div class="close-btn" @click="toggleMobileMenu">
              <el-icon size="24" color="#fff"><Close /></el-icon>
            </div>
          </div>

          <div class="mobile-menu-items">
            <div v-for="item in menu" :key="item.path" class="mobile-menu-item" :class="{ 'is-active': activeRoute === item.path }" @click="mobileMenuClick(item)">
              {{ item.name }}
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { ElMessage } from "element-plus";
import { FooterNavItem, MenuItem } from "@/type/layout";
import { ref, computed } from "vue";
import { useRouter } from "vue-router";
import HomeSuffixIcon from "@/assets/images/footer/pic1_03.png";
import PhonePrefixIcon from "@/assets/images/footer/pic5_21.png";
import MailPrefixIcon from "@/assets/images/footer/pic6_20.png";
import { subscribeApi } from "@/api";
import { Menu, Close } from "@element-plus/icons-vue";
import { screenEnum } from "@/enums/breakPoint";
import { createBreakpointListen } from "@/hooks/useBreakpoint";

const vueRouter = useRouter();
const { realWidthRef } = createBreakpointListen();

const path = ref("");
const loading = ref(false);
const menu = ref<MenuItem[]>([
  { name: "Home", path: "/home" },
  { name: "About Us", path: "/aboutUs" },
  { name: "Craftsmanship", path: "/craftsmanship" },
  { name: "Collections", path: "/products" },

  { name: "Projects", path: "/projects" },
  { name: "Contact Us", path: "/contact" },
]);
const activeRoute = computed(() => {
  return vueRouter.currentRoute.value.path;
});
const menuItemClick = (item: MenuItem) => {
  path.value = item.path;
  vueRouter.push({ path: path.value });
};

const footerNav = ref<FooterNavItem[]>([
  {
    sectionName: "CONTACT US",
    link: "/contact",
    children: [
      {
        prefixIcon: PhonePrefixIcon,
        sectionName: "+1 (689) 698-0467",
        link: "tel:+16896980467",
      },
      {
        prefixIcon: MailPrefixIcon,
        sectionName: "info@vimora.it",
        link: "mailto:info@vimora.it",
      },
    ],
  },
  {
    sectionName: "MENU",
    link: "",
    children: [
      {
        sectionName: "Home",
        link: "/home",
        linkType: "type",
        suffixIcon: HomeSuffixIcon,
      },
      {
        sectionName: "About Us",
        link: "/aboutUs",
        linkType: "type",
      },
      {
        sectionName: "Craftsmanship",
        link: "/craftsmanship",
        linkType: "type",
      },

      {
        sectionName: "Collections",
        link: "/products",
        linkType: "type",
      },
      {
        sectionName: "Projects",
        link: "/projects",
        linkType: "type",
      },
      {
        sectionName: "Contact",
        link: "/contact",
        linkType: "type",
      },
    ],
  },
  {
    sectionName: "PROJECTS",
    link: "/projects",
    children: [
      {
        sectionName: "Completed",
        link: "/projects?state=Completed",
        linkType: "type",
      },
      {
        sectionName: "Ongoing",
        link: "/projects?state=Ongoing",
        linkType: "type",
      },
    ],
  },
  {
    sectionName: "COLLECTIONS",
    link: "/products",
    children: [
      {
        sectionName: "Grace",
        link: "/products/GraceCollection",
      },
      {
        sectionName: "Ambedo",
        link: "/products/AmbedoCollection",
      },
      {
        sectionName: "Yugen",
        link: "/products/YugenCollection",
      },
      {
        sectionName: "Fika",
        link: "/products/FikaCollection",
      },
    ],
  },
  // {
  //   sectionName: "ABOUT US",
  //   link: "/aboutUs",
  //   linkType: "scroll",
  //   children: [
  //     {
  //       sectionName: "About VIMORA",
  //       link: "#ourBrandStory",
  //     },
  //     {
  //       sectionName: "Appointment",
  //       link: "#appointment",
  //     },
  //   ],
  // },
]);

const signUpEmail = ref("");
const isAgreePolicy = ref(false);
const isAgreeUsage = ref(false);
const signUpHandler = async () => {
  if (!signUpEmail.value) {
    ElMessage.warning("Please input your email");

    return;
  }
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  if (!emailRegex.test(signUpEmail.value)) {
    ElMessage.warning("Please input a valid email address");
    return;
  }
  if (!isAgreePolicy.value || !isAgreeUsage.value) {
    ElMessage.warning("Please check those boxes if you want to sign up");
    return;
  }
  loading.value = true;
  try {
    const res = await subscribeApi({ email: signUpEmail.value, type: "subscribe" });
    ElMessage.success("Signup success!");

    loading.value = false;
    console.log(res);
  } catch (error) {
    loading.value = false;
  }
};

const showMobileMenu = ref(false);

const toggleMobileMenu = () => {
  showMobileMenu.value = !showMobileMenu.value;
};

const mobileMenuClick = (item: MenuItem) => {
  menuItemClick(item);
  showMobileMenu.value = false;
};
</script>
<style scoped lang="scss">
:root {
  --el-checkbox-checked-bg-color: #00526a !important;
  --el-checkbox-checked-border-color: #00526a !important;
}
:deep(.el-checkbox__inner) {
  &:hover {
    --el-checkbox-input-border-color-hover: #00526a !important;
  }
}
:deep(.el-checkbox) {
  ---el-checkbox-text-color: #231f20 !important;
}

:deep(.el-checkbox__input.is-checked .el-checkbox__inner) {
  background-color: #00526a !important;
  border-color: #00526a !important;
}
.animation-enter-from,
.animation-leave-to {
  opacity: 0.7;
}
.animation-enter-to,
.animation-leave-from {
  opacity: 1;
}
.animation-enter-active {
  transition: all 0.3s ease;
}
.animation-leave-active {
  transition: all 0.4s cubic-bezier(1, 0.6, 0.6, 1);
}

.layout-container {
  --menuItemFontSize: 20px;
  --menuItemFonSizeFirstLetter: 20px;

  height: 100%;
  width: 100%;
  box-sizing: border-box;
  flex-wrap: wrap;
  // padding-top: var(--headerH);

  .nav-header {
    width: 100%;
    position: fixed;
    box-sizing: border-box;
    height: 120px;
    padding: 30px 0px;
    top: 0;
    z-index: 2001;
    background: linear-gradient(to bottom, #51514f 0%, transparent 100%);
    @include responseTo("xs") {
      height: 80px;
      padding: 20px 0;
    }
    @include responseTo("sm") {
      height: 110px;
      padding: 20px 40px;
    }
    .nav-content {
      margin: 0 auto;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      max-width: 1200px;
      margin: 0 auto;
      // padding: 0 120px;

      .mobile-menu {
        display: none;
        @include responseTo("xs") {
          display: block;
          position: absolute;
          right: 20px;
          top: 50%;
          transform: translateY(-50%);
          cursor: pointer;
        }
      }

      .menu-items {
        display: flex;
        flex: 1;
        justify-content: space-between;

        gap: 60px;
        @include responseTo("sm") {
          gap: 20px;
        }
        .menu-item {
          color: #fff;
          font-size: 18px;
          cursor: pointer;
          transition: color 0.3s;
          font-family: "TheSeasons";
          // font-weight: 100;
          text-transform: none;
          // @include responseTo("sm") {
          //   font-size: 18px;
          // }

          &:hover {
            color: rgba(255, 255, 255, 0.7);
          }

          &.is-active {
            color: #fff;
            font-weight: bold;
            text-shadow: 0 0 4px #fff;
            position: relative;
          }
        }
      }

      .logo {
        height: 80%;
        padding: 0 106px;
        text-align: center;
        display: block;
        img {
          height: 100%;
          object-fit: contain;
        }
        @include responseTo("xs") {
          padding: 0;
          margin: 0 auto;
          display: none;
        }
        @include responseTo("sm") {
          height: 60%;
          padding: 0 60px;
        }
      }
      .mb-logo {
        display: none;
        @include responseTo("xs") {
          display: block;
          height: 100%;
          text-align: center;
          width: 100%;
          img {
            height: 100%;
            object-fit: contain;
          }
        }
      }
    }
  }

  .child-view {
    flex: 1 1 auto;
    // padding-top: 120px;
    width: 100%;
  }

  .footer {
    width: 100%;
    padding: 50px 20px;
    background-color: #faf9ef;
    font-family: "TheSeasons";

    .footer-content {
      margin: 0 auto;
      max-width: 1200px;
      overflow: hidden;
      .footer-logo {
        width: 100%;
        margin-bottom: 60px;
      }

      .input-container {
        width: 100%;
        position: relative;
        display: flex;
        justify-content: flex-end;
        input {
          background: url(@/assets/images/input.png) no-repeat center / 100% 100%;
          font-size: 16px;
          padding: 6px 20px 4px 20px;
          flex: 1;
          height: 40px;
          border-radius: 0;
          border: none;
          -webkit-appearance: none;
          -moz-appearance: none;
          appearance: none;
        }

        & > div {
          height: 40px;
          min-width: 120px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          color: #ece8ca;
          background: url(@/assets/images/btn.png) no-repeat center 100% / 100%;
          overflow: hidden;
          background-size: cover;
          position: relative;
          left: -2px;
          span {
            font-size: 16px;
            line-height: 40px;
          }
        }
      }

      .confirm-container {
        display: flex;
        flex-direction: column;
        margin-top: 10px;

        .confirm-item {
          @extend .ivyOra-light;
          line-height: 1.3;
          color: #00526a;
          display: flex;
          align-items: baseline;
          gap: 4px;
          font-size: 14px;

          @include responseTo("sm") {
            font-size: 16px;
          }
          span {
            position: relative;
            top: -2px;
          }
          a {
            text-decoration: underline;
            text-decoration-thickness: 1px;
            text-underline-offset: 6px;
          }
        }
      }

      .supplement-text {
        width: 360px;
        font-size: 14px;
        line-height: 1.33;
        color: #00526a;
        text-align: right;
        margin-top: 10px;
        @extend .ivyOra-light;
      }

      .motto {
        width: 100%;
        font-size: 14px;
        line-height: 1.33;
        color: #00526a;
        text-align: left;
      }

      .company-name-container {
        width: 100%;
        color: #00526a;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        flex-wrap: wrap;

        .flower-img {
          width: 20px;
          height: 20px;
          margin-right: 6px;
        }
        .company-name {
          font-size: 20px;
          font-weight: bold;
          margin-right: 4px;
        }
        .sub-company-name {
          font-size: 16px;
        }
      }
      .copyright-container {
        margin-top: 10px;
        font-size: 16px;
        color: #00526a;
        text-align: right;
      }

      .menu-container {
        // display: grid;
        // grid-template-columns: repeat(5, 1fr);
        display: flex;
        justify-content: space-between;
        gap: 10px;

        .menu-column {
          text-align: left;
        }
      }

      .title {
        font-size: 18px;
        font-weight: bold;
        color: #00526a;
        margin-bottom: 20px;
        cursor: pointer;
      }

      ul {
        li {
          --liColor: #00526a;

          font-size: 12px;
          font-weight: 300;
          color: var(--liColor);
          margin-bottom: 20px;
          cursor: pointer;
          line-height: 16px;
          @include responseTo("sm") {
            font-size: 14px;
          }

          .menu-item-container {
            display: flex;
            @extend .ivyOra-light;
            .prefix-icon {
              width: 16px;
              height: 16px;
              margin-right: 6px;
            }
            .suffix-icon {
              width: 16px;
              height: 16px;
              margin-left: 6px;
            }
          }
        }
      }
    }
  }

  .mobile-footer {
    width: 100%;
    background-color: #faf9ef;
    padding: 40px 20px;
    display: none;

    @include responseTo("xs") {
      display: block;
    }

    .footer-content {
      .footer-logo-wrap {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 40px;
        .footer-logo-wrap-line {
          width: 100%;
          height: 1px;
          background: linear-gradient(90deg, transparent 0%, #00526a 40%, #00526a 50%, #00526a 60%, transparent 100%);
        }
        .footer-logo {
          width: 100%;
        }
      }
      .footer-input-container {
        display: flex;
        justify-content: center;
        align-items: center;

        // padding: 0 20px;
        .input-container {
          width: 100%;
          aspect-ratio: 450/53;
          background: url(@/assets/images/footer/input-container.png) no-repeat center / 100% 100%;
          -webkit-appearance: none;
          -moz-appearance: none;
          appearance: none;
          position: relative;
          display: flex;
          justify-content: flex-end;

          input {
            background-color: transparent;
            // background: url(@/assets/images/input.png) no-repeat center / 100% 100%;
            font-size: 16px;
            padding: 0px 20px 0px 30px;
            flex: 205;
            border-radius: 0;
            border: none;
            -webkit-appearance: none;
            -moz-appearance: none;
            appearance: none;
          }

          & > div {
            flex: 120;
            aspect-ratio: 150/53;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            color: #ece8ca;
            // background: url(@/assets/images/btn.png) no-repeat center 100% / 100%;
            // overflow: hidden;
            background-size: contain;
            position: relative;
            left: -2px;
            span {
              font-size: 16px;
              line-height: 40px;
            }
          }
        }
      }

      .confirm-container {
        display: flex;
        flex-direction: column;
        margin-top: 10px;

        .confirm-item {
          @extend .ivyOra-light;
          font-size: 14px;
          line-height: 1.3;
          color: #00526a;
          display: flex;
          align-items: baseline;
          gap: 4px;

          span {
            position: relative;
            top: -2px;
          }
          a {
            text-decoration: underline;
            text-decoration-thickness: 1px;
            text-underline-offset: 6px;
          }
        }
      }
      .supplement-text {
        font-size: 12px;
        line-height: 1.2;
        color: #00526a;
        margin: 10px 0px;
        @extend .ivyOra-light;
      }

      .menu-section {
        margin: 40px 20px;

        .menu-content-wrap {
          display: flex;
          align-items: flex-start;
          gap: 10px;
        }

        .menu-header-wrap {
          flex: 0 0 auto;

          .menu-title {
            display: flex;
            align-items: center;
            font-family: "IvyOra";
            font-size: 12px !important;
            color: #00526a;
            white-space: nowrap;
            font-weight: bold;
          }
        }
        .menu-grid-wrap {
          display: flex;
          flex-direction: row;

          gap: 10px;
          .star-icon {
            width: 12px;
            height: 12px;
          }
        }

        .menu-grid {
          flex: 1;
          display: grid;
          grid-template-columns: repeat(3, 1fr); // 改为三列布局
          gap: 20px;

          .menu-item {
            color: #00526a;
            font-size: 12px;
            text-decoration: none;
            @extend .ivyOra-light;
            text-align: left; // 添加文本居中
          }
        }
      }

      .contact-section {
        display: flex;
        margin: 40px 0;
        gap: 10px;
        .menu-title {
          font-size: 12px;
          color: #00526a;
          font-weight: 600;
        }
        .contact-item-container {
          display: flex;
          flex-direction: row;
          gap: 10px;
        }
        .contact-item {
          display: flex;
          align-items: center;
          color: #00526a;
          font-size: 12px;
          text-decoration: none;
          @extend .ivyOra-light;

          .contact-icon {
            width: 12px;
            height: 12px;
            margin-right: 10px;
          }
        }
      }

      .signup-section {
        margin-bottom: 40px;

        input {
          width: 100%;
          padding: 12px;
          border: 1px solid #00526a;
          margin-bottom: 10px;
          background: transparent;
        }

        .signup-btn {
          width: 100%;
          padding: 12px;
          background: #00526a;
          color: #fff;
          border: none;
          margin-bottom: 15px;
        }

        .signup-text {
          font-size: 12px;
          color: #00526a;
          line-height: 1.4;
        }
      }

      .footer-bottom {
        .footer-title {
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 14px;
          color: #00526a;
          flex-direction: column;
          margin-bottom: 10px;
          @extend .theSeasons-bold;
          .footer-title-icon {
            width: 12px;
            height: 12px;
            margin-bottom: 10px;
          }
        }
        .motto {
          font-size: 12px;
          color: #00526a;
          line-height: 1.4;
          text-align: center;
          @extend .ivyOra-light;
        }

        .copyright {
          font-size: 12px;
          color: #00526a;
          text-align: center;
          margin-bottom: 20px;
          @extend .ivyOra-light;
        }
        .motto-desc {
          font-size: 12px;
          color: #00526a;
          line-height: 1.4;
          text-align: center;
          @extend .ivyOra-light;
        }
      }
    }
  }

  .mobile-menu-container {
    position: absolute;
    top: 15px;
    left: 20px;
    z-index: 9999;
  }

  /* 添加新的移动端菜单样式 */
  .mobile-menu-enter-active,
  .mobile-menu-leave-active {
    transition: all 0.3s ease;
  }

  .mobile-menu-enter-from {
    transform: translateY(-100%);
    opacity: 0;
  }

  .mobile-menu-leave-to {
    transform: translateY(-100%);
    opacity: 0;
  }

  .custom-mobile-menu {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 2002;

    .menu-overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(to bottom, rgba(50, 46, 44, 1) 0%, rgba(50, 46, 44, 0.95) 20%, rgba(50, 46, 44, 0.9) 40%, rgba(50, 46, 44, 0.8) 60%, rgba(50, 46, 44, 0.4) 80%, transparent 100%);
      opacity: 1;
    }

    .menu-content {
      position: relative;
      width: 100%;
      height: 100%;
      // background: rgba(68, 68, 68, 0.95);
      padding: 20px;
      display: flex;
      flex-direction: column;

      .menu-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 30px;

        .menu-logo {
          height: 40px;
          margin: 0 auto;
          display: block;
        }

        .close-btn {
          cursor: pointer;
          position: absolute;
          right: 20px;
        }
      }

      .mobile-menu-items {
        flex: 1;

        .mobile-menu-item {
          color: #fff;
          font-size: 20px;
          padding: 15px 0;
          @extend .ivyOra-light;
          text-align: center;
          letter-spacing: 1px;

          &.is-active {
            font-weight: 500;
            color: #fff;
            text-shadow: 0 0 4px #fff;
            position: relative;
          }
        }
      }

      .menu-footer {
        text-align: center;
        padding: 20px 0;

        .footer-logo {
          width: 40px;
          opacity: 0.8;
        }
      }
    }
  }
}

.sub-menu-container {
  width: 100%;
  padding: 20px;
  display: grid;
  justify-content: space-between;
  grid-template-columns: repeat(3, 32%);

  .sub-menu-item-container {
    padding: 20px;
    .sub-img {
      width: 100%;
      aspect-ratio: 1920/1080;
      object-fit: cover;
    }
    .sub-menu-item-name {
      margin-top: 10px;
      font-size: 16px;
      color: #111;
    }
  }
}
</style>
