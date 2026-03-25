document.addEventListener("DOMContentLoaded", function() {
    const initialLoader = document.getElementById('initial-loader');
    const transLoader = document.getElementById('transition-loader');
    const logoContainer = document.getElementById('logo-reveal');
    const matrixTexts = document.querySelectorAll('.matrix-text');

    function startMatrix(element, duration, callback) {
        element.parentElement.classList.remove('hidden');
        let interval = setInterval(() => {
            let str = "";
            for(let i=0; i<600; i++) str += Math.floor(Math.random() * 10);
            element.innerText = str;
        }, 50);
        setTimeout(() => {
            clearInterval(interval);
            if(callback) callback();
        }, duration);
    }

    // PHASE 1: INITIAL LOAD (5 SECONDS TOTAL)
    startMatrix(matrixTexts[0], 3000, () => {
        matrixTexts[0].classList.add('hidden');
        logoContainer.classList.remove('hidden');
        setTimeout(() => {
            initialLoader.style.opacity = '0';
            setTimeout(() => initialLoader.classList.add('hidden'), 800);
        }, 2000); // Logo shows for 2s after 3s numbers
    });

    // PHASE 2: SCROLL TRANSITION (2 SECONDS)
    let lastScrollTop = 0;
    window.addEventListener('scroll', () => {
        let st = window.pageYOffset || document.documentElement.scrollTop;
        if (Math.abs(st - lastScrollTop) > 100) { // Trigger on meaningful scroll
            transLoader.style.opacity = '1';
            startMatrix(matrixTexts[1], 1500, () => {
                transLoader.style.transition = '0.5s';
                transLoader.style.opacity = '0';
                setTimeout(() => transLoader.classList.add('hidden'), 500);
            });
        }
        lastScrollTop = st;
    }, {passive: true});
});

function toggleMenu() { document.getElementById('side-bar').classList.toggle('active'); }
