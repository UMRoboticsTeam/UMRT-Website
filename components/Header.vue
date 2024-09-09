<template>
  <header>
    <!-- yo
    <h1> HEADER SECTION </h1>
    ---[
    <nuxt-link to="/">/</nuxt-link>
    ]---[
    <nuxt-link to="/about">/about</nuxt-link>
    ]---[
    <nuxt-link to="/team">/team</nuxt-link>
    ]---[
    <nuxt-link to="/competitions">/competition</nuxt-link>
    ]---[
    <nuxt-link to="/sponsorships">/sponsorships</nuxt-link>
    ]--- -->


    <!-- <nav class="navbar navbar-expand-lg navbar-light fixed-top py-3 navbar-shrink" id="mainNav"> -->
    <nav class="navbar navbar-expand-lg navbar-dark fixed-top py-3 navbar-shrink" id="mainNav">
      <div class="container px-2 px-lg-2">
        <!-- <img :src="UMRTLogo" class="" style="height: 32px; padding: 0; margin: 0;"> -->
        <a class="navbar-brand" href="/#page-top">UofM Robotics Team</a>
        <button class="navbar-toggler navbar-toggler-right" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
        <div class="collapse navbar-collapse" id="navbarResponsive">
          <ul class="navbar-nav ms-auto my-2 my-lg-0">
            <li class="nav-item"><a class="nav-link" href="/#about">About</a></li>
            <!-- <li class="nav-item"><a class="nav-link" href="/#team">The Team</a></li> -->
            <li class="nav-item"><a class="nav-link" href="/team/">The Team</a></li>
            <li class="nav-item"><a class="nav-link" href="/competitions/">Competitions</a></li>
            <li class="nav-item"><a class="nav-link" href="/sponsorships/">Sponsorships</a></li>
            <li class="nav-item"><a class="nav-link" href="/#join">Join Us!</a></li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>
  
<script>
</script>

<script setup>
// export default {
// props: {
//     title: {
//     type: String,
//     default: 'Welcome to My Nuxt App'
//     }
// }
// }
// import UMRTLogo from "@/assets/images/umrt-logo-transparent.png"

onMounted(() => {
  document.addEventListener('scroll', () => {
      // var y;
      // y = window.scrollY;
      // document.documentElement.dataset.scroll = (y < 80 ? 0 : y);
      // document.documentElement.dataset.scroll = window.scrollY;
      // document.documentElement.dataset.scroll = (window.scrollY < 80 ? 0 : window.scrollY);

      document.documentElement.dataset.scroll = (window.scrollY < 20 ? 0 : 1);
  });
})
</script>

<style scoped>
/* header {
  background-color: RGB(255, 0, 0);
} */

/* nav {
  background-color: #242529;
  color: #ffffff;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
}
html:is([data-scroll='0']) nav {
  background-color: #24252900;
  box-shadow: none;
} */
nav {
  background-color: #24252900;
  box-shadow: none;
}
html:is([data-scroll='1']) nav {
  background-color: #242529;
  color: #ffffff;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
}


</style>
