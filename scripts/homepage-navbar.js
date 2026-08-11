  (function() {
    const images = [
      'images/general-assets/NavBarBackground1.jpg',
      'images/general-assets/NavBarBackground2.jpg',
      'images/general-assets/NavBarBackground3.jpg',
      'images/general-assets/NavBarBackground4.jpg',
      'images/general-assets/NavBarBackground5.jpg',
      'images/general-assets/NavBarBackground6.jpg',
      'images/general-assets/NavBarBackground7.jpg',
      'images/general-assets/NavBarBackground8.jpg',
      'images/general-assets/NavBarBackground9.jpg',
      'images/general-assets/NavBarBackground10.jpg',
      'images/general-assets/NavBarBackground11.JPG',
      'images/general-assets/NavBarBackground12.jpg',
      'images/general-assets/NavBarBackground13.jpg',
      'images/general-assets/NavBarBackground14.jpg'
    ];
    const choice = images[Math.floor(Math.random() * images.length)];
    const navbarElement = document.querySelector('.navbar');
    navbarElement.style.setProperty('--navbar-bg', `url(${choice})`);
  })();