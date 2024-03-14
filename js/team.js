/*!

Custom Script to load team.json into website

team.json:
team - List of "member" objects
    member:
        "name": string
        "role": string,
        "description": string,
        "image": filename
        "socials": socials objects
            socials:
                [social_name]: [link_to_social]
    


 
*/

window.addEventListener('DOMContentLoaded', event => {
    
    // open team.json
    // for each member:
        // add member block which includes:
            // name, role, description, image
    fetch('/assets/team/team.json')
    .then((response) => response.json())
    .then((json) => {
        const exec_team_div = document.getElementById('exec-team-div');
        const leads_div = document.getElementById('leads-div')
        const subsystems_div = document.getElementById('subsystems-div')
        
        // populate exec
        for (const i in json.exec_team) {
            populateMemberBlock(exec_team_div, json.exec_team[i])
        }

        // populate leads
        for (const i in json.leads) {
            const subsystem_copy = document.getElementById('subsystem-template').content.cloneNode(true);
            const subsystem_html = subsystem_copy.querySelector('div');
            
            // Add member info
            subsystem_html.querySelector('.name').innerHTML = json.leads[i].name;
            subsystem_html.querySelector('.description').innerHTML = json.leads[i].description;
            
            //subsystem_html.querySelector('img').onerror = function(){subsystem_html.querySelector('img').src = '/assets/team/blank-profile.jpg';}
            subsystem_html.querySelector('img').onerror = function(){subsystem_html.querySelector('img').style.display = "none"}
            subsystem_html.querySelector('img').src = `/assets/team/${json.leads[i].image}`;
            
            //console.log(i)
            //console.log(json.subsystems[i].name)
            

            
            
            
            leads_div.appendChild(subsystem_html);

            for (const j in json.leads[i].leads) {
                populateMemberBlock(subsystem_html, json.leads[i].leads[j], true);
            }
        }

        // populate subsystems
        for (const i in json.subsystems) {
            const subsystem_copy = document.getElementById('subsystem-template').content.cloneNode(true);
            const subsystem_html = subsystem_copy.querySelector('div');
            
            // Add member info
            subsystem_html.querySelector('.name').innerHTML = json.subsystems[i].name;
            subsystem_html.querySelector('.description').innerHTML = json.subsystems[i].description;
            
            subsystem_html.querySelector('img').onerror = function(){subsystem_html.querySelector('img').src = '/assets/team/blank-profile.jpg';}
            subsystem_html.querySelector('img').src = `/assets/team/${json.subsystems[i].image}`;
            
            //console.log(i)
            //console.log(json.subsystems[i].name)


            
            
            
            subsystems_div.appendChild(subsystem_html);

            for (const j in json.subsystems[i].leads) {
                populateMemberBlock(subsystem_html, json.subsystems[i].leads[j], true);
            }
        }
    });
});


function populateMemberBlock(parent_div, member_json, stepBelow=false) {
    // Copy member template
    const member_copy = document.getElementById('member-template').content.cloneNode(true);
    const member_html = member_copy.querySelector('div');
    

    // Add member info
    member_html.querySelector('.name').innerHTML = member_json.name;
    member_html.querySelector('.role').innerHTML = member_json.role;
    member_html.querySelector('.description').innerHTML = member_json.description;
    
    member_html.querySelector('img').onerror = function(){member_html.querySelector('img').src = '/assets/team/blank-profile.jpg';}
    member_html.querySelector('img').src = `/assets/team/${member_json.image}`;
    

    if (member_json.role.includes("Webmaster")) {
        member_html.querySelector('.role').classList.add("flex")
        member_html.querySelector('.role').innerHTML = member_json.role.replace('Webmaster', '<w class="webmaster" style="">Webmaster</w>');
    }



    // Add socials
    const socials = member_json.socials;
    const socials_html = member_copy.querySelector('.social');

    for (const i in socials) {
        const a = document.createElement('a');
        a.href = socials[i];
        const icon = document.createElement('i');
        icon.classList.add('bi', `bi-${i}`);
        a.appendChild(icon);
        socials_html.appendChild(a);
    }

    
    if (stepBelow) {
        // member_html = member_html.querySelector('div');
        
        parent_div.appendChild(member_html.querySelector('.member'));
    }
    else {
        parent_div.appendChild(member_html);
    }
}


/*
const userNumberElements = document.querySelector('#attempts');
const userNumberElementTemplate = document.querySelector('template');
function addAttemptElement(value) {
    const elementClone = userNumberElementTemplate.content.cloneNode(true)   
    const attempt =  elementClone.querySelector('span');
    attempt.textContent = value > magicNumber ? `Less than ${value}` : `Bigger than ${value}`;
    userNumberElements.appendChild(attempt);
}

*/
