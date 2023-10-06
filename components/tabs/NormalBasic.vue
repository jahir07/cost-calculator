<template>
  <div>
      <!-- this is important to pass total price in another component -->
      <div :data-tatal="getTotalPrice()"></div>
      <div class="stepper-content no-top-radius px-5">
        <div class="range-sliders pb-5" style="border-bottom: 2px solid #f1f1f1;">
          <div class="no-of-pages pt-1">
            <h4 class="text-14 font-metropolis font-500 my-5"> Number Of Pages</h4>
            
            <vue-slider 
            ref="slider" 
            :min="webmin" 
            :max="webmax" 
            :tooltip="'always'" 
            :tooltip-formatter="webFormatter"
            :data-val="webdesign"
            v-model="webPrice"
            v-if="this.$store.getters.getPackageType == 'basic' && this.$store.getters.getPlanType == 'template'"
            ></vue-slider>

            <vue-slider 
            ref="slider" 
            :min="webMidmin" 
            :max="webMidmax" 
            :tooltip="'always'" 
            :tooltip-formatter="webMidFormatter"
            :data-val="webmiddesign"
            v-model="webMidPrice"
            v-if="this.$store.getters.getPackageType == 'medium' && this.$store.getters.getPlanType == 'template'"
            ></vue-slider>
            
            <vue-slider 
            ref="slider" 
            :min="webCommin" 
            :max="webCommax" 
            :tooltip="'always'" 
            :tooltip-formatter="webComFormatter"
            :data-val="webcomdesign"
            v-model="webComPrice"
            v-if="this.$store.getters.getPackageType == 'complex' && this.$store.getters.getPlanType == 'template'"
            ></vue-slider>


            <!-- custom design -->
            <vue-slider 
            ref="slider" 
            :min="webCusmin" 
            :max="webCusmax" 
            :tooltip="'always'" 
            :tooltip-formatter="webCusFormatter"
            :data-val="webcusdesign"
            v-model="webCusPrice"
            v-if="this.$store.getters.getPackageType == 'basic' && this.$store.getters.getPlanType == 'custom'"
            ></vue-slider>

            <vue-slider 
            ref="slider" 
            :min="webCusMidmin" 
            :max="webCusMidmax" 
            :tooltip="'always'" 
            :tooltip-formatter="webCusMidFormatter"
            :data-val="webcusmiddesign"
            v-model="webCusMidPrice"
            v-if="this.$store.getters.getPackageType == 'medium' && this.$store.getters.getPlanType == 'custom'"
            ></vue-slider>
            
            <vue-slider 
            ref="slider" 
            :min="webCusCommin" 
            :max="webCusCommax" 
            :tooltip="'always'" 
            :tooltip-formatter="webCusComFormatter"
            :data-val="webcuscomdesign"
            v-model="webCusComPrice"
            v-if="this.$store.getters.getPackageType == 'complex' && this.$store.getters.getPlanType == 'custom'"
            ></vue-slider>

          </div>
          <!-- {{ this.$store.getters.getPackageType }}
          {{ this.$store.getters.getPlanType }} -->
         
        </div>
        <div class="total-cost-value d-flex justify-content-end mt-4 pb-4">
          <div class="total-block basic b" v-if="this.$store.getters.getPackageType == 'basic' && this.$store.getters.getPlanType == 'custom'">${{ webcusdesign * 300 }}</div>
          <div class="total-block medium d" v-else-if="this.$store.getters.getPackageType == 'medium' && this.$store.getters.getPlanType == 'custom'">${{ webcusmiddesign * 500  }}</div>
          <div class="total-block complex c" v-else-if="this.$store.getters.getPackageType == 'complex' && this.$store.getters.getPlanType == 'custom'">${{ webcuscomdesign * 1000 }}</div>
          <div class="total-block complex e" v-else-if="this.$store.getters.getPackageType == 'complex' && this.$store.getters.getPlanType == 'template'">${{ webcomdesign * 500 }}</div>
          <div class="total-block medium f" v-else-if="this.$store.getters.getPackageType == 'medium' && this.$store.getters.getPlanType == 'template'">${{ webmiddesign * 200 }}</div>
          <div class="total-block basic a" v-else="this.$store.getters.getPackageType == 'basic' && this.$store.getters.getPlanType == 'template'">${{ webdesign * 100 }}</div>
        </div>
      </div>

      <div class="stepper-content px-2 px-md-3 px-lg-5  py-4 mt-4">
        <div class="row  py-4  website-content" style="border-bottom: 2px solid #f1f1f1;">
          <div class="col-md-6" style="border-right: 2px solid #f1f1f1;">
            <div class="px-0">
              <h2 class="my-4 text-20 fw-bold font-metropolis"> Website Content</h2>
              <div class="d-flex pt-5 align-items-baseline justify-content-between">
                <p class="fw-bold font-metropolis "> Stock Images</p>
                <input type="number" placeholder="00" min=0 v-model="stock_image" :data-stock-img="stockimage" class="text-center" />
                <p class="font-500 font-metropolis "> at $30/image (avg.)</p>
              </div>
              <div class="d-flex mt-3 align-items-baseline justify-content-between">
                <p class="fw-bold font-metropolis "> Copy Writing</p>
                <input type="number" placeholder="00" min=0 v-model="article" :data-article="articlePrice" class="text-center" />
                <p class="font-500 font-metropolis "> at $200/article (avg.)
                  <span class="text-black-50 text-12" v-if="getArticleDis"><br>{{ getArticleDis() }}</span>
                </p>

              </div>
            </div>
          </div>

          <div class="col-md-6">
            <div class="logo-price px-4">
              <h2 class="text-20 fw-bold font-metropolis my-4 pb-4"> Logos </h2>
              <vue-slider 
              ref="slider" 
              :data-val="webcontent"
              :min="logomin" 
              :max="logomax" 
              :tooltip="'always'" 
              :interval="1000"
              :marks="marks"
              :hide-label="true"
              :data-logo="logo"
              v-model="logoPrice"
              ></vue-slider>
              <div class="d-flex justify-content-between">
                <p class="text-12  font-metropolis" style="color: #868686;"> No need</p>
                <p class="text-12  font-metropolis" style="margin-left: 10px;color: #868686;"> Basic</p>
                <p class="text-12  font-metropolis" style="margin-left: 32px; color: #868686;"> Medium</p>
                <p class="text-12  font-metropolis" style="color: #868686;"> Complex</p>
              </div>
              <div class="mt-4" v-if="logo > 0">
                <label class="fw-bold font-metropolis mx-3 "> No. Of Logo</label> <input min=0 v-model="logo_no" :data-article="logoNo" type="number" placeholder="00" />
              </div>
            </div>
          </div>
        </div>
        <div class="total-cost-value d-flex justify-content-end mt-4 align-items-center">
          <label class="fw-bold font-metropolis mx-3 "> Content Cost: </label>
          <div class="logo-price"><div class="total-block total-webcontent-price">${{ getWebContetPrice() }}</div></div>
        </div>
      </div>

      <div class="website-content stepper-content px-3 px-md-3 px-lg-5 py-4 mt-4">
        <div class="range-sliders pb-5" style="border-bottom: 2px solid #f1f1f1;">
          <h2 class="my-4 text-20 fw-bold font-metropolis"> E-Commerce</h2>
          <vue-slider 
              ref="slider" 
              :data-val="webcontent"
              :min="ecommin" 
              :max="ecommax" 
              :tooltip="'active'" 
              :interval="100"
              :hide-label="true"
              :data-ecom="ecommerce"
              v-model="ecomPrice"
              ></vue-slider>
          <div class="d-flex justify-content-between"><p class="text-12  font-metropolis" style="color: rgb(134, 134, 134);"> $0</p> 
            <p class="text-12  font-metropolis" style="color: rgb(134, 134, 134);position: relative;right: -8px;"> $2000</p> 
            <p class="text-12  font-metropolis" style="color: rgb(134, 134, 134);position: relative;right: -12px;"> $4000</p> 
            <p class="text-12  font-metropolis" style="color: rgb(134, 134, 134);position: relative;right: -18px;"> $6000</p> 
            <p class="text-12  font-metropolis" style="color: rgb(134, 134, 134);position: relative;right: -22px;"> $8000</p> 
            <p class="text-12  font-metropolis" style="color: rgb(134, 134, 134);"> $10000</p>
          </div>
        </div>
        <div class="total-cost-value d-flex justify-content-between mt-4 align-items-center">
          <div class="col-md-4">{{ (ecommerce / 30).toFixed(0) }} Products <span class="text-12 text-black-50">($30/product)</span></div>
          <div class="col-md-4 text-12 text-black-50">{{ getEcomPriceDis() }}</div>
          <div class="d-flex align-items-center">
            <label class="fw-bold font-metropolis mx-3 "> E-Commerce Cost:</label> <div class="total-block total-ecommerce-price">${{ getEcomPrice() }}</div>
          </div>
        </div>
      </div>

      <div class="stepper-content px-3 px-md-3 px-lg-5 py-4 mt-4 website-addons">
        <div class="range-sliders pb-5">
          <h2 class="my-4 text-20 fw-bold font-metropolis"> Website Add-ons</h2>
          <div class="row mt-5">
            <label class="col-md-4 d-flex gap-2 align-items-start mb-3">
              <input type="checkbox" v-model="form" :data-form="formVal">
              <div>
                <h2 class="text-16 fw-bold font-metropolis mb-0 text-black">Forms</h2> 
                <div class="text-12 font-metropolis font-500 text-black-50 mb-1"> $30/form</div>
                <div v-if="form" class="position-absolute"><input type="number" min="0" v-model="form_no" :data-form_no="formNoVal"> <label> No. of forms</label></div>
              </div>
            </label>
            <label class="col-md-4 d-flex gap-2 align-items-start mb-3">
              <input type="checkbox" v-model="video" :data-video="videoVal">
              <div>
                <h2 class="text-16 fw-bold font-metropolis mb-0 text-black"> Video Creation </h2>
                <div class="text-12 font-metropolis font-500 text-black-50 mb-1"> $300/minute</div>
                <div v-if="video" class="position-absolute"><input type="number" v-model="video_no" :data-video_no="videoNoVal"> <label> No. of videos</label></div>
              </div>
            </label>

            <label class="col-md-4 d-flex gap-2 align-items-start mb-3">

              <input type="checkbox" v-model="online_schedule" :data-online_schedule="onlineScheduleVal">
              <div>
                <h2 class="text-16 fw-bold font-metropolis mb-0 text-black"> Online Schedules</h2>
                <div v-if="online_schedule" class="text-12 font-metropolis"> $30/monthly subscription</div>
              </div>
            </label>

            <label class="col-md-4 my-5 d-flex gap-2 align-items-start">
              <input type="checkbox" v-model="search_cap" :data-search_cap="searchCapVal">
              <div>
                <h2 class="text-16 fw-bold font-metropolis mb-0 text-black"> On-site Search
                  Capability </h2>
                  <div class="text-12 font-metropolis font-500 mb-1">
                    $3000/Cost per platform</div>
                <div v-if="search_cap" class="position-absolute"><input type="number" v-model="search_cap_no" :data-search_cap_no="searchCapNoVal"> <label> No. of platform for online search
                  capability</label></div>
              </div>
            </label>

            <label class="col-md-4 my-5 d-flex gap-2 align-items-start">
              <input type="checkbox" v-model="member_login" :data-member_login="memberLoginVal">
              <div>
                <h2 class="text-16 fw-bold font-metropolis mb-0 text-black">Member Login Profile Dashboard</h2>
                <div class="text-12 font-metropolis font-500 mb-1"> $3000/cost per platform</div>
                <div v-if="member_login" class="position-absolute"><input type="number" v-model="member_login_no" :data-member_login_no="memberLoginNoVal"> <label> No. of platform of login profile</label></div>
              </div>
            </label>

            <label class="col-md-4  my-5 d-flex gap-2 align-items-start">
              <input type="checkbox" v-model="analytic" :data-analytic="analyticVal">
              <div>
                <h2 class="text-16 fw-bold font-metropolis mb-0 text-black">Analytics Setup</h2>
                <div class="text-12 font-metropolis font-500 mb-1"> $500/cost per platform</div>
                <div v-if="analytic" class="position-absolute"><input type="number" v-model="analytic_no" :data-analytic_no="analyticNoVal"><label class="ms-1"> No. of platform for analytic setup</label></div>
              </div>
            </label>

            <label class="col-md-4 d-flex gap-2 align-items-start mt-3">
              <input type="checkbox" v-model="social_media" :data-social_media="socialMediaVal">
              <div>
                <h2 class="text-16 fw-bold font-metropolis mb-0 text-black">Social Media Account Setup</h2>
                <div class="text-12 font-metropolis font-500 mb-1"> $300/platform setup</div>
                <div v-if="social_media" class="position-absolute"><input type="number" v-model="social_media_no" :data-social_media_no="socialMediaNoVal"> <label> No. of social media accounts</label></div>
              </div>
            </label>

            <label class="col-md-4 d-flex gap-2 align-items-start mt-3">
              <input type="checkbox" v-model="chat_setup" :data-chat_setup="chatSetupVal">
              <div>
                <h2 class="text-16 fw-bold font-metropolis mb-0 text-black">Live Chat Setup</h2>
                  <div class="text-12 font-metropolis font-500 mb-1"> $500/platform setup</div>
                <div v-if="chat_setup" class="position-absolute"><input type="number" v-model="chat_setup_no" :data-chat_setup_no="chatSetupNoVal"> <label> No. of platform</label></div>
              </div>
            </label>

            <label class="col-md-4 d-flex gap-2 align-items-start mt-3">
              <input type="checkbox" v-model="blog_setup" :data-blog_setup="blogSetupVal">
              <div>
                <h2 class="text-16 fw-bold font-metropolis mb-0 text-black">Blog Setup</h2>
                <div class="text-12 font-metropolis font-500 mb-1"> $5000/platform setup</div>
                <div v-if="blog_setup" class="position-absolute"><input type="number" v-model="blog_setup_no" :data-blog_setup_no="blogSetupNoVal"> <label> No. of platform</label></div>
              </div>
            </label>

          </div>
        </div>
      </div>

     
  </div>
