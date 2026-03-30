// Init Jaring-Jaring (Vanta)
let vantaNet = VANTA.NET({
  el: "#intro-overlay",
  mouseControls: true, touchControls: true,
  color: 0xffffff, backgroundColor: 0x0,
  points: 10.00, maxDistance: 20.00, spacing: 16.00
});

// Intro 3 Detik Terus Hilang
setTimeout(() => {
    document.getElementById('intro-overlay').style.opacity = '0';
    setTimeout(() => {
        document.getElementById('intro-overlay').style.display = 'none';
        // Re-init background di body biar jaring-jaring tetep ada di belakang kotak
        VANTA.NET({ el: "body", color: 0x222222, backgroundColor: 0x0, points: 8 });
    }, 1000);
}, 3000);

// Toggle Menu
function toggleMenu() {
    document.getElementById('side-menu').classList.toggle('active');
}
