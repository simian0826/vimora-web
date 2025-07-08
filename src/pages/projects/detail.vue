<script setup lang="ts">
import ProjectSwiper from "@/components/ProjectSwiper.vue";
import { sizeEnum } from "@/enums/breakPoint";

import { projectData } from "@/data/projectData";
import { createBreakpointListen } from "@/hooks/useBreakpoint";
import { ref } from "vue";
import { useRoute } from "vue-router";
import { ProjectDetail } from "@/api/model";
const { screenRef: breakpoint } = createBreakpointListen();
const route = useRoute();

const id = route.params.id as string;

const project = ref<ProjectDetail>(projectData.find((project) => project.id === id) as ProjectDetail);
console.log(project.value);

const projects = project.value.recommendedSwiperImages.map((recommendedSwiperImages) => recommendedSwiperImages.image);

const relatedProjects = project.value.relatedProjects;
</script>
<template>
  <div class="project-detail">
    <div class="banner">
      <div class="banner-mask"></div>
      <img :src="project.bannerImage" alt="project-banner" class="banner-image" />
      <img :src="project.mbBannerImage" alt="project-banner" class="banner-image-mobile" />
      <div class="banner-info-wrap">
        <div class="project-name">{{ project.name }}</div>
        <div class="project-location">{{ project.location }}</div>
        <img src="@/assets/images/projects/down-arrow.png" alt="project-info" class="down-arrow-image" />
      </div>
    </div>
    <div class="project-info">
      <img src="@/assets/images/projects/project-detail-flower.png" alt="project-info" class="flower-image" />
      <img src="@/assets/images/projects/project-detail-flower-center.png" alt="project-info" class="flower-image-center" />
      <!-- <div class="flower-image-center-wrap">
        <div class="flower-image-center-wrap-text">
          <div class="project-location">{{ project.location }}</div>
          <div class="project-name">{{ project.name }}</div>
        </div>

        <img src="@/assets/images/projects/project-detail-flower-center.png" alt="project-info" class="flower-image-center" />
        <img src="@/assets/images/projects/project-detail-flower.png" alt="project-info" class="flower-image-center-mb" />
      </div> -->

      <div class="desc-block-container" v-if="breakpoint === sizeEnum.XS">
        <img src="@/assets/images/tuteng.png" class="bg" />
        <h2 class="desc-title">{{ project.location }}</h2>
        <div class="desc-content">{{ project.name }}</div>
      </div>
      <img src="@/assets/images/projects/project-detail-flower.png" alt="project-info" class="flower-image-right" />
    </div>
    <ProjectSwiper :projects="projects" />
    <div class="project-description">
      <div class="description-content">
        <div class="description-text">
          <p v-for="(item, index) in project.desc" :key="index">
            {{ item }}
          </p>
        </div>
        <div class="project-specs">
          <div class="spec-item">
            <div class="label">Project Type</div>
            <div class="value">{{ project.type }}</div>
          </div>
          <div class="spec-item">
            <div class="label">Year</div>
            <div class="value">{{ project.year }}</div>
          </div>
          <div class="spec-item">
            <div class="label">Status</div>
            <div class="value">{{ project.status }}</div>
          </div>
          <div class="spec-item">
            <div class="label">Units</div>
            <div class="value">{{ project.units }}</div>
          </div>
          <div class="spec-item">
            <div class="label">Products</div>

            <div class="value">{{ project.products.join(", ") }}</div>
          </div>
        </div>
      </div>
      <!-- <div class="action-buttons">
        <div class="action-item">
          <div class="line"></div>
          <div class="action-text">Share</div>
        </div>
        <div class="action-item">
          <div class="line"></div>
          <div class="action-text">Save in your collection</div>
        </div>
      </div> -->
    </div>
    <div class="project-images">
      <div class="image-grid">
        <img v-for="(item, index) in project.materialsGridImages" :key="index" :src="item.image" alt="project detail" />
      </div>
    </div>
    <div class="related-projects">
      <template v-if="breakpoint !== sizeEnum.XS">
        <h2 class="section-title">View More Residential Projects</h2>
        <div class="home-desc-block-container">
          <img src="@/assets/images/home/down-flower.png" class="down-flower" />
          <h2 class="desc-title">View More Residential Projects</h2>
        </div>
      </template>

      <div v-else class="desc-block-container">
        <img src="@/assets/images/home/down-flower.png" class="down-flower" />
        <h2 class="desc-title">View More Residential Projects</h2>
      </div>
      <div class="projects-grid">
        <a :href="`/#/projects/${project.id}`" v-for="(project, index) in relatedProjects" :key="index" class="project-card">
          <div class="image-wrapper">
            <img :src="project.image" :alt="project.name" />
          </div>
          <h3 class="project-name">{{ project.name }}</h3>
          <p class="project-location">{{ project.location }}</p>
        </a>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
