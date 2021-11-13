<template>
  <div class="footer wf-section">
    <div class="main-content-container w-container">
      <div class="experienced-attorneys-text attorneys footer-font">
        Experienced and Local Attorneys Here for You
      </div>
      <div class="footer-content w-row">
        <div class="w-col w-col-4">
          <img
            src="assets/images/Full Logo.png"
            loading="lazy"
            alt=""
            width="90%"
            class="desktop-view"
          />
        </div>
        <div class="w-col w-col-8 footer-parent">
          <div class="w-col w-col-3 footer-child">
            <a
              href="http://maps.google.com/?q=105 Tivoli St, Abbeville, LA 70510"
              style="text-decoration: none"
            >
              <p class="footer-text">
                <span class="footer-sub-title">OFFICE</span><br />105 Tivoli
                Street<br />Abbeville, LA<br />337-893-3423<br />
              </p>
            </a>
            <a
              href="https://facebook.com/VERMILIONLAWYERS/"
              style="cursor: pointer"
            >
              <img
                src="assets/images/Facebook-logo-gray.png"
                loading="lazy"
                alt=""
                width="20%"
                class="desktop-view"
              />
            </a>
          </div>
          <div class="w-col w-col-3 footer-child second">
            <p class="footer-text linked">
              <span>Contact</span><br />Disclaimer<br />Sitemap<br />Privacy
              policy<br />
            </p>
          </div>
          <div class="w-col w-col-6 footer-policy">
            <p class="footer-text">
              <span class="footer-sub-title">PRIVACY POLICY</span
              ><br />‍Purpose<br />‍Federal and state laws and regulations
              require Gabe A. Duhon, L.L.C. (“the Company”) to disclose how it
              collects, shares, and protects any personal information obtained
              during the course of normal business operations. This Privacy
              Policy and Notice is to be distributed pursuant to Title V of the
              Gramm-Leach-Bliley Act (GLBA). Any information collected will only
              be used in accordance with this privacy statement.<br />
            </p>
            <p v-show="isOpen" class="footer-text">
              Through discussions with management and review of available
              information, identify the institution’s information sharing
              practices (and changes to those practices) with affiliates and
              nonaffiliated third parties; how it treats nonpublic personal
              information; and how it administers opt-outs.
            </p>
            <div class="w-col w-col-3" @click="toggle">
              <div class="expand" style="text-align: left; margin-bottom: 20px">
                {{ expandText }}
                {{ isOpen ? `&#x25B2;` : `&#x25BC;` }}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-show="isOpenContact" class="w-col footer-contact-form attorney">
        <div style="display: flex; justify-content: space-between">
          <p class="contact-us-title description">
            Schedule a Consultation<strong><br /></strong>
          </p>
          <p class="close-button" @click="isOpenContact = false">&times;</p>
        </div>
        <div class="">
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
              <input
                type="submit"
                value="Submit"
                data-wait="Please wait..."
                class="button contact w-button submit"
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
      <div
        v-show="!isOpenContact"
        class="w-col footer-contact-form-title attorney"
        @click="isOpenContact = true"
      >
        <p class="contact-us-title description">
          Schedule a consultation<strong><br /></strong>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
      isOpenContact: false,
      expandText: 'Expand',
    }
  },
  methods: {
    toggle() {
      this.expandText = this.isOpen ? 'Expand' : 'Close'
      this.isOpen = !this.isOpen
    },
  },
}
</script> 