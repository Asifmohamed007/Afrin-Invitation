document.addEventListener("DOMContentLoaded",()=>{AOS.init({duration:1200,once:!0,mirror:!0});let e=document.getElementById("bgMusic"),t=()=>{e.play().catch(e=>{console.log("Autoplay prevented by browser policy")}),document.removeEventListener("click",t),document.removeEventListener("touchstart",t)};document.addEventListener("click",t),document.addEventListener("touchstart",t),e.play().catch(e=>{console.log("Waiting for user interaction to play music")});let n=document.getElementById("scroll-top");window.addEventListener("scroll",()=>{window.pageYOffset>100?n.classList.add("visible"):n.classList.remove("visible")}),n.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})}),document.querySelector(".save-date-btn").addEventListener("click",()=>{let e={title:"Yaser Arafath & Afrin Thabeeba's Wedding Reception ❤️",description:"Join us at Grace Family Hall for a wonderful Noon with Lunch, celebrations, and lasting memories.",location:"Grace Family Hall",start:new Date("2025-05-25T11:30:00"),end:new Date("2025-05-25T14:00:00")},t=e.start.toISOString().replace(/[-:]|\.\d{3}/g,""),n=e.end.toISOString().replace(/[-:]|\.\d{3}/g,""),a=`https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(e.title)}&details=${encodeURIComponent(e.description)}&location=${encodeURIComponent(e.location)}&dates=${t}/${n}&sf=true&output=xml`;window.open(a,"_blank")}),document.querySelector(".download-btn").addEventListener("click",async()=>{let e=document.querySelector(".invitation-card");try{let t=await html2canvas(e,{scale:2,useCORS:!0,logging:!1}),n=t.toDataURL("image/png"),a=document.createElement("a");a.download="wedding-invitation.png",a.href=n,a.click()}catch(o){console.error("Error generating invitation:",o)}}),document.querySelector(".view-venue-btn").addEventListener("click",()=>{document.querySelector(".map-container").scrollIntoView({behavior:"smooth",block:"center"});window.open("https://maps.app.goo.gl/buBsVSxyBRcQBBZr9","_blank")}),document.querySelectorAll(".social-btn").forEach(e=>{e.addEventListener("mouseenter",()=>{e.style.transform="scale(1.1) translateY(-5px) rotate(360deg)"}),e.addEventListener("mouseleave",()=>{e.style.transform="scale(1) translateY(0) rotate(0)"})});let a=()=>{let e=document.createElement("i");e.className="fas fa-heart",e.style.left=100*Math.random()+"vw",e.style.animationDuration=3*Math.random()+2+"s",e.style.fontSize=20*Math.random()+10+"px",e.style.color=`rgba(255, ${50*Math.random()+107}, ${50*Math.random()+107}, ${.3*Math.random()+.2})`,e.style.position="fixed",e.style.top="-5vh",e.style.animation="float 3s linear infinite",document.body.appendChild(e),setTimeout(()=>{e.remove()},5e3)};setInterval(a,300)});const style=document.createElement("style");style.textContent=`
    @keyframes float {
        0% {
            transform: translateY(0) rotate(0deg);
            opacity: 1;
        }
        100% {
            transform: translateY(100vh) rotate(360deg);
            opacity: 0;
        }
    }
`,document.head.appendChild(style),document.addEventListener("contextmenu",e=>e.preventDefault()),document.addEventListener("keydown",function(e){"F12"===e.key&&e.preventDefault(),e.ctrlKey&&"u"===e.key&&e.preventDefault(),e.ctrlKey&&e.shiftKey&&"I"===e.key&&e.preventDefault(),e.ctrlKey&&e.shiftKey&&"J"===e.key&&e.preventDefault()}),document.addEventListener("contextmenu",function(e){e.preventDefault()});const giftBox=document.getElementById("gift-box"),animatedItems=document.getElementById("animated-items"),chocolateMessage=document.getElementById("chocolate-message");giftBox.addEventListener("click",()=>{giftBox.src="assets/gift_open.png",animatedItems.classList.remove("hidden"),setTimeout(()=>{animatedItems.classList.add("pop-effect")},100),setTimeout(()=>{chocolateMessage.classList.remove("hidden")},1e3),setTimeout(()=>{giftBox.src="assets/gift_close.png",animatedItems.classList.add("hidden"),chocolateMessage.classList.add("hidden")},6e3)});var countDownDate=new Date("May 25, 2025 11:30:00").getTime(),x=setInterval(function(){var e=new Date().getTime(),t=countDownDate-e;document.getElementById("days").innerHTML=Math.floor(t/864e5),document.getElementById("hours").innerHTML=Math.floor(t%864e5/36e5),document.getElementById("minutes").innerHTML=Math.floor(t%36e5/6e4),document.getElementById("seconds").innerHTML=Math.floor(t%6e4/1e3),t<0&&(clearInterval(x),document.getElementById("days").innerHTML="0",document.getElementById("hours").innerHTML="0",document.getElementById("minutes").innerHTML="0",document.getElementById("seconds").innerHTML="0",document.querySelector(".countdown-container").style.display="none",document.getElementById("message").style.display="block")},1e3);