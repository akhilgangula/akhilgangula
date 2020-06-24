<template>
  <section>
    <section-left>
      <slot name="left-section"></slot>
    </section-left>
    <section-right>
      <slot name="right-section"></slot>
    </section-right>
  </section>
</template>
<script>
import sectionLeft from "@/components/sectionLeft";
import sectionRight from "@/components/sectionRight";
export default {
  components: {
    sectionLeft,
    sectionRight
  }
};
</script>