<template>
  <div
    class="wrapper"
    id="career"
    v-observe-visibility="{
      callback: (visible, entry) => visibilityChanged(visible, entry, 'head'),
      once: true,
    }"
  >
    <section-header>Career</section-header>
    <div v-observe-visibility="{ callback: startTimeline, once: true }">
      <ul class="timeline" :class="{ hide: !isVisible }">
        <timeEntry
          year="Jan 2020 - Now"
          company="Lowe's Services India Pvt. Ltd."
          designation="Software Engineer"
          location="Bangalore, India"
        >
          Migration of Cart and Checkout of lowes.com to React server-side
          rendering framework providing both with first in class user experience
          and smooth maintaince. Gained experience in Web-development, cloud
          Management, netwroking and mostly how to build a robust application
          that scales up.
        </timeEntry>
        <timeEntry
          year="May 2017 - Dec 2019"
          company="Factset Research Systems"
          designation="Software Engineer"
          location="Hyderabad, India"
        >
          Maintaining an Execution Management System, a trusted way trader with
          Exchange, other investing brokers, connecting banks, supporting a high
          rate of 100 quotes per second with help of multi-threading system.
          With the Power of AI, suggesting strategies for traders. Application
          mostly covered in Java. Had a first touch of Complete software
          engineering right from requirments, design, planning, developing,
          testing, release. With multi-dimensional client maintianing different
          flavours of the product.
        </timeEntry>
        <timeEntry
          year="Jan 2017 - Mar 2017"
          company="Portware"
          designation="Intern"
          location="Hyderabad, India"
        >
          Deep dive into the financial markets of Equity and For-ex. How the
          technolgy plays a pivotal role in fueling the fast growing markets.
          Maintaining transperency and Automating it with strategies to get the
          optimal profit.
        </timeEntry>
      </ul>
    </div>
  </div>
</template>
<script>
import sectionHeader from "@/components/sectionHeader";
import timeEntry from "@/components/timeEntry";
export default {
  data: function () {
    return {
      isVisible: false,
    };
  },
  components: {
    sectionHeader,
    timeEntry,
  },
  methods: {
    visibilityChanged: function (visible, entry, index) {
      if (!visible) return;
      console.log(visible, entry, index);
      if (index === "head") {
        this.entries[0].hide = false;
      } else if (this.entries[index + 1]) {
        this.entries[index + 1].hide = false;
      }
    },
    startTimeline(isVisible) {
      this.isVisible = isVisible;
    },
  },
};
</script>
<style scoped>
@import url(https://fonts.googleapis.com/css?family=Open+Sans:300,700);
.hide {
  display: none;
}

.wrapper {
  margin-top: 40%;
  max-width: 90%;
}

.timeline {
  margin: 4em auto;
  position: relative;
  max-width: 46em;
}

.timeline:before {
  background-color: black;
  content: "";
  margin-left: -1px;
  position: absolute;
  top: 0;
  left: 2em;
  width: 2px;
  height: 1;
  -webkit-animation: increase 3s;
  -moz-animation: increase 3s;
  -o-animation: increase 3s;
  animation: increase 3s;
  animation-fill-mode: forwards;
}

@keyframes increase {
  from {
    height: 0;
  }
  
  100% {
    height: 100%;
  }
}
</style>