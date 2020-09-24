<template>
  <div>
    <span class="dot" :class="isMarked(index)" v-for="(item, index) in [1,2,3,4,5,6]" :key="index"></span>
  </div>
</template>
<script>
export default {
  props:['rating'],
  methods: {
    isMarked: function(index) {
      return this.rating > index ? "filled":"";
    }
  }
};
</script>
<style scoped>
.dot {
  height: 8px;
  width: 8px;
  background-color: #bbb;
  border-radius: 50%;
  display: inline-block;
  margin-right: 2px;
}
.filled {
    background-color: black;
}
</style>