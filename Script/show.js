var slideshowImages = document.querySelectorAll('#slideshow img');
    var thumbnailImages = document.querySelectorAll('#thumbnail-gallery img');
    var currentImageIndex = 0;
    var slideshowInterval = setInterval(nextImage, 5000); // Интервал переключения слайдов (в миллисекундах)

    function nextImage() {
      slideshowImages[currentImageIndex].classList.remove('active');
      thumbnailImages[currentImageIndex].classList.remove('active');
      currentImageIndex = (currentImageIndex + 1) % slideshowImages.length;
      slideshowImages[currentImageIndex].classList.add('active');
      thumbnailImages[currentImageIndex].classList.add('active');
    }

    thumbnailImages.forEach(function(thumbnail, index) {
      thumbnail.addEventListener('click', function() {
        slideshowImages[currentImageIndex].classList.remove('active');
        thumbnailImages[currentImageIndex].classList.remove('active');
        currentImageIndex = index;
        slideshowImages[currentImageIndex].classList.add('active');
        thumbnailImages[currentImageIndex].classList.add('active');
      });
    });