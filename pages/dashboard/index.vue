<template>
	<div>
		
		<div class="container-fluid dashboard cost-calculator-dashboard px-0">
			<div class="d-flex px-0 py-0">
				<div class="sidebar-section py-5" style="background: #021969;">
					<div class="sidebar sidebar-lg h-100 position-fixed top-0" id="sidebar">

						<a href="/"><img class="logo pt-3" src="~assets/images/logo.png" /></a>
						<ul class="sidebar-links px-0 list-unstyled mt-5 pt-5">

							<li class="sidebar-item mt-4">
								<NuxtLink to="/dashboard"><img src="~assets/images/home.svg" /><span class=" mx-3 text-white font-metropolis ">Dashboard</span></NuxtLink>
							</li>

							<li class="sidebar-item mt-4">
								<NuxtLink to="/calculator"><img src="~assets/images/edit-quote-cc.svg" /><span class="mx-3 text-white font-metropolis">New Quotation</span></NuxtLink>
							</li>

							<li class="sidebar-item mt-4">
								<NuxtLink to="/draft"><img src="~assets/images/draft-2.svg" />
									<span class="mx-3 text-white font-metropolis"> Draft</span></NuxtLink>
							</li>

							<li class="sidebar-item mt-4">
								<NuxtLink to='/history'><img src="~assets/images/history.svg" /><span class="mx-3 text-white font-metropolis">History</span></NuxtLink>
							</li>

						</ul>

						<ul class="sidebar-links px-0 list-unstyled mt-5 py-5 position-absolute bottom-0">
							<li class="sidebar-item mt-4">
								<a @click="logout">
									<svg xmlns="http://www.w3.org/2000/svg" width="25.106" height="17.634" viewBox="0 0 25.106 17.634">
									<g transform="translate(0 -73.106)">
										<path id="Path_3212" data-name="Path 3212" d="M172.064,73.106a8.816,8.816,0,0,0-7.9,4.9l1.373.682a7.283,7.283,0,1,1,0,6.473l-1.373.682a8.817,8.817,0,1,0,7.9-12.736Z" transform="translate(-155.774)" fill="#fff"/>
										<path id="Path_3213" data-name="Path 3213" d="M16.29,179.375v-1.533H2.935l1.758-1.758L3.609,175,0,178.609l3.609,3.609,1.084-1.084-1.758-1.758Z" transform="translate(0 -96.686)" fill="#fff"/>
									</g>
									</svg>

									<span class="mx-3 text-white font-metropolis">Log Out</span></a>
							</li>
						</ul>
					</div>
				</div>

				<div class="dashboard-content-section px-4 py-5 cc-db-content">
					<div class="row px-5">
						<div class="col-lg-9">
							<div class="page-title d-flex justify-content-between">
								<div class="d-flex " style="flex: 0 0 60%;">
									<a class="sidebar-toggle d-none" data-bs-toggle="offcanvas" data-bs-target="#sidebar-section"><i class="fa fa-bars mx-3" style="font-size: 25px;color: #322A7D;"></i></a>

									<div class="dashboard-title">
										<h1 class="h4 fw-bolder font-metropolis">
											Cost calculator Dashboard
										</h1>
									</div>
								</div>

								<div class="cc-search-section" style="flex: 0 0 40%;">
									<div id="cc-form">
										<input type="text" placeholder="Referance Id.." v-model="search">
										<i class="fa fa-search"></i>
									</div>
								</div>

							</div>
							<div class="quick-stats mt-3">
								<div class="row mt-4">
									<div class="col-md-6 col-lg-3 col-sm-6" @click="completed_list">
										<div class="box">
											<p class="text-14  font-metropolis db-p-color ">
												Completed Quotation
											</p>
											<h4 class="h5 fw-bolder completed-quote">
												{{ completed }}
											</h4>

										</div>
									</div>
									<div class="col-md-6 col-lg-3 col-sm-6">
										<div class="box">
											<p class="text-14  font-metropolis db-p-color ">
												Requested Quotes
											</p>
											<h4 class="h5  fw-bolder  font-metropolis">
												{{ total }}
											</h4>

										</div>
									</div>
									<div class="col-md-6 col-lg-3 col-sm-6">
										<div class="box">
											<p class="text-14  font-metropolis db-p-color ">
												Registered Clients
											</p>
											<h4 class="h5  fw-bolder ">
												{{ totaluser }}
											</h4>

										</div>
									</div>
									<div class="col-md-6 col-lg-3 col-sm-6">
										<div class="box">
											<p class="text-14  font-metropolis db-p-color ">
												Pending Quotes
											</p>
											<h4 class="h5  fw-bolder">
												{{ pending }}
											</h4>

										</div>
									</div>
								</div>
							</div>
							
						</div>
						<div class="col-lg-3 px-2 profile-section mt-3">
							<div class="user-details py-3 px-3 ms-3 position-static mt-5">
								<div class="d-flex gap-4 align-items-center">
									<div>
										<svg xmlns="http://www.w3.org/2000/svg" width="24.235" height="30.141" viewBox="0 0 28.235 34.141">
										<g id="profile-svgrepo-com" transform="translate(-34.788)">
											<g id="Group_360" data-name="Group 360" transform="translate(34.788)">
											<g id="Group_359" data-name="Group 359" transform="translate(0)">
												<path id="Path_3208" data-name="Path 3208" d="M136.7,49.778a5.98,5.98,0,0,0-5.973,5.973,8.57,8.57,0,0,0,1.686,4.852,4.9,4.9,0,0,0,8.573,0,8.57,8.57,0,0,0,1.686-4.852A5.98,5.98,0,0,0,136.7,49.778Zm0,12.076a4.286,4.286,0,0,1-3.26-2,7.361,7.361,0,0,1-1.44-4.1,4.7,4.7,0,1,1,9.4,0C141.4,58.441,139.185,61.854,136.7,61.854Z" transform="translate(-122.58 -45.552)"/>
												<path id="Path_3209" data-name="Path 3209" d="M48.905,0A14.117,14.117,0,1,0,63.023,14.117,14.133,14.133,0,0,0,48.905,0Zm0,26.961a12.769,12.769,0,0,1-6.941-2.042,6.937,6.937,0,0,1,2.447-5.047,1.848,1.848,0,0,1,2.158-.137,4.313,4.313,0,0,0,4.672,0,1.845,1.845,0,0,1,2.152.132,6.944,6.944,0,0,1,2.453,5.052A12.768,12.768,0,0,1,48.905,26.961Zm8.142-2.918a8.218,8.218,0,0,0-2.83-5.148,3.116,3.116,0,0,0-3.636-.25,3.056,3.056,0,0,1-3.352,0,3.119,3.119,0,0,0-3.643.256,8.209,8.209,0,0,0-2.824,5.141,12.844,12.844,0,1,1,16.284,0Z" transform="translate(-34.788)"/>
												<path id="Path_3210" data-name="Path 3210" d="M109.763,352.372H92.491a.637.637,0,0,0,0,1.273h17.272a.637.637,0,0,0,0-1.273Z" transform="translate(-87.009 -322.457)"/>
												<path id="Path_3211" data-name="Path 3211" d="M109.763,387.161H92.491a.637.637,0,0,0,0,1.273h17.272a.637.637,0,0,0,0-1.273Z" transform="translate(-87.009 -354.293)"/>
											</g>
											</g>
										</g>
										</svg>
									</div>
									<p class="text-14 font-metropolis"> Welcome Back! <strong> {{ $auth.user.name }}</strong></p>
								</div>
							</div>

						</div>

					</div>
					<div class="row px-5">
						<div class="col">
							<div class="dashboard-user-data">

								<div class="d-flex cc-db-client-info mt-5 py-0 align-items-center" v-for="history in histories" :key="history.id">
									<div class="py-4" style="flex: 0 0 80%">
										<div class="d-flex gap-4 px-3 justify-content-between">
											<div class="cc-user-info d-flex gap-2">
												<div class="edit-btn">
														<img src="~assets/images/edit-gray.svg" />
												</div>
												<div>
													<h2 class="h5 font-600 font-metropolis">
														{{ JSON.parse(history.client_info).name }}
													</h2>
													<p class="cc-user-location my-2 text-14">
														<img src="~assets/images/map-marker.svg">
														{{ JSON.parse(history.client_info).address }}
													</p>
												</div>
											</div>
											<div class="status d-flex mt-3 ">
												<p class="ref-number text-14" style="text-decoration: underline;">
													<!-- Reference Number-34566 -->
													Reference - {{ history.ref_id }}
												</p>
												<p class="cc-view-option font-500 mx-3">
													<NuxtLink :to="`/dashboard/${history.id}`" class="text-white" v-if="$auth.loggedIn">VIEW</NuxtLink>
												</p>
											</div>
											<div class="cc-date-and-time">
												<p class="font-metropolis font-500 mb-2 text-14">
													{{ dateFormat(history.updated_at) }}
												</p>
												<p :class="history.payment_status" class="payment-status text-uppercase payment-complete font-500">
														Payment {{ history.payment_status }}
												</p>
											</div>
										</div>
									</div>
									<div style="flex: 0 0 20%; border-left: 1px solid #f1f1f1;" class="py-3 cc-total-amount">
										<div class="offset-1 offset-sm-2">
											<div class="discount position-relative" v-if="history.discount">	
												<svg xmlns="http://www.w3.org/2000/svg" width="56.547" height="56.549" viewBox="0 0 46.547 46.549">
													<g id="Group_364" data-name="Group 364" transform="translate(-0.001 0)">
														<path id="Path_3214" data-name="Path 3214" d="M45.84,1.661A1,1,0,0,0,44.888.71L30.04,0a.966.966,0,0,0-.754.292L.294,29.286a1,1,0,0,0,0,1.414L15.85,46.256a1,1,0,0,0,1.414,0L46.255,17.265a1,1,0,0,0,.292-.755ZM16.557,44.135,2.415,29.993,30.387,2.021l13.5.644.643,13.5Z" fill="#2e4765"/>
													</g>
												</svg>
												<span>{{ history.discount }}% <br><i>Discount</i></span>
											</div>
											<div class="d-flex justify-content-between ">
												<p class="font-metropolis text-14 pt-3 pb-2">
													Total Amount
												</p>
											</div>
											<h3 class="font-metropolis font-600 h3 mb-0" v-if="history.discount">
												${{ ( history.total - ( (history.total * history.discount) / 100 ) ).toFixed(2) }}
											</h3>
											<h3 class="font-metropolis font-600 h3 mb-0" v-else>
												${{ ( history.total ).toFixed(2) }}
											</h3>
											<p :class="history.payment_status" class="payment-status text-uppercase text-start font-500">
												{{ history.payment_status }}
											</p>
										</div>
									</div>
								</div>

							

								<div class="col-lg-6 m-auto justify-content-between mt-5 text-center pagination">
									<nuxt-link to="/dashboard/page/2">Next Page »</nuxt-link>
								</div>

							</div>
						</div>
					</div>
				</div>
			</div>

			<!-- offcanvas side bar -->

			<div class=" offcanvas offcanvas-start" id="sidebar-section">

				<div class="offcanvas-header">

					<button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
				</div>
				<div class="offcanvas-body">
					<div class="sidebar-section  py-2" style="background: #021969;">
						<div class="sidebar sidebar-lg" id="sidebar">

							<a href="~index.php"><img class="logo" src="~assets/images/logo.png" /></a>

							<ul class="sidebar-links px-0 list-unstyled mt-5 pt-5">

								<li class="sidebar-item mt-4">
									<NuxtLink to="/dashboard"><img src="~assets/images/home.svg" /><span class=" mx-3 text-white font-metropolis ">Dashboard</span></NuxtLink>
								</li>
								<li class="sidebar-item mt-4">
									<NuxtLink to="/calculator"><img src="~assets/images/edit-quote-cc.svg" /><span class="mx-3 text-white font-metropolis">New Quotation</span></NuxtLink>
								</li>
								<li class="sidebar-item mt-4">
									<NuxtLink to="/draft"><img src="~assets/images/draft-2.svg" />
										<span class="mx-3 text-white font-metropolis"> Draft</span></NuxtLink>
								</li>

								<li class="sidebar-item mt-4">
									<NuxtLink to="/history"><img src="~assets/images/history.svg" /><span class="mx-3 text-white font-metropolis">History</span></NuxtLink>
								</li>
								<li class="sidebar-item mt-4">
									<a @click="logout"><img src="~assets/images/log-out-outline.svg" /><span class="mx-3 text-white font-metropolis">Log Out</span></a>
								</li>
							</ul>
						</div>

					</div>

				</div>
			</div>

		</div>
	</div>
