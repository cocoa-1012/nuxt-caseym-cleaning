(window.webpackJsonp=window.webpackJsonp||[]).push([[23,6,8,11,13,15],{259:function(t,e,n){"use strict";n.r(e);var l=n(260),o=n.n(l),r=(n(261),n(262),{name:"Carousel",components:{VueSlickCarousel:o.a},methods:{showNext:function(){this.$refs.carousel.next()},showBefore:function(){this.$refs.carousel.prev()}}}),c=n(40),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"testimonials wf-section"},[n("div",{staticClass:"testimonials-section"},[n("div",{staticClass:"w-col w-col-10 slick-carousel"},[n("div",{staticClass:"w-slider-mask"},[n("VueSlickCarousel",{ref:"carousel",staticClass:"testimonial w-slider",attrs:{"css-ease":t.ease}},[n("div",{staticClass:"w-slide"},[n("div",{staticClass:"testimonial-text"},[t._v("\n              Suspendisse dignissim ultrices dolor, quis condimentum orci.\n              Proin eu pulvinar leo. Quisque tempor aliquet convallis. Ut in\n              urna lacinia, viverra ex quis, suscipit sapien. Donec sed ipsum\n              velit. Praesent at faucibus purus. Curabitur pretium nibh vel\n              nisi efficitur viverra. Nullam finibus in lectus ut fermentum.\n              Phasellus hendrerit nec nulla a posuere. Fusce rhoncus ut sem et\n              lobortis. Aenean tempus ut neque eu eleifend. Curabitur quis\n              urna mi. Suspendisse odio justo, lobortis vel auctor ut, ornare\n              eget tortor."),n("br"),t._v("LOREM IPSUM\n            ")])]),t._v(" "),n("div",{staticClass:"w-slide"},[n("div",{staticClass:"testimonial-text"},[t._v("\n              Suspendisse dignissim ultrices dolor, quis condimentum orci.\n              Proin eu pulvinar leo. Quisque tempor aliquet convallis. Ut in\n              urna lacinia, viverra ex quis, suscipit sapien. Donec sed ipsum\n              velit. Praesent at faucibus purus. Curabitur pretium nibh vel\n              nisi efficitur viverra. Nullam finibus in lectus ut fermentum.\n              Phasellus hendrerit nec nulla a posuere. Fusce rhoncus ut sem et\n              lobortis. Aenean tempus ut neque eu eleifend. Curabitur quis\n              urna mi. Suspendisse odio justo, lobortis vel auctor ut, ornare\n              eget tortor."),n("br"),t._v("LOREM IPSUM\n            ")])])])],1),t._v(" "),n("div",{staticClass:"slider-arrow"},[n("div",{staticClass:"left-arrow",on:{click:t.showBefore}},[n("div",{staticClass:"icon-4 w-icon-slider-left"},[t._v("◄")])]),t._v(" "),n("div",{staticClass:"right-arrow",on:{click:t.showNext}},[n("div",{staticClass:"icon-3 w-icon-slider-right"},[t._v("►")])])])])])])}),[],!1,null,null,null);e.default=component.exports},263:function(t,e,n){"use strict";n.r(e);var l=n(40),component=Object(l.a)({},(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"contact-section about-contact wf-section"},[n("div",{staticClass:"contact-container about-contact-container w-container"},[n("div",{staticClass:"w-row"},[n("div",{staticClass:"contact-table w-col w-col-4"},[n("img",{attrs:{src:"assets/images/aboutimage2.839e161e.png",loading:"lazy",alt:""}})]),t._v(" "),n("div",{staticClass:"contact-table w-col w-col-4"},[n("img",{attrs:{src:"assets/images/aboutimage1.bd629355.png",loading:"lazy",alt:""}})]),t._v(" "),n("div",{staticClass:"contact-table w-col w-col-4"},[n("img",{attrs:{src:"assets/images/aboutimage2.839e161e.png",loading:"lazy",alt:""}})])]),t._v(" "),n("div",{staticClass:"w-row"},[n("div",{staticClass:"contact-table w-col w-col-4"},[n("p",{staticClass:"contact-section-text about"},[t._v("\n          Contact Us "),n("br"),t._v("Today!"),n("br")])]),t._v(" "),n("div",{staticClass:"contact-table w-col w-col-8"},[n("div",{staticClass:"w-form"},[n("form",{attrs:{id:"email-form",name:"email-form","data-name":"Email Form"}},[n("div",{staticClass:"w-row"},[n("div",{staticClass:"contact-form-column-two w-col w-col-6"},[n("input",{staticClass:"w-input",attrs:{id:"name",type:"text",maxlength:"256",name:"name","data-name":"Name",placeholder:"Name"}}),t._v(" "),n("input",{staticClass:"w-input",attrs:{id:"email",type:"email",maxlength:"256",name:"email","data-name":"Email",placeholder:"Email",required:""}}),t._v(" "),n("input",{staticClass:"w-input",attrs:{id:"Phone",type:"tel",maxlength:"256",name:"Phone","data-name":"Phone",placeholder:"Phone",required:""}})]),t._v(" "),n("div",{staticClass:"contact-form-column-two w-col w-col-6",attrs:{id:"field"}},[n("textarea",{staticClass:"textarea w-input",attrs:{placeholder:"Example Text",maxlength:"5000",rows:"3",name:"field","data-name":"Field"}}),t._v(" "),n("input",{staticClass:"button contact w-button today-button",attrs:{type:"submit",value:"Submit","data-wait":"Please wait..."}})])])]),t._v(" "),n("div",{staticClass:"w-form-done"},[n("div",[t._v("Thank you! Your submission has been received!")])]),t._v(" "),n("div",{staticClass:"w-form-fail"},[n("div",[t._v("Oops! Something went wrong while submitting the form.")])])])])])])])}],!1,null,null,null);e.default=component.exports},265:function(t,e,n){"use strict";n.r(e);var l={data:function(){return{isOpen:!1,burgerOpen:!1}},methods:{toggle:function(){this.isOpen=!this.isOpen,document.getElementById("myDropdown").classList.toggle("show"),document.getElementById("myDropdown").classList.add("w--open")},burgerToggle:function(){this.burgerOpen=!this.burgerOpen,document.getElementById("myDropdown").classList.toggle("show"),document.getElementById("myDropdown").classList.add("w--open")}}},o=n(40),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"navigation-container wf-section"},[n("div",{staticClass:"nav-contain w-row"},[n("div",{staticClass:"column-2 w-col w-col-5 w-col-stack nav-bar-group"},[n("NuxtLink",{staticClass:"nav-bar-logo",attrs:{to:"/att-index"}},[n("img",{staticClass:"logo",attrs:{src:"assets/images/logo.ce898954.png",loading:"lazy",width:"245.5",alt:""}})]),t._v(" "),n("div",{staticClass:"w-nav-button",on:{click:t.burgerToggle}},[n("div",{staticClass:"w-icon-nav-menu"})]),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:t.burgerOpen,expression:"burgerOpen"}],staticClass:"w-nav-overlay",staticStyle:{display:"block",height:"4042.22px"},attrs:{id:"w-nav-overlay-0","data-wf-ignore":""}},[n("nav",{staticClass:"w-nav-menu",attrs:{role:"navigation","data-nav-menu-open":""}},[n("NuxtLink",{staticClass:"nav-link w-nav-link w--nav-link-open",staticStyle:{"max-width":"728px"},attrs:{to:"/att-index"}},[t._v("\n            Homes\n          ")]),t._v(" "),n("NuxtLink",{staticClass:"nav-link w-nav-link w--nav-link-open",staticStyle:{"max-width":"728px"},attrs:{to:"/att-about"}},[t._v("\n            About\n          ")]),t._v(" "),n("NuxtLink",{staticClass:"nav-link w-nav-link w--nav-link-open",staticStyle:{"max-width":"728px"},attrs:{to:"/att-resources"}},[t._v("\n            Resources\n          ")]),t._v(" "),n("NuxtLink",{staticClass:"nav-link w-nav-link w--nav-link-open",staticStyle:{"max-width":"728px"},attrs:{to:"/att-faq"}},[t._v("\n            FAQ\n          ")]),t._v(" "),n("NuxtLink",{staticClass:"nav-link w-nav-link w--nav-link-open",staticStyle:{"max-width":"728px"},attrs:{to:"/att-contact"}},[t._v("\n            Contact\n          ")])],1)])],1),t._v(" "),n("div",{staticClass:"column w-col w-col-7 w-col-stack w-col-small-small-stack"},[n("div",{staticClass:"navbar w-nav",attrs:{"data-animation":"default","data-collapse":"medium","data-duration":"400","data-easing":"ease","data-easing2":"ease",role:"banner"}},[n("div",{staticClass:"container w-container nav-menu-responsive"},[n("nav",{staticClass:"w-nav-menu",attrs:{role:"navigation"}},[n("NuxtLink",{attrs:{to:"/att-index"}},[n("a",{staticClass:"nav-link w-nav-link"},[t._v("Home")])]),t._v(" "),n("NuxtLink",{attrs:{to:"/att-about"}},[n("a",{staticClass:"nav-link w-nav-link"},[t._v("About")])]),t._v(" "),n("NuxtLink",{attrs:{to:"/att-resources"}},[n("a",{staticClass:"nav-link w-nav-link"},[t._v("Resources")])]),t._v(" "),n("NuxtLink",{attrs:{to:"/att-faq"}},[n("a",{staticClass:"nav-link w-nav-link"},[t._v("FAQ")])]),t._v(" "),n("NuxtLink",{attrs:{to:"/att-contact"}},[n("a",{staticClass:"nav-link w-nav-link w--current",attrs:{"aria-current":"page"}},[t._v("\n                Contact\n              ")])])],1)])]),t._v(" "),n("div",{staticClass:"w-row"},[n("div",{staticClass:"sub-phone attorney left w-col w-col-3 w-col-stack"},[n("div",{staticClass:"w-dropdown",attrs:{"data-hover":"true","data-delay":"0"},on:{click:t.toggle}},[t._m(0),t._v(" "),n("nav",{directives:[{name:"show",rawName:"v-show",value:t.isOpen,expression:"isOpen"}],staticClass:"w-dropdown-list attorney",attrs:{id:"myDropdown"}},[t._m(1),t._v(" "),t._m(2)])])]),t._v(" "),t._m(3),t._v(" "),n("div",{staticClass:"site-toggle w-col w-col-5 w-col-stack"},[n("Nuxt-link",{attrs:{to:"/"}},[n("a",{staticClass:"toggle-button attorney w-button",attrs:{href:"/"}},[t._v("\n              Attorneys At Law    ----------------\n            ")])])],1)])])])])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"dropdown-toggle w-dropdown-toggle"},[n("div",{staticClass:"icon w-icon-dropdown-toggle"}),t._v(" "),n("div",{staticClass:"text-block-4 attorney"},[t._v("Practice Areas")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"w-dropdown-list-sub"},[n("a",{staticClass:"w-dropdown-link",attrs:{href:"#"}},[t._v("adoption")]),t._v(" "),n("a",{staticClass:"w-dropdown-link",attrs:{href:"#"}},[t._v("family law")]),t._v(" "),n("a",{staticClass:"w-dropdown-link",attrs:{href:"#"}},[t._v("divorce")]),t._v(" "),n("a",{staticClass:"w-dropdown-link",attrs:{href:"#"}},[t._v("wills/succession")]),t._v(" "),n("a",{staticClass:"w-dropdown-link",attrs:{href:"#"}},[t._v("criminal defense")]),t._v(" "),n("a",{staticClass:"w-dropdown-link",attrs:{href:"#"}},[t._v("personal injury")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"w-dropdown-list-sub"},[n("a",{staticClass:"w-dropdown-link",attrs:{href:"#"}},[t._v("dui.dwi")]),t._v(" "),n("a",{staticClass:"w-dropdown-link",attrs:{href:"#"}},[t._v("workers' comp")]),t._v(" "),n("a",{staticClass:"w-dropdown-link",attrs:{href:"#"}},[t._v("auto")]),t._v(" "),n("a",{staticClass:"w-dropdown-link",attrs:{href:"#"}},[t._v("1b-wheeler accident")]),t._v(" "),n("a",{staticClass:"w-dropdown-link",attrs:{href:"#"}},[t._v("maritime")]),t._v(" "),n("a",{staticClass:"w-dropdown-link",attrs:{href:"#"}},[t._v("\n                  irrevocable/"),n("br"),t._v("\n                  revocable trust\n                ")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"\n            sub-phone sub-phone-number\n            attorney\n            w-col w-col-4 w-col-stack\n          "},[n("a",{staticClass:"phone-number",attrs:{href:"tel:337-893-3423"}},[t._v("337-893-3423")])])}],!1,null,null,null);e.default=component.exports},267:function(t,e,n){"use strict";n.r(e);var l=n(40),component=Object(l.a)({},(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"footer wf-section"},[n("div",{staticClass:"main-content-container w-container"},[n("div",{staticClass:"experienced-attorneys-text attorneys footer-font"},[t._v("\n      Experienced and Local Attorneys Here for You\n    ")]),t._v(" "),n("div",{staticClass:"footer-content w-row"},[n("div",{staticClass:"w-col w-col-3"}),t._v(" "),n("div",{staticClass:"w-col w-col-3"},[n("p",{staticClass:"working-with-subtext"},[t._v("\n          OFFICE"),n("br"),t._v("105 Tivoli Street"),n("br"),t._v("Abbeville, LA"),n("br"),t._v("337-893-3423"),n("br")])]),t._v(" "),n("div",{staticClass:"w-col w-col-3"},[n("p",{staticClass:"working-with-subtext"},[t._v("\n          CONTACT"),n("br"),t._v("Disclaimer"),n("br"),t._v("Sitemap"),n("br"),t._v("Privacy policy"),n("br")])]),t._v(" "),n("div",{staticClass:"w-col w-col-3"},[n("p",{staticClass:"working-with-subtext"},[t._v("\n          PRIVACY POLICY"),n("br"),t._v("‍Purpose Federal and state laws and regulations\n          require Gabe A. Duhon, L.L.C. (“the Company”) to disclose how it\n          collects, shares, and protects any personal information obtained\n          during the course of normal business operations. This Privacy Policy\n          and Notice is to be distributed pursuant to Title V of the\n          Gramm-Leach-Bliley Act (GLBA). Any information collected will only\n          be used in accordance with this privacy statement."),n("br")])])])])])}],!1,null,null,null);e.default=component.exports},271:function(t,e,n){"use strict";n.r(e);var l={data:function(){return{isOpen1:!1,isOpen2:!1}},methods:{toggle1:function(){this.isOpen1=!this.isOpen1,this.isOpen2=!this.isOpen1&&this.isOpen2,document.getElementById("myDropdown1").classList.toggle("show"),document.getElementById("myDropdown1").classList.add("w--open")},toggle2:function(){this.isOpen2=!this.isOpen2,this.isOpen1=!this.isOpen2&&this.isOpen1,document.getElementById("myDropdown2").classList.toggle("show"),document.getElementById("myDropdown2").classList.add("w--open")}}},o=n(40),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._m(0),t._v(" "),n("div",{staticClass:"real-estate-title-services-section wf-section"},[n("div",{staticClass:"\n        workingwithtextsection\n        real-estate-title-services\n        about-page-content\n        w-row\n      "},[n("div",{staticClass:"w-col w-col-6 real-estate-intro"},[n("img",{staticClass:"circle-image about-image",attrs:{src:"assets/images/person1.046db6ca.png",loading:"lazy",alt:""}}),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),n("div",{staticClass:"credentials w-dropdown",attrs:{"data-hover":"false","data-delay":"0"}},[n("div",{staticClass:"credential-title"},[n("div",{staticClass:"w-row"},[t._m(4),t._v(" "),n("div",{staticClass:"w-col w-col-3",on:{click:t.toggle1}},[n("div",{staticClass:"expand"},[t._v("Expand ▼")])])])]),t._v(" "),n("nav",{directives:[{name:"show",rawName:"v-show",value:t.isOpen1,expression:"isOpen1"}],staticClass:"credentials-content w-dropdown-list credential-exp",attrs:{id:"myDropdown1"}},[t._m(5)])])]),t._v(" "),n("div",{staticClass:"w-col w-col-6 real-estate-intro"},[n("img",{staticClass:"circle-image about-image",attrs:{src:"assets/images/person2.b2145e19.png",loading:"lazy",alt:""}}),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),n("div",{staticClass:"credentials w-dropdown",attrs:{"data-hover":"false","data-delay":"0"}},[n("div",{staticClass:"credential-title"},[n("div",{staticClass:"w-row"},[t._m(9),t._v(" "),n("div",{staticClass:"w-col w-col-3",on:{click:t.toggle2}},[n("div",{staticClass:"expand"},[t._v("Expand ▼")])])])]),t._v(" "),n("nav",{directives:[{name:"show",rawName:"v-show",value:t.isOpen2,expression:"isOpen2"}],staticClass:"credentials-content w-dropdown-list credential-exp",attrs:{id:"myDropdown2"}},[t._m(10)])])])])]),t._v(" "),t._m(11),t._v(" "),n("Carousel"),t._v(" "),n("ContactUsToday")],1)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page-hero sub-page-hero wf-section"},[n("div",{staticClass:"overlay-section about-us w-container"},[n("h1",{staticClass:"hero-text sub-page-hero"},[t._v("About Us"),n("br")])]),t._v(" "),n("div",{staticClass:"experienced-attorneys-text about-subtext-hero attorney"},[t._v("\n      Vestibulum Mattis Laoreet Est, Scelerisque Hehicula Enim Laoreet\n    ")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",{staticClass:"about-grey-text title attorney"},[t._v("\n          Gabe A. Duhon"),n("strong",[n("br")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",{staticClass:"about-grey-text title sub-title attorney"},[t._v("\n          attorney/owner"),n("strong",[n("br")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",{staticClass:"working-with-subtext about-page-subtext"},[n("br"),t._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n          Aliquam aliquam cursus metus, at accumsan massa ornare id. Aliquam\n          facilisis ex aliquet, lacinia nunc at, semper nunc. Vivamus vel urna\n          nec quam elementum ultricies. Vivamus sed sem venenatis nibh lacinia\n          imperdiet sit amet sit amet ex. Nam vehicula venenatis odio, id\n          feugiat libero gravida facilisis. Class aptent taciti sociosqu ad\n          litora torquent per conubia nostra, per inceptos himenaeos. Donec\n          commodo ex vitae odio tincidunt sodales vel at massa. Nulla\n          facilisi. Etiam cursus varius urna, vel mattis sapien venenatis at.\n          Donec et eros eros. Phasellus arcu mi, hendrerit eu nibh eu,\n          condimentum iaculis sapien. "),n("br"),n("br"),t._v("Donec eu blandit elit, in\n          ultrices tellus. Maecenas ultricies bibendum sodales. Morbi in\n          tincidunt eros. Vivamus nec ipsum suscipit, sagittis libero eget,\n          vehicula leo. Aliquam erat volutpat. Donec auctor luctus diam, id\n          finibus neque pellentesque vitae. Duis pretium ut velit quis cursus.\n          Aliquam vitae leo nec neque luctus gravida. Nulla vestibulum, felis\n          nec blandit lobortis, neque nisi aliquam nunc, eget vehicula lectus\n          augue interdum leo. Nam vestibulum a sem id ornare. Praesent\n          convallis mollis elementum."),n("br")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"w-col w-col-9"},[n("div",{staticClass:"text-credentials"},[t._v("Credentials")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",{staticClass:"working-with-subtext about-page-subtext"},[t._v("\n              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam\n              aliquam cursus metus, at accumsan massa ornare id. Aliquam\n              facilisis ex aliquet, lacinia nunc at, semper nunc. Vivamus vel\n              urna nec quam elementum ultricies. Vivamus sed sem venenatis\n              nibh lacinia imperdiet sit amet sit amet ex. Nam vehicula\n              venenatis odio, id feugiat libero gravida facilisis. Class\n              aptent taciti sociosqu ad litora torquent per conubia nostra,\n              per inceptos himenaeos. Donec commodo ex vitae odio tincidunt\n              sodales vel at massa. Nulla facilisi. Etiam cursus varius urna,\n              vel mattis sapien venenatis at. Donec et eros eros. Phasellus\n              arcu mi, hendrerit eu nibh eu, condimentum iaculis sapien.\n              "),n("br"),n("br"),t._v("Donec eu blandit elit, in ultrices tellus. Maecenas\n              ultricies bibendum sodales. Morbi in tincidunt eros. Vivamus nec\n              ipsum suscipit, sagittis libero eget, vehicula leo. Aliquam erat\n              volutpat. Donec auctor luctus diam, id finibus neque\n              pellentesque vitae. Duis pretium ut velit quis cursus. Aliquam\n              vitae leo nec neque luctus gravida. Nulla vestibulum, felis nec\n              blandit lobortis, neque nisi aliquam nunc, eget vehicula lectus\n              augue interdum leo. Nam vestibulum a sem id ornare. Praesent\n              convallis mollis elementum."),n("br")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",{staticClass:"about-grey-text title attorney"},[t._v("\n          Kimberly K. "),n("br"),t._v("Souriyakhamphong"),n("strong",[n("br")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",{staticClass:"about-grey-text title sub-title attorney"},[t._v("\n          associate attorney"),n("strong",[n("br")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",{staticClass:"working-with-subtext about-page-subtext"},[t._v("\n          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam\n          aliquam cursus metus, at accumsan massa ornare id. Aliquam facilisis\n          ex aliquet, lacinia nunc at, semper nunc. Vivamus vel urna nec quam\n          elementum ultricies. Vivamus sed sem venenatis nibh lacinia\n          imperdiet sit amet sit amet ex. Nam vehicula venenatis odio, id\n          feugiat libero gravida facilisis. Class aptent taciti sociosqu ad\n          litora torquent per conubia nostra, per inceptos himenaeos. Donec\n          commodo ex vitae odio tincidunt sodales vel at massa. Nulla\n          facilisi. Etiam cursus varius urna, vel mattis sapien venenatis at.\n          Donec et eros eros. Phasellus arcu mi, hendrerit eu nibh eu,\n          condimentum iaculis sapien. "),n("br"),n("br"),t._v("Donec eu blandit elit, in\n          ultrices tellus. Maecenas ultricies bibendum sodales. Morbi in\n          tincidunt eros. Vivamus nec ipsum suscipit, sagittis libero eget,\n          vehicula leo. Aliquam erat volutpat. Donec auctor luctus diam, id\n          finibus neque pellentesque vitae. Duis pretium ut velit quis cursus.\n          Aliquam vitae leo nec neque luctus gravida. Nulla vestibulum, felis\n          nec blandit lobortis, neque nisi aliquam nunc, eget vehicula lectus\n          augue interdum leo. Nam vestibulum a sem id ornare. Praesent\n          convallis mollis elementum."),n("br")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"w-col w-col-9"},[n("div",{staticClass:"text-credentials"},[t._v("Credentials")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",{staticClass:"working-with-subtext about-page-subtext"},[t._v("\n              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam\n              aliquam cursus metus, at accumsan massa ornare id. Aliquam\n              facilisis ex aliquet, lacinia nunc at, semper nunc. Vivamus vel\n              urna nec quam elementum ultricies. Vivamus sed sem venenatis\n              nibh lacinia imperdiet sit amet sit amet ex. Nam vehicula\n              venenatis odio, id feugiat libero gravida facilisis. Class\n              aptent taciti sociosqu ad litora torquent per conubia nostra,\n              per inceptos himenaeos. Donec commodo ex vitae odio tincidunt\n              sodales vel at massa. Nulla facilisi. Etiam cursus varius urna,\n              vel mattis sapien venenatis at. Donec et eros eros. Phasellus\n              arcu mi, hendrerit eu nibh eu, condimentum iaculis sapien.\n              "),n("br"),n("br"),t._v("Donec eu blandit elit, in ultrices tellus. Maecenas\n              ultricies bibendum sodales. Morbi in tincidunt eros. Vivamus nec\n              ipsum suscipit, sagittis libero eget, vehicula leo. Aliquam erat\n              volutpat. Donec auctor luctus diam, id finibus neque\n              pellentesque vitae. Duis pretium ut velit quis cursus. Aliquam\n              vitae leo nec neque luctus gravida. Nulla vestibulum, felis nec\n              blandit lobortis, neque nisi aliquam nunc, eget vehicula lectus\n              augue interdum leo. Nam vestibulum a sem id ornare. Praesent\n              convallis mollis elementum."),n("br")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"why-choose-us about-us-contact-banner wf-section"},[n("div",{staticClass:"main-content-container w-container"},[n("h1",{staticClass:"why-choose-us-title-container about-us-dupe attorney-box"},[t._v("\n        Cras Et "),n("br"),t._v("Fringilla "),n("br"),t._v("Libero\n      ")])]),t._v(" "),n("div",{staticClass:"wcu-images wcu-section-about w-row"},[n("div",{staticClass:"wcu-image-one about-image about-image-two w-col w-col-6"}),t._v(" "),n("div",{staticClass:"wcu-image-one about-image w-col w-col-6"})])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{Carousel:n(259).default,ContactUsToday:n(263).default})},283:function(t,e,n){"use strict";n.r(e);var l={},o=n(40),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("AttorneysNavbar"),t._v(" "),n("AttorneysAboutMain"),t._v(" "),n("AttorneysFooter")],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{AttorneysNavbar:n(265).default,AttorneysAboutMain:n(271).default,AttorneysFooter:n(267).default})}}]);