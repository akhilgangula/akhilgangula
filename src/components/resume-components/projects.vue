<template>
  <div>
    <section-heading heading="projects" />
    <div>
      <div class="heading is-capitalized has-text-weight-bold">Protfolio Websites</div>
      <div class="columns">
        <div class="column">
          <a href="https://ra-e.web.app/">RA</a>
        </div>
        <div class="column">
          <a href="#">Nived</a>
        </div>
      </div>
    </div>
    <div>
      <div class="heading is-capitalized has-text-weight-bold">properitory</div>
      <div>OMS - Order Managment System</div>
    </div>
    <div>
      <div class="heading is-capitalized has-text-weight-bold">Open source</div>
      <div>
        <a href="#">JSON Mock</a>
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
  justify-content: space-evenly;
}
.heading {
  margin-top: 10px;
  letter-spacing: 0px;
  font-size: 13px;
}
.caption {
  color: gray;
}
</style>