<template>
    <div>
        <div class="py-4 px-5" style="border-bottom: 2px solid #f1f1f1">
            <div class="d-flex col-lg-4 justify-content-between align-items-center">
                <div>
                    
                    <p id="ref-number" class="font-metropolis text-14 mb-0">
                        Reference : {{ info.ref_id }}</p>
                </div>

                <div>
                    <div :class="info.payment_status" class="payment-status text-uppercase payment-complete font-500">
                        Payment {{ info.payment_status }}
                    </div>
                    <div class="text-12">
                        {{ dateFormat(info.updated_at) }}
                    </div>
                </div>
            </div>
        </div>
        <div class="quotation-block px-5" style="border-bottom: 2px solid #f1f1f1">
            <div class="row">
                <div class="col-md-6 col-lg-4 py-5">
                    <div class="webdesign-block mb-5">
                        <p class="text-14  font-metropolis mb-0 block-title">
                            Website Design
                        </p>
                        <div class="mt-2 d-flex gap-3">
                            <p class="text-14 col-md-6 font-metropolis font-500 text-capitalize mb-0">
                                {{ info.package_type }} Design:
                            </p>
                            <p class="mb-0 text-14 fw-bold font-metropolis">
                                ${{ web_design.price }}
                            </p>
                        </div>
                        <div class="  d-flex gap-3">
                            <p class="text-14 col-md-6 font-metropolis font-500 text-capitalize mb-0">
                                No. Of Pages:
                            </p>
                            <p class="mb-0 text-14 fw-bold font-metropolis">
                                {{ web_design.pages }} Pages
                            </p>
                        </div>
                        <div class=" d-flex gap-3">
                            <p class="text-14 col-md-6 font-metropolis font-500 text-capitalize mb-0">
                                Total Cost:
                            </p>
                            <p class="mb-0 text-14 fw-bold font-metropolis">
                                ${{ web_design.price }}
                            </p>
                        </div>
                    </div>

                    <div class="webcontent-block mb-5">
                        <p class="text-14  font-metropolis mb-0 block-title">
                            Website Content
                        </p>
                        <div class="mt-2 d-flex gap-3">
                            <p class="text-14 col-md-6 font-metropolis font-500 text-capitalize mb-0">
                                {{ web_content.stock_image_no }} Stock Images:
                            </p>
                            <p class="mb-0 text-14 fw-bold font-metropolis">
                                ${{ web_content.stock_image }}
                            </p>
                        </div>
                        <div class="d-flex gap-3">
                            <p class="text-14 col-md-6 font-metropolis font-500 text-capitalize mb-0">
                                {{ web_content.no_article }} Article Pages
                                <span class="text-black-50 text-12" v-if="web_content.discount"><br>({{ web_content.discount
                                }} Discount Added)</span>
                            </p>
                            <p class="mb-0 text-14 fw-bold font-metropolis">
                                ${{ web_content.copy_writing }}
                            </p>
                        </div>
                        <div class="d-flex gap-3">
                            <p class="text-14 col-md-6 font-metropolis font-500 text-capitalize mb-0">
                                {{ web_content.logo_no }} Logo:
                            </p>
                            <p class="mb-0 text-14 fw-bold font-metropolis">
                                ${{ web_content.logo }}
                            </p>
                        </div>
                        <div class=" d-flex gap-3">
                            <p class="text-14 col-md-6 font-metropolis font-500 text-capitalize mb-0">
                                Total Cost:
                            </p>
                            <p class="text-14 fw-bold font-metropolis">
                                ${{ web_content.stock_image + web_content.copy_writing + web_content.logo }}
                            </p>
                        </div>
                    </div>
                </div>

                <div class="col-md-6 col-lg-4 py-5">
                    <div class="ecommerce-block mb-5">
                        <p class="text-14  font-metropolis mb-0 block-title">
                            E Commerce
                        </p>
                        <div class="mt-2 d-flex gap-3">
                            <p class="text-14 col-md-6 font-metropolis font-500 text-capitalize mb-0">
                                No. of product to handle:<br>
                            </p>

                            <p class="text-14 fw-bold col-md-6 font-metropolis font-500 text-capitalize mb-0">
                                {{ ecommerce.no_product }}
                            </p>

                        </div>
                        <div class="d-flex gap-3">
                            <p class="text-14 col-md-6 font-metropolis font-500 text-capitalize mb-0">
                                Total Cost:
                                <br>
                                <span class="text-black-50 text-12" v-if="ecommerce.discount">{{ ecommerce.discount }}
                                    Discount Added</span>
                            </p>
                            <p class="text-14 fw-bold col-md-6 font-metropolis font-500 text-capitalize mb-0">
                                ${{ ecommerce.price }}
                            </p>
                        </div>
                    </div>

                    <div class="addons-block mb-4">
                        <p class="text-14  font-metropolis mb-0 block-title">
                            Add-Ons
                        </p>
                        <div class="mt-2 d-flex gap-3" v-if="addons.form_no">
                            <p class="text-14 col-md-6 font-metropolis font-500 text-capitalize mb-0">
                                {{ addons.form_no }} Forms:
                                <span class="text-black-50 text-12" v-if="addons.form_discount"><br>({{ addons.form_discount
                                }} Discount Added)</span>
                            </p>
                            <p class="text-14 fw-bold font-metropolis mb-0">
                                ${{ addons.form_cost }}
                            </p>
                        </div>
                        <div class="d-flex gap-3" v-if="video_cost">
                            <p class="text-14 col-md-6 font-metropolis font-500 text-capitalize mb-0">
                                {{ addons.video_no }} Video:
                            </p>
                            <p class="text-14 fw-bold font-metropolis mb-0">
                                ${{ video_cost }}
                            </p>
                        </div>
                        <div class="d-flex gap-3">
                            <p class="text-14 col-md-6 font-metropolis font-500 text-capitalize mb-0">
                                Online Schedules (monthly):
                            </p>
                            <p class="text-14 fw-bold font-metropolis mb-0">
                                ${{ online_schedule }}
                            </p>
                        </div>
                        <div class="d-flex gap-3" v-if="search_cap_cost">
                            <p class="text-14 col-md-6 font-metropolis font-500 text-capitalize mb-0">
                                {{ addons.search_cap_no }} Onsite search capability:
                            </p>
                            <p class="text-14 fw-bold font-metropolis mb-0">
                                ${{ search_cap_cost }}
                            </p>
                        </div>
                        <div class=" d-flex gap-3" v-if="member_login_cost">
                            <p class="text-14 col-md-6 font-metropolis font-500 text-capitalize mb-0">
                                {{ addons.member_login_no }} Member Login Profile:
                            </p>
                            <p class="text-14 fw-bold font-metropolis mb-0">
                                ${{ member_login_cost }}
                            </p>
                        </div>
                        <div class=" d-flex gap-3" v-if="analytic_cost">
                            <p class="text-14 col-md-6 font-metropolis font-500 text-capitalize mb-0">
                                {{ addons.analytic_no }} Analytics setup:
                            </p>
                            <p class="text-14 fw-bold font-metropolis mb-0">
                                ${{ analytic_cost }}
                            </p>
                        </div>
                        <div class=" d-flex gap-3" v-if="social_media_cost">
                            <p class="text-14 col-md-6 font-metropolis font-500 text-capitalize mb-0">
                                {{ addons.social_media_no }} Social Media setup:
                            </p>
                            <p class="text-14 fw-bold font-metropolis mb-0">
                                ${{ social_media_cost }}
                            </p>
                        </div>
                        <div class=" d-flex gap-3" v-if="chat_cost">
                            <p class="text-14 col-md-6 font-metropolis font-500 text-capitalize mb-0">
                                {{ addons.chat_setup_no }} Chat setup:
                            </p>
                            <p class="text-14 fw-bold font-metropolis mb-0">
                                ${{ chat_cost }}
                            </p>
                        </div>
                        <div class=" d-flex gap-3" v-if="blog_cost">
                            <p class="text-14 col-md-6 font-metropolis font-500 text-capitalize mb-0">
                                {{ addons.blog_setup_no }} Blog setup:
                            </p>
                            <p class="text-14 fw-bold font-metropolis mb-0">
                                ${{ blog_cost }}
                            </p>
                        </div>
                        <div class="d-flex gap-3">
                            <p class="text-14 col-md-6 font-metropolis font-500 text-capitalize mb-0">
                                Total Cost:
                            </p>
                            <p class="text-14 fw-bold font-metropolis mb-0">
                                ${{ getAddonsPrice() }}
                            </p>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-lg-4 py-5 border-start">

                    <div class="total-cost mt-3 px-5 pt-5">
                        <p class="text-20 font-metropolis pt-3 font-500">
                            Price Summary:
                        </p>
                        <div class="mt-2  d-flex gap-3">
                            <p class="text-14 col-md-6 font-metropolis font-500 mb-0">
                                Sub Total Price: {{ getTotalPrice() }}
                            </p>
                            <p class="text-14 fw-bold font-metropolis mb-0">
                                ${{ info.total }}
                            </p>
                        </div>
                        <div class="d-flex gap-3">
                            <p class="text-14 col-md-6 font-metropolis font-500 mb-0">
                                Total Discount: (-)
                            </p>
                            <p class="text-14 fw-bold font-metropolis">
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
                                ${{ ( info.total - calculateDiscount() ).toFixed(2) }}
                            </p>
                        </div>
                        <div class="extra-discount" v-if="info.discount  > 0">
                            New Discount: {{ info.discount }}%
                        </div>

                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
