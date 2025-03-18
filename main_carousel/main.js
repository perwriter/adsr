// Slides data
const slides = [
    {
      id: 1,
      title: "HYPERTECHNO",
      manufacturer: "MIDIGRID Presets",
      discount: "35%",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Hypertechno-for-MIDIGRID-Cover-600x600.jpg-Xv9G6Hdt6oj1ethRG1ATkI25YE1Ft6.jpeg",
      badgeColor: "from-purple-500 to-pink-600",
      heading: "MIDIGRID Presets for Modern Techno",
    },
    {
      id: 2,
      title: "DRUM MACHINE",
      manufacturer: "ADSR",
      discount: "29%",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ADSR%20-%20Drum%20Machine.jpg-nVWUXNI96Ng6Pz0sQGpQ69wcyJSmjf.jpeg",
      badgeColor: "from-blue-500 to-blue-600",
      heading: "Advanced Drum Sequencer Plugin",
    },
    {
      id: 3,
      title: "RETROWAVE JOURNEY",
      manufacturer: "One-Shots, Loops & MIDI",
      discount: "25%",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ADSR-Retrowave-Journey-Cover.jpg-5mNEaxWOYaAbk74IwR3RivXskto72n.jpeg",
      badgeColor: "from-red-500 to-orange-500",
      heading: "Vintage Synth Sounds & Textures",
    },
  ];
  
  let current = 0;
  let autoplay = true;
  
  // DOM Elements
  const carouselHeading = document.getElementById("carouselHeading");
  const mobileCarousel = document.getElementById("mobileCarousel");
  const mobileImage = document.getElementById("mobileImage");
  const mobileBadge = document.getElementById("mobileBadge");
  const mobileTitle = document.getElementById("mobileTitle");
  const mobileManufacturer = document.getElementById("mobileManufacturer");
  const desktopCarousel = document.getElementById("desktopCarousel");
  const dotsContainer = document.getElementById("dotsContainer");
  const prevButton = document.getElementById("prevButton");
  const nextButton = document.getElementById("nextButton");
  
  // Function to update the carousel
  function updateCarousel() {
    const slide = slides[current];
  
    // Update mobile view
    carouselHeading.textContent = slide.heading;
    mobileImage.src = slide.image;
    mobileImage.alt = slide.title;
    mobileBadge.textContent = `SAVE ${slide.discount}`;
    mobileBadge.className = `carousel-badge ${slide.badgeColor}`;
    mobileTitle.textContent = slide.title;
    mobileManufacturer.textContent = slide.manufacturer;
  
    // Update desktop view
    desktopCarousel.innerHTML = slides
      .map((slide, index) => `
        <div class="slide ${index === current ? "active" : "inactive"}">
          <div class="slide-container">
            <div class="slide-image">
              <img src="${slide.image}" alt="${slide.title}" >
              <div class="carousel-badge ${slide.badgeColor}">
                SAVE ${slide.discount}
              </div>
            </div>
            <div class="slide-info">
              <h3 class="text-xl font-bold text-white mb-1">${slide.title}</h3>
              <p class="text-sm text-gray-400">${slide.manufacturer}</p>
            </div>
          </div>
        </div>
      `)
      .join("");
  
    // Update dots
    dotsContainer.innerHTML = slides
      .map((_, index) => `
        <button
          class="dot ${index === current ? "active" : "inactive"}"
          onclick="setCurrent(${index})"
        ></button>
      `)
      .join("");
  }
  
  // Navigation functions
  function next() {
    current = (current === slides.length - 1) ? 0 : current + 1;
    updateCarousel();
  }
  
  function prev() {
    current = (current === 0) ? slides.length - 1 : current - 1;
    updateCarousel();
  }
  
  function setCurrent(index) {
    current = index;
    updateCarousel();
  }
  
  // Event listeners
  prevButton.addEventListener("click", prev);
  nextButton.addEventListener("click", next);
  
  // Autoplay
  if (autoplay) {
    setInterval(next, 5000);
  }
  
  // Initialize carousel
  updateCarousel();