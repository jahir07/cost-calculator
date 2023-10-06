<template>
	<div>
		<!-- <NuxtLink to='/' class="p-2 rounded">Home</NuxtLink>

		<NuxtLink to='/login' class="p-2 rounded" v-if="!$auth.loggedIn">Login</NuxtLink>

		<NuxtLink to='/register' class="p-2 rounded" v-if="!$auth.loggedIn">Register</NuxtLink>

		<NuxtLink to='/dashboard' class="p-2 rounded" v-if="$auth.loggedIn">Dashboard</NuxtLink>

		<NuxtLink to='/calculator' class="p-2 rounded" v-if="$auth.loggedIn">Calculator</NuxtLink>
		<NuxtLink to='/history' class="p-2 rounded">History</NuxtLink>
		<NuxtLink to='/draft' class="p-2 rounded">Draft</NuxtLink>
		<button type="button" class="bg-red-700 text-white rounded px-3 py-1" v-if="$auth.loggedIn" @click="logout">Logout</button> -->
		
		<Nuxt />
	</div>
</template>
<script>
	export default{
		auth:false,
	
		mounted () {
			this.$axios.$get('/sanctum/csrf-cookie');
		},

		methods:{
			async logout(){
				this.$nuxt.$loading.start();
				this.$auth.logout();
				this.$nuxt.$loading.finish();
				this.$router.push('/login');
			}
		}
	}
</script>