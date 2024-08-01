<template>
  <div class="home">
<!--  -->
    <HelloWorld/>
    <Navbar />

<Latest/>
<Browse/>
<Footer/>
<!--  -->
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Navbar from '@/components/Navbar.vue'
import Latest from '@/components/Latest.vue'
import Browse from '@/components/Browse.vue'
import Footer from'@/components/Footer.vue'
export default {
  name: 'HomeView',
  components: {
    HelloWorld,
    Navbar,
    Latest,
    Browse,
    Footer,
  }
}
</script>
