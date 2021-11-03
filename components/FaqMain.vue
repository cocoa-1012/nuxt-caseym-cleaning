<template>
  <div>
    <div class="overlay-section about-us resources faq w-container">
      <img
        src="assets/images/Logo Icon.png"
        loading="lazy"
        alt=""
        class="desktop-view"
      />
      <h1 class="hero-text sub-page-hero faq">FAQ<br /></h1>
    </div>
    <div class="faq-top wf-section">
      <div class="faq-container w-row">
        <div class="faq-column-one w-col w-col-8">
          <h1 class="faq-heading commercial">{{ sectionTitle }}</h1>
          <div class="cloneable-area">
            <div class="c-accordion-list">
              <div
                id="accordion-item0"
                class="c-accordion-item"
                @click="toggle(0)"
              >
                <div
                  class="_w-accordion-item"
                  @mouseover="mouseOver(0)"
                  @mouseleave="mouseLeave(0)"
                >
                  <div class="c-accordion-item-q">
                    <div class="_w-accordion-item-q">
                      <div class="c-accordion-item-q-text">
                        <div class="_w-accordion-item-q-text">
                          <div class="accordion-item-q-text">QUESTION</div>
                        </div>
                      </div>
                      <div id="accordion-icon0" class="c-accordion-item-q-icon">
                        <div class="_w-accordion-item-q-icon">&#x25BC;</div>
                      </div>
                    </div>
                  </div>
                  <div id="accordion-des0" class="c-accordion-item-a">
                    <div class="_w-accordion-content-divider">
                      <div class="accordion-content-divider"></div>
                    </div>
                    <div class="_w-accordion-item-a">
                      <p class="accordion-item-a-text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Aliquam aliquam cursus metus, at accumsan massa ornare
                        id. Aliquam facilisis ex aliquet, lacinia nunc at,
                        semper nunc. Vivamus vel urna nec quam elementum
                        ultricies. Vivamus sed sem venenatis nibh lacinia
                        imperdiet sit amet sit amet ex. Nam vehicula venenatis
                        odio, id feugiat libero gravida facilisis. Class aptent
                        taciti sociosqu ad litora torquent per conubia nostra,
                        per inceptos himenaeos. Donec commodo ex vitae odio
                        tincidunt sodales vel at massa. Nulla facilisi. Etiam
                        cursus varius urna, vel mattis sapien venenatis at.
                        Donec et eros eros. Phasellus arcu mi, hendrerit eu nibh
                        eu, condimentum iaculis sapien.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                id="accordion-item1"
                class="c-accordion-item"
                @click="toggle(1)"
              >
                <div
                  class="_w-accordion-item"
                  @mouseover="mouseOver(1)"
                  @mouseleave="mouseLeave(1)"
                >
                  <div class="c-accordion-item-q">
                    <div class="_w-accordion-item-q">
                      <div class="c-accordion-item-q-text">
                        <div class="_w-accordion-item-q-text">
                          <div class="accordion-item-q-text">QUESTION</div>
                        </div>
                      </div>
                      <div id="accordion-icon1" class="c-accordion-item-q-icon">
                        <div class="_w-accordion-item-q-icon">&#x25BC;</div>
                      </div>
                    </div>
                  </div>
                  <div id="accordion-des1" class="c-accordion-item-a">
                    <div class="_w-accordion-content-divider">
                      <div class="accordion-content-divider"></div>
                    </div>
                    <div class="_w-accordion-item-a">
                      <p class="accordion-item-a-text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Aliquam aliquam cursus metus, at accumsan massa ornare
                        id. Aliquam facilisis ex aliquet, lacinia nunc at,
                        semper nunc. Vivamus vel urna nec quam elementum
                        ultricies. Vivamus sed sem venenatis nibh lacinia
                        imperdiet sit amet sit amet ex. Nam vehicula venenatis
                        odio, id feugiat libero gravida facilisis. Class aptent
                        taciti sociosqu ad litora torquent per conubia nostra,
                        per inceptos himenaeos. Donec commodo ex vitae odio
                        tincidunt sodales vel at massa. Nulla facilisi. Etiam
                        cursus varius urna, vel mattis sapien venenatis at.
                        Donec et eros eros. Phasellus arcu mi, hendrerit eu nibh
                        eu, condimentum iaculis sapien.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                id="accordion-item2"
                class="c-accordion-item"
                @click="toggle(2)"
              >
                <div
                  class="_w-accordion-item"
                  @mouseover="mouseOver(2)"
                  @mouseleave="mouseLeave(2)"
                >
                  <div class="c-accordion-item-q">
                    <div class="_w-accordion-item-q">
                      <div class="c-accordion-item-q-text">
                        <div class="_w-accordion-item-q-text">
                          <div class="accordion-item-q-text">QUESTION</div>
                        </div>
                      </div>
                      <div id="accordion-icon2" class="c-accordion-item-q-icon">
                        <div class="_w-accordion-item-q-icon">&#x25BC;</div>
                      </div>
                    </div>
                  </div>
                  <div id="accordion-des2" class="c-accordion-item-a">
                    <div class="_w-accordion-content-divider">
                      <div class="accordion-content-divider"></div>
                    </div>
                    <div class="_w-accordion-item-a">
                      <p class="accordion-item-a-text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Aliquam aliquam cursus metus, at accumsan massa ornare
                        id. Aliquam facilisis ex aliquet, lacinia nunc at,
                        semper nunc. Vivamus vel urna nec quam elementum
                        ultricies. Vivamus sed sem venenatis nibh lacinia
                        imperdiet sit amet sit amet ex. Nam vehicula venenatis
                        odio, id feugiat libero gravida facilisis. Class aptent
                        taciti sociosqu ad litora torquent per conubia nostra,
                        per inceptos himenaeos. Donec commodo ex vitae odio
                        tincidunt sodales vel at massa. Nulla facilisi. Etiam
                        cursus varius urna, vel mattis sapien venenatis at.
                        Donec et eros eros. Phasellus arcu mi, hendrerit eu nibh
                        eu, condimentum iaculis sapien.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                id="accordion-item3"
                class="c-accordion-item"
                @click="toggle(3)"
              >
                <div
                  class="_w-accordion-item"
                  @mouseover="mouseOver(3)"
                  @mouseleave="mouseLeave(3)"
                >
                  <div class="c-accordion-item-q">
                    <div class="_w-accordion-item-q">
                      <div class="c-accordion-item-q-text">
                        <div class="_w-accordion-item-q-text">
                          <div class="accordion-item-q-text">QUESTION</div>
                        </div>
                      </div>
                      <div id="accordion-icon3" class="c-accordion-item-q-icon">
                        <div class="_w-accordion-item-q-icon">&#x25BC;</div>
                      </div>
                    </div>
                  </div>
                  <div id="accordion-des3" class="c-accordion-item-a">
                    <div class="_w-accordion-content-divider">
                      <div class="accordion-content-divider"></div>
                    </div>
                    <div class="_w-accordion-item-a">
                      <p class="accordion-item-a-text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Aliquam aliquam cursus metus, at accumsan massa ornare
                        id. Aliquam facilisis ex aliquet, lacinia nunc at,
                        semper nunc. Vivamus vel urna nec quam elementum
                        ultricies. Vivamus sed sem venenatis nibh lacinia
                        imperdiet sit amet sit amet ex. Nam vehicula venenatis
                        odio, id feugiat libero gravida facilisis. Class aptent
                        taciti sociosqu ad litora torquent per conubia nostra,
                        per inceptos himenaeos. Donec commodo ex vitae odio
                        tincidunt sodales vel at massa. Nulla facilisi. Etiam
                        cursus varius urna, vel mattis sapien venenatis at.
                        Donec et eros eros. Phasellus arcu mi, hendrerit eu nibh
                        eu, condimentum iaculis sapien.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                id="accordion-item4"
                class="c-accordion-item"
                @click="toggle(4)"
              >
                <div
                  class="_w-accordion-item"
                  @mouseover="mouseOver(4)"
                  @mouseleave="mouseLeave(4)"
                >
                  <div class="c-accordion-item-q">
                    <div class="_w-accordion-item-q">
                      <div class="c-accordion-item-q-text">
                        <div class="_w-accordion-item-q-text">
                          <div class="accordion-item-q-text">QUESTION</div>
                        </div>
                      </div>
                      <div id="accordion-icon4" class="c-accordion-item-q-icon">
                        <div class="_w-accordion-item-q-icon">&#x25BC;</div>
                      </div>
                    </div>
                  </div>
                  <div id="accordion-des4" class="c-accordion-item-a">
                    <div class="_w-accordion-content-divider">
                      <div class="accordion-content-divider"></div>
                    </div>
                    <div class="_w-accordion-item-a">
                      <p class="accordion-item-a-text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Aliquam aliquam cursus metus, at accumsan massa ornare
                        id. Aliquam facilisis ex aliquet, lacinia nunc at,
                        semper nunc. Vivamus vel urna nec quam elementum
                        ultricies. Vivamus sed sem venenatis nibh lacinia
                        imperdiet sit amet sit amet ex. Nam vehicula venenatis
                        odio, id feugiat libero gravida facilisis. Class aptent
                        taciti sociosqu ad litora torquent per conubia nostra,
                        per inceptos himenaeos. Donec commodo ex vitae odio
                        tincidunt sodales vel at massa. Nulla facilisi. Etiam
                        cursus varius urna, vel mattis sapien venenatis at.
                        Donec et eros eros. Phasellus arcu mi, hendrerit eu nibh
                        eu, condimentum iaculis sapien.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                id="accordion-item5"
                class="c-accordion-item"
                @click="toggle(5)"
              >
                <div
                  class="_w-accordion-item"
                  @mouseover="mouseOver(5)"
                  @mouseleave="mouseLeave(5)"
                >
                  <div class="c-accordion-item-q">
                    <div class="_w-accordion-item-q">
                      <div class="c-accordion-item-q-text">
                        <div class="_w-accordion-item-q-text">
                          <div class="accordion-item-q-text">QUESTION</div>
                        </div>
                      </div>
                      <div id="accordion-icon5" class="c-accordion-item-q-icon">
                        <div class="_w-accordion-item-q-icon">&#x25BC;</div>
                      </div>
                    </div>
                  </div>
                  <div id="accordion-des5" class="c-accordion-item-a">
                    <div class="_w-accordion-content-divider">
                      <div class="accordion-content-divider"></div>
                    </div>
                    <div class="_w-accordion-item-a">
                      <p class="accordion-item-a-text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Aliquam aliquam cursus metus, at accumsan massa ornare
                        id. Aliquam facilisis ex aliquet, lacinia nunc at,
                        semper nunc. Vivamus vel urna nec quam elementum
                        ultricies. Vivamus sed sem venenatis nibh lacinia
                        imperdiet sit amet sit amet ex. Nam vehicula venenatis
                        odio, id feugiat libero gravida facilisis. Class aptent
                        taciti sociosqu ad litora torquent per conubia nostra,
                        per inceptos himenaeos. Donec commodo ex vitae odio
                        tincidunt sodales vel at massa. Nulla facilisi. Etiam
                        cursus varius urna, vel mattis sapien venenatis at.
                        Donec et eros eros. Phasellus arcu mi, hendrerit eu nibh
                        eu, condimentum iaculis sapien.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                id="accordion-item6"
                class="c-accordion-item"
                @click="toggle(6)"
              >
                <div
                  class="_w-accordion-item"
                  @mouseover="mouseOver(6)"
                  @mouseleave="mouseLeave(6)"
                >
                  <div class="c-accordion-item-q">
                    <div class="_w-accordion-item-q">
                      <div class="c-accordion-item-q-text">
                        <div class="_w-accordion-item-q-text">
                          <div class="accordion-item-q-text">QUESTION</div>
                        </div>
                      </div>
                      <div id="accordion-icon6" class="c-accordion-item-q-icon">
                        <div class="_w-accordion-item-q-icon">&#x25BC;</div>
                      </div>
                    </div>
                  </div>
                  <div id="accordion-des6" class="c-accordion-item-a">
                    <div class="_w-accordion-content-divider">
                      <div class="accordion-content-divider"></div>
                    </div>
                    <div class="_w-accordion-item-a">
                      <p class="accordion-item-a-text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Aliquam aliquam cursus metus, at accumsan massa ornare
                        id. Aliquam facilisis ex aliquet, lacinia nunc at,
                        semper nunc. Vivamus vel urna nec quam elementum
                        ultricies. Vivamus sed sem venenatis nibh lacinia
                        imperdiet sit amet sit amet ex. Nam vehicula venenatis
                        odio, id feugiat libero gravida facilisis. Class aptent
                        taciti sociosqu ad litora torquent per conubia nostra,
                        per inceptos himenaeos. Donec commodo ex vitae odio
                        tincidunt sodales vel at massa. Nulla facilisi. Etiam
                        cursus varius urna, vel mattis sapien venenatis at.
                        Donec et eros eros. Phasellus arcu mi, hendrerit eu nibh
                        eu, condimentum iaculis sapien.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                id="accordion-item7"
                class="c-accordion-item"
                @click="toggle(7)"
              >
                <div
                  class="_w-accordion-item"
                  @mouseover="mouseOver(7)"
                  @mouseleave="mouseLeave(7)"
                >
                  <div class="c-accordion-item-q">
                    <div class="_w-accordion-item-q">
                      <div class="c-accordion-item-q-text">
                        <div class="_w-accordion-item-q-text">
                          <div class="accordion-item-q-text">QUESTION</div>
                        </div>
                      </div>
                      <div id="accordion-icon7" class="c-accordion-item-q-icon">
                        <div class="_w-accordion-item-q-icon">&#x25BC;</div>
                      </div>
                    </div>
                  </div>
                  <div id="accordion-des7" class="c-accordion-item-a">
                    <div class="_w-accordion-content-divider">
                      <div class="accordion-content-divider"></div>
                    </div>
                    <div class="_w-accordion-item-a">
                      <p class="accordion-item-a-text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Aliquam aliquam cursus metus, at accumsan massa ornare
                        id. Aliquam facilisis ex aliquet, lacinia nunc at,
                        semper nunc. Vivamus vel urna nec quam elementum
                        ultricies. Vivamus sed sem venenatis nibh lacinia
                        imperdiet sit amet sit amet ex. Nam vehicula venenatis
                        odio, id feugiat libero gravida facilisis. Class aptent
                        taciti sociosqu ad litora torquent per conubia nostra,
                        per inceptos himenaeos. Donec commodo ex vitae odio
                        tincidunt sodales vel at massa. Nulla facilisi. Etiam
                        cursus varius urna, vel mattis sapien venenatis at.
                        Donec et eros eros. Phasellus arcu mi, hendrerit eu nibh
                        eu, condimentum iaculis sapien.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                id="accordion-item8"
                class="c-accordion-item"
                @click="toggle(8)"
              >
                <div
                  class="_w-accordion-item"
                  @mouseover="mouseOver(8)"
                  @mouseleave="mouseLeave(8)"
                >
                  <div class="c-accordion-item-q">
                    <div class="_w-accordion-item-q">
                      <div class="c-accordion-item-q-text">
                        <div class="_w-accordion-item-q-text">
                          <div class="accordion-item-q-text">QUESTION</div>
                        </div>
                      </div>
                      <div id="accordion-icon8" class="c-accordion-item-q-icon">
                        <div class="_w-accordion-item-q-icon">&#x25BC;</div>
                      </div>
                    </div>
                  </div>
                  <div id="accordion-des8" class="c-accordion-item-a">
                    <div class="_w-accordion-content-divider">
                      <div class="accordion-content-divider"></div>
                    </div>
                    <div class="_w-accordion-item-a">
                      <p class="accordion-item-a-text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Aliquam aliquam cursus metus, at accumsan massa ornare
                        id. Aliquam facilisis ex aliquet, lacinia nunc at,
                        semper nunc. Vivamus vel urna nec quam elementum
                        ultricies. Vivamus sed sem venenatis nibh lacinia
                        imperdiet sit amet sit amet ex. Nam vehicula venenatis
                        odio, id feugiat libero gravida facilisis. Class aptent
                        taciti sociosqu ad litora torquent per conubia nostra,
                        per inceptos himenaeos. Donec commodo ex vitae odio
                        tincidunt sodales vel at massa. Nulla facilisi. Etiam
                        cursus varius urna, vel mattis sapien venenatis at.
                        Donec et eros eros. Phasellus arcu mi, hendrerit eu nibh
                        eu, condimentum iaculis sapien.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="faq-sidebar w-col w-col-4">
          <h1 class="faq-heading sidebar">Practice Areas</h1>
          <ul role="list" class="w-list-unstyled">
            <li class="practice-list-item" @click="sectionTitle = 'Commercial'">
              <p class="practice-area-list">Commercial</p>
            </li>
            <li
              class="practice-list-item"
              @click="sectionTitle = 'Residential'"
            >
              <p class="practice-area-list">Residential</p>
            </li>
            <li
              class="practice-list-item"
              @click="sectionTitle = 'Title Settlement'"
            >
              <p class="practice-area-list">Title Settlement</p>
            </li>
            <li
              class="practice-list-item"
              @click="sectionTitle = 'Estate Planning'"
            >
              <p class="practice-area-list">Estate Planning</p>
            </li>
            <li
              class="practice-list-item"
              @click="sectionTitle = 'Loan Closing'"
            >
              <p class="practice-area-list">Loan Closing</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <Carousel />
    <ContactUsToday />
  </div>
