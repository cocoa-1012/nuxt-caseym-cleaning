(window.webpackJsonp=window.webpackJsonp||[]).push([[2,10,18],{268:function(t,e,n){"use strict";n.r(e);var c=n(271),o=n.n(c),l=(n(272),n(273),{name:"Carousel",components:{VueSlickCarousel:o.a},methods:{showNext:function(){this.$refs.carousel.next()},showBefore:function(){this.$refs.carousel.prev()}}}),r=n(40),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"testimonials wf-section"},[n("div",{staticClass:"testimonials-section"},[n("div",{staticClass:"w-col w-col-10 slick-carousel"},[n("div",{staticClass:"w-slider-mask"},[n("img",{staticClass:"desktop-view",staticStyle:{"margin-bottom":"-30px"},attrs:{src:"assets/images/carousel quote.png",loading:"lazy",alt:"",width:"35"}}),t._v(" "),n("VueSlickCarousel",{ref:"carousel",staticClass:"testimonial w-slider",attrs:{"css-ease":t.ease}},[n("div",{staticClass:"w-slide"},[n("div",{staticClass:"testimonial-text"},[t._v("\n              Suspendisse dignissim ultrices dolor, quis condimentum orci.\n              Proin eu pulvinar leo. Quisque tempor aliquet convallis. Ut in\n              urna lacinia, viverra ex quis, suscipit sapien. Donec sed ipsum\n              velit. Praesent at faucibus purus. Curabitur pretium nibh vel\n              nisi efficitur viverra. Nullam finibus in lectus ut fermentum.\n              Phasellus hendrerit nec nulla a posuere. Fusce rhoncus ut sem et\n              lobortis. Aenean tempus ut neque eu eleifend. Curabitur quis\n              urna mi. Suspendisse odio justo, lobortis vel auctor ut, ornare\n              eget tortor."),n("br"),t._v("LOREM IPSUM\n            ")])]),t._v(" "),n("div",{staticClass:"w-slide"},[n("div",{staticClass:"testimonial-text"},[t._v("\n              Suspendisse dignissim ultrices dolor, quis condimentum orci.\n              Proin eu pulvinar leo. Quisque tempor aliquet convallis. Ut in\n              urna lacinia, viverra ex quis, suscipit sapien. Donec sed ipsum\n              velit. Praesent at faucibus purus. Curabitur pretium nibh vel\n              nisi efficitur viverra. Nullam finibus in lectus ut fermentum.\n              Phasellus hendrerit nec nulla a posuere. Fusce rhoncus ut sem et\n              lobortis. Aenean tempus ut neque eu eleifend. Curabitur quis\n              urna mi. Suspendisse odio justo, lobortis vel auctor ut, ornare\n              eget tortor."),n("br"),t._v("LOREM IPSUM\n            ")])])])],1),t._v(" "),n("div",{staticClass:"slider-arrow"},[n("div",{staticClass:"left-arrow",on:{click:t.showBefore}},[n("div",{staticClass:"icon-4 w-icon-slider-left"},[t._v("◄")])]),t._v(" "),n("div",{staticClass:"right-arrow",on:{click:t.showNext}},[n("div",{staticClass:"icon-3 w-icon-slider-right"},[t._v("►")])])])])])])}),[],!1,null,null,null);e.default=component.exports},278:function(t,e,n){"use strict";n.r(e);var c=n(40),component=Object(c.a)({},(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"contact-table w-col w-col-7 contact-attorney-forms"},[n("div",{staticClass:"contact-table w-col w-col-12"},[n("p",{staticClass:"contact-section-text attorney about"},[t._v("\n      Contact Us "),n("br"),t._v("Today!"),n("br")])]),t._v(" "),n("div",{staticClass:"contact-table w-col w-col-12"},[n("div",{staticClass:"w-form"},[n("form",{attrs:{id:"email-form",name:"email-form","data-name":"Email Form"}},[n("div",{staticClass:"w-row"},[n("p",{staticClass:"contact-description"},[t._v("SCHEDULE A CONSULTATION")]),t._v(" "),n("div",{staticClass:"contact-form-column-two w-col w-col-6"},[n("input",{staticClass:"w-input white-tag",attrs:{id:"name",type:"text",maxlength:"256",name:"name","data-name":"Name",placeholder:"NAME"}}),t._v(" "),n("input",{staticClass:"w-input white-tag",attrs:{id:"email",type:"email",maxlength:"256",name:"email","data-name":"Email",placeholder:"EMAIL",required:""}}),t._v(" "),n("input",{staticClass:"w-input white-tag",attrs:{id:"Phone",type:"tel",maxlength:"256",name:"Phone","data-name":"Phone",placeholder:"PHONE",required:""}})]),t._v(" "),n("div",{staticClass:"contact-form-column-two w-col w-col-6",attrs:{id:"field"}},[n("textarea",{staticClass:"textarea w-input white-tag",attrs:{placeholder:"MESSAGE",maxlength:"5000",rows:"6",name:"field","data-name":"Field"}}),t._v(" "),n("input",{staticClass:"button contact w-button today-button",staticStyle:{"background-color":"#892432","margin-top":"20px"},attrs:{type:"submit",value:"Submit","data-wait":"Please wait..."}})])])]),t._v(" "),n("div",{staticClass:"w-form-done"},[n("div",[t._v("Thank you! Your submission has been received!")])]),t._v(" "),n("div",{staticClass:"w-form-fail"},[n("div",[t._v("Oops! Something went wrong while submitting the form.")])])])])])}],!1,null,null,null);e.default=component.exports},301:function(t,e,n){"use strict";n.r(e);var c={data:function(){return{itemArrays:[!1,!1,!1,!1,!1,!1,!1,!1,!1],temp:"",sectionTitle:""}},methods:{toggle:function(t){this.itemArrays[t]=!this.itemArrays[t],this.changeClass(t)},changeClass:function(t){this.temp="accordion-des"+t,this.iconTemp="accordion-icon"+t,this.itemArrays[t]?(document.getElementById(this.iconTemp).classList.add("icon-opened"),document.getElementById(this.temp).classList.add("item-opened")):(document.getElementById(this.iconTemp).classList.remove("icon-opened"),document.getElementById(this.temp).classList.remove("item-opened"))}}},o=n(40),component=Object(o.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home-mobile"},[t._m(0),t._v(" "),t._m(1),t._v(" "),n("div",{staticClass:"contact-section about-contact wf-section mobile-view"},[n("div",{staticClass:"\n        contact-container\n        about-contact-container\n        w-container w-row\n        contact-attorney\n      "},[n("AttorneysContactUsToday")],1)]),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),n("div",{staticClass:"spec05"},[n("Carousel")],1),t._v(" "),n("div",{staticClass:"contact-section about-contact wf-section desktop-view"},[n("div",{staticClass:"\n        contact-container\n        about-contact-container\n        w-container w-row\n        contact-attorney\n      "},[n("AttorneysContactUsToday"),t._v(" "),t._m(5)],1)]),t._v(" "),n("div",{staticClass:"faq-top wf-section spec06"},[n("div",{staticClass:"faq-container w-row spec07"},[n("div",{staticClass:"faq-column-one w-col w-col-8"},[n("h1",{staticClass:"faq-heading commercial attorney"},[t._v("FAQ")]),t._v(" "),n("div",{staticClass:"cloneable-area"},[n("div",{staticClass:"c-accordion-list"},[n("div",{staticClass:"c-accordion-item",on:{click:function(e){return t.toggle(0)}}},[t._m(6)]),t._v(" "),n("div",{staticClass:"c-accordion-item",on:{click:function(e){return t.toggle(1)}}},[t._m(7)]),t._v(" "),n("div",{staticClass:"c-accordion-item",on:{click:function(e){return t.toggle(2)}}},[t._m(8)]),t._v(" "),n("div",{staticClass:"c-accordion-item",on:{click:function(e){return t.toggle(3)}}},[t._m(9)]),t._v(" "),n("div",{staticClass:"c-accordion-item",on:{click:function(e){return t.toggle(4)}}},[t._m(10)]),t._v(" "),n("div",{staticClass:"c-accordion-item",on:{click:function(e){return t.toggle(5)}}},[t._m(11)]),t._v(" "),n("div",{staticClass:"c-accordion-item",on:{click:function(e){return t.toggle(6)}}},[t._m(12)]),t._v(" "),n("div",{staticClass:"c-accordion-item",on:{click:function(e){return t.toggle(7)}}},[t._m(13)]),t._v(" "),n("div",{staticClass:"c-accordion-item",on:{click:function(e){return t.toggle(8)}}},[t._m(14)])])])]),t._v(" "),n("div",{staticClass:"faq-sidebar attorney w-col w-col-4 practice-sidebar spec05"},[n("h1",{staticClass:"faq-heading sidebar attorney"},[t._v("\n          Other Practice Areas\n        ")]),t._v(" "),n("ul",{staticClass:"w-list-unstyled",attrs:{role:"list"}},[n("li",{staticClass:"practice-list-item attorney",on:{click:function(e){t.sectionTitle="Adoption"}}},[n("p",{staticClass:"practice-area-list"},[t._v("Adoption")]),t._v(" "),n("p")]),t._v(" "),n("li",{staticClass:"practice-list-item",on:{click:function(e){t.sectionTitle="Family law"}}},[n("p",{staticClass:"practice-area-list"},[t._v("Family Law")]),t._v(" "),n("p")]),t._v(" "),n("li",{staticClass:"practice-list-item",on:{click:function(e){t.sectionTitle="Divorce"}}},[n("p",{staticClass:"practice-area-list"},[t._v("Divorce")]),t._v(" "),n("p")]),t._v(" "),n("li",{staticClass:"practice-list-item",on:{click:function(e){t.sectionTitle="Wills / Succession"}}},[n("p",{staticClass:"practice-area-list"},[t._v("Wills / Succession")]),t._v(" "),n("p")]),t._v(" "),n("li",{staticClass:"practice-list-item",on:{click:function(e){t.sectionTitle="Criminal Defense"}}},[n("p",{staticClass:"practice-area-list"},[t._v("Criminal Defense")]),t._v(" "),n("p")]),t._v(" "),n("li",{staticClass:"practice-list-item",on:{click:function(e){t.sectionTitle="Personal Injury"}}},[n("p",{staticClass:"practice-area-list"},[t._v("Personal Injury")]),t._v(" "),n("p")]),t._v(" "),n("li",{staticClass:"practice-list-item",on:{click:function(e){t.sectionTitle="DUI / DWI"}}},[n("p",{staticClass:"practice-area-list"},[t._v("DUI / DWI")]),t._v(" "),n("p")]),t._v(" "),n("li",{staticClass:"practice-list-item",on:{click:function(e){t.sectionTitle="Workers' Comp"}}},[n("p",{staticClass:"practice-area-list"},[t._v("Workers' Comp")]),t._v(" "),n("p")]),t._v(" "),n("li",{staticClass:"practice-list-item",on:{click:function(e){t.sectionTitle="Auto"}}},[n("p",{staticClass:"practice-area-list"},[t._v("AUTO")]),t._v(" "),n("p")]),t._v(" "),n("li",{staticClass:"practice-list-item",on:{click:function(e){t.sectionTitle="18-Wheeler Accident"}}},[n("p",{staticClass:"practice-area-list"},[t._v("18-Wheeler Accident")]),t._v(" "),n("p")]),t._v(" "),n("li",{staticClass:"practice-list-item",on:{click:function(e){t.sectionTitle="Maritime"}}},[n("p",{staticClass:"practice-area-list"},[t._v("Maritime")]),t._v(" "),n("p")]),t._v(" "),n("li",{staticClass:"practice-list-item",on:{click:function(e){t.sectionTitle="Irrevocable / Revocable trust"}}},[t._m(15),t._v(" "),n("p")])])])])])])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page-hero practice attorneys wf-section",staticStyle:{position:"relative"}},[n("div",{staticClass:"overlay-section w-container home"},[n("img",{staticClass:"desktop-view",attrs:{src:"assets/images/Logo Icon.png",loading:"lazy",alt:""}}),t._v(" "),n("h1",{staticClass:"hero-text desktop-view"},[t._v("Personal Injury")])]),t._v(" "),n("div",{staticClass:"overlay-section w-container home mobile-view",staticStyle:{opacity:"1",top:"250px",height:"150px"}},[n("h1",{staticClass:"hero-text",staticStyle:{"font-weight":"400","font-size":"40px","margin-left":"-20px"}},[t._v("\n        Personal "),n("br"),t._v("\n        Injury\n      ")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"real-estate-title-services-section wf-section",staticStyle:{"margin-top":"200px"}},[n("div",{staticClass:"experienced-attorneys-text about-subtext-hero desktop-view",staticStyle:{"margin-top":"30px","margin-bottom":"-30px",color:"#892432"}},[t._v("\n      Vestibulum Mattis Laoreet Est, Scelerisque "),n("br"),t._v("Hehicula Enim Laoreet\n    ")]),t._v(" "),n("div",{staticClass:"\n        workingwithtextsection\n        real-estate-title-services\n        about-page-content\n        w-row\n      "},[n("div",{staticClass:"experienced-attorneys-text about-subtext-hero mobile-view",staticStyle:{"margin-top":"300px","margin-bottom":"-150px",color:"#892432"}},[t._v("\n        Vestibulum Mattis Laoreet Est, Scelerisque Hehicula Enim Laoreet\n      ")]),t._v(" "),n("div",{staticClass:"w-col w-col-6 real-estate-intro"},[n("p",{staticClass:"working-with-subtext about-page-subtext"},[t._v("\n          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam\n          aliquam cursus metus, at accumsan massa ornare id. Aliquam facilisis\n          ex aliquet, lacinia nunc at, semper nunc. Vivamus vel urna nec quam\n          elementum ultricies. Vivamus sed sem venenatis nibh lacinia\n          imperdiet sit amet sit amet ex. Nam vehicula venenatis odio, id\n          feugiat libero gravida facilisis. Class aptent taciti sociosqu ad\n          litora torquent per conubia nostra, per inceptos himenaeos. Donec\n          commodo ex vitae odio tincidunt sodales vel at massa. Nulla\n          facilisi. Etiam cursus varius urna, vel mattis sapien venenatis at.\n          Donec et eros eros. Phasellus arcu mi, hendrerit eu nibh eu,\n          condimentum iaculis sapien. "),n("br"),n("br"),t._v("Donec eu blandit elit, in\n          ultrices tellus. Maecenas ultricies bibendum sodales. Morbi in\n          tincidunt eros. Vivamus nec ipsum suscipit, sagittis libero eget,\n          vehicula leo. Aliquam erat volutpat. Donec auctor luctus diam, id\n          finibus neque pellentesque vitae. Duis pretium ut velit quis cursus.\n          Aliquam vitae leo nec neque luctus gravida. Nulla vestibulum, felis\n          nec blandit lobortis, neque nisi aliquam nunc, eget vehicula lectus\n          augue interdum leo. Nam vestibulum a sem id ornare. Praesent\n          convallis mollis elementum."),n("br")])]),t._v(" "),n("div",{staticClass:"w-col w-col-6 real-estate-intro"},[n("p",{staticClass:"working-with-subtext about-page-subtext"},[t._v("\n          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam\n          aliquam cursus metus, at accumsan massa ornare id. Aliquam facilisis\n          ex aliquet, lacinia nunc at, semper nunc. Vivamus vel urna nec quam\n          elementum ultricies. Vivamus sed sem venenatis nibh lacinia\n          imperdiet sit amet sit amet ex. Nam vehicula venenatis odio, id\n          feugiat libero gravida facilisis. Class aptent taciti sociosqu ad\n          litora torquent per conubia nostra, per inceptos himenaeos. Donec\n          commodo ex vitae odio tincidunt sodales vel at massa. Nulla\n          facilisi. Etiam cursus varius urna, vel mattis sapien venenatis at.\n          Donec et eros eros. Phasellus arcu mi, hendrerit eu nibh eu,\n          condimentum iaculis sapien. "),n("br"),n("br"),t._v("Donec eu blandit elit, in\n          ultrices tellus. Maecenas ultricies bibendum sodales. Morbi in\n          tincidunt eros. Vivamus nec ipsum suscipit, sagittis libero eget,\n          vehicula leo. Aliquam erat volutpat. Donec auctor luctus diam, id\n          finibus neque pellentesque vitae. Duis pretium ut velit quis cursus.\n          Aliquam vitae leo nec neque luctus gravida. Nulla vestibulum, felis\n          nec blandit lobortis, neque nisi aliquam nunc, eget vehicula lectus\n          augue interdum leo. Nam vestibulum a sem id ornare. Praesent\n          convallis mollis elementum."),n("br")])])]),t._v(" "),n("div",{staticClass:"experienced-attorneys-text about-subtext-hero desktop-view",staticStyle:{"margin-top":"125px","margin-bottom":"-370px"}},[n("img",{staticClass:"desktop-view",attrs:{src:"assets/images/Mask Group 24.jpg",loading:"lazy",alt:""}})])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"contact-table w-col w-col-4 mobile-view",staticStyle:{"margin-top":"-50px","margin-bottom":"-20px"}},[e("img",{attrs:{src:"assets/images/Mask Group 22.jpg",loading:"lazy",alt:""}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"why-choose-us about-us-contact-banner wf-section"},[n("div",{staticClass:"main-content-container w-container"},[n("h1",{staticClass:"why-choose-us-title-container about-us-dupe attorney-box"},[t._v("\n        Cras Et "),n("br"),t._v("Fringilla "),n("br"),t._v("Libero "),n("br"),t._v(" "),n("button",[t._v("Contact Us Today")])])]),t._v(" "),n("div",{staticClass:"wcu-images wcu-section-about w-row",staticStyle:{"margin-top":"-210px"}},[n("div",{staticClass:"wcu-image-one about-image about-image-two w-col w-col-6"}),t._v(" "),n("div",{staticClass:"wcu-image-one about-image w-col w-col-6"})])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"real-estate-title-services-section wf-section spec04",staticStyle:{"margin-top":"200px","margin-bottom":"-100px"}},[n("div",{staticClass:"experienced-attorneys-text about-subtext-hero desktop-view",staticStyle:{"margin-top":"30px","margin-bottom":"-30px",color:"#892432"}},[t._v("\n      Donec Euismod Ornare Sodales Morbi Gravida "),n("br"),t._v("Er Metus Eget Fermentum\n    ")]),t._v(" "),n("div",{staticClass:"\n        workingwithtextsection\n        real-estate-title-services\n        about-page-content\n        w-row\n      "},[n("div",{staticClass:"experienced-attorneys-text about-subtext-hero mobile-view",staticStyle:{"margin-top":"500px","margin-bottom":"-150px",color:"#892432"}},[t._v("\n        Donec Euismod Ornare Sodales Morbi Gravida Er Metus Eget Fermentum\n      ")]),t._v(" "),n("div",{staticClass:"w-col w-col-6 real-estate-intro"},[n("p",{staticClass:"working-with-subtext about-page-subtext"},[t._v("\n          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam\n          aliquam cursus metus, at accumsan massa ornare id. Aliquam facilisis\n          ex aliquet, lacinia nunc at, semper nunc. Vivamus vel urna nec quam\n          elementum ultricies. Vivamus sed sem venenatis nibh lacinia\n          imperdiet sit amet sit amet ex. Nam vehicula venenatis odio, id\n          feugiat libero gravida facilisis. Class aptent taciti sociosqu ad\n          litora torquent per conubia nostra, per inceptos himenaeos. Donec\n          commodo ex vitae odio tincidunt sodales vel at massa. Nulla\n          facilisi. Etiam cursus varius urna, vel mattis sapien venenatis at.\n          Donec et eros eros. Phasellus arcu mi, hendrerit eu nibh eu,\n          condimentum iaculis sapien. "),n("br"),n("br"),t._v("Donec eu blandit elit, in\n          ultrices tellus. Maecenas ultricies bibendum sodales. Morbi in\n          tincidunt eros. Vivamus nec ipsum suscipit, sagittis libero eget,\n          vehicula leo. Aliquam erat volutpat. Donec auctor luctus diam, id\n          finibus neque pellentesque vitae. Duis pretium ut velit quis cursus.\n          Aliquam vitae leo nec neque luctus gravida. Nulla vestibulum, felis\n          nec blandit lobortis, neque nisi aliquam nunc, eget vehicula lectus\n          augue interdum leo. Nam vestibulum a sem id ornare. Praesent\n          convallis mollis elementum."),n("br")])]),t._v(" "),n("div",{staticClass:"w-col w-col-6 real-estate-intro"},[n("p",{staticClass:"working-with-subtext about-page-subtext"},[t._v("\n          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam\n          aliquam cursus metus, at accumsan massa ornare id. Aliquam facilisis\n          ex aliquet, lacinia nunc at, semper nunc. Vivamus vel urna nec quam\n          elementum ultricies. Vivamus sed sem venenatis nibh lacinia\n          imperdiet sit amet sit amet ex. Nam vehicula venenatis odio, id\n          feugiat libero gravida facilisis. Class aptent taciti sociosqu ad\n          litora torquent per conubia nostra, per inceptos himenaeos. Donec\n          commodo ex vitae odio tincidunt sodales vel at massa. Nulla\n          facilisi. Etiam cursus varius urna, vel mattis sapien venenatis at.\n          Donec et eros eros. Phasellus arcu mi, hendrerit eu nibh eu,\n          condimentum iaculis sapien. "),n("br"),n("br"),t._v("Donec eu blandit elit, in\n          ultrices tellus. Maecenas ultricies bibendum sodales. Morbi in\n          tincidunt eros. Vivamus nec ipsum suscipit, sagittis libero eget,\n          vehicula leo. Aliquam erat volutpat. Donec auctor luctus diam, id\n          finibus neque pellentesque vitae. Duis pretium ut velit quis cursus.\n          Aliquam vitae leo nec neque luctus gravida. Nulla vestibulum, felis\n          nec blandit lobortis, neque nisi aliquam nunc, eget vehicula lectus\n          augue interdum leo. Nam vestibulum a sem id ornare. Praesent\n          convallis mollis elementum."),n("br")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"w-col w-col-5"},[e("img",{attrs:{src:"assets/images/Mask Group 25.jpg",loading:"lazy",alt:""}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"_w-accordion-item"},[n("div",{staticClass:"c-accordion-item-q"},[n("div",{staticClass:"_w-accordion-item-q"},[n("div",{staticClass:"c-accordion-item-q-text"},[n("div",{staticClass:"_w-accordion-item-q-text"},[n("div",{staticClass:"accordion-item-q-text"},[t._v("QUESTION")])])]),t._v(" "),n("div",{staticClass:"c-accordion-item-q-icon",attrs:{id:"accordion-icon0"}},[n("div",{staticClass:"_w-accordion-item-q-icon"},[t._v("▼")])])])]),t._v(" "),n("div",{staticClass:"c-accordion-item-a",attrs:{id:"accordion-des0"}},[n("div",{staticClass:"_w-accordion-content-divider"},[n("div",{staticClass:"accordion-content-divider"})]),t._v(" "),n("div",{staticClass:"_w-accordion-item-a"},[n("p",{staticClass:"accordion-item-a-text"},[t._v("\n                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n                      Aliquam aliquam cursus metus, at accumsan massa ornare\n                      id. Aliquam facilisis ex aliquet, lacinia nunc at,\n                      semper nunc. Vivamus vel urna nec quam elementum\n                      ultricies. Vivamus sed sem venenatis nibh lacinia\n                      imperdiet sit amet sit amet ex. Nam vehicula venenatis\n                      odio, id feugiat libero gravida facilisis. Class aptent\n                      taciti sociosqu ad litora torquent per conubia nostra,\n                      per inceptos himenaeos. Donec commodo ex vitae odio\n                      tincidunt sodales vel at massa. Nulla facilisi. Etiam\n                      cursus varius urna, vel mattis sapien venenatis at.\n                      Donec et eros eros. Phasellus arcu mi, hendrerit eu nibh\n                      eu, condimentum iaculis sapien.\n                    ")])])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"_w-accordion-item"},[n("div",{staticClass:"c-accordion-item-q"},[n("div",{staticClass:"_w-accordion-item-q"},[n("div",{staticClass:"c-accordion-item-q-text"},[n("div",{staticClass:"_w-accordion-item-q-text"},[n("div",{staticClass:"accordion-item-q-text"},[t._v("QUESTION")])])]),t._v(" "),n("div",{staticClass:"c-accordion-item-q-icon",attrs:{id:"accordion-icon1"}},[n("div",{staticClass:"_w-accordion-item-q-icon"},[t._v("▼")])])])]),t._v(" "),n("div",{staticClass:"c-accordion-item-a",attrs:{id:"accordion-des1"}},[n("div",{staticClass:"_w-accordion-content-divider"},[n("div",{staticClass:"accordion-content-divider"})]),t._v(" "),n("div",{staticClass:"_w-accordion-item-a"},[n("p",{staticClass:"accordion-item-a-text"},[t._v("\n                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n                      Aliquam aliquam cursus metus, at accumsan massa ornare\n                      id. Aliquam facilisis ex aliquet, lacinia nunc at,\n                      semper nunc. Vivamus vel urna nec quam elementum\n                      ultricies. Vivamus sed sem venenatis nibh lacinia\n                      imperdiet sit amet sit amet ex. Nam vehicula venenatis\n                      odio, id feugiat libero gravida facilisis. Class aptent\n                      taciti sociosqu ad litora torquent per conubia nostra,\n                      per inceptos himenaeos. Donec commodo ex vitae odio\n                      tincidunt sodales vel at massa. Nulla facilisi. Etiam\n                      cursus varius urna, vel mattis sapien venenatis at.\n                      Donec et eros eros. Phasellus arcu mi, hendrerit eu nibh\n                      eu, condimentum iaculis sapien.\n                    ")])])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"_w-accordion-item"},[n("div",{staticClass:"c-accordion-item-q"},[n("div",{staticClass:"_w-accordion-item-q"},[n("div",{staticClass:"c-accordion-item-q-text"},[n("div",{staticClass:"_w-accordion-item-q-text"},[n("div",{staticClass:"accordion-item-q-text"},[t._v("QUESTION")])])]),t._v(" "),n("div",{staticClass:"c-accordion-item-q-icon",attrs:{id:"accordion-icon2"}},[n("div",{staticClass:"_w-accordion-item-q-icon"},[t._v("▼")])])])]),t._v(" "),n("div",{staticClass:"c-accordion-item-a",attrs:{id:"accordion-des2"}},[n("div",{staticClass:"_w-accordion-content-divider"},[n("div",{staticClass:"accordion-content-divider"})]),t._v(" "),n("div",{staticClass:"_w-accordion-item-a"},[n("p",{staticClass:"accordion-item-a-text"},[t._v("\n                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n                      Aliquam aliquam cursus metus, at accumsan massa ornare\n                      id. Aliquam facilisis ex aliquet, lacinia nunc at,\n                      semper nunc. Vivamus vel urna nec quam elementum\n                      ultricies. Vivamus sed sem venenatis nibh lacinia\n                      imperdiet sit amet sit amet ex. Nam vehicula venenatis\n                      odio, id feugiat libero gravida facilisis. Class aptent\n                      taciti sociosqu ad litora torquent per conubia nostra,\n                      per inceptos himenaeos. Donec commodo ex vitae odio\n                      tincidunt sodales vel at massa. Nulla facilisi. Etiam\n                      cursus varius urna, vel mattis sapien venenatis at.\n                      Donec et eros eros. Phasellus arcu mi, hendrerit eu nibh\n                      eu, condimentum iaculis sapien.\n                    ")])])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"_w-accordion-item"},[n("div",{staticClass:"c-accordion-item-q"},[n("div",{staticClass:"_w-accordion-item-q"},[n("div",{staticClass:"c-accordion-item-q-text"},[n("div",{staticClass:"_w-accordion-item-q-text"},[n("div",{staticClass:"accordion-item-q-text"},[t._v("QUESTION")])])]),t._v(" "),n("div",{staticClass:"c-accordion-item-q-icon",attrs:{id:"accordion-icon3"}},[n("div",{staticClass:"_w-accordion-item-q-icon"},[t._v("▼")])])])]),t._v(" "),n("div",{staticClass:"c-accordion-item-a",attrs:{id:"accordion-des3"}},[n("div",{staticClass:"_w-accordion-content-divider"},[n("div",{staticClass:"accordion-content-divider"})]),t._v(" "),n("div",{staticClass:"_w-accordion-item-a"},[n("p",{staticClass:"accordion-item-a-text"},[t._v("\n                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n                      Aliquam aliquam cursus metus, at accumsan massa ornare\n                      id. Aliquam facilisis ex aliquet, lacinia nunc at,\n                      semper nunc. Vivamus vel urna nec quam elementum\n                      ultricies. Vivamus sed sem venenatis nibh lacinia\n                      imperdiet sit amet sit amet ex. Nam vehicula venenatis\n                      odio, id feugiat libero gravida facilisis. Class aptent\n                      taciti sociosqu ad litora torquent per conubia nostra,\n                      per inceptos himenaeos. Donec commodo ex vitae odio\n                      tincidunt sodales vel at massa. Nulla facilisi. Etiam\n                      cursus varius urna, vel mattis sapien venenatis at.\n                      Donec et eros eros. Phasellus arcu mi, hendrerit eu nibh\n                      eu, condimentum iaculis sapien.\n                    ")])])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"_w-accordion-item"},[n("div",{staticClass:"c-accordion-item-q"},[n("div",{staticClass:"_w-accordion-item-q"},[n("div",{staticClass:"c-accordion-item-q-text"},[n("div",{staticClass:"_w-accordion-item-q-text"},[n("div",{staticClass:"accordion-item-q-text"},[t._v("QUESTION")])])]),t._v(" "),n("div",{staticClass:"c-accordion-item-q-icon",attrs:{id:"accordion-icon4"}},[n("div",{staticClass:"_w-accordion-item-q-icon"},[t._v("▼")])])])]),t._v(" "),n("div",{staticClass:"c-accordion-item-a",attrs:{id:"accordion-des4"}},[n("div",{staticClass:"_w-accordion-content-divider"},[n("div",{staticClass:"accordion-content-divider"})]),t._v(" "),n("div",{staticClass:"_w-accordion-item-a"},[n("p",{staticClass:"accordion-item-a-text"},[t._v("\n                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n                      Aliquam aliquam cursus metus, at accumsan massa ornare\n                      id. Aliquam facilisis ex aliquet, lacinia nunc at,\n                      semper nunc. Vivamus vel urna nec quam elementum\n                      ultricies. Vivamus sed sem venenatis nibh lacinia\n                      imperdiet sit amet sit amet ex. Nam vehicula venenatis\n                      odio, id feugiat libero gravida facilisis. Class aptent\n                      taciti sociosqu ad litora torquent per conubia nostra,\n                      per inceptos himenaeos. Donec commodo ex vitae odio\n                      tincidunt sodales vel at massa. Nulla facilisi. Etiam\n                      cursus varius urna, vel mattis sapien venenatis at.\n                      Donec et eros eros. Phasellus arcu mi, hendrerit eu nibh\n                      eu, condimentum iaculis sapien.\n                    ")])])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"_w-accordion-item"},[n("div",{staticClass:"c-accordion-item-q"},[n("div",{staticClass:"_w-accordion-item-q"},[n("div",{staticClass:"c-accordion-item-q-text"},[n("div",{staticClass:"_w-accordion-item-q-text"},[n("div",{staticClass:"accordion-item-q-text"},[t._v("QUESTION")])])]),t._v(" "),n("div",{staticClass:"c-accordion-item-q-icon",attrs:{id:"accordion-icon5"}},[n("div",{staticClass:"_w-accordion-item-q-icon"},[t._v("▼")])])])]),t._v(" "),n("div",{staticClass:"c-accordion-item-a",attrs:{id:"accordion-des5"}},[n("div",{staticClass:"_w-accordion-content-divider"},[n("div",{staticClass:"accordion-content-divider"})]),t._v(" "),n("div",{staticClass:"_w-accordion-item-a"},[n("p",{staticClass:"accordion-item-a-text"},[t._v("\n                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n                      Aliquam aliquam cursus metus, at accumsan massa ornare\n                      id. Aliquam facilisis ex aliquet, lacinia nunc at,\n                      semper nunc. Vivamus vel urna nec quam elementum\n                      ultricies. Vivamus sed sem venenatis nibh lacinia\n                      imperdiet sit amet sit amet ex. Nam vehicula venenatis\n                      odio, id feugiat libero gravida facilisis. Class aptent\n                      taciti sociosqu ad litora torquent per conubia nostra,\n                      per inceptos himenaeos. Donec commodo ex vitae odio\n                      tincidunt sodales vel at massa. Nulla facilisi. Etiam\n                      cursus varius urna, vel mattis sapien venenatis at.\n                      Donec et eros eros. Phasellus arcu mi, hendrerit eu nibh\n                      eu, condimentum iaculis sapien.\n                    ")])])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"_w-accordion-item"},[n("div",{staticClass:"c-accordion-item-q"},[n("div",{staticClass:"_w-accordion-item-q"},[n("div",{staticClass:"c-accordion-item-q-text"},[n("div",{staticClass:"_w-accordion-item-q-text"},[n("div",{staticClass:"accordion-item-q-text"},[t._v("QUESTION")])])]),t._v(" "),n("div",{staticClass:"c-accordion-item-q-icon",attrs:{id:"accordion-icon6"}},[n("div",{staticClass:"_w-accordion-item-q-icon"},[t._v("▼")])])])]),t._v(" "),n("div",{staticClass:"c-accordion-item-a",attrs:{id:"accordion-des6"}},[n("div",{staticClass:"_w-accordion-content-divider"},[n("div",{staticClass:"accordion-content-divider"})]),t._v(" "),n("div",{staticClass:"_w-accordion-item-a"},[n("p",{staticClass:"accordion-item-a-text"},[t._v("\n                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n                      Aliquam aliquam cursus metus, at accumsan massa ornare\n                      id. Aliquam facilisis ex aliquet, lacinia nunc at,\n                      semper nunc. Vivamus vel urna nec quam elementum\n                      ultricies. Vivamus sed sem venenatis nibh lacinia\n                      imperdiet sit amet sit amet ex. Nam vehicula venenatis\n                      odio, id feugiat libero gravida facilisis. Class aptent\n                      taciti sociosqu ad litora torquent per conubia nostra,\n                      per inceptos himenaeos. Donec commodo ex vitae odio\n                      tincidunt sodales vel at massa. Nulla facilisi. Etiam\n                      cursus varius urna, vel mattis sapien venenatis at.\n                      Donec et eros eros. Phasellus arcu mi, hendrerit eu nibh\n                      eu, condimentum iaculis sapien.\n                    ")])])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"_w-accordion-item"},[n("div",{staticClass:"c-accordion-item-q"},[n("div",{staticClass:"_w-accordion-item-q"},[n("div",{staticClass:"c-accordion-item-q-text"},[n("div",{staticClass:"_w-accordion-item-q-text"},[n("div",{staticClass:"accordion-item-q-text"},[t._v("QUESTION")])])]),t._v(" "),n("div",{staticClass:"c-accordion-item-q-icon",attrs:{id:"accordion-icon7"}},[n("div",{staticClass:"_w-accordion-item-q-icon"},[t._v("▼")])])])]),t._v(" "),n("div",{staticClass:"c-accordion-item-a",attrs:{id:"accordion-des7"}},[n("div",{staticClass:"_w-accordion-content-divider"},[n("div",{staticClass:"accordion-content-divider"})]),t._v(" "),n("div",{staticClass:"_w-accordion-item-a"},[n("p",{staticClass:"accordion-item-a-text"},[t._v("\n                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n                      Aliquam aliquam cursus metus, at accumsan massa ornare\n                      id. Aliquam facilisis ex aliquet, lacinia nunc at,\n                      semper nunc. Vivamus vel urna nec quam elementum\n                      ultricies. Vivamus sed sem venenatis nibh lacinia\n                      imperdiet sit amet sit amet ex. Nam vehicula venenatis\n                      odio, id feugiat libero gravida facilisis. Class aptent\n                      taciti sociosqu ad litora torquent per conubia nostra,\n                      per inceptos himenaeos. Donec commodo ex vitae odio\n                      tincidunt sodales vel at massa. Nulla facilisi. Etiam\n                      cursus varius urna, vel mattis sapien venenatis at.\n                      Donec et eros eros. Phasellus arcu mi, hendrerit eu nibh\n                      eu, condimentum iaculis sapien.\n                    ")])])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"_w-accordion-item"},[n("div",{staticClass:"c-accordion-item-q"},[n("div",{staticClass:"_w-accordion-item-q"},[n("div",{staticClass:"c-accordion-item-q-text"},[n("div",{staticClass:"_w-accordion-item-q-text"},[n("div",{staticClass:"accordion-item-q-text"},[t._v("QUESTION")])])]),t._v(" "),n("div",{staticClass:"c-accordion-item-q-icon",attrs:{id:"accordion-icon8"}},[n("div",{staticClass:"_w-accordion-item-q-icon"},[t._v("▼")])])])]),t._v(" "),n("div",{staticClass:"c-accordion-item-a",attrs:{id:"accordion-des8"}},[n("div",{staticClass:"_w-accordion-content-divider"},[n("div",{staticClass:"accordion-content-divider"})]),t._v(" "),n("div",{staticClass:"_w-accordion-item-a"},[n("p",{staticClass:"accordion-item-a-text"},[t._v("\n                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n                      Aliquam aliquam cursus metus, at accumsan massa ornare\n                      id. Aliquam facilisis ex aliquet, lacinia nunc at,\n                      semper nunc. Vivamus vel urna nec quam elementum\n                      ultricies. Vivamus sed sem venenatis nibh lacinia\n                      imperdiet sit amet sit amet ex. Nam vehicula venenatis\n                      odio, id feugiat libero gravida facilisis. Class aptent\n                      taciti sociosqu ad litora torquent per conubia nostra,\n                      per inceptos himenaeos. Donec commodo ex vitae odio\n                      tincidunt sodales vel at massa. Nulla facilisi. Etiam\n                      cursus varius urna, vel mattis sapien venenatis at.\n                      Donec et eros eros. Phasellus arcu mi, hendrerit eu nibh\n                      eu, condimentum iaculis sapien.\n                    ")])])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",{staticClass:"practice-area-list"},[t._v("\n              IRREVOCABLE / "),n("br"),t._v("Revocable trust\n            ")])}],!1,null,null,null);e.default=component.exports;installComponents(component,{AttorneysContactUsToday:n(278).default,Carousel:n(268).default})}}]);