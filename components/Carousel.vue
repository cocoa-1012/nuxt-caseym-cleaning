<template>
  <div class="testimonials wf-section">
    <div class="testimonials-section">
      <div class="w-col w-col-11 slick-carousel">
        <div class="w-slider-mask">
          <img
            src="assets/images/carousel quote.png"
            loading="lazy"
            alt=""
            width="35"
            class="carousel-quote"
          />
          <VueSlickCarousel
            ref="carousel"
            class="testimonial w-slider"
            :css-ease="ease"
          >
            <div class="w-slide">
              <div class="testimonial-text">
                Suspendisse dignissim ultrices dolor, quis condimentum orci.
                Proin eu pulvinar leo. Quisque tempor aliquet convallis. Ut in
                urna lacinia, viverra ex quis, suscipit sapien. Donec sed ipsum
                velit. Praesent at faucibus purus. Curabitur pretium nibh vel
                nisi efficitur viverra. Nullam finibus in lectus ut fermentum.
                Phasellus hendrerit nec nulla a posuere. Fusce rhoncus ut sem et
                lobortis. Aenean tempus ut neque eu eleifend. Curabitur quis
                urna mi. Suspendisse odio justo, lobortis vel auctor ut, ornare
                eget tortor.<br />LOREM IPSUM
              </div>
            </div>
            <div class="w-slide">
              <div class="testimonial-text">
                Suspendisse dignissim ultrices dolor, quis condimentum orci.
                Proin eu pulvinar leo. Quisque tempor aliquet convallis. Ut in
                urna lacinia, viverra ex quis, suscipit sapien. Donec sed ipsum
                velit. Praesent at faucibus purus. Curabitur pretium nibh vel
                nisi efficitur viverra. Praesent at faucibus purus. Curabitur
                pretium nibh vel nisi efficitur viverra. Nullam finibus in
                lectus ut fermentum. Phasellus hendrerit nec nulla a posuere.
                Fusce rhoncus ut sem et lobortis. Aenean tempus ut neque eu
                eleifend. Curabitur quis urna mi. Suspendisse odio justo,
                lobortis vel auctor ut, ornare eget tortor.<br />LOREM IPSUM
              </div>
            </div>
          </VueSlickCarousel>
        </div>
        <div class="slider-arrow">
          <div class="left-arrow" @click="showBefore">
            <div class="icon-4 w-icon-slider-left">&#9668;</div>
          </div>
          <div class="right-arrow" @click="showNext">
            <div class="icon-3 w-icon-slider-right">&#9658;</div>
          </div>
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