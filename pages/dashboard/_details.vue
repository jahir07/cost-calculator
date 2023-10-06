<template>
    <div>
        <div class="container-fluid cc-db-blue-bg py-2">
            <div class="container mb-5 text-center">
                <Header />
            </div>
        </div>
        <div class="container-fluid py-5" style="background: #F7F7F7;">
            <div class="container mt-2 px-0">

                <div class="cc-history-section history-details pb-5">
                    
                    <BackendDetails />

                    <div class="text-center mt-5 py-5">
		                <NuxtLink to="/dashboard" class="back-btn font-metropolis" v-if="$auth.loggedIn">Back</NuxtLink>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import BackendDetails from '../../components/sections/BackendDetails.vue'

export default {

    components: {
        BackendDetails,
    },

    data() {
        return {
            slug: this.$route.params,
        }
    },

}
</script>

<style lang="scss" scoped>
</style>