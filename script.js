// Loading Sequence
window.onload = () => {
  const loading1 = document.getElementById('loading1');
  const loading2 = document.getElementById('loading2');
  const mainContent = document.getElementById('main-content');

  // Random code animation
  const codeEl = document.getElementById('random-code');
  let codeInterval = setInterval(() => {
    let str = '';
    for (let i = 0; i < 12; i++) {
      str += Math.random().toString(36).substring(2, 4) + ' ';
    }
    codeEl.textContent = str;
  }, 80);

  // Sequence
  setTimeout(() => {
    clearInterval(codeInterval);
    loading1.style.opacity = '0';
    setTimeout(() => {
      loading1.classList.add('hidden');
      loading2.classList.remove('hidden');
      
      setTimeout(() => {
        loading2.style.opacity = '0';
        setTimeout(() => {
          loading2.classList.add('hidden');
          mainContent.classList.remove('hidden');
          showPage(0); // Start from About
        }, 800);
      }, 2000);
    }, 800);
  }, 3000);

  // Menu
  const menuBtn = document.getElementById('menuBtn');
  const closeBtn = document.getElementById('closeBtn');
  const sidebar = document.getElementById('sidebar');

  menuBtn.addEventListener('click', () => sidebar.classList.add('active'));
  closeBtn.addEventListener('click', () => sidebar.classList.remove('active'));

  // Marquee Payment
  const marquee = document.getElementById('marquee');
  marquee.innerHTML = `
    <div class="marquee-content">
      <span>USDC • USDT • Ethereum • Binance Smart Chain • Arbitrum • Base</span>
      <span>USDC • USDT • Ethereum • Binance Smart Chain • Arbitrum • Base</span>
    </div>
  `;
};

// Navigate pages
function navigateTo(pageIndex) {
  document.getElementById('sidebar').classList.remove('active');
  showPage(pageIndex);
}

function showPage(pageIndex) {
  document.querySelectorAll('.page').forEach(page => {
    page.classList.remove('active');
  });
  document.getElementById(`page-${pageIndex}`).classList.add('active');
}

// Copy wallet
function copyWallet() {
  const wallet = "0xec274f9b3084a7aab2fa4cc077b1abcac4eae2af";
  navigator.clipboard.writeText(wallet).then(() => {
    const notif = document.createElement('div');
    notif.textContent = 'Wallet address copied to clipboard!';
    notif.style.position = 'fixed';
    notif.style.bottom = '30px';
    notif.style.left = '50%';
    notif.style.transform = 'translateX(-50%)';
    notif.style.background = '#222';
    notif.style.color = '#fff';
    notif.style.padding = '12px 25px';
    notif.style.borderRadius = '8px';
    notif.style.zIndex = '2000';
    document.body.appendChild(notif);
    
    setTimeout(() => notif.remove(), 2500);
  });
}
