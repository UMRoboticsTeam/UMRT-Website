<template>
  <div>
    <Hero title="Outreach" :imgSrc="HeroImg"/>
    <Section theme="dark">
      <p>
        The University of Manitoba Robotics Team participates 
        in outreach events, catered towards middle school to highschool ages. <br>
        Events include team presentations, Arduino workshops, sumo bot development, and rover showcasing.
      </p>
      
    </Section>
    <Section theme="light" title="Contact Us">
      If you'd like to inquire about outreach events, reach us at <a href="mailto:exec.umrt@gmail.com">exec.umrt@gmail.com</a>.
    </Section>
  </div>
</template>


<script setup>
  import HeroImg from "@/assets/images/CIRC-2024.jpg"
  import Section from "~/components/Section.vue"

useHead({
  title: "Outreach",
  meta: [
    { name: 'description', content: 'Outreach information of UMRT' },
    { property: 'og:title', content: 'UMRT - Outreach' },
    { property: 'og:description', content: 'Outreach information of UMRT' },
    // { property: 'og:image', content: '' },
    // { property: 'og:url', content: '' },
  ]
})
</script>


<style scoped>

</style>