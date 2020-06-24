<template>
      <div/>
</template>

<style scoped>
div {
  height: 0px;
  width: 1px;
  border-bottom: 2px solid var(--color-dark);
  -webkit-animation: increase 3s;
  -moz-animation: increase 3s;
  -o-animation: increase 3s;
  animation: increase 3s;
  animation-fill-mode: forwards;
}



@keyframes increase {
  100% {
    width: 100%;
  }
}
</style>