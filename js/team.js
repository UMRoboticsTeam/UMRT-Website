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
    fetch('./assets/team/team.json')
    .then((response) => response.json())
    .then((team_json) => {
        const team_div = document.getElementById('team-div');

        

        for (const i in team_json.team) {
            const member_block = document.querySelector('template').content.cloneNode(true);
            const member_html = member_block.querySelector('div');
            
            // Add member info
            member_html.querySelector('.name').innerHTML = team_json.team[i].name;
            member_html.querySelector('.role').innerHTML = team_json.team[i].role;
            member_html.querySelector('.description').innerHTML = team_json.team[i].description;
            
            member_html.querySelector('img').onerror = function(){member_html.querySelector('img').src = 'assets/team/blank-profile.jpg';}
            member_html.querySelector('img').src = `assets/team/${team_json.team[i].image}`;
            
            
            // Add socials
            const socials = team_json.team[i].socials;
            const socials_html = member_block.querySelector('.social');

            // FOR EACH SOCIAL IN .socials
            for (const j in socials) {
                const a = document.createElement("a");
                a.href = socials[j];
                // add href
                const icon = document.createElement("i");
                icon.classList.add('bi', `bi-${j}`)
                a.appendChild(icon);
                // add img source
                // add img inside a
                // add a to socials
                socials_html.appendChild(a);
                // <a href=""><i class="bi-facebook"></i></a>
                // <a href=""><i class="bi-facebook"></i></a>
            }
                
            team_div.appendChild(member_html);
        }
    });
});



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
