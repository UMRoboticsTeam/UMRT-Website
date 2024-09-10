<template>
  <div>
    <Hero title="Competitions" :imgSrc="HeroImg"/>
    <Section theme="dark">
      <p>
        The University of Manitoba Robotics Team currently competes in the Canadian International Rover Competition
        held in Drumheller, AB.
        
      </p>
    </Section>
  </div>
</template>


<script setup>
  import HeroImg from "@/assets/images/CIRC-2024.jpg"
  import Section from "~/components/Section.vue"
</script>