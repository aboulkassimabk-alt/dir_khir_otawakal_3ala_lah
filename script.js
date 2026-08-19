const genBtn=document.getElementById('genBtn');
const promptInput=document.getElementById('promptInput');
const player=document.getElementById('videoPlayer');
const progress=document.getElementById('progress');
const fill=document.getElementById('fill');
const pText=document.getElementById('pText');
const dlBtn=document.getElementById('dlBtn');

genBtn.onclick=()=>{
  if(!promptInput.value.trim()){alert('كتب وصف المشهد أولا!');return}
  genBtn.disabled=true; genBtn.textContent='⏳ جاري التوليد...';
  player.innerHTML='⚙️ كنولد لك الفيديو مجانا...'; progress.classList.remove('hidden'); dlBtn.classList.add('hidden');
  let p=0; let iv=setInterval(()=>{p+=Math.random()*12; if(p>90)p=90; fill.style.width=p+'%'; pText.textContent=Math.floor(p)+'%';},400);
  setTimeout(()=>{clearInterval(iv); fill.style.width='100%'; pText.textContent='تم بنجاح! ✅ مجاني';
    player.innerHTML='<video autoplay loop muted controls><source src=https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4 type=video/mp4></video>';
    progress.classList.add('hidden'); dlBtn.classList.remove('hidden'); genBtn.disabled=false; genBtn.textContent='توليد مجاني 🚀';
    // زيد مشهد جديد فالـ timeline
    const s=document.createElement('div'); s.className='scene active'; s.innerHTML='<div class=thumb>مشهد جديد</div><span>5ث</span>'; document.getElementById('scenes').appendChild(s);
  },5000);
};

dlBtn.onclick=()=>{
  const a=document.createElement('a'); a.href='https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'; a.download='brahim-flow-free.mp4'; a.click();
};

document.getElementById('addScene').onclick=()=>{
  const s=document.createElement('div'); s.className='scene'; s.innerHTML='<div class=thumb>مشهد +</div><span>5ث</span>'; document.getElementById('scenes').appendChild(s);
};