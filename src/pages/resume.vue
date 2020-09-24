<template>
  <div class="page">
    <div class="margins">
      <resume-header />
      <div class="flex">
        <div class="is-half">
          <personal-statement />
          <spl />
          <skills />
          <lang/>
        </div>
        <div class="margin-left is-half">
          <education />
          <work-exp />
          <projects />
          <interests />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import ResumeHeader from "@/components/resume-components/header";
import PersonalStatement from "@/components/resume-components/PersonalStatement";
import education from "@/components/resume-components/education";
import spl from "@/components/resume-components/special";
import workExp from "@/components/resume-components/exp";
import skills from "@/components/resume-components/skills";
import projects from "@/components/resume-components/projects";
import Lang from "@/components/resume-components/Languages";
import interests from "@/components/resume-components/interests";
export default {
  components: {
    ResumeHeader,
    PersonalStatement,
    education,
    spl,
    workExp,
    skills,
    projects,
    interests,
    Lang
  },
  mounted: function() {
    document.documentElement.setAttribute("data-user-color-scheme", "light");
  }
};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400&display=swap");
.page {
  font-family: "Noto Sans KR", sans-serif;
  width: 210mm;
  min-height: 297mm;
  margin: 10mm auto;
  border-radius: 5px;
  background: white;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  font-size: 12px;
}
.margins {
  padding-top: 1.9cm;
  padding-left: 1.3cm;
  padding-right: 1.2cm;
  padding-bottom: 3.67cm;
}
.is-half {
  width: 45%;
}
.flex {
  display: flex;
}
.margin-left {
  margin-left: auto;
}
@media print {
  .page {
    margin: 0;
    border: initial;
    border-radius: initial;
    width: initial;
    min-height: initial;
    box-shadow: initial;
    background: initial;
    page-break-after: always;
  }
}
</style>