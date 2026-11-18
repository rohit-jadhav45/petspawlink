const IMG={
 logo_full:"images/logo_full.png", logo_icon:"images/logo_icon.png", hero:"images/hero.jpg",
 ph_home:"images/ph_home.jpg", ph_products:"images/ph_products.jpg", ph_adopt:"images/ph_adopt.jpg", ph_services:"images/ph_services.jpg", ph_community:"images/ph_community.jpg", ph_profile:"images/ph_profile.jpg", ph_splash:"images/ph_splash.jpg",
 pet_buddy:"images/pet_buddy.jpg", pet_mittens:"images/pet_mittens.jpg", pet_rocky:"images/pet_rocky.jpg", pet_lily:"images/pet_lily.jpg", pet_bella:"images/pet_bella.jpg", pet_milo:"images/pet_milo.jpg",
 prod_royal:"images/prod_royal.jpg", prod_whiskas:"images/prod_whiskas.jpg", prod_leash:"images/prod_leash.jpg", prod_toy:"images/prod_toy.jpg",
 svc_vet:"images/svc_vet.jpg", svc_groom:"images/svc_groom.jpg", svc_train:"images/svc_train.jpg", post_dog:"images/post_dog.jpg"
};

/* ---------- helpers ---------- */
const $=s=>document.querySelector(s);
const esc=s=>String(s==null?'':s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const inr=n=>'₹'+Number(n).toLocaleString('en-IN');
const val=id=>{const e=document.getElementById(id);return e?e.value.trim():'';};
const uid=()=>Math.random().toString(36).slice(2,9);
const I={
 paw:'<svg viewBox="0 0 24 24" fill="currentColor"><ellipse cx="5.5" cy="11" rx="2" ry="2.6"/><ellipse cx="9.8" cy="6.2" rx="2" ry="2.6"/><ellipse cx="14.5" cy="6.2" rx="2" ry="2.6"/><ellipse cx="18.8" cy="11" rx="2" ry="2.6"/><path d="M12 11c-3 0-5.6 3.1-5.6 5.5 0 1.9 1.6 2.5 3.1 2.1 1-.3 1.7-.5 2.5-.5s1.5.2 2.5.5c1.5.4 3.1-.2 3.1-2.1 0-2.4-2.6-5.5-5.6-5.5z"/></svg>',
 cart:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 4h2.2l2.3 10.4a1 1 0 0 0 1 .8h8.8a1 1 0 0 0 1-.8L20 7.5H6.3"/><circle cx="9.5" cy="19.5" r="1.4"/><circle cx="17" cy="19.5" r="1.4"/></svg>',
 vet:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M9.3 3h5.4v6.3H21v5.4h-6.3V21H9.3v-6.3H3V9.3h6.3z"/></svg>',
 cut:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><circle cx="6" cy="6.5" r="2.6"/><circle cx="6" cy="17.5" r="2.6"/><path d="M8.2 8 20 17.5M8.2 16 20 6.5"/></svg>',
 users:'<svg viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="7.5" r="3.3"/><path d="M5.8 19.5c0-3.7 2.8-6.2 6.2-6.2s6.2 2.5 6.2 6.2z"/><circle cx="5" cy="9.5" r="2.2"/><circle cx="19" cy="9.5" r="2.2"/></svg>',
 heart:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 21s-8.2-5.3-8.2-11.2A4.6 4.6 0 0 1 12 7.2a4.6 4.6 0 0 1 8.2 2.6C20.2 15.7 12 21 12 21z"/></svg>',
 shield:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3l8 3v6c0 5-3.4 8-8 9-4.6-1-8-4-8-9V6z"/><path d="M8.5 12l2.5 2.5 4.5-5"/></svg>',
 lock:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><rect x="5" y="11" width="14" height="10" rx="2.5"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/></svg>',
 search:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><circle cx="11" cy="11" r="6.5"/><path d="M16 16l4.5 4.5"/></svg>',
 pin:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 22s7-6.3 7-12a7 7 0 0 0-14 0c0 5.7 7 12 7 12zm0-9a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/></svg>',
 comment:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"><path d="M4 5h16v11H9l-5 4z"/></svg>',
 arrow:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>'
};

/* ---------- data ---------- */
const PETS=[
 {id:'p1',name:'Buddy',type:'Dog',breed:'Golden Retriever',age:'2 years',sex:'Male',city:'Pune',img:'pet_buddy',about:'Friendly, house-trained and loves kids and long walks.'},
 {id:'p2',name:'Mittens',type:'Cat',breed:'Domestic Cat',age:'3 months',sex:'Female',city:'Pimpri-Chinchwad',img:'pet_mittens',about:'Curious kitten, litter trained and very cuddly.'},
 {id:'p3',name:'Rocky',type:'Dog',breed:'Mixed Breed',age:'1 year',sex:'Male',city:'Pune',img:'pet_rocky',about:'Energetic and smart. Great with active families.'},
 {id:'p4',name:'Lily',type:'Dog',breed:'Indie Dog',age:'6 months',sex:'Female',city:'Alandi',img:'pet_lily',about:'Sweet puppy, vaccinated and ready for a loving home.'},
 {id:'p5',name:'Bella',type:'Dog',breed:'Golden Retriever',age:'2 years',sex:'Female',city:'Pune',img:'pet_bella',about:'Gentle and calm. Gets along with other pets.'},
 {id:'p6',name:'Milo',type:'Cat',breed:'Tabby Cat',age:'1 year',sex:'Male',city:'Alandi',img:'pet_milo',about:'Rescued, healthy and affectionate indoor cat.'},
 {id:'p7',name:'Coco',type:'Other',breed:'Rabbit',age:'1 year',sex:'Female',city:'Pune',emoji:'🐰',about:'Quiet, gentle and loves carrots.'},
 {id:'p8',name:'Tweety',type:'Other',breed:'Budgie',age:'6 months',sex:'Male',city:'Pimpri-Chinchwad',emoji:'🦜',about:'Cheerful and learning to whistle.'}
];
const PRODUCTS=[
 {id:'a1',name:'Royal Canin Dog Food',cat:'Food',price:1250,rating:4.8,img:'prod_royal'},
 {id:'a2',name:'Whiskas Cat Food',cat:'Food',price:890,rating:4.6,img:'prod_whiskas'},
 {id:'a3',name:'Dog Leash',cat:'Accessories',price:399,rating:4.5,img:'prod_leash'},
 {id:'a4',name:'Chew Toy',cat:'Toys',price:299,rating:4.4,img:'prod_toy'},
 {id:'a5',name:'Premium Dog Food 3 kg',cat:'Food',price:1299,rating:4.7,emoji:'🍖'},
 {id:'a6',name:'Cozy Pet Bed',cat:'Accessories',price:1499,rating:4.6,emoji:'🛏️'},
 {id:'a7',name:'Adjustable Pet Collar',cat:'Accessories',price:499,rating:4.5,emoji:'📿'},
 {id:'a8',name:'Cat Feather Wand',cat:'Toys',price:149,rating:4.2,emoji:'🪶'},
 {id:'a9',name:'Squeaky Ball Set',cat:'Toys',price:299,rating:4.6,emoji:'🎾'},
 {id:'a10',name:'Tick & Flea Shampoo',cat:'Health Care',price:379,rating:4.3,emoji:'🧴'},
 {id:'a11',name:'Multivitamin Tablets',cat:'Health Care',price:549,rating:4.6,emoji:'💊'},
 {id:'a12',name:'Pet First-Aid Kit',cat:'Health Care',price:699,rating:4.5,emoji:'🩹'}
];
const SERVICES=[
 {id:'s1',type:'Veterinary',name:'Happy Paws Vet Clinic',area:'Kothrud',rating:4.8,price:299,hours:'9 AM – 8 PM',img:'svc_vet'},
 {id:'s2',type:'Veterinary',name:'City Animal Hospital',area:'Pimpri',rating:4.6,price:350,hours:'Open 24 hours',img:'svc_vet'},
 {id:'s3',type:'Veterinary',name:'Alandi Pet Care Centre',area:'Alandi',rating:4.4,price:299,hours:'10 AM – 7 PM',img:'svc_vet'},
 {id:'s4',type:'Grooming',name:'Fluffy Tails Grooming',area:'Baner',rating:4.7,price:499,hours:'10 AM – 7 PM',img:'svc_groom'},
 {id:'s5',type:'Grooming',name:'Pamper My Pet Studio',area:'Viman Nagar',rating:4.5,price:599,hours:'9 AM – 6 PM',img:'svc_groom'},
 {id:'s6',type:'Grooming',name:'Spotless Paws',area:'Alandi',rating:4.3,price:499,hours:'10 AM – 6 PM',img:'svc_groom'},
 {id:'s7',type:'Training',name:'Good Boy Dog Training',area:'Hinjewadi',rating:4.6,price:799,hours:'7 AM – 12 PM',img:'svc_train'},
 {id:'s8',type:'Training',name:'PawSchool Academy',area:'Kothrud',rating:4.4,price:899,hours:'4 PM – 8 PM',img:'svc_train'},
 {id:'s9',type:'Veterinary',name:'Vet On Call Pune',area:'Baner',rating:4.5,price:399,hours:'8 AM – 10 PM',img:'svc_vet'}
];
const AREAS=[...new Set(SERVICES.map(s=>s.area))].sort();
const CITIES=['Pune','Pimpri-Chinchwad','Alandi'];
const SEED=[
 {id:'q1',author:'PawLover_22',pet:'',text:'My little buddy enjoying the sunshine! ☀️ #HappyPaws #PetLove',time:'2h ago',img:'post_dog',base:245,likedBy:[],comments:[{by:'CatMom',text:'So adorable! 😍'}]},
 {id:'q2',author:'CatMom',pet:'',text:'Adopted this cutie today! So happy! 💜',time:'4h ago',base:132,likedBy:[],comments:[]},
 {id:'q3',author:'Priya',pet:'Bruno',text:'Which vet in Kothrud do you all recommend for yearly vaccines?',time:'1 day ago',base:18,likedBy:[],comments:[{by:'PawLover_22',text:'Happy Paws is great, they are very gentle.'}]}
];

/* ---------- storage ---------- */
function defaults(){return{users:[],session:null,myPets:[],listed:[],orders:[],apps:[],bookings:[],cart:[],favs:{},posts:JSON.parse(JSON.stringify(SEED))}}
function load(){try{const r=localStorage.getItem('pawlink_final');if(r)return Object.assign(defaults(),JSON.parse(r));}catch(e){}return defaults();}
let db=load();
function save(){try{localStorage.setItem('pawlink_final',JSON.stringify(db));}catch(e){}}
const me=()=>db.users.find(u=>u.email===db.session)||null;
const mine=a=>a.filter(x=>x.owner===db.session);
const favs=()=>db.favs[db.session]||[];

/* ---------- ui ---------- */
function toast(m){const t=document.createElement('div');t.className='toast';t.textContent=m;document.body.appendChild(t);setTimeout(()=>t.remove(),2300);}
function modal(h){$('#layer').innerHTML='<div class="modal" data-act="bg"><div class="mb">'+h+'</div></div>';}
function closeModal(){$('#layer').innerHTML='';}
let nextRoute='#/home';
function needLogin(){if(me())return false;toast('Please log in first');nextRoute=location.hash||'#/home';location.hash='#/auth';return true;}
const page=(t,s)=>`<div class="wrap"><div class="pagehead"><h2>${t}</h2><p>${s}</p></div>`;

const NAV=[['home','Home'],['adopt','Adopt'],['shop','Shop'],['services','Services'],['community','Community']];
function header(r){
  const n=db.cart.reduce((a,c)=>a+c.qty,0);
  $('#links').innerHTML=NAV.map(([k,t])=>`<a href="#/${k}" class="${r===k?'on':''}">${t}</a>`).join('');
  const u=me();
  $('#acct').innerHTML=`<a class="btn sm ghost" href="#/cart" style="padding:8px 14px">${I.cart.replace('<svg','<svg style="width:17px;height:17px"')} ${n||''}</a>`+
    (u?`<a class="btn sm" href="#/profile">${esc(u.name.split(' ')[0])}</a>`:`<a class="btn sm" href="#/auth">Log in</a>`);
}

/* ---------- router ---------- */
let searchQ='';
function route(){
  const r=(location.hash.replace('#/','')||'home').split('?')[0];
  const V={home:vHome,adopt:vAdopt,shop:vShop,services:vServices,community:vCommunity,profile:vProfile,cart:vCart,auth:vAuth,search:vSearch};
  const v=V[r]||vHome;header(V[r]?r:'home');
  $('#app').innerHTML=v();
  if(v===vAdopt)adoptList();if(v===vShop)shopList();if(v===vServices)svcList();if(v===vCommunity)feed();
  window.scrollTo(0,0);
}
window.addEventListener('hashchange',route);

/* ---------- cards ---------- */
const petImg=p=>p.img?`<img src="${IMG[p.img]}" alt="${esc(p.name)}">`:`<div class="emo">${p.emoji||'🐾'}</div>`;
function petCard(p){
  const applied=db.apps.some(a=>a.petId===p.id&&a.owner===db.session);
  const own=p.owner&&p.owner===db.session;const f=favs().includes(p.id);
  return `<div class="card"><div class="ph">${petImg(p)}<button class="fav ${f?'on':''}" data-act="fav" data-id="${p.id}" aria-label="Save">${I.heart}</button><span class="badge">${esc(p.type)}</span></div>
  <div class="cb"><h3>${esc(p.name)}</h3><div class="meta">${esc(p.breed)}</div><div class="meta">${esc(p.age)} • ${esc(p.sex)} • ${esc(p.city)}</div>
  <div class="row">${own?`<span class="meta">Your listing</span><button class="btn red sm" data-act="unlist" data-id="${p.id}">Remove</button>`:applied?`<span class="btn dis sm">Requested ✔</span>`:`<button class="btn sm" data-act="adopt" data-id="${p.id}">Adopt me</button>`}</div></div></div>`;
}
function prodCard(p){
  const im=p.img?`<img src="${IMG[p.img]}" alt="${esc(p.name)}">`:`<div class="emo">${p.emoji}</div>`;
  return `<div class="card"><div class="ph">${im}<span class="badge">${esc(p.cat)}</span></div><div class="cb"><h3 style="font-size:15px">${esc(p.name)}</h3>
  <div class="star">★ ${p.rating}</div><div class="row"><span class="price">${inr(p.price)}</span><button class="round" data-act="addCart" data-id="${p.id}" aria-label="Add to cart">${I.cart}</button></div></div></div>`;
}
function svcCard(x){
  return `<div class="svc"><img src="${IMG[x.img]}" alt="${esc(x.type)}"><div class="in"><h3>${esc(x.name)}</h3>
  <div class="meta"><span class="pill">${x.type}</span><span class="star">★ ${x.rating}</span></div><div class="meta">📍 ${esc(x.area)} • 🕒 ${esc(x.hours)}</div>
  <div style="margin-top:6px;font-weight:700;color:var(--p)">From ${inr(x.price)}</div></div>
  <button class="round" data-act="book" data-id="${x.id}" aria-label="Book">${I.arrow}</button></div>`;
}
const allPets=()=>db.listed.concat(PETS);

/* ---------- HOME ---------- */
function vHome(){
  const u=me();
  const feat=[['bg-p',I.paw,'Adoption','Give a pet a second chance.','adopt'],['bg-o',I.cart,'Pet Products','Food, toys, accessories and more.','shop'],
   ['bg-g',I.vet,'Veterinary Care','Expert care for a healthier life.','services'],['bg-k',I.cut,'Grooming','Keep them clean, keep them happy.','services'],
   ['bg-i',I.users,'Community','Share, connect and grow together.','community'],['bg-c',I.heart,'Services','Trainers, walkers and more.','services']];
  const shots=[['ph_home','Home','Everything at a glance'],['ph_products','Pet Products','Food, toys, accessories'],['ph_adopt','Pet Adoption','Find your companion'],['ph_services','Pet Services','Vets, grooming, training'],['ph_community','Community','Share and connect'],['ph_profile','My Profile','Pets, orders, bookings']];
  return `
  <section class="hero"><div class="wrap">
   <div>
    <img class="biglogo" src="${IMG.logo_full}" alt="PawLink – Connect, Care, Companion">
    <h1>One Platform.<em>All Pet Needs.</em></h1>
    <p class="lead">PawLink is a one-stop pet marketplace and social community that connects pet lovers with pets, products, services and a caring community.</p>
    <div class="searchbar">${I.search}<input id="hq" placeholder="Search for pets, products, services…" aria-label="Search"><button class="btn sm or" data-act="doSearch" style="padding:11px 22px">Search</button></div>
    <div class="cta"><a class="btn" href="#/adopt">${I.paw} Adopt a pet</a><a class="btn ghost" href="#/shop">Explore shop</a>${u?'':'<a class="btn or" href="#/auth">Join free</a>'}</div>
    <div class="trust">
     <div class="tr"><i class="bg-p">${I.shield}</i>Verified &amp;<br>Trusted</div>
     <div class="tr"><i class="bg-o">${I.lock}</i>Safe &amp;<br>Secure</div>
     <div class="tr"><i class="bg-g">${I.users}</i>Engaging<br>Community</div>
     <div class="tr"><i class="bg-k">${I.heart}</i>Everything<br>Your Pet Needs</div>
    </div>
    <span class="pune">${I.pin} PUNE, INDIA</span>
   </div>
   <div class="vis">
    <div class="blob"></div>
    <img class="heroimg" src="${IMG.hero}" alt="Golden retriever puppy and tabby cat">
    <div class="phone"><img src="${IMG.ph_home}" alt="PawLink app"></div>
    <div class="chip c1"><i class="bg-o">${I.cart}</i>Pet Products</div>
    <div class="chip c2"><i class="bg-k">${I.cut}</i>Grooming</div>
    <div class="chip c3"><i class="bg-g">${I.vet}</i>Veterinary Care</div>
    <div class="chip c4"><i class="bg-i">${I.users}</i>Pet Lover Community</div>
   </div>
  </div></section>

  <section class="s"><div class="wrap">
   <div class="head"><div><span class="eyebrow">All your pet needs</span><h2>Everything in one place</h2><p class="sub">Six things pet parents usually chase across many apps, now together.</p></div></div>
   <div class="feats">${feat.map(f=>`<a class="feat" href="#/${f[4]}"><div class="ico ${f[0]}">${f[1]}</div><div><b>${f[2]}</b><span>${f[3]}</span></div></a>`).join('')}</div>
  </div></section>

  <section class="s w"><div class="wrap">
   <div class="head"><div><span class="eyebrow">Adopt, don't shop</span><h2>Pets looking for a home</h2><p class="sub">Give a furry friend a forever home.</p></div><a class="seeall" href="#/adopt">See all →</a></div>
   <div class="grid">${allPets().slice(0,4).map(petCard).join('')}</div>
  </div></section>

  <section class="s"><div class="wrap">
   <div class="head"><div><span class="eyebrow">Shop</span><h2>Popular products</h2><p class="sub">Food, toys and essentials from trusted sellers.</p></div><a class="seeall" href="#/shop">See all →</a></div>
   <div class="grid">${PRODUCTS.slice(0,4).map(prodCard).join('')}</div>
  </div></section>

  <section class="s w"><div class="wrap">
   <div class="head"><div><span class="eyebrow">The app</span><h2>See PawLink in action</h2><p class="sub">Simple, friendly screens designed for pet lovers.</p></div></div>
   <div class="shots">${shots.map(s=>`<div class="shot"><div class="phone"><img src="${IMG[s[0]]}" alt="${s[1]} screen" loading="lazy"></div><p>${s[1]}<span>${s[2]}</span></p></div>`).join('')}</div>
  </div></section>

  <section class="s"><div class="wrap">
   <div class="band"><div class="stats">
    <div><b>42.2M</b><span>pets in India in 2024<br>(up from 38.5M in 2023)</span></div>
    <div><b>₹25,000 Cr</b><span>total addressable<br>market every year</span></div>
    <div><b>₹8,000 Cr</b><span>serviceable<br>market every year</span></div>
    <div><b>5 in 1</b><span>adoption, shop, grooming,<br>vet care and community</span></div>
   </div><p class="src">Sources: Ministry of Food Processing Industries, Pet Food Sector Profile 2025; Grand View Research – India Pet Care Market Size.</p></div>
  </div></section>

  <section class="s w"><div class="wrap">
   <div class="head"><div><span class="eyebrow">How it works</span><h2>Get started in three steps</h2></div></div>
   <div class="steps">
    <div class="step"><i>1</i><h3>Create your account</h3><p>Sign up in a minute and add your pet's profile.</p></div>
    <div class="step"><i>2</i><h3>Find what you need</h3><p>Adopt a pet, shop products, or book a vet, groomer or trainer nearby.</p></div>
    <div class="step"><i>3</i><h3>Join the community</h3><p>Share photos, ask questions and make friends who love pets.</p></div>
   </div>
  </div></section>

  <section class="s"><div class="wrap"><div class="final">
   <div class="script">Because they deserve the best</div>
   <h2>Happy Pets. Happy Lives.</h2>
   <p>Join PawLink today and bring everything your pet needs into one simple app.</p>
   <a class="btn or" href="${u?'#/adopt':'#/auth'}">${u?'Find a pet':'Create free account'} ${I.arrow}</a>
  </div></div></section>`;
}
function doSearch(){searchQ=val('hq');location.hash='#/search';}

/* ---------- SEARCH ---------- */
function vSearch(){
  const q=searchQ.toLowerCase();
  const pets=allPets().filter(p=>(p.name+' '+p.breed+' '+p.type+' '+p.city).toLowerCase().includes(q));
  const prods=PRODUCTS.filter(p=>(p.name+' '+p.cat).toLowerCase().includes(q));
  const svcs=SERVICES.filter(s=>(s.name+' '+s.type+' '+s.area).toLowerCase().includes(q));
  const none=!pets.length&&!prods.length&&!svcs.length;
  return page('Search results',searchQ?`Showing results for “${esc(searchQ)}”`:'Type something in the search box on the home page.')+
   (none?'<div class="empty">Nothing found. Try “dog”, “food” or “grooming”.</div>':'')+
   (pets.length?`<h3 style="color:var(--p)">Pets</h3><div class="grid">${pets.map(petCard).join('')}</div>`:'')+
   (prods.length?`<h3 style="color:var(--p);margin-top:26px">Products</h3><div class="grid">${prods.map(prodCard).join('')}</div>`:'')+
   (svcs.length?`<h3 style="color:var(--p);margin-top:26px">Services</h3><div class="sgrid">${svcs.map(svcCard).join('')}</div>`:'')+'</div>';
}

/* ---------- AUTH ---------- */
let authMode='login';
function vAuth(){
  if(me())return `<div class="wrap"><div class="box" style="max-width:480px;margin:40px auto;text-align:center"><h3>You are logged in</h3><p class="meta">${esc(me().email)}</p><a class="btn" href="#/profile">Go to my profile</a></div></div>`;
  const reg=authMode==='register';
  return `<div class="wrap"><div class="auth"><div class="l"><div class="circ"><img src="${IMG.logo_icon}" alt=""></div><h2 style="color:#fff;margin:0">Welcome to PawLink</h2><p style="margin:0;opacity:.9">Connect • Care • Companion</p><p style="margin:10px 0 0;opacity:.85;font-size:14px">One platform for adoption, products, grooming, vet care and a loving community.</p></div>
  <div class="r"><div class="tabs"><button class="${!reg?'on':''}" data-act="authMode" data-id="login">Log in</button><button class="${reg?'on':''}" data-act="authMode" data-id="register">Register</button></div>
  <div class="form">${reg?`<input id="f-name" placeholder="Full name"><select id="f-city">${CITIES.map(c=>`<option>${c}</option>`).join('')}</select>`:''}
  <input id="f-email" type="email" placeholder="Email address"><input id="f-pass" type="password" placeholder="Password (min 6 characters)">
  <button class="btn" data-act="${reg?'doRegister':'doLogin'}">${reg?'Create account':'Log in'}</button></div></div></div></div>`;
}
function doRegister(){
  const name=val('f-name'),email=val('f-email').toLowerCase(),pass=val('f-pass'),city=val('f-city');
  if(!name||!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email))return toast('Enter your name and a valid email');
  if(pass.length<6)return toast('Password must be at least 6 characters');
  if(db.users.some(u=>u.email===email))return toast('This email is already registered');
  db.users.push({name,email,pass,city});db.session=email;save();toast('Welcome to PawLink! 🐾');location.hash=nextRoute;nextRoute='#/home';
}
function doLogin(){
  const email=val('f-email').toLowerCase(),pass=val('f-pass');
  const u=db.users.find(x=>x.email===email&&x.pass===pass);if(!u)return toast('Wrong email or password');
  db.session=email;save();toast('Logged in');location.hash=nextRoute;nextRoute='#/home';
}

