<template>
  <div class="working-with-section attorney wf-section">
    <div
      data-current="WORKING WITH HOME BUYERS"
      data-easing="ease-in-out"
      data-duration-in="300"
      data-duration-out="100"
      class="tabs w-tabs"
    >
      <div class="tabs-menu attorney w-tab-menu home-carousel">
        <a
          id="carousel-item0"
          data-w-tab="WORKING WITH HOME BUYERS"
          class="
            tab-link-working-with-home-buyers
            attorney
            w-inline-block w-tab-link w--current
          "
          @click="showPage(0)"
        >
          <div class="tabs-heading">CRIMINAL DEFENSE <strong></strong></div>
        </a>
        <a
          id="carousel-item1"
          data-w-tab="WORKING WITH LENDERS"
          class="
            tab-link-working-with-lenders
            attorney
            w-inline-block w-tab-link
          "
          @click="showPage(1)"
        >
          <div class="text-block-2 tabs-heading">
            IMMIGRATION<strong></strong>
          </div>
        </a>
        <a
          id="carousel-item2"
          data-w-tab="WORKING WITH REALTORS"
          class="
            tab-link-working-with-realtors
            attorney
            w-inline-block w-tab-link
          "
          @click="showPage(2)"
        >
          <div class="tabs-heading">PERSONAL INJURY<strong></strong></div>
        </a>
        <a
          id="carousel-item3"
          data-w-tab="WORKING WITH REALTORS"
          class="
            tab-link-working-with-realtors
            attorney
            w-inline-block w-tab-link
          "
          @click="showPage(3)"
        >
          <div class="tabs-heading">ADOPTION<strong></strong></div>
        </a>
        <a
          id="carousel-item4"
          data-w-tab="WORKING WITH REALTORS"
          class="
            tab-link-working-with-realtors
            attorney
            w-inline-block w-tab-link
          "
          @click="showPage(4)"
        >
          <div class="tabs-heading">MARITIME<strong></strong></div>
        </a>
      </div>
      <div class="carousel-main">
        <VueSlickCarousel ref="carousel" class="w-tab-content" :fade="true">
          <div
            data-w-tab="WORKING WITH HOME BUYERS"
            class="w-tab-pane w--tab-active"
          >
            <div class="workingwithtextsection w-row">
              <div class="w-col w-col-3">
                <h1 class="working-with-header attorney">
                  Criminal<br />Defense
                </h1>
              </div>
              <AttorneysHomeCarouselDetailSection />
              <AttorneysConsultationSection />
            </div>
          </div>
          <div data-w-tab="WORKING WITH LENDERS" class="w-tab-pane">
            <div class="workingwithtextsection w-row">
              <div class="w-col w-col-3">
                <h1 class="working-with-header attorney">Immigration</h1>
              </div>
              <AttorneysHomeCarouselDetailSection />
              <AttorneysConsultationSection />
            </div>
          </div>
          <div data-w-tab="WORKING WITH REALTORS" class="w-tab-pane">
            <div class="workingwithtextsection w-row">
              <div class="w-col w-col-3">
                <h1 class="working-with-header attorney">
                  Personal<br />Injury
                </h1>
              </div>
              <AttorneysHomeCarouselDetailSection />
              <AttorneysConsultationSection />
            </div>
          </div>
          <div data-w-tab="WORKING WITH REALTORS 2" class="w-tab-pane">
            <div class="workingwithtextsection w-row">
              <div class="w-col w-col-3">
                <h1 class="working-with-header attorney">Adoption</h1>
              </div>
              <AttorneysHomeCarouselDetailSection />
              <AttorneysConsultationSection />
            </div>
          </div>
          <div data-w-tab="WORKING WITH REALTORS 3" class="w-tab-pane">
            <div class="workingwithtextsection w-row">
              <div class="w-col w-col-3">
                <h1 class="working-with-header attorney">Maritime</h1>
              </div>
              <AttorneysHomeCarouselDetailSection />
              <AttorneysConsultationSection />
            </div>
          </div>
        </VueSlickCarousel>
        <div class="carousel-overlay"></div>
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
    showPage(index) {
      this.$refs.carousel.goTo(index)
      if (index === 0) {
        document.getElementById('carousel-item0').classList.add('w--current')
        document.getElementById('carousel-item1').classList.remove('w--current')
        document.getElementById('carousel-item2').classList.remove('w--current')
        document.getElementById('carousel-item3').classList.remove('w--current')
        document.getElementById('carousel-item4').classList.remove('w--current')
      } else if (index === 1) {
        document.getElementById('carousel-item1').classList.add('w--current')
        document.getElementById('carousel-item0').classList.remove('w--current')
        document.getElementById('carousel-item2').classList.remove('w--current')
        document.getElementById('carousel-item3').classList.remove('w--current')
        document.getElementById('carousel-item4').classList.remove('w--current')
      } else if (index === 2) {
        document.getElementById('carousel-item2').classList.add('w--current')
        document.getElementById('carousel-item1').classList.remove('w--current')
        document.getElementById('carousel-item0').classList.remove('w--current')
        document.getElementById('carousel-item3').classList.remove('w--current')
        document.getElementById('carousel-item4').classList.remove('w--current')
      } else if (index === 3) {
        document.getElementById('carousel-item3').classList.add('w--current')
        document.getElementById('carousel-item1').classList.remove('w--current')
        document.getElementById('carousel-item2').classList.remove('w--current')
        document.getElementById('carousel-item4').classList.remove('w--current')
        document.getElementById('carousel-item0').classList.remove('w--current')
      } else if (index === 4) {
        document.getElementById('carousel-item4').classList.add('w--current')
        document.getElementById('carousel-item1').classList.remove('w--current')
        document.getElementById('carousel-item2').classList.remove('w--current')
        document.getElementById('carousel-item3').classList.remove('w--current')
        document.getElementById('carousel-item0').classList.remove('w--current')
      }
    },
  },
}
</script> 