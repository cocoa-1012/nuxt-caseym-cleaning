(window.webpackJsonp=window.webpackJsonp||[]).push([[15,32],{260:function(t,n,e){var content=e(264);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(53).default)("6d93a522",content,!0,{sourceMap:!1})},261:function(t,n,e){"use strict";e.r(n);var o={},l=(e(263),e(40)),component=Object(l.a)(o,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"modal-overlay1"},[e("div",{staticClass:"modal-overlay",on:{click:function(n){return t.$emit("close-modal")}}}),t._v(" "),e("div",{staticClass:"modal"},[t._m(0),t._v(" "),e("div",{staticClass:"submit"},[e("button",{on:{click:function(n){return t.$emit("close-modal")}}},[t._v("SUBMIT")])])])])}),[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"search-div"},[e("p",[t._v("SEARCH")]),t._v(" "),e("input",{attrs:{type:"text",value:""}})])}],!1,null,"5faef120",null);n.default=component.exports},263:function(t,n,e){"use strict";e(260)},264:function(t,n,e){var o=e(52)(!1);o.push([t.i,".search-div[data-v-5faef120]{width:80%;display:flex;align-items:center;border-bottom:2px solid grey}.submit[data-v-5faef120]{display:flex;flex-direction:row-reverse;margin-right:15%}.modal-overlay1[data-v-5faef120]{top:55%;justify-content:flex-end}.modal-overlay[data-v-5faef120],.modal-overlay1[data-v-5faef120]{position:fixed;bottom:0;right:0;left:0;display:flex;z-index:1000}.modal-overlay[data-v-5faef120]{top:0;justify-content:center}.modal[data-v-5faef120]{display:flex;flex-direction:column;text-align:center;background-color:hsla(0,0%,100%,.8);width:60%;height:-webkit-fit-content;height:-moz-fit-content;height:fit-content;border-radius:5px 0 0 5px;padding:20px 50px;z-index:2000}p[data-v-5faef120]{font-size:18px;font-weight:600;margin:0}input[data-v-5faef120]{width:100%;margin-left:20px;outline:none;font-size:20px}button[data-v-5faef120],input[data-v-5faef120]{background:none}button[data-v-5faef120]{width:150px;color:#892432;font-size:18px;margin-top:10px;font-weight:600;border-radius:16px;width:20%}",""]),t.exports=o},270:function(t,n,e){"use strict";e.r(n);var o={components:{SavedModal:e(261).default},data:function(){return{isOpen:!1,burgerOpen:!1,showModal:!1}},methods:{toggle:function(){this.isOpen=!this.isOpen,document.getElementById("myDropdown").classList.toggle("show"),document.getElementById("myDropdown").classList.add("w--open")},mouseOver:function(){this.isOpen=!0,document.getElementById("myDropdown").classList.toggle("show"),document.getElementById("myDropdown").classList.add("w--open")},mouseOut:function(){this.isOpen=!1},burgerToggle:function(){this.burgerOpen=!this.burgerOpen,document.getElementById("myDropdown").classList.toggle("show"),document.getElementById("myDropdown").classList.add("w--open")}}},l=e(40),component=Object(l.a)(o,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"navigation-container wf-section"},[e("div",{staticClass:"nav-contain w-row"},[e("div",{staticClass:"column-2 w-col w-col-5 w-col-stack nav-bar-group"},[e("NuxtLink",{staticClass:"nav-bar-logo",attrs:{to:"/att-index"}},[e("img",{attrs:{src:"assets/images/logo.ce898954.png",loading:"lazy",alt:""}})]),t._v(" "),e("div",{staticClass:"w-nav-button",on:{click:t.burgerToggle}},[e("div",{staticClass:"w-icon-nav-menu"})]),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:t.burgerOpen,expression:"burgerOpen"}],staticClass:"w-nav-overlay",staticStyle:{display:"block",height:"4042.22px"},attrs:{id:"w-nav-overlay-0","data-wf-ignore":""}},[e("nav",{staticClass:"w-nav-menu",attrs:{role:"navigation","data-nav-menu-open":""}},[e("NuxtLink",{staticClass:"nav-link w-nav-link w--nav-link-open",staticStyle:{"max-width":"728px"},attrs:{to:"/att-index"}},[t._v("\n            Homes\n          ")]),t._v(" "),e("NuxtLink",{staticClass:"nav-link w-nav-link w--nav-link-open",staticStyle:{"max-width":"728px"},attrs:{to:"/att-about"}},[t._v("\n            About\n          ")]),t._v(" "),e("NuxtLink",{staticClass:"nav-link w-nav-link w--nav-link-open",staticStyle:{"max-width":"728px"},attrs:{to:"/att-resources"}},[t._v("\n            Resources\n          ")]),t._v(" "),e("NuxtLink",{staticClass:"nav-link w-nav-link w--nav-link-open",staticStyle:{"max-width":"728px"},attrs:{to:"/att-faq"}},[t._v("\n            FAQ\n          ")]),t._v(" "),e("NuxtLink",{staticClass:"nav-link w-nav-link w--nav-link-open",staticStyle:{"max-width":"728px"},attrs:{to:"/att-contact"}},[t._v("\n            Contact\n          ")])],1)])],1),t._v(" "),e("div",{staticClass:"column w-col w-col-7 w-col-stack w-col-small-small-stack"},[e("div",{staticClass:"navbar w-nav",attrs:{"data-animation":"default","data-collapse":"medium","data-duration":"400","data-easing":"ease","data-easing2":"ease",role:"banner"}},[e("div",{staticClass:"container w-container nav-menu-responsive"},[e("nav",{staticClass:"w-nav-menu",attrs:{role:"navigation"}},[e("NuxtLink",{attrs:{to:"/att-index"}},[e("a",{staticClass:"nav-link w-nav-link"},[t._v("Home")])]),t._v(" "),e("NuxtLink",{attrs:{to:"/att-about"}},[e("a",{staticClass:"nav-link w-nav-link"},[t._v("About")])]),t._v(" "),e("NuxtLink",{attrs:{to:"/att-resources"}},[e("a",{staticClass:"nav-link w-nav-link"},[t._v("Resources")])]),t._v(" "),e("NuxtLink",{attrs:{to:"/att-faq"}},[e("a",{staticClass:"nav-link w-nav-link"},[t._v("FAQ")])]),t._v(" "),e("NuxtLink",{attrs:{to:"/att-contact"}},[e("a",{staticClass:"nav-link w-nav-link",attrs:{"aria-current":"page"}},[t._v(" Contact ")])]),t._v(" "),e("button",{staticClass:"nav-link w-nav-link",staticStyle:{background:"none"},on:{click:function(n){t.showModal=!0}}},[e("img",{attrs:{src:"assets/images/search.png",loading:"lazy",alt:"",width:"20px"}})]),t._v(" "),e("NuxtLink",{attrs:{to:"/att-index"}},[e("a",{staticClass:"nav-link w-nav-link",attrs:{"aria-current":"page"}},[e("img",{attrs:{src:"assets/images/Facebook-logo-gray.png",loading:"lazy",alt:"",width:"20px"}})])])],1)])]),t._v(" "),e("div",{staticClass:"w-row"},[e("div",{staticClass:"sub-phone attorney left w-col w-col-3 w-col-stack"},[e("div",{staticClass:"w-dropdown",attrs:{"data-hover":"true","data-delay":"0"},on:{mouseover:t.mouseOver,mouseout:t.mouseOut,click:t.toggle}},[t._m(0),t._v(" "),e("nav",{directives:[{name:"show",rawName:"v-show",value:t.isOpen,expression:"isOpen"}],staticClass:"w-dropdown-list attorney",attrs:{id:"myDropdown"}},[e("div",{staticClass:"w-dropdown-list-sub"},[e("NuxtLink",{staticStyle:{"text-decoration":"none"},attrs:{to:"/att-practise-area"}},[e("p",{staticClass:"w-dropdown-link"},[t._v("adoption")])]),t._v(" "),e("NuxtLink",{staticStyle:{"text-decoration":"none"},attrs:{to:"/att-practise-area"}},[e("p",{staticClass:"w-dropdown-link"},[t._v("family law")])]),t._v(" "),e("NuxtLink",{staticStyle:{"text-decoration":"none"},attrs:{to:"/att-practise-area"}},[e("p",{staticClass:"w-dropdown-link"},[t._v("divorce")])]),t._v(" "),e("NuxtLink",{staticStyle:{"text-decoration":"none"},attrs:{to:"/att-practise-area"}},[e("p",{staticClass:"w-dropdown-link"},[t._v("wills/succession")])]),t._v(" "),e("NuxtLink",{staticStyle:{"text-decoration":"none"},attrs:{to:"/att-practise-area"}},[e("p",{staticClass:"w-dropdown-link"},[t._v("criminal defense")])]),t._v(" "),e("NuxtLink",{staticStyle:{"text-decoration":"none"},attrs:{to:"/att-practise-area"}},[e("p",{staticClass:"w-dropdown-link"},[t._v("personal injury")])])],1),t._v(" "),e("div",{staticClass:"w-dropdown-list-sub"},[e("NuxtLink",{staticStyle:{"text-decoration":"none"},attrs:{to:"/att-practise-area"}},[e("p",{staticClass:"w-dropdown-link"},[t._v("dui.dwi")])]),t._v(" "),e("NuxtLink",{staticStyle:{"text-decoration":"none"},attrs:{to:"/att-practise-area"}},[e("p",{staticClass:"w-dropdown-link"},[t._v("workers' comp")])]),t._v(" "),e("NuxtLink",{staticStyle:{"text-decoration":"none"},attrs:{to:"/att-practise-area"}},[e("p",{staticClass:"w-dropdown-link"},[t._v("auto")])]),t._v(" "),e("NuxtLink",{staticStyle:{"text-decoration":"none"},attrs:{to:"/att-practise-area"}},[e("p",{staticClass:"w-dropdown-link"},[t._v("1b-wheeler accident")])]),t._v(" "),e("NuxtLink",{staticStyle:{"text-decoration":"none"},attrs:{to:"/att-practise-area"}},[e("p",{staticClass:"w-dropdown-link"},[t._v("maritime")])]),t._v(" "),e("NuxtLink",{staticStyle:{"text-decoration":"none"},attrs:{to:"/att-practise-area"}},[e("p",{staticClass:"w-dropdown-link"},[t._v("\n                    irrevocable/"),e("br"),t._v("\n                    revocable trust\n                  ")])])],1)])])]),t._v(" "),t._m(1),t._v(" "),e("div",{staticClass:"site-toggle w-col w-col-5 w-col-stack"},[e("Nuxt-link",{attrs:{to:"/"}},[e("a",{staticClass:"toggle-button attorney w-button",attrs:{href:"/"}},[e("p",[t._v("Real Estate")]),t._v(" "),e("hr",{attrs:{size:"2",width:"30%"}})])])],1)])])]),t._v(" "),e("SavedModal",{directives:[{name:"show",rawName:"v-show",value:t.showModal,expression:"showModal"}],on:{"close-modal":function(n){t.showModal=!1}}})],1)}),[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"dropdown-toggle w-dropdown-toggle"},[e("div",{staticClass:"icon w-icon-dropdown-toggle"}),t._v(" "),e("div",{staticClass:"text-block-4 attorney"},[t._v("Practice Areas")])])},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"\n            sub-phone sub-phone-number\n            attorney\n            w-col w-col-4 w-col-stack\n          "},[e("a",{staticClass:"phone-number",attrs:{href:"tel:337-893-3423"}},[t._v("337-893-3423")])])}],!1,null,null,null);n.default=component.exports;installComponents(component,{SavedModal:e(261).default})}}]);