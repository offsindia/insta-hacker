
// Add the official WhatsApp business number later. Use international digits only, e.g. 919876543210.
const WHATSAPP_NUMBER = "";
const WHATSAPP_MESSAGE = "Hello, I would like to discuss an authorized cybersecurity service.";
document.addEventListener("DOMContentLoaded", () => {
  const menu = document.querySelector(".menu-btn");
  const nav = document.querySelector(".navlinks");
  if(menu && nav) menu.addEventListener("click",()=>nav.classList.toggle("open"));
  document.querySelectorAll("[data-wa]").forEach(el=>{
    if(WHATSAPP_NUMBER){
      el.href=`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
      el.classList.remove("disabled");el.setAttribute("aria-label","Chat with CyberLab on WhatsApp");
    }else{
      el.href="#contact";el.classList.add("disabled");el.setAttribute("aria-label","WhatsApp number not configured yet");
      el.addEventListener("click",e=>{
        if(el.dataset.allowPlaceholder==="true") return;
        e.preventDefault();
        const note=document.querySelector("#wa-note");
        if(note){note.hidden=false;note.scrollIntoView({behavior:"smooth",block:"nearest"});}
        else window.location.href="contact.html#contact";
      });
    }
  });
  document.querySelectorAll("[data-year]").forEach(el=>el.textContent=new Date().getFullYear());
  document.querySelectorAll("[data-demo-payment]").forEach(btn=>btn.addEventListener("click",()=>{
    const note=document.querySelector("#payment-note");if(note){note.hidden=false;note.scrollIntoView({behavior:"smooth",block:"nearest"});}
  }));
  const form=document.querySelector("#service-request");
  if(form) form.addEventListener("submit",e=>{
    e.preventDefault();const note=document.querySelector("#form-note");
    if(note){note.hidden=false;note.textContent="Thanks. This form is currently a front-end preview and has not sent your details. Connect a secure backend before publishing."; }
  });
});
