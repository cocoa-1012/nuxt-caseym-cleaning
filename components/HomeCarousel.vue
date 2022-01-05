<template>
  <div class="working-with-section wf-section">
    <div
      data-current="WORKING WITH HOME BUYERS"
      data-easing="ease-in-out"
      data-duration-in="300"
      data-duration-out="100"
      class="tabs w-tabs"
    >
      <div class="tabs-menu w-tab-menu home-carousel">
        <a
          id="carousel-item0"
          data-w-tab="WORKING WITH HOME BUYERS"
          class="
            tab-link-working-with-home-buyers
            w-inline-block w-tab-link w--current
          "
          @click="showPage(0)"
        >
          <div class="tabs-heading">
            WORKING WITH <strong>HOME&nbsp;BUYERS</strong>
          </div>
        </a>
        <a
          id="carousel-item1"
          data-w-tab="WORKING WITH LENDERS"
          class="tab-link-working-with-lenders w-inline-block w-tab-link"
          @click="showPage(1)"
        >
          <div class="text-block-2 tabs-heading">
            WORKING WITH <strong>LENDERS</strong>
          </div>
        </a>
        <a
          id="carousel-item2"
          data-w-tab="WORKING WITH REALTORS"
          class="tab-link-working-with-realtors w-inline-block w-tab-link"
          @click="showPage(2)"
        >
          <div class="tabs-heading">WORKING WITH <strong>REALTORS</strong></div>
        </a>
      </div>
      <div class="carousel-main desktop-view" style="margin-top: -15px">
        <VueSlickCarousel
          ref="carousel"
          class="w-tab-content"
          :fade="true"
          :draggable="false"
        >
          <div
            data-w-tab="WORKING WITH HOME BUYERS"
            class="w-tab-pane w--tab-active"
          >
            <div class="tabs-images w-row desktop-view">
              <div class="image-one w-col w-col-6"></div>
              <div class="image-two w-col w-col-6"></div>
            </div>
            <div class="workingwithtextsection w-row">
              <div class="w-col w-col-4">
                <h1 class="working-with-header home-title">
                  <em>Working</em><br /><em>with</em><br />
                  <strong class="bold-text">Home&nbsp;Buyers</strong>
                </h1>
              </div>
              <div class="w-col w-col-8">
                <p class="working-with-subtext">
                  Purchasing real estate can be stressful, drawn-out, and
                  frustrating. For most people, it’s the biggest investment
                  they’ve ever made, and they want to make sure they’re
                  protected. Choosing the right title attorney is essential to
                  avoiding headaches down the road, an experienced lawyer can
                  ensure that your transaction is performed and recorded
                  properly. <br /><br />We’ve worked with homeowners across
                  Acadiana, helping them navigate through the complex legal
                  framework of real estate purchases. Assisting those in our
                  community, to find a place to call home. If you’re interested
                  in purchasing real estate, whether you’re a first-time buyer,
                  an investment property owner, relocating, or just downsizing,
                  our staff is ready and available to help you settle in. Have
                  your realtor or lender contact Gabe A. Duhon Law Firm to
                  handle the purchase of your next home and close with
                  confidence.<br /><br />
                </p>
                <a href="#" class="button w-button learn-more">
                  <strong>LEARN MORE</strong>
                </a>
              </div>
            </div>
          </div>
          <div data-w-tab="WORKING WITH LENDERS" class="w-tab-pane">
            <div class="tabs-images w-row desktop-view">
              <div class="image-one w-col w-col-6"></div>
              <div class="image-two w-col w-col-6"></div>
            </div>
            <div class="workingwithtextsection w-row spec02">
              <div class="w-col w-col-4">
                <h1 class="working-with-header home-title">
                  <em>Working</em><br /><em>with</em><br />
                  <strong class="bold-text">Lenders </strong>
                </h1>
              </div>
              <div class="w-col w-col-8">
                <p class="working-with-subtext">
                  Mortgage lenders are responsible for sourcing an appropriate
                  loan for the homeowner's needs, beginning with your
                  preapproval and extending far beyond the transaction. Your
                  lender acts as the middleman between you and the bank or loan
                  originator, providing the title attorney with the proper
                  documentation and funding. As the title attorney, we act as
                  your escrow agent to hold monies involved in the transaction,
                  including deposits, closing costs, etc. <br />
                  <br />
                  At Gabe A. Duhon Law Firm, we work together with mortgage
                  lenders to help you close with confidence. Whether you’re a
                  first-time buyer or have closed multiple times, you and your
                  lender can trust our experienced staff to get the job done
                  right. <br /><br />
                </p>
                <a href="#" class="button w-button learn-more"
                  ><strong>LEARN MORE</strong></a
                >
              </div>
            </div>
          </div>
          <div data-w-tab="WORKING WITH REALTORS" class="w-tab-pane">
            <div class="tabs-images w-row desktop-view">
              <div class="image-one w-col w-col-6"></div>
              <div class="image-two w-col w-col-6"></div>
            </div>
            <div class="workingwithtextsection w-row">
              <div class="w-col w-col-4">
                <h1 class="working-with-header home-title">
                  <em>Working</em><br /><em>with</em><br />
                  <strong class="bold-text">Realtors </strong>
                </h1>
              </div>
              <div class="w-col w-col-8">
                <p class="working-with-subtext">
                  Realtors represent their clients to the best of their
                  abilities, from the initial showing through closing. These
                  professionals know that choosing the right title attorney can
                  make the difference between a smooth closing and a chaotic
                  one. Acadiana’s real estate agents trust Gabe A. Duhon Law
                  Firm to handle their client’s real estate investments, both
                  seasoned veterans and new agents. <br /><br />Agents may
                  represent both the buyer and the seller, so making the closing
                  process simple for all parties is paramount to our success.
                  With all the moving parts of a real estate transaction,
                  worrying about the title attorney should be low on your
                  agent's list. We provide peace of mind for both sides,
                  ensuring that your closing is executed properly.<br /><br />
                </p>
                <a href="#" class="button w-button learn-more">LEARN MORE</a>
              </div>
            </div>
          </div>
        </VueSlickCarousel>
        <div class="carousel-overlay"></div>
      </div>
      <div class="carousel-main mobile-view w-tab-content">
        <div v-show="tab1" class="w-tab-pane w--tab-active">
          <div class="workingwithtextsection w-row spec02">
            <div class="w-col w-col-4">
              <h1 class="working-with-header home-title">
                <em>Working</em><br /><em>with</em><br />
                <strong class="bold-text">Home&nbsp;Buyers</strong>
              </h1>
            </div>
            <div class="w-col w-col-8">
              <p class="working-with-subtext">
                <br />
                Purchasing real estate can be stressful, drawn-out, and
                frustrating. For most people, it’s the biggest investment
                they’ve ever made, and they want to make sure they’re protected.
                Choosing the right title attorney is essential to avoiding
                headaches down the road, an experienced lawyer can ensure that
                your transaction is performed and recorded properly.
                <br /><br />We’ve worked with homeowners across Acadiana,
                helping them navigate through the complex legal framework of
                real estate purchases. Assisting those in our community, to find
                a place to call home. If you’re interested in purchasing real
                estate, whether you’re a first-time buyer, an investment
                property owner, relocating, or just downsizing, our staff is
                ready and available to help you settle in. Have your realtor or
                lender contact Gabe A. Duhon Law Firm to handle the purchase of
                your next home and close with confidence.<br />
              </p>
              <div class="spec08">
                <a href="#" class="button w-button learn-more"
                  ><strong>LEARN MORE</strong>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div v-show="tab2" class="w-tab-pane w--tab-active">
          <div class="workingwithtextsection w-row spec02">
            <div class="w-col w-col-4">
              <h1 class="working-with-header home-title">
                <em>Working</em><br /><em>with</em><br />
                <strong class="bold-text">Lenders </strong>
              </h1>
            </div>
            <div class="w-col w-col-8">
              <p class="working-with-subtext">
                <br />
                Mortgage lenders are responsible for sourcing an appropriate
                loan for the homeowner's needs, beginning with your preapproval
                and extending far beyond the transaction. Your lender acts as
                the middleman between you and the bank or loan originator,
                providing the title attorney with the proper documentation and
                funding. As the title attorney, we act as your escrow agent to
                hold monies involved in the transaction, including deposits,
                closing costs, etc. <br />
                <br />
                At Gabe A. Duhon Law Firm, we work together with mortgage
                lenders to help you close with confidence. Whether you’re a
                first-time buyer or have closed multiple times, you and your
                lender can trust our experienced staff to get the job done
                right.<br />
              </p>
              <div class="spec08">
                <a href="#" class="button w-button learn-more"
                  ><strong>LEARN MORE</strong>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div v-show="tab3" class="w-tab-pane w--tab-active">
          <div class="workingwithtextsection w-row spec02">
            <div class="w-col w-col-4">
              <h1 class="working-with-header home-title">
                <em>Working</em><br /><em>with</em><br />
                <strong class="bold-text">Realtors </strong>
              </h1>
            </div>
            <div class="w-col w-col-8">
              <p class="working-with-subtext">
                <br />
                Realtors represent their clients to the best of their abilities,
                from the initial showing through closing. These professionals
                know that choosing the right title attorney can make the
                difference between a smooth closing and a chaotic one.
                Acadiana’s real estate agents trust Gabe A. Duhon Law Firm to
                handle their client’s real estate investments, both seasoned
                veterans and new agents. <br /><br />Agents may represent both
                the buyer and the seller, so making the closing process simple
                for all parties is paramount to our success. With all the moving
                parts of a real estate transaction, worrying about the title
                attorney should be low on your agent's list. We provide peace of
                mind for both sides, ensuring that your closing is executed
                properly.<br />
              </p>
              <div class="spec08">
                <a href="#" class="button w-button learn-more"
                  ><strong>LEARN MORE</strong>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

export default {
  name: 'Carousel',
  components: { VueSlickCarousel },
  data() {
    return {
      tab1: true,
      tab2: false,
      tab3: false,
    }
  },
  methods: {
    showPage(index) {
      this.$refs.carousel.goTo(index)
      if (index === 0) {
        this.tab1 = true
        this.tab2 = false
        this.tab3 = false
        document.getElementById('carousel-item0').classList.add('w--current')
        document.getElementById('carousel-item1').classList.remove('w--current')
        document.getElementById('carousel-item2').classList.remove('w--current')
      } else if (index === 1) {
        this.tab1 = false
        this.tab2 = true
        this.tab3 = false
        document.getElementById('carousel-item1').classList.add('w--current')
        document.getElementById('carousel-item0').classList.remove('w--current')
        document.getElementById('carousel-item2').classList.remove('w--current')
      }
      if (index === 2) {
        this.tab1 = false
        this.tab2 = false
        this.tab3 = true
        document.getElementById('carousel-item2').classList.add('w--current')
        document.getElementById('carousel-item1').classList.remove('w--current')
        document.getElementById('carousel-item0').classList.remove('w--current')
      }
    },
  },
}
</script> 