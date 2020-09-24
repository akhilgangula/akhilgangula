<template>
  <div>
    <section-heading heading="education" />
    <div class="timeline">
      <div class="entry">
        <div class="c100 p86 tiny color margin-right">
          <span>8.6 GPA</span>
          <div class="slice">
            <div class="bar"></div>
            <div class="fill"></div>
          </div>
        </div>
        <div class="has-text-weight-semibold">From January 2017 to March 2017</div>
        <div class="has-text-grey">Bachelor of tech. CSE</div>
        <div class="has-text-weight-semibold">GITAM university</div>
      </div>
      <div class="entry">
        <div class="c100 p89 tiny color margin-right">
          <span>89%</span>
          <div class="slice">
            <div class="bar"></div>
            <div class="fill"></div>
          </div>
        </div>
        <div class="has-text-weight-semibold">From June 2011 to April 2013</div>
        <div class="has-text-grey">Intermediate</div>
        <div class="has-text-weight-semibold">NRI Academy</div>
      </div>
      <div class="entry">
        <div class="c100 p98 tiny color margin-right">
          <span>9.6 GPA</span>
          <div class="slice">
            <div class="bar"></div>
            <div class="fill"></div>
          </div>
        </div>
        <div class="has-text-weight-semibold">April 2011</div>
        <div class="has-text-grey">High School</div>
        <div class="has-text-weight-semibold">Sanghamitra School</div>
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
@import "./../../assets/circle.css";
.margin-right {
  margin-right: 15px
}
.entry {
  margin-bottom: 15px;
  margin-left: 15px;
}

.marks {
  font-size: 16px;
  border: 10px solid black;
  border-radius: 180px;
  padding: 10px;
  width: 70%;
}

.left {
  align-items: center;
  justify-content: center;
  display: flex !important;
}
.range {
  font-size: 12px;
  color: grey;
}
.degree {
  font-size: 14px;
  margin-top: 7px;
}
.area {
  font-size: 12px;
  color: grey;
}
.wrapper {
  line-height: 1.2em;
  margin: 0;
  margin-bottom: 10px;
  padding: 10px;
  display: flex;
}
</style>