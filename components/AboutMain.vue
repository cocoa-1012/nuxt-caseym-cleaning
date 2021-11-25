<template>
  <div>
    <div class="page-hero sub-page-hero wf-section">
      <MobileNavPractise />
      <div class="overlay-section about-us w-container desktop-view">
        <h1
          class="hero-text sub-page-hero resources"
          style="position: relative"
        >
          <img
            src="assets/images/Logo Icon.png"
            loading="lazy"
            alt=""
            style="position: absolute; left: -100%"
          />
          About Us<br />
        </h1>
      </div>
      <div
        class="overlay-section attorney-home w-container"
        style="width: 100%; padding: 45px"
      >
        <h1 class="hero-text mobile-view" style="margin-left: 0px">About Us</h1>
      </div>
    </div>
    <AttorneysMobileNavPhone />

    <div
      class="real-estate-title-services-section wf-section"
      style="margin-top: 50px"
    >
      <div class="experienced-attorneys-text about-subtext-hero desktop-view">
        Vestibulum Mattis Laoreet Est, Scelerisque <br />Hehicula Enim Laoreet
      </div>
      <div
        class="
          workingwithtextsection
          real-estate-title-services
          about-page-content
          w-row
        "
      >
        <div class="experienced-attorneys-text about-subtext-hero mobile-view">
          Vestibulum Mattis&nbsp;Laoreet Est, Scelerisque Hehicula Enim Laoreet
        </div>
        <div class="w-col w-col-6 real-estate-intro">
          <img
            src="assets/images/person1.046db6ca.png"
            loading="lazy"
            alt=""
            class="circle-image about-image"
          />
          <p class="about-grey-text title">
            Gabe&nbsp;A.&nbsp;Duhon<strong><br /></strong>

            <span class="about-grey-text title sub-title">
              attorney/owner<strong><br /></strong
            ></span>
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
          <a href="mailto:email@example.com" class="email-direct">
            <img src="assets/images/email.png" loading="lazy" alt="" />
          </a>
          <div data-hover="false" data-delay="0" class="credentials w-dropdown">
            <div class="credential-title">
              <div class="w-row">
                <div class="w-col w-col-9">
                  <div class="text-credentials">Credentials</div>
                </div>
                <div class="w-col w-col-3" @click="toggle1">
                  <div class="expand">
                    <span style="color: #4f748b">Expand</span>
                    &#x25BC;
                  </div>
                </div>
              </div>
            </div>
            <nav class="w-dropdown-credential">
              <p
                id="myDropdown1"
                class="working-with-subtext about-page-subtext"
                style="overflow: hidden; transition: all 0.5s"
              >
                <br />
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
                <br />
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
            Kimberly K. Souriyakhamphong<strong><br /></strong>
            <span class="about-grey-text title sub-title">
              associate&nbsp;attorney<strong><br /></strong>
            </span>
          </p>
          <p class="working-with-subtext about-page-subtext">
            <br />
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
          <a href="mailto:email@example.com" class="email-direct">
            <img src="assets/images/email.png" loading="lazy" alt="" />
          </a>
          <div data-hover="false" data-delay="0" class="credentials w-dropdown">
            <div class="credential-title">
              <div class="w-row">
                <div class="w-col w-col-9">
                  <div class="text-credentials">Credentials</div>
                </div>
                <div class="w-col w-col-3" @click="toggle2">
                  <div class="expand">
                    <span style="color: #4f748b">Expand</span> &#x25BC;
                  </div>
                </div>
              </div>
            </div>
            <nav class="w-dropdown-credential">
              <p
                id="myDropdown2"
                class="working-with-subtext about-page-subtext"
                style="overflow: hidden; transition: all 0.5s"
              >
                <br />
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
                <br />
              </p>
            </nav>
          </div>
        </div>
      </div>
    </div>
    <div class="contact-section about-contact wf-section mobile-view">
      <div class="contact-container about-contact-container w-container">
        <ContactUsToday />
      </div>
    </div>
    <div class="contact-table mobile-view">
      <img src="assets/images/about-contact-3.png" loading="lazy" alt="" />
    </div>
    <div
      class="why-choose-us about-us-contact-banner wf-section"
      style="margin-top: -30px; margin-bottom: 30px"
    >
      <div class="main-content-container w-container">
        <h1 class="why-choose-us-title-container about-us-dupe">
          Cras Et <br />Fringilla <br />Libero <br />
          <br />
          <NuxtLink to="/contact">
            <button>Contact Us Today</button>
          </NuxtLink>
        </h1>
      </div>
      <div class="wcu-images wcu-section-about w-row">
        <div
          class="wcu-image-one about-image real about-image-two w-col w-col-6"
        ></div>
        <div class="wcu-image-one about-image real w-col w-col-6"></div>
      </div>
    </div>
    <Carousel />
    <div class="contact-section about-contact wf-section desktop-view">
      <div class="contact-container about-contact-container w-container">
        <div class="w-row">
          <div class="contact-table w-col w-col-4">
            <img
              src="assets/images/resources-contact-3.png"
              loading="lazy"
              alt=""
            />
          </div>
          <div class="contact-table w-col w-col-4">
            <img
              src="assets/images/about-contact-2.png"
              loading="lazy"
              alt=""
            />
          </div>
          <div class="contact-table w-col w-col-4">
            <img
              src="assets/images/about-contact-3.png"
              loading="lazy"
              alt=""
            />
          </div>
        </div>
        <ContactUsToday />
      </div>
    </div>
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
      if (this.isOpen1) {
        document.getElementById('myDropdown1').style.maxHeight = '600px'
        document.getElementById('myDropdown1').style.paddingTop = '0px'
        document.getElementById('myDropdown2').style.maxHeight = '0px'
        document.getElementById('myDropdown2').style.paddingTop = '0px'
      } else {
        document.getElementById('myDropdown1').style.maxHeight = '0px'
        document.getElementById('myDropdown1').style.paddingTop = '0px'
      }
    },
    toggle2() {
      this.isOpen2 = !this.isOpen2
      this.isOpen1 = this.isOpen2 ? false : this.isOpen1
      if (this.isOpen2) {
        document.getElementById('myDropdown2').style.maxHeight = '600px'
        document.getElementById('myDropdown2').style.paddingTop = '0px'
        document.getElementById('myDropdown1').style.maxHeight = '0px'
        document.getElementById('myDropdown1').style.paddingTop = '0px'
      } else {
        document.getElementById('myDropdown2').style.maxHeight = '0px'
        document.getElementById('myDropdown2').style.paddingTop = '0px'
      }
    },
  },
}
</script> 