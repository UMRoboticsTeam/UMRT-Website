<template>
  <div>
    <Hero title="Archive" :imgSrc="HeroImg"/>
    <!-- <Section theme="dark">
      <p>
        Thank you to our sponsors!   
      </p>
    </Section> -->
    <Section theme="dark">
      <h2 class="text-center mt-0">2023-2024</h2>
      <hr class="divider" />
      <p>The 2023-2024 team was the first team of UMRT, founded by Syed Abraham Ahmed and Minjeong Kang. 
        In their inaugural year, the team successfully built a fully functional rover to compete in the 
        2024 Canadian International Rover Challenge (CIRC). Their journey marked a significant milestone 
        in the development of the team, setting a strong foundation for future growth.</p>
      <div class="table-container">
        <table>
          <thead>
            <tr>
              <th>Role</th>
              <th>Member</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Co-Presidents</td><td>Syed Abraham Ahmed, Minjeong Kang</td></tr>
            <tr><td>Vice President</td><td>Nikolaus Reichert</td></tr>
            <tr><td>Secretary</td><td>Garizaldy Gerra</td></tr>
            <tr><td>Treasurer/Webmaster</td><td>Connor Pagtakhan</td></tr>
            <tr><td>Business Director</td><td>Erica von Stackelberg</td></tr>
            <tr><td>Promotions Director</td><td>Breanna Stratton</td></tr>

            <tr><td>System Lead</td><td>Syed Abraham Ahmed</td></tr>
            <tr><td>Embedded Lead</td><td>Nikolaus Reichert</td></tr>
            <tr><td>Communications Leads</td><td>Kevin Burston, Adam Garofalo, Minjeong Kang</td></tr>
            <tr><td>Electrical Lead</td><td>Erica von Stackelberg</td></tr>
            <tr><td>Chassis Lead</td><td>Matthew Nutbean</td></tr>
            <tr><td>Robotic Arm Leads</td><td>Graham Nash, Noah Reeder</td></tr>
            <tr><td>Payload Leads</td><td>Breanna Stratton, Skylar Trudeau</td></tr>
          </tbody>
        </table>
      </div>
    </Section>
  </div>
</template>

<style scoped>
.table-container {
  display: flex;
  justify-content: center;
}
table {
  /* background-color: red; */
  border: 1px solid;
}
thead th {
  text-align: center;
}
tr {
  text-align: left;
  border: 1px solid #808080;
}
td {
  padding: 1px 10px;
}
</style>
  
<script setup>
import HeroImg from "@/assets/images/TeamPhoto-2.jpg"
import Section from "~/components/Section.vue"

// definePageMeta({
//   title: 'Team Archive',
//   name: 'Team Archive',
// })
useHead({
  title: "Archive",
  meta: [
    { name: 'description', content: 'Info and file archives of UMRT' },
    { property: 'og:title', content: 'UMRT - Archive' },
    { property: 'og:description', content: 'Info and file archives of UMRT' },
    // { property: 'og:image', content: '' },
    // { property: 'og:url', content: '' },
  ]
})
</script>