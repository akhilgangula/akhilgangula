<template>
  <div v-observe-visibility="visibilityChanged" id='hero'>
    <div class="column hero-wrapper animated fadeInUp">
      <strong>
        <div>
          <span class="column is-full white">Full Stack</span>
          <span class="column is-full white">Developer,</span>
        </div>
        <div>
          <span class="column is-full">I take care of</span>
          <span class="column is-full white">creating</span>
          <span class="column is-full">end-to-end</span>
          <span class="column is-full white">Functional</span>
          <span class="column is-full">applications.</span>
        </div>
      </strong>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    visibilityChanged: (visible) => {
      let theme = !visible ? 'light':'dark';
      document.documentElement.setAttribute('data-user-color-scheme', theme);
    }
  }
};
</script>
<style scoped>
.hero-wrapper {
  font-size: calc(40px + (200 - 40) * ((100vw - 300px) / (2300 - 300)));
  line-height: calc(2rem + (240 - 2) * ((100vw - 300px) / (2300 - 300)));
  margin-top: calc(50px + (250 - 50) * ((100vw - 300px) / (2300 - 300)));
  margin-bottom: 85vh;
}

.white {
  color: var(--text-color);
}
</style>F