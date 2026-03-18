window.addEventListener("scroll", function() {
  const topbar = document.querySelector('.topbar');
  if (window.scrollY > 50) {
    topbar.classList.add('scrolled');
  } else {
    topbar.classList.remove('scrolled');
  }
});

// Scroll Reveal
function reveal() {
  var reveals = document.querySelectorAll(".reveal");
  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 100;
    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    }
  }
}

window.addEventListener("scroll", reveal);
// Initial check
reveal();

// Hero Slider
const slides = document.querySelectorAll('.slide');
const cards = document.querySelectorAll('.caption-card');
let currentSlide = 0;
const isMobile = window.innerWidth <= 920;

// Set initial background images (mobile optimization)
slides.forEach((slide, idx) => {
  if (idx > 0) {
    slide.dataset.src = slide.style.backgroundImage.replace(/url\(['"](.+)['"]\)/, '$1');
    slide.style.backgroundImage = 'none';
  }
  
  const bgUrl = slide.style.backgroundImage !== 'none' ? slide.style.backgroundImage.replace(/url\(['"](.+)['"]\)/, '$1') : slide.dataset.src;
  
  if (isMobile && !bgUrl.startsWith('images/mobile/')) {
    const mobileUrl = `images/mobile/${bgUrl.replace('images/', '')}`;
    if (idx === 0) {
       slide.style.backgroundImage = `url('${mobileUrl}')`;
    } else {
       slide.dataset.src = mobileUrl;
    }
  }
});

// Handle LCP: Ensure first image is loaded ASAP
const firstSlide = slides[0];
if (firstSlide) {
  const firstBg = firstSlide.style.backgroundImage.replace(/url\(['"](.+)['"]\)/, '$1');
  const lcpImg = new Image();
  lcpImg.src = firstBg;
}

// Preload next image in slider
function preloadNext(index) {
  const nextIndex = (index + 1) % slides.length;
  const nextSlide = slides[nextIndex];
  
  let bgUrl = nextSlide.style.backgroundImage !== 'none' 
    ? nextSlide.style.backgroundImage.replace(/url\(['"](.+)['"]\)/, '$1') 
    : nextSlide.dataset.src;
  
  if (bgUrl) {
    const img = new Image();
    img.onload = () => {
      nextSlide.style.backgroundImage = `url('${bgUrl}')`;
    };
    img.src = bgUrl;
  }
}

function nextSlide() {
  slides[currentSlide].classList.remove('active');
  cards[currentSlide].classList.remove('active');
  
  currentSlide = (currentSlide + 1) % slides.length;
  
  slides[currentSlide].classList.add('active');
  cards[currentSlide].classList.add('active');
  
  preloadNext(currentSlide);
}

if (slides.length > 1) {
  preloadNext(0); // Preload second slide immediately after first is set
  setInterval(nextSlide, 5000); // 5 másodpercenként vált
}

// Cookie banner logic
const cookieBanner = document.getElementById('cookieBanner');
const acceptBtn = document.getElementById('acceptCookies');

function checkCookies() {
  if (!localStorage.getItem('cookiesAccepted')) {
    setTimeout(() => {
      cookieBanner.classList.add('active');
    }, 1000);
  }
}

if (acceptBtn) {
  acceptBtn.addEventListener('click', () => {
    localStorage.setItem('cookiesAccepted', 'true');
    cookieBanner.classList.remove('active');
  });
}

// Contact form handling
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const submitBtn = contactForm.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerText;
    const formData = new FormData(contactForm);
    
    submitBtn.disabled = true;
    submitBtn.innerText = 'Küldés...';

    sendFormData(formData, submitBtn, originalText);
  });
}

function sendFormData(formData, submitBtn, originalText) {
  fetch('send_mail.php', {
    method: 'POST',
    body: formData
  })
  .then(response => response.json())
  .then(data => {
    if (data.success) {
      alert(data.message || 'Köszönöm az üzenetedet! Hamarosan keresni foglak a megadott elérhetőségeken.');
      contactForm.reset();
    } else {
      alert(data.error || 'Sajnos hiba történt a küldés során.');
    }
  })
  .catch(error => {
    console.error('Hiba:', error);
    alert('Sajnos hiba történt. Kérlek, próbáld meg később vagy keress telefonon!');
  })
  .finally(() => {
    submitBtn.disabled = false;
    submitBtn.innerText = originalText;
  });
}

// Mobile optimization for mosaic images
if (isMobile) {
  document.querySelectorAll('.mosaic-item').forEach(item => {
    const style = item.getAttribute('style');
    if (style && style.includes('background-image')) {
      const newStyle = style.replace(/url\(['"]?([^'"]+)['"]?\)/, "url('images/mobile/$1')").replace('images/mobile/images/', 'images/mobile/');
      item.setAttribute('style', newStyle);
      item.setAttribute('loading', 'lazy'); // Redundant but safe
    }
  });
}

// Smooth Scroll performance
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

checkCookies();