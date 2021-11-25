<template>
  <div>
    <div class="page-hero home attorney wf-section">
      <AttorneysMobileNavPractise />
      <div class="overlay-section attorney-home w-container">
        <img
          src="assets/images/Logo Icon.png"
          loading="lazy"
          alt=""
          class="desktop-view"
        />
        <h1 class="hero-text desktop-view">
          Experienced&nbsp;and Local<br />Attorneys Here for You
        </h1>
        <h1 class="hero-text mobile-view">
          Experienced&nbsp;and Local&nbsp;Attorneys Here&nbsp;for&nbsp;You
        </h1>
      </div>
    </div>
    <AttorneysMobileNavPhone />
    <AttorneysHomeCarousel />
    <div
      class="why-choose-us attorney wf-section"
      style="position: relative; align-items: center"
    >
      <div class="wcu-images attorney w-row" style="max-width: 1230px">
        <div class="wcu-image-one-attr w-col w-col-6 desktop-view"></div>
        <div class="wcu-image-two-attr w-col w-col-6"></div>
      </div>
      <h1 class="why-choose-us-title-container attorney">WHO WE ARE</h1>
    </div>
    <div class="about-grey attorney wf-section">
      <div class="about-grey-text-section attorney w-row">
        <div class="w-col w-col-7">
          <p class="about-grey-text attorney" style="width: 90%">
            At the law office of Gabe A. Duhon, LLC, attorneys Gabe A. Duhon and
            Wyman E. Bankston are proud to serve the citizens of Abbeville,
            Livingston and the rest of Acadiana with personalized local service
            since 2006.<strong><br /></strong>
          </p>
        </div>
        <div class="w-col w-col-5">
          <p class="working-with-subtext attr">
            We understand when faced with a legal situation it can be a
            stressful and confusing time and may leave you wondering if you need
            an atorney. Don't let the greed and callous demeanor of other law
            firms deter you from seeking the professional legal services you
            deserve. Contact Gabe A. Duhon, LLC today, we can serve all of your
            legal needs.
            <br /><br />Our experienced lawyers practices a variety of legal
            services and can navigate through any complex and stressful legal
            setting. Whether you are seeking legal advice or representation for
            auto accidents, personal injury, real estate, criminal defense,
            family law, or willls, you can feel confident that our attorneys
            will have your best interests in mind.<br />
          </p>
        </div>
      </div>
    </div>
    <div class="wcu-image-one-attr w-col w-col-6 mobile-view"></div>
    <div class="attorneys-meet-container">
      <div class="w-row">
        <div class="w-col w-col-6">
          <p class="meet-description">
            When facing any legal situation, you can feel sure that our
            experienced attorneys will always be working to help you. Our
            attorneys Gabe A. Duhon and Wyman E. Bankston are proud to be an
            active member in the community, with membershop and volunteer
            experience in many different programs.
          </p>
          <div class="w-col w-col-6 w-col-medium-3 spec01">
            <img
              src="assets/images/person1.046db6ca.png"
              loading="lazy"
              alt=""
              width="50%"
              class="circle-image"
            />
            <p class="about-grey-text title meet">
              Gabe&nbsp;A.&nbsp;Duhon<strong><br /></strong>
            </p>
            <p class="about-grey-text title sub-title meet">
              attorney/owner<strong><br /></strong>
            </p>
          </div>
          <div class="w-col w-col-6 w-col-medium-3 second-image">
            <img
              src="assets/images/person2.b2145e19.png"
              loading="lazy"
              alt=""
              width="50%"
              class="circle-image"
            />
            <p class="about-grey-text title meet">
              Kimberly K. Souriyakhamphong<strong><br /></strong>
            </p>
            <p class="about-grey-text title sub-title meet">
              associate&nbsp;attorney<strong><br /></strong>
            </p>
            <a
              href="#"
              class="button w-button desktop-view"
              style="
                background: #892432;
                position: absolute;
                bottom: -110px;
                right: 150px;
              "
            >
              <strong>MEET&nbsp;OUR&nbsp;ATTORNEYS</strong>
            </a>
          </div>
        </div>
        <div class="w-col w-col-6 attr-home-sidebar"><Carousel-meet /></div>
      </div>
    </div>
  </div>
</template>
