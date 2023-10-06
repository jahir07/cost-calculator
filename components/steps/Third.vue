<template>
    <div>
        <div id="third-step" class="tab">
            <div class="history-details pb-5">
                <div class="py-4 px-5" style="border-bottom: 2px solid #f1f1f1">
                    <div class="d-flex justify-content-between final-quotation">
                        <div>
                            <h2 class="h3 font-metropolis fw-bold">
                                Final Quotation</h2>
                            <p id="ref-number" class="font-metropolis text-14 mb-0">
                                Reference Number: {{ Date.now() }}
                            </p>
                        </div>
                        <!-- <div class="d-flex justify-content-between">
                            <div class="text-center mx-2">
                                <img src="~/assets/images/cc-down.svg" class="mx-2" />
                                <p id="ref-number" class="font-metropolis text-14 mb-0 mt-2">
                                    Download Quotation</p>
                            </div>
                            <div class="text-center mx-2">
                                <img src="~/assets/images/print.svg" class="mx-2" />
                                <p id="ref-number" class="font-metropolis text-14 mb-0 mt-2">
                                    Print Quotation</p>
                            </div>
                        </div> -->
                    </div>
                </div>
                
                <div class="container">
                    <div class="row px-5" style="border-bottom: 2px solid #f1f1f1">
                        <div class="col-md-6 col-lg-4 p-0 py-5">
                            <div class="webdesign-block mb-4">
                                <p class="text-14 font-metropolis mb-0 block-title">
                                    Website Design
                                </p>
                                <div class="mt-2 d-flex gap-3">
                                    <p class="text-14 col-md-6 font-metropolis font-500 text-capitalize mb-0">
                                        {{ this.$store.getters.getPackageType }} Design ({{ this.$store.getters.getPlanType }}):
                                    </p>
                                    <p class="text-14 fw-bold font-metropolis me-3 mb-0">
                                        <span class="basic b" v-if="$store.getters.getPackageType == 'basic' && $store.getters.getPlanType == 'custom'">${{ webcusdesign * 300 }}</span>
                                        <span class="medium d" v-else-if="$store.getters.getPackageType == 'medium' && $store.getters.getPlanType == 'custom'">${{ webcusmiddesign * 500  }}</span>
                                        <span class="complex c" v-else-if="$store.getters.getPackageType == 'complex' && $store.getters.getPlanType == 'custom'">${{ webcuscomdesign * 1000 }}</span>
                                        <span class="complex e" v-else-if="$store.getters.getPackageType == 'complex' && $store.getters.getPlanType == 'template'">${{ webcomdesign * 500 }}</span>
                                        <span class="medium f" v-else-if="$store.getters.getPackageType == 'medium' && $store.getters.getPlanType == 'template'">${{ webmiddesign * 200 }}</span>
                                        <span class="basic a" v-else="$store.getters.getPackageType == 'basic' && $store.getters.getPlanType == 'template'">${{ webdesign * 100 }}</span>
                                    </p>
                                </div>
                                <div class="d-flex gap-3">
                                    <p class="text-14 col-md-6 font-metropolis font-500 mb-0">
                                        No. Of Pages:
                                    </p>
                                    <p class="text-14 fw-bold font-metropolis me-3 mb-0">
                                        <span class="basic b" v-if="$store.getters.getPackageType == 'basic' && $store.getters.getPlanType == 'custom'">{{ webcusdesign }}</span>
                                        <span class="medium d" v-else-if="$store.getters.getPackageType == 'medium' && $store.getters.getPlanType == 'custom'">{{ webcusmiddesign }}</span>
                                        <span class="complex c" v-else-if="$store.getters.getPackageType == 'complex' && $store.getters.getPlanType == 'custom'">{{ webcuscomdesign }}</span>
                                        <span class="complex e" v-else-if="$store.getters.getPackageType == 'complex' && $store.getters.getPlanType == 'template'">{{ webcomdesign }}</span>
                                        <span class="medium f" v-else-if="$store.getters.getPackageType == 'medium' && $store.getters.getPlanType == 'template'">{{ webmiddesign }}</span>
                                        <span class="basic a" v-else="$store.getters.getPackageType == 'basic' && $store.getters.getPlanType == 'template'">{{ webdesign }}</span>
                                        Pages
                                    </p>
                                </div>
                                <div class="d-flex gap-3">
                                    <p class="text-14 col-md-6 font-metropolis font-500 mb-0">
                                        Total Cost:
                                    </p>
                                    <p class="text-14 fw-bold font-metropolis mb-0">
                                        <span class="basic b" v-if="$store.getters.getPackageType == 'basic' && $store.getters.getPlanType == 'custom'">${{ webcusdesign * 300 }}</span>
                                        <span class="medium d" v-else-if="$store.getters.getPackageType == 'medium' && $store.getters.getPlanType == 'custom'">${{ webcusmiddesign * 500  }}</span>
                                        <span class="complex c" v-else-if="$store.getters.getPackageType == 'complex' && $store.getters.getPlanType == 'custom'">${{ webcuscomdesign * 1000 }}</span>
                                        <span class="complex e" v-else-if="$store.getters.getPackageType == 'complex' && $store.getters.getPlanType == 'template'">${{ webcomdesign * 500 }}</span>
                                        <span class="medium f" v-else-if="$store.getters.getPackageType == 'medium' && $store.getters.getPlanType == 'template'">${{ webmiddesign * 200 }}</span>
                                        <span class="basic a" v-else="$store.getters.getPackageType == 'basic' && $store.getters.getPlanType == 'template'">${{ webdesign * 100 }}</span>
                                    </p>
                                </div>
                            </div>

                            <div class="ecommerce-block mb-4">
                                <p class="text-14 font-metropolis mb-0 block-title">
                                    E Commerce
                                </p>
                                <div class="mt-2 d-flex gap-3">
                                    <p class="text-14 col-md-6 font-metropolis font-500 mb-0">
                                        No. of product to handle:<br>
                                    </p>
                                    
                                    <p class="text-14 fw-bold font-metropolis mb-0">
                                        {{ (this.$store.state.ecom / 30).toFixed(0) }}
                                    </p>
                                </div>
                                <div class="d-flex gap-3">
                                    <p class="text-14 col-md-6 font-metropolis font-500 mb-0">
                                        Total Cost: <br>
                                        <span class="text-black-50 text-12">{{ getEcomPriceDis() }}</span>
                                    </p>
                                    <p class="text-14 fw-bold font-metropolis mb-0">
                                        ${{ getEcomPrice() }} 
                                        <!-- {{ this.$store.state.ecom }} -->
                                    </p>
                                </div>
                            </div>


                            <div class="webcontent-block mb-4">
                                <p class="text-14  font-metropolis mb-0 block-title">
                                    Website Content
                                </p>
                                <div class="mt-2 d-flex gap-3">
                                    <p class="text-14 col-md-6 font-metropolis  font-500 mb-0">
                                        {{ this.$store.state.stock_image }} Stock Images:
                                    </p>
                                    <p class="text-14 fw-bold font-metropolis mb-0">
                                        ${{ this.$store.state.stock_image * 30 }}
                                    </p>
                                </div>
                                <div class="d-flex gap-3">
                                    <p class="text-14 col-md-6 font-metropolis font-500 mb-0">
                                        {{ this.$store.state.article }} Article
                                        <span class="text-black-50 text-12"><br>{{ getArticleDis() }}</span>
                                    </p>
                                    <p class="text-14 fw-bold font-metropolis mb-0">
                                        ${{ getArticlePrice() }}
                                    </p>
                                </div>
                                <div class="d-flex gap-3">
                                    <p class="text-14 col-md-6 font-metropolis  font-500 mb-0" v-if="this.$store.state.logo === 1000">
                                    Basic Logo:
                                    </p>
                                    <p class="text-14 col-md-6 font-metropolis  font-500 mb-0" v-else-if="this.$store.state.logo === 2000">
                                    Medium Logo:
                                    </p>
                                    <p class="text-14 col-md-6 font-metropolis  font-500 mb-0" v-else-if="this.$store.state.logo === 3000">
                                    Complex Logo:
                                    </p>
                                    <p class="text-14 col-md-6 font-metropolis  font-500 mb-0" v-else>
                                    No Logo:
                                    </p>
                                    <p class="text-14 col-md-6 fw-bold font-metropolis mb-0">
                                        ${{ this.$store.state.logo }}
                                    </p>
                                </div>
                                <div class="d-flex gap-3">
                                    <p class="text-14 col-md-6 font-metropolis font-500 mb-0">
                                        Total Cost:
                                    </p>
                                    <p class="text-14 fw-bold font-metropolis mb-0">
                                        ${{ getWebContetPrice()}}
                                    </p>
                                </div>
                            </div>

                        </div>
                        <div class="col-md-6 col-lg-4 border-end py-5">     
                            <div class="addons-block">
                                <p class="text-14  font-metropolis mb-0 block-title">
                                    Add-Ons
                                </p>
                                <div class=" mt-2  d-flex gap-3" v-if="this.$store.state.form">
                                    <p class="text-14 col-md-6 font-metropolis font-500 mb-0">
                                        Forms: 
                                        <span class="text-black-50 text-12" v-if="getFormDis()"><br>({{ getFormDis() }} Discount Added)</span>
                                    </p>
                                    <p class="text-14 fw-bold font-metropolis mb-0">
                                        ${{ form_cost }}
                                    </p>
                                </div>
                                <div class="d-flex gap-3" v-if="this.$store.state.video">
                                    <p class="text-14 col-md-6 font-metropolis font-500 mb-0">
                                        Video:
                                    </p>
                                    <p class="text-14 fw-bold font-metropolis mb-0">
                                    ${{ video_cost }}
                                    </p>
                                </div>
                                <div class="d-flex gap-3" v-if="this.$store.state.online_schedule">
                                    <p class="text-14 col-md-6 font-metropolis font-500 mb-0">
                                        Online Schedules (monthly):
                                    </p>
                                    <p class="text-14 fw-bold font-metropolis mb-0">
                                        ${{ online_schedule }}
                                    </p>
                                </div>
                                <div class="d-flex gap-3" v-if="this.$store.state.search_cap">
                                    <p class="text-14 col-md-6 font-metropolis font-500 mb-0">
                                        On-site search capability:
                                    </p>
                                    <p class="text-14 fw-bold font-metropolis mb-0">
                                        ${{ search_cap_cost }}
                                    </p>
                                </div>
                                <div class=" d-flex gap-3" v-if="this.$store.state.member_login">
                                    <p class="text-14 col-md-6 font-metropolis font-500 mb-0">
                                        Member Login Profile:
                                    </p>
                                    <p class="text-14 fw-bold font-metropolis mb-0">
                                        ${{ member_login_cost }}
                                    </p>
                                </div>
                                <div class=" d-flex gap-3" v-if="this.$store.state.analytic">
                                    <p class="text-14 col-md-6 font-metropolis font-500 mb-0">
                                        Analytics setup:
                                    </p>
                                    <p class="text-14 fw-bold font-metropolis mb-0">
                                        ${{ analytic_cost }}
                                    </p>
                                </div>
                                <div class=" d-flex gap-3" v-if="social_media_cost">
                                    <p class="text-14 col-md-6 font-metropolis font-500 mb-0">
                                    Social Media Account Setup:
                                    </p>
                                    <p class="text-14 fw-bold font-metropolis mb-0">
                                        ${{ social_media_cost }}
                                    </p>
                                </div>
                                
                                <div class="d-flex gap-3" v-if="this.$store.state.chat_setup">
                                    <p class="text-14 col-md-6 font-metropolis font-500 mb-0">
                                        Chat setup:
                                    </p>
                                    <p class="text-14 fw-bold font-metropolis mb-0">
                                        ${{ chat_cost }}
                                    </p>
                                </div>
                                <div class=" d-flex gap-3" v-if="this.$store.state.blog_setup">
                                    <p class="text-14 col-md-6 font-metropolis font-500 mb-0">
                                        Blog setup:
                                    </p>
                                    <p class="text-14 fw-bold font-metropolis mb-0">
                                        ${{ blog_cost }}
                                    </p>
                                </div>
                                <div class="d-flex gap-3">
                                    <p class="text-14 col-md-6 font-metropolis font-500 mb-0">
                                        Total Cost:
                                    </p>
                                    <p class="text-14 fw-bold font-metropolis mb-0">
                                        ${{ getAddonsPrice() }}
                                    </p>
                                </div>
                            </div>

                        </div>
                        <div class="col-md-6 col-lg-4 py-5">
                            <div class="total-cost mt-3 px-5">
                                <p class="text-20 font-metropolis  font-500">
                                    Price Summary:
                                </p>
                                <div class="mt-2  d-flex gap-3">
                                    <p class="text-14 col-md-6 font-metropolis font-500 mb-0">
                                        Sub Total Price: 
                                    </p>
                                    <p class="text-14 fw-bold font-metropolis mb-0">
                                        ${{ getTotalPrice() }}
                                    </p>
                                </div>
                                <div class="d-flex gap-3">
                                    <p class="text-14 col-md-6 font-metropolis font-500 mb-0">
                                        Total Discount: 
                                    </p>
                                    <p class="text-14 fw-bold font-metropolis ">
                                        ${{ calculateDiscount() }}
                                    </p>
                                </div>
                                <!-- <div class="d-flex gap-3">
                                    <p class="text-14 col-md-6 font-metropolis font-500 mb-0">
                                        Estimated Vat/CST: 
                                    </p>
                                    <p class="text-14 fw-bold font-metropolis">
                                        $0.00
                                    </p>
                                </div> -->
                                <div class="mt-2  d-flex gap-3">
                                    <p class="text-20 col-md-6 font-metropolis font-500 mb-0">
                                        Total: 
                                    </p>
                                    <p class="text-20 fw-bold font-metropolis">
                                        ${{ ( getTotalPrice() - calculateDiscount() ).toFixed(2) }}
                                    </p>
                                </div>
                                <div class="extra-discount" v-if="this.$store.state.extra_discount  > 0">
                                   New Discount: {{ this.$store.state.extra_discount }}%
                                </div>
                              
                            </div>
                        </div>
                    </div>
                </div>

                <div class="client-information px-5 py-4">
                    <h2 class="client-info font-metropolis fw-bold text-20"> Client Information</h2>
                    <div class="row">
                        <div class="col-md-6">
                            <p class="text-14 font-metropolis label">
                                Full Name
                            </p>
                            <p class="fw-bold font-metropolis">
                               {{ this.$store.state.full_name }}
                            </p>
                        </div>
                        <div class="col-md-6">
                            <p class="text-14 font-metropolis label">
                                Email
                            </p>
                            <p class="fw-bold font-metropolis">
                                {{ this.$store.state.email }}
                            </p>
                        </div>

                        <div class="col-md-6" v-if="this.$store.state.phone">
                            <p class="text-14 font-metropolis label">
                                Phone
                            </p>
                            <p class="fw-bold font-metropolis">
                                {{ this.$store.state.phone }}
                            </p>
                        </div>
                        <div class="col-md-6" v-if="this.$store.state.company">
                            <p class="text-14 font-metropolis label">
                                Company Name
                            </p>
                            <p class="fw-bold font-metropolis">
                                {{ this.$store.state.company }}
                            </p>
                        </div>

                        <div class="col-md-6" v-if="this.$store.state.address">
                            <p class="text-14 font-metropolis label">
                                Company Address
                            </p>
                            <p class="fw-bold font-metropolis">
                                {{ this.$store.state.address }}
                            </p>
                        </div>

                        <div class="col-md-6 d-flex gap-3">
                            <div v-if="this.$store.state.skyp">
                                <p class="text-14 font-metropolis label">
                                    Skype
                                </p>
                                <p class="fw-bold font-metropolis">
                                    {{ this.$store.state.skyp }}
                                </p>
                            </div>

                            <div v-if="this.$store.state.linkedin">
                                <p class="text-14 font-metropolis label">
                                    Linkedin
                                </p>
                                <p class="fw-bold font-metropolis">
                                    {{ this.$store.state.linkedin }}
                                </p>
                            </div>

                            <div v-if="this.$store.state.others">
                                <p class="text-14 font-metropolis label">
                                    Others
                                </p>
                                <p class="fw-bold font-metropolis">
                                    {{ this.$store.state.others }}
                                </p>
                            </div>
                        </div>

                        <div class="col-md-6">
                            <p class="text-14 font-metropolis label">
                                Quotation Generated By
                            </p>
                            <p class="fw-bold font-metropolis">
                                {{ this.$store.state.quotation_by }}
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
import NormalBasic from '../tabs/NormalBasic.vue'

