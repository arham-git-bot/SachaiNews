<template>
  <div>
    <Navbar /> <!-- Ensure this is correctly imported and used -->

    <section>
      <h1 id="categoryTitle">{{ category }}</h1>
      <!-- first -->
      <div class="flex flex-row justify-between gap-5">
        <div class="w-[50%]">
          <img
            :src="data1[0].imgixUrlHighRes"
            alt=""
            class="w-full h-[296px] object-cover rounded-xl"
          />
          <div class="flex justify-between items-center">
            <div class="flex gap-1 text-gray-400 text-md m-2">
              <div>{{ data1[0].source }}</div>
              <div>| {{ moment(data1[0].publishTime).fromNow() }}</div>
            </div>
            <div class="flex gap-1 justify-evenly">
              <span class="material-symbols-outlined text-md cursor-pointer">share</span>
              <span class="material-symbols-outlined text-md cursor-pointer">bookmark</span>
            </div>
          </div>

          <div class="text-[32px] semi-bold">{{ data1[0].headline }}</div>
          <div class="text-[16px]">{{ truncateText(data1[0].summary, 200) }}</div>
        </div>

        <div class="w-[50%] flex flex-col justify-between gap-5">
          <div v-for="item in data1.slice(1, 3)" :key="item._id" class="w-full h-[200px] bg-white flex rounded-lg">
            <div class="w-[40%] p-2">
              <a :href="`${SACHAI_NEWS_URL}${item._id}`">
                <img class="w-full h-full rounded-md object-cover" :src="item.imgixUrlHighRes" alt="" />
              </a>
            </div>
            <div class="w-[60%] ml-2 mt-2 mr-2 flex flex-col justify-between">
              <div class="flex justify-between items-center mt-1">
                <div class="flex gap-1 text-gray-400 medium">
                  <div class="text-[14px]">{{ item.source }}</div>
                  <div class="text-[14px]">| {{ moment(item.publishTime).fromNow() }}</div>
                </div>
                <div class="flex gap-1">
                  <span class="material-symbols-outlined text-[8px]">share</span>
                  <span class="material-symbols-outlined text-xs">bookmark</span>
                </div>
              </div>
              <div class="text-[20px] bold mr-1">
                <a :href="`${SACHAI_NEWS_URL}${item._id}`" class="hover:text-current">{{ item.headline }}</a>
              </div>
              <div class="text-md mr-1">
                <a :href="`${SACHAI_NEWS_URL}${item._id}`" class="hover:text-current">{{ truncateText(item.summary, 100) }}</a>
              </div>
              <div class="mb-5 text-[16px] flex gap-1">
                <span class="text-red-500">Politics</span>
                <span>| 4 min read</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- second -->
      <div class="mt-20">
        <div class="text-4xl font-bold">Breaking News</div>
        <div class="flex mt-10 gap-5">
          <div class="w-[70%] flex flex-col gap-5">
            <div
              v-for="item in data2"
              :key="item._id"
              class="w-full h-[200px] bg-white flex rounded-lg"
            >
              <div class="w-[40%] p-2">
                <a :href="`${SACHAI_NEWS_URL}${item._id}`">
                  <img class="w-full h-full rounded-md object-cover" :src="item.imgixUrlHighRes" alt="" />
                </a>
              </div>
              <div class="w-[60%] ml-2 mt-2 flex flex-col justify-between">
                <div class="flex justify-between items-center mt-3 mr-2">
                  <div class="flex gap-1 text-gray-400 medium">
                    <div class="text-sm">{{ item.source }}</div>
                    <div class="text-sm">| {{ moment(item.publishTime).fromNow() }}</div>
                  </div>
                  <div class="flex gap-1">
                    <span class="material-symbols-outlined text-[8px]">share</span>
                    <span class="material-symbols-outlined text-xs">bookmark</span>
                  </div>
                </div>
                <div class="text-[20px] bold mr-1">
                  <a :href="`${SACHAI_NEWS_URL}${item._id}`" class="hover:text-current">{{ item.headline }}</a>
                </div>
                <div class="text-md mr-1">
                  <a :href="`${SACHAI_NEWS_URL}${item._id}`" class="hover:text-current">{{ truncateText(item.summary, 100) }}</a>
                </div>
                <div class="mb-5 text-[16px] flex gap-1">
                  <span class="text-red-500">Politics</span>
                  <span>| 4 min read</span>
                </div>
              </div>
            </div>
          </div>

          <!-- third -->
          <div class="w-[30%] flex flex-col gap-5">
            <div class="bg-white rounded-xl p-4">
              <div class="text-[16px] bold">Hot Topics</div>
              <div v-for="item in data3" :key="item._id" class="mt-5 flex gap-2">
                <div class="w-[30%]">
                  <a :href="`${SACHAI_NEWS_URL}${item._id}`">
                    <img
                      class="w-full h-full rounded-md object-cover h-[79px]"
                      :src="item.imgixUrlHighRes"
                      alt=""
                    />
                  </a>
                </div>
                <div class="w-[70%] flex flex-col justify-between">
                  <div class="flex justify-between items-center">
                    <div class="flex gap-1 text-gray-400 medium">
                      <div class="text-[10px]">{{ item.source }}</div>
                      <div class="text-[10px]">| {{ moment(item.publishTime).fromNow() }}</div>
                    </div>
                    <div class="flex gap-1">
                      <span class="material-symbols-outlined text-[8px]">share</span>
                      <span class="material-symbols-outlined text-xs">bookmark</span>
                    </div>
                  </div>
                  <div class="text-[11.91px] bold">
                    <a :href="`${SACHAI_NEWS_URL}${item._id}`" class="hover:text-current">{{ item.headline }}</a>
                  </div>
                  <div class="text-[8px] mt-1 flex gap-1">
                    <span class="text-red-500">Politics</span>
                    <span>| 4 min read</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- fourth -->
            <div class="bg-white rounded-xl p-4">
              <div class="text-[16px] bold">Featured News</div>
              <div v-for="item in data4" :key="item._id" class="mt-5 flex gap-2">
                <div class="w-[30%]">
                  <a :href="`${SACHAI_NEWS_URL}${item._id}`">
                    <img
                      class="w-full h-full rounded-md object-cover h-[79px]"
                      :src="item.imgixUrlHighRes"
                      alt=""
                    />
                  </a>
                </div>
                <div class="w-[70%] flex flex-col justify-between">
                  <div class="flex justify-between items-center">
                    <div class="flex gap-1 text-gray-400 text-[10px]">
                      <div>{{ item.source }}</div>
                      <div>| {{ moment(item.publishTime).fromNow() }}</div>
                    </div>
                    <div class="flex gap-1">
                      <span class="material-symbols-outlined text-xs">share</span>
                      <span class="material-symbols-outlined text-xs">bookmark</span>
                    </div>
                  </div>
                  <div class="text-[12px] bold">
                    <a :href="`${SACHAI_NEWS_URL}${item._id}`" class="hover:text-current">{{ item.headline }}</a>
                  </div>
                  <div class="text-[8px] mt-1 flex gap-1">
                    <span class="text-red-500">Politics</span>
                    <span>| 4 min read</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <Footer /> <!-- Ensure this is correctly imported and used -->
  </div>
