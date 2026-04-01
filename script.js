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
const TOKEN = "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";
const DB_ID = "335fee4b95628099895be4d2b2f2248e";
// Gue ganti proxynya pake yang lebih pro
const PROXY = "https://corsproxy.io/?";

async function fetchAirdrops() {
    const container = document.getElementById('tutorialContainer');
    if(!container) return;
    
    container.innerHTML = "<p style='color:#333; font-size:0.5rem; text-align:center;'>SCANNING ALPHA...</p>";

    const targetUrl = `https://api.notion.com/v1/databases/${DB_ID}/query`;
    
    try {
        const res = await fetch(PROXY + encodeURIComponent(targetUrl), {
            method: 'POST', // WAJIB POST buat Notion
            headers: {
                'Authorization': `Bearer ${TOKEN}`,
                'Notion-Version': '2022-06-28',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({}) // Kirim body kosong biar data keluar semua
        });
        
        const data = await res.json();
        
        if (!data.results || data.results.length === 0) {
            container.innerHTML = "<p style='color:#444; font-size:0.5rem; text-align:center;'>DATABASE EMPTY</p>";
            return;
        }

        container.innerHTML = ""; 
        
        data.results.forEach(page => {
            // Cek nama kolom di Notion lo, kalo bukan "AIRDROP NAME", ganti teks di bawah ini
            const name = page.properties["AIRDROP NAME"]?.title[0]?.plain_text || "UNTITLED";
            const tags = page.properties["TAGS"]?.multi_select.map(t => t.name).join(" • ") || "ACTIVE";
            
            const item = document.createElement('div');
            item.className = "notion-item";
            item.style = "background:rgba(255,255,255,0.02); border:1px solid #222; padding:15px; border-radius:10px; cursor:pointer; margin-bottom:10px; text-align:left;";
            
            item.onclick = () => {
                window.location.href = `airdrop.html?id=${page.id}`;
            };

            item.innerHTML = `
                <span style="font-size:0.5rem; color:#444; letter-spacing:1px;">${tags.toUpperCase()}</span>
                <h4 style="color:#fff; margin-top:5px; font-size:0.8rem; letter-spacing:1px;">${name.toUpperCase()}</h4>
            `;
            container.appendChild(item);
        });
    } catch (e) {
        container.innerHTML = "<p style='color:#ff4444; font-size:0.5rem; text-align:center;'>PROXY BLOCKED / TIMEOUT</p>";
        console.error(e);
    }
}

function searchNotion() {
    let input = document.getElementById('tutorialSearch').value.toLowerCase();
    let items = document.getElementsByClassName('notion-item');
    
    for (let i = 0; i < items.length; i++) {
        let text = items[i].getElementsByTagName('h4')[0].innerText.toLowerCase();
        if (text.includes(input)) {
            items[i].style.display = "block";
        } else {
            items[i].style.display = "none";
        }
    }
}

fetchAirdrops();
