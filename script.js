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
const NOTION_TOKEN = "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";
const DATABASE_ID = "335fee4b95628099895be4d2b2f2248e";
const PROXY = "https://corsproxy.io/?";

async function fetchAirdrops() {
    const container = document.getElementById('tutorialContainer');
    if (!container) return;
    container.innerHTML = "<p style='color:#333; font-size:0.5rem; text-align:center;'>CONNECTING TO DATABASE...</p>";

    try {
        const url = encodeURIComponent(`https://api.notion.com/v1/databases/${DATABASE_ID}/query`);
        const res = await fetch(PROXY + url, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${NOTION_TOKEN}`,
                'Notion-Version': '2022-06-28',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({})
        });
        const data = await res.json();
        container.innerHTML = "";
        
        data.results.forEach(page => {
            const name = page.properties["AIRDROP NAME"]?.title[0]?.plain_text || "UNTITLED";
            const tags = page.properties["TAGS"]?.multi_select.map(t => t.name).join(" • ") || "ACTIVE";
            
            const div = document.createElement('div');
            div.style = "background:rgba(255,255,255,0.02); border:1px solid #222; padding:15px; border-radius:10px; cursor:pointer; text-align:left;";
            div.onclick = () => openTutorial(page.id);
            div.innerHTML = `<span style="font-size:0.5rem; color:#444; letter-spacing:1px;">${tags.toUpperCase()}</span><h4 style="color:#fff; margin-top:5px; font-size:0.8rem;">${name.toUpperCase()}</h4>`;
            container.appendChild(div);
        });
    } catch (e) { container.innerHTML = "<p style='color:red; font-size:0.5rem;'>DATABASE OFFLINE</p>"; }
}

async function openTutorial(id) {
    const modal = document.getElementById('tutorialModal');
    const body = document.getElementById('modalBody');
    modal.style.display = "block";
    body.innerHTML = "<p style='color:#444;'>FETCHING CONTENT...</p>";
    try {
        const res = await fetch(PROXY + encodeURIComponent(`https://api.notion.com/v1/blocks/${id}/children`), {
            headers: { 'Authorization': `Bearer ${NOTION_TOKEN}`, 'Notion-Version': '2022-06-28' }
        });
        const data = await res.json();
        let html = "";
        data.results.forEach(b => {
            if (b.type === 'paragraph') html += `<p style="margin-bottom:15px;">${b.paragraph.rich_text[0]?.plain_text || ""}</p>`;
            if (b.type === 'image') html += `<img src="${b.image.type === 'external' ? b.image.external.url : b.image.file.url}">`;
            if (b.type.includes('heading')) html += `<h3 style="color:#fff; margin:20px 0 10px;">${b[b.type].rich_text[0]?.plain_text}</h3>`;
        });
        body.innerHTML = html;
    } catch (e) { body.innerHTML = "FAILED TO LOAD"; }
}

function closeModal() { document.getElementById('tutorialModal').style.display = "none"; }
fetchAirdrops();
