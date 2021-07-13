
var sliders = document.querySelectorAll('.glide');

for (var i = 0; i < sliders.length; i++) {
  var glide = new Glide(sliders[i], {
    
    type: 'carousel',
    animationDuration: 2000,
    autoplay: 4500,
    focusAt: '1',
    startAt: 0,
    perView: 1,
  });
  
  glide.mount();
}

const glideGallery = new Glide('.glide-gallery', {
  type: 'carousel',
  startAt: 0,
  perView: 3,
  autoplay: 3000,
});
glideGallery.mount();