</template>
<script>
	import moment from 'moment'
	
	export default{
		middleware:'auth', //guest or auth
		// auth: 'auth',
		
		data() {
			return {
				'histories': [],
				'date': '',
				'total': '',
				'totaluser': '',
				'completed': '',
				'pending': '',
				'search': '',
				'searching': false,
				'searchResult': [],
			}
		},

		async mounted() {
			if (this.$auth.user) {
				this.$axios.$get('/sanctum/csrf-cookie');
				try {
					let histories = await this.$axios.$get(
						'history',
					);
					this.histories = histories.data;

					console.log(histories.data);
					//this.get_histories();
					this.total_user();
					this.total_qoute();
					this.completed_qoute();
					this.pending_qoute();

				} catch (error) {
					console.log(error);
				}
			} else {
				await this.$router.push({
					path: '/',
				});
			}
		},

		methods:{
			async logout(){
				this.$nuxt.$loading.start();
				await this.$auth.logout();
				this.$nuxt.$loading.finish();
				this.$router.push({
					path: '/',
				});
			},

			// get all history with pagniation
			async get_histories(){
				try {
					let histories = await this.$axios.$get(
						'history',
					);
					this.histories = histories.data;

				} catch (error) {
					console.error(error.response.data);
				}
			},

			// total quote
			async total_qoute(){
				try {
					await this.$axios.$get('total')
					.then((response) => {
						this.total = response.length;
					});

				} catch (error) {
					console.error(error.response.data);
				}
			},

			// total quote
			async total_user(){
				try {
					await this.$axios.$get('user')
					.then((response) => {
						console.log(response);
						this.totaluser = response;
					});

				} catch (error) {
					
					console.error(error.response.data);
				}
			},

			// total completed quote
			async completed_qoute(){
				try {
					await this.$axios.$get('completed')
					.then((response) => {
						this.completed = response.length;
					});

				} catch (error) {
					console.error(error.response.data);
				}
			},

			async completed_list(){
				try {
					await this.$axios.$get('completed')
					.then((response) => {
						this.histories = response;
						console.log(response);
					});

				} catch (error) {
					console.error(error.response.data);
				}
			},

			// total pending quote
			async pending_qoute(){
				try {
					await this.$axios.$get('pending')
					.then((response) => {
						this.pending = response.length;
					});

				} catch (error) {
					
					console.error(error.response.data);
				}
			},

			dateFormat(date){
				return moment(date).format("dddd, Do MMMM YYYY");
			},
			
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
					this.get_histories();
				}
			}
		}
	}
</script>

<style>
	.dashboard-user-data svg {
		transform: rotate(45deg);
		float: right;
		margin-right: 24px;
	}
	.discount span {
		position: absolute;
		right: 47px;
		top: 13px;
		font-size: 12px;
	}
	.dashboard-user-data svg {
		transform: rotate(45deg);
		float: right;
		margin-right: 24px;
		position: absolute;
		right: 0;
		top: -22px;
	}
	
	.discount span {
		position: absolute;
		right: 32px;
		top: -2px;
		font-size: 14px;
		line-height: 0.6;
		font-weight: bold;
	}
	
	.discount {
		position: relative;
	}
	
	.discount span i {
		font-size: 8px;
		font-weight: 300;
		font-style: normal;
	}
</style>