<template>
  <div>
    <div class="page-hero sub-page-hero wf-section">
      <div class="overlay-section about-us w-container">
        <h1 class="hero-text sub-page-hero">About Us<br /></h1>
      </div>
      <div class="experienced-attorneys-text about-subtext-hero">
        Vestibulum Mattis Laoreet Est, Scelerisque Hehicula Enim Laoreet
      </div>
    </div>
    <div class="real-estate-title-services-section wf-section">
      <div
        class="
          workingwithtextsection
          real-estate-title-services
          about-page-content
          w-row
        "
      >
        <div class="w-col w-col-6 real-estate-intro">
          <img
            src="assets/images/person1.046db6ca.png"
            loading="lazy"
            alt=""
            class="circle-image about-image"
          />
          <p class="about-grey-text title">
            Gabe A. Duhon<strong><br /></strong>
          </p>
          <p class="about-grey-text title sub-title">
            attorney/owner<strong><br /></strong>
          </p>
          <p class="working-with-subtext about-page-subtext">
            <br />Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Aliquam aliquam cursus metus, at accumsan massa ornare id. Aliquam
            facilisis ex aliquet, lacinia nunc at, semper nunc. Vivamus vel urna
            nec quam elementum ultricies. Vivamus sed sem venenatis nibh lacinia
            imperdiet sit amet sit amet ex. Nam vehicula venenatis odio, id
            feugiat libero gravida facilisis. Class aptent taciti sociosqu ad
            litora torquent per conubia nostra, per inceptos himenaeos. Donec
            commodo ex vitae odio tincidunt sodales vel at massa. Nulla
            facilisi. Etiam cursus varius urna, vel mattis sapien venenatis at.
            Donec et eros eros. Phasellus arcu mi, hendrerit eu nibh eu,
            condimentum iaculis sapien. <br /><br />Donec eu blandit elit, in
            ultrices tellus. Maecenas ultricies bibendum sodales. Morbi in
            tincidunt eros. Vivamus nec ipsum suscipit, sagittis libero eget,
            vehicula leo. Aliquam erat volutpat. Donec auctor luctus diam, id
            finibus neque pellentesque vitae. Duis pretium ut velit quis cursus.
            Aliquam vitae leo nec neque luctus gravida. Nulla vestibulum, felis
            nec blandit lobortis, neque nisi aliquam nunc, eget vehicula lectus
            augue interdum leo. Nam vestibulum a sem id ornare. Praesent
            convallis mollis elementum.<br />
          </p>
          <div data-hover="false" data-delay="0" class="credentials w-dropdown">
            <div class="credential-title">
              <div class="w-row">
                <div class="w-col w-col-9">
                  <div class="text-credentials">Credentialse</div>
                </div>
                <div class="w-col w-col-3" @click="toggle1">
                  <div class="expand">Expand &#x25BC;</div>
                </div>
              </div>
            </div>
            <nav
              v-show="isOpen1"
              id="myDropdown1"
              class="w-dropdown-list credential-exp"
            >
              <p class="working-with-subtext about-page-subtext">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                aliquam cursus metus, at accumsan massa ornare id. Aliquam
                facilisis ex aliquet, lacinia nunc at, semper nunc. Vivamus vel
                urna nec quam elementum ultricies. Vivamus sed sem venenatis
                nibh lacinia imperdiet sit amet sit amet ex. Nam vehicula
                venenatis odio, id feugiat libero gravida facilisis. Class
                aptent taciti sociosqu ad litora torquent per conubia nostra,
                per inceptos himenaeos. Donec commodo ex vitae odio tincidunt
                sodales vel at massa. Nulla facilisi. Etiam cursus varius urna,
                vel mattis sapien venenatis at. Donec et eros eros. Phasellus
                arcu mi, hendrerit eu nibh eu, condimentum iaculis sapien.
                <br /><br />Donec eu blandit elit, in ultrices tellus. Maecenas
                ultricies bibendum sodales. Morbi in tincidunt eros. Vivamus nec
                ipsum suscipit, sagittis libero eget, vehicula leo. Aliquam erat
                volutpat. Donec auctor luctus diam, id finibus neque
                pellentesque vitae. Duis pretium ut velit quis cursus. Aliquam
                vitae leo nec neque luctus gravida. Nulla vestibulum, felis nec
                blandit lobortis, neque nisi aliquam nunc, eget vehicula lectus
                augue interdum leo. Nam vestibulum a sem id ornare. Praesent
                convallis mollis elementum.<br />
              </p>
            </nav>
          </div>
        </div>
        <div class="w-col w-col-6 real-estate-intro">
          <img
            src="assets/images/person2.b2145e19.png"
            loading="lazy"
            alt=""
            class="circle-image about-image"
          />
          <p class="about-grey-text title">
            Kimberly K. <br />Souriyakhamphong<strong><br /></strong>
          </p>
          <p class="about-grey-text title sub-title">
            associate attorney<strong><br /></strong>
          </p>
          <p class="working-with-subtext about-page-subtext">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            aliquam cursus metus, at accumsan massa ornare id. Aliquam facilisis
            ex aliquet, lacinia nunc at, semper nunc. Vivamus vel urna nec quam
            elementum ultricies. Vivamus sed sem venenatis nibh lacinia
            imperdiet sit amet sit amet ex. Nam vehicula venenatis odio, id
            feugiat libero gravida facilisis. Class aptent taciti sociosqu ad
            litora torquent per conubia nostra, per inceptos himenaeos. Donec
            commodo ex vitae odio tincidunt sodales vel at massa. Nulla
            facilisi. Etiam cursus varius urna, vel mattis sapien venenatis at.
            Donec et eros eros. Phasellus arcu mi, hendrerit eu nibh eu,
            condimentum iaculis sapien. <br /><br />Donec eu blandit elit, in
            ultrices tellus. Maecenas ultricies bibendum sodales. Morbi in
            tincidunt eros. Vivamus nec ipsum suscipit, sagittis libero eget,
            vehicula leo. Aliquam erat volutpat. Donec auctor luctus diam, id
            finibus neque pellentesque vitae. Duis pretium ut velit quis cursus.
            Aliquam vitae leo nec neque luctus gravida. Nulla vestibulum, felis
            nec blandit lobortis, neque nisi aliquam nunc, eget vehicula lectus
            augue interdum leo. Nam vestibulum a sem id ornare. Praesent
            convallis mollis elementum.<br />
          </p>
          <div data-hover="false" data-delay="0" class="credentials w-dropdown">
            <div class="credential-title">
              <div class="w-row">
                <div class="w-col w-col-9">
                  <div class="text-credentials">Credentials</div>
                </div>
                <div class="w-col w-col-3" @click="toggle2">
                  <div class="expand">Expand &#x25BC;</div>
                </div>
              </div>
            </div>
            <nav
              v-show="isOpen2"
              id="myDropdown2"
              class="w-dropdown-list credential-exp"
            >
              <p class="working-with-subtext about-page-subtext">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                aliquam cursus metus, at accumsan massa ornare id. Aliquam
                facilisis ex aliquet, lacinia nunc at, semper nunc. Vivamus vel
                urna nec quam elementum ultricies. Vivamus sed sem venenatis
                nibh lacinia imperdiet sit amet sit amet ex. Nam vehicula
                venenatis odio, id feugiat libero gravida facilisis. Class
                aptent taciti sociosqu ad litora torquent per conubia nostra,
                per inceptos himenaeos. Donec commodo ex vitae odio tincidunt
                sodales vel at massa. Nulla facilisi. Etiam cursus varius urna,
                vel mattis sapien venenatis at. Donec et eros eros. Phasellus
                arcu mi, hendrerit eu nibh eu, condimentum iaculis sapien.
                <br /><br />Donec eu blandit elit, in ultrices tellus. Maecenas
                ultricies bibendum sodales. Morbi in tincidunt eros. Vivamus nec
                ipsum suscipit, sagittis libero eget, vehicula leo. Aliquam erat
                volutpat. Donec auctor luctus diam, id finibus neque
                pellentesque vitae. Duis pretium ut velit quis cursus. Aliquam
                vitae leo nec neque luctus gravida. Nulla vestibulum, felis nec
                blandit lobortis, neque nisi aliquam nunc, eget vehicula lectus
                augue interdum leo. Nam vestibulum a sem id ornare. Praesent
                convallis mollis elementum.<br />
              </p>
            </nav>
          </div>
        </div>
      </div>
    </div>
    <div class="why-choose-us about-us-contact-banner wf-section">
      <div class="main-content-container w-container">
        <h1 class="why-choose-us-title-container about-us-dupe">
          Cras Et <br />Fringilla <br />Libero
        </h1>
      </div>
      <div class="wcu-images wcu-section-about w-row">
        <div
          class="wcu-image-one about-image about-image-two w-col w-col-6"
        ></div>
        <div class="wcu-image-one about-image w-col w-col-6"></div>
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
      isOpen1: false,
      isOpen2: false,
    }
  },
  methods: {
    toggle1() {
      this.isOpen1 = !this.isOpen1
      this.isOpen2 = this.isOpen1 ? false : this.isOpen2
      document.getElementById('myDropdown1').classList.toggle('show')
      document.getElementById('myDropdown1').classList.add('w--open')
    },
    toggle2() {
      this.isOpen2 = !this.isOpen2
      this.isOpen1 = this.isOpen2 ? false : this.isOpen1
      document.getElementById('myDropdown2').classList.toggle('show')
      document.getElementById('myDropdown2').classList.add('w--open')
    },
  },
}
</script> 