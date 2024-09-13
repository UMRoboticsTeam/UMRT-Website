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
        <!-- <div id="exec-team-div" class="row d-flex justify-content-center">
          <TeamMember :img='members["A.Ahmed"]' name="Syed Abraham Ahmed" role="Co-President" desc="4th Year Computer Engineering Undergraduate Student" socials=""/>
          <TeamMember img="" name="Connor Pagtakhan" role="Treasurer & Webmaster" desc="4th Year Computer Engineering Student" socials=""/>
          <TeamMember :img='members["A.Ahmed"]' name="Connor Pagtakhan" role="Treasurer & Webmaster" desc="4th Year Computer Engineering Student" socials=""/>
          <TeamMember :img='members["C.Pagtakhan"]' name="Connor Pagtakhan" role="Treasurer & Webmaster" desc="4th Year Computer Engineering Student" socials='{"instagram": "https://www.instagram.com/cpagtakhan/", "linkedin": "https://www.linkedin.com/in/connor-pagtakhan-5a617b206/"}'/>
        </div> -->

        <div id="exec-team-div" class="row d-flex justify-content-center">
          <TeamMember v-for="exec in memberss['exec_team']" 
            :img="members[exec['image']]" 
            :name="exec['name']" 
            :role="exec['role']" 
            :desc="exec['description']" 
            :socials="JSON.stringify(exec['socials'])"
            />
        </div>
      </div>
    </Section>

    <Section theme="dark" title="About Subsystems">
      <p>The University of Manitoba Robotics Team's Subsystems section functions as the diverse nerve center 
        of our robotic initiatives. It's a collection of specialized units, each with its own unique role, 
        working together to support our robot's functionality. Their collective efforts form the foundation 
        upon which our team builds innovative robots, driving our endeavors in robotics competitions and beyond.
      </p>
    </Section>

    <Section theme="light" class="page-section team">
      <div class="container px-4 px-lg-5">
        <h2 class="text-center mt-0">Subsystem Leads</h2>
        <hr class="divider" />
        <!-- <div id="exec-team-div" class="row d-flex justify-content-center">
          <TeamMember :img='members["A.Ahmed"]' name="Syed Abraham Ahmed" role="Co-President" desc="4th Year Computer Engineering Undergraduate Student" socials=""/>
          <TeamMember img="" name="Connor Pagtakhan" role="Treasurer & Webmaster" desc="4th Year Computer Engineering Student" socials=""/>
          <TeamMember :img='members["A.Ahmed"]' name="Connor Pagtakhan" role="Treasurer & Webmaster" desc="4th Year Computer Engineering Student" socials=""/>
          <TeamMember :img='members["C.Pagtakhan"]' name="Connor Pagtakhan" role="Treasurer & Webmaster" desc="4th Year Computer Engineering Student" socials='{"instagram": "https://www.instagram.com/cpagtakhan/", "linkedin": "https://www.linkedin.com/in/connor-pagtakhan-5a617b206/"}'/>
        </div> -->

        <div id="exec-team-div" class="row d-flex justify-content-center">
          <TeamMember v-for="exec in memberss['exec_team']" 
            :img="members[exec['image']]" 
            :name="exec['name']" 
            :role="exec['role']" 
            :desc="exec['description']" 
            :socials="JSON.stringify(exec['socials'])"
            />
        </div>
      </div>
    </Section>
  </div>
</template>


<script setup>
  import { filename } from 'pathe/utils'

  import HeroImg from "@/assets/images/TeamPhoto-2.jpg"
  import Section from "~/components/Section.vue"
  import TeamMember from "~/components/TeamMember.vue"


  const globa = import.meta.glob('@/assets/images/members/*.jpg', { eager: true })

  
  function getFilename(path) {
    // gets filename
    // "/assets/images/members/C.Pagtakhan.jpg" -> "C.Pagtakhan.jpg"
    return path.substring(path.lastIndexOf('/') + 1)
  }


  const members = Object.fromEntries(
    // Object.entries(glob).map(([key, value]) => [filename(key), value.default])
    Object.entries(globa).map(([key, value]) => [getFilename(key), value.default])
  )

  // console.log("STARTING ONE")
  // console.log(members)
  // console.log("STARTING TWO")
  // console.log(Object(globa))


  // const glob = import.meta.glob('@/assets/images/showcase/*.jpg', { eager: true })
  // const images = Object.fromEntries(
  //   Object.entries(glob).map(([key, value]) => [key, value.default])
  // )

