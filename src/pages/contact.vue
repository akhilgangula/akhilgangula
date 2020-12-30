<template>
  <div class="contact" id="contact">
    <section-header>Contact</section-header>
    <div class="wrapper">
      <p>You have a project in mind?</p>
      <p>
        I would be happy to
        <a href="mailto:akhilreddy.gangula96@gmail.com">discuss it</a>
      </p>
      <p>with you.</p>
    </div>
    <div class="break">
      <line-animation />
      <div class="social-media">
        <nav class="level is-mobile">
          <div class="level-item has-text-centered">
            <div>
              <a class="heading is-size-6 is-capitalized" href="https://www.linkedin.com/in/akhil-reddy-gangula/">In</a>
            </div>
          </div>
          <div class="level-item has-text-centered">
            <div>
              <a class="heading is-size-6 is-capitalized" href="https://github.com/akhilgangula">Git</a>
            </div>
          </div>
          <div class="level-item has-text-centered">
            <div>
              <a class="heading is-size-6 is-capitalized" href="https://medium.com/@akhilreddy.gangula96">M.</a>
            </div>
          </div>
          <div class="level-item has-text-centered">
            <div>
              <a class="heading is-size-6 is-capitalized" href="https://t.me/Akhil_Reddy_Gangula">Tel</a>
            </div>
          </div>
          <div class="level-item has-text-centered">
            <div>
              <a class="heading is-size-6 is-capitalized" href="https://www.facebook.com/akhil.reddy.7330/">fb</a>
            </div>
          </div>
        </nav>
      </div>
    </div>
  </div>
</template>
<script>
import sectionHeader from "@/components/sectionHeader";
import lineAnimation from "@/components/lineAnimation.vue";
export default {
  components: {
    sectionHeader,
    lineAnimation
  }
};
</script>
<style scoped>
.wrapper {
  text-align: center;
  max-width: 40%;
  margin-left: 25%;
  font-size: calc(16px + (24 - 16) * ((100vw - 300px) / (2300 - 300)));
  margin-top: 40%;
}
.contact {
  margin-top: 30%;
  margin-bottom: 20%;
  max-width: 90%;
}
a {
  color: inherit;
  border-bottom: 1px solid var(--color-dark);
}

a:hover {
  color: inherit;
  font-weight: bolder;
  -webkit-transition: all 0.5s;
  -moz-transition: all 0.5s;
  -o-transition: all 0.5s;
  transition: all 0.5s;
  border-bottom: 2px solid var(--color-dark);
}

.break {
  max-width: 60%;
  margin-left: 15%;
  margin-top: 10%;
}

.level {
  margin-top: 7%;
}
@media (min-width: 481px) and (max-width: 1024px) {
  .break {
    max-width: 80%;
    margin-left: 10%;
  }
}
@media (min-width: 320px) and (max-width: 480px) {
  .break {
    max-width: 90%;
    margin-left: 5%;
  }
  .wrapper {
    max-width: 80%;
    margin-left: 10%;
  }
}
</style>