/* ---------- ADOPT ---------- */
function vAdopt(){
  return page('Pet Adoption','Find your perfect companion. Search, filter and send an adoption request.')+
  `<div class="bar"><input id="aq" placeholder="Search by name or breed…" data-input="adopt">
   <select id="at" data-input="adopt"><option value="">All pets</option><option>Dog</option><option>Cat</option><option>Other</option></select>
   <select id="ac" data-input="adopt"><option value="">All cities</option>${CITIES.map(c=>`<option>${c}</option>`).join('')}</select>
   <button class="btn or" data-act="listForm">+ List a pet</button></div><div class="grid" id="results"></div></div>`;
}
function adoptList(){
  const q=val('aq').toLowerCase(),t=val('at'),c=val('ac');
  const l=allPets().filter(p=>(!q||(p.name+' '+p.breed).toLowerCase().includes(q))&&(!t||p.type===t)&&(!c||p.city===c));
  $('#results').innerHTML=l.length?l.map(petCard).join(''):'<div class="empty">No pets match your search.</div>';
}
function listForm(){
  if(needLogin())return;
  modal(`<h3>List a pet for adoption</h3><p class="meta" style="margin:0 0 12px">Help a pet find a loving home.</p><div class="form">
  <input id="l-name" placeholder="Pet name"><select id="l-type"><option>Dog</option><option>Cat</option><option>Other</option></select>
  <input id="l-breed" placeholder="Breed"><input id="l-age" placeholder="Age (e.g. 2 years)"><select id="l-sex"><option>Male</option><option>Female</option></select>
  <select id="l-city">${CITIES.map(c=>`<option>${c}</option>`).join('')}</select><textarea id="l-about" rows="3" placeholder="Short description"></textarea>
  <button class="btn" data-act="saveListing">Publish listing</button><button class="btn ghost" data-act="close">Cancel</button></div>`);
}
function saveListing(){
  const name=val('l-name');if(!name)return toast('Pet name is required');const type=val('l-type');
  db.listed.unshift({id:'u'+uid(),owner:db.session,name,type,breed:val('l-breed')||'Mixed',age:val('l-age')||'—',sex:val('l-sex'),city:val('l-city'),emoji:type==='Dog'?'🐶':type==='Cat'?'🐱':'🐾',about:val('l-about')||'No description yet.'});
  save();closeModal();toast('Listing published');adoptList();
}

