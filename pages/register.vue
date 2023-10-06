<template>
  <div>
    <div class="container-fluid d-flex align-items-center position-relative cc-half-bg" style="height: 100vh;">
      <div class="container">
        <div class="row">
          
        </div>
        <div class="row align-items-center">
          <div class="col-md-6">
            <div class="logo mb-5">
              <NuxtLink to="/">
                <img src="~/assets/images/logo.png" />
              </NuxtLink>
            </div>
            <p class="font-metropolis mb-0 text-white font-200"> Welcome to your</p>
            <h1 class="text-sm text-white mt-4"> cost calculator<br>
              <span class="text-xl text-white">Dashboard</span>
            </h1>
          </div>

          <div class="col-md-6">
            <form class="cc-login-form" ref="registerform" @submit.prevent="register">
              <!-- @csrf -->
              <div class="form-group  px-4 py-4">
                <label>
                  Email</label>
                <input type="email" name="email" class="form-control" placeholder="Your email here" />
              </div>
              <div class="form-group mt-4 px-4 py-4">
                <label>
                  Password</label>
                <input type="password" name="password" class="form-control" placeholder="Your password here" />
              </div>
              <div class="form-group mt-4 px-4 py-4">
                <label>
                  Confirm Password</label>
                <input type="password" name="password" class="form-control" placeholder="Write password again" />
              </div>
              <div class="d-flex justify-content-between mt-4 align-items-center">
                <!-- <NuxtLink to='/forget' class="forgot-psswd text-12"> Forgot Password?</NuxtLink> -->
                <NuxtLink to='/register' class="text-12">Register?</NuxtLink>
                <div>
                  <input type="submit" value="Register" /><img src="~/assets/images/login.jpg" style="width: 20px" />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div class="flex items-center justify-center">
      </div>
    </div>
  </div>
</template>

<style>
.logo img {
  max-width: 100%;
}
</style>
<script>
	export default{
		auth:'guest',
		mounted(){
			this.$axios.$get('/sanctum/csrf-cookie');
		},
		methods:{
			register(){
				try{
					const formData = new FormData(this.$refs.registerform);
          this.$axios.post('/register',formData).then(res=>{
  					this.$auth.loginWith('laravelSanctum',{data:formData});
  					console.log('user login');
  					this.$router.push({
  						path:'/',
  					});
          })
				}catch(err){
					console.log(err);
				}
			}
		}
	}
</script>