<template>
  <div class="entry animated delay-1s" :class="{'fadeInLeft':left, 'fadeInRight':!left, 'hide': hide}">
    <div class="box">
      <article class="media">
        <div class="media-left">
          <div class="content">
            <div class="year">{{year}}</div>
          </div>
        </div>
        <div class="media-content">
          <div class="content">
            <p>
              <strong>
                <div class="compnay">{{company}}</div>
              </strong>
              <small>
                <div class="designation">{{designation}}</div>
              </small>
              <small>{{location}}</small>
              <br />{{brief}}
            </p>
          </div>
        </div>
      </article>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    year: String,
    company: String,
    location: String,
    designation: String,
    hide: Boolean,
    left: Boolean,
    brief: String
  }
};
</script>
<style scoped>
.hide {
  visibility: hidden;
}
.media {
    align-items: center !important;
}
</style>