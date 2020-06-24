<template>
  <div class="sticky">
    <div>
      {{counter}}.
      <span class="project-name">{{project}}</span>
    </div>
    <div class="break">
      <line-animation />
    </div>
    <div class="hightlights is-size-3 has-text-grey has-text-weight-medium">
      <div v-for="entry in highlights" :key="entry">{{entry}}</div>
    </div>
  </div>
</template>
<script>
import lineAnimation from "@/components/lineAnimation.vue";
export default {
  components: {
    lineAnimation
  },
  data: function() {
    return {};
  },
  props: { counter: String, project: String, highlights: Array },
};
</script>
<style scoped>
.project-name {
  font-size: calc(30px + (150 - 30) * ((100vw - 300px) / (2300 - 300)));
}
.sticky {
  position: -webkit-sticky;
  position: sticky;
  top: 10%;
}
.hightlights {
  margin-top: 10%;
}
</style>
