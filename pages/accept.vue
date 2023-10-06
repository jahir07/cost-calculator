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
            <h2>Are You sure ?</h2>  
              <!-- or <br />
              My Suggestion -
            <input type="number"> -->
            <button>Accept</button>
            <button>Decline</button>
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
  created() {
    this.$axios.$get('/sanctum/csrf-cookie');
    
    const loggein = this.$auth.loggedIn
    if (loggein) {
       this.$router.push('/accept');
        console.log("logged user");
    } else {
      this.$router.push('/login');
    }
  },
  methods: {
    async login() {
      this.$nuxt.$loading.start();
      try {
        const formData = new FormData(this.$refs.loginform);
        await this.$auth.loginWith('laravelSanctum', { data: formData });
        console.log('user login');
        this.$router.push({
          path: '/accept',
        });
      } catch (err) {
        console.log(err);
      }
      this.$nuxt.$loading.finish();
    }
  }
}
</script>