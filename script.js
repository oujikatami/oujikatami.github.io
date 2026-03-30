// 1. Matrix/Random Numbers Effect
const loaderText = document.getElementById('matrix-text');
const chars = "0123456789ABCDEF";

let interval = setInterval(() => {
    loaderText.innerText = Array(10).fill(0).map(() => chars[Math.floor(Math.random() * chars.length)]).join("");
}, 50);

// Transition Timers
setTimeout(() => {
    clearInterval(interval);
    document.getElementById('loader').classList.add('hidden');
    document.getElementById('welcome').classList.remove('hidden');

    setTimeout(() => {
        document.getElementById('welcome').classList.add('hidden');
        document.getElementById('main-content').classList.remove('hidden');
        initScrollEffect();
    }, 2000); // Welcome duration
}, 3000); // Matrix duration

// 2. Menu Toggle
function toggleMenu() {
    document.getElementById('side-menu').classList.toggle('active');
}

// 3. Scroll Reveal Effect
function initScrollEffect() {
    const sections = document.querySelectorAll('.scroll-section');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.2 });

    sections.forEach(section => observer.observe(section));
}

// 4. Copy Wallet
function copyWallet() {
    const walletText = document.getElementById('wallet').innerText;
    navigator.clipboard.writeText(walletText);
    alert("Wallet address copied to clipboard!");
}
