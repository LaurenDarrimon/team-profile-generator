
const generateEngineer = (role, fullName, id, email, gitHub) => {

    const gitLink = `https://${gitHub}.github.io/}`;

    let profileItemHTML = //fill the div with html elements from response data 
        `
        <div class="col-md-5 col-lg-4">
            <div class="profile-items engineer" style="background-image: url('https://github.com/${gitHub}.png');">
                <h3> ${fullName}</h3>

                <h4> ${role} </h4>
            
                <p>
                    <a href="${gitLink}" target="_blank">
                    GitHub Profile
                    </a>
                </p>

                <p>
                    <a href="mailto:${email}" target="_blank">
                    ${email}
                    </a>
                </p>

                <p> Employee # ${id} </p>

            </div>
        </div>
        `;

    return profileItemHTML;
}


module.exports =  generateEngineer;
