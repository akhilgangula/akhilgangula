<template>
  <div class="wrapper">
    <div class="header">
      <project-counter :counter="counter" :project="project" :highlights="highlights" />
    </div>
    <div class="content">
      <div class="content-header is-uppercase has-text-weight-bold is-size-4">
        <slot name="content-header"></slot>
      </div>
      <div class="content-body is-size-6 has-text-grey-dark">
        <slot name="content-body"></slot>
      </div>
      <div class="content-result">
        <div class="is-size-4">Technologies used</div>
        <li v-for="entry in tech" :key="entry">{{entry}}</li>
      </div>
      <div class="link">
          <explore :location="location" />
      </div>
    </div>
  </div>
</template>
<script>
import projectCounter from "@/components/projectCounter.vue";
import explore from "@/components/explore.vue";
export default {
  components: {
    projectCounter,
    explore
  },
  props: {
    counter: String,
    project: String,
    highlights: Array,
    tech: Array,
    location: String
  }
};
</script>
<style scoped>
.wrapper {
  display: flex;
  width: 80%;
}
.header {
  width: 40%;
  margin-left: 15%;
}
.content {
  max-width: 30%;
  margin-left: auto;
  margin-top: 30%;
}
.content-body {
  margin-top: 20%;
}
.content-result {
  margin-top: 10%;
}

@media (min-width: 481px) and (max-width: 1024px) {
  .wrapper {
    width: 100%;
  }
  .header {
    margin-left: 0;
  }
  .content {
    max-width: 40%;
  }
}

@media (min-width: 320px) and (max-width: 480px) {
  .wrapper {
    max-width: 100%;
    flex-direction: column;
    align-items: flex-start;
  }
  .header {
    width: 100%;
  }
  .content {
    max-width: 100%;
    margin-left: 15%;
  }
}
</style>