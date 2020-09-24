<template>
    <div class="is-uppercase has-text-weight-semibold heading">{{heading}}</div>
</template>
<script>
export default {
    props: ['heading']
}
</script>
<style scoped>
.heading {
    border-bottom: 1px dotted black;
    padding-bottom: 5px;
    margin-bottom: 10px;
    letter-spacing: 0px;
    font-size: 12px;
    margin-top: 35px;
}
</style>