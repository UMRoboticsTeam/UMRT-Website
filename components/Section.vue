<template>
  <section class="page-section" :style="sectionStyle">
  <div class="container px-4 px-lg-5">
    <div class="row gx-4 gx-lg-5 justify-content-center">
      <div class="col-lg-10 text-center">
        <h2 class="mt-0">{{ title }}</h2>
        <!-- <hr class="divider divider-light" /> -->
        <hr v-if="title" class="divider divider-light" />
        <!-- <p class="text-dark-75 mb-4">
          UMRT - The University of Manitoba Robotics Team is an ambitious group of students interested in competing 
          in the Canadian International Rover Challenge 2024! Our disciplines range from Computer Vision, Mechanical 
          Engineering, Electrical Engineering, Embedded Systems, Wireless Communications, and Pedology. We have a lot of 
          plans for the future along with other types of events such as workshops, open competitions, and more! 
          <br><br>Feel free to contact us at exec.umrt@gmail.com for any questions or inquiries.
        </p> -->
        <slot class=""></slot>
        <!-- <h4>end of section lol</h4> -->
      </div>
    </div>
  </div>
</section>
  </template>
  
  
  
  <script setup>
  const props = defineProps({
    theme: { type: String, required: true },
    title: { type: String, required: false },
  })
  
  var bgColour;
  var txtColour;

  switch (props.theme) {
    case "light":
      bgColour = "#f8f9fa"
      txtColour = "#212529"
      break;
    case "dark":
      bgColour = "#212529"
      txtColour = "#ffffff"
      break;
    case "primary":
      bgColour = "#05225b"
      txtColour = "#ffffff"
      break;
  }
  
  const sectionStyle = computed(() => ({
    // background: `linear-gradient(to bottom, rgba(5, 34, 91, 0.7) 0%, rgba(5, 34, 91, 0.85) 100%), url(${props.imgSrc})`,
    // background: `linear-gradient(to bottom, rgba(5, 34, 91, 0.7) 0%, rgba(5, 34, 91, 0.85) 100%), url(${props.imgSrc})`,
    
    // background: `url(${props.src})`,
    background: bgColour,
    // background: '#000000',
    color: txtColour,
    // color: "#ffffff",
    // height: '80vh'



    // boxShadow: `0px 0px 16px 16px ${bgColour}`  // interesting fade thing between sections
  }))
  
  </script>
  
  <style scoped>
    
  </style>