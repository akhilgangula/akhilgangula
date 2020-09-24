<template>
  <div>
    <section-heading heading="Work experience" />
    <div class="flex">
      <div class="entry">
        <div>
          <span class="years">1</span>
          <span class="units">y</span>
        </div>
        <div class="margin-top">
          <div class="range">From 2020</div>
          <div class="designation">Software Engineer</div>
          <div class="place">Lowe's India</div>
        </div>
      </div>
      <div class="entry">
        <div>
          <span class="years">2</span>
          <span class="units">y</span>
        </div>
        <div class="margin-top">
          <div class="range">From 2017 to 2019</div>
          <div class="designation">Software Engineer</div>
          <div class="place">Factset</div>
        </div>
      </div>
    </div>
    <div class="flex">
      <div class="entry">
        <div>
          <span class="years">2</span>
          <span class="units">m</span>
        </div>
        <div class="margin-top">
          <div class="range">From Jan to March 2017</div>
          <div class="designation">Intern</div>
          <div class="place">Portware India</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import SectionHeading from "./section-heading";
export default {
  components: {
    SectionHeading
  }
};
</script>
<style scoped>
.flex {
  display: flex;
  justify-content: space-between;
}
.entry {
  display: flex;
  font-size: 10px;
}
.years {
  font-size: 65px;
}
.units {
  margin-right: 10px;
  font-weight: bold;
  font-size: 14px;
}
.margin-top {
align-self: center;
}
</style>