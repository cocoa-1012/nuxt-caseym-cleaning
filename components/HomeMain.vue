<template>
  <div class="home-mobile">
    <div class="page-hero home wf-section">
      <div class="overlay-section w-container home" style="padding-right: 50px">
        <img
          src="assets/images/Logo Icon.png"
          loading="lazy"
          alt=""
          class="desktop-view"
        />
        <h1 class="hero-text desktop-view">
          Experienced&nbsp;and&nbsp;Local<br />Attorneys&nbsp;Here&nbsp;for&nbsp;You
        </h1>

        <h1 class="hero-text mobile-view">
          Experienced&nbsp;and Local&nbsp;Attorneys Here&nbsp;for&nbsp;You
        </h1>
      </div>
    </div>
    <HomeCarousel />
    <div class="w-col mobile-contact-form">
      <div style="display: flex; justify-content: space-between">
        <p style="font-size: 20px">CONTACT US</p>
      </div>
      <div>
        <form id="email-form" name="email-form" data-name="Email Form">
          <div class="w-col w-col-6 contact-us-group">
            <input
              id="name"
              type="text"
              class="w-input"
              maxlength="256"
              name="name"
              data-name="Name"
              placeholder="NAME"
            />
            <input
              id="email"
              type="email"
              class="w-input"
              maxlength="256"
              name="email"
              data-name="Email"
              placeholder="EMAIL"
              required=""
            />
            <input
              id="Phone"
              type="tel"
              class="w-input"
              maxlength="256"
              name="Phone"
              data-name="Phone"
              placeholder="PHONE"
              required=""
            />
          </div>
          <div class="contact-form-column-two w-col w-col-6">
            <textarea
              id="field"
              placeholder="MESSAGE"
              maxlength="5000"
              name="field"
              rows="6"
              class="textarea w-input"
            ></textarea>
            <!-- <input
                      type="submit"
                      value="Submit"
                      data-wait="Please wait..."
                      class="button contact w-button submit"
                    /> -->
          </div>
        </form>
        <div class="w-form-done">
          <div>Thank you! Your submission has been received!</div>
        </div>
        <div class="w-form-fail">
          <div>Oops! Something went wrong while submitting the form.</div>
        </div>
      </div>
    </div>
    <br />
    <div class="why-choose-us wf-section desktop-view">
      <div class="wcu-images w-row">
        <div class="column-6 w-col w-col-4"></div>
        <div class="wcu-image-one w-col w-col-5"></div>
        <div class="wcu-image-two w-col w-col-3"></div>
      </div>
      <h1 class="why-choose-us-title-container">Why Choose Us</h1>
    </div>
    <div class="why-choose-us wf-section mobile-view">
      <div class="wcu-images w-row">
        <div class="wcu-image-one-home w-col w-col-3"></div>
      </div>
      <h1 class="why-choose-us-title-container">Why <br />Choose Us</h1>
    </div>
    <div class="about-grey home-mobile wf-section">
      <div class="about-grey-text-section w-row">
        <div class="w-col w-col-6 w-col-medium-6">
          <p class="about-grey-text">
            At the law office of Gabe A. Duhon, LLC, attorneys Gabe A. Duhon and
            Wyman E. Bankston are proud to serve the citizens of Abbeville,
            Livingston and the rest of Acadiana with personalized local service
            since 2006.<strong><br /></strong>
          </p>
          <a
            href="about.html"
            class="button w-button desktop-view"
            style="width: fit-content"
          >
            <strong>MEET OUR ATTORNEYS</strong>
          </a>
        </div>
        <div class="column-7 w-col w-col-3 w-col-medium-3">
          <img
            src="assets/images/person1.046db6ca.png"
            loading="lazy"
            alt=""
            class="circle-image"
          />
          <p class="about-grey-text title">
            Gabe&nbsp;A.&nbsp;Duhon<strong><br /></strong>

            <span class="about-grey-text title sub-title">
              attorney/owner<strong><br /></strong
            ></span>
          </p>
        </div>
        <div class="column-9 w-col w-col-3 w-col-medium-3 second-image">
          <img
            src="assets/images/person2.b2145e19.png"
            loading="lazy"
            alt=""
            class="circle-image"
          />
          <p class="about-grey-text title">
            Kimberly K. Souriyakhamphong<strong><br /></strong>
            <span class="about-grey-text title sub-title">
              associate&nbsp;attorney<strong><br /></strong>
            </span>
          </p>
        </div>
      </div>
    </div>
    <div class="why-choose-us wf-section mobile-view">
      <div class="wcu-images w-row">
        <div class="wcu-image-two w-col w-col-3"></div>
      </div>
      <div style="height: 190px"></div>
    </div>
    <div class="contact-section wf-section">
      <div class="contact-container w-container home-contact-container">
        <div class="w-row home-contact-form">
          <div class="w-col w-col-4">
            <p class="contact-section-text description padding">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              aliquam cursus metus, at accumsan massa ornare id. Aliquam
              facilisis ex aliquet, lacinia nunc at, semper nunc. Vivamus vel
              urna nec quam elementum ultricies. Vivamus sed sem venenatis nibh
              lacinia imperdiet sit amet sit amet ex. Nam vehicula venenatis
              odio, id feugiat libero gravida facilisis. Class aptent taciti
              sociosqu ad litora torquent per conubia nostra, per inceptos
              himenaeos. <br />
              Donec commodo ex vitae odio tincidunt sodales vel at massa. Nulla
              facilisi. Etiam cursus varius urna, vel mattis sapien venenatis
              at. Donec et eros eros. Phasellus arcu mi, hendrerit eu nibh eu,
              condimentum iaculis sapien.<br />
            </p>
            <p class="contact-section-text description padding mobile-view">
              Donec eu blandit elit, in ultrices tellus. Maecenas ultricies
              bibendum sodales. Morbi in tincidunt eros. Vivamus nec ipsum
              suscipit, sagittis libero eget, vehicula leo. Aliquam erat
              volutpat. Donec auctor luctus diam, id finibus neque pellentesque
              vitae. Duis pretium ut velit quis cursus. Aliquam vitae leo nec
              neque luctus gravida. Nulla vestibulum, felis nec blandit
              lobortis, neque nisi aliquam nunc, eget vehicula lectus augue
              interdum leo. Nam vestibulum a sem id ornare. Praesent convallis
              mollis elementum.<br />
            </p>
          </div>
          <div class="w-col w-col-8 main-contact-form">
            <p class="contact-us-title description">
              Contact Us<strong><br /></strong>
            </p>
            <div class="w-form">
              <form id="email-form" name="email-form" data-name="Email Form">
                <div class="w-row">
                  <div
                    class="
                      contact-form-column-two
                      w-col w-col-6
                      contact-us-group
                    "
                  >
                    <input
                      id="name"
                      type="text"
                      class="w-input"
                      maxlength="256"
                      name="name"
                      data-name="Name"
                      placeholder="NAME"
                    />
                    <input
                      id="email"
                      type="email"
                      class="w-input"
                      maxlength="256"
                      name="email"
                      data-name="Email"
                      placeholder="EMAIL"
                      required=""
                    />
                    <input
                      id="Phone"
                      type="tel"
                      class="w-input"
                      maxlength="256"
                      name="Phone"
                      data-name="Phone"
                      placeholder="PHONE"
                      required=""
                    />
                  </div>
                  <div class="contact-form-column-two w-col w-col-6">
                    <textarea
                      id="field"
                      placeholder="MESSAGE"
                      maxlength="5000"
                      name="field"
                      rows="6"
                      class="textarea w-input"
                    ></textarea>
                    <input
                      type="submit"
                      value="Submit"
                      data-wait="Please wait..."
                      class="button contact w-button submit"
                      style="text-align: right"
                    />
                  </div>
                </div>
              </form>
              <div class="w-form-done">
                <div>Thank you! Your submission has been received!</div>
              </div>
              <div class="w-form-fail">
                <div>Oops! Something went wrong while submitting the form.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="real-estate-title-services-section wf-section">
      <div class="workingwithtextsection real-estate-title-services w-row">
        <div class="w-col w-col-4">
          <h1 class="working-with-header regular-font" style="margin-top: 0px">
            Our Real <br />Estate Title <br />Services
          </h1>
        </div>
        <div class="w-col w-col-8">
          <p class="working-with-subtext">
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
        </div>
      </div>
    </div>
  </div>
</template>
