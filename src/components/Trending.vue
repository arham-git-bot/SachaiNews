<template>
  <div class="text-[30px] md:text-[45px] font-bold mb-8">Trending Headlines</div>
  <v-carousel  class="relative rounded-[20px]" v-if="sliceData.length">
    <v-carousel-item
      v-for="blog in sliceData"
      :key="blog._id"
      :src="blog.imgixUrlHighRes"
 
      cover
    >
      <div class="absolute right-0 mr-8 mt-4">
        <div class="flex">
          <span
            class="material-symbols-outlined bg-white rounded-full h-[35px] w-[35px] flex justify-center items-center"
          >
            share
          </span>
          &nbsp;
          <span
            class="material-symbols-outlined bg-white rounded-full h-[35px] w-[35px] flex justify-center items-center"
          >
            bookmark
          </span>
        </div>
      </div>
      <div class="absolute bottom-8 ml-8 w-[80%]">
        <div class="mt-2 text-[14px] md:text-[30px] text-white">{{ blog.headline }}</div>
        <div class="flex gap-1 text-white text-[12px] md:text-[16px]">
          <div>{{ blog.source }}</div>
          <div>| {{ formatPublishTime(blog.publishTime) }}</div>
        </div>
      </div>
    </v-carousel-item>
  </v-carousel>
</template>

<style scoped>
.v-carousel__controls {
  background: transparent !important; /* Remove background */
}
</style>

<script>
import axios from "axios";
import moment from "moment";

export default {
  data() {
    return {
      blogs: [],
      languageId: "6421a32aa020a23deacecf92",
    };
  },
  computed: {
    sliceData() {
      // Ensure sliceData is always an array
      return Array.isArray(this.blogs) ? this.blogs.slice(0, 3) : [];
    },
  },
  mounted() {
    this.fetchBlogs();
  },
  methods: {
    async fetchBlogs() {
      try {
        const response = await axios.post(
          "https://dev-api.askus.news/news/getAllBlogsForWeb",
          {
            language: this.languageId,
            page: 1,
          }
        );
        this.blogs = response.data || [];
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    },
    formatPublishTime(publishTime) {
      return moment(publishTime).fromNow();
    },
  },
};
</script>

<style scoped>

/* Remove default background and gradient from the controls */
.v-carousel__controls {
  background: transparent !important; /* Ensure background is transparent */
}

.v-carousel__control--prev,
.v-carousel__control--next {
  background: transparent !important; /* Remove background from control buttons */
  box-shadow: none !important; /* Remove any box-shadow */
}

/* Ensure there are no gradients applied to pseudo-elements or overlays */
.v-carousel__control::before,
.v-carousel__control::after {
  background: transparent !important; /* Remove gradients from pseudo-elements */
  box-shadow: none !important; /* Remove box-shadow from pseudo-elements */
}

/* If there's a gradient on a parent or another layer, reset it */
.v-carousel__control__prev,
.v-carousel__control__next {
  background: transparent !important; /* Ensure background is transparent */
  box-shadow: none !important; /* Remove any box-shadow */
}
.v-carousel__controls {
    align-items: center;
    bottom: 0;
    display: flex;
    height: 50px;
    justify-content: center;
    list-style-type: none;
    position: absolute;
    width: 100%;
    z-index: 1;
    background: none !important;
    }
</style>
