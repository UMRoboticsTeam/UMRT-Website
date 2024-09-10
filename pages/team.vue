<template>
  <div>
    <Hero title="The Team" :imgSrc="HeroImg"/>
    <Section theme="dark">
      <p>
        The University of Manitoba Robotics Team currently competes in the Canadian International Rover Competition
        held in Drumheller, AB.
        
      </p>
    </Section>
    <Section theme="light">
      <!-- <TeamMember img="" name="Connor Pagtakhan" role="Treasurer & Webmaster" desc="4th Year Computer Engineering Student" socials=""/> -->
    </Section>

    <Section theme="light" class="page-section team" id="team">
      <div class="container px-4 px-lg-5">
        <h2 class="text-center mt-0">Executive Team</h2>
        <hr class="divider" />
        <div id="exec-team-div" class="row d-flex justify-content-center">
          <TeamMember img="" name="Connor Pagtakhan" role="Treasurer & Webmaster" desc="4th Year Computer Engineering Student" socials=""/>
          <TeamMember img="" name="Connor Pagtakhan" role="Treasurer & Webmaster" desc="4th Year Computer Engineering Student" socials=""/>
          <TeamMember img="" name="Connor Pagtakhan" role="Treasurer & Webmaster" desc="4th Year Computer Engineering Student" socials=""/>
          <TeamMember img="" name="Connor Pagtakhan" role="Treasurer & Webmaster" desc="4th Year Computer Engineering Student" socials='{"instagram": "https://www.instagram.com/cpagtakhan/", "linkedin": "https://www.linkedin.com/in/connor-pagtakhan-5a617b206/"}'/>
        </div>
      </div>
    </Section>
  </div>
</template>


<script setup>
  import HeroImg from "@/assets/images/TeamPhoto-2.jpg"
  import Section from "~/components/Section.vue"
  import TeamMember from "~/components/TeamMember.vue"
</script>