</template>

<script>
export default {
  data() {
    return {
      itemArrays: [
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
      ],
      temp: '',
      sectionTitle: '',
    }
  },
  mounted() {
    this.$nextTick(function () {
      this.sectionTitle = 'Commercial'
      for (let i = 0; i < this.itemArrays.length; i++) {
        document.getElementById('accordion-item' + i).style.zIndex = i + 50
      }
    })
  },
  methods: {
    toggle(index) {
      this.itemArrays[index] = !this.itemArrays[index]
      this.changeClass(index)
    },
    changeClass(item) {
      this.temp = 'accordion-des' + item
      this.iconTemp = 'accordion-icon' + item
      if (this.itemArrays[item]) {
        document.getElementById(this.iconTemp).classList.add('icon-opened')
        document.getElementById(this.temp).classList.add('item-opened')
      } else {
        document.getElementById(this.iconTemp).classList.remove('icon-opened')
        document.getElementById(this.temp).classList.remove('item-opened')
      }
    },
    mouseOver(item) {
      if (window.matchMedia('(min-width: 768px)').matches) {
        for (let i = 0; i < this.itemArrays.length; i++) {
          if (i !== item) {
            document.getElementById('accordion-item' + i).style.opacity = '0.2'
            document.getElementById('accordion-item' + i).style.transition =
              'all 1s ease'
          }
        }
      }
    },
    mouseLeave(item) {
      for (let i = 0; i < this.itemArrays.length; i++) {
        if (i !== item) {
          document.getElementById('accordion-item' + i).style.opacity = '1'
          document.getElementById('accordion-item' + i).style.transition =
            'all 1s ease'
        }
      }
    },
  },
}
</script> 
