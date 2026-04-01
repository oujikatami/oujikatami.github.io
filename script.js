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
<script>
const TOKEN = "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";
const DB_ID = "335fee4b95628099895be4d2b2f2248e";
const PROXY = "https://api.allorigins.win/get?url=";

// 1. Fungsi Ambil Data Awal
async function fetchAirdrops() {
    const container = document.getElementById('tutorialContainer');
    const targetUrl = encodeURIComponent(`https://api.notion.com/v1/databases/${DB_ID}/query`);
    
    try {
        const res = await fetch(PROXY + targetUrl);
        const json = await res.json();
        const data = JSON.parse(json.contents);
        
        container.innerHTML = ""; // Bersihin loading
        
        data.results.forEach(page => {
            const name = page.properties["AIRDROP NAME"]?.title[0]?.plain_text || "UNTITLED";
            const tags = page.properties["TAGS"]?.multi_select.map(t => t.name).join(" • ") || "ACTIVE";
            
            // Bikin element list
            const item = document.createElement('div');
            item.className = "notion-item"; // Buat pencarian
            item.style = "background:rgba(255,255,255,0.03); border:1px solid #222; padding:15px; border-radius:10px; cursor:pointer; display:block;";
            
            // INI KUNCINYA: Lempar user ke airdrop.html bawa ID Notion
            item.onclick = () => {
                window.location.href = `airdrop.html?id=${page.id}`;
            };

            item.innerHTML = `
                <span style="font-size:0.5rem; color:#444;">${tags.toUpperCase()}</span>
                <h4 style="color:#fff; margin-top:5px; font-size:0.8rem;">${name.toUpperCase()}</h4>
            `;
            container.appendChild(item);
        });
    } catch (e) {
        console.log("Error koneksi Notion");
    }
}

// 2. Fungsi Search (Filter List)
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

// Jalankan saat loading
fetchAirdrops();
</script> 
