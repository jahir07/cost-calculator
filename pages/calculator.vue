<template>
    <div>

        <div class="container-fluid cc-db-blue-bg py-5">

            <div class="container text-center">
                <Header />
                <div class="stepper steps py-3">
                    <div class="stepper-wrapper">
                        <div class="screen-indicator completed">
                            <span>1</span>
                            <i class="fa fa-check"></i>
                        </div>
                        <div class="screen-indicator completed" v-if="step === 2 || step === 3">
                            <span>2</span>
                            <i class="fa fa-check"></i>
                        </div>
                        <div class="screen-indicator" v-else>
                            <span>2</span>
                            <i class="fa fa-check"></i>
                        </div>
                        <div class="screen-indicator completed" v-if="step === 3">
                            <span>3</span>
                            <i class="fa fa-check"></i>
                        </div>
                        <div class="screen-indicator" v-else>
                            <span>3</span>
                            <i class="fa fa-check"></i>
                        </div>
                    </div>
                </div>

            </div>
        </div>

        <div class="container-fluid" style="background: #F7F7F7;">
            
                <div id="stepper-content">
                    <form class="tabs">
                        <div v-if="step === 1">
                            <div class="total-summary">
                                <div class="container px-0 d-flex gap-5">
                                <div>
                                    <h4 class="mb-0">Total Summary</h4>
                                    <p class="text-10">Displays total amount for all selected fields</p>
                                </div>
                                <span class="border p-2 d-block">${{ $store.state.total_price }}</span>
                                </div>
                            </div>
                            <div class="container px-0">
                                <First />
                                <div class="stepper-btns my-4 text-center">
                                    <a class="next-btn" id="nextBtn"
                                        v-on:click="nexting()">Next</a>
                                </div>
                            </div>
                        </div>
                        <div v-if="step === 2">
                            <div class="container px-0">
                                <Second />
                                <div class="stepper-btns my-4 text-center">
                                    <a class="previous-btn font-metropolis mx-3" v-on:click="prev()">Previous</a>
                                    <a class="next-btn" id="nextBtn"
                                        v-on:click="nexting()" v-if="this.$store.state.full_name !== '' && this.$store.state.email !=='' && this.reg.test(this.$store.state.email) && this.$store.state.quotation_by !== ''">Next</a>
                                </div>
                            </div>
                        </div>

                        <div v-if="step === 3">
                            <div class="container px-0">
                                <Third />

                                <!-- required otherwise updated data not shows -->
                                <div class="d-none" style="border-bottom: 2px solid #f1f1f1">
                                    <span class="basic b" v-if="$store.getters.getPackageType == 'basic' && $store.getters.getPlanType == 'custom'">{{ webcusdesign }}</span>
                                    <span class="medium d" v-else-if="$store.getters.getPackageType == 'medium' && $store.getters.getPlanType == 'custom'">{{ webcusmiddesign }}</span>
                                    <span class="complex c" v-else-if="$store.getters.getPackageType == 'complex' && $store.getters.getPlanType == 'custom'">{{ webcuscomdesign }}</span>
                                    <span class="complex e" v-else-if="$store.getters.getPackageType == 'complex' && $store.getters.getPlanType == 'template'">{{ webcomdesign }}</span>
                                    <span class="medium f" v-else-if="$store.getters.getPackageType == 'medium' && $store.getters.getPlanType == 'template'">{{ webmiddesign }}</span>
                                    <span class="basic a" v-else="$store.getters.getPackageType == 'basic' && $store.getters.getPlanType == 'template'">{{ webdesign }}</span>
                                </div>


                                <div class="stepper-btns my-4 text-center">
                                    <a class="previous-btn font-metropolis mx-3" v-on:click="prev()">Previous</a>
                                    <a class="next-btn" id="nextBtn" 
                                        :data-total-price="getTotalPrice()" :data-package="this.$store.getters.getPackageType" :data-total-page="getNoPage()"
                                        v-on:click="saveData()">Send</a>

                                    <br>
                                </div>
                            </div>

                        </div>

                    </form>

                </div>
           
        </div>

    </div>
