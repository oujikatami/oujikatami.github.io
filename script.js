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
async function liveSearch() {
    const query = document.getElementById('menuSearchInput').value.toLowerCase();
    const resultBox = document.getElementById('searchResultBox');
    
    if (query.length < 2) {
        resultBox.style.display = "none";
        return;
    }

    try {
        const response = await fetch('airdrops.json');
        const data = await response.json();
        
        // Filter data berdasarkan nama airdrop
        const results = data.filter(item => item.name.toLowerCase().includes(query));

        if (results.length > 0) {
            resultBox.style.display = "block";
            resultBox.innerHTML = results.map(item => `
                <div style="padding: 10px; border-bottom: 1px solid #222; cursor: pointer;" onclick="viewDrop('${item.link}')">
                    <div style="font-size: 0.6rem; color: #00ffa3; font-weight: 800;">${item.name.toUpperCase()}</div>
                    <div style="font-size: 0.45rem; color: #888;">Status: ${item.status || 'Active'}</div>
                </div>
            `).join('');
        } else {
            resultBox.innerHTML = "<div style='padding:10px; font-size:0.5rem; color:#444;'>No Alpha Found...</div>";
            resultBox.style.display = "block";
        }
    } catch (e) {
        console.log("JSON Error:", e);
    }
}

// Fungsi buat ngebuka detail (bisa ke link luar atau modal)
function viewDrop(link) {
    window.location.href = link;
}

// Klik di luar buat nutup hasil
document.addEventListener('click', (e) => {
    if (!e.target.closest('#menuSearchInput')) {
        document.getElementById('searchResultBox').style.display = "none";
    }
});
