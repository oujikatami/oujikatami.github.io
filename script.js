// 1. Matrix Loader (3 Detik)
const loader = document.getElementById('matrix-loader');
const matrixInt = setInterval(() => {
    let str = "";
    for(let i=0; i<800; i++) str += Math.floor(Math.random()*10);
    loader.innerText = str;
}, 50);

setTimeout(() => {
    clearInterval(matrixInt);
    loader.style.display = 'none';
    
    // 2. Welcome Overlay (2 Detik)
    const welcome = document.getElementById('welcome-overlay');
    welcome.style.display = 'flex';

    setTimeout(() => {
        // Start Glitch Transition
        document.body.classList.add('glitch-active');
        
        setTimeout(() => {
            welcome.style.display = 'none';
            document.body.classList.remove('glitch-active');
        }, 500); // Durasi glitch ilang
    }, 2000);
}, 3000);

// Menu Sidebar Toggle
function toggleMenu() {
    document.getElementById('sidebar').classList.toggle('open');
}

// Navigasi dengan efek "Rusak"
function navTo(pageId) {
    document.body.classList.add('glitch-active');
    
    setTimeout(() => {
        // Sembunyiin semua page
        document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
        // Munculin page tujuan
        document.getElementById(pageId).classList.add('active');
        
        document.body.classList.remove('glitch-active');
        document.getElementById('sidebar').classList.remove('open');
        window.scrollTo(0,0);
    }, 400);
}

// Copy Wallet
function copyWallet() {
    const address = document.getElementById('wallet').innerText;
    navigator.clipboard.writeText(address);
    alert("Wallet Address Copied to Clipboard!");
}
