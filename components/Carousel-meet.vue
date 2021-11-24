<template>
  <div class="meet-slider">
    <div class="w-slider-mask" style="height: 480px">
      <img
        src="assets/images/carousel quote meet.png"
        loading="lazy"
        alt=""
        width="35"
        style="margin-bottom: -30px"
        class="desktop-view"
      />
      <VueSlickCarousel
        ref="carousel"
        class="testimonial w-slider"
        :css-ease="ease"
        :autoplay="true"
        :autoplay-speed="5000"
      >
        <div class="w-slide">
          <div class="testimonial-text meet">
            Suspendisse dignissim ultrices dolor, quis condimentum orci. Proin
            eu pulvinar leo. Quisque tempor aliquet convallis. Ut in urna
            lacinia, viverra ex quis, suscipit sapien. Donec sed ipsum velit.
            Praesent at faucibus purus. Curabitur pretium nibh vel nisi
            efficitur viverra. Nullam finibus in lectus ut fermentum. Phasellus
            hendrerit nec nulla a posuere. Fusce rhoncus ut sem et lobortis.
            Aenean tempus ut neque eu eleifend. Curabitur quis urna mi.
            Suspendisse odio justo, lobortis vel auctor ut, ornare eget
            tortor.<br />LOREM IPSUM
          </div>
        </div>
        <div class="w-slide">
          <div class="testimonial-text meet">
            Suspendisse dignissim ultrices dolor, quis condimentum orci. Proin
            eu pulvinar leo. Quisque tempor aliquet convallis. Ut in urna
            lacinia, viverra ex quis, suscipit sapien. Donec sed ipsum velit.
            Praesent at faucibus purus. Curabitur pretium nibh vel nisi
            efficitur viverra. Nullam finibus in lectus ut fermentum. Phasellus
            hendrerit nec nulla a posuere. Fusce rhoncus ut sem et lobortis.
            Aenean tempus ut neque eu eleifend. Curabitur quis urna mi.
            Suspendisse odio justo, lobortis vel auctor ut, ornare eget
            tortor.<br />LOREM IPSUM
          </div>
        </div>
      </VueSlickCarousel>
    </div>
    <div class="slider-arrow">
      <div class="left-arrow" @click="showBefore">
        <div class="icon-4 w-icon-slider-left" style="color: #ccc">&#9668;</div>
      </div>
      <div class="right-arrow" @click="showNext">
        <div class="icon-3 w-icon-slider-right" style="color: #ccc">
          &#9658;
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

export default {
  name: 'Carousel',
  components: { VueSlickCarousel },
  methods: {
    showNext() {
      this.$refs.carousel.next()
    },
    showBefore() {
      this.$refs.carousel.prev()
    },
  },
}
</script> 