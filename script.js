// Jaring-Jaring Crypto
let vantaNet = VANTA.NET({
  el: "#intro-overlay",
  mouseControls: true, touchControls: true,
  color: 0xffffff, backgroundColor: 0x0,
  points: 10.00, maxDistance: 20.00, spacing: 16.00
});

// Intro Sequence
setTimeout(() => {
    document.getElementById('intro-overlay').style.opacity = '0';
    setTimeout(() => {
        document.getElementById('intro-overlay').style.display = 'none';
        // Pasang jaring-jaring di background utama
        VANTA.NET({ el: "body", color: 0x333333, backgroundColor: 0x0, points: 8 });
    }, 1000);
}, 3000);

// Menu Function
function toggleMenu() {
    document.getElementById('side-menu').classList.toggle('active');
} 
