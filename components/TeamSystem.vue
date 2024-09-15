<template>
  <div class="col-xl-4 col-md-6 mt-4 mt-lg-5">
    <div class="subsystem">
      <!-- <div class="py-3"> -->
      <div class="pic">
        <!-- <img src="/assets/img/subsystem-embedded.jpg" class="img-fluid"> -->
        <img :src="img" class="img-fluid">
      </div>
      <div class="mt-3">
        <h2 class="name">{{ name }}</h2>
        <p class="description">{{ desc }}</p>
      </div>
    </div>
    <slot></slot>
  </div>
</template>

<script setup>
const props = defineProps({
  img: { type: String, required: true },
  name: { type: String, required: true },
  desc: { type: String, required: true },
})
</script>