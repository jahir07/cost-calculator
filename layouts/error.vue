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
                       <h1 class="text-lg">{{ error.statusCode }}</h1>
                       <p>{{ error.message }}</p>
                        <NuxtLink class="btn btn-danger" to="/">Go Back</NuxtLink>
                    </div>
                </div>
            </div>
           
        </div>
    </div>
</template>

<script>
export default {
    props: {
        error: {
            type: Object,
            default: null
        }
    }
}
</script>

<style scoped>

</style>