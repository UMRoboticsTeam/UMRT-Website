<template>
  <!-- <div class="masthead" :style="background: linear-gradient(to bottom, rgba(5, 34, 91, 0.7) 0%, rgba(5, 34, 91, 0.85) 100%), URL(bgImgUrl)"> -->
    <div class="masthead" :style="heroStyle">
    <div class="container px-4 px-lg-5 h-80">
      <div class="row gx-4 gx-lg-5 h-100 align-items-center justify-content-center text-center">




        <!-- Logo and Title -->
        <!-- <div v-if="showLogo"> -->
          <div v-if="showLogo" class="col-lg-5 align-self-end">
          <!-- <div :showLogo="true" class="col-lg-5 align-self-end"> -->
            <img src="/assets/images/umrt-logo-transparent.png" class="img-fluid" style="max-height: 50vh;" alt="">
            <!-- <img src="/assets/images/umrt-logo-transparent.png" class="img-fluid" alt=""> -->
            <!-- <img :src="fgImgUrl" class="img-fluid" alt=""> -->
          </div>

          <div v-if="showLogo" class="col-lg-8 align-self-baseline">
            <!-- <h1 class="text-white font-weight-bold">University of Manitoba Robotics Team</h1> -->
            <!-- <h1>University of Manitoba Robotics Team</h1> -->
            <h1 class="text-white font-weight-bold">{{  title  }}</h1>
            <!-- <h1> Also {{ showLogo }} !!</h1> -->
          </div>

        <!-- Only Title -->
        <div v-if="showLogo == false">
          <h1 class="text-white font-weight-bold">{{  title  }}</h1>
        </div>


      </div>
    </div>
  </div>
</template>



<script setup>
const props = defineProps({
  title: { type: String, required: true },
  imgSrc: { type: String, required: true },
  showLogo: { type: Boolean, required: false, default: false },
})


const heroStyle = computed(() => ({
  // background: `linear-gradient(to bottom, rgba(5, 34, 91, 0.7) 0%, rgba(5, 34, 91, 0.85) 100%), url(${props.imgSrc})`,
  background: `linear-gradient(to bottom, rgba(99, 109, 128, 0.7) 0%, rgba(52, 58, 69, 0.9) 100%), url(${props.imgSrc})`,
  // background: `url(${props.src})`,
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundAttachment: 'scroll',
  // height: '80vh'


  // boxShadow: 'inset 0px -32px 16px -16px #F8F9FA'
}))

</script>

<style scoped>
  .masthead {
    /* background: linear-gradient(to bottom, rgba(5, 34, 91, 0.7) 0%, rgba(5, 34, 91, 0.85) 100%), URL(var(--bgImgUrl)); */
    /* background: linear-gradient(to bottom, rgba(5, 34, 91, 0.7) 0%, rgba(5, 34, 91, 0.85) 100%), URL("/assets/images/teamPhoto-2.jpg"); */
    /* background: linear-gradient(to bottom, rgba(5, 34, 91, 0.7) 0%, rgba(5, 34, 91, 0.85) 100%), URL(v-bind(bgImgUrl)); */
    /* background: linear-gradient(to bottom, rgba(5, 34, 91, 0.7) 0%, rgba(5, 34, 91, 0.85) 100%), v-bind(bgImgUrl); */
    /* background: url("@/assets/images/TeamPhoto-1.jpg"); */
    /* background-position: center;
    background-repeat: no-repeat;
    background-attachment: scroll;*/
    /* background-size: cover; */
    /* background: #ffff00; */

    height: 100vh;
    display: flex;
    justify-content: center;
  }
</style>