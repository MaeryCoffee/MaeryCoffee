// ─── INTERSECTION OBSERVER ───
const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); } });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
reveals.forEach(el => observer.observe(el));

// ─── QUANTITY ───
let qty = 1;
document.getElementById('qty-minus').addEventListener('click', () => { if (qty > 1) { qty--; update(); } });
document.getElementById('qty-plus').addEventListener('click', () => { if (qty < 10) { qty++; update(); } });

function update() {
  document.getElementById('qty-display').textContent = qty;
  updateSummary();
}

function updateSummary() {
  const label = `${qty} paquete${qty > 1 ? 's' : ''}`;
  document.getElementById('price-qty-display').textContent = label;
  document.getElementById('price-summary').textContent = label;
  updateWA(qty);
}

function updateWA(qty) {
  const phone = '51958191656'; // ← REEMPLAZA con tu número de WhatsApp
  const msg = encodeURIComponent(
    `Hola, quiero comprar café Maery Coffee ☕\n` +
    `Producto: Café Geisha\n` +
    `Cantidad: ${qty} paquete${qty > 1 ? 's' : ''}\n\n` +
    `¿Podría darme más información sobre el precio y el envío?`
  );
  document.getElementById('wa-btn').href = `https://wa.me/${phone}?text=${msg}`;
}

// Init
update();

// ─── NAV SCROLL EFFECT ───
window.addEventListener('scroll', () => {
  const nav = document.querySelector('nav');
  nav.style.boxShadow = window.scrollY > 20 ? '0 1px 20px rgba(0,0,0,.08)' : 'none';
});

const video = document.querySelector('video');
const videoObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) { video.play(); } 
    else { video.pause(); }
  });
}, { threshold: 0.3 });
videoObserver.observe(video);
