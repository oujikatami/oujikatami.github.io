// INITIALIZE VANTA ON INTRO
let introVanta = VANTA.NET({
  el: "#intro-overlay",
  mouseControls: true, touchControls: true,
  color: 0x444444, backgroundColor: 0x0,
  points: 12.00, maxDistance: 20.00, spacing: 15.00
});

// TIMELINE LOGIC
setTimeout(() => {
    // Detik 3: Transisi ke Welcome Message
    document.getElementById('intro-overlay').style.opacity = '0';
    const welcome = document.getElementById('welcome-overlay');
    welcome.style.display = 'flex';
    setTimeout(() => { welcome.style.opacity = '1'; }, 100);

    setTimeout(() => {
        // Detik 6: Transisi ke Main Portfolio
        welcome.style.opacity = '0';
        setTimeout(() => {
            document.getElementById('intro-overlay').style.display = 'none';
            welcome.style.display = 'none';
            document.body.classList.remove('intro-active');
            
            // Re-init Vanta on Main Body
            VANTA.NET({
                el: "body", color: 0x222222, backgroundColor: 0x0,
                points: 8.00, maxDistance: 20.00, spacing: 18.00
            });
        }, 1000);
    }, 3000); // Durasi Welcome Message
}, 3000); // Durasi Intro Jaring-jaring

function toggleMenu() { document.getElementById('side-menu').classList.toggle('active'); }