</template>

<script>
import axios from "axios";
// Remove the moment import if not used
// import moment from "moment";

import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";

export default {
  components: {
    Navbar,  // Register the Navbar component
    Footer   // Register the Footer component
  },
  data() {
    return {
      data1: [],
      data2: [],
      data3: [],
      data4: [],
      category: "",
      SACHAI_NEWS_URL: 'https://news.sachai.io/news/',
    };
  },
  async created() {
    const categoryId = this.$route.params.categoryId;
    
    // Fetch category title from URL query params
    const urlSearchParams = new URLSearchParams(window.location.search);
    const item = Object.fromEntries(urlSearchParams.entries());
    if (item && item.category) {
      this.category = item.category;
    }

    try {
      const { data } = await axios.post(
        "https://dev-api.askus.news/news/getCategoryWiseNewsForWeb",
        { categoryId }
      );

      this.data1 = data.slice(0, 3);
      this.data2 = data.slice(3, 8);
      this.data3 = data.slice(8, 13);
      this.data4 = data.slice(13, 20);
    } catch (error) {
      console.error("Error fetching news data:", error);
    }
  },
  methods: {
    truncateText(text, maxLength) {
      return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
    }
  }
};
</script>

<style scoped>
body {
  margin: 0px 80px;
  font-family: "Lato", sans-serif;
}
</style>
