<template>
  <div>
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
      <div
        class="resources-top-container other-resources final section-1 w-row"
      >
        <ResourcesDocumentSection />
        <ResourcesDocumentSection />
        <ResourcesDocumentSection />
      </div>
      <div
        class="resources-top-container other-resources final section-2 w-row"
      >
        <ResourcesDocumentSection />
        <ResourcesDocumentSection />
        <ResourcesDocumentSection />
      </div>
    </div>
    <Carousel />
    <div class="contact-section about-contact wf-section">
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
