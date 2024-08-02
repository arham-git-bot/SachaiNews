<template>
  <section class="mt-20">
    <div>
      <div class="text-[30px] md:text-[45px] font-bold mb-8">Featured</div>
      <div v-if="blogs.length">
        <v-carousel
          :key="carouselKey"
          height="400"
          progress="primary"
          hide-delimiters
        >
          <v-carousel-item v-for="(blog, index) in blogs" :key="index">
            <div class="flex flex-row flex-wrap justify-between items-start">
              <div class="w-full lg:w-[50%] mb-4 lg:mb-0">
                <img
                  class="w-full h-[250px] lg:h-[396px] rounded-xl object-cover"
                  :src="blog.imgixUrlHighRes"
                  alt=""
                />
              </div>
              <div class="w-full lg:w-[45%] flex flex-col justify-between">
                <div class="flex gap-1 text-gray-400 text-sm m-2">
                  <div>{{ blog.source }}</div>
                  <div>| {{ moment(blog.publishTime).fromNow() }}</div>
                </div>
                <div class="mt-5 text-xl sm:text-2xl md:text-3xl font-semibold">
                  <a
                    :href="`${SACHAI_NEWS_URL}${blog._id}`"
                    class="hover:text-current"
                  >
                    {{ blog.headline }}
                  </a>
                </div>
                <div
                  class="text-[14px] sm:text-[12px] md:text-[16px] mt-5 line-clamp-3"
                >
                  {{ blog.summary }}
                </div>
              </div>
            </div>
          </v-carousel-item>
        </v-carousel>
      </div>
    </div>
  </section>
</template>

<script>
import axios from "axios";
import moment from "moment";

export default {
  data() {
    return {
      blogs: [],
      carouselKey: 0,
      SACHAI_NEWS_URL: "https://news.sachai.io/news/",
      languageId: "6421a32aa020a23deacecf92",
    };
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
        this.blogs = response.data;
        // Increment carouselKey to force re-render when data is fetched
        this.carouselKey++;
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    },
    moment(date) {
      return moment(date);
    },
  },
};
</script>

<style scoped>
/* Add any component-specific styles here */
@import "tailwindcss/utilities"; /* Ensure Tailwind CSS utilities are imported */

.line-clamp-3 {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
  -webkit-line-clamp: 3; /* Limits to 3 lines */
}
</style>
