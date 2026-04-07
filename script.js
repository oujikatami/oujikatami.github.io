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
            
            window.open(`https://blockscan.com/tx/${hash}`, '_blank');
        }
    }

    function scanSOL() {
        const sig = document.getElementById('solInput').value.trim();
        if (sig) {
            window.open(`https://solscan.io/tx/${sig}`, '_blank');
        } 
    } 

// 1. Inisialisasi Suara
const clickSound = new Audio('click.mp3');
clickSound.volume = 0.5; 


function playClick() {
    clickSound.currentTime = 0;
    clickSound.play().catch(e => console.log("Audio blocked: Perlu satu klik awal dari user!"));
}


document.addEventListener('click', function(e) {
    const targetLink = e.target.closest('a');
    const targetBtn = e.target.closest('button');

    if (targetLink || targetBtn) {
        playClick();
        
        
        if (targetLink) {
            const href = targetLink.getAttribute('href');
            
            if (href && href !== '#' && !href.startsWith('http') && targetLink.target !== "_blank") {
                e.preventDefault();
                setTimeout(() => {
                    window.location.href = href;
                }, 150); 
            }
        }
    }
});
