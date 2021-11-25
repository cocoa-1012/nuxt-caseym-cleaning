<template>
  <div>
    <MobileNavPractiseFaq />
    <div class="overlay-section about-us resources r-header w-container">
      <h1 class="hero-text sub-page-hero resources" style="position: relative">
        <img
          src="assets/images/Logo Icon.png"
          loading="lazy"
          alt=""
          class="desktop-view"
          style="position: absolute; left: -100%"
        />
        Resources<br />
      </h1>
    </div>
    <MobileNavPhone />
    <div class="resources-top wf-section">
      <div class="resources-top-container w-row">
        <div class="w-col w-col-5">
          <h1 class="resources-title covid">Covid-19 Policy<br /></h1>
        </div>
        <div class="w-col w-col-7">
          <p class="resources-page-subtext">
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
            condimentum iaculis sapien. <br />
          </p>
        </div>
      </div>
      <div class="resources-top-container other-resources w-row">
        <div class="w-col w-col-5">
          <h1 class="resources-title other">Documents<br /></h1>
        </div>
        <div class="w-col w-col-7">
          <p class="resources-page-subtext other">
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
            condimentum iaculis sapien. <br />
          </p>
        </div>
      </div>

      <div style="display: flex; max-width: 1230px" class="desktop-view">
        <div style="width: 110px"></div>
        <div style="height: 1px; width: 100vw; background: #000"></div>
        <div style="width: 60px"></div>
      </div>

      <div
        class="
          resources-top-container
          other-resources
          final
          w-row
          resources-items
          desktop-view
        "
      >
        <ResourcesDocumentSection />
        <ResourcesDocumentSection />
        <ResourcesDocumentSection />
      </div>
      <div
        class="
          resources-top-container
          other-resources
          final
          w-row
          resources-items
          desktop-view
        "
      >
        <ResourcesDocumentSection />
        <ResourcesDocumentSection />
        <ResourcesDocumentSection />
      </div>
      <div
        class="
          resources-top-container
          other-resources
          final
          w-row
          resources-items
          spec12
        "
      >
        <hr />
        <ResourcesDocumentSection />
        <ResourcesDocumentSection />
        <ResourcesDocumentSection />
        <ResourcesDocumentSection />
        <ResourcesDocumentSection />
        <ResourcesDocumentSection />
        <hr />
      </div>
      <div style="display: flex; max-width: 1230px" class="desktop-view">
        <div style="width: 110px"></div>
        <div style="height: 1px; width: 100vw; background: #000"></div>
        <div style="width: 60px"></div>
      </div>
    </div>
    <div class="contact-section about-contact wf-section mobile-view">
      <div class="contact-container about-contact-container w-container">
        <ContactUsToday />
      </div>
    </div>
    <div class="contact-table mobile-view">
      <img src="assets/images/faq-contact-2.png" loading="lazy" alt="" />
    </div>
    <div
      class="why-choose-us about-us-contact-banner wf-section mobile-view"
      style="margin-bottom: 50px"
    >
      <div class="main-content-container w-container">
        <h1 class="why-choose-us-title-container about-us-dupe">
          Cras Et <br />Fringilla <br />Libero <br />
          <br />
          <button>Contact Us Today</button>
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
              src="assets/images/resources-contact-1.png"
              loading="lazy"
              alt=""
            />
          </div>
          <div class="contact-table w-col w-col-4">
            <img
              src="assets/images/resources-contact-2.png"
              loading="lazy"
              alt=""
            />
          </div>
          <div class="contact-table w-col w-col-4">
            <img
              src="assets/images/resources-contact-3.png"
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
