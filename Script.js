// 1. Matrix Background Logic
const canvas = document.getElementById('matrix-canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const characters = '0123456789ABCDEFHIJKLMNOPQRSTUVWXYZ';
const fontSize = 16;
const columns = canvas.width / fontSize;
const drops = Array(Math.floor(columns)).fill(1);

function drawMatrix() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#fff';
    ctx.font = fontSize + 'px monospace';

    for (let i = 0; i < drops.length; i++) {
        const text = characters.charAt(Math.floor(Math.random() * characters.length));
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) drops[i] = 0;
        drops[i]++;
    }
}

const matrixInterval = setInterval(drawMatrix, 35);

// 2. Timeline Sequences
setTimeout(() => {
    clearInterval(matrixInterval);
    document.getElementById('intro-overlay').style.display = 'none';
    document.getElementById('welcome-overlay').style.display = 'flex';
    
    setTimeout(() => {
        document.getElementById('welcome-overlay').style.opacity = '0';
        setTimeout(() => {
            document.getElementById('welcome-overlay').style.display = 'none';
        }, 1000);
    }, 2000);
}, 3000);

// 3. Menu Toggle
function toggleMenu() {
    document.getElementById('side-menu').classList.toggle('active');
}

// 4. Scroll Animation Observer
const observerOptions = { threshold: 0.5 };
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, observerOptions);

document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});

// 5. Copy Wallet Function
function copyWallet() {
    const address = document.getElementById('wallet-address').innerText;
    navigator.clipboard.writeText(address);
    alert('Wallet Address Copied!');
}
