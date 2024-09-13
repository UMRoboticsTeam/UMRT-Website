<template>
  <div>
    <Hero title="Sponsorships" :imgSrc="HeroImg"/>
    <Section theme="dark">
      <p>
        Thank you to our sponsors!
        
      </p>
    </Section>
    <Sponsors />
  </div>
</template>


<script setup>
  import HeroImg from "@/assets/images/JCA_ROS_Event.jpg"
  import Section from "~/components/Section.vue"
</script>