<template>
  <div
    class="contact-section about-contact wf-section practice"
    style="background-color: #892432; margin-top: 10px"
  >
    <div
      class="contact-container about-contact-container w-container"
      style="background: #892432; padding-top: 0px"
    >
      <div class="w-row">
        <div class="contact-table w-col w-col-4">
          <img
            src="assets/images/aboutimage2.839e161e.png"
            loading="lazy"
            alt=""
          />
        </div>
        <div class="contact-table w-col w-col-4">
          <img
            src="assets/images/aboutimage1.bd629355.png"
            loading="lazy"
            alt=""
          />
        </div>
        <div class="contact-table w-col w-col-4">
          <img
            src="assets/images/aboutimage2.839e161e.png"
            loading="lazy"
            alt=""
          />
        </div>
      </div>
      <div class="w-row">
        <div class="contact-table w-col w-col-4">
          <p class="contact-section-text about" style="color: white">
            Contact Us <br />Today!<br />
          </p>
        </div>
        <div class="contact-table w-col w-col-8">
          <div class="w-form">
            <form id="email-form" name="email-form" data-name="Email Form">
              <div class="w-row">
                <div class="contact-form-column-two w-col w-col-6">
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
                <div id="field" class="contact-form-column-two w-col w-col-6">
                  <textarea
                    placeholder="MESSAGE"
                    maxlength="5000"
                    rows="6"
                    name="field"
                    data-name="Field"
                    class="textarea w-input"
                  ></textarea>
                  <input
                    type="submit"
                    value="Submit"
                    data-wait="Please wait..."
                    class="button contact w-button today-button"
                    style="background: #fff; color: #4f748c"
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
</template>
