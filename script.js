// Jaring-Jaring Crypto (INTRO)
let vantaNet = VANTA.NET({
  el: "#intro-overlay",
  mouseControls: true, 
  touchControls: true,
  color: 0xffffff,           // Jaring Putih Terang
  backgroundColor: 0x0a0a0a, // Hitam sedikit abu biar mewah
  points: 10.00, 
  maxDistance: 20.00, 
  spacing: 16.00
});

// Intro Sequence (STRUKTUR TETAP ASLI)
setTimeout(() => {
    document.getElementById('intro-overlay').style.opacity = '0';
    setTimeout(() => {
        document.getElementById('intro-overlay').style.display = 'none';
        
        // --- PERBAIKAN DI SINI (BACKGROUND UTAMA) ---
        VANTA.NET({ 
            el: "body", 
            mouseControls: true,
            touchControls: true,
            color: 0xffffff,       // PAKSA JADI PUTIH BIAR KELIHATAN
            backgroundColor: 0x0,  // Tetep 0x0 tapi kita bantu di CSS
            points: 12.00,         // Tambah titik biar rame
            maxDistance: 25.00,    // Jaring lebih panjang
            spacing: 15.00,
            gyroControls: true     // Biar goyang pas HP lo digerakin
        });
    }, 1000);
}, 3000);

// Menu Function (STRUKTUR TETAP ASLI)
function toggleMenu() {
    document.getElementById('side-menu').classList.toggle('active');
} 
