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
      <div class="resources-top-container attorney w-row">
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
          <h1 class="resources-title other" style="color: #4f748b">
            Documents<br />
          </h1>
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
        <AttorneysResourcesDocumentSection />
        <AttorneysResourcesDocumentSection />
        <AttorneysResourcesDocumentSection />
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
        <AttorneysResourcesDocumentSection />
        <AttorneysResourcesDocumentSection />
        <AttorneysResourcesDocumentSection />
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
        <AttorneysResourcesDocumentSection />
        <AttorneysResourcesDocumentSection />
        <AttorneysResourcesDocumentSection />
        <AttorneysResourcesDocumentSection />
        <AttorneysResourcesDocumentSection />
        <AttorneysResourcesDocumentSection />
      </div>
      <div style="display: flex; max-width: 1230px" class="desktop-view">
        <div style="width: 110px"></div>
        <div style="height: 1px; width: 100vw; background: #000"></div>
        <div style="width: 60px"></div>
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
        style="margin-bottom: 0px"
      >
        <AttorneysContactUsToday />
      </div>
    </div>
    <img
      src="assets/images/Mask Group 26.jpg"
      loading="lazy"
      width="100%"
      height="250px"
      alt=""
      class="mobile-view"
    />
    <Carousel />
    <div class="contact-section about-contact wf-section desktop-view">
      <div
        class="
          contact-container
          about-contact-container
          w-container w-row
          contact-attorney
        "
      >
        <AttorneysContactUsToday />
        <div class="w-col w-col-5">
          <img src="assets/images/Mask Group 26.jpg" loading="lazy" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>