</template>

<script>
import 'vue-slider-component/theme/antd.css'

export default {

  data() {
    return {
      webPrice: this.$store.getters.getWebdesign,
      webmin: 0,
      webmax: 100,
      webFormatter: '{value} Pages',
      //medium
      webMidPrice: this.$store.getters.getWebMidDesign,
      webMidmin: 5,
      webMidmax: 100,
      webMidFormatter: '{value} Pages',
      //complex
      webComPrice: this.$store.getters.getWebComDesign,
      webCommin: 5,
      webCommax: 100,
      webComFormatter: '{value} Pages',

      //custom design
      webCusPrice: this.$store.getters.getWebCusdesign,
      webCusmin: 5,
      webCusmax: 100,
      webCusFormatter: '{value} Pages',
      //medium
      webCusMidPrice: this.$store.getters.getWebCusMidDesign,
      webCusMidmin: 5,
      webCusMidmax: 100,
      webCusMidFormatter: '{value} Pages',
      //complex
      webCusComPrice: this.$store.getters.getWebCusComDesign,
      webCusCommin: 5,
      webCusCommax: 100,
      webCusComFormatter: '{value} Pages',

      //webcontent
      stock_image: '',
      article: '',
      webContent: '',
      logoPrice: '',
      logomin: 0,
      logomax: 3000,
      logo_no: '',
      marks: true,
      //ecommerce
      ecomPrice: 0,
      ecommin: 0,
      ecommax: 10000,
      ecommarks: true,
      //addons
      form: '',
      video: '',
      online_schedule: '',
      search_cap: '',
      member_login: '',
      analytic: '',
      social_media: '',
      form_no: '',
      video_no: '',
      search_cap_no: '',
      member_login_no: '',
      analytic_no: '',
      social_media_no: '',
      chat_setup: '',
      chat_setup_no: '',
      blog_setup: '',
      blog_setup_no: '',
      //calculation
      total_price: '',
    }
  },

  mounted() {
		this.$axios.$get('/sanctum/csrf-cookie');
  },

  computed: {
    webdesign() {
        this.webPrice = this.$store.getters.getWebdesign;
        return this.$store.getters.getWebdesign;
    },

    webmiddesign() {
        this.webMidPrice = this.$store.getters.getWebMidDesign;
        return this.$store.getters.getWebMidDesign;
    },

    webcomdesign() {
        this.webComPrice = this.$store.getters.getWebComDesign;
        return this.$store.getters.getWebComDesign;
    },

    //custom
    webcusdesign() {
        this.webCusPrice = this.$store.getters.getWebCusdesign;
        return this.$store.getters.getWebCusdesign;
    },

    webcusmiddesign() {
        this.webCusMidPrice = this.$store.getters.getWebCusMidDesign;
        return this.$store.getters.getWebCusMidDesign;
    },

    webcuscomdesign() {
        this.webCusComPrice = this.$store.getters.getWebCusComDesign;
        return this.$store.getters.getWebCusComDesign;
    },

    // web content
    stockimage() {
      this.stock_image = this.$store.getters.getStockImg;
      return this.$store.getters.getStockImg;
    },

    articlePrice() {
      this.article = this.$store.getters.getArticle;
      return this.$store.getters.getArticle;
    },

    logo() {
      this.logoPrice = this.$store.getters.getLogo;
      return this.$store.getters.getLogo;
    },

    logoNo() {
      this.logo_no = this.$store.getters.getLogoNo;
      return this.$store.getters.getLogoNo;
    },

    webcontent() {
      this.webContent = this.$store.getters.getWebcontent;
      return this.$store.getters.getWebcontent;
    },

    ecommerce() {
      this.ecomPrice = this.$store.getters.getEcommerceVal;
      return this.$store.getters.getEcommerceVal;
    },

    formVal(){
      this.form = this.$store.getters.getFormVal;
      return this.$store.getters.getFormVal;
    },

    formNoVal(){
      this.form_no = this.$store.getters.getFormNoVal;
      return this.$store.getters.getFormNoVal;
    },

    videoVal(){
      this.video = this.$store.getters.getVideoVal;
      return this.$store.getters.getVideoVal;
    },

    videoNoVal(){
      this.video_no = this.$store.getters.getVideoNoVal;
      return this.$store.getters.getVideoNoVal;
    },

    onlineScheduleVal(){
      this.online_schedule = this.$store.getters.getOnlineScheduleVal;
      return this.$store.getters.getOnlineScheduleVal;
    },

    searchCapVal(){
      this.search_cap = this.$store.getters.getSearchCapVal;
      return this.$store.getters.getSearchCapVal;
    },

    searchCapNoVal(){
      this.search_cap_no = this.$store.getters.getSearchCapNoVal;
      return this.$store.getters.getSearchCapNoVal;
    },

    memberLoginVal(){
      this.member_login = this.$store.getters.getMemberLoginVal;
      return this.$store.getters.getMemberLoginVal;
    },

    memberLoginNoVal(){
      this.member_login_no = this.$store.getters.getMemberLoginNoVal;
      return this.$store.getters.getMemberLoginNoVal;
    },

    analyticVal(){
      this.analytic = this.$store.getters.getAnalyticVal;
      return this.$store.getters.getAnalyticVal;
    },

    analyticNoVal(){
      this.analytic_no = this.$store.getters.getAnalyticNoVal;
      return this.$store.getters.getAnalyticNoVal;
    },

    socialMediaVal(){
      this.social_media = this.$store.getters.getSocialMediaVal;
      return this.$store.getters.getSocialMediaVal;
    },

    socialMediaNoVal(){
      this.social_media_no = this.$store.getters.getSocialMediaNoVal;
      return this.$store.getters.getSocialMediaNoVal;
    },

    chatSetupVal(){
      this.chat_setup = this.$store.getters.getChatSetupVal;
      return this.$store.getters.getChatSetupVal;
    },

    chatSetupNoVal(){
      this.chat_setup_no = this.$store.getters.getChatSetupNoVal;
      return this.$store.getters.getChatSetupNoVal;
    },

    blogSetupVal(){
      this.blog_setup = this.$store.getters.getBlogSetupVal;
      return this.$store.getters.getBlogSetupVal;
    },

    blogSetupNoVal(){
      this.blog_setup_no = this.$store.getters.getBlogSetupNoVal;
      return this.$store.getters.getBlogSetupNoVal;
    },

    // calculation
    get_total_price(){
      return this.$store.getters.getTotalPrice;
    }


  },

  methods: {

      // copy from calculator.vue
      getWebDesignCost(){
        var webdesign_total_cost;
        if (this.$store.getters.getPackageType == 'basic' && this.$store.getters.getPlanType == 'custom' ) {
          return webdesign_total_cost = this.webCusPrice * 300;
        } else if(this.$store.getters.getPackageType == 'medium' && this.$store.getters.getPlanType == 'custom' ) {
          return webdesign_total_cost = this.webCusMidPrice * 500;
        } else if(this.$store.getters.getPackageType == 'complex' && this.$store.getters.getPlanType == 'custom' ) {
          return webdesign_total_cost = this.webCusComPrice * 1000;
        } else if(this.$store.getters.getPackageType == 'complex' && this.$store.getters.getPlanType == 'template' ) {
          return webdesign_total_cost = this.webComPrice * 500;
        } else if(this.$store.getters.getPackageType == 'medium' && this.$store.getters.getPlanType == 'template' ) {
          return webdesign_total_cost = this.webMidPrice * 200;
        } else {
          return webdesign_total_cost = this.webPrice * 100;
        }
      },

      getArticlePrice() {
        var articleTotalPrice;
        var articlePrice = this.$store.getters.getArticle * 200;
        if(articlePrice >= 500 && articlePrice < 1000) {
          articleTotalPrice = articlePrice - (articlePrice * 15)/100;
        } else if(articlePrice >= 1000  && articlePrice < 5000 ) {
          articleTotalPrice = articlePrice - (articlePrice * 20)/100;
        } else if( articlePrice > 5000 ) {
          articleTotalPrice = articlePrice - (articlePrice * 25)/100;
        } else {
          articleTotalPrice = this.$store.getters.getArticle * 200;
        }
        return articleTotalPrice;
      },

      // article discount calculation
      getArticleDis(){
        var articleTotalDis;
        var articlePrice = this.$store.getters.getArticle * 200;
        if(articlePrice >= 500 && articlePrice < 1000) {
          articleTotalDis = '(15% Discount Added)';
        } else if(articlePrice >= 1000  && articlePrice < 5000 ) {
          articleTotalDis = '(20% Discount Added)';
        } else if( articlePrice > 5000 ) {
          articleTotalDis = '(25% Discount Added)';
        } else {
          articleTotalDis = '';
        }
        return articleTotalDis;
      },

      getWebContetPrice() {
          return (this.$store.state.stock_image * 30) + ( this.$store.state.logo * this.$store.state.logo_no ) + this.getArticlePrice();
      },

      //ecommerce
      getEcomPriceDis(){
            var ecomTotalDis;
            var ecomPrice = this.$store.getters.getEcommerceVal;
            if(ecomPrice >= 500 && ecomPrice < 1000) {
                ecomTotalDis = '(15% Discount Added)';
            } else if(ecomPrice >= 1000  && ecomPrice < 5000 ) {
                ecomTotalDis = '(20% Discount Added)';
            } else if( ecomPrice > 5000 ) {
                ecomTotalDis = '(25% Discount Added)';
            } else {
                ecomTotalDis = '';
            }
            return ecomTotalDis;
        },

      getEcomPrice() {
        var ecomTotalPrice;
        var ecomPrice = this.$store.getters.getEcommerceVal;
        if(ecomPrice >= 500 && ecomPrice < 1000) {
          ecomTotalPrice = ecomPrice - (ecomPrice * 15)/100;
        } else if(ecomPrice >= 1000  && ecomPrice < 5000 ) {
          ecomTotalPrice = ecomPrice - (ecomPrice * 20)/100;
        } else if( ecomPrice > 5000 ) {
          ecomTotalPrice = ecomPrice - (ecomPrice * 25)/100;
        } else {
          ecomTotalPrice = ecomPrice;
        }
        return ecomTotalPrice;
      },

      //addons
      getFormCost(){
        var form_no;
        var form_cost = this.$store.getters.getFormNoVal * 30;
        if( form_cost >= 500 && form_cost < 1000 ) {
          form_no = form_cost - (form_cost * 15)/100;
        } else if(form_cost >= 1000  && form_cost < 5000 ) {
          form_no = form_cost - (form_cost * 20)/100;
        } else if( form_cost > 5000 ) {
          form_no = form_cost - (form_cost * 25)/100;
        } else if( form_cost < 500 ) {
          form_no = this.$store.getters.getFormNoVal * 30;
        } else {
          form_no = '';
        }
        return form_no;
      },

      getAddonsPrice(){
        this.form_cost = this.$store.getters.getFormVal ? this.getFormCost() : 0;
        this.video_cost =  (this.$store.getters.getVideoVal) ? this.$store.getters.getVideoNoVal * 300: 0;
        this.online_schedule =  (this.$store.getters.getOnlineScheduleVal) ? 30 : 0;
        this.search_cap_cost =  this.$store.getters.getSearchCapVal ? this.$store.getters.getSearchCapNoVal * 3000 : 0;
        this.member_login_cost =  this.$store.getters.getMemberLoginVal ? this.$store.getters.getMemberLoginNoVal * 3000 : 0;
        this.analytic_cost =  this.$store.getters.getAnalyticVal ? this.$store.getters.getAnalyticNoVal * 500 : 0;
        this.social_media_cost =  this.$store.getters.getSocialMediaVal ? this.$store.getters.getSocialMediaNoVal * 300 : 0;
        this.chat_cost =  this.$store.getters.getChatSetupVal ? this.$store.getters.getChatSetupNoVal * 500 : 0;
        this.blog_cost =  this.$store.getters.getBlogSetupVal ? this.$store.getters.getBlogSetupNoVal * 5000 : 0;
        return this.form_cost + this.video_cost + this.online_schedule + this.search_cap_cost + this.member_login_cost + this.analytic_cost + this.social_media_cost + this.chat_cost + this.blog_cost;
      },

      //calculation
      getTotalPrice() {
        const webdesignPrice = this.getWebDesignCost();
        const webcontPrice = this.getWebContetPrice();
        const ecomPrice = this.getEcomPrice();
        const addonsPrice = this.getAddonsPrice();
        
        return this.total_price = webdesignPrice + webcontPrice + ecomPrice + addonsPrice;
      },

  },

  watch: {
    webPrice: function (val, oldVal) {
      var updatedVal = val * 100;
      $('.total-webdesign-price').html( '$' + updatedVal );
      this.$store.dispatch("setWebdesign", val);
    },

    webMidPrice: function (val, oldVal) {
      var updatedVal = val * 200;
      $('.total-webdesign-price').html( '$' + updatedVal );
      this.$store.dispatch("setWebMidDesign", val);
    },

    webComPrice: function (val, oldVal) {
      var updatedVal = val * 500;
      $('.total-webdesign-price').html( '$' + updatedVal );
      this.$store.dispatch("setWebComDesign", val);
    },

    //custom design
    webCusPrice: function (val, oldVal) {
      var updatedVal = val * 300;
      $('.total-webdesign-price').html( '$' + updatedVal );
      this.$store.dispatch("setWebCusdesign", val);
    },

    webCusMidPrice: function (val, oldVal) {
      var updatedVal = val * 500;
      $('.total-webdesign-price').html( '$' + updatedVal );
      this.$store.dispatch("setWebCusMidDesign", val);
    },

    webCusComPrice: function (val, oldVal) {
      var updatedVal = val * 1000;
      $('.total-webdesign-price').html( '$' + updatedVal );
      this.$store.dispatch("setWebCusComDesign", val);
    },

    // web content
    stock_image: function (val, oldVal) {
      this.webContent = val;
      this.$store.dispatch("setStockImg", this.webContent);
    },

    article: function (val, oldVal) {
      this.webContent = val;
      this.$store.dispatch("setArticle", this.webContent);
    },


    logoPrice: function (val, oldVal) {
      this.webContent = val;
      this.$store.dispatch("setLogo", this.webContent);
    },

    logo_no: function (val, oldVal) {
      this.webContent = val;
      this.$store.dispatch("setLogoNo", this.webContent);
    },

    webContent: function (val, oldVal) {
      const updatedVal = this.getWebContetPrice();
      $('.total-webcontent-price').html( '$' + updatedVal );

      this.$store.dispatch("setWebcontent", val);
    },

    ecomPrice: function (val, oldVal) {
      this.$store.dispatch("setEcom", val);
    },

    form: function (val, oldVal) {
      this.$store.dispatch("setForm", val);
    },

    form_no: function (val, oldVal) {
      this.$store.dispatch("setFormNo", val);
    },

    video: function (val, oldVal) {
      this.$store.dispatch("setVideo", val);
    },

    video_no: function (val, oldVal) {
      this.$store.dispatch("setVideoNo", val);
    },
    
    online_schedule: function (val, oldVal) {
      this.$store.dispatch("setOnlineSchedule", val);
    },

    search_cap: function (val, oldVal) {
      this.$store.dispatch("setSearchCap", val);
    },

    search_cap_no: function (val, oldVal) {
      this.$store.dispatch("setSearchCapNo", val);
    },

    member_login: function (val, oldVal) {
      this.$store.dispatch("setMemberLogin", val);
    },

    member_login_no: function (val, oldVal) {
      this.$store.dispatch("setMemberLoginNo", val);
    },

    analytic: function (val, oldVal) {
      this.$store.dispatch("setAnalytic", val);
    },

    analytic_no: function (val, oldVal) {
      this.$store.dispatch("setAnalyticNo", val);
    },

    social_media: function (val, oldVal) {
      this.$store.dispatch("setSocialMedia", val);
    },

    social_media_no: function (val, oldVal) {
      this.$store.dispatch("setSocialMediaNo", val);
    },

    chat_setup: function (val, oldVal) {
      this.$store.dispatch("setChatSetup", val);
    },

    chat_setup_no: function (val, oldVal) {
      this.$store.dispatch("setChatSetupNo", val);
    },

    blog_setup: function (val, oldVal) {
      this.$store.dispatch("setBlogSetup", val);
    },

    blog_setup_no: function (val, oldVal) {
      this.$store.dispatch("setBlogSetupNo", val);
    },

    //calculation
    total_price: function (val, oldVal) {
      this.$store.dispatch("setTotalPrice", val);
    },

  }

}
</script>


<style>
     .vue-slider {
        height: 12px !important;
    }
    .vue-slider-process {
        background-color: #3c508b;
        border-radius: 20px;
    }
    .vue-slider-rail {
        height: 12px !important;
        background: #e1e4ea;
        border-radius: 20px;
        box-shadow: inset 0 0 5px 1px #bfbfbfa8;
    }
    .vue-slider-dot-handle {
        border: 2px solid #fff;
        background: #3c508b;
        width: 20px;
        height: 20px;
        position: relative;
        top: -3px;
        border-radius: 100%;
    }
    .vue-slider-mark {
        width: 2px !important;
    }
    .vue-slider-mark-step {
        border-radius: 0;
        box-shadow: 0 0 0 0px #e8e8e8 !important;
    }
    .vue-slider:hover .vue-slider-process.vue-slider-process {
        background-color: #0e66a5;
    }
    .vue-slider-dot-tooltip-inner.vue-slider-dot-tooltip-inner {
      border-color: rgb(60 80 139);
      background-color: rgb(60 80 139);
    }
</style>