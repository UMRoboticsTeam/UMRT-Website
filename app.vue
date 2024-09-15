


<template>
  <div>
    <Header />
    
    <!-- Back to top btn -->
    <!-- <button type="button" class="btn btn-floating btn-lg">
      <i class="bi-arrow-up-short"></i>
    </button> -->


    <NuxtPage />

    <Footer />
  </div>
</template>

<style scoped>
button {
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: #8d8d8dFF;
}
</style>
<script setup>
  // import Header from '~/components/layout/Header.vue'
  // import Footer from '~/components/layout/Footer.vue'
  // import Header from '~/components/Header.vue'
  // import Footer from '~/components/Footer.vue'

  
  import 'bootstrap-icons/font/bootstrap-icons.css';  // import icons from bootstrap-icons
</script>