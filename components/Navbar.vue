<template>
<div class="navigation-container wf-section">
    <div class="nav-contain w-row">
      <div class="column-2 w-col w-col-5 w-col-stack w-col-small-small-stack"><img src="assets/images/logo.ce898954.png" loading="lazy" width="245.5" alt="" class="logo"></div>
      <div class="column w-col w-col-7 w-col-stack w-col-small-small-stack">
        <div data-animation="default" data-collapse="medium" data-duration="400" data-easing="ease" data-easing2="ease" role="banner" class="navbar w-nav">
          <div class="container w-container">
            <nav role="navigation" class="w-nav-menu">
              <NuxtLink to="/">
              <a href="#" class="nav-link w-nav-link">Home</a>
              </NuxtLink>
              <NuxtLink to="/about">
              <a href="#" class="nav-link w-nav-link">About</a>
              </NuxtLink>
              <NuxtLink to="/resources">
              <a href="#" class="nav-link w-nav-link">Resources</a></NuxtLink>
              <NuxtLink to="/faq">
              <a href="#" class="nav-link w-nav-link">FAQ</a></NuxtLink>
              <NuxtLink to="/contact">
              <a href="#" aria-current="page" class="nav-link w-nav-link w--current">Contact</a>
              </NuxtLink>
            </nav>
            <div class="w-nav-button">
              <div class="w-icon-nav-menu"></div>
            </div>
          </div>
        </div>
        <div class="w-row">
          <div class="sub-phone left w-col w-col-4 w-col-stack">
            <div data-animation="default" data-collapse="medium" data-duration="400" data-easing="ease" data-easing2="ease" role="banner" class="w-nav">
              <div class="w-container">
                <div class="menu-button w-nav-button">
                  <div class="w-icon-nav-menu"></div>
                </div>
              </div>
            </div>
            <div data-hover="true" data-delay="0" class="w-dropdown">
              <div class="dropdown-toggle w-dropdown-toggle">
                <div class="icon w-icon-dropdown-toggle"></div>
                <div class="text-block-4">Real Estate</div>
              </div>
              <nav class="w-dropdown-list">
                <a href="#" class="w-dropdown-link">Commercial</a>
                <a href="#" class="w-dropdown-link">Title</a>
                <a href="#" class="w-dropdown-link">Settlement</a>
                <a href="#" class="w-dropdown-link">Loan Closing</a>
                <a href="#" class="w-dropdown-link">Residential</a>
                <a href="#" class="w-dropdown-link">Estate Planning</a>
              </nav>
            </div>
          </div>
          <div class="sub-phone w-col w-col-4 w-col-stack">
            <a href="tel:337-893-3423" class="phone-number">337-893-3423</a>
          </div>
          <div class="site-toggle w-col w-col-4 w-col-stack">
            <a href="#" class="toggle-button w-button">Attorneys At Law</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
