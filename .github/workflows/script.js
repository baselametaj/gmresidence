function sendWhatsApp(event){
  event.preventDefault();
  const checkin=document.getElementById('checkin').value;
  const checkout=document.getElementById('checkout').value;
  const guests=document.getElementById('guests').value;
  const roomtype=document.getElementById('roomtype').value;
  const message=document.getElementById('message').value || 'Hello, I would like to check availability.';
  const text=`${message}\n\nCheck-in: ${checkin}\nCheck-out: ${checkout}\nGuests: ${guests}\nStay type: ${roomtype}`;
  window.open(`https://wa.me/355694638963?text=${encodeURIComponent(text)}`,'_blank');
}
const lightbox=document.getElementById('lightbox');
const lightboxImg=document.getElementById('lightboxImg');
document.querySelectorAll('.gallery img').forEach(img=>{
  img.addEventListener('click',()=>{
    lightboxImg.src=img.src;
    lightbox.style.display='flex';
  });
});
function closeLightbox(){lightbox.style.display='none';}
