<template>
  <div class="wrapper" id="expertise">
    <div class="view-port" />
    <section-header>Expertise</section-header>
    <div class="expertise">
      <div
        class="skill"
        :class="entry.hide ? 'has-text-grey-light': 'has-text-dark'"
        v-for="(entry, index) in exp"
        :key="index"
      >{{entry.text}}</div>
    </div>
  </div>
</template>
<script>
import sectionHeader from "@/components/sectionHeader";
export default {
  data: function() {
    return {
      exp: [
        { text: "Digital Design", hide: true },
        { text: "Fast and Responsive", hide: true },
        { text: "Dynamic Websites", hide: true },
        { text: "Minimal Design", hide: true }
      ],
      gridTop: 0,
      gridBottom: 0
    };
  },
  components: {
    sectionHeader
  },
  methods: {
    getPos: function(element) {
      return element.getBoundingClientRect().top;
    },
    visibilityChanged: function() {
      const exps = document.getElementsByClassName("skill");
      let highlight = -1;
      for (let index = 0; index < exps.length; index++) {
        var thisTop = this.getPos(exps[index]) - exps[index].scrollTop;
        if (
          thisTop >= this.gridTop &&
          thisTop + exps[index].clientHeight <= this.gridBottom
        ) {
          highlight = index;
        } else {
          this.exp[index].hide = true;
        }
      }
      if (highlight >= 0) {
        this.exp.forEach(entry => (entry.hide = true));
        this.exp[highlight].hide = false;
      }
    }
  },
  mounted: function() {
    if (window.screen.width <= 480) {
      this.exp.forEach(entry => (entry.hide = false));
      return;
    }
    window.addEventListener("scroll", this.visibilityChanged);
    const windowHeight = window.screen.height;
    this.gridTop = windowHeight * 0.2;
    this.gridBottom = windowHeight * 0.6;
  }
};
</script>
<style scoped>
.wrapper {
  margin-top: 20%;
  max-width: 90%;
}

.skill {
  font-size: calc(30px + (140 - 30) * ((100vw - 300px) / (2300 - 300)));
  padding-top: 5%;
  transition: all 0.5s ease;
}
.expertise {
  text-align: center;
  margin-top: 10%;
}

@media (min-width: 320px) and (max-width: 480px) {
}
</style>