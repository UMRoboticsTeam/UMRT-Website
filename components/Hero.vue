<template>
  <!-- <div class="masthead" :style="background: linear-gradient(to bottom, rgba(5, 34, 91, 0.7) 0%, rgba(5, 34, 91, 0.85) 100%), URL(bgImgUrl)"> -->
  <div class="masthead" :style="heroStyle">
    <div class="container px-4 px-lg-5 h-80">
      <div class="row gx-4 gx-lg-5 h-100 align-items-center justify-content-center text-center" loading="lazy">

        <!-- MOVE WITH SCROLL -->

        <!-- Logo and Title -->
          <!-- <div v-if="showLogo" class="col-lg-5 align-self-end">
            <img src="/assets/images/umrt-logo-transparent.png" class="img-fluid" style="max-height: 50vh;" alt="">
          </div>
          <div v-if="showLogo" class="col-lg-8 align-self-baseline">
            <h1 class="text-white font-weight-bold">{{  title  }}</h1>
            <slot></slot>
          </div> -->

        <!-- Only Title -->
        <!-- <div v-if="showLogo == false">
          <h1 class="text-white font-weight-bold">{{  title  }}</h1>
          <slot></slot>
        </div> -->


      </div>
    </div>
  </div>


  

  <div class="mastheadHolder">

    <div class="container px-4 px-lg-5 h-80">
      <div class="row gx-4 gx-lg-5 h-100 align-items-center justify-content-center text-center">
        <!-- Logo and Title -->
          <div v-if="showLogo == 'true'" class="col-lg-5 align-self-end">
            <img src="/assets/images/umrt-logo-transparent.png" class="img-fluid" style="max-height: 50vh;" alt="">
          </div>
          <div v-if="showLogo == 'true'" class="col-lg-8 align-self-baseline">
            <h1 class="text-white font-weight-bold">{{  title  }}</h1>
            <slot></slot>
          </div>
        
        <!-- Only Title -->
        <div v-if="showLogo != 'true'">
          <h1 class="text-white font-weight-bold">{{  title  }}</h1>
          <slot></slot>
        </div>


      </div>
    </div>
  </div>


</template>



<script setup>
const props = defineProps({
  title: { type: String, required: true },
  imgSrc: { type: String, required: true },
  showLogo: { type: String, required: false, default: "false" },
  backgroundPosition: { type: String, default: "center" }
})


const heroStyle = computed(() => ({
  // background: `linear-gradient(to bottom, rgba(5, 34, 91, 0.7) 0%, rgba(5, 34, 91, 0.85) 100%), url(${props.imgSrc})`,
  // background: `linear-gradient(to bottom, rgba(99, 109, 128, 0.7) 0%, rgba(52, 58, 69, 0.9) 100%), url(${props.imgSrc})`,
  background: `linear-gradient(to bottom, 
    rgba(99, 109, 128, 0.7) 0%, 
    rgba(52, 58, 69, 0.9) 95%,
    rgba(52, 58, 69, 1) 100%
    ), url(${props.imgSrc})`,
  // background: `url(${props.src})`,
  // backgroundPosition: 'center',
  backgroundPosition: props.backgroundPosition,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundAttachment: 'scroll',
  // height: '80vh'


  // boxShadow: 'inset 0px -32px 16px -16px #F8F9FA'
  position: 'fixed',
  width: '100%',
}))


function parallax() {
    // var s = document.getElementById("masthead");
    var s= document.getElementsByClassName("masthead")[0];
  var yPos = 0 - window.pageYOffset/3;  
  s.style.top = 50 -50 + yPos + "px"; }

  onMounted(() => {
    parallax(); 
    window.addEventListener("scroll", function(){
    parallax(); 
});
  })


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


    /* position:fixed;
    top:0;
    z-index: 1; */
    /* opacity: 90%; */
    z-index: -1;
  }
  .mastheadHolder {
    height: 100vh;
    
    display: flex;
    justify-content: center;
    width: 100%;
  }
</style>