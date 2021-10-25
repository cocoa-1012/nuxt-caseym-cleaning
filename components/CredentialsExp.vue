<template>
  <div data-hover="false" data-delay="0" class="credentials w-dropdown" @click="toggle">
    <div class="credential-title w-dropdown-toggle">
      <div class="w-row">
        <div class="w-col w-col-6">
          <div class="text-block-9">Credentials</div>
        </div>
        <div class="w-col w-col-6">
          <div class="expand">Expand</div>
        </div>
      </div>
    </div>
    <nav v-show="isOpen" id="myDropdown" class="credentials-content w-dropdown-list">
      <p class="working-with-subtext about-page-subtext">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam aliquam cursus metus, at accumsan massa ornare id. Aliquam facilisis ex aliquet, lacinia nunc at, semper nunc. Vivamus vel urna nec quam elementum ultricies. Vivamus sed sem venenatis nibh lacinia imperdiet sit amet sit amet ex. Nam vehicula venenatis odio, id feugiat libero gravida facilisis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec commodo ex vitae odio tincidunt sodales vel at massa. Nulla facilisi. Etiam cursus varius urna, vel mattis sapien venenatis at. Donec et eros eros. Phasellus arcu mi, hendrerit eu nibh eu, condimentum iaculis sapien. <br><br>Donec eu blandit elit, in ultrices tellus. Maecenas ultricies bibendum sodales. Morbi in tincidunt eros. Vivamus nec ipsum suscipit, sagittis libero eget, vehicula leo. Aliquam erat volutpat. Donec auctor luctus diam, id finibus neque pellentesque vitae. Duis pretium ut velit quis cursus. Aliquam vitae leo nec neque luctus gravida. Nulla vestibulum, felis nec blandit lobortis, neque nisi aliquam nunc, eget vehicula lectus augue interdum leo. Nam vestibulum a sem id ornare. Praesent convallis mollis elementum.<br></p>
    </nav>
  </div> 
  
</template>
<script>
  export default {
    data() {
      return {
        isOpen: false
      };
    },
    methods: {
      toggle() {
        this.isOpen = !this.isOpen;
        document.getElementById("myDropdown").classList.toggle("show");
        document.getElementById("myDropdown").classList.add("w--open");
    }
}
  }
</script> 