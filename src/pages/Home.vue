<template>
  <div>
    <nav-bar />
    <div class="page">
      <hero />
      <about />
      <expertise />
      <creations />
      <timeline />
      <contact />
    </div>
  </div>
</template>
<script>
import Hero from "@/pages/Hero.vue";
import About from "@/pages/about.vue";
import Expertise from "@/pages/expertise.vue";
import Creations from "@/pages/creations.vue";
import Timeline from "@/pages/career.vue";
import Contact from "@/pages/contact.vue";
import navBar from "@/components/navBar";
export default {
  components: {
    navBar,
    Hero,
    About,
    Expertise,
    Contact,
    Creations,
    Timeline
  }
};
</script>