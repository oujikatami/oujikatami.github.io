document.addEventListener("DOMContentLoaded", function() {
    const matrixBg = document.getElementById('matrix-bg');
    const logoContainer = document.getElementById('logo-container');
    const loaderWrapper = document.getElementById('loader-wrapper');

    // 1. GENERATE RANDOM NUMBERS (3 SECONDS)
    const interval = setInterval(() => {
        let numbers = "";
        for(let i=0; i<800; i++) {
            numbers += Math.floor(Math.random() * 10);
        }
        matrixBg.innerText = numbers;
    }, 60);

    // 2. REVEAL LOGO THEN MAIN CONTENT
    setTimeout(() => {
        clearInterval(interval);
        matrixBg.classList.add('hidden');
        logoContainer.classList.remove('hidden');
        
        // Final fade out
        setTimeout(() => {
            loaderWrapper.style.transition = 'opacity 0.8s ease';
            loaderWrapper.style.opacity = '0';
            setTimeout(() => {
                loaderWrapper.style.display = 'none';
            }, 800);
        }, 2000); // Logo shows for 2 seconds

    }, 3000); // Matrix runs for 3 seconds
});

function toggleMenu() {
    document.getElementById('side-bar').classList.toggle('active');
}
