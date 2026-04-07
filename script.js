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


const clickSound = new Audio('click.mp3');
clickSound.volume = 0.6; 

function playClick() {
    clickSound.currentTime = 0;
    
    clickSound.play().catch(() => {}); 
}


document.addEventListener('mousedown', function(e) {
   
    const target = e.target.closest(
        'a, button, ' +                
        '.menu-btn, .close-menu, ' +    
        '.soc-row, .cex-btn, .cex-btn-vanta, ' + 
        '.pay-item, .address-card-final button, ' +
        '.switch-btn, .close-modal, ' +  
        '.service-row-v2, .exp-item'  +   
    );

    if (target) {
        playClick();
    }
}, true);


document.addEventListener('click', function(e) {
    const link = e.target.closest('a');
    
    if (link) {
        const href = link.getAttribute('href');
        const isExternal = link.target === "_blank" || href.startsWith('http') || href.startsWith('mailto:');

        if (href && href !== '#' && !isExternal) {
            e.preventDefault();
            setTimeout(() => {
                window.location.href = href;
            }, 50); 
        }
    }
}, true);