/* ---------- SHOP ---------- */
function vShop(){
  return page('Pet Food & Essentials','Food, toys, accessories and health care for every pet.')+
  `<div class="bar"><input id="sq" placeholder="Search products…" data-input="shop">
   <select id="sc" data-input="shop"><option value="">All categories</option><option>Food</option><option>Accessories</option><option>Toys</option><option>Health Care</option></select>
   <select id="ss" data-input="shop"><option value="">Sort: Popular</option><option value="lo">Price: low to high</option><option value="hi">Price: high to low</option></select></div>
  <div class="grid" id="results"></div></div>`;
}
function shopList(){
  const q=val('sq').toLowerCase(),c=val('sc'),s=val('ss');
  let l=PRODUCTS.filter(p=>(!q||p.name.toLowerCase().includes(q))&&(!c||p.cat===c));
  if(s==='lo')l.sort((a,b)=>a.price-b.price);if(s==='hi')l.sort((a,b)=>b.price-a.price);
  $('#results').innerHTML=l.length?l.map(prodCard).join(''):'<div class="empty">No products found.</div>';
}
function addCart(id){const c=db.cart.find(x=>x.id===id);if(c)c.qty++;else db.cart.push({id,qty:1});save();header('shop');toast('Added to cart 🛒');}
function vCart(){
  if(!db.cart.length)return page('Your cart','Review your items before placing the order.')+`<div class="empty">Your cart is empty.<br><br><a class="btn" href="#/shop">Go shopping</a></div></div>`;
  let total=0;
  const rows=db.cart.map(c=>{const p=PRODUCTS.find(x=>x.id===c.id);total+=p.price*c.qty;
   return `<div class="item"><div><b>${esc(p.name)}</b><div class="meta">${inr(p.price)} each</div></div>
   <div style="display:flex;gap:10px;align-items:center"><button class="btn ghost sm" data-act="qty" data-id="${c.id}" data-d="-1">−</button><b>${c.qty}</b><button class="btn ghost sm" data-act="qty" data-id="${c.id}" data-d="1">+</button></div><b>${inr(p.price*c.qty)}</b></div>`;}).join('');
  return page('Your cart','Review your items before placing the order.')+`<div class="box">${rows}<div class="item" style="padding-top:18px"><h3 style="margin:0">Total: ${inr(total)}</h3><button class="btn or" data-act="checkout">Place order (Pay on delivery)</button></div>
  <p class="meta" style="margin:8px 0 0">Online payment is planned for a later version of PawLink.</p></div></div>`;
}
function qty(id,d){const c=db.cart.find(x=>x.id===id);if(!c)return;c.qty+=d;if(c.qty<=0)db.cart=db.cart.filter(x=>x.id!==id);save();route();}
function checkout(){
  if(needLogin())return;
  const items=db.cart.map(c=>{const p=PRODUCTS.find(x=>x.id===c.id);return{name:p.name,qty:c.qty,price:p.price};});
  db.orders.unshift({id:'o'+uid(),owner:db.session,items,total:items.reduce((a,i)=>a+i.price*i.qty,0),date:new Date().toLocaleDateString('en-IN'),status:'Placed'});
  db.cart=[];save();toast('Order placed! 🎉');location.hash='#/profile';
}

