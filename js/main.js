// Mobile nav toggle (simple)
document.addEventListener('DOMContentLoaded',()=>{
    const nav=document.querySelector('nav .container');
    const toggle=document.createElement('span');
    toggle.textContent='☰';
    toggle.style.cssText='font-size:1.8rem;cursor:pointer;display:none';
    nav.prepend(toggle);
  
    toggle.addEventListener('click',()=>{
      nav.classList.toggle('open');
    });
  
    // show burger only on small screens
    const media=window.matchMedia('(max-width:700px)');
    function handle(e){toggle.style.display=e.matches?'block':'none'}
    media.addListener(handle);handle(media);
  });
  
  // Simple geolocation demo – puts user lat/lon in #myPos element (optional)
  function showPosition(){
    const out=document.getElementById('myPos');
    if(!out||!navigator.geolocation) return;
    navigator.geolocation.getCurrentPosition(pos=>{
      const {latitude,longitude}=pos.coords;
      out.textContent=`Your Location: ${latitude.toFixed(4)}, ${longitude.toFixed(4)}`;
    },()=>{
      out.textContent='Location access blocked.';
    });
  }
  