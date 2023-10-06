<template>
    <div>
        <div class="row justify-content-between align-items-center mb-5">
            <div class="col text-start">
                    <a href="/"><img class="logo" src="~assets/images/logo.png" /></a>
            </div>
            <div class="col cals-menu text-end position-relative">
                <svg @click="showDropDownMenu = !showDropDownMenu" xmlns="http://www.w3.org/2000/svg" width="50.816" height="25" viewBox="0 0 50.816 25">
                <g id="menu-svgrepo-com_2_" data-name="menu-svgrepo-com (2)" transform="translate(0 -115.92)">
                    <rect id="Rectangle_922" data-name="Rectangle 922" width="33" height="3" transform="translate(0 115.92)" fill="#fff"/>
                    
                    <path :class="{ active: showDropDownMenu }" class="cals-menu-dropdown" id="Path_3176" data-name="Path 3176" d="M335.786,202.231l6.89,6.921,6.89-6.921Z" transform="translate(-298.749 -77.17)" fill="#fff"/>
                    
                    <rect id="Rectangle_923" data-name="Rectangle 923" width="33" height="3" transform="translate(0 137.92)" fill="#fff"/>
                    <rect id="Rectangle_924" data-name="Rectangle 924" width="33" height="3" transform="translate(0 126.92)" fill="#fff"/>
                </g>
                </svg>

                <div :class="{ active: showDropDownMenu }" class="cals-menu-dropdown text-white overflow-hidden position-absolute end-0">
                    <ul class="text-black list-unstyled text-start mb-0">
                        <li><NuxtLink class="lh-lg p-2 px-3 d-block" to='/calculator'>Calculator</NuxtLink></li>
                        <li><NuxtLink class="lh-lg p-2 px-3 d-block" to='/dashboard'>Dashboard</NuxtLink></li>
                        <li><NuxtLink class="lh-lg p-2 px-3 d-block" to='/history'>View History</NuxtLink></li>
                        <li><a class="lh-lg p-2 px-3 d-block" @click="logout">Logout</a></li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="mt-5">
                <h1 class="font-metropolis text-white text-md fw-bold mt-5">
                    Code Experts Website Quote Generator
                </h1>
                <p class="text-16  mt-3 font-200 font-metropolis text-white " data-wow-duration="2s"
                    data-wow-delay="0.1s">
                    This solution to help create a fast and accurate quote for Code Experts clients 
                    <br>
                    Navigate below for website elements and generate a quotation in a matter of few clicks
                </p>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    data(){
        return {
            showDropDownMenu: false,
        }
    },

    methods: {
        async logout(){
				this.$nuxt.$loading.start();
				await this.$auth.logout();
				this.$nuxt.$loading.finish();
				this.$router.push({
					path: '/',
				});
			},
    }
};

</script>