/* ---------- SERVICES ---------- */
let svcType='All';
function vServices(){
  return page('Pet Services','Find vets, groomers and trainers near you and book an appointment.')+
  `<div class="tabs">${['All','Veterinary','Grooming','Training'].map(t=>`<button class="${svcType===t?'on':''}" data-act="svcType" data-id="${t}">${t}</button>`).join('')}</div>
  <div class="bar"><input id="vq" placeholder="Search by name…" data-input="svc">
   <select id="va" data-input="svc"><option value="">All areas</option>${AREAS.map(a=>`<option>${a}</option>`).join('')}</select>
   <select id="vs" data-input="svc"><option value="">Sort: Top rated</option><option value="lo">Price: low to high</option></select></div>
  <div class="sgrid" id="results"></div></div>`;
}
function svcList(){
  const q=val('vq').toLowerCase(),a=val('va'),s=val('vs');
  let l=SERVICES.filter(x=>(svcType==='All'||x.type===svcType)&&(!q||x.name.toLowerCase().includes(q))&&(!a||x.area===a));
  l.sort((x,y)=>s==='lo'?x.price-y.price:y.rating-x.rating);
  $('#results').innerHTML=l.length?l.map(svcCard).join(''):'<div class="empty">No services match.</div>';
}
function book(id){
  if(needLogin())return;
  const s=SERVICES.find(x=>x.id===id),pets=mine(db.myPets),today=new Date().toISOString().slice(0,10);
  modal(`<h3>Book ${esc(s.name)}</h3><p class="meta" style="margin:0 0 12px">${s.type} • ${esc(s.area)} • from ${inr(s.price)}</p><div class="form">
  ${pets.length?`<select id="b-pet">${pets.map(p=>`<option>${esc(p.name)}</option>`).join('')}</select>`:`<input id="b-pet" placeholder="Pet name">`}
  <input id="b-date" type="date" min="${today}" value="${today}">
  <select id="b-time">${['10:00 AM','11:00 AM','12:00 PM','2:00 PM','4:00 PM','6:00 PM'].map(t=>`<option>${t}</option>`).join('')}</select>
  <textarea id="b-note" rows="2" placeholder="Notes (optional)"></textarea>
  <button class="btn" data-act="confirmBook" data-id="${id}">Confirm booking</button><button class="btn ghost" data-act="close">Cancel</button></div>`);
}
function confirmBook(id){
  const s=SERVICES.find(x=>x.id===id),pet=val('b-pet'),date=val('b-date');if(!pet||!date)return toast('Enter pet name and date');
  db.bookings.unshift({id:'b'+uid(),owner:db.session,service:s.name,type:s.type,area:s.area,pet,date,time:val('b-time'),status:'Confirmed'});
  save();closeModal();toast('Booking confirmed ✅');
}

