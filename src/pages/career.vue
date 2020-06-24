<template>
  <div class="wrapper" id="career"
      v-observe-visibility="{callback: (visible, entry)=>visibilityChanged(visible, entry, 'head'), once:true,}"
  >
    <section-header
    >Career</section-header>
    <div class="career-timeline">
      <div class="timeline">
        <time-entry
          v-for="(entry, index) in entries"
          :key="index"
          :year="entry.year"
          :company="entry.company"
          :designation="entry.designation"
          :brief="entry.brief"
          :location="entry.location"
          v-observe-visibility="{callback: (visible, entry)=>visibilityChanged(visible, entry, index), once:true}"
          :hide="entry.hide"
          :left="index%2 == 0"
        />
      </div>
    </div>
  </div>
</template>
<script>
import sectionHeader from "@/components/sectionHeader";
import timeEntry from "@/components/timeEntry";
export default {
  data: function() {
    return {
      entries: [
        {
          year: "2020 - Present",
          company: "Lowe's India",
          designation: "Software Engineer",
          hide: true,
          location: "Bangalore, India",
          brief: "As a Full stack developer, I am part of a team that handles dollar making part of a ecommerce website - Cart & Checkout @lowes.com & @lowesforpors.com"
        },
        {
          year: "2017 - 2020",
          company: "Factset Research Systems",
          designation: "Software Engineer",
          hide: true,
          location: "Hyderabad, India",
          brief: "In this position, I worked on an Execution management system, which will empower traders to trade the tickers at optimal performance."
        },
        {
          year: "Jan 2017 - Mar 2017",
          company: "Portware India LLC",
          designation: "Intern",
          hide: true,
          location: "Hyderabad, India",
          brief: "As an intern, I performed fundational steps to immerse myself into financial domain"
        }
      ]
    };
  },
  components: {
    sectionHeader,
    timeEntry,
  },
  methods: {
    visibilityChanged: function(visible, entry, index) {
      if (!visible) return;
      console.log(visible, entry, index);
      if (index === "head") {
        this.entries[0].hide = false;
      } else if (this.entries[index + 1]) {
        this.entries[index + 1].hide = false;
      }
    }
  }
};
</script>
<style scoped>
.wrapper {
  max-width: 90%;
  margin-top: 15%;
}
.career-timeline {
  margin-left: 20%;
}
.timeline {
  margin-top: 10%;
  padding-left: 7%;
  -webkit-animation: increase 3s;
  -moz-animation: increase 3s;
  -o-animation: increase 3s;
  animation: increase 3s;
}
.entry {
  margin-top: 10%;
}
@media (max-width: 1024px) { 
  .career-timeline {
    margin-left: 0;
  }
}
</style>