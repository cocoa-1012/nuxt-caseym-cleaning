<template>
<div class="navigation-container wf-section">
    <div class="nav-contain w-row">
      <div class="column-2 w-col w-col-5 w-col-stack w-col-small-small-stack"><img src="assets/images/logo.ce898954.png" loading="lazy" width="245.5" alt="" class="logo"></div>
      <div class="column w-col w-col-7 w-col-stack w-col-small-small-stack">
        <div data-animation="default" data-collapse="medium" data-duration="400" data-easing="ease" data-easing2="ease" role="banner" class="navbar w-nav">
          <div class="container w-container">
            <nav role="navigation" class="w-nav-menu">
              <NuxtLink to="/att-index">
              <a class="nav-link w-nav-link">Home</a>
              </NuxtLink>
              <NuxtLink to="/att-about">
              <a  class="nav-link w-nav-link">About</a>
              </NuxtLink>
              <NuxtLink to="/att-resources">
              <a class="nav-link w-nav-link">Resources</a></NuxtLink>
              <NuxtLink to="/att-faq">
              <a class="nav-link w-nav-link">FAQ</a></NuxtLink>
              <NuxtLink to="/att-contact">
              <a aria-current="page" class="nav-link w-nav-link w--current">Contact</a>
              </NuxtLink>
            </nav>
            <div class="w-nav-button" @click="burgerToggle">
              <div class="w-icon-nav-menu"></div>
            </div>
            <div v-show="burgerOpen" id="w-nav-overlay-0" class="w-nav-overlay" data-wf-ignore="" style="display: block; height: 4042.22px;">
              <nav role="navigation" class="w-nav-menu" style="transform: translateY(0px) translateX(0px); display: none; transition: transform 400ms ease 0s;" data-nav-menu-open="">
                <NuxtLink to="/" class="nav-link w-nav-link w--nav-link-open" style="max-width: 728px;">
                  Home
                </NuxtLink>
                <NuxtLink to="/about" class="nav-link w-nav-link w--nav-link-open" style="max-width: 728px;">
                  About
                </NuxtLink>
                <NuxtLink to="/resources" class="nav-link w-nav-link w--nav-link-open" style="max-width: 728px;">
                  Resources
                </NuxtLink>
                <NuxtLink to="/faq" class="nav-link w-nav-link w--nav-link-open" style="max-width: 728px;">
                  FAQ
                </NuxtLink>
                <NuxtLink to="/contact" class="nav-link w-nav-link w--nav-link-open" style="max-width: 728px;">
                  Contact
                </NuxtLink>
              </nav>
            </div>
          </div>
        </div>
        <div class="w-row">
          <div class="sub-phone attorney left w-col w-col-4 w-col-stack">
            <div data-hover="true" data-delay="0" class="w-dropdown" @click="toggle">
              <div class="dropdown-toggle w-dropdown-toggle">
                <div class="icon w-icon-dropdown-toggle"></div>
                <div class="text-block-4 attorney">Practice Areas</div>
              </div>
              <nav v-show="isOpen" id="myDropdown" class="w-dropdown-list">
                <a href="#" class="w-dropdown-link">Commercial</a>
                <a href="#" class="w-dropdown-link">Title</a>
                <a href="#" class="w-dropdown-link">Settlement</a>
                <a href="#" class="w-dropdown-link">Loan Closing</a>
                <a href="#" class="w-dropdown-link">Residential</a>
                <a href="#" class="w-dropdown-link">Estate Planning</a>
              </nav>
            </div>
          </div>
          <div class="sub-phone attorney w-col w-col-4 w-col-stack">
            <a href="tel:337-893-3423" class="phone-number">337-893-3423</a>
          </div>
          <div class="site-toggle w-col w-col-4 w-col-stack">
            <Nuxt-link to="/">
              <a href="/" class="toggle-button attorney w-button">Attorneys At Law</a>
            </Nuxt-link>
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
        burgerOpen: false,
      };
    },
    methods: {
      toggle() {
        this.isOpen = !this.isOpen;
        document.getElementById("myDropdown").classList.toggle("show");
        document.getElementById("myDropdown").classList.add("w--open");
      },
      burgerToggle() {
        this.burgerOpen = !this.burgerOpen;
        document.getElementById("myDropdown").classList.toggle("show");
        document.getElementById("myDropdown").classList.add("w--open");
      }
    }
  }
</script> 