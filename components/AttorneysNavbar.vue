<template>
  <div class="navigation-container wf-section">
    <div class="nav-contain w-row">
      <div class="column-2 w-col w-col-5 w-col-stack nav-bar-group">
        <NuxtLink to="/att-index" class="nav-bar-logo">
          <img src="assets/images/logo.ce898954.png" loading="lazy" alt="" />
        </NuxtLink>
        <div class="w-nav-button" @click="burgerToggle">
          <div class="w-icon-nav-menu"></div>
        </div>
        <div
          v-show="burgerOpen"
          id="w-nav-overlay-0"
          class="w-nav-overlay"
          data-wf-ignore=""
          style="display: block; height: 4042.22px"
        >
          <nav role="navigation" class="w-nav-menu" data-nav-menu-open="">
            <NuxtLink
              to="/att-index"
              class="nav-link w-nav-link w--nav-link-open"
              style="max-width: 728px"
            >
              Homes
            </NuxtLink>
            <NuxtLink
              to="/att-about"
              class="nav-link w-nav-link w--nav-link-open"
              style="max-width: 728px"
            >
              About
            </NuxtLink>
            <NuxtLink
              to="/att-resources"
              class="nav-link w-nav-link w--nav-link-open"
              style="max-width: 728px"
            >
              Resources
            </NuxtLink>
            <NuxtLink
              to="/att-faq"
              class="nav-link w-nav-link w--nav-link-open"
              style="max-width: 728px"
            >
              FAQ
            </NuxtLink>
            <NuxtLink
              to="/att-contact"
              class="nav-link w-nav-link w--nav-link-open"
              style="max-width: 728px"
            >
              Contact
            </NuxtLink>
          </nav>
        </div>
      </div>
      <div class="column w-col w-col-7 w-col-stack w-col-small-small-stack">
        <div
          data-animation="default"
          data-collapse="medium"
          data-duration="400"
          data-easing="ease"
          data-easing2="ease"
          role="banner"
          class="navbar w-nav"
        >
          <div class="container w-container nav-menu-responsive">
            <nav role="navigation" class="w-nav-menu">
              <NuxtLink to="/att-index">
                <a class="nav-link w-nav-link">Home</a>
              </NuxtLink>
              <NuxtLink to="/att-about">
                <a class="nav-link w-nav-link">About</a>
              </NuxtLink>
              <NuxtLink to="/att-resources">
                <a class="nav-link w-nav-link">Resources</a>
              </NuxtLink>
              <NuxtLink to="/att-faq">
                <a class="nav-link w-nav-link">FAQ</a>
              </NuxtLink>
              <NuxtLink to="/att-contact">
                <a aria-current="page" class="nav-link w-nav-link"> Contact </a>
              </NuxtLink>
              <button
                class="nav-link w-nav-link"
                style="background: none"
                @click="showModal = true"
              >
                <img
                  src="assets/images/search.png"
                  loading="lazy"
                  alt=""
                  width="20px"
                />
              </button>
              <NuxtLink to="/att-index">
                <a aria-current="page" class="nav-link w-nav-link">
                  <img
                    src="assets/images/Facebook-logo-gray.png"
                    loading="lazy"
                    alt=""
                    width="20px"
                  />
                </a>
              </NuxtLink>
            </nav>
          </div>
        </div>
        <div class="w-row">
          <div class="sub-phone attorney left w-col w-col-3 w-col-stack">
            <div
              data-hover="true"
              data-delay="0"
              class="w-dropdown"
              @mouseover="mouseOver"
              @mouseout="mouseOut"
              @click="toggle"
            >
              <div class="dropdown-toggle w-dropdown-toggle">
                <div class="icon w-icon-dropdown-toggle"></div>
                <div class="text-block-4 attorney">Practice Areas</div>
              </div>
              <nav
                v-show="isOpen"
                id="myDropdown"
                class="w-dropdown-list attorney"
              >
                <div class="w-dropdown-list-sub">
                  <NuxtLink
                    to="/att-practise-area"
                    style="text-decoration: none"
                  >
                    <p class="w-dropdown-link">adoption</p>
                  </NuxtLink>
                  <NuxtLink
                    to="/att-practise-area"
                    style="text-decoration: none"
                  >
                    <p class="w-dropdown-link">family law</p>
                  </NuxtLink>
                  <NuxtLink
                    to="/att-practise-area"
                    style="text-decoration: none"
                  >
                    <p class="w-dropdown-link">divorce</p>
                  </NuxtLink>
                  <NuxtLink
                    to="/att-practise-area"
                    style="text-decoration: none"
                  >
                    <p class="w-dropdown-link">wills/succession</p>
                  </NuxtLink>
                  <NuxtLink
                    to="/att-practise-area"
                    style="text-decoration: none"
                  >
                    <p class="w-dropdown-link">criminal defense</p>
                  </NuxtLink>
                  <NuxtLink
                    to="/att-practise-area"
                    style="text-decoration: none"
                  >
                    <p class="w-dropdown-link">personal injury</p>
                  </NuxtLink>
                </div>
                <div class="w-dropdown-list-sub">
                  <NuxtLink
                    to="/att-practise-area"
                    style="text-decoration: none"
                  >
                    <p class="w-dropdown-link">dui.dwi</p>
                  </NuxtLink>
                  <NuxtLink
                    to="/att-practise-area"
                    style="text-decoration: none"
                  >
                    <p class="w-dropdown-link">workers' comp</p>
                  </NuxtLink>
                  <NuxtLink
                    to="/att-practise-area"
                    style="text-decoration: none"
                  >
                    <p class="w-dropdown-link">auto</p>
                  </NuxtLink>
                  <NuxtLink
                    to="/att-practise-area"
                    style="text-decoration: none"
                  >
                    <p class="w-dropdown-link">1b-wheeler accident</p>
                  </NuxtLink>
                  <NuxtLink
                    to="/att-practise-area"
                    style="text-decoration: none"
                  >
                    <p class="w-dropdown-link">maritime</p>
                  </NuxtLink>
                  <NuxtLink
                    to="/att-practise-area"
                    style="text-decoration: none"
                  >
                    <p class="w-dropdown-link">
                      irrevocable/<br />
                      revocable trust
                    </p>
                  </NuxtLink>
                </div>
              </nav>
            </div>
          </div>
          <div
            class="
              sub-phone sub-phone-number
              attorney
              w-col w-col-4 w-col-stack
            "
          >
            <a href="tel:337-893-3423" class="phone-number">337-893-3423</a>
          </div>
          <div class="site-toggle w-col w-col-5 w-col-stack">
            <Nuxt-link to="/">
              <a href="/" class="toggle-button attorney w-button">
                <p>Real Estate</p>
                <hr size="2" width="30%" />
              </a>
            </Nuxt-link>
          </div>
        </div>
      </div>
    </div>
    <SavedModal v-show="showModal" @close-modal="showModal = false" />
  </div>
</template>

<script>
import SavedModal from '~/components/SavedModal.vue'
export default {
  components: {
    SavedModal,
  },
  data() {
    return {
      isOpen: false,
      burgerOpen: false,
      showModal: false,
    }
  },
  methods: {
    toggle() {
      this.isOpen = !this.isOpen
      document.getElementById('myDropdown').classList.toggle('show')
      document.getElementById('myDropdown').classList.add('w--open')
    },
    mouseOver() {
      this.isOpen = true
      document.getElementById('myDropdown').classList.toggle('show')
      document.getElementById('myDropdown').classList.add('w--open')
    },
    mouseOut() {
      this.isOpen = false
    },
    burgerToggle() {
      this.burgerOpen = !this.burgerOpen
      document.getElementById('myDropdown').classList.toggle('show')
      document.getElementById('myDropdown').classList.add('w--open')
    },
  },
}
</script> 