const memberss = {
"exec_team": [
  {
      "name": "Syed Abraham Ahmed",
      "role": "Co - President",
      "description": "4th Year Computer Engineering Undergraduate Student",
      "image": "A.Ahmed.jpg",
      "socials": {
          "linkedin": "https://www.linkedin.com/in/syed-abraham-ahmed/",
          "instagram": "https://www.instagram.com/abragraphs"
      }
  },
  {
      "name": "Minjeong Kang",
      "role": "Co - President",
      "description": "3rd Year Computer Engineering Undergraduate Student",
      "image": "M.Kang.jpg",
      "socials": {
          "linkedin": "https://www.linkedin.com/in/minjeong-kang-96ab431b2/",
          "instagram": "https://www.instagram.com/unikwinpink"
      }
  },
  {
      "name": "Nikolaus Reichert",
      "role": "Vice President",
      "description": "5th Year Computer Engineering Undergraduate Student",
      "image": "N.Reichert.jpg",
      "socials": {
          "linkedin": "https://www.linkedin.com/in/njreichert/"
      }
  },
  {
      "name": "Garizaldy Gerra",
      "role": "Secretary",
      "description": "5th Year Computer Engineering Undergraduate Student",
      "image": "G.Gerra.jpg",
      "socials": {
          "linkedin": "https://www.linkedin.com/in/garizaldygerra/"
      }
  },
  {
      "name": "Connor Pagtakhan",
      "role": "Treasurer & Webmaster",
      "description": "4th Year Computer Engineering Undergraduate Student",
      "image": "C.Pagtakhan.jpg",
      "socials": {
          "linkedin": "https://www.linkedin.com/in/connor-pagtakhan-5a617b206/",
          "instagram": "https://www.instagram.com/cpagtakhan/"
      }
  },
  {
      "name": "Erica von Stackelberg",
      "role": "Business Director",
      "description": "5th Year Electrical Engineering Undergraduate Student",
      "image": "E.Stackelberg.jpg",
      "socials": {
          "linkedin": "https://www.linkedin.com/in/ericavonstackelberg/"
      }
  },
  {
      "name": "Breanna Stratton",
      "role": "Promotions Director",
      "description": "5th Year Computer Engineering Undergraduate Student",
      "image": "B.Stratton.jpg",
      "socials": {
          "linkedin": "https://www.linkedin.com/in/breanna-stratton-278b8a1a1/"
      }
  }
],
"leads":[
  {
      "name": "System Lead",
      "description": "",
      "image": "subsystem-lead.jpg",
      "leads": [
          {
              "name": "Syed Abraham Ahmed",
              "role": "System Lead",
              "description": "4th Year Computer Engineering Undergraduate Student",
              "image": "A.Ahmed.jpg",
              "socials": {
                  "linkedin": "https://www.linkedin.com/in/syed-abraham-ahmed/",
                  "instagram": "https://www.instagram.com/abragraphs"
              }
          }
      ]
  }
],
"subsystems":[
  {
      "name": "Embedded",
      "description": "Interfacing hardware with software, designing circuit boards, and working on control systems.",
      "image": "subsystem-embedded.jpg",
      "leads": [
          {
              "name": "Nikolaus Reichert",
              "role": "Embedded System Lead",
              "description": "5th Year Computer Engineering Undergraduate Student",
              "image": "N.Reichert.jpg",
              "socials": {
                  "linkedin": "https://www.linkedin.com/in/njreichert/"
              }
          }
      ]
  },
  {
      "name": "Communications",
      "description": "The link between the robot and its pilot. Responsible for designing systems that keep team members informed of the robot's state and health.",
      "image": "subsystem-communications.jpg",
      "leads": [
          {
              "name": "Minjeong Kang",
              "role": "Communications System Co-Lead",
              "description": "3rd Year Computer Engineering Undergraduate Student",
              "image": "M.Kang.jpg",
              "socials": {
                  "linkedin": "https://www.linkedin.com/in/minjeong-kang-96ab431b2/",
                  "instagram": "https://www.instagram.com/unikwinpink"
              }
          },
          {
              "name": "Adam Garofalo",
              "role": "Communications System Co-Lead",
              "description": "",
              "image": "blank-head.jpg",
              "socials": {
                  "linkedin": "https://www.linkedin.com/in/adam-garofalo-846105204/"
              }
          }
      ]
  },
  {
      "name": "Electrical",
      "description": "Design of the system that connects the other subsystems with power, communications, and control.",
      "image": "subsystem-electrical.jpg",
      "leads": [
          {
              "name": "Erica von Stackelberg",
              "role": "Electrical System Lead",
              "description": "5th Year Electrical Engineering Undergraduate Student",
              "image": "E.Stackelberg.jpg",
              "socials": {
                  "linkedin": "https://www.linkedin.com/in/ericavonstackelberg/"
              }
          }
      ]
  },
  {
      "name": "Chassis",
      "description": "Designs and manufactures the structure the robot is based upon. It has the role of keeping other subsystems safe from damage, moving payloads from point A to point B, and acting as a platform for prototyping and development.",
      "image": "subsystem-chassis.jpg",
      "leads": [
          {
              "name": "Matthew Nutbean",
              "role": "Chassis System Lead",
              "description": "",
              "image": "M.Nutbean.jpg",
              "socials": {}
          }
      ]
  },
  {
      "name": "Robotic Arm",
      "description": "Designs the primary payload of the robot. This payload is used as a platform for secondary payloads, and allows the robot to grab, move, and manipulate the world around it.",
      "image": "subsystem-robotic-arm.jpg",
      "leads": [
          {
              "name": "Graham Nash",
              "role": "Robotic Arm System Lead",
              "description": "",
              "image": "G.Nash.jpg",
              "socials": {
                  "linkedin": "https://www.linkedin.com/in/grahamhnash/"
              }
          },
          {
              "name": "Noah Reeder",
              "role": "Robotic Arm Software Lead",
              "description": "",
              "image": "blank-head.jpg",
              "socials": {
                  "linkedin": "https://www.linkedin.com/in/noah-reeder-b09686189/"
              }
          }
      ]
  },
  {
      "name": "Payload",
      "description": "Designs, experiments with, and automates systems on the robot. It interfaces with the systems peripherals including cameras and sensors.",
      "image": "subsystem-payload.jpg",
      "leads": [
          {
              "name": "Breanna Stratton",
              "role": "Payload System Co-Lead",
              "description": "5th Year Computer Engineering Undergraduate Student",
              "image": "B.Stratton.jpg",
              "socials": {
                  "linkedin": "https://www.linkedin.com/in/breanna-stratton-278b8a1a1/"
              }
          },
          {
              "name": "Skylar Trudeau",
              "role": "Payload System Co-Lead",
              "description": "Computer Engineering Undergraduate Student",
              "image": "blank-head.jpg",
              "socials": {
                  "linkedin": "https://www.linkedin.com/in/skylar-trudeau/"
              }
          }
      ]
  }
]
};

</script>