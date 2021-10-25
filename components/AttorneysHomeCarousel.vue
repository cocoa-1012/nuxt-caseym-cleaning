<template>
  <div class="working-with-section attorney wf-section">
    <div data-current="WORKING WITH HOME BUYERS" data-easing="ease-in-out" data-duration-in="300" data-duration-out="100" class="tabs w-tabs">
      <div class="tabs-menu attorney w-tab-menu home-carousel">
        <a id="carousel-item0" data-w-tab="WORKING WITH HOME BUYERS" class="tab-link-working-with-home-buyers attorney w-inline-block w-tab-link w--current"  @click="showPage(0)">
          <div class="tabs-heading">CRIMINAL DEFENSE <strong></strong></div>
        </a>
        <a id="carousel-item1" data-w-tab="WORKING WITH LENDERS" class="tab-link-working-with-lenders attorney w-inline-block w-tab-link" @click="showPage(1)">
          <div class="text-block-2 tabs-heading">IMMIGRATION<strong></strong></div>
        </a>
        <a id="carousel-item2" data-w-tab="WORKING WITH REALTORS" class="tab-link-working-with-realtors attorney w-inline-block w-tab-link" @click="showPage(2)">
          <div class="tabs-heading">PERSONAL INJURY<strong></strong></div>
        </a>
        <a id="carousel-item3" data-w-tab="WORKING WITH REALTORS" class="tab-link-working-with-realtors attorney w-inline-block w-tab-link" @click="showPage(3)">
          <div class="tabs-heading">ADOPTION<strong></strong></div>
        </a>
        <a id="carousel-item4" data-w-tab="WORKING WITH REALTORS" class="tab-link-working-with-realtors attorney w-inline-block w-tab-link" @click="showPage(4)">
          <div class="tabs-heading">MARITIME<strong></strong></div>
        </a>
      </div>
      <div>
        <VueSlickCarousel ref="carousel" class="w-tab-content" :fade="true">
          <div data-w-tab="WORKING WITH HOME BUYERS" class="w-tab-pane w--tab-active">
            <div class="workingwithtextsection w-row">
              <div class="w-col w-col-6">
                <h1 class="working-with-header attorney"><em>Criminal<br>Defense</em></h1>
              </div>
              <div class="w-col w-col-6">
                <p class="working-with-subtext">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam aliquam cursus metus, at accumsan massa ornare id. Aliquam facilisis ex aliquet, lacinia nunc at, semper nunc. Vivamus vel urna nec quam elementum ultricies. Vivamus sed sem venenatis nibh lacinia imperdiet sit amet sit amet ex. Nam vehicula venenatis odio, id feugiat libero gravida facilisis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec commodo ex vitae odio tincidunt sodales vel at massa. Nulla facilisi. Etiam cursus varius urna, vel mattis sapien venenatis at. <br><br>Donec et eros eros. Phasellus arcu mi, hendrerit eu nibh eu, condimentum iaculis sapien. Donec eu blandit elit, in ultrices tellus. Maecenas ultricies bibendum sodales. Morbi in tincidunt eros. Vivamus nec ipsum suscipit, sagittis libero eget, vehicula leo. Aliquam erat volutpat. Donec auctor luctus diam, id finibus neque pellentesque vitae. Duis pretium ut velit quis cursus. Aliquam vitae leo nec neque luctus gravida. Nulla vestibulum, felis nec blandit lobortis, neque nisi aliquam nunc, eget vehicula lectus augue interdum leo. Nam vestibulum a sem id ornare. Praesent convallis mollis elementum.<br></p>
              </div>
            </div>
          </div>
          <div data-w-tab="WORKING WITH LENDERS" class="w-tab-pane">
            <div class="workingwithtextsection w-row">
              <div class="w-col w-col-6">
                <h1 class="working-with-header attorney"><em>Immigration</em></h1>
              </div>
              <div class="w-col w-col-6">
                <p class="working-with-subtext">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam aliquam cursus metus, at accumsan massa ornare id. Aliquam facilisis ex aliquet, lacinia nunc at, semper nunc. Vivamus vel urna nec quam elementum ultricies. Vivamus sed sem venenatis nibh lacinia imperdiet sit amet sit amet ex. Nam vehicula venenatis odio, id feugiat libero gravida facilisis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec commodo ex vitae odio tincidunt sodales vel at massa. Nulla facilisi. Etiam cursus varius urna, vel mattis sapien venenatis at. Donec et eros eros. Phasellus arcu mi, hendrerit eu nibh eu, condimentum iaculis sapien. Donec eu blandit elit, in ultrices tellus. <br><br>Maecenas ultricies bibendum sodales. Morbi in tincidunt eros. Vivamus nec ipsum suscipit, sagittis libero eget, vehicula leo. Aliquam erat volutpat. Donec auctor luctus diam, id finibus neque pellentesque vitae. Duis pretium ut velit quis cursus. Aliquam vitae leo nec neque luctus gravida. Nulla vestibulum, felis nec blandit lobortis, neque nisi aliquam nunc, eget vehicula lectus augue interdum leo. Nam vestibulum a sem id ornare. Praesent convallis mollis elementum.<br></p>
              </div>
            </div>
          </div>
          <div data-w-tab="WORKING WITH REALTORS" class="w-tab-pane">
            <div class="workingwithtextsection w-row">
              <div class="w-col w-col-6">
                <h1 class="working-with-header attorney"><em>Personal<br>Injury</em></h1>
              </div>
              <div class="w-col w-col-6">
                <p class="working-with-subtext">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam aliquam cursus metus, at accumsan massa ornare id. Aliquam facilisis ex aliquet, lacinia nunc at, semper nunc. Vivamus vel urna nec quam elementum ultricies. Vivamus sed sem venenatis nibh lacinia imperdiet sit amet sit amet ex. Nam vehicula venenatis odio, id feugiat libero gravida facilisis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec commodo ex vitae odio tincidunt sodales vel at massa. Nulla facilisi. Etiam cursus varius urna, vel mattis sapien venenatis at. <br><br>Donec et eros eros. Phasellus arcu mi, hendrerit eu nibh eu, condimentum iaculis sapien. Donec eu blandit elit, in ultrices tellus. Maecenas ultricies bibendum sodales. Morbi in tincidunt eros. Vivamus nec ipsum suscipit, sagittis libero eget, vehicula leo. Aliquam erat volutpat. Donec auctor luctus diam, id finibus neque pellentesque vitae. Duis pretium ut velit quis cursus. Aliquam vitae leo nec neque luctus gravida. Nulla vestibulum, felis nec blandit lobortis, neque nisi aliquam nunc, eget vehicula lectus augue interdum leo. Nam vestibulum a sem id ornare. Praesent convallis mollis elementum.<br></p>
              </div>
            </div>
          </div>
          <div data-w-tab="WORKING WITH REALTORS 2" class="w-tab-pane">
            <div class="workingwithtextsection w-row">
              <div class="w-col w-col-6">
                <h1 class="working-with-header attorney"><em>Adoption</em></h1>
              </div>
              <div class="w-col w-col-6">
                <p class="working-with-subtext">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam aliquam cursus metus, at accumsan massa ornare id. Aliquam facilisis ex aliquet, lacinia nunc at, semper nunc. Vivamus vel urna nec quam elementum ultricies. Vivamus sed sem venenatis nibh lacinia imperdiet sit amet sit amet ex. Nam vehicula venenatis odio, id feugiat libero gravida facilisis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec commodo ex vitae odio tincidunt sodales vel at massa. Nulla facilisi. Etiam cursus varius urna, vel mattis sapien venenatis at. <br><br>Donec et eros eros. Phasellus arcu mi, hendrerit eu nibh eu, condimentum iaculis sapien. Donec eu blandit elit, in ultrices tellus. Maecenas ultricies bibendum sodales. Morbi in tincidunt eros. Vivamus nec ipsum suscipit, sagittis libero eget, vehicula leo. Aliquam erat volutpat. Donec auctor luctus diam, id finibus neque pellentesque vitae. Duis pretium ut velit quis cursus. Aliquam vitae leo nec neque luctus gravida. Nulla vestibulum, felis nec blandit lobortis, neque nisi aliquam nunc, eget vehicula lectus augue interdum leo. Nam vestibulum a sem id ornare. Praesent convallis mollis elementum.<br></p>
              </div>
            </div>
          </div>
          <div data-w-tab="WORKING WITH REALTORS 3" class="w-tab-pane">
            <div class="workingwithtextsection w-row">
              <div class="w-col w-col-6">
                <h1 class="working-with-header attorney"><em>Maritime</em></h1>
              </div>
              <div class="w-col w-col-6">
                <p class="working-with-subtext">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam aliquam cursus metus, at accumsan massa ornare id. Aliquam facilisis ex aliquet, lacinia nunc at, semper nunc. Vivamus vel urna nec quam elementum ultricies. Vivamus sed sem venenatis nibh lacinia imperdiet sit amet sit amet ex. Nam vehicula venenatis odio, id feugiat libero gravida facilisis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec commodo ex vitae odio tincidunt sodales vel at massa. Nulla facilisi. Etiam cursus varius urna, vel mattis sapien venenatis at. <br><br>Donec et eros eros. Phasellus arcu mi, hendrerit eu nibh eu, condimentum iaculis sapien. Donec eu blandit elit, in ultrices tellus. Maecenas ultricies bibendum sodales. Morbi in tincidunt eros. Vivamus nec ipsum suscipit, sagittis libero eget, vehicula leo. Aliquam erat volutpat. Donec auctor luctus diam, id finibus neque pellentesque vitae. Duis pretium ut velit quis cursus. Aliquam vitae leo nec neque luctus gravida. Nulla vestibulum, felis nec blandit lobortis, neque nisi aliquam nunc, eget vehicula lectus augue interdum leo. Nam vestibulum a sem id ornare. Praesent convallis mollis elementum.<br></p>
              </div>
            </div>
          </div>
        </VueSlickCarousel> 
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
        this.$refs.carousel.goTo(index);
        if (index === 0) {
          document.getElementById("carousel-item0").classList.add("w--current");
          document.getElementById("carousel-item1").classList.remove("w--current");
          document.getElementById("carousel-item2").classList.remove("w--current");
          document.getElementById("carousel-item3").classList.remove("w--current");
          document.getElementById("carousel-item4").classList.remove("w--current");
        } else if (index === 1) {
          document.getElementById("carousel-item1").classList.add("w--current");
          document.getElementById("carousel-item0").classList.remove("w--current");
          document.getElementById("carousel-item2").classList.remove("w--current");
          document.getElementById("carousel-item3").classList.remove("w--current");
          document.getElementById("carousel-item4").classList.remove("w--current");
        }else if (index === 2) {
          document.getElementById("carousel-item2").classList.add("w--current");
          document.getElementById("carousel-item1").classList.remove("w--current");
          document.getElementById("carousel-item0").classList.remove("w--current");
          document.getElementById("carousel-item3").classList.remove("w--current");
          document.getElementById("carousel-item4").classList.remove("w--current");
        }else if (index === 3) {
          document.getElementById("carousel-item3").classList.add("w--current");
          document.getElementById("carousel-item1").classList.remove("w--current");
          document.getElementById("carousel-item2").classList.remove("w--current");
          document.getElementById("carousel-item4").classList.remove("w--current");
          document.getElementById("carousel-item0").classList.remove("w--current");
        }else if (index === 4) {
          document.getElementById("carousel-item4").classList.add("w--current");
          document.getElementById("carousel-item1").classList.remove("w--current");
          document.getElementById("carousel-item2").classList.remove("w--current");
          document.getElementById("carousel-item3").classList.remove("w--current");
          document.getElementById("carousel-item0").classList.remove("w--current");
        }
      }
    },
  }
</script> 