<template>
    <div>
        <div id="second-step" class="tab">
            <div class="history-details pb-5" style="background: #fff;">
                <div class="py-4 px-5" style="border-bottom: 2px solid #f1f1f1">
                    <h2 class="h3 font-metropolis fw-bold">
                        Quotation In Progress</h2>
                    <p id="ref-number" class="font-metropolis text-14 mb-0">
                        Reference Number: {{ Date.now() }}</p>
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
                                        <span class="text-black-50 text-12" v-if="getEcomPriceDis">{{ getEcomPriceDis() }}</span>
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
                                        <span class="text-black-50 text-12" v-if="getArticleDis"><br>{{ getArticleDis() }}</span>
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
                                    <p class="text-14 fw-bold font-metropolis mb-0">
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

                                <div class="extra-discount">
                                    <div v-if="this.$store.state.full_name && this.reg.test(this.$store.state.email) && this.$store.state.quotation_by">
                                        <input class="w-75 p-2" placeholder="Input New Discount" type="number" min="0" max="3" @change="() => { if(extra_discount > 100 || extra_discount < 0) { this.extra_discount = 0 }}" v-model="extra_discount" :data-extra_discount="discountVal">
                                        <button class="border-0 bg-white" @click.prevent="getdiscount">Apply</button>
                                        <div class="text-success text-12 mt-2">{{ email_notice }}</div>
                                    </div>
                                    <div v-else>
                                        <div @click.prevent="applyfield">
                                            <input disabled class="w-75 p-2" placeholder="Input New Discount" type="number" min="0" max="3">
                                            <button class="border-0 bg-white text-black-50">Apply</button>
                                            <div class="text-danger text-12 mt-2" v-if="client_info_notice">{{ client_info_notice }}</div>
                                        </div>
                                    </div>
                                </div>
                              
                            </div>
                        </div>
                    </div>
                </div>

                <div class="quotation-progress client-information px-5 py-4">
                    <h2 class="client-info font-metropolis fw-bold text-20 pt-3"> Client Information</h2>
                    <form>
                        <div class="row">
                            <div class="col-md-6">
                                <label class="text-14 font-metropolis label my-2">
                                    Full Name *
                                </label>
                                <input type="text" v-model="full_name" :data-full_name="fullNameVal" />
                               <div v-if="full_name.length < 1 && full_name == '' " class="text-12 mt-2 text-warning">This field is required</div>

                            </div>
                            <div class="col-md-6">
                                <label class="text-14 font-metropolis label my-2">
                                    Email *
                                </label>
                                <input type="email" v-model="email" :data-email="emailVal" required/>
                               <div v-if="email.length < 1 && email == '' " class="text-12 mt-2 text-warning">{{ errorEmail }}</div>
                            </div>

                            <div class="col-md-6">
                                <label class="text-14 font-metropolis label my-2">
                                    Phone Number
                                </label>
                                <input type="text" v-mask="['+1 (###) ###-####']" v-model="phone" :data-phone="phoneVal" />
                            </div>
                            <div class="col-md-6">
                                <label class="text-14 font-metropolis label my-2">
                                    Company Name
                                </label>
                                <input type="text" v-model="company" :data-company="companyVal" />
                            </div>

                            <div class="col-md-6">
                                <label class="text-14 font-metropolis label my-2">
                                    Company Address
                                </label>
                                <input type="text" v-model="address" :data-address="addressVal" />
                            </div>

                            <div class="col-md-6">
                                <div class="row">
                                    <div class="col-md-4">

                                        <label class="text-14 font-metropolis label my-2">
                                            Skype
                                        </label>
                                        <input type="text" v-model="skyp" :data-skyp="skypVal" />
                                    </div>
                                    <div class="col-md-4">

                                        <label class="text-14 font-metropolis label my-2">
                                            Linkedin
                                        </label>
                                        <input type="text" v-model="linkedin" :data-linkedin="linkedinVal" />
                                    </div>

                                    <div class="col-md-4">

                                        <label class="text-14 font-metropolis label my-2">
                                            Others
                                        </label>
                                        <input type="text" v-model="others" :data-others="othersVal" />
                                    </div>
                                </div>
                            </div>

                            <div class="col-md-6">

                                <label class="text-14 font-metropolis label my-2">
                                    Quotation Generated By *
                                </label>
                                <input type="text" v-model="quotation_by" :data-quoted_by="quotedByVal" />

                               <div v-if="quotation_by.length < 1 && quotation_by == '' " class="text-12 mt-2 text-warning">This field is required</div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import NormalBasic from '../tabs/NormalBasic.vue'
