

// --- DATA ---
const creatures=[
  { name:"VIP", img:"https://i.ibb.co/tjxKbVQ/vip.webp" },
  { name:"VIP+", img:"https://i.ibb.co/Gf0QDyxy/vipp.webp" },
  { name:"Super Speed", img:"https://i.ibb.co/6RrvXnKy/supersped.webp" },
  { name:"Speed Boost", img:"https://i.ibb.co/pjDgLkkp/speed-poot.webp" },
  { name:"Harpoon Gun", img:"https://i.ibb.co/1JPhXBZL/A-leak.webp" },
  { name:"Infinity Lucky Block", img:"https://i.ibb.co/jPD1wS2W/Infinity-Lucky-Block.webp" },
  { name:"Meta Technetta", img:"https://i.ibb.co/QFdkCj2N/Meta-Technetta.webp" },
  { name:"Magmew", img:"https://i.ibb.co/LzJpqcZC/Magmew-Picture.webp" },
  { name:"Anububu", img:"https://i.ibb.co/SX7YDT4P/Anububu.webp" },
  { name:"Freezeti Cobretti", img:"https://i.ibb.co/Jj2n629M/Freezeti-Cobretti.webp" },
  { name:"Cupitron Consoletron", img:"https://i.ibb.co/ksy2xMPP/Cupitron-Consoletron.webp" },
  { name:"Galactio Fantasma", img:"https://i.ibb.co/5XRBnL5p/Galactio-Fantasma.webp" },
  { name:"Draculini Meowlini", img:"https://i.ibb.co/CpLyXHnK/Draculini-Meowlini.webp" },
  { name:"Flame Coil", img:"https://i.ibb.co/d0ZVyT42/Whats-App-Image-2026-02-01-at-3-12-03-PM-1.jpg" },
  { name:"Martino Gravatino", img:"https://i.ibb.co/Hf1h7hqR/Martiano-Gravatino-Png.webp" },
  { name:"Din Din Vaultero", img:"https://i.ibb.co/zHxx1TGZ/Din-Din-Vaultero.webp" },
  { name:"Strawberry Elephant", img:"https://i.ibb.co/jvsRVkJq/Strawberry-elephant.webp" },
  { name:"Esok Sekolah", img:"https://i.ibb.co/JP7TfD2/esok-sekolh.webp" }
];

const grid = document.getElementById("grid");
creatures.forEach((c, i) => {
  const d = document.createElement("div");
  d.className = "card";
  d.innerHTML = `${i < 3 ? '<div class="og-badge">best 👑</div>' : ''}<div class="stock-badge">${Math.floor(Math.random()*5)+2} Left</div><img src="${c.img}" loading="lazy"><div class="name">${c.name}</div>`;
  d.onclick = () => {
    document.getElementById('modalImg').src = c.img;
    document.getElementById('modalName').innerText = c.name;
    document.getElementById('modal').classList.add('active');
  };
  grid.appendChild(d);
});

// --- HACKING LOGIC (5-6 Steps) ---
function startHacking() {
  const user = document.getElementById("username").value;
  if(user.length < 3) return alert("Username too short!");
  document.getElementById("step1").style.display = "none";
  document.getElementById("stepHack").style.display = "block";
  const term = document.getElementById("terminal");
  const logs = ["Connecting to API...", "User Found: ID_"+Math.floor(Math.random()*1000), "Bypassing Security...", "Injecting Packet...", "Verification required!"];
  let i = 0;
  const interval = setInterval(() => {
    if(i < logs.length) {
      term.innerHTML += `<div>> ${logs[i]}</div>`;
      term.scrollTop = term.scrollHeight;
      i++;
    } else {
      clearInterval(interval);
      setTimeout(() => {
        document.getElementById("stepHack").style.display = "none";
        document.getElementById("step2").style.display = "block";
        document.getElementById("finalUser").innerText = user;
      }, 800);
    }
  }, 900);
}

function callCPA() {
    if (typeof _Ri === 'function') { _Ri(); } else { alert("AdBlock detected."); }
}

setInterval(() => {
  const online = document.getElementById("online");
  online.innerText = parseInt(online.innerText) + (Math.random() > 0.5 ? 1 : -1);
}, 2000);
