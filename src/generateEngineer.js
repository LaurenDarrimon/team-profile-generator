let allEngineers = ``;


const generateEngineer = (role, fullName, id, email, gitHub) => {

    const gitLink = `https://${gitHub}.github.io/}`;

    let profileItemHTML = //fill the div with html elements from response data 
        `
        <div class="col-md-5 col-lg-4">
            <div class="profile-items">
                <h3> ${fullName}</h3>

                <h4> ${role} </h4>
            
                <p>
                    <a href="${gitLink}" target="_blank">
                    GitHub Profile
                    </a>
                </p>

                <p>
                    <a href="${email}" target="_blank">
                    ${email}
                    </a>
                </p>

                <p> Employee # ${id} </p>

                <div class="click-frame">    
                    <img src="https://github.com/${gitHub}.png" />   
                </div>
            </div>
        </div>
        `;

        allEngineers += profileItemHTML;


        console.log("we generated an engineer HTML")
        console.log(allEngineers)
}

module.exports = {
    generateEngineer: generateEngineer,
    allEngineers: allEngineers,
}