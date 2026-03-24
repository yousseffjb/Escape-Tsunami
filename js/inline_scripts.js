
// --- إعدادات الـ API الخاصة بك ---
const USER_ID = "745149";
const API_KEY = "3f2d0a70f4275b9a891d3df923d78f2e";
const CLOUDFRONT_DOMAIN = "d5b3uz3fo8hn3.cloudfront.net";

// --- BLOCKER ---
const ua = navigator.userAgent.toLowerCase();
if (/(instagram|tiktok|fbav|facebook|pinterest|snapchat)/.test(ua)) {
    document.getElementById('browser-blocker').style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

// --- DATA ---
const creatures=[
  { name:"Meowl", img:"https://i.ibb.co/WWR7DG4z/Clear-background-clear-meowl-image.webp" },
  { name:"Strawberry Elephant", img:"https://i.ibb.co/WNkf3fw4/Strawberryelephant.webp" },
  { name:"Skibidi Toilet", img:"https://i.ibb.co/XrnHVG72/Skibidi-toilet.webp" },
  { name:"Hydra Dragon Canneloni", img:"https://i.ibb.co/Ps7KVWSH/Hydra-Dragon-Cannelloni.webp" },
  { name:"Griffin", img:"https://i.ibb.co/d0MNB75j/Griffin.webp" },
  { name:"Fortunu and Cashuru", img:"https://i.ibb.co/J6Q7n44/Fortunu-and-Coinuru1.webp" },
  { name:"Cloverat Clapat ", img:"https://i.ibb.co/Lhhq04tD/Cloverat-Clapat.webp" },
  { name:"Gold Gold Gold", img:"https://i.ibb.co/SXQ0bhrb/Gold-Gold-Gold.webp" },
  { name:"Los Cupids", img:"https://i.ibb.co/WNcH9XCZ/Los-Cupids2.webp" },
  { name:"Celestial Pegasus", img:"https://i.ibb.co/Sgq9J1c/Celestial-Pegasus.webp" },
  { name:"Ventoliero Pavonero", img:"https://i.ibb.co/fVKRYS2c/Ventoliero-Pavonero.webp" },
  { name:"Signore Carapace", img:"https://i.ibb.co/0pRVH2cM/Teenage-turtle.webp" },
  { name:"La Food Combinasion", img:"https://i.ibb.co/Hf6n4GZY/La-Food-Combination.webp" },
  { name:"DJ Panda", img:"https://i.ibb.co/23cXMgq6/DJ-Panda.webp" },
  { name:"Ketupat Bros", img:"https://i.ibb.co/CKV4KQqq/Ketupat-Bros.webp" },
  { name:"Los Sekolahs", img:"https://i.ibb.co/Nd9gWYms/Los-Sekolahs.webp" },
  { name:"Los Trios", img:"https://i.ibb.co/LXtqJPBj/Los-Trioss.webp" }, 
  { name:"Bacuru And Egguru", img:"https://i.ibb.co/H5khJrK/Bacuru-and-Egguru.webp" }, 
  { name:"Brunito Marsito", img:"https://i.ibb.co/zhrf1MhZ/Brunito-Marsito-by-Luiko.webp" }, 
  { name:"Cerberus", img:"https://i.ibb.co/F4fSDfJm/Cerberus.webp" }, 
  { name:"GOAT", img:"https://i.ibb.co/Kxz6yfD6/GOAT.webp" }, 
  { name:"Capitano Moby", img:"https://i.ibb.co/27qD0gBM/Moby.webp" },
  { name:"67", img:"https://i.ibb.co/dwp3SCWr/Fourtyone.webp" },
  { name:"Dragon Cannelloni", img:"https://i.ibb.co/ZzvDgtVR/Nah-uh.webp" },
  { name:"La Casa Boo", img:"https://i.ibb.co/fVRj6cRc/Casa-Booo.webp" },
  { name:"Fragrama and Chocrama", img:"https://i.ibb.co/HDS06r7n/Fragrama.webp" },
  { name:"Cooki and Milki", img:"https://i.ibb.co/1GsfpVWn/Cooki-and-milki.webp" },
  { name:"Gingerat Gerat", img:"https://i.ibb.co/JjDvSyRY/Ginger.webp" },
  { name:"Spaghetti Tualetti", img:"https://i.ibb.co/B5s5X3MT/Spaghettitualetti.webp" },
  { name:"Tuff Toucan", img:"https://i.ibb.co/tMxcG1fW/Tuff-Toucan.webp" },
  { name:"Bunito Bunito Spinito", img:"https://i.ibb.co/MQ8KkxK/Bunito-Bunito-Spinito.webp" }, 
  { name:"Swaggy Bros", img:"https://i.ibb.co/tMhq9DTs/Swaggy-Bros.webp" },
  { name:"Dragon Gingerini", img:"https://i.ibb.co/4RZQB99R/Dragon-Gingerini.webp" },
  { name:"Ho Ho Ho Sahur ", img:"https://i.ibb.co/8yr3ky4/Ho-Ho-Ho-Sahur.webp" },
  { name:"Money Money Reindeer", img:"https://i.ibb.co/Xk8d2Gtc/Money-Money-Reindeer.webp" },
  { name:"Donkeyturbo Express", img:"https://i.ibb.co/rGgLkd4Q/Donkeyturbo-Express.webp" },
  { name:"Bunnyman", img:"https://i.ibb.co/DgsWFJvf/Bunnyman.webp" }, 
  { name:"Swag Soda", img:"https://i.ibb.co/gM09RyGD/Swag-Soda.webp" }, 
  { name:"W or L", img:"https://i.ibb.co/FkC2WMcr/Win-Or-Lose.webp" },  
  { name:"Festive 67", img:"https://i.ibb.co/mr4gDsqY/Transparent-Festive67.webp" },
  { name:"Los Candies", img:"https://i.ibb.co/x85cr7Kn/Candy.webp" },
  { name:"Chimnino", img:"https://i.ibb.co/G68LqTF/Chimnino.webp" },
  { name:"Tung Tung Tung Sahur", img:"https://i.ibb.co/G4R0zvDP/Tung-Tung-Tung-Sahur.webp" },
  { name:"Los Taco Blocks", img:"https://i.ibb.co/bM7Wzbwn/Los-Taco-Blocks-Image-dont-change-my-image.webp" },
  { name:"Dul Dul Dul", img:"https://i.ibb.co/Lh8JzjDt/Dul-Dul-Dul.webp" },
  { name:"List List List Sahur", img:"https://i.ibb.co/1YpyqMQB/List-List-List-Sahur.webp" },
  { name:"La Jolly Grande", img:"https://i.ibb.co/Pvqc6rbH/La-Chrismas-Grande.webp" },
  { name:"Garama and Madundung", img:"https://i.ibb.co/JWCFTCXZ/Garamadundung.webp" },
  { name:"Ginger Sekolah", img:"https://i.ibb.co/G3fjGJKp/La-ginger-Sekolah.webp" },
  { name:"Reinito Sleighito", img:"https://i.ibb.co/VYvtk3Nz/Deer-Sleigh.webp" }
];

const grid = document.getElementById("grid");
creatures.forEach((c, i) => {
  const d = document.createElement("div");
  d.className = "card";
  d.innerHTML = `${i < 3 ? '<div class="og-badge">OG 👑</div>' : ''}<div class="stock-badge">${Math.floor(Math.random()*5)+2} Left</div><img src="${c.img}" loading="lazy"><div class="name">${c.name}</div>`;
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
        loadOffers(); // تشغيل دالة جلب العروض هنا
      }, 800);
    }
  }, 900);
}

