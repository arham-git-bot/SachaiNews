<template>
  <section>
    <div class="flex justify-between mt-10 mb-10">
      <div class="flex justify-between w-[30%] items-center">
        <div>
          <img
            src="https://uploads-ssl.webflow.com/64ae7a0260c324b7e56ab6b5/64b653319dad7b8061b00de2_sachai-logo.webp"
            alt=""
            width="100px"
          />
        </div>
        <div class="hidden sm:block border border-solid border-black h-[20px]"></div>
        <div class="hidden justify-between gap-4 md:flex">
          <div>
            <img
              src="https://uploads-ssl.webflow.com/64ae7a0260c324b7e56ab6b5/64ae7a0360c324b7e56ab783_app-store.svg"
              alt=""
              width="100px"
              height="100px"
            />
          </div>
          <div>
            <img
              src="https://uploads-ssl.webflow.com/64ae7a0260c324b7e56ab6b5/64ae7a0360c324b7e56ab783_app-store.svg"
              alt=""
              width="100px"
              height="100px"
            />
          </div>
        </div>
      </div>
      <div class="flex justify-between items-center">
        <!-- Desktop Menu -->
        <div class="hidden md:flex gap-20">
          <div><a href="/">Home</a></div>
          <div class="dropdown">
            <button class="dropbtn">
              Category
              <i class="fa fa-caret-down"></i>
            </button>
            <div class="dropdown-content">
              <!-- Dropdown content here -->
            </div>
          </div>
          <div><a href="">Astrology</a></div>
          <div><a href="/Login">Login</a></div>
        </div>
        <!-- Hamburger Button -->
        <div class="md:hidden flex items-end justify-end">
          <button @click="toggleMenu" class="hamburger-btn">
            &#9776;
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile Menu -->
    <div :class="['mobile-menu', { show: isMenuOpen }]" class="h-[100%]">
      <div class="mb-5"><a href="/">Home</a></div>
      <div class="dropdown mb-5">
        <button class="dropbtn">
          Category
          <i class="fa fa-caret-down"></i>
        </button>
        <div class="dropdown-content">
          <!-- Dropdown content here -->
        </div>
      </div>
      <div class="mb-5"><a href="">Astrology</a></div>
      <div class="mb-5"><a href="/Login">Login</a></div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      isMenuOpen: false
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    }
  }
};
</script>

<style>
.hamburger-btn {
  font-size: 1.5em;
  background: none;
  border: none;
  color: #333;
  cursor: pointer;
}

.mobile-menu {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease, padding 0.3s ease;
}

.mobile-menu.show {
  max-height: 500px; /* Adjust to a value that fits the content */
  padding: 1em;
}

.mobile-menu a {
  color: black;
  text-decoration: none;
}

.mobile-menu .dropdown-content {
  display: block;
}
</style>
