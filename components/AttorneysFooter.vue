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
                Street<br />Abbeville, LA<br />
              </p>
            </a>
            <a href="tel:337-893-3423" style="text-decoration: none">
              <p class="footer-text">337-893-3423</p>
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
              <span class="footer-sub-title"> PRIVACY POLICY </span>
              <br />‍Purpose<br />Federal and state laws and regulations require
              Gabe A. Duhon, L.L.C. (“the Company”) to disclose how it collects,
              shares, and protects any personal information obtained during the
              course of normal business operations. This Privacy Policy and
              Notice is to be distributed pursuant to Title V of the
              Gramm-Leach-Bliley Act (GLBA). Any information collected will only
              be used in accordance with this privacy statement.<br />
            </p>
            <p v-show="isOpen" class="footer-text" style="margin-top: 20px">
              Personal Information<br />
              The types of information collected may depend upon the services or
              products provided. Information collected may include, but is not
              limited to:
            </p>
            <p v-show="isOpen" class="footer-text" style="margin-left: 20px">
              • Driver's License Numbers;<br />
              • Social Security Numbers:<br />
              • Phone Numbers; <br />
              • Property and Mailing Address(es);<br />
              • Account Numbers, including bank accounts and mortgage accounts;
              <br />
              • Credit Card Numbers;<br />
              • Full Legal Names; <br />
              • Marital Status <br />
            </p>
            <p v-show="isOpen" class="footer-text">
              This nonpublic, personal information may be collected from a
              variety of sources including, but not limited to:
            </p>
            <p v-show="isOpen" class="footer-text" style="margin-left: 20px">
              • Information on loan applications;<br />
              • Information from our files, or other files regarding legal
              transactions;
              <br />
              • Information from consumer reporting agencies, real estate
              agents, or lenders;
              <br />
              • Information from Investigators and/or investigative services.
              <br />
            </p>
            <p v-show="isOpen" class="footer-text">
              Disclosure of Personal Information The Company may need to share
              personal information in the process of handling and completing a
              transaction and maintaining customer/client accounts. This
              information may be disclosed to both affiliated and non-affiliated
              companies that perform services on behalf of the Company, as
              permitted by law. These companies include:
            </p>
            <p v-show="isOpen" class="footer-text" style="margin-left: 20px">
              • Title abstractors; <br />
              • Legal counsel; <br />
              • Contract closers;<br />
              • Survey companies; <br />
              • Real estate lien holders;<br />
              • Private Investigators.<br />
            </p>
            <p v-show="isOpen" class="footer-text">
              The Company may also disclose personal information when necessary
              to comply with the law; protect the safety of consumers,
              employees, or property; and/or to comply with judicial
              proceedings, court orders, or the legal process.<br />
              In-House Protection The Company restricts the sharing of personal
              information to employees and staff that need the information to
              provide services required to process a transaction. Physical,
              electronic, and process safeguards are in place to protect
              personal information and to comply with regulations and industry
              standards. <br />
              <br />
            </p>
            <p v-show="isOpen" class="footer-text">
              Privacy Policy & Notice Questions
            </p>
            <p v-show="isOpen" class="footer-text">
              Questions regarding this Policy should be directed to:
            </p>
            <p v-show="isOpen" class="footer-text" style="margin-left: 20px">
              Gabe A. Duhon, Owner<br />
              P.O. Box 478<br />
              Abbeville, Louisiana 70511-0478
            </p>
            <div class="w-col w-col-3" @click="toggle">
              <div class="footer-expand">
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