</template>
<script>
import $ from "jquery";
import Header from '@/components/Header.vue'
import First from '@/components/steps/First.vue'
import Second from '@/components/steps/Second.vue'
import Third from '@/components/steps/Third.vue'

export default {
	// middleware:'auth',
    auth: 'auth',

    components: {
        First,
        Second,
        Third,
        Header
    },

    data() {
        return {
            showDropDownMenu: false,
            step: 1,
            currentTab: 0,
            webPrice: this.$store.getters.getWebdesign,
            webMidPrice: this.$store.getters.getWebMidDesign,
            webComPrice: this.$store.getters.getWebComDesign,
            webCusPrice: this.$store.getters.getWebCusdesign,
            webCusMidPrice: this.$store.getters.getWebCusMidDesign,
            webCusComPrice: this.$store.getters.getWebCusComDesign,
            email: '',
            errorEmail: '',
            reg: /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/,
          
        }
    },

    mounted(){
        const loggein = this.$auth.loggedIn
        if (!loggein) {
            this.$router.push({
                path: '/',
            });
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

    },

    methods: {
        prev() {
            this.step--;
        },

        nexting() {
            this.step++;
        },

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

        getNoPage(){
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
       
        // web content
        getArticleDis(){
            var articleTotalDis;
            var articlePrice = this.$store.getters.getArticle * 200;
            if(articlePrice >= 500 && articlePrice < 1000) {
                articleTotalDis = '15%';
            } else if(articlePrice >= 1000  && articlePrice < 5000 ) {
                articleTotalDis = '20%';
            } else if( articlePrice > 5000 ) {
                articleTotalDis = '25%';
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
        getEcomProductNoCount(){
            return (this.$store.getters.getEcommerceVal / 30).toFixed(0);
        },

        getEcomPriceDis(){
            var ecomTotalDis;
            var ecomPrice = this.$store.getters.getEcommerceVal;
            if(ecomPrice >= 500 && ecomPrice < 1000) {
                ecomTotalDis = '15%';
            } else if(ecomPrice >= 1000  && ecomPrice < 5000 ) {
                ecomTotalDis = '20%';
            } else if( ecomPrice > 5000 ) {
                ecomTotalDis = '25%';
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
            } else if( form_cost < 500 ) {
                form_no = this.$store.getters.getFormNoVal * 30;
            } else {
                form_no = '';
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

        getTotalPrice() {
            const webdesignPrice = this.getWebDesignCost();
            const webcontPrice = this.getWebContetPrice();
            const ecomPrice = this.getEcomPrice();
            const addonsPrice = this.getAddonsPrice();

            return webdesignPrice + webcontPrice + ecomPrice + addonsPrice;
        },
        
        async saveData(){
            let self = this;
            await this.$axios.post('history', {
                'user_id': this.$auth.user.id,
                'ref_id': Date.now(),
                'package_type': this.$store.state.package_type,
                'plan_type': this.$store.state.plan_type,
                'web_design': {
                    "pages": this.getNoPage(), 
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
                'client_email': this.$store.state.email, // this is for send invoice mail to the client.
                'discount': this.$store.state.extra_discount,
                'total': this.getTotalPrice(),
            })
            .then(function (response) {
                console.log(response);
                // self.$router.push({
                //     path: '/dashboard',
                // });
            })
            .catch(function (error) {
                console.log(error);
            });

        },

    },
    
    watch: {
        email: function(val, oldVal) {
            if(this.$store.state.email == null || this.$store.state.email == '')
            {
                this.errorEmail = "Please Enter Valid Email";
            }
            else if(!this.reg.test(this.$store.state.email))
            {
                this.errorEmail = "Please Enter Correct Email";
            }
        }
    }

}
</script>