import moment from 'moment'

export default {
    data() {
        return {
            info: [],
            web_design: [],
            web_content: [],
            ecommerce: [],
            form_cost: '',
            video_cost: '',
            online_schedule: '',
            search_cap_cost: '',
            member_login_cost: '',
            analytic_cost: '',
            social_media_cost: '',
            chat_cost: '',
            blog_cost: '',
            addons: [],
            client_info: [],
        }
    },

    async mounted() {
        try {
            const info = await this.$axios.$get(
                `history/${this.$route.params.details}`
            );
            this.info = info;
            this.web_design = JSON.parse(info.web_design);
            this.web_content = JSON.parse(info.web_content);
            this.ecommerce = JSON.parse(info.ecommerce);
            this.addons = JSON.parse(info.addons);
            this.client_info = JSON.parse(info.client_info);

        } catch (error) {
            console.log(error);
        }
    },

    methods: {
        getAddonsPrice(){
            this.form_cost = this.addons.form_cost ?  this.addons.form_cost : 0;
            this.video_cost =  (this.addons.video_no) ? this.addons.video_no * 300: 0;
            this.online_schedule =  this.addons.online_schedule_cost ? this.addons.online_schedule_cost : 0;
            this.search_cap_cost =  this.addons.search_cap_no ? this.addons.search_cap_no * 3000 : 0;
            this.member_login_cost =  this.addons.member_login_no ? this.addons.member_login_no * 3000 : 0;
            this.analytic_cost =  this.addons.analytic_no ? this.addons.analytic_no * 500 : 0;
            this.social_media_cost =  this.addons.social_media_no ? this.addons.social_media_no * 300 : 0;
            this.chat_cost =  this.addons.chat_setup_no ? this.addons.chat_setup_no * 500 : 0;
            this.blog_cost =  this.addons.blog_setup_no ? this.addons.blog_setup_no * 5000 : 0;
            return this.form_cost + this.video_cost + this.online_schedule + this.search_cap_cost + this.member_login_cost + this.analytic_cost + this.social_media_cost + this.chat_cost + this.blog_cost;
        },

        getTotalPrice() {
            const webdesignPrice = this.web_design.price;
            const webcontPrice = this.web_content.stock_image + this.web_content.copy_writing + this.web_content.logo;
            const ecomPrice = this.ecommerce.price;
            const addonsPrice = this.getAddonsPrice();
            return webdesignPrice + webcontPrice + ecomPrice + addonsPrice;
        },

        calculateDiscount(){
            const extrdis = this.info.discount;
            return ( (this.getTotalPrice() * extrdis) / 100 );
        },

        dateFormat(date){
            return moment(date).format("Do MMMM YYYY");
        },

    },

}
</script>

<style lang="scss" scoped>

</style>