<template>
    <div>
        <div id="first-step" class="tab">
            

            <div class="stepper-content no-bottom-radius py-4">
                <div class="d-flex justify-content-between align-items-center multiple-tabs px-5 ">
                    <div>
                        <h2 class="my-4 text-center text-20 fw-bold font-metropolis"> Website Design</h2>
                        <ul class="nav nav-tabs" role="tablist" id="website-design" data-package_type="packagetype">
                            <li>
                                <a data-bs-toggle="tab" id="basic" :class="this.$store.getters.getPackageType == 'basic' ? 'active text-16 fw-bold font-raleway' : 'text-16 fw-bold font-raleway'" @click="packageType('basic')">Basic</a>
                            </li>
                            <li>
                                <a data-bs-toggle="tab" id="medium" :class="this.$store.getters.getPackageType == 'medium' ? 'active text-16 fw-bold font-raleway' : 'text-16 fw-bold font-raleway'" @click="packageType('medium')" >Medium</a>
                            </li>
                            <li>
                                <a data-bs-toggle="tab" id="complex" :class="this.$store.getters.getPackageType == 'complex' ? 'active text-16 fw-bold font-raleway' : 'text-16 fw-bold font-raleway'" @click="packageType('complex')">Complex</a>
                            </li>
                        </ul>
                        <!-- {{ packagetype }} -->
                    </div>
                    <div>
                        <h2 class="my-4 text-14 text-center fw-bold font-metropolis"> Select a plan</h2>
                        <ul class="nav nav-tabs" role="tablist" id="select-plan" data-plan_type="plantype">
                            <li>
                                <a data-bs-toggle="tab" id="template"  :class="this.$store.getters.getPlanType == 'template' ? 'active text-16  fw-bold font-raleway' : ''" @click="planType('template')"> Template</a>
                            </li>
                            <li>
                                <a data-bs-toggle="tab" id="custom" :class="this.$store.getters.getPlanType == 'custom' ? 'active text-16  fw-bold font-raleway' : 'text-16  fw-bold font-raleway'"  @click="planType('custom')">Custom Design</a>
                            </li>
                        </ul>
                        <!-- {{ plantype }} -->

                    </div>
                </div>
            </div>
            
            <div class="tab-content">

                <div id="basic-plan" class="tab-pane active">
                    <NormalBasic />
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
        return {
            package_type: this.$store.getters.getPackageType,
            plan_type: this.$store.getters.getPlanType,
        }
    },

    computed: {
        packagetype(){
            this.package_type = this.$store.getters.getPackageType;
            return this.$store.getters.getPackageType;
        },

        plantype(){
            this.plan_type = this.$store.getters.getPlanType;
            return this.$store.getters.getPlanType;
        }
    },

    watch:{

        package_type: function (val, oldVal) {
            this.$store.dispatch("setPackageType", val);
        },

        plan_type: function (val, oldVal) {
            this.$store.dispatch("setPlanType", val);
        },
    },

    methods: {

        packageType(val) {
            this.package_type = val;
        },

        planType(val) {
            this.plan_type = val;
        },

    },

    
}
</script>

<style>
    .total-summary {
        position: sticky;
        top: 0;
        background: white;
        z-index: 333;
        padding: 0 10px;
        color: #111;
        box-shadow: 0px 10px 20px 6px #e9e9e9;
        padding: 20px 50px;
        border-radius: 10px;
    }
    .total-summary span {
        width: 250px;
        height: 40px;
        text-align: center;
    }
</style>