/* ---------- COMMUNITY ---------- */
function vCommunity(){
  const u=me(),pets=mine(db.myPets);
  return page('Pet Community','Share your pet\'s moments, ask questions and help other pet lovers.')+
  `<div class="box">${u?`<div class="composer"><textarea id="p-text" rows="2" placeholder="What's your pet up to today?"></textarea>
   <div class="bar" style="margin:0">${pets.length?`<select id="p-pet">${pets.map(p=>`<option>${esc(p.name)}</option>`).join('')}</select>`:`<input id="p-pet" placeholder="Pet name (optional)">`}<button class="btn" data-act="post" style="margin-left:auto">Post</button></div></div>`:
   `<div style="display:flex;justify-content:space-between;align-items:center;gap:10px;flex-wrap:wrap"><span class="meta">Log in to post, like and comment.</span><a class="btn sm" href="#/auth">Log in</a></div>`}</div>
  <div id="feed"></div></div>`;
}
function feed(){
  $('#feed').innerHTML=db.posts.map(p=>{const liked=p.likedBy.includes(db.session);
   return `<div class="box post"><div class="who"><div class="av">${esc(p.author.charAt(0).toUpperCase())}</div><div><b>${esc(p.author)}</b><div class="meta">${p.pet?esc(p.pet)+' • ':''}${esc(p.time)}</div></div></div>
   <div>${esc(p.text)}</div>${p.img?`<img class="pimg" src="${IMG[p.img]}" alt="">`:''}
   <div class="acts"><button class="act ${liked?'on':''}" data-act="like" data-id="${p.id}">${I.heart} ${(p.base||0)+p.likedBy.length}</button><span class="act" style="cursor:default">${I.comment} ${p.comments.length}</span></div>
   ${p.comments.map(c=>`<div class="cm"><b>${esc(c.by)}:</b> ${esc(c.text)}</div>`).join('')}
   <div class="cmrow"><input id="c-${p.id}" placeholder="Write a comment…"><button class="btn sm" data-act="comment" data-id="${p.id}">Send</button></div></div>`;}).join('');
}
function post(){
  if(needLogin())return;const text=val('p-text');if(!text)return toast('Write something first');
  db.posts.unshift({id:'x'+uid(),author:me().name,pet:val('p-pet'),text,time:'Just now',base:0,likedBy:[],comments:[]});save();$('#p-text').value='';feed();toast('Posted!');
}
function like(id){if(needLogin())return;const p=db.posts.find(x=>x.id===id),i=p.likedBy.indexOf(db.session);i>=0?p.likedBy.splice(i,1):p.likedBy.push(db.session);save();feed();}
function comment(id){if(needLogin())return;const t=val('c-'+id);if(!t)return;db.posts.find(x=>x.id===id).comments.push({by:me().name,text:t});save();feed();}

