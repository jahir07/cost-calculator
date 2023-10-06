<template>
    <div>
        <div class="container-fluid cc-db-blue-bg py-2">
            <div class="container text-center">
                <Header />
            </div>
        </div>

        <div class="container-fluid py-5" style="background: #F7F7F7;">
            <div class="container mt-2 px-0 bg-white">

                <div class="cc-history-section pb-5" v-if="draft_panel">
                    <div class="d-flex py-4 px-4 align-items-center justify-content-between table-header"
                        style="border-bottom: 2px solid #f1f1f1">
                        <h2 class="h3 font-metropolis fw-bold mb-0">
                            Draft</h2>
                        <form class="search d-flex align-items-center justify-content-between">
                            <button type="submit" class="search-btn"><i class="fa fa-search"></i></button>
                            <input type="text" placeholder="Search with reference number" v-model="search" name="search"
                                class="form-control">
                        </form>
                    </div>

                    <div class="row mt-5 px-5 align-items-center" v-for="history in histories" :key="history.id">
                        <div class="col-md-2 px-0">
                            <div class="ref-no-block px-3 pt-3">
                                <p class="text-white font-metropolis mb-0 ref-number-title">
                                    Reference Number:
                                </p>
                                <p class="fw-bold text-white font-metropolis">
                                     {{ history.ref_id }} 
                                </p>
                                <div class="d-flex justify-content-between">
                                    <p class="date text-white font-metropolis">
                                        {{ dateFormat(history.updated_at) }}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-8 px-0" style="background: #F8F8F8;">
                            <div class="user-history px-4 pt-2 d-flex justify-content-between align-items-center">
                                <div class="user-block">
                                    <span class="text-14  font-metropolis mb-0">
                                        Full name
                                    </span>
                                    <p class="fw-bold  font-metropolis">
                                        {{ JSON.parse(history.client_info).name }}
                                    </p>
                                </div>
                                <div class="mx-2 mx-md-5">
                                    <span class="text-14 font-metropolis mb-0">
                                        Company Name
                                    </span>
                                    <p class="fw-bold  font-metropolis">
                                        {{ JSON.parse(history.client_info).company }}
                                    </p>
                                </div>
                                <div class="">
                                    <span class="text-14 font-metropolis mb-0">
                                        Email
                                    </span>
                                    <p class="fw-bold  font-metropolis">
                                        {{ JSON.parse(history.client_info).email }}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-2 px-0" style="background: #F8F8F8;">
                            <div class="user-history px-4 text-center d-flex align-items-center">
                                <div class="col-md-2 px-0" style="background: #F8F8F8;">
                                    <div
                                        class="px-4 pt-2 text-center d-flex align-items-center edit-delete-block justify-content-evenly">
		                                <NuxtLink :to="`/draft/${history.id}`" v-if="$auth.loggedIn"><img src="~/assets/images/edit-blue.svg"  class="icon-hidden" /></NuxtLink>
                                        <a class="delete-draft" @click.stop.prevent="showpop(history.id)">
                                            <!-- <img src="~/assets/images/delete-draft-i.svg" /> -->
                                            <img src="~/assets/images/delete-op.svg" class="icon-hidden" />
                                        </a>

                                         <!-- delete draft pop up -->
                                        <div id="delete-draft" :class="show == true ? 'd-block' : 'd-none'" class="shadow-lg">
                                                <div class="text-center" style="border-radius: 8px;">
                                                    <div class=" my-5 px-4">
                                                        <img src="~/assets/images/danger-alert.svg" width="300" />
                                                        <p class="font-metropolis mt-4 font-500" style="color: #042479;">
                                                            Are you sure you want to delete draft?</p>
                                                        <div class="yes-no-options mt-4 d-flex">
                                                            <a class="edit-quote font-metropolis mx-3" @click="hidepop">No</a>
                                                            <a class="save-draft font-metropolis mx-3" @click.stop.prevent="delete_me(history.id)">Yes</a>
                                                        </div>
                                                    </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                   <div class="col-lg-6 m-auto justify-content-between mt-5 text-center pagination">
                        <nuxt-link to="/draft/page/2">Next Page »</nuxt-link>
                    </div>

                    <div class="text-center mt-5 py-5">
                        <NuxtLink to='/dashboard' class="back-btn font-metropolis" v-if="$auth.loggedIn">
                            Dashboard</NuxtLink>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
import moment from 'moment'
import {mask} from 'vue-the-mask'
import BackendPackageDetails from '../../components/sections/BackendPackageDetails.vue'

export default {

    components: {
        BackendPackageDetails,
    },

	middleware:['auth'],
    // auth:'guest',    
    directives: {mask},

    data() {
        return {
            'search': '',
            'histories': [],
            'delete': false,
            'show': false,
            'draft_panel': true,
            'edit_panel': false,
            'id': '',
            'edit': [],
            directives:{mask},
            'full_name': '',
            'email': '',
            'company': '',
            'address': '',
            'skyp': '',
            'linkedin': '',
            'others': '',
            'quotation_by': '',
        }
    },

    async mounted() {
        try {
            const histories = await this.$axios.$get(
                'history'
            );
            // console.log(histories.data);
            this.histories = histories.data;

        } catch (error) {
            // console.log(error);
        }
    },

    methods: {

        dateFormat(date){
            return moment(date).format("Do MMMM YYYY");
        },

        hidepop(){
            this.show = false;
        },

        showpop(id){
            this.show = true;
            this.id = id;
        },

        delete_me(id) {
            try {
                const del = this.$axios.$delete(
                `history/${id}`
                )
                .then(response => {
                    // const histories = this.$axios.$get(
                    //     'history'
                    // );
                    // console.log(histories.data);
                    // this.histories = histories.data;
                    this.show = false;
                    console.log(response);
                    this.$router.push({
                        path: '/dashboard',
                    });
                    console.log(del);
                });
                

            } catch (error) {
                console.log(error);
            }
        }
        
    },

    watch: {
        search: function(query) {
            this.searching = true;
            if(this.search) {
                let histories = this.$axios.$get(
                `/search/${query}`,
                )
                .then((response) => {
                    this.histories = response;
                });
            } else {
                try {
                    const histories = this.$axios.$get(
						'history'
					)
                    .then((response) => {
                        // console.log(response.data);
                        this.histories = response.data;
                    });
                }
                catch (error) {
                    console.log(error);
                }
            }
        }
    },

}
</script>

<style>
#delete-draft > div {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translateX(-50%);
    width: 400px;
    background: #fff;
    z-index: 33;
}

#delete-draft:before {
    content: "";
    background: #111111bf;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    height: 100vh;
    z-index: 22;
}
</style>