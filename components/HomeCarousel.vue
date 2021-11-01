<template>
  <div class="working-with-section wf-section">
    <div
      data-current="WORKING WITH HOME BUYERS"
      data-easing="ease-in-out"
      data-duration-in="300"
      data-duration-out="100"
      class="tabs w-tabs"
    >
      <div class="tabs-menu w-tab-menu home-carousel">
        <a
          id="carousel-item0"
          data-w-tab="WORKING WITH HOME BUYERS"
          class="
            tab-link-working-with-home-buyers
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
          class="tab-link-working-with-lenders w-inline-block w-tab-link"
          @click="showPage(1)"
        >
          <div class="text-block-2 tabs-heading">
            WORKING WITH <strong>LENDERS</strong>
          </div>
        </a>
        <a
          id="carousel-item2"
          data-w-tab="WORKING WITH REALTORS"
          class="tab-link-working-with-realtors w-inline-block w-tab-link"
          @click="showPage(2)"
        >
          <div class="tabs-heading">WORKING WITH <strong>REALTORS</strong></div>
        </a>
      </div>
      <div class="carousel-main">
        <VueSlickCarousel
          ref="carousel"
          class="w-tab-content"
          :fade="true"
          :draggable="false"
        >
          <div
            data-w-tab="WORKING WITH HOME BUYERS"
            class="w-tab-pane w--tab-active"
          >
            <div class="tabs-images w-row">
              <div class="image-one w-col w-col-6"></div>
              <div class="image-two w-col w-col-6"></div>
            </div>
            <div class="workingwithtextsection w-row">
              <div class="w-col w-col-4">
                <h1 class="working-with-header">
                  <em>Working</em><br /><em>with</em><br /><strong
                    class="bold-text"
                    >Home<br />Buyers</strong
                  >
                </h1>
              </div>
              <div class="w-col w-col-8">
                <p class="working-with-subtext">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aliquam aliquam cursus metus, at accumsan massa ornare id.
                  Aliquam facilisis ex aliquet, lacinia nunc at, semper nunc.
                  Vivamus vel urna nec quam elementum ultricies. Vivamus sed sem
                  venenatis nibh lacinia imperdiet sit amet sit amet ex. Nam
                  vehicula venenatis odio, id feugiat libero gravida facilisis.
                  Class aptent taciti sociosqu ad litora torquent per conubia
                  nostra, per inceptos himenaeos. Donec commodo ex vitae odio
                  tincidunt sodales vel at massa. Nulla facilisi. Etiam cursus
                  varius urna, vel mattis sapien venenatis at. <br /><br />Donec
                  et eros eros. Phasellus arcu mi, hendrerit eu nibh eu,
                  condimentum iaculis sapien. Donec eu blandit elit, in ultrices
                  tellus. Maecenas ultricies bibendum sodales. Morbi in
                  tincidunt eros. Vivamus nec ipsum suscipit, sagittis libero
                  eget, vehicula leo. Aliquam erat volutpat. Donec auctor luctus
                  diam, id finibus neque pellentesque vitae. Duis pretium ut
                  velit quis cursus. Aliquam vitae leo nec neque luctus gravida.
                  Nulla vestibulum, felis nec blandit lobortis, neque nisi
                  aliquam nunc, eget vehicula lectus augue interdum leo. Nam
                  vestibulum a sem id ornare. Praesent convallis mollis
                  elementum.<br />
                </p>
                <a href="#" class="button w-button learn-more"
                  ><strong>LEARN MORE</strong></a
                >
              </div>
            </div>
          </div>
          <div data-w-tab="WORKING WITH LENDERS" class="w-tab-pane">
            <div class="tabs-images w-row">
              <div class="image-one w-col w-col-6"></div>
              <div class="image-two w-col w-col-6"></div>
            </div>
            <div class="workingwithtextsection w-row">
              <div class="w-col w-col-4">
                <h1 class="working-with-header">
                  <em>Working</em><br /><em>with</em><br /><strong
                    class="bold-text"
                    >Lenders</strong
                  >
                </h1>
              </div>
              <div class="w-col w-col-8">
                <p class="working-with-subtext">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aliquam aliquam cursus metus, at accumsan massa ornare id.
                  Aliquam facilisis ex aliquet, lacinia nunc at, semper nunc.
                  Vivamus vel urna nec quam elementum ultricies. Vivamus sed sem
                  venenatis nibh lacinia imperdiet sit amet sit amet ex. Nam
                  vehicula venenatis odio, id feugiat libero gravida facilisis.
                  Class aptent taciti sociosqu ad litora torquent per conubia
                  nostra, per inceptos himenaeos. Donec commodo ex vitae odio
                  tincidunt sodales vel at massa. Nulla facilisi. Etiam cursus
                  varius urna, vel mattis sapien venenatis at. Donec et eros
                  eros. Phasellus arcu mi, hendrerit eu nibh eu, condimentum
                  iaculis sapien. Donec eu blandit elit, in ultrices tellus.
                  <br /><br />Maecenas ultricies bibendum sodales. Morbi in
                  tincidunt eros. Vivamus nec ipsum suscipit, sagittis libero
                  eget, vehicula leo. Aliquam erat volutpat. Donec auctor luctus
                  diam, id finibus neque pellentesque vitae. Duis pretium ut
                  velit quis cursus. Aliquam vitae leo nec neque luctus gravida.
                  Nulla vestibulum, felis nec blandit lobortis, neque nisi
                  aliquam nunc, eget vehicula lectus augue interdum leo. Nam
                  vestibulum a sem id ornare. Praesent convallis mollis
                  elementum.<br />
                </p>
                <a href="#" class="button w-button"
                  ><strong>LEARN MORE</strong></a
                >
              </div>
            </div>
          </div>
          <div data-w-tab="WORKING WITH REALTORS" class="w-tab-pane">
            <div class="tabs-images w-row">
              <div class="image-one w-col w-col-6"></div>
              <div class="image-two w-col w-col-6"></div>
            </div>
            <div class="workingwithtextsection w-row">
              <div class="w-col w-col-4">
                <h1 class="working-with-header">
                  <em>Working</em><br /><em>with</em><br /><strong
                    class="bold-text"
                    >Realtors</strong
                  >
                </h1>
              </div>
              <div class="w-col w-col-8">
                <p class="working-with-subtext">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aliquam aliquam cursus metus, at accumsan massa ornare id.
                  Aliquam facilisis ex aliquet, lacinia nunc at, semper nunc.
                  Vivamus vel urna nec quam elementum ultricies. Vivamus sed sem
                  venenatis nibh lacinia imperdiet sit amet sit amet ex. Nam
                  vehicula venenatis odio, id feugiat libero gravida facilisis.
                  Class aptent taciti sociosqu ad litora torquent per conubia
                  nostra, per inceptos himenaeos. Donec commodo ex vitae odio
                  tincidunt sodales vel at massa. Nulla facilisi. Etiam cursus
                  varius urna, vel mattis sapien venenatis at. <br /><br />Donec
                  et eros eros. Phasellus arcu mi, hendrerit eu nibh eu,
                  condimentum iaculis sapien. Donec eu blandit elit, in ultrices
                  tellus. Maecenas ultricies bibendum sodales. Morbi in
                  tincidunt eros. Vivamus nec ipsum suscipit, sagittis libero
                  eget, vehicula leo. Aliquam erat volutpat. Donec auctor luctus
                  diam, id finibus neque pellentesque vitae. Duis pretium ut
                  velit quis cursus. Aliquam vitae leo nec neque luctus gravida.
                  Nulla vestibulum, felis nec blandit lobortis, neque nisi
                  aliquam nunc, eget vehicula lectus augue interdum leo. Nam
                  vestibulum a sem id ornare. Praesent convallis mollis
                  elementum.<br />
                </p>
                <a href="#" class="button w-button">LEARN MORE</a>
              </div>
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
      } else if (index === 1) {
        document.getElementById('carousel-item1').classList.add('w--current')
        document.getElementById('carousel-item0').classList.remove('w--current')
        document.getElementById('carousel-item2').classList.remove('w--current')
      }
      if (index === 2) {
        document.getElementById('carousel-item2').classList.add('w--current')
        document.getElementById('carousel-item1').classList.remove('w--current')
        document.getElementById('carousel-item0').classList.remove('w--current')
      }
    },
  },
}
</script> 