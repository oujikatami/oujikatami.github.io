VANTA.NET({ 
    el: "body", 
    mouseControls: true,
    touchControls: true,
    color: 0xffffff,       
    backgroundColor: 0x0,  
    points: 12.00,         
    maxDistance: 25.00,    
    spacing: 15.00,
    gyroControls: true     
});

const intro = document.getElementById('intro-overlay');
if (intro) {
    intro.style.display = 'none';
}

function toggleMenu() {
    document.getElementById('side-menu').classList.toggle('active');
}

function scanEVM() {
        const hash = document.getElementById('evmInput').value.trim();
        if (hash) {
            // Blockscan itu agregator sakti buat semua 0x hash
            window.open(`https://blockscan.com/tx/${hash}`, '_blank');
        }
    }

    function scanSOL() {
        const sig = document.getElementById('solInput').value.trim();
        if (sig) {
            window.open(`https://solscan.io/tx/${sig}`, '_blank');
        }
    } 
function genReff() {
    const wallet = document.getElementById('reffInput').value.trim();
    const status = document.getElementById('reffStatus');

    if (wallet.length < 10) {
        status.innerHTML = "<span style='color: #ff3e3e;'>ERROR: INVALID WALLET SOB!</span>";
        return;
    }

    // Ambil URL dasar web lo (biar dinamis mau di index/market tetep jalan)
    const baseLink = window.location.origin + window.location.pathname;
    const finalLink = `${baseLink}?ref=${wallet}`;

    // JURUS COPY KE CLIPBOARD
    navigator.clipboard.writeText(finalLink).then(() => {
        status.innerHTML = "<span style='color: #00ffa3;'>LINK COPIED TO CLIPBOARD!</span>";
        // Balikin status normal setelah 3 detik
        setTimeout(() => { status.innerText = "Ready to share again!"; }, 3000);
    }).catch(err => {
        // Fallback kalau browser jadul gak dukung clipboard api
        alert("Copy link ini sob: " + finalLink);
    });
} 
