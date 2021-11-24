<template>
  <div>
    <AttorneysMobileNavPractiseFaq />
    <div class="overlay-section about-us resources faq w-container">
      <h1 class="hero-text sub-page-hero resources" style="position: relative">
        <img
          src="assets/images/Logo Icon.png"
          loading="lazy"
          alt=""
          class="desktop-view"
          style="position: absolute; left: -100%"
        />
        &nbsp;&nbsp; FAQ &nbsp; &nbsp;<br />
      </h1>
    </div>
    <AttorneysMobileNavPhone />
    <div class="practice-mobile">
      <h1
        style="color: #892432; text-transform: none"
        @click="listGroup = !listGroup"
      >
        Practice area <span>&#x25BC;</span>
      </h1>
      <ul v-show="listGroup" role="list" class="w-list-unstyled list-group">
        <li
          class="practice-list-item attorney"
          @click="
            sectionTitle = 'Adoption'
            listGroup = false
          "
        >
          <p class="practice-area-list">Adoption</p>
        </li>

        <li
          class="practice-list-item"
          @click="
            sectionTitle = 'Family law'
            listGroup = false
          "
        >
          <p class="practice-area-list">Family Law</p>
        </li>

        <li
          class="practice-list-item"
          @click="
            sectionTitle = 'Divorce'
            listGroup = false
          "
        >
          <p class="practice-area-list">Divorce</p>
        </li>

        <li
          class="practice-list-item"
          @click="
            sectionTitle = 'Wills / Succession'
            listGroup = false
          "
        >
          <p class="practice-area-list">Wills / Succession</p>
        </li>

        <li
          class="practice-list-item"
          @click="
            sectionTitle = 'Criminal Defense'
            listGroup = false
          "
        >
          <p class="practice-area-list">Criminal Defense</p>
        </li>

        <li
          class="practice-list-item"
          @click="
            sectionTitle = 'Personal Injury'
            listGroup = false
          "
        >
          <p class="practice-area-list">Personal Injury</p>
        </li>

        <li
          class="practice-list-item"
          @click="
            sectionTitle = 'DUI / DWI'
            listGroup = false
          "
        >
          <p class="practice-area-list">DUI / DWI</p>
        </li>

        <li
          class="practice-list-item"
          @click="
            sectionTitle = `Workers' Comp`
            listGroup = false
          "
        >
          <p class="practice-area-list">Workers&#x27; Comp</p>
        </li>

        <li
          class="practice-list-item"
          @click="
            sectionTitle = 'Auto'
            listGroup = false
          "
        >
          <p class="practice-area-list">AUTO</p>
        </li>

        <li
          class="practice-list-item"
          @click="
            sectionTitle = '18-Wheeler Accident'
            listGroup = false
          "
        >
          <p class="practice-area-list">18-Wheeler Accident</p>
        </li>

        <li
          class="practice-list-item"
          @click="
            sectionTitle = 'Maritime'
            listGroup = false
          "
        >
          <p class="practice-area-list">Maritime</p>
        </li>

        <li
          class="practice-list-item"
          @click="
            sectionTitle = 'Irrevocable / Revocable trust'
            listGroup = false
          "
        >
          <p class="practice-area-list">IRREVOCABLE / Revocable trust</p>
        </li>
      </ul>
    </div>
    <div class="faq-top wf-section">
      <div class="faq-container w-row">
        <div class="faq-column-one w-col w-col-8">
          <h1 class="faq-heading commercial attorney">{{ sectionTitle }}</h1>
          <div class="cloneable-area">
            <div class="c-accordion-list">
              <div class="c-accordion-item" @click="toggle(0)">
                <div class="_w-accordion-item">
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
              <div class="c-accordion-item" @click="toggle(1)">
                <div class="_w-accordion-item">
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
              <div class="c-accordion-item" @click="toggle(2)">
                <div class="_w-accordion-item">
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
              <div class="c-accordion-item" @click="toggle(3)">
                <div class="_w-accordion-item">
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
              <div class="c-accordion-item" @click="toggle(4)">
                <div class="_w-accordion-item">
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
              <div class="c-accordion-item" @click="toggle(5)">
                <div class="_w-accordion-item">
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
              <div class="c-accordion-item" @click="toggle(6)">
                <div class="_w-accordion-item">
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
              <div class="c-accordion-item" @click="toggle(7)">
                <div class="_w-accordion-item">
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
              <div class="c-accordion-item" @click="toggle(8)">
                <div class="_w-accordion-item">
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
        <div class="faq-sidebar attorney w-col w-col-4 real">
          <h1 class="faq-heading sidebar attorney">Practice Areas</h1>
          <ul role="list" class="w-list-unstyled">
            <li
              class="practice-list-item attorney"
              @click="sectionTitle = 'Adoption'"
            >
              <p class="practice-area-list">Adoption</p>
              <p></p>
            </li>

            <li class="practice-list-item" @click="sectionTitle = 'Family law'">
              <p class="practice-area-list">Family Law</p>
              <p></p>
            </li>

            <li class="practice-list-item" @click="sectionTitle = 'Divorce'">
              <p class="practice-area-list">Divorce</p>
              <p></p>
            </li>

            <li
              class="practice-list-item"
              @click="sectionTitle = 'Wills / Succession'"
            >
              <p class="practice-area-list">Wills / Succession</p>
              <p></p>
            </li>

            <li
              class="practice-list-item"
              @click="sectionTitle = 'Criminal Defense'"
            >
              <p class="practice-area-list">Criminal Defense</p>
              <p></p>
            </li>

            <li
              class="practice-list-item"
              @click="sectionTitle = 'Personal Injury'"
            >
              <p class="practice-area-list">Personal Injury</p>
              <p></p>
            </li>

            <li class="practice-list-item" @click="sectionTitle = 'DUI / DWI'">
              <p class="practice-area-list">DUI / DWI</p>
              <p></p>
            </li>

            <li
              class="practice-list-item"
              @click="sectionTitle = `Workers' Comp`"
            >
              <p class="practice-area-list">Workers&#x27; Comp</p>
              <p></p>
            </li>

            <li class="practice-list-item" @click="sectionTitle = 'Auto'">
              <p class="practice-area-list">AUTO</p>
              <p></p>
            </li>

            <li
              class="practice-list-item"
              @click="sectionTitle = '18-Wheeler Accident'"
            >
              <p class="practice-area-list">18-Wheeler Accident</p>
              <p></p>
            </li>

            <li class="practice-list-item" @click="sectionTitle = 'Maritime'">
              <p class="practice-area-list">Maritime</p>
              <p></p>
            </li>

            <li
              class="practice-list-item"
              @click="sectionTitle = 'Irrevocable / Revocable trust'"
            >
              <p class="practice-area-list">
                IRREVOCABLE / <br />Revocable trust
              </p>
              <p></p>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="contact-section about-contact wf-section mobile-view">
      <div
        class="
          contact-container
          about-contact-container
          w-container w-row
          contact-attorney
        "
        style="margin-bottom: -100px; margin-top: -120px"
      >
        <AttorneysContactUsToday />
      </div>
    </div>
    <AttorneysCarousel />
    <div class="contact-section about-contact wf-section desktop-view">
      <div
        class="
          contact-container
          about-contact-container
          w-container w-row
          contact-attorney
        "
        style="width: 1230px"
      >
        <AttorneysContactUsToday />
        <div class="w-col w-col-5">
          <img src="assets/images/Mask Group 19.jpg" loading="lazy" alt="" />
        </div>
      </div>
    </div>
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
      sectionTitle: 'Adoption',
      listGroup: false,
    }
  },
  mounted() {
    this.$nextTick(function () {
      this.itemArrays[0] = !this.itemArrays[0]
      this.changeClass(0)
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
  },
}
</script> 
