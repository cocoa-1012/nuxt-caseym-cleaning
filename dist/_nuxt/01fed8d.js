(window.webpackJsonp=window.webpackJsonp||[]).push([[6,29,30,31],{276:function(t,e,n){"use strict";n.r(e);var o=n(40),component=Object(o.a)({},(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"w-row mobile-nav-phone"},[n("div",{staticClass:"sub-phone sub-phone-number",staticStyle:{"font-size":"18px"}},[n("a",{staticClass:"phone-number",attrs:{href:"tel:337-893-3423"}},[t._v("337-893-3423")])])])}],!1,null,null,null);e.default=component.exports},283:function(t,e,n){"use strict";n.r(e);var o={data:function(){return{isOpen:!1}}},r=n(40),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mobile-nav-practice"},[n("div",{staticClass:"sub-phone",staticStyle:{width:"50%"}},[n("div",[n("div",[n("div",{staticClass:"text-block-4 attorney",on:{click:function(e){t.isOpen=!t.isOpen}}},[t._v("\n          Real Estate    \n          "+t._s(t.isOpen?"▲":"▼")+"\n        ")])]),t._v(" "),t.isOpen?n("nav",{staticClass:"mobile-practice-dropdown",staticStyle:{"background-color":"rgba(79, 116, 139, 0.9)"}},[n("div",{staticClass:"w-dropdown-list-sub mobile-legal"},[n("NuxtLink",{staticStyle:{"text-decoration":"none"},attrs:{to:"/practise-area"}},[n("p",{staticClass:"w-dropdown-link"},[t._v("Commercial")])]),t._v(" "),n("NuxtLink",{staticStyle:{"text-decoration":"none"},attrs:{to:"/practise-area"}},[n("p",{staticClass:"w-dropdown-link"},[t._v("Title Settlement")])]),t._v(" "),n("NuxtLink",{staticStyle:{"text-decoration":"none"},attrs:{to:"/practise-area"}},[n("p",{staticClass:"w-dropdown-link"},[t._v("Loan Closing")])])],1),t._v(" "),n("div",{staticClass:"w-dropdown-list-sub mobile-legal"},[n("NuxtLink",{staticStyle:{"text-decoration":"none"},attrs:{to:"/practise-area"}},[n("p",{staticClass:"w-dropdown-link"},[t._v("Residential")])]),t._v(" "),n("NuxtLink",{staticStyle:{"text-decoration":"none"},attrs:{to:"/practise-area"}},[n("p",{staticClass:"w-dropdown-link"},[t._v("Estate Planning")])])],1)]):t._e()])]),t._v(" "),n("div",{staticClass:"site-toggle",staticStyle:{width:"50%"}},[n("Nuxt-link",{attrs:{to:"/att-index"}},[n("a",{staticClass:"toggle-button w-button",staticStyle:{"padding-left":"20px","align-items":"center"},attrs:{href:"/"}},[n("p",[t._v("Attorneys At Law")]),t._v(" "),n("hr",{attrs:{size:"2",width:"80px"}})])])],1)])}),[],!1,null,null,null);e.default=component.exports},302:function(t,e,n){var content=n(314);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(53).default)("3dafd8c9",content,!0,{sourceMap:!1})},305:function(t,e,n){"use strict";n.r(e);var o=n(272),r=n.n(o),l=(n(273),n(274),{name:"Carousel",components:{VueSlickCarousel:r.a},data:function(){return{tab1:!0,tab2:!1,tab3:!1}},methods:{showPage:function(t){this.$refs.carousel.goTo(t),0===t?(this.tab1=!0,this.tab2=!1,this.tab3=!1,document.getElementById("carousel-item0").classList.add("w--current"),document.getElementById("carousel-item1").classList.remove("w--current"),document.getElementById("carousel-item2").classList.remove("w--current")):1===t&&(this.tab1=!1,this.tab2=!0,this.tab3=!1,document.getElementById("carousel-item1").classList.add("w--current"),document.getElementById("carousel-item0").classList.remove("w--current"),document.getElementById("carousel-item2").classList.remove("w--current")),2===t&&(this.tab1=!1,this.tab2=!1,this.tab3=!0,document.getElementById("carousel-item2").classList.add("w--current"),document.getElementById("carousel-item1").classList.remove("w--current"),document.getElementById("carousel-item0").classList.remove("w--current"))}}}),c=n(40),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"working-with-section wf-section"},[n("div",{staticClass:"tabs w-tabs",attrs:{"data-current":"WORKING WITH HOME BUYERS","data-easing":"ease-in-out","data-duration-in":"300","data-duration-out":"100"}},[n("div",{staticClass:"tabs-menu w-tab-menu home-carousel"},[n("a",{staticClass:"\n          tab-link-working-with-home-buyers\n          w-inline-block w-tab-link w--current\n        ",attrs:{id:"carousel-item0","data-w-tab":"WORKING WITH HOME BUYERS"},on:{click:function(e){return t.showPage(0)}}},[t._m(0)]),t._v(" "),n("a",{staticClass:"tab-link-working-with-lenders w-inline-block w-tab-link",attrs:{id:"carousel-item1","data-w-tab":"WORKING WITH LENDERS"},on:{click:function(e){return t.showPage(1)}}},[t._m(1)]),t._v(" "),n("a",{staticClass:"tab-link-working-with-realtors w-inline-block w-tab-link",attrs:{id:"carousel-item2","data-w-tab":"WORKING WITH REALTORS"},on:{click:function(e){return t.showPage(2)}}},[t._m(2)])]),t._v(" "),n("div",{staticClass:"carousel-main desktop-view",staticStyle:{"margin-top":"-15px"}},[n("VueSlickCarousel",{ref:"carousel",staticClass:"w-tab-content",attrs:{fade:!0,draggable:!1}},[n("div",{staticClass:"w-tab-pane w--tab-active",attrs:{"data-w-tab":"WORKING WITH HOME BUYERS"}},[n("div",{staticClass:"tabs-images w-row desktop-view"},[n("div",{staticClass:"image-one w-col w-col-6"}),t._v(" "),n("div",{staticClass:"image-two w-col w-col-6"})]),t._v(" "),n("div",{staticClass:"workingwithtextsection w-row"},[n("div",{staticClass:"w-col w-col-4"},[n("h1",{staticClass:"working-with-header home-title"},[n("em",[t._v("Working")]),n("br"),n("em",[t._v("with")]),n("br"),t._v(" "),n("strong",{staticClass:"bold-text"},[t._v("Home Buyers")])])]),t._v(" "),n("div",{staticClass:"w-col w-col-8"},[n("p",{staticClass:"working-with-subtext"},[t._v("\n                Purchasing real estate can be stressful, drawn-out, and\n                frustrating. For most people, it’s the biggest investment\n                they’ve ever made, and they want to make sure they’re\n                protected. Choosing the right title attorney is essential to\n                avoiding headaches down the road, an experienced lawyer can\n                ensure that your transaction is performed and recorded\n                properly. "),n("br"),n("br"),t._v("We’ve worked with homeowners across\n                Acadiana, helping them navigate through the complex legal\n                framework of real estate purchases. Assisting those in our\n                community, to find a place to call home. If you’re interested\n                in purchasing real estate, whether you’re a first-time buyer,\n                an investment property owner, relocating, or just downsizing,\n                our staff is ready and available to help you settle in. Have\n                your realtor or lender contact Gabe A. Duhon Law Firm to\n                handle the purchase of your next home and close with\n                confidence."),n("br"),n("br")]),t._v(" "),n("a",{staticClass:"button w-button learn-more",attrs:{href:"#"}},[n("strong",[t._v("LEARN MORE")])])])])]),t._v(" "),n("div",{staticClass:"w-tab-pane",attrs:{"data-w-tab":"WORKING WITH LENDERS"}},[n("div",{staticClass:"tabs-images w-row desktop-view"},[n("div",{staticClass:"image-one w-col w-col-6"}),t._v(" "),n("div",{staticClass:"image-two w-col w-col-6"})]),t._v(" "),n("div",{staticClass:"workingwithtextsection w-row spec02"},[n("div",{staticClass:"w-col w-col-4"},[n("h1",{staticClass:"working-with-header home-title"},[n("em",[t._v("Working")]),n("br"),n("em",[t._v("with")]),n("br"),t._v(" "),n("strong",{staticClass:"bold-text"},[t._v("Lenders ")])])]),t._v(" "),n("div",{staticClass:"w-col w-col-8"},[n("p",{staticClass:"working-with-subtext"},[t._v("\n                Mortgage lenders are responsible for sourcing an appropriate\n                loan for the homeowner's needs, beginning with your\n                preapproval and extending far beyond the transaction. Your\n                lender acts as the middleman between you and the bank or loan\n                originator, providing the title attorney with the proper\n                documentation and funding. As the title attorney, we act as\n                your escrow agent to hold monies involved in the transaction,\n                including deposits, closing costs, etc. "),n("br"),t._v(" "),n("br"),t._v("\n                At Gabe A. Duhon Law Firm, we work together with mortgage\n                lenders to help you close with confidence. Whether you’re a\n                first-time buyer or have closed multiple times, you and your\n                lender can trust our experienced staff to get the job done\n                right. "),n("br"),n("br")]),t._v(" "),n("a",{staticClass:"button w-button learn-more",attrs:{href:"#"}},[n("strong",[t._v("LEARN MORE")])])])])]),t._v(" "),n("div",{staticClass:"w-tab-pane",attrs:{"data-w-tab":"WORKING WITH REALTORS"}},[n("div",{staticClass:"tabs-images w-row desktop-view"},[n("div",{staticClass:"image-one w-col w-col-6"}),t._v(" "),n("div",{staticClass:"image-two w-col w-col-6"})]),t._v(" "),n("div",{staticClass:"workingwithtextsection w-row"},[n("div",{staticClass:"w-col w-col-4"},[n("h1",{staticClass:"working-with-header home-title"},[n("em",[t._v("Working")]),n("br"),n("em",[t._v("with")]),n("br"),t._v(" "),n("strong",{staticClass:"bold-text"},[t._v("Realtors ")])])]),t._v(" "),n("div",{staticClass:"w-col w-col-8"},[n("p",{staticClass:"working-with-subtext"},[t._v("\n                Realtors represent their clients to the best of their\n                abilities, from the initial showing through closing. These\n                professionals know that choosing the right title attorney can\n                make the difference between a smooth closing and a chaotic\n                one. Acadiana’s real estate agents trust Gabe A. Duhon Law\n                Firm to handle their client’s real estate investments, both\n                seasoned veterans and new agents. "),n("br"),n("br"),t._v("Agents may\n                represent both the buyer and the seller, so making the closing\n                process simple for all parties is paramount to our success.\n                With all the moving parts of a real estate transaction,\n                worrying about the title attorney should be low on your\n                agent's list. We provide peace of mind for both sides,\n                ensuring that your closing is executed properly."),n("br"),n("br")]),t._v(" "),n("a",{staticClass:"button w-button learn-more",attrs:{href:"#"}},[t._v("LEARN MORE")])])])])]),t._v(" "),n("div",{staticClass:"carousel-overlay"})],1),t._v(" "),n("div",{staticClass:"carousel-main mobile-view w-tab-content"},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.tab1,expression:"tab1"}],staticClass:"w-tab-pane w--tab-active"},[t._m(3)]),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:t.tab2,expression:"tab2"}],staticClass:"w-tab-pane w--tab-active"},[t._m(4)]),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:t.tab3,expression:"tab3"}],staticClass:"w-tab-pane w--tab-active"},[t._m(5)])])])])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tabs-heading"},[t._v("\n          WORKING WITH "),n("strong",[t._v("HOME BUYERS")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"text-block-2 tabs-heading"},[t._v("\n          WORKING WITH "),n("strong",[t._v("LENDERS")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tabs-heading"},[t._v("WORKING WITH "),n("strong",[t._v("REALTORS")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"workingwithtextsection w-row spec02"},[n("div",{staticClass:"w-col w-col-4"},[n("h1",{staticClass:"working-with-header home-title"},[n("em",[t._v("Working")]),n("br"),n("em",[t._v("with")]),n("br"),t._v(" "),n("strong",{staticClass:"bold-text"},[t._v("Home Buyers")])])]),t._v(" "),n("div",{staticClass:"w-col w-col-8"},[n("p",{staticClass:"working-with-subtext"},[n("br"),t._v("\n              Purchasing real estate can be stressful, drawn-out, and\n              frustrating. For most people, it’s the biggest investment\n              they’ve ever made, and they want to make sure they’re protected.\n              Choosing the right title attorney is essential to avoiding\n              headaches down the road, an experienced lawyer can ensure that\n              your transaction is performed and recorded properly.\n              "),n("br"),n("br"),t._v("We’ve worked with homeowners across Acadiana,\n              helping them navigate through the complex legal framework of\n              real estate purchases. Assisting those in our community, to find\n              a place to call home. If you’re interested in purchasing real\n              estate, whether you’re a first-time buyer, an investment\n              property owner, relocating, or just downsizing, our staff is\n              ready and available to help you settle in. Have your realtor or\n              lender contact Gabe A. Duhon Law Firm to handle the purchase of\n              your next home and close with confidence."),n("br")]),t._v(" "),n("div",{staticClass:"spec08"},[n("a",{staticClass:"button w-button learn-more",attrs:{href:"#"}},[n("strong",[t._v("LEARN MORE")])])])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"workingwithtextsection w-row spec02"},[n("div",{staticClass:"w-col w-col-4"},[n("h1",{staticClass:"working-with-header home-title"},[n("em",[t._v("Working")]),n("br"),n("em",[t._v("with")]),n("br"),t._v(" "),n("strong",{staticClass:"bold-text"},[t._v("Lenders ")])])]),t._v(" "),n("div",{staticClass:"w-col w-col-8"},[n("p",{staticClass:"working-with-subtext"},[n("br"),t._v("\n              Mortgage lenders are responsible for sourcing an appropriate\n              loan for the homeowner's needs, beginning with your preapproval\n              and extending far beyond the transaction. Your lender acts as\n              the middleman between you and the bank or loan originator,\n              providing the title attorney with the proper documentation and\n              funding. As the title attorney, we act as your escrow agent to\n              hold monies involved in the transaction, including deposits,\n              closing costs, etc. "),n("br"),t._v(" "),n("br"),t._v("\n              At Gabe A. Duhon Law Firm, we work together with mortgage\n              lenders to help you close with confidence. Whether you’re a\n              first-time buyer or have closed multiple times, you and your\n              lender can trust our experienced staff to get the job done\n              right."),n("br")]),t._v(" "),n("div",{staticClass:"spec08"},[n("a",{staticClass:"button w-button learn-more",attrs:{href:"#"}},[n("strong",[t._v("LEARN MORE")])])])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"workingwithtextsection w-row spec02"},[n("div",{staticClass:"w-col w-col-4"},[n("h1",{staticClass:"working-with-header home-title"},[n("em",[t._v("Working")]),n("br"),n("em",[t._v("with")]),n("br"),t._v(" "),n("strong",{staticClass:"bold-text"},[t._v("Realtors ")])])]),t._v(" "),n("div",{staticClass:"w-col w-col-8"},[n("p",{staticClass:"working-with-subtext"},[n("br"),t._v("\n              Realtors represent their clients to the best of their abilities,\n              from the initial showing through closing. These professionals\n              know that choosing the right title attorney can make the\n              difference between a smooth closing and a chaotic one.\n              Acadiana’s real estate agents trust Gabe A. Duhon Law Firm to\n              handle their client’s real estate investments, both seasoned\n              veterans and new agents. "),n("br"),n("br"),t._v("Agents may represent both\n              the buyer and the seller, so making the closing process simple\n              for all parties is paramount to our success. With all the moving\n              parts of a real estate transaction, worrying about the title\n              attorney should be low on your agent's list. We provide peace of\n              mind for both sides, ensuring that your closing is executed\n              properly."),n("br")]),t._v(" "),n("div",{staticClass:"spec08"},[n("a",{staticClass:"button w-button learn-more",attrs:{href:"#"}},[n("strong",[t._v("LEARN MORE")])])])])])}],!1,null,null,null);e.default=component.exports},313:function(t,e,n){"use strict";n(302)},314:function(t,e,n){var o=n(52)(!1);o.push([t.i,"input[data-v-195d2256],textarea[data-v-195d2256]{border-radius:3px}[data-v-195d2256]::-moz-placeholder{font-family:Montserrat;font-size:13px;color:#231f20;opacity:1}[data-v-195d2256]:-ms-input-placeholder{opacity:1}[data-v-195d2256]::placeholder{font-family:Montserrat;font-size:13px;color:#231f20;opacity:1}[data-v-195d2256]:-ms-input-placeholder{font-family:Montserrat;font-size:13px;color:#231f20}[data-v-195d2256]::-ms-input-placeholder{font-family:Montserrat;font-size:13px;color:#231f20}",""]),t.exports=o},320:function(t,e,n){"use strict";n.r(e);n(313);var o=n(40),component=Object(o.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home-mobile"},[n("div",{staticClass:"page-hero home wf-section"},[n("MobileNavPractise"),t._v(" "),t._m(0)],1),t._v(" "),n("MobileNavPhone"),t._v(" "),n("HomeCarousel"),t._v(" "),t._m(1),t._v(" "),n("br"),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7)],1)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"overlay-section w-container home",staticStyle:{"padding-right":"50px"}},[n("img",{staticClass:"desktop-view",attrs:{src:"assets/images/Logo Icon.png",loading:"lazy",alt:""}}),t._v(" "),n("h1",{staticClass:"hero-text desktop-view"},[t._v("\n        Experienced and Local"),n("br"),t._v("Attorneys Here for You\n      ")]),t._v(" "),n("h1",{staticClass:"hero-text mobile-view"},[t._v("\n        Experienced and Local Attorneys Here for You\n      ")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"w-col mobile-contact-form"},[n("div",{staticStyle:{display:"flex","justify-content":"space-between"}},[n("p",{staticStyle:{"font-size":"20px"}},[t._v("CONTACT US")])]),t._v(" "),n("div",[n("form",{attrs:{id:"email-form",name:"email-form","data-name":"Email Form"}},[n("div",{staticClass:"w-col w-col-6 contact-us-group"},[n("input",{staticClass:"w-input",attrs:{id:"name",type:"text",maxlength:"256",name:"name","data-name":"Name",placeholder:"NAME"}}),t._v(" "),n("input",{staticClass:"w-input",attrs:{id:"email",type:"email",maxlength:"256",name:"email","data-name":"Email",placeholder:"EMAIL",required:""}}),t._v(" "),n("input",{staticClass:"w-input",attrs:{id:"Phone",type:"tel",maxlength:"256",name:"Phone","data-name":"Phone",placeholder:"PHONE",required:""}})]),t._v(" "),n("div",{staticClass:"contact-form-column-two w-col w-col-6"},[n("textarea",{staticClass:"textarea w-input",attrs:{id:"field",placeholder:"MESSAGE",maxlength:"5000",name:"field",rows:"6"}})])]),t._v(" "),n("div",{staticClass:"w-form-done"},[n("div",[t._v("Thank you! Your submission has been received!")])]),t._v(" "),n("div",{staticClass:"w-form-fail"},[n("div",[t._v("Oops! Something went wrong while submitting the form.")])])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"why-choose-us wf-section desktop-view",staticStyle:{overflow:"hidden"}},[n("div",{staticClass:"wcu-images w-row",staticStyle:{width:"1230px"}},[n("div",{staticClass:"w-col w-col-4"}),t._v(" "),n("div",{staticClass:"w-col w-col-8"},[n("div",{staticClass:"wcu-image-one w-col w-col-9",staticStyle:{position:"relative"}},[n("div",{staticClass:"wcu-image-two w-col w-col-8",staticStyle:{position:"absolute",left:"100%"}})])])]),t._v(" "),n("h1",{staticClass:"why-choose-us-title-container real-home"},[t._v("Why Choose Us")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"why-choose-us wf-section mobile-view"},[n("div",{staticClass:"wcu-images w-row"},[n("div",{staticClass:"wcu-image-one-home w-col w-col-3"})]),t._v(" "),n("h1",{staticClass:"why-choose-us-title-container spec09"},[t._v("Why "),n("br"),t._v("Choose Us")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"about-grey home-mobile wf-section"},[n("div",{staticClass:"about-grey-text-section w-row"},[n("div",{staticClass:"w-col w-col-6 w-col-medium-6"},[n("p",{staticClass:"about-grey-text"},[t._v("\n          At the law office of Gabe A. Duhon, LLC, attorneys Gabe A. Duhon and\n          Wyman E. Bankston are proud to serve the citizens of Abbeville,\n          Livingston and the rest of Acadiana with personalized local service\n          since 2006."),n("strong",[n("br")])]),t._v(" "),n("a",{staticClass:"button w-button desktop-view",staticStyle:{width:"fit-content"},attrs:{href:"meet-our-attorneys.html"}},[n("strong",[t._v("MEET OUR ATTORNEYS")])])]),t._v(" "),n("div",{staticClass:"column-7 w-col w-col-3 w-col-medium-3"},[n("img",{staticClass:"circle-image",attrs:{src:"assets/images/person1.046db6ca.png",loading:"lazy",alt:""}}),t._v(" "),n("p",{staticClass:"about-grey-text title"},[t._v("\n          Gabe A. Duhon"),n("strong",[n("br")]),t._v(" "),n("span",{staticClass:"about-grey-text title sub-title"},[t._v("\n            attorney/owner"),n("strong",[n("br")])])])]),t._v(" "),n("div",{staticClass:"column-9 w-col w-col-3 w-col-medium-3 second-image"},[n("img",{staticClass:"circle-image",attrs:{src:"assets/images/person2.b2145e19.png",loading:"lazy",alt:""}}),t._v(" "),n("p",{staticClass:"about-grey-text title"},[t._v("\n          Kimberly K. Souriyakhamphong"),n("strong",[n("br")]),t._v(" "),n("span",{staticClass:"about-grey-text title sub-title"},[t._v("\n            associate attorney"),n("strong",[n("br")])])])]),t._v(" "),n("div",{staticClass:"column-9 w-col w-col-3 w-col-medium-3 second-image mobile-view"},[n("a",{staticClass:"button w-button",staticStyle:{width:"fit-content"},attrs:{href:"meet-our-attorneys.html"}},[n("strong",[t._v("MEET OUR ATTORNEYS")])])])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"why-choose-us wf-section mobile-view"},[n("div",{staticClass:"wcu-images w-row"},[n("div",{staticClass:"wcu-image-two w-col w-col-3"})]),t._v(" "),n("div",{staticStyle:{height:"190px"}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"contact-section wf-section"},[n("div",{staticClass:"contact-container w-container home-contact-container"},[n("div",{staticClass:"w-row home-contact-form"},[n("div",{staticClass:"w-col w-col-4"},[n("p",{staticClass:"contact-section-text description padding"},[t._v("\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam\n            aliquam cursus metus, at accumsan massa ornare id. Aliquam\n            facilisis ex aliquet, lacinia nunc at, semper nunc. Vivamus vel\n            urna nec quam elementum ultricies. Vivamus sed sem venenatis nibh\n            lacinia imperdiet sit amet sit amet ex. Nam vehicula venenatis\n            odio, id feugiat libero gravida facilisis. Class aptent taciti\n            sociosqu ad litora torquent per conubia nostra, per inceptos\n            himenaeos. "),n("br"),t._v("\n            Donec commodo ex vitae odio tincidunt sodales vel at massa. Nulla\n            facilisi. Etiam cursus varius urna, vel mattis sapien venenatis\n            at. Donec et eros eros. Phasellus arcu mi, hendrerit eu nibh eu,\n            condimentum iaculis sapien."),n("br")]),t._v(" "),n("p",{staticClass:"contact-section-text description padding mobile-view"},[t._v("\n            Donec eu blandit elit, in ultrices tellus. Maecenas ultricies\n            bibendum sodales. Morbi in tincidunt eros. Vivamus nec ipsum\n            suscipit, sagittis libero eget, vehicula leo. Aliquam erat\n            volutpat. Donec auctor luctus diam, id finibus neque pellentesque\n            vitae. Duis pretium ut velit quis cursus. Aliquam vitae leo nec\n            neque luctus gravida. Nulla vestibulum, felis nec blandit\n            lobortis, neque nisi aliquam nunc, eget vehicula lectus augue\n            interdum leo. Nam vestibulum a sem id ornare. Praesent convallis\n            mollis elementum."),n("br")])]),t._v(" "),n("div",{staticClass:"w-col w-col-8 main-contact-form"},[n("p",{staticClass:"contact-us-title description"},[t._v("\n            Contact Us"),n("strong",[n("br")])]),t._v(" "),n("div",{staticClass:"w-form"},[n("form",{attrs:{id:"email-form",name:"email-form","data-name":"Email Form"}},[n("div",{staticClass:"w-row"},[n("div",{staticClass:"\n                    contact-form-column-two\n                    w-col w-col-6\n                    contact-us-group\n                  "},[n("input",{staticClass:"w-input",attrs:{id:"name",type:"text",maxlength:"256",name:"name","data-name":"Name",placeholder:"NAME"}}),t._v(" "),n("input",{staticClass:"w-input",attrs:{id:"email",type:"email",maxlength:"256",name:"email","data-name":"Email",placeholder:"EMAIL",required:""}}),t._v(" "),n("input",{staticClass:"w-input",attrs:{id:"Phone",type:"tel",maxlength:"256",name:"Phone","data-name":"Phone",placeholder:"PHONE",required:""}})]),t._v(" "),n("div",{staticClass:"contact-form-column-two w-col w-col-6"},[n("textarea",{staticClass:"textarea w-input",attrs:{id:"field",placeholder:"MESSAGE",maxlength:"5000",name:"field",rows:"6"}}),t._v(" "),n("input",{staticClass:"button contact w-button submit",staticStyle:{"text-align":"right"},attrs:{type:"submit",value:"Submit","data-wait":"Please wait..."}})])])]),t._v(" "),n("div",{staticClass:"w-form-done"},[n("div",[t._v("Thank you! Your submission has been received!")])]),t._v(" "),n("div",{staticClass:"w-form-fail"},[n("div",[t._v("Oops! Something went wrong while submitting the form.")])])])])])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"real-estate-title-services-section wf-section"},[n("div",{staticClass:"workingwithtextsection real-estate-title-services w-row"},[n("div",{staticClass:"w-col w-col-4"},[n("h1",{staticClass:"working-with-header regular-font",staticStyle:{"margin-top":"0px"}},[t._v("\n          Our Real "),n("br"),t._v("Estate Title "),n("br"),t._v("Services\n        ")])]),t._v(" "),n("div",{staticClass:"w-col w-col-8"},[n("p",{staticClass:"working-with-subtext"},[t._v("\n          Gabe A. Duhon Law Firm is a full-service law firm, serving Acadiana\n          and the surrounding area since 2006. We take pride in helping those\n          in our community find a place to call home. Our skilled attorneys\n          and staff have the experience you need, including standard\n          residential transactions, commercial property purchases, refinances,\n          and other legal representation for all your real estate needs.\n          "),n("br"),n("br"),t._v("\n          For buyers, sellers, real estate agents, and mortgage lenders trust\n          the right title attorney for a seamless transaction every time. We\n          provide comprehensive title services and professional legal advice\n          during and after your closing and look forward to many years to come\n          as your trusted title attorney. In addition to our title services,\n          we also provide estate planning assistance like drafting wills,\n          filing successions, title settlements, and more. Contact us today to\n          schedule a consultation, and close with confidence."),n("br")])])])])}],!1,null,"195d2256",null);e.default=component.exports;installComponents(component,{MobileNavPractise:n(283).default,MobileNavPhone:n(276).default,HomeCarousel:n(305).default})}}]);