/* ---------- PROFILE ---------- */
function vProfile(){
  const u=me();if(!u){nextRoute='#/profile';return vAuth();}
  const pets=mine(db.myPets),apps=mine(db.apps),bk=mine(db.bookings),ord=mine(db.orders),fv=favs().map(id=>allPets().find(p=>p.id===id)).filter(Boolean),myPosts=db.posts.filter(p=>p.author===u.name).length;
  const list=(a,f,e)=>a.length?a.map(f).join(''):`<div class="meta">${e}</div>`;
  return page('My Profile','Manage your pets, orders, bookings and adoption requests.')+
  `<div class="box"><div class="prof"><div class="bigav">${esc(u.name.charAt(0).toUpperCase())}</div><div style="flex:1"><h3 style="margin:0">${esc(u.name)}</h3><div class="meta">${esc(u.email)} • ${esc(u.city)}</div></div><button class="btn red sm" data-act="logout">Log out</button></div>
   <div class="pstats"><div><b>${pets.length}</b><span>Pets</span></div><div><b>${ord.length}</b><span>Orders</span></div><div><b>${bk.length}</b><span>Bookings</span></div><div><b>${fv.length}</b><span>Saved</span></div><div><b>${myPosts}</b><span>Posts</span></div></div></div>
  <div class="box"><h3>My pets</h3>${list(pets,p=>`<div class="item"><div><b>${p.emoji} ${esc(p.name)}</b><div class="meta">${esc(p.type)} • ${esc(p.breed)} • ${esc(p.age)}</div></div><button class="btn red sm" data-act="delPet" data-id="${p.id}">Remove</button></div>`,'No pet profiles yet. Add your first pet below.')}
   <div class="form wide" style="margin-top:14px"><input id="m-name" placeholder="Pet name"><select id="m-type"><option>Dog</option><option>Cat</option><option>Other</option></select><input id="m-breed" placeholder="Breed"><input id="m-age" placeholder="Age"><button class="btn" data-act="addPet">Save pet</button></div></div>
  <div class="box"><h3>Adoption applications</h3>${list(apps,a=>`<div class="item"><div><b>${esc(a.petName)}</b><div class="meta">Requested on ${esc(a.date)}</div></div><span class="ok">${esc(a.status)}</span></div>`,'No adoption requests yet.')}</div>
  <div class="box"><h3>My bookings</h3>${list(bk,b=>`<div class="item"><div><b>${esc(b.service)}</b><div class="meta">${esc(b.type)} • ${esc(b.area)} • for ${esc(b.pet)} • ${esc(b.date)}, ${esc(b.time)}</div></div><span class="ok">${esc(b.status)}</span></div>`,'No bookings yet.')}</div>
  <div class="box"><h3>My orders</h3>${list(ord,o=>`<div class="item"><div><b>${inr(o.total)}</b><div class="meta">${esc(o.date)} • ${o.items.map(i=>esc(i.name)+' ×'+i.qty).join(', ')}</div></div><span class="ok">${esc(o.status)}</span></div>`,'No orders yet.')}</div>
  <div class="box"><h3>Saved pets</h3>${list(fv,p=>`<div class="item"><b>${esc(p.name)}</b><span class="meta">${esc(p.breed)} • ${esc(p.city)}</span></div>`,'Tap the heart on a pet to save it here.')}</div></div>`;
}
function addPet(){
  const name=val('m-name');if(!name)return toast('Pet name is required');const type=val('m-type');
  db.myPets.push({id:'m'+uid(),owner:db.session,name,type,breed:val('m-breed')||'—',age:val('m-age')||'—',emoji:type==='Dog'?'🐶':type==='Cat'?'🐱':'🐾'});save();toast('Pet added 🐾');route();
}