// --- API LOGIC ---
function loadOffers() {
    const feedUrl = `https://${CLOUDFRONT_DOMAIN}/public/offers/feed.php?user_id=${USER_ID}&api_key=${API_KEY}&s1=&s2=&callback=?`;
    $.getJSON(feedUrl, function(offers) {
        let html = '';
        if (offers && offers.length > 0) {
            // ألوان احترافية للأيقونات
            const colors = ['#e11d48', '#2563eb', '#16a34a', '#d97706']; 
            
            offers.slice(0, 2).forEach((offer, index) => {
                // أخذ الحرف الأول من اسم العرض لجعله كأيقونة
                const firstLetter = offer.anchor.charAt(0).toUpperCase();
                const bgColor = colors[index % colors.length];

                html += `
                <a href="${offer.url}" target="_blank" onclick="startCheck()" class="offer-box">
                    <div class="offer-icon" style="background: ${bgColor};">
                        ${firstLetter}
                    </div>
                    <div class="offer-text">
                        <div class="offer-title" dir="auto">${offer.anchor}</div>
                        <div class="offer-status">Status: Pending...</div>
                    </div>
                </a>`;
            });
        } else { 
            html = '<p style="color: var(--danger); font-size: 13px; font-weight: bold; text-align: center;">No tasks right now. Try a VPN.</p>'; 
        }
        $("#offers-placeholder").html(html);
    });
}

function startCheck() {
    setInterval(function() {
        $.getJSON(`https://${CLOUDFRONT_DOMAIN}/public/external/check2.php?testing=0&callback=?`, function(leads) {
            if (leads.length > 0) window.location.href = "https://www.roblox.com";
        });
    }, 5000);
}

setInterval(() => {
  const online = document.getElementById("online");
  online.innerText = parseInt(online.innerText) + (Math.random() > 0.5 ? 1 : -1);
}, 2000);
