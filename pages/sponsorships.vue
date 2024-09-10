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
  import HeroImg from "@/assets/images/CIRC-2024.jpg"
  import Section from "~/components/Section.vue"
</script>