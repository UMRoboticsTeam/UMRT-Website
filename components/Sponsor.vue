<template>
  <!-- <div class="col d-flex align-self-center align-items-center">
    <img class="img-fluid mx-auto" src="/assets/images/sponsors/EngineeringEndowmentFundColour.png">
  </div> -->
  <div class="col d-flex align-self-center justify-content-center" style="margin: 20px 0px;">
    <a v-if="href" :href="href" target="." :title="tooltip">
      <img class="img-fluid" :src="imgSrc">
    </a>
    <a v-else :title="tooltip">
      <img class="img-fluid" :src="imgSrc">
    </a>
  </div>
</template>


<script setup>

// import img1 from "@/assets/images/sponsors/MacDon_RGB.svg"
// import img2 from "@/assets/images/sponsors/PTx_Trim_RGB.svg"

const props = defineProps({
  imgSrc: { type: String, required: true },
  href: { type: String, required: false },
  tooltip: { type: String, required: false },
})
</script>