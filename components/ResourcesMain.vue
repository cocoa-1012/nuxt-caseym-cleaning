<template>
  <div>
    <div class="overlay-section about-us resources r-header w-container">
      <img
        src="assets/images/Logo Icon.png"
        loading="lazy"
        alt=""
        class="desktop-view"
      />
      <h1 class="hero-text sub-page-hero resources">Resources<br /></h1>
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
    <ContactUsToday />
  </div>
</template>
