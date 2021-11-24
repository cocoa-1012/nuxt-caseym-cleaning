<template>
  <div class="mobile-nav-practice">
    <div class="sub-phone" style="width: 50%">
      <div>
        <div>
          <div class="text-block-4 attorney" @click="isOpen = !isOpen">
            Real Estate &nbsp; &nbsp;
            {{ isOpen ? `&#x25B2;` : `&#x25BC;` }}
          </div>
        </div>
        <nav
          v-if="isOpen"
          class="mobile-practice-dropdown"
          style="background-color: rgba(79, 116, 139, 0.9)"
        >
          <div class="w-dropdown-list-sub mobile-legal">
            <NuxtLink to="/practise-area" style="text-decoration: none">
              <p class="w-dropdown-link">Commercial</p>
            </NuxtLink>
            <NuxtLink to="/practise-area" style="text-decoration: none">
              <p class="w-dropdown-link">Title Settlement</p>
            </NuxtLink>
            <NuxtLink to="/practise-area" style="text-decoration: none">
              <p class="w-dropdown-link">Loan Closing</p>
            </NuxtLink>
          </div>
          <div class="w-dropdown-list-sub mobile-legal">
            <NuxtLink to="/practise-area" style="text-decoration: none">
              <p class="w-dropdown-link">Residential</p>
            </NuxtLink>
            <NuxtLink to="/practise-area" style="text-decoration: none">
              <p class="w-dropdown-link">Estate Planning</p>
            </NuxtLink>
          </div>
        </nav>
      </div>
    </div>
    <div class="site-toggle" style="width: 50%">
      <Nuxt-link to="/att-index">
        <a
          href="/"
          class="toggle-button w-button"
          style="padding-left: 20px; align-items: center"
        >
          <p>Attorneys At Law</p>
          <hr size="2" width="80px" />
        </a>
      </Nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
    }
  },
}
</script> 