export default {
    components: {
        NormalBasic,
    },

    data() {
        return{
            webPrice: this.$store.getters.getWebdesign,
            webMidPrice: this.$store.getters.getWebMidDesign,
            webComPrice: this.$store.getters.getWebComDesign,
            webCusPrice: this.$store.getters.getWebCusdesign,
            webCusMidPrice: this.$store.getters.getWebCusMidDesign,
            webCusComPrice: this.$store.getters.getWebCusComDesign,
            extra_discount: '', //this.$store.getters.getExtraDiscountVal
            apply: '',
            form_cost: '',
            video_cost: '',
            online_schedule: '',
            search_cap_cost: '',
            member_login_cost: '',
            analytic_cost: '',
            social_media_cost: '',
            social_media: '',
            chat_cost: '',
            blog_cost: '',
        }
    },

    computed:{
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

        discountVal(){
            this.extra_discount = this.$store.getters.getExtraDiscountVal;
            return this.$store.getters.getExtraDiscountVal;
        },

        fullNameVal(){
            this.full_name = this.$store.getters.getFullNameVal;
            return this.$store.getters.getFullNameVal;
        },

        emailVal(){
            this.email = this.$store.getters.getEmailVal;
            return this.$store.getters.getEmailVal;
        },

        phoneVal(){
            this.phone = this.$store.getters.getPhoneVal;
            return this.$store.getters.getPhoneVal;
        },

        companyVal(){
            this.company = this.$store.getters.getCompanyVal;
            return this.$store.getters.getCompanyVal;
        },

        addressVal(){
            this.address = this.$store.getters.getAddressVal;
            return this.$store.getters.getAddressVal;
        },

        skypVal(){
            this.skyp = this.$store.getters.getSkypVal;
            return this.$store.getters.getSkypVal;
        },

        linkedinVal(){
            this.linkedin = this.$store.getters.getLinkedinVal;
            return this.$store.getters.getLinkedinVal;
        },

        othersVal(){
            this.others = this.$store.getters.getOthersVal;
            return this.$store.getters.getOthersVal;
        },

        quotedByVal(){
            this.quotation_by = this.$store.getters.getQuotationVal;
            return this.$store.getters.getQuotationVal;
        },

    },

    methods: {
       
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

        getWebContetPrice() {
            return (this.$store.state.stock_image * 30) + ( this.$store.state.logo * this.$store.state.logo_no ) + this.getArticlePrice();
        },

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
                ecomTotalPrice = this.$store.getters.getEcommerceVal;
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
            } else {
                form_no = this.$store.getters.getFormNoVal * 30;
            }
            return form_no;
        },

         getFormDis(){
            var form_dis;
            var form_cost = this.$store.getters.getFormNoVal * 30;
            if( form_cost >= 500 && form_cost < 1000 ) {
                form_dis = '15%';
            } else if(form_cost >= 1000  && form_cost < 5000 ) {
                form_dis = '20%';
            } else if( form_cost > 5000 ) {
                form_dis = '25%';
            } else {
                form_dis = '';
            }
            return form_dis;
        },

         getAddonsPrice(){
            this.form_cost = (this.$store.getters.getFormVal) ? this.getFormCost() : 0;
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

        getTotalPrice() {
            const webdesignPrice = this.getWebDesignCost();
            const webcontPrice = this.getWebContetPrice();
            const ecomPrice = this.getEcomPrice();
            const addonsPrice = this.getAddonsPrice();

            return webdesignPrice + webcontPrice + ecomPrice + addonsPrice;
        },

        calculateDiscount(){
            const extrdis = this.$store.state.extra_discount;
            return ( (this.getTotalPrice() * extrdis) / 100 );
        },

        getdiscount(){
            return this.apply = 'disable';
        },

        applyfield(){
            return this.apply = '';

        }
    }

}
</script>