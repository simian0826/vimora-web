<template>
  <div class="project-container">
    <ProjectSwiper :projects="projectBanners" />
    <div class="project-list">
      <!-- <h1 class="title">Projects</h1> -->
      <div class="home-desc-block-container">
        <img src="@/assets/images/home/down-flower.png" class="down-flower" />
        <h2 class="desc-title">Projects</h2>
      </div>

      <div class="filters">
        <el-select v-model="selectedState" placeholder="Project State" class="filter-select">
          <el-option v-for="option in stateOptions" :key="option.value" :value="option.value" :label="option.label"></el-option>
        </el-select>

        <div class="separator">
          <img :src="SplitFlower" alt="separator" width="35" height="35" />
        </div>

        <el-select v-model="selectedType" placeholder="Project Type" class="filter-select">
          <el-option v-for="option in typeOptions" :key="option.value" :value="option.value" :label="option.label"></el-option>
        </el-select>
      </div>

      <div class="projects-grid">
        <a :href="`/#/projects/${project.id}`" v-for="(project, index) in filteredProjects" :key="project.id" class="project-card" :ref="(el) => setListItemRefs(el as HTMLElement, index)">
          <div class="image-wrapper">
            <img :src="project.projectPoster" :alt="project.name" />
          </div>
          <h3 class="project-name">{{ project.name }}</h3>
          <p class="project-location">{{ project.location }}</p>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import ProjectSwiper from "@/components/ProjectSwiper.vue";
import { ref, computed, onMounted, watch } from "vue";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitFlower from "@/assets/images/split-flower.png";
import { useRoute } from "vue-router";
import { projectData } from "@/data/projectData";
import { ProjectDetail } from "@/api/model";
// let scrollTriggers: ScrollTrigger[] = [];

gsap.registerPlugin(ScrollTrigger);
const route = useRoute();
const selectedState = ref("");
const selectedType = ref("");

  const stateOptions = [
  { value: "", label: "All" },

  { value: "Ongoing", label: "Ongoing" },
  { value: "Completed", label: "Completed" },
];

const typeOptions = [
  { value: "", label: "All" },
  { value: "Residential", label: "Residential" },

  { value: "Commercial", label: "Commercial" },
  { value: "Mixed-use", label: "Mixed-use" },
];

const projectsList = ref<ProjectDetail[]>(projectData);
const projectBanners = ref([
  "https://fileprod.obs.cn-east-3.myhuaweicloud.com/mail/images/projects/p3/swiper2.jpg",
  "https://fileprod.obs.cn-east-3.myhuaweicloud.com/mail/images/projects/p2/detail-banner.jpg",
  "https://fileprod.obs.cn-east-3.myhuaweicloud.com/mail/images/projects/p3/detail-banner.jpg",
  "https://fileprod.obs.cn-east-3.myhuaweicloud.com/mail/images/projects/p4/detail-banner.jpg",
]);

const listItemRefs = ref<HTMLElement[]>([]);
const setListItemRefs = (ref: HTMLElement | null, index: number) => {
  if (ref) {
    listItemRefs.value[index] = ref;
  }
};

// const initializeAnimations = () => {
//   // Clear existing ScrollTriggers
//   scrollTriggers.forEach((trigger) => trigger.kill());
//   scrollTriggers = [];

//   listItemRefs.value.forEach((itemRef) => {
//     if (itemRef) {
//       gsap.set(itemRef, { opacity: 0, y: 50 });
//     }
//   });
//   listItemRefs.value.forEach((itemRef, index) => {
//     if (itemRef) {
//       gsap.set(itemRef, { opacity: 0, y: 50 });

//       gsap.to(itemRef, {
//         opacity: 1,
//         y: 0,
//         duration: 0.8,
//         delay: (index % 3) * 0.2,
//         ease: "power2.out",
//         scrollTrigger: {
//           trigger: itemRef,
//           start: "top 40%", // 进入可视区域的40%
//           end: "bottom 0%",
//           once: true,
//         },
//       });
//     }
//   });
// };

// 监听路由参数变化
watch(
  () => route.query.state,
  (newState) => {
    if (newState && stateOptions.some((option) => option.value === newState)) {
      selectedState.value = newState as string;
    }
  },
  { immediate: true },
);

// 初始化时检查路由参数
onMounted(() => {
  const stateParam = route.query.state || "";
  if (stateParam && stateOptions.some((option) => option.value === stateParam)) {
    selectedState.value = stateParam as string;
  }
  // initializeAnimations();
});

const filteredProjects = computed(() => {
  return projectsList.value.filter((project) => {
    const stateMatch = !selectedState.value || project.state === selectedState.value;
    const typeMatch = !selectedType.value || project.type === selectedType.value;
    return stateMatch && typeMatch;
  });
});
</script>

<style scoped lang="scss">
.project-container {
  width: 100%;
  position: relative;
  padding-top: 140px;
  background-color: #faf9ef;
}
.project-list {
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;

  .home-desc-block-container {
    // padding: 80px 0px;

    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
    .down-flower {
      // position: absolute;
      // bottom: 0;
      // left: 50%;
      // transform: translateX(-50%);
      @include responseTo("xs") {
        width: 40px;
        aspect-ratio: 83/188;
      }
      @include responseTo("sm") {
        display: none;
      }
    }
    .desc-title {
      font-size: 42px;

      @include responseTo("xs") {
        font-size: 24px;
        margin-bottom: 40px;
        margin-top: 20px;
        font-weight: bold;
      }
      @include responseTo("sm") {
        font-size: 42px;
        margin-bottom: 34px;
        margin-top: 20px;
        margin-bottom: 40px;
      }
    }
  }
  .filters {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 16px;
    margin-bottom: 40px;

    .filter-select {
      width: 283px;
      line-height: 58px;
      // height: 58px;
      height: calc(283px * 118 / 566);
      aspect-ratio: 566/ 118;
      :deep(.el-select__wrapper) {
        height: calc(283px * 118 / 566);
        background: transparent;
        box-shadow: none;
        padding: 8px 16px;
        border: none;
        position: relative;

        &::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          border: 1px solid transparent;
          background-image: url("@/assets/images/select-bac.png");
          background-size: 100% 100%;
          background-repeat: no-repeat;
          background-position: center;

          pointer-events: none;
          z-index: -1;
        }
      }

      :deep(.el-input__inner) {
        font-size: 16px;
        color: #333;
      }
    }

    .separator {
      font-size: 20px;
      color: #666;
      @include responseTo("xs") {
        display: none;
      }
    }
  }

  .projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 30px;

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
      }
    }
  }
}

@include responseTo("xs") {
  .project-list {
    .filters {
      flex-direction: column;

      .filter-select {
        width: 100%;
      }
    }

    .projects-grid {
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
  }
}
</style>
