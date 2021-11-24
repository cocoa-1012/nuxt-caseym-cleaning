<template>
  <div class="mobile-nav-practice">
    <div class="sub-phone attorney" style="width: 50%">
      <div>
        <div>
          <div class="text-block-4 attorney" @click="isOpen = !isOpen">
            Practice&nbsp;Areas &nbsp; &nbsp;
            {{ isOpen ? `&#x25BC;` : `&#x25B2;` }}
          </div>
        </div>
        <nav
          v-if="isOpen"
          class="mobile-practice-dropdown"
          style="top: 100%; height: fit-content"
        >
          <div class="w-dropdown-list-sub mobile-legal">
            <NuxtLink to="/att-practise-area" style="text-decoration: none">
              <p class="w-dropdown-link">adoption</p>
            </NuxtLink>
            <NuxtLink to="/att-practise-area" style="text-decoration: none">
              <p class="w-dropdown-link">family law</p>
            </NuxtLink>
            <NuxtLink to="/att-practise-area" style="text-decoration: none">
              <p class="w-dropdown-link">divorce</p>
            </NuxtLink>
            <NuxtLink to="/att-practise-area" style="text-decoration: none">
              <p class="w-dropdown-link">wills/succession</p>
            </NuxtLink>
            <NuxtLink to="/att-practise-area" style="text-decoration: none">
              <p class="w-dropdown-link">criminal defense</p>
            </NuxtLink>
            <NuxtLink to="/att-practise-area" style="text-decoration: none">
              <p class="w-dropdown-link">personal injury</p>
            </NuxtLink>
          </div>
          <div class="w-dropdown-list-sub mobile-legal">
            <NuxtLink to="/att-practise-area" style="text-decoration: none">
              <p class="w-dropdown-link">dui.dwi</p>
            </NuxtLink>
            <NuxtLink to="/att-practise-area" style="text-decoration: none">
              <p class="w-dropdown-link">workers' comp</p>
            </NuxtLink>
            <NuxtLink to="/att-practise-area" style="text-decoration: none">
              <p class="w-dropdown-link">auto</p>
            </NuxtLink>
            <NuxtLink to="/att-practise-area" style="text-decoration: none">
              <p class="w-dropdown-link">1b-wheeler accident</p>
            </NuxtLink>
            <NuxtLink to="/att-practise-area" style="text-decoration: none">
              <p class="w-dropdown-link">maritime</p>
            </NuxtLink>
            <NuxtLink to="/att-practise-area" style="text-decoration: none">
              <p class="w-dropdown-link">
                irrevocable/<br /><br />
                revocable trust
              </p>
            </NuxtLink>
          </div>
        </nav>
      </div>
    </div>
    <div class="site-toggle" style="width: 50%">
      <Nuxt-link to="/">
        <a
          href="/"
          class="toggle-button attorney w-button"
          style="padding-left: 20px"
        >
          <p>Real&nbsp;Estate</p>
          <hr size="2" width="30%" />
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