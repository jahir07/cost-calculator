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
            <form class="cc-login-form" ref="forgetform" @submit.prevent="forget">
              <!-- @csrf -->
              <div class="form-group  px-4 py-4">
                <label>
                  Email</label>
                <input type="email" name="email" class="form-control" placeholder="Your email here" required />
              </div>
              <div class="d-flex justify-content-between mt-4 align-items-center">
                <NuxtLink to='/login' class="text-12">Login?</NuxtLink>
                <NuxtLink to='/register' class="text-12">Register?</NuxtLink>
                <div>
                  <input type="submit" value="FORGET" /><img src="~/assets/images/login.jpg" style="width: 20px" />
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
export default {
  auth: 'guest',
  mounted() {
    this.$axios.$get('/sanctum/csrf-cookie');
  },
  methods: {
    async forget() {
      this.$nuxt.$loading.start();
      try {
        const formData = new FormData(this.$refs.forgetform);
        await this.$auth.loginWith('laravelSanctum', { data: formData });
        console.log('user login');
        this.$router.push({
          path: '/dashboard',
        });
      } catch (err) {
        console.log(err);
      }
      this.$nuxt.$loading.finish();
    }
  }
}
</script>