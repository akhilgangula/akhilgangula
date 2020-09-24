<template>
  <div>
    <section-heading heading="skills" />
    <div class="columns">
      <div class="column has-text-grey">
        <div class="margin-bottom has-text-grey-light">
          <i>01 Tech</i>
        </div>
        <li><div>HTML & CSS</div><rating rating="6"/></li>
        <li><div>React JS</div><rating rating="4"/></li>
        <li><div>Vue JS</div><rating rating="5"/></li>
        <li><div>Next JS</div><rating rating="3"/></li>
        <li><div>Nuxt JS</div><rating rating="4"/></li>
        <li><div>Vueify, Bootstrap Vue</div><rating rating="5"/></li>
        <li><div>Bulma</div><rating rating="6"/></li>
        <li><div>Node JS</div><rating rating="4"/></li>
        <li><div>Spring Boot</div><rating rating="4"/></li>
        <li><div>MongoDB</div><rating rating="5"/></li>
      </div>
      <div class="column has-text-grey is-one-third Knowledge">
        <div class="margin-bottom has-text-grey-light">
          <i>02 Knowledge</i>
        </div>
        <li>Good sense of typography</li>
        <li>Project managment</li>
        <li>Git</li>
        <li>JIRA</li>
        <li>Blockchain</li>
        <li>Firebase</li>
      </div>
    </div>
  </div>
</template>
<script>
import SectionHeading from "./section-heading";
import rating from "./rating";
export default {
  components: {
    SectionHeading,
    rating
  }
};
</script>
<style scoped>
li {
  list-style: none;
  font-size: 10px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 7px;
  line-height: 1rem;
}
.margin-bottom {
  margin-bottom: 15px;
}
.Knowledge {
  padding-right: 0px;
}
</style>