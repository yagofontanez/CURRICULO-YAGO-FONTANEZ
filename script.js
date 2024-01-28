document.addEventListener("DOMContentLoaded", function() {
    const skillBars = document.querySelectorAll('.skill-bar');

    skillBars.forEach(skillBar => {
        const progressBar = skillBar.querySelector('.bar');
        const percentText = skillBar.querySelector('.percent');

        const targetPercent = parseInt(skillBar.dataset.percent);

        progressBar.style.width = targetPercent + '%';
        percentText.textContent = targetPercent + '%';
    });
});


document.querySelector("#icon-skill-html").addEventListener("mouseover", function() {
    document.querySelector("#html").style.display = 'flex';
});
document.querySelector("#icon-skill-html").addEventListener("mouseout", function() {
    document.querySelector("#html").style.display = 'none';
});

document.querySelector("#icon-skill-css").addEventListener("mouseover", function() {
    document.querySelector("#css").style.display = 'flex';
});
document.querySelector("#icon-skill-css").addEventListener("mouseout", function() {
    document.querySelector("#css").style.display = 'none';
});

document.querySelector("#icon-skill-javascript").addEventListener("mouseover", function() {
    document.querySelector("#javascript").style.display = 'flex';
});
document.querySelector("#icon-skill-javascript").addEventListener("mouseout", function() {
    document.querySelector("#javascript").style.display = 'none';
});

document.querySelector("#icon-skill-nodejs").addEventListener("mouseover", function() {
    document.querySelector("#nodejs").style.display = 'flex';
});
document.querySelector("#icon-skill-nodejs").addEventListener("mouseout", function() {
    document.querySelector("#nodejs").style.display = 'none';
});

document.querySelector("#icon-skill-mongodb").addEventListener("mouseover", function() {
    document.querySelector("#mongodb").style.display = 'flex';
});
document.querySelector("#icon-skill-mongodb").addEventListener("mouseout", function() {
    document.querySelector("#mongodb").style.display = 'none';
});

document.querySelector("#icon-skill-git").addEventListener("mouseover", function() {
    document.querySelector("#git").style.display = 'flex';
});
document.querySelector("#icon-skill-git").addEventListener("mouseout", function() {
    document.querySelector("#git").style.display = 'none';
});




document.querySelector("#icon-menu").addEventListener("click", function() {
    var iconMenu = document.querySelector("#icon-menu");
    var navbarUl = document.querySelector("#navbar-ul");

    if (navbarUl.style.display === 'flex') {
        navbarUl.style.display = 'none';
        iconMenu.style.color = '#fff';

    }
    else {
        navbarUl.style.display = 'flex';
        iconMenu.style.color = '#00f0ff';
    }
});