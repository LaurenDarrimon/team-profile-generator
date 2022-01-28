const generateManager = (role, fullName, id, email, office) => {

    let profileItemHTML = //fill the div with html elements from response data 
        `
        <div class="col-md-5 col-lg-4">
            <div class="profile-items manager"> 
                <h3> ${fullName}</h3>

                <h4> ${role}</h4>

                <p>Office number: ${office}</p>

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


module.exports = generateManager;
