<template>
  <div class="home">
    <HelloWorld/>
    <Footer1 />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Footer1 from "../components/Footer.vue"

export default {
  name: 'HomeView',
  components: {
    HelloWorld,
    Footer1
  }
}
</script>
