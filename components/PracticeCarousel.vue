<template>
  <div class="working-with-section wf-section" style="width: 100%">
    <div
      data-current="WORKING WITH HOME BUYERS"
      data-easing="ease-in-out"
      data-duration-in="300"
      data-duration-out="100"
      class="tabs w-tabs"
      style="width: 90%"
    >
      <div class="tabs-menu w-tab-menu home-carousel practice">
        <a
          id="carousel-item0"
          data-w-tab="WORKING WITH HOME BUYERS"
          class="
            tab-link-working-with-practice-buyers
            w-inline-block w-tab-link w--current
          "
          @click="showPage(0)"
        >
          <div class="tabs-heading">
            WORKING WITH <strong>HOME BUYERS</strong>
          </div>
        </a>
        <a
          id="carousel-item1"
          data-w-tab="WORKING WITH LENDERS"
          class="
            tab-link-working-with-practice-buyers
            w-inline-block w-tab-link
          "
          @click="showPage(1)"
        >
          <div class="text-block-2 tabs-heading">
            WORKING WITH <strong>LENDERS</strong>
          </div>
        </a>
        <a
          id="carousel-item2"
          data-w-tab="WORKING WITH REALTORS"
          class="
            tab-link-working-with-practice-buyers
            w-inline-block w-tab-link
          "
          @click="showPage(2)"
        >
          <div class="tabs-heading">WORKING WITH <strong>REALTORS</strong></div>
        </a>
      </div>
      <div class="carousel-main desktop-view">
        <VueSlickCarousel
          ref="carousel"
          class="w-tab-content"
          :fade="true"
          :draggable="false"
        >
          <div
            data-w-tab="WORKING WITH HOME BUYERS"
            class="w-tab-pane w--tab-active practice"
          >
            <PracticeCarouselSection />
          </div>
          <div
            data-w-tab="WORKING WITH HOME BUYERS"
            class="w-tab-pane w--tab-active practice"
          >
            <PracticeCarouselSection />
          </div>
          <div
            data-w-tab="WORKING WITH HOME BUYERS"
            class="w-tab-pane w--tab-active practice"
          >
            <PracticeCarouselSection />
          </div>
        </VueSlickCarousel>
        <div class="carousel-overlay" style="background-color: #707070"></div>
      </div>
      <div class="carousel-main mobile-view">
        <div
          v-show="tab1"
          class="w-tab-pane w--tab-active practice w-tab-content"
        >
          <PracticeCarouselSection />
        </div>
        <div
          v-show="tab2"
          class="w-tab-pane w--tab-active practice w-tab-content"
        >
          <PracticeCarouselSection />
        </div>
        <div
          v-show="tab3"
          class="w-tab-pane w--tab-active practice w-tab-content"
        >
          <PracticeCarouselSection />
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
  data() {
    return {
      tab1: true,
      tab2: false,
      tab3: false,
    }
  },
  methods: {
    showPage(index) {
      this.$refs.carousel.goTo(index)
      if (index === 0) {
        this.tab1 = true
        this.tab2 = false
        this.tab3 = false
        document.getElementById('carousel-item0').classList.add('w--current')
        document.getElementById('carousel-item1').classList.remove('w--current')
        document.getElementById('carousel-item2').classList.remove('w--current')
      } else if (index === 1) {
        this.tab1 = false
        this.tab2 = true
        this.tab3 = false
        document.getElementById('carousel-item1').classList.add('w--current')
        document.getElementById('carousel-item0').classList.remove('w--current')
        document.getElementById('carousel-item2').classList.remove('w--current')
      }
      if (index === 2) {
        this.tab1 = false
        this.tab2 = false
        this.tab3 = true
        document.getElementById('carousel-item2').classList.add('w--current')
        document.getElementById('carousel-item1').classList.remove('w--current')
        document.getElementById('carousel-item0').classList.remove('w--current')
      }
    },
  },
}
</script> 