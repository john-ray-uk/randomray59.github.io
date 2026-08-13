// Lightbox.js code. This generates a magnified "lightbox" of an image once an image is clicked on to magnify.
// The same code was re-used for the lightboxes on the www.luastro.space website
(function () {
  // Get all gallery figures
  const items = Array.from(document.querySelectorAll('.photo-grid figure'));

  const lightbox  = document.getElementById('lightbox');
  const lbContent = lightbox.querySelector('.lightbox-content');
  const lbImg     = lbContent.querySelector('img');
  const lbCaption = lbContent.querySelector('.lb-caption');
  const closeBtn  = lbContent.querySelector('.lb-close');
  const maxBtn    = lbContent.querySelector('.lb-maximize');
  const prevBtn   = lbContent.querySelector('.lb-prev');
  const nextBtn   = lbContent.querySelector('.lb-next');

  let currentIndex = 0;

  function showLightbox(idx) {
    currentIndex = idx;

    // Get the figure and the image inside it
    const figure = items[idx];
    const imgEl = figure.querySelector('img');
    const captionEl = figure.querySelector('figcaption');

    // Load the full-resolution image
    lbImg.src = imgEl.src;
    lbImg.alt = imgEl.alt;

    // Get caption from <figcaption>, falling back to alt text
    lbCaption.textContent =
      captionEl?.textContent.trim() || imgEl.alt || '';

    lightbox.classList.add('open');
  }

  function hideLightbox() {
    lightbox.classList.remove('open');

    if (document.fullscreenElement) {
      document.exitFullscreen();
    }
  }

  function showPrev() {
    showLightbox(
      (currentIndex - 1 + items.length) % items.length
    );
  }

  function showNext() {
    showLightbox(
      (currentIndex + 1) % items.length
    );
  }

  // Open lightbox when a gallery image is clicked
  items.forEach((figure, idx) => {
    const img = figure.querySelector('img');

    img.style.cursor = 'pointer';

    img.addEventListener('click', function (e) {
      e.preventDefault();
      showLightbox(idx);
    });
  });

  // Close button
  closeBtn.addEventListener('click', function (e) {
    e.stopPropagation();
    hideLightbox();
  });

  // Clicking the backdrop closes the lightbox
  lightbox.addEventListener('click', hideLightbox);

  // Don't close when clicking inside the image/content
  lbContent.addEventListener('click', function (e) {
    e.stopPropagation();
  });

  // Previous
  prevBtn.addEventListener('click', function (e) {
    e.stopPropagation();
    showPrev();
  });

  // Next
  nextBtn.addEventListener('click', function (e) {
    e.stopPropagation();
    showNext();
  });

  // Fullscreen button
  maxBtn.addEventListener('click', async function (e) {
    e.stopPropagation();

    try {
      if (!document.fullscreenElement) {
        await lbContent.requestFullscreen();
      } else {
        await document.exitFullscreen();
      }
    } catch (error) {
      console.error('Fullscreen failed:', error);
    }
  });

  // Keyboard controls
  document.addEventListener('keydown', function (e) {
    if (!lightbox.classList.contains('open')) return;

    if (e.key === 'Escape') {
      hideLightbox();
    }

    if (e.key === 'ArrowLeft') {
      showPrev();
    }

    if (e.key === 'ArrowRight') {
      showNext();
    }

    if (e.key === 'Enter') {
      maxBtn.click();
    }
  });
})();