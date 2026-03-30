// Init Vanta
let vantaEffect = VANTA.NET({
  el: "#intro-overlay",
  mouseControls: true, touchControls: true,
  color: 0x444444, backgroundColor: 0x0, points: 10
});

// Timeline
setTimeout(() => {
    document.getElementById('intro-overlay').style.opacity = '0';
    document.getElementById('welcome-overlay').style.display = 'flex';
    
    setTimeout(() => {
        document.getElementById('welcome-overlay').style.opacity = '0';
        setTimeout(() => {
            document.getElementById('intro-overlay').style.display = 'none';
            document.getElementById('welcome-overlay').style.display = 'none';
            document.body.classList.remove('intro-active');
            // Re-init vanta to main body
            VANTA.NET({ el: "body", color: 0x222222, backgroundColor: 0x0 });
        }, 1000);
    }, 3000);
}, 3000);

function toggleMenu() {
    document.getElementById('side-menu').classList.toggle('active');
} 
