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
/* --- FUNGSI GENERATE REFFERAL (COPY SAKTI) --- */
function genReff() {
    // 1. Ambil apa yang diketik user (Nama atau Wallet)
    const wallet = document.getElementById('reffInput').value.trim();
    const status = document.getElementById('reffStatus');

    // 2. Cek kalo kosong jangan dikasih copy
    if (!wallet) {
        status.innerHTML = "<span style='color: #ff3e3e;'>KETIK NAMA/WALLET DULU SOB!</span>";
        return;
    }

    // 3. Bikin Link-nya (Otomatis nembak ke retail.html biar pasti jualan)
    // window.location.origin bakal otomatis jadi oujikatami.xyz pas online
    const finalLink = window.location.origin + "/retail.html?ref=" + wallet;

    // 4. JURUS COPY KE CLIPBOARD HP
    navigator.clipboard.writeText(finalLink).then(() => {
        // Kalo sukses, kasih tanda centang ijo "Pecah Telor"
        status.innerHTML = "<span style='color: #00ffa3;'>PECAH TELOR! LINK COPIED!</span>";
        
        // Balikin tulisan normal setelah 3 detik
        setTimeout(() => { 
            status.innerText = "Ready to share again!"; 
        }, 3000);
    }).catch(err => {
        // Kalo browser jadul gak support, kasih alert aja
        alert("Copy link ini manual sob: " + finalLink);
    });
} 
