<script>
import { RouterView } from 'vue-router'
import HeaderComponent from './components/Header.vue'
import BackgroundPolygons from './components/BackgroundPolygons.vue';
import Footer from './components/Footer.vue';

export default {
  name: 'HomeView',
  components: {
    HeaderComponent,
    RouterView,
    BackgroundPolygons,
    Footer
  }
}
</script>

<template>
  <HeaderComponent></HeaderComponent>
  <div class="relative isolate pt-14">
    <BackgroundPolygons top_position="-top-40" sm_top_position="sm:-top-80" left_position="left-[calc(50%-11rem)]"
      sm_left_position="sm:left-[calc(50%-30rem)]"></BackgroundPolygons>
    <RouterView></RouterView>
    <BackgroundPolygons top_position="top-[calc(100%-13rem)]" sm_top_position="sm:top-[calc(100%-30rem)]"
      left_position="left-[calc(50%+30rem)]" sm_left_position="sm:left-[calc(50%+36rem)]"></BackgroundPolygons>
  </div>
  <Footer></Footer>
</template>
