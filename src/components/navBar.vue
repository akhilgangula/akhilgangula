<template>
    <div class="nav-bar">
        <div class="nav-item is-inline" v-scroll-to="'#hero'">akhil gangula</div>
        <div class="nav-item is-inline is-hidden-mobile" v-scroll-to="'#about'">about</div>
        <div class="nav-item is-inline is-hidden-mobile" v-scroll-to="'#expertise'">expertise</div>
        <div class="nav-item is-inline is-hidden-mobile" v-scroll-to="'#creation'">creation</div>
        <div class="nav-item is-inline is-hidden-mobile" v-scroll-to="'#career'">career</div>
        <div class="nav-item is-inline is-hidden-mobile" v-scroll-to="'#contact'">contact</div>
        <div class="nav-item is-inline is-hidden-mobile"><router-link to="/resume">Resumé</router-link></div>
    </div>
</template>
<style scoped>
.nav-bar {
  writing-mode: vertical-lr;
  margin-left: 20px;
  position: fixed;
  top: 20%;
  cursor: pointer;
}

.nav-item {
    margin-top: 10px;
}
.hide {
    display: none;
}

@media (max-width: 768px) { 
    .nav-bar {
        writing-mode: horizontal-tb;
        position: absolute;
        left: 30px;
        top: 20px;
        color: #686868;
        text-decoration: underline;
    }

}

</style>
<script>
export default {
    methods: {
        resume: function() {
            window.location = ""
        }
    }
}
</script>