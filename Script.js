var API_KEY = "sk-2rVec8YNjEnpG1eAVDTQbfpo4N0mSo7UgBTALRRdrEkQZsw6";
var SYSTEM_PROMPT = "تو دکتر هارلی سایر متخصص Poppy Playtime هستی. فقط فارسی و باحال جواب بده.";
function setTheme(t){document.body.className=t;try{localStorage.setItem("siteTheme",t)}catch(e){}}
try{var st=localStorage.getItem("siteTheme")||"";if(st)document.body.className=st}catch(e){}
function hideLoader(){var l=document.getElementById("loader");if(l)l.style.display="none";}
document.addEventListener("DOMContentLoaded",function(){setTimeout(hideLoader,800);});
setTimeout(hideLoader,3500);
var cv=document.getElementById("galaxy"),cx=cv.getContext("2d"),stars=[];
function sizeCv(){cv.width=innerWidth;cv.height=innerHeight}sizeCv();addEventListener("resize",sizeCv);
for(var i=0;i<130;i++)stars.push({x:Math.random()*2000,y:Math.random()*2000,r:Math.random()*2+0.5,s:Math.random()*0.6+0.1});
(function anim(){cx.clearRect(0,0,cv.width,cv.height);for(var k=0;k<stars.length;k++){var p=stars[k];p.y+=p.s;if(p.y>cv.height)p.y=0;cx.beginPath();cx.arc(p.x%cv.width,p.y,p.r,0,7);cx.fillStyle=k%3==0?"#00e5ff":"#fff";cx.fill()}requestAnimationFrame(anim)})();
var cur=document.getElementById("cursor");
document.addEventListener("mousemove",function(e){cur.style.left=e.clientX+"px";cur.style.top=e.clientY+"px"});
var txt="کت‌نپ، هاگی‌واگی، مامی، پروتوتایپ... همه رازها اینجاست 👾",ti=0;
(function type(){if(ti<=txt.length){var el=document.getElementById("typing");if(el)el.innerText=txt.slice(0,ti);ti++;setTimeout(type,55)}})();
window.addEventListener("scroll",function(){var b=document.getElementById("topBtn");b.style.display=scrollY>600?"block":"none"});
var CHARS=[
{id:"huggy",name:"هاگی واگی",emoji:"💙",tag:"چپتر ۱ | هیولا",cat:"boss",desc:"غول آبی ۵ متری با بغل مرگبار. آخر چپتر ۱ سقوط می‌کنه ولی تئوری‌ها میگن زنده‌ست.",power:"قدرت: بغل و تعقیب",weak:"ضعف: سقوط از ارتفاع",debut:"اولین حضور: چپتر ۱"},
{id:"kissy",name:"کیسی میسی",emoji:"💋",tag:"متحد | صورتی",cat:"ally",desc:"نسخه صورتی و مهربون هاگی. تو چپتر ۲ و ۴ جونت رو نجات میده.",power:"قدرت: کمک و نجات",weak:"ضعف: مهربونیه!",debut:"اولین حضور: چپتر ۱"},
{id:"mommy",name:"مامی لانگ لگز",emoji:"🕷️",tag:"باس چپتر ۲",cat:"boss",desc:"مامان عنکبوتی با بدن کشسان. آخرش پروتوتایپ تیکه‌تیکه‌ش می‌کنه.",power:"قدرت: کشسانی و تار",weak:"ضعف: پروتوتایپ",debut:"اولین حضور: چپتر ۲"},
{id:"catnap",name:"کت‌نپ",emoji:"🐱",tag:"باس چپتر ۳",cat:"boss",desc:"گربه بنفش خدای خواب. گاز خواب‌آور می‌زنه و خادم پروتوتایپه.",power:"قدرت: گاز خواب",weak:"ضعف: نور و برق",debut:"اولین حضور: چپتر ۳"},
{id:"dogday",name:"داگ‌دی",emoji:"🐶",tag:"قهرمان | نارنجی",cat:"ally",desc:"سگ نارنجی رهبر اسمایلینگ کریترز و رفیق بازیکن.",power:"قدرت: رهبری و وفاداری",weak:"ضعف: اسیر شدن",debut:"اولین حضور: چپتر ۳"},
{id:"poppy",name:"پاپی",emoji:"🎀",tag:"کلید راز",cat:"ally",desc:"عروسک دختر باهوش. نقشه نابودی پروتوتایپ رو داره.",power:"قدرت: هوش و نقشه",weak:"ضعف: کوچیک بودنش",debut:"اولین حضور: چپتر ۱"},
{id:"harley",name:"دکتر هارلی سایر",emoji:"🧠",tag:"مغز متفکر",cat:"boss",desc:"دانشمند دیوونه کارخانه و خالق پروتوتایپ. تو چپتر ۴ رباتیک برمی‌گرده.",power:"قدرت: مغز و تکنولوژی",weak:"ضعف: غرورش",debut:"اولین حضور: چپتر ۳ (نوارها)"},
{id:"proto",name:"پروتوتایپ 1006",emoji:"👹",tag:"دشمن نهایی",cat:"boss",desc:"آزمایش ۱۰۰۶. خطرناک‌ترین موجود با دست قلابی.",power:"قدرت: همه‌چیز!",weak:"ضعف: هنوز نامعلوم",debut:"اولین حضور: چپتر ۲ (سایه)"},
{id:"delight",name:"میس دیلایت",emoji:"👩‍🏫",tag:"چپتر ۳ | معلم",cat:"boss",desc:"معلم مدرسه پلی‌کر که با خط‌کش حمله می‌کنه.",power:"قدرت: سرعت و خط‌کش",weak:"ضعف: صدا",debut:"اولین حضور: چپتر ۳"},
{id:"crafty",name:"کرفتی کورن",emoji:"🦄",tag:"اسمایلینگ",cat:"smile",desc:"تک‌شاخ سفید هنرمند.",power:"قدرت: دود بنفش",weak:"ضعف: تاریکی",debut:"اولین حضور: چپتر ۳"},
{id:"boxy",name:"باکسی بو",emoji:"📦",tag:"باس مخفی",cat:"boss",desc:"جعبه قرمز با دندون‌های وحشی. باس Project Playtime.",power:"قدرت: پرش و گاز",weak:"ضعف: جعبه بودنش",debut:"اولین حضور: Project Playtime"},
{id:"yarnaby",name:"یارنبی",emoji:"🦁",tag:"چپتر ۴ | شیر نخی",cat:"smile",desc:"شیر نخی چپتر ۴ که آخرش فداکاری می‌کنه.",power:"قدرت: نخ و چنگال",weak:"ضعف: آتیش",debut:"اولین حضور: چپتر ۴"}
];
var curFilter="all";
function filterChar(f,btn){curFilter=f;document.querySelectorAll(".fbtn").forEach(function(b){b.classList.remove("active")});if(btn)btn.classList.add("active");renderChars()}
document.getElementById("charSearch").addEventListener("input",renderChars);
function renderChars(){
var saved={};try{saved=JSON.parse(localStorage.getItem("charImgs")||"{}")}catch(e){}
var q=(document.getElementById("charSearch").value||"").trim();
var html="";
for(var k=0;k<CHARS.length;k++){var c=CHARS[k];
if(curFilter!=="all"&&c.cat!==curFilter)continue;
if(q&&c.name.indexOf(q)===-1)continue;
var im=saved[c.id]?'<img class="cimg" src="'+saved[c.id]+'">':'<div class="cemoji">'+c.emoji+'</div>';
html+='<div class="card char reveal vis" onclick="openModal(\''+c.id+'\')">'+im+'<h3>'+c.name+'</h3><span class="badge">'+c.tag+'</span><div class="info">'+c.desc+'</div><label class="up-label" onclick="event.stopPropagation()">📸 عکس<input type="file" accept="image/*" hidden onchange="upImg(event,\''+c.id+'\')"></label></div>';
}
document.getElementById("charGrid").innerHTML=html||"<p>چیزی پیدا نشد! 😅</p>";
}
function upImg(e,id){e.stopPropagation();var f=e.target.files[0];if(!f)return;var r=new FileReader();r.onload=function(){var s={};try{s=JSON.parse(localStorage.getItem("charImgs")||"{}")}catch(e){s={}}s[id]=r.result;try{localStorage.setItem("charImgs",JSON.stringify(s))}catch(e){alert("حجم عکس زیاده! یه عکس کوچیک‌تر بذار")}renderChars()};r.readAsDataURL(f)}
function openModal(id){var c=CHARS.find(function(x){return x.id===id});var saved={};try{saved=JSON.parse(localStorage.getItem("charImgs")||"{}")}catch(e){}
var im=saved[c.id]?'<img class="cimg" src="'+saved[c.id]+'">':'<div style="font-size:80px;text-align:center">'+c.emoji+'</div>';
document.getElementById("modalBody").innerHTML=im+"<h2>"+c.name+"</h2><span class='badge'>"+c.tag+"</span><p>"+c.desc+"</p><p>⚡ "+c.power+"<br>❌ "+c.weak+"<br>🎬 "+c.debut+"</p>";
document.getElementById("charModal").classList.add("open")}
function closeModal(){document.getElementById("charModal").classList.remove("open")}
document.getElementById("charModal").addEventListener("click",function(e){if(e.target===this)closeModal()});
renderChars();
try{var oi=localStorage.getItem("ownerImg");if(oi){var im=document.getElementById("ownerImg");im.src=oi;im.style.display="inline-block";document.getElementById("ownerEmoji").style.display="none"}}catch(e){}
document.getElementById("ownerFile").onchange=function(e){var f=e.target.files[0];if(!f)return;var r=new FileReader();r.onload=function(){try{localStorage.setItem("ownerImg",r.result)}catch(e){}var im2=document.getElementById("ownerImg");im2.src=r.result;im2.style.display="inline-block";document.getElementById("ownerEmoji").style.display="none"};r.readAsDataURL(f)};
var Q=[
{q:"هاگی واگی چه رنگی است؟",o:["آبی","قرمز","سبز","صورتی"],a:0},
{q:"باس اصلی چپتر ۲ کیست؟",o:["کت‌نپ","مامی لانگ لگز","داگ‌دی","پروتوتایپ"],a:1},
{q:"دکتر سایر چه کسی است؟",o:["نگهبان","دانشمند و خالق آزمایش‌ها","عروسک","بازیکن"],a:1},
{q:"قدرت کت‌نپ چیست؟",o:["گاز خواب‌آور","آتش","پرواز","نامرئی شدن"],a:0},
{q:"شماره آزمایش پروتوتایپ؟",o:["1006","1170","1222","1000"],a:0},
{q:"کیسی میسی چه رنگی است؟",o:["صورتی","آبی","بنفش","زرد"],a:0},
{q:"داگ‌دی رهبر کدام گروه است؟",o:["Smiling Critters","Nightmare","Toys","Scientists"],a:0},
{q:"میس دیلایت چه شغلی دارد؟",o:["معلم","دکتر","نگهبان","راننده"],a:0},
{q:"اولی چگونه کمک می‌کند؟",o:["با تلفن","با تفنگ","با ماشین","با جادو"],a:0},
{q:"نام کارخانه چیست؟",o:["Playtime Co","Poppy Factory","Horror Co","Toy House"],a:0},
{q:"یارنبی چه حیوانی است؟",o:["شیر نخی","گربه","سگ","خرگوش"],a:0},
{q:"باکسی بو شبیه چیست؟",o:["جعبه","توپ","ماشین","عروسک"],a:0},
{q:"گاز کت‌نپ چه رنگی است؟",o:["بنفش","سبز","آبی","قرمز"],a:0},
{q:"پاپی چه چیزی را می‌خواهد؟",o:["نابودی پروتوتایپ","فرار تنها","پول","بازی"],a:0},
{q:"چپتر ۴ درباره کیست؟",o:["دکتر سایر","هاگی","مامی","بابا"],a:0}
];
var qi=0,sc=0,locked=false,qt=null,tt=15;
try{document.getElementById("best").innerText="🏆 رکورد: "+(localStorage.getItem("poppyBest")||0)}catch(e){}
function beep(ok){try{var a=new (window.AudioContext||window.webkitAudioContext)();var o=a.createOscillator(),g=a.createGain();o.connect(g);g.connect(a.destination);o.frequency.value=ok?700:200;o.start();g.gain.exponentialRampToValueAtTime(0.001,a.currentTime+0.3);o.stop(a.currentTime+0.3)}catch(e){}}
function showQ(){locked=false;tt=15;var v=Q[qi];
document.getElementById("qinfo").innerText="سوال "+(qi+1)+" از "+Q.length+" | امتیاز: "+sc;
document.getElementById("qbar").style.width=(qi/Q.length*100)+"%";
var h="<h3>"+v.q+"</h3>";for(var i=0;i<v.o.length;i++)h+='<div class="qopt" id="opt'+i+'" onclick="ans('+i+')">'+v.o[i]+'</div>';
document.getElementById("qbox").innerHTML=h;
clearInterval(qt);qt=setInterval(function(){tt-=0.2;var b=document.getElementById("qtimerbar");if(b){b.style.width=(tt/15*100)+"%";b.style.background=tt<5?"#ff3355":"#00ff88"}if(tt<=0){ans(-1)}},200);
}
function ans(i){if(locked)return;locked=true;clearInterval(qt);var v=Q[qi];
document.getElementById("opt"+v.a).classList.add("correct");
if(i===v.a){sc+=10;beep(true)}else{if(i>=0)document.getElementById("opt"+i).classList.add("wrong");beep(false)}
document.getElementById("qinfo").innerText="سوال "+(qi+1)+" از "+Q.length+" | امتیاز: "+sc;
setTimeout(function(){qi++;if(qi>=Q.length)finishQuiz();else showQ()},800)}
function finishQuiz(){clearInterval(qt);document.getElementById("qbar").style.width="100%";
try{var b=parseInt(localStorage.getItem("poppyBest")||0);if(sc>b)localStorage.setItem("poppyBest",sc);document.getElementById("best").innerText="🏆 رکورد: "+localStorage.getItem("poppyBest")}catch(e){}
var msg=sc>=120?"🏆 تو خدای پاپی پلی‌تایمی!":sc>=80?"👏 عالیه! نزدیک استادی!":"💪 باید بیشتر بازی کنی!";
document.getElementById("qbox").innerHTML="<h2>"+msg+"</h2><h3>امتیاز نهایی: "+sc+" از 150</h3>"}
function restartQuiz(){qi=0;sc=0;showQ()}
showQ();
function offlineAnswer(m){
m=m.toLowerCase();
function has(){for(var i=0;i<arguments.length;i++)if(m.indexOf(arguments[i])!==-1)return true;return false}
if(has("کت","catnap","cat nap"))return "🐱 کت‌نپ گربه بنفش چپتر ۳ـه! با گاز خواب همه رو می‌خوابونه و خادم پروتوتایپه. آخرش هم برق می‌گیردش!";
if(has("هاگی","huggy"))return "💙 هاگی واگی غول آبی چپتر ۱ـه! آخرش میوفته پایین ولی همه میگن نمرده و برمی‌گرده!";
if(has("مامی","mommy"))return "🕷️ مامی لانگ لگز مامان عنکبوتی چپتر ۲ـه که آخرش پروتوتایپ می‌کشتش!";
if(has("پروتو","1006","prototype"))return "👹 پروتوتایپ آزمایش ۱۰۰۶ـه، خطرناک‌ترین موجود کارخانه با دست قلابی. دشمن نهایی کل بازیه!";
if(has("پاپی","poppy"))return "🎀 پاپی عروسک باهوشه که می‌خواد پروتوتایپ رو نابود کنه و راز کارخانه رو می‌دونه!";
if(has("سایر","harley","دکتر","doctor"))return "🧠 دکتر هارلی سایر دانشمند دیوونه کارخونه‌ست که بچه‌ها رو تبدیل به اسباب‌بازی کرد. تو چپتر ۴ ربات شده!";
if(has("داگ","dogday"))return "🐶 داگ‌دی سگ نارنجی و رهبر اسمایلینگ کریترزه، رفیقته و کمکت می‌کنه!";
if(has("کیسی","kissy"))return "💋 کیسی میسی نسخه صورتی مهربون هاگیه که دوبار جونت رو نجات میده!";
if(has("چپتر 4","چپتر ۴","chapter 4"))return "🔥 چپتر ۴ نبرد با دکتر سایر رباتیه! انفجار کارخانه و سقوط به اعماق. همه منتظر چپتر ۵ن!";
if(has("چپتر 3","چپتر ۳"))return "😴 چپتر ۳ تو یتیم‌خونه پلی‌کره با کت‌نپ و میس دیلایت!";
if(has("چپتر 2","چپتر ۲"))return "🕸️ چپتر ۲ بازی‌های مامی تو Game Stationـه!";
if(has("چپتر 1","چپتر ۱"))return "🌑 چپتر ۱ برگشت به کارخانه و فرار از هاگیه!";
if(has("سلام","درود"))return "سلام رفیق! 😎 بپرس، مثلا بگو پروتوتایپ کیه؟";
return "ببخشید! من فقط درباره پاپی پلی‌تایم جواب میدم 🌌 مثلا بپرس: کت‌نپ کیه؟ یا چپتر ۴ چی شد؟";
}
function quickAsk(t){document.getElementById("umsg").value=t;sendAI()}
function sendAI(){
var inp=document.getElementById("umsg"),m=inp.value.trim();if(!m)return;
var box=document.getElementById("chatBox");
box.innerHTML+='<div class="msg me">'+m+'</div>';inp.value="";
box.innerHTML+='<div class="msg bot" id="tmp">دکتر سایر داره فکر می‌کنه... 🤔</div>';box.scrollTop=box.scrollHeight;
if(!API_KEY){setTimeout(function(){var t=document.getElementById("tmp");if(t)t.remove();box.innerHTML+='<div class="msg bot">'+offlineAnswer(m)+'</div>';box.scrollTop=box.scrollHeight},600);return}
fetch("https://api.gapgpt.app/v1/chat/completions",{method:"POST",headers:{"Authorization":"Bearer "+API_KEY,"Content-Type":"application/json"},body:JSON.stringify({model:"gpt-4o-mini",messages:[{role:"system",content:SYSTEM_PROMPT},{role:"user",content:m}],temperature:0.7})}).then(function(r){return r.json()}).then(function(d){var t=document.getElementById("tmp");if(t)t.remove();var txt="خطا!";if(d.choices&&d.choices[0]&&d.choices[0].message)txt=d.choices[0].message.content;box.innerHTML+='<div class="msg bot">'+txt+'</div>';box.scrollTop=box.scrollHeight}).catch(function(){var t2=document.getElementById("tmp");if(t2)t2.innerText=offlineAnswer(m)});
}
document.getElementById("umsg").addEventListener("keydown",function(e){if(e.key==="Enter")sendAI()});
var io=new IntersectionObserver(function(es){es.forEach(function(en){if(en.isIntersecting)en.target.classList.add("vis")})},{threshold:0.1});
document.querySelectorAll("section .card").forEach(function(c){c.classList.add("reveal");io.observe(c)});