<template>
  <section>
    <div class="flex justify-between mt-10 mb-10">
      <div class="flex justify-between w-[30%] items-center">
        <div>
          <img
            src="https://uploads-ssl.webflow.com/64ae7a0260c324b7e56ab6b5/64b653319dad7b8061b00de2_sachai-logo.webp"
            alt="Logo"
            width="100px"
          />
        </div>
        <div class="border border-solid border-black h-[20px]"></div>
        <div class="flex justify-between gap-4">
          <div>
            <img
              src="https://uploads-ssl.webflow.com/64ae7a0260c324b7e56ab6b5/64ae7a0360c324b7e56ab783_app-store.svg"
              alt="App Store"
              width="100px"
              height="100px"
            />
          </div>
          <div>
            <img
              src="https://uploads-ssl.webflow.com/64ae7a0260c324b7e56ab6b5/64ae7a0360c324b7e56ab783_app-store.svg"
              alt="App Store"
              width="100px"
              height="100px"
            />
          </div>
        </div>
      </div>
      <div class="flex justify-between items-center w-[35%]">
        <div><a href="/">Home</a></div>

        <div class="dropdown" @mouseover="showDropdown = true" @mouseleave="showDropdown = false">
          <button class="dropbtn">
            Category
            <i class="fa fa-caret-down"></i>
          </button>
          <div class="dropdown-content" v-show="showDropdown">
            <a
              v-for="heading in navcategories3"
              :key="heading._id"
              :href="`/categories/${heading._id}?category=${heading.name}`"
              class="nav-top"
              style="text-align: center;"
            >
              {{ heading.name }}
            </a>
          </div>
        </div>
        <div><a href="#">Astrology</a></div>
        <div><a href="/Login">Login</a></div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      navcategories3: [],
      showDropdown: false,
    };
  },
  async created() {
    try {
      const response = await axios.post(
        'https://dev-api.askus.news/category/getAllCat',
        {
          langauge: this.$store.state.languageId, 
        }
      );
      this.$store.commit('setCategories', response.data); // Adjust based on your Vuex setup
      this.navcategories3 = response.data.slice(0, 14);
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  },
};
</script>

<style scoped>
.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown .dropbtn {
  font-size: 16px;
  border: none;
  outline: none;
  color: black;
  padding: 14px 16px;
  background-color: inherit;
  font-family: inherit;
  margin: 0;
}

.dropdown-content {
  display: none;
  position: absolute;
  margin-left: -2.5%;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0.9, 0.9, 0.9, 0.4);
  z-index: 1;
}

.dropdown-content a {
  float: none;
  color: black;
  padding: 7px 16px;
  text-decoration: none;
  display: block;
  text-align: left;
  border-bottom: 2px solid #f1f0f0;
}

.dropdown-content a:hover {
  background-color: #ddd;
}

.dropdown:hover .dropdown-content {
  display: block;
}

a {
  text-transform: capitalize;
}
</style>
