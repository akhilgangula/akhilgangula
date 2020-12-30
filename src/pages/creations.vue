<template>
  <div class="wrapper" id="creation">
    <section-header>Creations</section-header>
    <div class="project-wrapper">
      <project
        project="RA"
        counter="001"
        :highlights="['Minimal Design', 'Responsive', 'Digital Branding']"
        :tech="['HTML', 'CSS', 'Vue JS', 'Bootstrap']"
        location="https://ra-engineers.in/"
      >
        <template v-slot:content-header
          >RA is organization which are specialized in import and
          exports.</template
        >
        <template v-slot:content-body>
          The image of the company no longer corresponded to that of its
          beginnings, RA Engineers had become a recognized reference in its
          manufacturing sector. It was time for her to
          <b>open up to new opportunities</b> like imports and exports,
          especially with large account customers.
          <br />
          <br />His new identity should therefore not only reflect his
          <b>level of excellence</b>
          but also his diverse expertise. His image had to translate to his
          strength while being
          <b>modern and elegant</b>.
        </template>
      </project>

      <project
        project="Phoenix Global"
        counter="002"
        :highlights="['Client Side Application', 'Responsive', 'Dynamic', 'Light Weight']"
        :tech="['HTML', 'CSS', 'Vue JS', 'Vue Bootstrap', 'Firebase']"
        location="https://phnxglobal.com/"
      >
        <template v-slot:content-header
          >Portfolio website to showcase services.</template
        >
        <template v-slot:content-body>
          A <b>showcase</b> of <b>events and service</b> to reach clients in a neat and
          Intuitive design. Application is linked to firebase and relies on
          firestore to manage data my admin, being <b>cost effective and dynamic</b>
          without need of a developer intervention.
        </template>
      </project>

      <project
        project="OMS"
        counter="003"
        :highlights="['Functional Application', 'Responsive', 'Scalable']"
        :tech="[
          'HTML',
          'CSS',
          'Nuxt JS',
          'Vue Bootstrap',
          'Node JS',
          'Express JS',
          'MongoDB',
          'Firebase',
        ]"
        location="https://github.com/akhilgangula/ra-oms"
      >
        <template v-slot:content-header
          >Order management system for purchasing materials.</template
        >
        <template v-slot:content-body>
          <b>Automated</b> Order Management System is a software eco-system that
          facilitates and <b>manages</b> the execution of trade orders. Clients
          can place an order in a trading system to <b>execute</b> a buy order
          for an item.
        </template>
      </project>

      <project
        project="MJR"
        counter="004"
        :highlights="[
          'Mocking Framework',
          'Flexible',
          'Simple Setup',
          'Open Source',
        ]"
        :tech="['Node JS', 'Express JS']"
        location="https://github.com/akhilgangula/mock-json-response"
      >
        <template v-slot:content-header
          >A REST service mocking framework.</template
        >
        <template v-slot:content-body>
          A
          <b>flexible</b> Node JS framework running Express JS, which would help
          in <b>mocking</b> the web services with <b>REST protocol</b>. Making
          application modules truly <b>independent</b> during development phase.
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
    sectionHeader,
  },
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