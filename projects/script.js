const projectsData = [
    {
      "name": "CryptoVerse",
      "desc": "A Crypto Verse app presents Cryptocurrencies Stats which can be utilize to see trends of Crypto using Redux Toolkit, API Hub.",
      "image": "Crypto",
      "links": {
        "view": "https://projectcryptoverseapp.netlify.app/",
        "code": "https://github.com/Yashlaxwani/Crypto"
      }
    },
    {
      "name": "Laxwani Restaurant",
      "desc": "MERN Restaurant website.",
      "image": "Restaurant",
      "links": {
        "view": "https://restaurant-frontend-steel.vercel.app/",
        "code": "https://github.com/Yashlaxwani/Restaurant_backend"
      }
    },
    {
      "name": "Smart Object Analysis",
      "desc": "Can be use in many Industries and factories for object counting, detection, measurement and to find any defects in object.",
      "image": "resumegen",
      "links": {
        "view": "https://github.com/Yashlaxwani/Smart-Object-Analysis",
        "code": "https://github.com/Yashlaxwani/Smart-Object-Analysis"
      }
    },
    {
      "name": "Drug Recommendation System",
      "desc": "Drug Recommendation System aimed at providing personalized medication based on Preprocessed and cleaned patient data.",
      "image": "reactprojects",
      "links": {
        "view": "https://github.com/Yashlaxwani/DrugRecommendationSystem",
        "code": "https://github.com/Yashlaxwani/DrugRecommendationSystem"
      }
    },
  
    {
      "name": "Volume Control System",
      "desc": "Enabled Users to control audio volume through hand gestures, enhancing user interaction and accessibility using Python.",
      "image": "jspro",
      "links": {
        "view": "https://github.com/Yashlaxwani/Volume-Control",
        "code": "https://github.com/Yashlaxwani/Volume-Control"
      }
    },
    {
      "name": "Airbnb-Clone",
      "desc": "Airbnb-Clone web UI clone.",
      "image": "webuiclones",
      "links": {
        "view": "https://yashlaxwani.github.io/Airbnb-Clone/",
        "code": "https://github.com/Yashlaxwani/Airbnb-Clone"
      }
    },
    {
      "name": "Online Cafeteria Service",
      "desc": "Simple landing page website built using HTML, CSS, JavaScript and some JavaScript Libraries.",
      "image": "composey",
      "links": {
        "view": "https://yashlaxwani.github.io/PDEU_Cafeteria/",
        "code": "https://github.com/Yashlaxwani/PDEU_Cafeteria"
      }
    },
    {
      "name": "Portfolio Website",
      "desc": "Personal Portfolio Website. Don't Need Much Info About It, Just Scroll Down. You're Here Only!",
      "image": "portfolio1",
      "category": "basicweb",
      "links": {
        "view": "https://portfolio-yash-laxwanis-projects.vercel.app/",
        "code": "https://github.com/Yashlaxwani/Portfolio"
      }
    }
  ];
  

$(document).ready(function () {

    $('#menu').click(function () {
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });

    $(window).on('scroll load', function () {
        $('#menu').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');

        if (window.scrollY > 60) {
            document.querySelector('#scroll-top').classList.add('active');
        } else {
            document.querySelector('#scroll-top').classList.remove('active');
        }
    });
});

document.addEventListener('visibilitychange',
    function () {
        if (document.visibilityState === "visible") {
            document.title = "Projects | Portfolio Yash Laxwani";
            $("#favicon").attr("href", "/assets/images/favicon.png");
        }
        else {
            document.title = "Come Back To Portfolio";
            $("#favicon").attr("href", "/assets/images/favhand.png");
        }
    });


// fetch projects start
function getProjects() {
    return fetch("projects.json")
        .then(response => response.json())
        .then(data => {
            return data
        });
}


function showProjects(projects) {
    let projectsContainer = document.querySelector(".work .box-container");
    let projectsHTML = "";
    projects.forEach(project => {
        projectsHTML += `
        <div class="grid-item ${project.category}">
        <div class="box tilt" style="width: 380px; margin: 1rem">
      <img draggable="false" src="/assets/images/projects/${project.image}.png" alt="project" />
      <div class="content">
        <div class="tag">
        <h3>${project.name}</h3>
        </div>
        <div class="desc">
          <p>${project.desc}</p>
          <div class="btns">
            <a href="${project.links.view}" class="btn" target="_blank"><i class="fas fa-eye"></i> View</a>
            <a href="${project.links.code}" class="btn" target="_blank">Code <i class="fas fa-code"></i></a>
          </div>
        </div>
      </div>
    </div>
    </div>`
    });
    projectsContainer.innerHTML = projectsHTML;

    // vanilla tilt.js
    // VanillaTilt.init(document.querySelectorAll(".tilt"), {
    //     max: 20,
    // });
    // // vanilla tilt.js  

    // /* ===== SCROLL REVEAL ANIMATION ===== */
    // const srtop = ScrollReveal({
    //     origin: 'bottom',
    //     distance: '80px',
    //     duration: 1000,
    //     reset: true
    // });

    // /* SCROLL PROJECTS */
    // srtop.reveal('.work .box', { interval: 200 });

    // isotope filter products
    var $grid = $('.box-container').isotope({
        itemSelector: '.grid-item',
        layoutMode: 'fitRows',
        masonry: {
            columnWidth: 200
        }
    });

    // filter items on button click
    $('.button-group').on('click', 'button', function () {
        $('.button-group').find('.is-checked').removeClass('is-checked');
        $(this).addClass('is-checked');
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({ filter: filterValue });
    });
}

showProjects(projectsData);

// getProjects().then(data => {
//     showProjects(data);
// })
// fetch projects end

// Start of Tawk.to Live Chat
var Tawk_API = Tawk_API || {}, Tawk_LoadStart = new Date();
(function () {
    var s1 = document.createElement("script"), s0 = document.getElementsByTagName("script")[0];
    s1.async = true;
    s1.src = 'https://embed.tawk.to/60df10bf7f4b000ac03ab6a8/1f9jlirg6';
    s1.charset = 'UTF-8';
    s1.setAttribute('crossorigin', '*');
    s0.parentNode.insertBefore(s1, s0);
})();
// End of Tawk.to Live Chat

// disable developer mode
document.onkeydown = function (e) {
    if (e.keyCode == 123) {
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
        return false;
    }
    if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
        return false;
    }
}