.project-detail {
  width: 100%;
  height: 100%;
  background-color: #faf9ef;

  .desc-block-container {
    padding: 80px 0px;
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
    position: relative;

    @include responseTo("xs") {
      padding: 40px 20px;
    }
    .bg {
      position: absolute;
      z-index: 0;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      @include responseTo("xs") {
        width: 150px;
        height: 150px;
      }
      @include responseTo("sm") {
        width: 300px;
        height: 300px;
      }
    }
    .down-flower {
      // position: absolute;
      // bottom: 0;
      // left: 50%;
      // transform: translateX(-50%);
      @include responseTo("sm") {
        width: 83px;
        height: 188px;
      }
      @include responseTo("xs") {
        width: 40px;
        aspect-ratio: 83/188;
        margin-bottom: 20px;
      }
    }
    .desc-title {
      position: relative;
      text-align: center;

      @include responseTo("xs") {
        font-size: 24px;
        margin-bottom: 20px;
        margin-top: 20px;
        font-weight: bold;
      }
      @include responseTo("sm") {
        font-size: 42px;
        margin-bottom: 34px;
        margin-top: 20px;
      }
    }
    .desc-content {
      position: relative;

      font-size: 24px;
      line-height: 1.5;
      color: #231f20;
      text-align: center;
      max-width: 1250px;
      font-family: "IvyOra";
      font-weight: 300;

      @include responseTo("xs") {
        font-size: 16px;
        line-height: 1.3;

        // margin-bottom: 20px;
      }
    }
    .desc-href {
      position: relative;

      font-size: 24px;
      text-decoration: underline;
      text-decoration-thickness: 1px;
      text-underline-offset: 4px;
      margin-top: 43px;
      margin-bottom: 53px;
      font-weight: 300;

      @include responseTo("xs") {
        font-size: 16px;
        margin-top: 40px;
        margin-bottom: 20px;
      }
    }
  }

  .banner {
    position: relative;
    width: 100%;
    height: 100%;
    .banner-mask {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 2;
      background-image: linear-gradient(to bottom, transparent 30%, rgba(0, 0, 0, 0.8) 100%);
    }
    .banner-image {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
      @include responseTo("xs") {
        display: none;
      }
    }
    .banner-image-mobile {
      display: none;
      @include responseTo("xs") {
        display: block;
        width: 100%;
        aspect-ratio: 750/800;
        margin-bottom: 0px;
      }
    }
    .banner-info-wrap {
      position: absolute;
      z-index: 3;
      bottom: 40px;
      left: 50%;
      transform: translateX(-50%);
      display: flex;
      flex-direction: column;
      gap: 10px;
      text-align: center;
      text-shadow: 0 0 2px #000;

      .project-location {
        font-size: 26px;
        color: #fff;
        @include responseTo("xs") {
          display: none;
        }
      }
      .project-name {
        font-size: 42px;
        color: #fff;
        margin-bottom: 20px;
        font-weight: bold;

        @include responseTo("xs") {
          display: none;
        }
      }
      .down-arrow-image {
        width: 30px;
        height: 158px;
        margin-left: 50%;
        transform: translateX(-50%);
        animation: floatArrow 2s ease-in-out infinite;
        opacity: 0.3;
      }

      @keyframes floatArrow {
        0% {
          transform: translateX(-50%) translateY(0);
          opacity: 0.3;
        }
        50% {
          transform: translateX(-50%) translateY(15px);
          opacity: 1;
        }
        100% {
          transform: translateX(-50%) translateY(0);
          opacity: 0.3;
        }
      }
    }
  }

  .project-info {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 32px 0;
    display: grid;
    grid-template-columns: repeat(3, auto);
    gap: clamp(200px, 5vw, 400px);
    @include responseTo("xs") {
      grid-template-columns: repeat(1, auto);
      gap: none;
    }

    .flower-image,
    .flower-image-right {
      width: clamp(120px, 15vw, 210px);
      height: clamp(120px, 15vw, 210px);
      @include responseTo("xs") {
        display: none;
      }
    }
    .flower-image-center-wrap {
      display: none;
      @include responseTo("xs") {
        position: relative;
        width: 150px;
        height: 150px;
        padding: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        .flower-image-center-wrap-text {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          z-index: 10;
          gap: 10px;
          .project-location {
            font-size: 18px;
            color: #000000;
            font-weight: 700;
            display: none;
            @include responseTo("xs") {
              display: block;
            }
          }
          .project-name {
            font-size: 12px;
            color: #fff;
            color: #000000;
            font-weight: 300;
            display: none;
            @include responseTo("xs") {
              display: block;
            }
          }
        }
      }
    }
    .flower-image-center {
      display: block;
      width: clamp(160px, 20vw, 280px);
      height: clamp(160px, 20vw, 280px);
      @include responseTo("xs") {
        display: none;
      }
    }
    .flower-image-center-mb {
      display: none;
      @include responseTo("xs") {
        display: block;
        width: 100%;
      }
    }
  }

  .project-description {
    padding: 80px 120px;

    @include responseTo("xs") {
      padding: 40px 20px; // 移动端减小内边距
    }

    .description-content {
      max-width: 1200px;
      margin: 0 auto;
      display: grid;
      grid-template-columns: 2fr 1fr;
      gap: clamp(60px, 5vw, 120px);

      @include responseTo("xs") {
        grid-template-columns: 1fr; // 移动端改为单列
        gap: 40px; // 减小间距
      }
    }

    .description-text {
      font-family: "IvyOra";
      font-weight: 300;
      p {
        font-size: 16px;
        line-height: 1.8;
        color: #333;
      }
    }
    .project-specs {
      width: 100%;
      .spec-item {
        width: 100%;
        display: flex;
        gap: 40px;
        margin-bottom: 24px;
        align-items: center;
        @extend .ivyOra-light;

        // @include responseTo("xs") {
        //   gap: 40px; // 移动端减小间距
        // }

        .label {
          color: #1b1b1b;
          font-size: 14px;
          min-width: 100px;
        }

        .value {
          color: #666;
          font-size: 16px;
          font-weight: 500;
          line-height: 1.3;
        }
      }
    }
  }

  .project-images {
    padding: 0 120px;

    @include responseTo("xs") {
      padding: 0 20px; // 移动端减小内边距
    }

    .image-grid {
      max-width: 1200px;
      margin: 0 auto;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 36px;

      @include responseTo("xs") {
        grid-template-columns: 1fr; // 移动端改为单列
        gap: 20px; // 减小图片间距
      }

      img {
        width: 100%;
        aspect-ratio: 752/447;
        object-fit: cover;
      }
    }
  }

  .related-projects {
    padding: 80px 120px;

    margin: 0 auto;
    @include responseTo("xs") {
      padding: 40px 20px;
    }

    .section-title {
      font-size: 32px;
      font-weight: 500;
      text-align: left;
      max-width: 1200px;
      margin: 0 auto 60px;
      @include responseTo("xs") {
        display: none;
      }
    }
    .home-desc-block-container {
      display: none;
      width: 100%;
      flex-direction: column;
      align-items: center;
      display: none;
      @include responseTo("xs") {
        display: flex;
      }
      .down-flower {
        // position: absolute;
        // bottom: 0;
        // left: 50%;
        // transform: translateX(-50%);

        @include responseTo("xs") {
          display: block;
          width: 63px;
          height: 143px;
        }
      }
      .desc-title {
        font-size: 42px;

        // margin-top: 20px;
        @include responseTo("xs") {
          font-size: 26px;
          margin-top: 23px;
          margin-bottom: 34px;
        }
      }
    }

    .projects-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 30px;
      max-width: 1200px;
      margin: 0 auto;
    }

    .projects-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      gap: 30px;
      @include responseTo("xs") {
        grid-template-columns: 1fr;
        .project-card {
          .image-wrapper {
            margin-bottom: 30px;
          }
          .project-name {
            font-size: 16px;
          }
          .project-location {
            font-size: 12px;
          }
        }
      }
      .project-card {
        text-align: center;
        cursor: pointer;
        .image-wrapper {
          aspect-ratio: 4/3;
          overflow: hidden;
          margin-bottom: 16px;

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

        .project-name {
          font-size: 20px;
          margin-bottom: 8px;
          font-weight: normal;
        }

        .project-location {
          color: #666;
          font-size: 14px;
          font-family: "IvyOra";
          font-weight: 300;
        }
      }
    }
  }

  .action-buttons {
    padding-top: 60px;
    display: flex;
    gap: 40px;
    justify-content: flex-start;
    max-width: 1200px;
    margin: 0 auto;
    @include responseTo("xs") {
      padding-top: 0px;
    }

    .action-item {
      display: flex;
      align-items: center;
      gap: 12px;
      cursor: pointer;

      .line {
        width: 38px;
        height: 1px;
        background-color: #000;
        transition: width 0.3s ease;
        @include responseTo("xs") {
          width: 20px;
        }
      }

      .action-text {
        font-size: 16px;
        color: #333;
        @include responseTo("xs") {
          font-size: 14px;
        }
      }

      // &:hover {
      //   .line {
      //     width: 50px;
      //   }
      // }
    }
  }
}
</style>
