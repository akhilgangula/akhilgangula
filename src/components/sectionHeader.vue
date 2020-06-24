<template>
  <div class="header" v-observe-visibility="{callback: visibilityChanged, once:true}">
    <line-animation :class="{'hide':!isVisible}" />
    <slot />
  </div>
</template>
<script>
import lineAnimation from "@/components/lineAnimation.vue";
export default {
  data: function() {
    return {
      isVisible: false
    };
  },
  methods: {
    visibilityChanged(isVisible) {
      this.isVisible = isVisible;
    }
  },
  components: {
    lineAnimation
  }
};
</script>
<style scoped>
.header {
  font-size: calc(30px + (100 - 30) * ((100vw - 300px) / (2300 - 300)));
}
.hide {
  display: none;
}
</style>