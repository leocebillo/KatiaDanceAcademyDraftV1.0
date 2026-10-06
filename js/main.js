var $=function(i){return document.getElementById(i)};
function flags(){
var el=$('picado');if(!el)return;
var W=window.innerWidth,SW=216,SAG=15,Y0=5,N=Math.ceil(W/SW)+1,s='';
s+='<svg xmlns="http://www.w3.org/2000/svg" width="'+W+'" height="62" viewBox="0 0 '+W+' 62" aria-hidden="true"><defs>';
s+='<linearGradient id="sh" x1="0" x2="1"><stop offset="0" stop-color="#000" stop-opacity=".2"/><stop offset=".3" stop-color="#fff" stop-opacity=".1"/><stop offset=".6" stop-color="#000" stop-opacity=".12"/><stop offset="1" stop-color="#fff" stop-opacity=".06"/></linearGradient>';
s+='<pattern id="dots" width="3.2" height="3.2" patternUnits="userSpaceOnUse"><circle cx="1.6" cy="1.6" r=".55" fill="#fff"/></pattern>';
s+='<symbol id="ua" viewBox="0 0 44 30"><rect width="44" height="15" fill="#0057b7"/><rect y="15" width="44" height="15" fill="#ffd700"/><rect width="44" height="30" fill="url(#sh)"/></symbol>';
s+='<symbol id="us" viewBox="0 0 44 30">';
for(var r=0;r<13;r++){s+='<rect y="'+(r*30/13).toFixed(2)+'" width="44" height="2.31" fill="'+(r%2?'#fff':'#b22234')+'"/>'}
s+='<rect width="17.6" height="16.2" fill="#3c3b6e"/><rect width="17.6" height="16.2" fill="url(#dots)"/><rect width="44" height="30" fill="url(#sh)"/></symbol></defs>';
var str='',fl='';
for(var i=0;i<N;i++){
var x0=i*SW;
str+='<path d="M'+x0+','+Y0+' Q'+(x0+SW/2)+','+(Y0+2*SAG)+' '+(x0+SW)+','+Y0+'" fill="none" stroke="#e8dcf7" stroke-width="1.6"/><circle cx="'+x0+'" cy="'+Y0+'" r="2.4" fill="#e8dcf7"/>';
for(var k=0;k<4;k++){
var t=(k+.5)/4,px=x0+SW*t,py=Y0+4*SAG*t*(1-t),idx=i*4+k;
fl+='<g transform="translate('+px.toFixed(1)+','+(py-1).toFixed(1)+')"><g class="fl" style="animation-delay:-'+((idx*0.83)%4.6).toFixed(2)+'s;animation-duration:'+(4+(idx%3)*0.7).toFixed(1)+'s"><use href="#'+(idx%2?'ua':'us')+'" x="-22" y="0" width="44" height="30"/><rect x="-3" y="-4" width="6" height="11" rx="1.5" fill="#d9b27c"/><rect x="-3" y="-4" width="6" height="2.5" rx="1" fill="#f0d19e"/></g></g>';
}}
el.innerHTML=s+str+fl+'</svg>';
}
flags();window.addEventListener('resize',flags);

if($("pkgs")){

var P=[{id:'drop',t:'Placeholder',d:'Placeholder',p:15,n:'Placeholder'},{id:'four',t:'Placeholder',d:'Placeholder',p:52,n:'Placeholder',tag:'Most popular'},{id:'month',t:'Placeholder',d:'Placeholder',p:99,n:'Placeholder'},{id:'kids',t:'Placeholder',d:'Placeholder',p:60,n:'Placeholder'}];
var M=[['Card','card'],['Zelle','Send to pay@bailaconkatia.com'],['Cash App','Send to $BailaConKatia'],['At the studio','Pay when you arrive. We hold your spot for 48 hours.']];
var sel=P[1],pm='Card';

var pk=$('pkgs');
function drawP(){pk.innerHTML='';P.forEach(function(x){var b=document.createElement('button');b.type='button';b.className='pkg';b.setAttribute('aria-pressed',x===sel);b.innerHTML=(x.tag?'<span class="tag">'+x.tag+'</span>':'')+'<span><strong>'+x.t+'</strong><small>'+x.d+'</small></span><span><span class="pr"><sup>$</sup>'+x.p+'</span><em>'+x.n+'</em></span>';b.onclick=function(){sel=x;drawP()};pk.appendChild(b)});$('tot').textContent='$'+sel.p}
function drawM(){var t=$('tabs');t.innerHTML='';M.forEach(function(m){var b=document.createElement('button');b.type='button';b.textContent=m[0];b.setAttribute('aria-pressed',m[0]===pm);b.onclick=function(){pm=m[0];drawM()};t.appendChild(b)});
var c=pm==='Card';$('card').style.display=c?'block':'none';var a=$('alt');a.style.display=c?'none':'block';if(!c){a.textContent=M.filter(function(m){return m[0]===pm})[0][1]}}
$('f').onsubmit=function(e){e.preventDefault();var d=$('done');var n=$('n').value.trim(),em=$('e').value.trim();
if(!n||em.indexOf('@')<1){d.style.display='block';d.style.background='#ffe9ee';d.style.color='#7a0a2a';d.textContent='Add your name and a valid email to continue.';return}
d.style.display='block';d.style.background='#e9ffe9';d.style.color='#0d4a1c';d.textContent='You are in, '+n.split(' ')[0]+'! '+sel.t+' reserved ($'+sel.p+', '+pm+'). A confirmation is on its way to '+em+'.'};
drawP();drawM();
}
if($("gal")){

var T={home:'Baila con Katia Dance Academy | Rio Grande Valley',classes:'Classes',about:'About Katia',pricing:'Pricing and sign up',contact:'Contact and location'};
var PHOTOS=[];/* add class photos: {src:'data:image/jpeg;base64,...',cap:'Placeholder'} */
var CAPS=['Placeholder','Placeholder','Placeholder','Placeholder','Placeholder','Placeholder'];
var g=document.getElementById('gal'),gh='';for(var k=0;k<6;k++){var ph=PHOTOS[k];gh+='<figure>'+(ph?'<img src="'+ph.src+'" alt="'+(ph.cap||CAPS[k])+'" loading="lazy">':'<div class="ph">Class photo<br>goes here</div>')+'<figcaption>'+(ph&&ph.cap||CAPS[k])+'</figcaption></figure>'}g.innerHTML=gh;


}
