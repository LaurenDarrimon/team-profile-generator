let allInterns = ``;

const generateIntern = (role, fullName, id, email, school) => {

    let profileItemHTML = //fill the div with html elements from response data 
        `
        <div class="col-md-5 col-lg-4">
            <div class="profile-items">
                <h3> ${fullName}</h3>

                <h4> ${role}</h4>

                <p>attends ${school}</p>

                <p>
                    <a href="${email}" target="_blank">
                    ${email}
                    </a>
                </p>

                <p> Employee # ${id} </p>

            </div>
        </div>
        `;

        allInterns += profileItemHTML;

        console.log(allInterns)

}

module.exports = {
    generateIntern: generateIntern,
    allInterns: allInterns,
}