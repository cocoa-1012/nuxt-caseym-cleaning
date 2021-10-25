<template>
  <div style="margin: 50px">
    <div class="testimonials wf-section">
      <div class="testimonials-section w-row">
        <div class="w-col w-col-4"></div>
        <div class="w-col w-col-8">
          <VueSlickCarousel ref="carousel" class="testimonial w-slider" :css-ease="ease">
            <div class="w-slide">
              <div class="testimonial-text">Suspendisse dignissim ultrices dolor, quis condimentum orci. Proin eu pulvinar leo. Quisque tempor aliquet convallis. Ut in urna lacinia, viverra ex quis, suscipit sapien. Donec sed ipsum velit. Praesent at faucibus purus. Curabitur pretium nibh vel nisi efficitur viverra. Nullam finibus in lectus ut fermentum. Phasellus hendrerit nec nulla a posuere. Fusce rhoncus ut sem et lobortis. Aenean tempus ut neque eu eleifend. Curabitur quis urna mi. Suspendisse odio justo, lobortis vel auctor ut, ornare eget tortor.<br>LOREM IPSUM</div>
            </div>
            <div class="w-slide">
              <div class="testimonial-text">Suspendisse dignissim ultrices dolor, quis condimentum orci. Proin eu pulvinar leo. Quisque tempor aliquet convallis. Ut in urna lacinia, viverra ex quis, suscipit sapien. Donec sed ipsum velit. Praesent at faucibus purus. Curabitur pretium nibh vel nisi efficitur viverra. Nullam finibus in lectus ut fermentum. Phasellus hendrerit nec nulla a posuere. Fusce rhoncus ut sem et lobortis. Aenean tempus ut neque eu eleifend. Curabitur quis urna mi. Suspendisse odio justo, lobortis vel auctor ut, ornare eget tortor.<br>LOREM IPSUM</div>
            </div>
          </VueSlickCarousel> 
          <div class="left-arrow w-slider-arrow-left" @click="showBefore">
            <div class="icon-4 w-icon-slider-left"></div>
          </div>
          <div class="right-arrow w-slider-arrow-right" @click="showNext">
            <div class="icon-3 w-icon-slider-right"></div>
          </div>
          <!-- <div data-delay="4000" data-animation="slide" class="testimonial w-slider" data-autoplay="false" data-easing="ease" data-hide-arrows="false" data-disable-swipe="false" data-autoplay-limit="0" data-nav-spacing="3" data-duration="500" data-infinite="true">
            <div class="w-slider-mask">
              <div class="w-slide">
                <div class="testimonial-text">Suspendisse dignissim ultrices dolor, quis condimentum orci. Proin eu pulvinar leo. Quisque tempor aliquet convallis. Ut in urna lacinia, viverra ex quis, suscipit sapien. Donec sed ipsum velit. Praesent at faucibus purus. Curabitur pretium nibh vel nisi efficitur viverra. Nullam finibus in lectus ut fermentum. Phasellus hendrerit nec nulla a posuere. Fusce rhoncus ut sem et lobortis. Aenean tempus ut neque eu eleifend. Curabitur quis urna mi. Suspendisse odio justo, lobortis vel auctor ut, ornare eget tortor.<br>LOREM IPSUM</div>
              </div>
              <div class="w-slide">
                <div class="testimonial-text">Suspendisse dignissim ultrices dolor, quis condimentum orci. Proin eu pulvinar leo. Quisque tempor aliquet convallis. Ut in urna lacinia, viverra ex quis, suscipit sapien. Donec sed ipsum velit. Praesent at faucibus purus. Curabitur pretium nibh vel nisi efficitur viverra. Nullam finibus in lectus ut fermentum. Phasellus hendrerit nec nulla a posuere. Fusce rhoncus ut sem et lobortis. Aenean tempus ut neque eu eleifend. Curabitur quis urna mi. Suspendisse odio justo, lobortis vel auctor ut, ornare eget tortor.<br>LOREM IPSUM</div>
              </div>
            </div>
            <div class="left-arrow w-slider-arrow-left">
              <div class="icon-4 w-icon-slider-left"></div>
            </div>
            <div class="right-arrow w-slider-arrow-right">
              <div class="icon-3 w-icon-slider-right"></div>
            </div>
            <div class="slide-nav w-slider-nav w-round"></div>
          </div> -->
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import VueSlickCarousel from 'vue-slick-carousel'
  import 'vue-slick-carousel/dist/vue-slick-carousel.css'
  // optional style for arrows & dots
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
      }
    },
  }
</script> 