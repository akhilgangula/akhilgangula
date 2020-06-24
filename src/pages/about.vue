<template>
  <div class="abt" id="about">
    <div class="left-section sticky">
      <div class="header">
        <section-header>About</section-header>
      </div>
      <div class="wrapper">
        <div class="greeting">Namaste,</div>
        <div class="is-size-5 is-uppercase has-text-grey-light has-text-weight-semibold">
          I am more specifically a
          <span class="has-text-black">full stack developer</span> with end-to-end solutions.
          <span>
            I accompany professionals in making
            <span
              class="has-text-black"
            >responsive and functional applications</span>
          </span>
          <span> development in value of their expertise and of their creations.</span>
        </div>
      </div>
    </div>
    <div class="right-section is-hidden-mobile">
      <div class="is-size-6">
        <p>I make things that makes a difference. My clients have diverse work like the ecommerce, mining and imports. I like to maintain a privileged and direct relationship with them, conducive to listening and to trust, to write it down in the long term.</p>
        <br />
        <p>Each professional is subject to a personalized approach. Together, we define the challenges and needs. I then carry out an audit of strengths and weaknesses from which I define a strategy of means. Thinking of an innovative user experience, which is part of a global visual coherence is a priority for me.</p>
        <br />
        <p>The design I like is minimalist, efficient, delicate, with a special affection for typography. It supports user activity, change of image, while maintaining clients identity.</p>
        <br />
        <p>As a web developer, I enjoy using my obsessive attention to detail, my unequivocal love for making things, and my mission-driven work ethic to literally change the world. That's why I’m excited to make a big impact at a high growth company.</p>
        <br />
      </div>
    </div>
  </div>
</template>
<script>
import sectionHeader from "@/components/sectionHeader";

export default {
  components: {
    sectionHeader
  }
};
</script>
<style scoped>
.sticky {
  position: -webkit-sticky;
  position: sticky;
  top: 0;
}
.abt {
  max-width: 60%;
  margin-left: 10%;
}
.greeting {
  font-size: calc(24px + (70 - 24) * ((100vw - 300px) / (2300 - 300)));
}
.right-section {
  max-width: 30%;
  margin-left: auto;
}
.left-section {
  max-width: 40%;
}
.wrapper {
  margin-top: 10%;
}
.header {
  padding-top: 10%;
}

/* 
  ##Device = Tablets, Ipads (portrait)
  ##Screen = B/w 768px to 1024px
*/

@media (min-width: 481px) and (max-width: 1024px) {
  .left-section {
    max-width: 50%;
  }
  .abt {
    max-width: 90%;
    margin-left: 0;
  }
  .right-section {
    max-width: 40%;
    margin-left: auto;
  }
}

@media (min-width: 320px) and (max-width: 480px) {
  .left-section {
    max-width: 100%;
  }
  .abt {
    max-width: 80%;
    margin-left: 10%;
  }
}
</style>