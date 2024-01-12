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