/* ---------- events ---------- */
document.addEventListener('click',e=>{
  const el=e.target.closest('[data-act]');if(!el)return;const a=el.dataset.act,id=el.dataset.id;
  if(a==='bg'){if(e.target===el)closeModal();return;}
  const A={
   authMode:()=>{authMode=id;route();},doRegister,doLogin,doSearch,
   logout:()=>{db.session=null;save();toast('Logged out');location.hash='#/home';route();},
   adopt:()=>{if(needLogin())return;const p=allPets().find(x=>x.id===id);db.apps.unshift({id:'r'+uid(),owner:db.session,petId:id,petName:p.name,date:new Date().toLocaleDateString('en-IN'),status:'Pending'});save();toast('Request sent for '+p.name+' 🐾');route();},
   fav:()=>{if(needLogin())return;const f=db.favs[db.session]=db.favs[db.session]||[];const i=f.indexOf(id);i>=0?f.splice(i,1):f.push(id);save();route();},
   unlist:()=>{db.listed=db.listed.filter(x=>x.id!==id);save();route();},
   listForm,saveListing,close:closeModal,
   addCart:()=>addCart(id),qty:()=>qty(id,+el.dataset.d),checkout,
   svcType:()=>{svcType=id;route();},book:()=>book(id),confirmBook:()=>confirmBook(id),
   post,like:()=>like(id),comment:()=>comment(id),addPet,
   delPet:()=>{db.myPets=db.myPets.filter(x=>x.id!==id);save();route();}
  };
  if(A[a])A[a]();
});
document.addEventListener('input',e=>{const t=e.target.dataset&&e.target.dataset.input;if(!t)return;({adopt:adoptList,shop:shopList,svc:svcList})[t]();});
document.addEventListener('keydown',e=>{if(e.key==='Enter'&&e.target.id==='hq')doSearch();});
route();
