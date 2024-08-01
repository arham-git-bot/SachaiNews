<template>
  <div class="home">


    <Navbar />
   <Trending />
<Featured/>


<Latest/>
<Browse/>
<Footer/>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue'
import Latest from '@/components/Latest.vue'
import Browse from '@/components/Browse.vue'

import Featured from '@/components/Featured.vue'
import Footer from '@/components/Footer.vue'
import Trending from'@/components/Trending.vue'

export default {
  name: 'HomeView',
  components: {
    Navbar,
    Latest,
    Browse,
    Footer,
    Featured,

    Trending
  }
}
</script>
