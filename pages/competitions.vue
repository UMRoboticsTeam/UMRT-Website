<template>
  <div>
    <Hero title="Competitions" :imgSrc="HeroImg"/>
    <Section theme="light">
      <p>
        The University of Manitoba Robotics Team currently competes in the Canadian International Rover Challenge
        held in Drumheller, AB.
        
      </p>
      <a href="https://circ.cstag.ca/" class="circ-banner d-flex justify-content-center" title="Visit the CIRC Official Website">
        <img :src="CIRCLogo" style="">
      </a>

      <blockquote class="blockquote">
        <h2>About CIRC</h2>
        <p>
          The Canadian International Rover Challenge (CIRC) is a rover competition open to post-secondary student design teams from all around the world. Similar to other competitions, such as the University Rover Challenge, European Rover Challenge, UK Rover Challenge, and the Indian Rover Challenge, teams will simulate what it would be like as an early colony on an extraterrestrial planet. Teams will bring their prototype rover to help them accomplish challenging scenarios. The rovers will be faced with completing various tasks that future rovers will be expected to perform. These include traversing varying terrain, autonomous operations, operating a dexterous arm and much more!
          ..... <a href="https://circ.cstag.ca/about/">Read More</a>
        </p>
      </blockquote>
    </Section>
    <Section theme="light" title="Competition History">
      <!-- <ol>
        <li>>August 2024 - <a href="https://circ.cstag.ca/2024/results/">CIRC 2024</a> - 11th Place</li>
      </ol> -->
      <table class="table table-sm text-start">
        <thead>
          <tr>
            <th scope="col">Date</th>
            <th scope="col">Competition</th>
            <th scope="col">Place</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">August 9-12, 2024</th>
            <!-- <td>Canadian International Rover Competition</td> -->
            <td><a href="https://circ.cstag.ca/2024/results/">Canadian International Rover Competition 2024</a></td>
            <td>11th</td>
          </tr>
          <tr>
            <th scope="row">August 8-11, 2025</th>
            <!-- <td>Canadian International Rover Competition</td> -->
            <td><a href="https://circ.cstag.ca/2025/">Canadian International Rover Competition 2025</a></td>
            <td>...</td>
          </tr>
        </tbody>
      </table>
    </Section>
  </div>
</template>


<script setup>
  import HeroImg from "@/assets/images/CIRC-2024.jpg"
  import Section from "~/components/Section.vue"
  import CIRCLogo from "@/assets/images/CIRC_banner.png"
</script>


<style scoped>
.circ-banner {
  background: #FFFFFF; 
  width: fit-content; 
  margin: auto; 
  border-radius: 6px;
  padding: 16px;

  box-shadow: 0px 5px 16px 0px #000000A0;
}

.blockquote {
  margin: 16px;
  padding: 16px;
  border-radius: 6px;
  background-color: #ffffff;
  color: #28292A;

  box-shadow: 0px 5px 16px 0px #000000A0;
}
.blockquote p {
  /* text-align: start; */
  font-style: italic;
  color: #707070;
}
</style>