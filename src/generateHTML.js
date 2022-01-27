const generateHTML = (allManagers, allEngineers, allInterns) => {

    //console.log("calling all the managers");       
    //console.log(generateManager.allManagers);

const textHTML = `
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Your Web Dev Team</title>


    <link rel="stylesheet" href="https://code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">
  
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css">
    
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link 
        href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Manrope:wght@200&display=swap" 
        rel="stylesheet"
    />

    <link rel="stylesheet" href="./style.css" />
</head>
<body>

    <header>
        <nav class="navbar navbar-white bg-white p-4">
            <a class="navbar-brand" href="#"><h2>Web Dev Team Profile Generator</h2></a>
          </nav>
    </header>

    <main class="container-fluid">
        <section class="row align-items-center" id="sec1">
            <div class="col-md-6">
                <h1 class="display-1">OUR DEVELOPMENT TEAM</h1>
            </div>
        </section>

        <section class="row" id="profiles">
            <div class="col-12">
                <h2 class="display-4">PROFILES</h2>
            </div>
            <div class="col-12">
                <div id="profile-list-section" class="row"> 
                ${allManagers}
                ${allEngineers}
                ${allInterns}
                </div>
            </div> 
        </section>


        <div class="row justify-content-around" id="footer">
            <div>
                <p>
                    <a href="https://github.com/LaurenDarrimon">Lauren Duker Darrimon - Full Stack Developer & Designer </a>
                </p>
            </div>
            <div>
                <p>
                   Generated with Javascript and <a href="https://github.com/LaurenDarrimon/team-profile-generator">this command line program.</a>
                </p>
            </div>
        </div>
    </main>


    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.1/umd/popper.min.js"></script>

    <script src="https://code.jquery.com/ui/1.12.0/jquery-ui.min.js"></script>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/js/bootstrap.min.js"></script>

    <script></script>
</body>
</html>`

return textHTML
};

module.exports = generateHTML; 
