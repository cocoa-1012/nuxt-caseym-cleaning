<template>
  <div>
    <div class="overlay-section about-us resources r-header w-container">
      <h1 class="hero-text sub-page-hero resources" style="position: relative">
        <img
          src="assets/images/Logo Icon.png"
          loading="lazy"
          alt=""
          class="desktop-view"
          style="position: absolute; left: -80%"
        />
        Contact Us<br />
      </h1>
    </div>
    <div class="resources-top contact wf-section">
      <div class="resources-top-container contact-top attorney w-row">
        <div class="w-col w-col-8">
          <h1 class="resources-title schedule">
            Schedule a<br />Consultation<br />
          </h1>
          <div class="w-form">
            <p class="required-field">REQUIRED FIELDS*</p>
            <form id="email-form" name="email-form" data-name="Email Form">
              <input
                id="name"
                type="text"
                class="w-input"
                maxlength="256"
                name="name"
                data-name="Name"
                placeholder="NAME*"
              />
              <input
                id="email"
                type="email"
                class="w-input"
                maxlength="256"
                name="email"
                data-name="Email"
                placeholder="EMAIL*"
                required=""
              />
              <input
                id="Phone"
                type="tel"
                class="w-input"
                maxlength="256"
                name="Phone"
                data-name="Phone"
                placeholder="PHONE*"
                required=""
              />
              <input
                id="Service-Subject"
                type="text"
                class="w-input"
                maxlength="256"
                name="Service-Subject"
                data-name="Service / Subject"
                placeholder="SERVICE/SUBJECT"
                required=""
              />
              <textarea
                id="Message"
                placeholder="MESSAGE"
                maxlength="5000"
                name="Message"
                data-name="Message"
                class="w-input"
                rows="5"
              ></textarea>
              <div
                style="
                  display: flex;
                  justify-content: flex-end;
                  margin-top: 20px;
                "
              >
                <input
                  type="submit"
                  value="Submit"
                  data-wait="Please wait..."
                  class="button contact w-button submit"
                  style="color: #892432"
                />
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
      <div class="desktop-view contact-image">
        <img
          src="assets/images/Attorney-Contact-Image.png"
          loading="lazy"
          alt=""
        />
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
        <div class="w-col w-col-5">
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
          <a
            href="http://maps.google.com/?q=105 Tivoli St, Abbeville, LA 70510"
            style="text-decoration: none"
          >
            <h1 class="resources-title other address attorney">
              105 Tivoli Street<br />Abbeville, LA
            </h1>
          </a>
          <a href="tel:337-893-3423" style="text-decoration: none">
            <h1 class="resources-title other address attorney">337-893-3423</h1>
          </a>
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
        <a
          href="http://maps.google.com/?q=105 Tivoli St, Abbeville, LA 70510"
          style="text-decoration: none"
        >
          <h1
            class="resources-title other address attorney"
            style="margin-top: 30px"
          >
            105 Tivoli Street<br />Abbeville, LA
          </h1>
        </a>
        <a
          href="tel:337-893-3423"
          style="text-decoration: none; margin-right: 50px; z-index: 800"
        >
          <h1 class="resources-title other address attorney">337-893-3423</h1>
        </a>
      </div>
    </div>
    <AttorneysCarousel />
  </div>
</template>

<style scoped>
input {
  border-radius: 3px;
}
textarea {
  border-radius: 3px;
}
::placeholder {
  font-family: Montserrat;
  font-size: 13px;
  color: #231f20;
  opacity: 1; /* Firefox */
}

:-ms-input-placeholder {
  font-family: Montserrat;
  font-size: 13px;
  color: #231f20;
}

::-ms-input-placeholder {
  font-family: Montserrat;
  font-size: 13px;
  color: #231f20;
}
</style>
