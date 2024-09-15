<template>
  <!-- <div class="col-xl-4 col-md-6 "> -->
    <div class="member d-flex my-2">
      <div class="pic">
        <img :src="img" class="img-fluid" alt="member image">
      </div>
      <div class="member-info flex-grow" style="text-align: left;">
        <h4 class="name">{{ name }}</h4>
        <h6 class="role">{{ role }}</h6>
        <p style="display: block;" class="description">{{ desc }}</p>
        <!-- <div class="social" id="socialsDiv"> -->
        <div class="social" ref="socialsDiv" id="socialsDiv">
          <!-- <a href="https://www.linkedin.com/in/connor-pagtakhan-5a617b206/">
            <i class="bi bi-linkedin"></i>
          </a>
          <a href="https://www.instagram.com/cpagtakhan/">
            <i class="bi bi-instagram"></i>
          </a> -->
        </div>
      </div>
    </div>
  <!-- </div> -->
</template>
  

<!-- <div class="col-xl-4 col-md-6">
  <div class="member d-flex my-2">
      <div class="pic">
          <img src="/assets/team/C.Pagtakhan.jpg" class="img-fluid" alt="member image">
      </div>
      <div class="member-info flex-grow">
          <h4 class="name">Connor Pagtakhan</h4>
          <h6 class="role flex">Treasurer &amp; <w class="webmaster" style="">Webmaster</w></h6>
          <p style="display: block;" class="description">4th Year Computer Engineering Undergraduate Student</p>
          <div class="social">
          <a href="https://www.linkedin.com/in/connor-pagtakhan-5a617b206/"><i class="bi bi-linkedin"></i></a><a href="https://www.instagram.com/cpagtakhan/"><i class="bi bi-instagram"></i></a></div>
      </div>
  </div>
</div> -->
  
<script setup>
import { ref, onMounted, useTemplateRef } from 'vue';

  const props = defineProps({
    img: { type: String, required: true },
    name: { type: String, required: true },
    role: { type: String, required: true },
    desc: { type: String, required: true },
    socials: { type: String, required: false },
  })

// const elem = useTemplateRef('socials-div')

const socialsDiv = ref(null);

onMounted(() => {
  if (props.socials != "") {
    // console.log("YOO " + props.socials)
    var socialsObj = JSON.parse(props.socials);
    // console.log("KEY : " + Object.keys(socialsObj)[0]);
    // console.log("VAL : " + Object.values(socialsObj)[0]);

    for (const [key, val] of Object.entries(socialsObj)) {
      // console.log(`${key}: ${val}`);

      const a = document.createElement('a');
      a.href = val;
      const icon = document.createElement('i');
      icon.classList.add('bi', `bi-${key}`);
      a.appendChild(icon);

      // document.getElementById("socialsDiv").appendChild(a);

      
      // elem.appendChild(a);

      // const elem = this.$refs.socialsDiv

      
      // console.log(socialsDiv.value);
      socialsDiv.value.appendChild(a);
    }
  }
})
</script>