import {mask} from 'vue-the-mask'
import axios from 'axios';

export default {

    directives: {mask},
    components: {
        NormalBasic,
    },

    data() {
        return {
            webPrice: this.$store.getters.getWebdesign,
            webMidPrice: this.$store.getters.getWebMidDesign,
            webComPrice: this.$store.getters.getWebComDesign,
            webCusPrice: this.$store.getters.getWebCusdesign,
            webCusMidPrice: this.$store.getters.getWebCusMidDesign,
            webCusComPrice: this.$store.getters.getWebCusComDesign,
            form_cost: '',
            video_cost: '',
            online_schedule: '',
            search_cap_cost: '',
            member_login_cost: '',
            analytic_cost: '',
            social_media_cost: '',
            chat_cost: '',
            blog_cost: '',
            extra_discount: '', //this.$store.getters.getExtraDiscountVal
            apply: 'disable',
            email_notice: '',
            client_info_notice: '',
            full_name: '',
            email: '',
            errorEmail: '',
            reg: /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/,
            phone: '',
            directives:{mask},
            company: '',
            address: '',
            skyp: '',
            linkedin: '',
            others: '',
            quotation_by: '',
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
       
        // web content
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
              
        getArticleNoCount(){
            return this.$store.getters.getArticle;
        },

        getWebContetPrice() {
            return (this.$store.state.stock_image * 30) + ( this.$store.state.logo * this.$store.state.logo_no ) + this.getArticlePrice();
        },

        // ecommerce
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

        // Get number of page price.
        getNoPagePrice(){
            if (this.$store.state.package_type == 'basic' && this.$store.state.plan_type == 'custom' ) {
                return this.webCusPrice;
            } else if(this.$store.state.package_type == 'medium' && this.$store.state.plan_type == 'custom' ) {
                return this.webCusMidPrice;
            } else if(this.$store.state.package_type == 'complex' && this.$store.state.plan_type == 'custom' ) {
                return this.webCusComPrice;
            } else if(this.$store.state.package_type == 'complex' && this.$store.state.plan_type == 'template' ) {
                return this.webComPrice;
            } else if(this.$store.state.package_type == 'medium' && this.$store.state.plan_type == 'template' ) {
                return this.webMidPrice;
            } else {
               return this.webPrice;
            }
        },
       

        // ecommerce
        getEcomProductNoCount(){
            return (this.$store.getters.getEcommerceVal / 30).toFixed(0);
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
            this.$axios.$post('discount-verify', JSON.stringify(
                {
                    'package_type': this.$store.state.package_type,
                    'plan_type': this.$store.state.plan_type,
                    'web_design': {
                        "pages": this.getNoPagePrice(), 
                        "price": this.getWebDesignCost(),
                    },
                    'web_content': {
                        "stock_image": this.$store.state.stock_image * 30, 
                        "stock_image_no": this.$store.state.stock_image, 
                        "copy_writing": this.getArticlePrice() ? this.getArticlePrice() : 0,
                        "no_article": this.getArticleNoCount() ? this.getArticleNoCount() : 0,
                        "discount": this.getArticleDis() ? this.getArticleDis() : 0,
                        "logo": this.$store.state.logo ? this.$store.state.logo : 0,
                        "logo_no": this.$store.state.logo_no ? this.$store.state.logo_no : 0,
                    }, 
                    'ecommerce': {
                        "price":this.getEcomPrice(),
                        "no_product":this.getEcomProductNoCount(),
                        "discount": this.getEcomPriceDis(),
                    }, 
                    'addons': {
                        "form_no": (this.$store.getters.getFormVal) ? this.$store.state.form_no : 0,
                        "form_cost": (this.$store.getters.getFormVal) ? this.getFormCost() : 0,
                        "form_discount": (this.getFormDis()) ? this.getFormDis() : 0,
                        "video_cost": (this.$store.getters.getVideoVal) ? this.$store.getters.getVideoNoVal * 300: 0,
                        "video_no": (this.$store.getters.getVideoVal) ? this.$store.getters.getVideoNoVal : 0,
                        "online_schedule_cost": (this.$store.getters.getOnlineScheduleVal) ? 30 : 0,
                        "social_media_cost":  this.$store.getters.getSocialMediaVal ? this.$store.getters.getSocialMediaNoVal * 500 : 0,
                        "social_media_no":  this.$store.getters.getSocialMediaVal ? this.$store.getters.getSocialMediaNoVal : 0,
                        "search_cap": this.$store.getters.getSearchCapVal ? this.$store.getters.getSearchCapNoVal * 3000 : 0,
                        "search_cap_no": this.$store.getters.getSearchCapVal ? this.$store.getters.getSearchCapNoVal : 0,
                        "member_login_cost": this.$store.getters.getMemberLoginVal ? this.$store.getters.getMemberLoginNoVal * 3000 : 0,
                        "member_login_no": this.$store.getters.getMemberLoginVal ? this.$store.getters.getMemberLoginNoVal : 0,
                        "analytic_cost": this.$store.getters.getAnalyticVal ? this.$store.getters.getAnalyticNoVal * 500 : 0,
                        "analytic_no": this.$store.getters.getAnalyticVal ? this.$store.getters.getAnalyticNoVal : 0,
                        "chat_setup_cost": this.$store.getters.getChatSetupVal ? this.$store.getters.getChatSetupNoVal * 500 : 0,
                        "chat_setup_no": this.$store.getters.getChatSetupVal ? this.$store.getters.getChatSetupNoVal : 0,
                        "blog_setup_cost": this.$store.getters.getBlogSetupVal ? this.$store.getters.getBlogSetupNoVal * 5000 : 0,
                        "blog_setup_no": this.$store.getters.getBlogSetupVal ? this.$store.getters.getBlogSetupNoVal : 0,
                    },
                    'client_info': {
                        "name":this.$store.state.full_name,
                        "email": this.$store.state.email,
                        "phone":  this.$store.state.phone,
                        "company": this.$store.state.company,
                        "address": this.$store.state.address,
                        "skyp": this.$store.state.skyp,
                        "linkedin": this.$store.state.linkedin,
                        "others": this.$store.state.others,
                        "quotation_by": this.$store.state.quotation_by,
                    },
                    'discount': this.$store.state.extra_discount,
                    'total': this.getTotalPrice(),
                }
            ))
            .then((res) => {
                console.log(res);
            });
            this.email_notice = "Email Sent Successfully";
            
            return this.apply = 'disable';
        },

        applyfield(){
            if( this.$store.state.full_name && this.$store.state.email && this.$store.state.quotation_by) {
                return this.apply = '';
            } else {
                this.client_info_notice = "*Fill Client information below";
            }
        },
        
    },

    watch:{
        extra_discount: function (val, oldVal) {
            this.$store.dispatch("setExtraDiscountVal", val);
        },

        full_name: function (val, oldVal) {
            this.$store.dispatch("setFullNameVal", val);
        },

        email: function (val, oldVal) {
            if(this.$store.state.email == null || this.$store.state.email == '')
            {
                this.errorEmail = "Please Enter Valid Email";
            }
            else if(!this.reg.test(this.$store.state.email))
            {
                this.errorEmail = "Please Enter Correct Email";
            }
            this.$store.dispatch("setEmailVal", val);
        },

        phone: function (val, oldVal) {
            this.$store.dispatch("setPhoneVal", val);
        },

        company: function (val, oldVal) {
            this.$store.dispatch("setCompanyVal", val);
        },

        address: function (val, oldVal) {
            this.$store.dispatch("setAddressVal", val);
        },

        skyp: function (val, oldVal) {
            this.$store.dispatch("setSkypVal", val);
        },

        linkedin: function (val, oldVal) {
            this.$store.dispatch("setLinkedinVal", val);
        },

        others: function (val, oldVal) {
            this.$store.dispatch("setOthersVal", val);
        },

        quotation_by: function (val, oldVal) {
            this.$store.dispatch("setQuotationVal", val);
        },
    }

}
</script>

<style>
    .extra-discount buttom {
        color: #021969;
    }
</style>