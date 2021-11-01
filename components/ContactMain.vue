<template>
  <div>
    <div class="overlay-section about-us resources contact w-container">
      <h1 class="hero-text sub-page-hero contact-us">Contact Us<br /></h1>
    </div>
    <div class="resources-top contact wf-section">
      <div class="resources-top-container contact-top w-row">
        <div class="w-col w-col-8 w-col-stack">
          <h1 class="resources-title schedule">
            Schedule a<br />Consultation<br />
          </h1>
          <div class="w-form">
            <form id="email-form" name="email-form" data-name="Email Form">
              <input
                id="name"
                type="text"
                class="w-input"
                maxlength="256"
                name="name"
                data-name="Name"
                placeholder="Name"
              />
              <input
                id="email"
                type="email"
                class="w-input"
                maxlength="256"
                name="email"
                data-name="Email"
                placeholder="Email"
                required=""
              />
              <input
                id="Phone"
                type="tel"
                class="w-input"
                maxlength="256"
                name="Phone"
                data-name="Phone"
                placeholder="Phone"
                required=""
              />
              <input
                id="Service-Subject"
                type="text"
                class="w-input"
                maxlength="256"
                name="Service-Subject"
                data-name="Service / Subject"
                placeholder="Service / Subject"
                required=""
              />
              <textarea
                id="Message"
                placeholder="Message"
                maxlength="5000"
                name="Message"
                data-name="Message"
                class="w-input"
                rows="5"
              ></textarea>
              <input
                type="submit"
                value="Submit"
                data-wait="Please wait..."
                class="w-button"
              />
            </form>
            <div class="w-form-done">
              <div>Thank you! Your submission has been received!</div>
            </div>
            <div class="w-form-fail">
              <div>Oops! Something went wrong while submitting the form.</div>
            </div>
          </div>
        </div>
        <div class="w-col w-col-4 w-col-stack desktop-view">
          <img
            src="assets/images/Contact-Image.png"
            loading="lazy"
            sizes="(max-width: 479px) 87vw, (max-width: 767px) 84vw, (max-width: 991px) 500px, 31vw"
            alt=""
            class="contact-image"
          />
        </div>
      </div>
      <div
        class="
          resources-top-container
          other-resources
          contact-bottom
          w-row
          desktop-view
        "
      >
        <div class="column-10 w-col w-col-5">
          <div class="w-embed w-iframe">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3456.1739156630233!2d-92.13768718488652!3d29.9744314819078!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x862367f2016092bf%3A0x916bc0c052053c97!2s105%20Tivoli%20St%2C%20Abbeville%2C%20LA%2070510!5e0!3m2!1sen!2sus!4v1634949420130!5m2!1sen!2sus"
              width="100%"
              height="250"
              style="border: 0"
              allowfullscreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
        <div class="w-col w-col-7">
          <h1 class="resources-title other address">
            105 Tivoli Street<br />Abbeville, LA<br />337-893-3423<br />
          </h1>
        </div>
      </div>
      <div class="map-view mobile-view">
        <div class="w-embed w-iframe">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3456.1739156630233!2d-92.13768718488652!3d29.9744314819078!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x862367f2016092bf%3A0x916bc0c052053c97!2s105%20Tivoli%20St%2C%20Abbeville%2C%20LA%2070510!5e0!3m2!1sen!2sus!4v1634949420130!5m2!1sen!2sus"
            width="100%"
            height="250"
            style="border: 0"
            allowfullscreen=""
            loading="lazy"
          ></iframe>
        </div>
        <h1 class="resources-title other address">
          105 Tivoli Street<br />Abbeville, LA<br />337-893-3423<br />
        </h1>
      </div>
    </div>
    <Carousel />
  </div>
</template>
