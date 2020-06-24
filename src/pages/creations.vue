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
          <span
            class="has-text-black has-text-weight-bold"
          >open up to new opportunities</span> like imports and exports, especially with large account customers.
          <br />
          <br />His new identity should therefore not only reflect his
          <span
            class="has-text-black has-text-weight-bold"
          >level of excellence</span>
          but also his diverse expertise.
          His image had to translate to his strength while being
          <span
            class="has-text-black has-text-weight-bold"
          >modern and elegant</span>.
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
          <span class="has-text-black has-text-weight-bold">Automated</span> Order Management System is a software eco-system that facilitates and
          <span class="has-text-black has-text-weight-bold">manages</span> the execution of trade orders.
          Clients can place an order in a trading system to
          <span class="has-text-black has-text-weight-bold">execute</span> a buy order for an item.
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