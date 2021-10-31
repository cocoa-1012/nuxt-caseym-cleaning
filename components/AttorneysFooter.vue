<template>
  <div class="footer wf-section">
    <div class="main-content-container w-container">
      <div class="experienced-attorneys-text attorneys footer-font">
        Experienced and Local Attorneys Here for You
      </div>
      <div class="footer-content w-row">
        <div class="w-col w-col-4"></div>
        <div class="w-col w-col-8">
          <div class="w-col w-col-3">
            <p class="footer-text">
              <span class="footer-sub-title">OFFICE</span><br />105 Tivoli
              Street<br />Abbeville, LA<br />337-893-3423<br />
            </p>
          </div>
          <div class="w-col w-col-3">
            <p class="footer-text linked">
              <span class="footer-sub-title">CONTACT</span
              ><br />Disclaimer<br />Sitemap<br />Privacy policy<br />
            </p>
          </div>
          <div class="w-col w-col-6">
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
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
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