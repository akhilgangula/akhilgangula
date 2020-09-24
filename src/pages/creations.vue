<template>
  <div class="wrapper" id="creation">
    <section-header>Creations</section-header>
    <div class="project-wrapper">
      <project
        project="RA"
        counter="001"
        :highlights="['Minimal design', 'Responsive', 'Digital Branding']"
        :tech="['HTML','CSS','Vue JS','Bootstrap']"
      >
        <template
          v-slot:content-header
        >RA is organization which are specialized in import and exports.</template>
        <template v-slot:content-body>
          The image of the company no longer corresponded to that of its beginnings,
          RA Engineers had become a recognized reference in its manufacturing sector.
          It was time for her to
          <b>open up to new opportunities</b> like imports and exports, especially with large account customers.
          <br />
          <br />His new identity should therefore not only reflect his
          <b>level of excellence</b>
          but also his diverse expertise.
          His image had to translate to his strength while being
          <b>modern and elegant</b>.
        </template>
      </project>

      <project
        project="OMS"
        counter="002"
        :highlights="['Functional Application', 'Responsive', 'Scalable']"
        :tech="['HTML','CSS','Nuxt JS','Vue Bootstrap', 'Node JS', 'Express JS', 'MongoDB', 'Firebase']"
      >
        <template v-slot:content-header>Order management system for purchasing materials.</template>
        <template v-slot:content-body>
          <b>Automated</b> Order Management System is a software eco-system that facilitates and
          <b>manages</b> the execution of trade orders.
          Clients can place an order in a trading system to
          <b>execute</b> a buy order for an item.
        </template>
      </project>

      <project
        project="MJR"
        counter="003"
        :highlights="['Mocking Framework', 'Flexible', 'Simple setup', 'Open Source']"
        :tech="['Node JS', 'Express JS']"
      >
        <template v-slot:content-header>A REST service mocking framework.</template>
        <template v-slot:content-body>
          A
          <b>flexible</b> Node JS framework running Express JS, which would help in
          <b>mocking</b> the web services with
          <b>REST protocol</b>.
          Making application modules truly
          <b>independent</b> during development phase.
        </template>
      </project>
    </div>
  </div>
</template>
<script>
import project from "@/components/project";
import sectionHeader from "@/components/sectionHeader";
export default {
  components: {
    project,
    sectionHeader
  }
};
</script>
<style scoped>
.wrapper {
  margin-top: 40%;
  max-width: 90%;
}
.project-wrapper {
  margin-top: 20%;
}
</style>