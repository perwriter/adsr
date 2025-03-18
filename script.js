// Function to hide the sales banner
function hideSalesBanner() {
    const salesBanner = document.getElementById("salesBanner");
    salesBanner.style.display = "none";
  }
  
  // Initialize Lucide icons
  document.addEventListener("DOMContentLoaded", () => {
    lucide.createIcons();
  
    // Add event listener to the close button
    const closeButton = document.getElementById("closeButton");
    closeButton.addEventListener("click", hideSalesBanner);
  });

//   End of sales banner 

// Sound manufacturers data
const soundManufacturers = {
    column1: ["Acon Digital", "Acoustica", "ADSR", "Air Music Tech", "Akai", "Angelic Vibes", "Antares", "Apogee", "Applied Accoustic", "Aria Sounds", "Arturia", "Auburn"],
    column2: ["Cubic Audio", "Cycles & Spots Software", "D16", "Dark Silence", "DDMF", "Denise Audio", "Deplike", "DHPlugins", "Diginois", "Digital Brain Instruments", "DiscoDSP", "DJ Swivel"],
    column3: ["iZotope", "Kilohearts", "Klevgrand", "Korneff", "Krotos", "KV331", "LANDR", "LiveLoop", "Loot Audio", "Luftrum", "Lunacy Audio", "Magix"],
    column4: ["Sampleson", "Saucey Audio", "Serato", "Shout Audio", "Signum Audio", "Sinevibes", "Sinuslabs", "Sonible", "Sonivox", "Sonnox", "Sound Particles", "Soundiron"],
  };
  
  let mobileMenuOpen = false;
  let cartOpen = false;
  let userMenuOpen = false;
  
  function toggleMobileMenu() {
    mobileMenuOpen = !mobileMenuOpen;
    document.getElementById("mobileMenu").style.display = mobileMenuOpen ? "block" : "none";
  }
  
  function toggleCart() {
    cartOpen = !cartOpen;
    document.getElementById("cart").style.display = cartOpen ? "block" : "none";
  }
  
  function toggleUserMenu() {
    userMenuOpen = !userMenuOpen;
    document.getElementById("userMenu").style.display = userMenuOpen ? "block" : "none";
  }

  // Main js 
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
  mobileBadge.className = `absolute top-4 right-4 bg-gradient-to-r p-2 rounded-md text-white font-bold ${slide.badgeColor}`;
  mobileTitle.textContent = slide.title;
  mobileManufacturer.textContent = slide.manufacturer;

  // Update desktop view
  desktopCarousel.innerHTML = slides
    .map((slide, index) => `
      <div class="transition-all duration-500 ease-in-out w-[400px] ${index === current ? "opacity-100 scale-100" : "opacity-70 scale-95"}">
        <div class="bg-zinc-900 rounded-lg overflow-hidden">
          <div class="relative aspect-square">
            <img src="${slide.image}" alt="${slide.title}" class="w-full h-full object-cover">
            <div class="absolute top-4 right-4 bg-gradient-to-r p-2 rounded-md text-white font-bold ${slide.badgeColor}">
              SAVE ${slide.discount}
            </div>
          </div>
          <div class="p-4">
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
        class="w-2 h-2 rounded-full transition-all ${index === current ? "bg-white w-4" : "bg-white/50"}"
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


// category js 
// Categories data
const categories = [
  { type: "PLUGINS", name: "SYNTHS" },
  { type: "SOUNDS", name: "AFROBEATS" },
  { type: "PLUGINS", name: "80'S" },
  { type: "SOUNDS", name: "MIDI FILES" },
  { type: "PLUGINS", name: "DRUM MACHINES" },
];

// Function to create a category button
function createCategoryButton(category) {
  const button = document.createElement("div");
  button.className = "bg-zinc-900 rounded-md p-4 cursor-pointer hover:bg-zinc-800 transition-colors";

  const type = document.createElement("div");
  type.className = "text-xs text-zinc-500 mb-1";
  type.textContent = category.type;

  const name = document.createElement("div");
  name.className = "font-bold text-sm";
  name.textContent = category.name;

  button.appendChild(type);
  button.appendChild(name);

  return button;
}

// Function to render the category grid
function renderCategoryGrid() {
  const categoryGrid = document.getElementById("categoryGrid");

  // Clear existing content
  categoryGrid.innerHTML = "";

  // Append each category button to the grid
  categories.forEach((category) => {
    const button = createCategoryButton(category);
    categoryGrid.appendChild(button);
  });
}

// Initialize the grid
renderCategoryGrid();

// Sample js 
// Sample packs data
const allSamplePacks = [
  [
    {
      id: 1,
      title: "HYPERTECHNO",
      subtitle: "MIDIGRID Presets",
      vendor: "Sonic Labs",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Hypertechno-for-MIDIGRID-Cover-600x600.jpg-Xv9G6Hdt6oj1ethRG1ATkI25YE1Ft6.jpeg",
      onSale: true,
      discount: 35,
    },
    {
      id: 2,
      title: "HYPER & STUTTER",
      subtitle: "One-Shots, Loops & MIDI",
      vendor: "Waveform Audio",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ADSR-Hyper-Stutter-Techno-Cover-600x600.jpg-VYdUG1T95hWXf8lMy6HsngmMwho9F0.jpeg",
      onSale: false,
    },
    {
      id: 3,
      title: "ADORATION",
      subtitle: "Heartfelt Vocal Samples",
      vendor: "Echo Studios",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ADSR-Adoration-Cover-600x600.jpg-MFJAGq9kBuZs8Y7GxOVdODZVpToNTS.jpeg",
      onSale: true,
      discount: 25,
    },
    {
      id: 4,
      title: "POP VOL. 1",
      subtitle: "Drum Machine Presets",
      vendor: "Pulse Samples",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Drum-Machine-POP-Cover-HQ-600x600.jpg-LeQTpwKVj15ou8YOxTn4wZ0Htnorp2.jpeg",
      onSale: false,
    },
    {
      id: 5,
      title: "LURE",
      subtitle: "Presets for Cthulhu",
      vendor: "Rhythm Factory",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ADSR-Lure-Pop-for-Cthulhu-cover-600x600.jpg-23UL7OGDO6EpNeHOLtgSv4OIz2usoh.jpeg",
      onSale: true,
      discount: 40,
    },
    {
      id: 6,
      title: "303 STRATEGY",
      subtitle: "One-Shots, Loops & MIDI",
      vendor: "Harmonic Waves",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/303-Strategy-Cover.webp-lAjmoBDwOZOvGBhrTaMwkvCWbNlizL.jpeg",
      onSale: false,
    },
    {
      id: 7,
      title: "AFRO & TROPICAL",
      subtitle: "MIDIGRID Presets",
      vendor: "Bass Culture",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MIDIGRiD-Presets-for-Afro-and-Tropical-Cover.webp-TrBaVB8xtBHIZ7NvOEwS2zGi1vf31D.jpeg",
      onSale: true,
      discount: 15,
    },
    {
      id: 8,
      title: "BEATS ON ACID",
      subtitle: "For ADSR Drum Machine",
      vendor: "Synth Collective",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Drum-Machine-Beats-on-Acid-Cover.webp-H9bKYzN1fRNm7iaed4tkDTN3T7l8pY.jpeg",
      onSale: false,
    },
    {
      id: 9,
      title: "AMBIENT MOTIVES",
      subtitle: "Drum Machine Vol. 2",
      vendor: "Melody Minds",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Drum-Machine-Expansion-Ambient-Motives-2-cover.webp-bwc15q1lZrEMfWvUak3dEGDRLr4M2E.jpeg",
      onSale: true,
      discount: 20,
    },
    {
      id: 10,
      title: "POP LIFE",
      subtitle: "Pop Fusion for Vital",
      vendor: "Beat Architects",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ADSR-Pop-Life-Cover.webp-N7wTkHu7rUqdR6GuShdJHSduxzXxTi.jpeg",
      onSale: false,
    },
  ],
  [
    {
      id: 11,
      title: "PERCUSSIONS & FOLEY",
      subtitle: "Drum Machine Vol. 1",
      vendor: "Harmonic Waves",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Drum-Machine-Percussions-and-Foley-Cover.jpg-dme4WedG6rzilVKbJwYFCArrzNgzRi.jpeg",
      onSale: true,
      discount: 30,
    },
    {
      id: 12,
      title: "ELECTROPOP & NU DISCO",
      subtitle: "Hexcel Presets",
      vendor: "Bass Culture",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Hexcel-Expansion-Electropop-and-Nu-Disco-Cover-HQ-1.jpg-tN1AKReJ2rGrTzdjV2n1551GzAaHpy.jpeg",
      onSale: false,
    },
    {
      id: 13,
      title: "NEW BEATS FEVER",
      subtitle: "One-Shots, Loops & MIDI",
      vendor: "Synth Collective",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ADSR-New-Beats-Fever-Cover.jpg-9U94ZluSUgfapMU3WUomV1bHtrrSWY.jpeg",
      onSale: true,
      discount: 45,
    },
    {
      id: 14,
      title: "TRAP LEGENDS",
      subtitle: "Drum Machine Vol. 1",
      vendor: "Melody Minds",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Drum-Machine-Trap-legends-Cover.jpg-VK67mAt1EJ6gSfUsQGq6IBzVIP35Ly.jpeg",
      onSale: true,
      discount: 30,
    },
    {
      id: 15,
      title: "RETROWAVE JOURNEY",
      subtitle: "One-Shots, Loops & MIDI",
      vendor: "Beat Architects",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ADSR-Retrowave-Journey-Cover.jpg-5mNEaxWOYaAbk74IwR3RivXskto72n.jpeg",
      onSale: true,
      discount: 25,
    },
    {
      id: 16,
      title: "NINETIES RNB",
      subtitle: "One-Shots, Loops & MIDI",
      vendor: "Sonic Labs",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ADSR-Nineties-RnB-Cover.jpg-7w4exAHYOxGNbiVNWGsUp1FDPVyGkP.jpeg",
      onSale: false,
    },
    {
      id: 17,
      title: "COLOR BASS RAINBOW",
      subtitle: "One-Shots, Loops & MIDI",
      vendor: "Waveform Audio",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ADSR-Color-Bass-Rainbow-Cover.jpg-uyFQ75uIZGBNSkYZ7igKgTacHgrVAM.jpeg",
      onSale: true,
      discount: 25,
    },
    {
      id: 18,
      title: "LOFI & SYNTHWAVE",
      subtitle: "MIDIGRID Presets",
      vendor: "Echo Studios",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MIDIGRiD-Presets-for-Lofi-Synthwave-Cover.jpg-7fngavdMjHNnWEmsbjONdAjT2H3kGy.jpeg",
      onSale: false,
    },
    {
      id: 19,
      title: "INDIE & POP",
      subtitle: "MIDIGRID Presets",
      vendor: "Pulse Samples",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MIDIGRiD-Presets-for-Indie-Pop-Cover.jpg-hJpvil2KDHzVo9IwBZfQopIjFoGpuj.jpeg",
      onSale: true,
      discount: 40,
    },
    {
      id: 20,
      title: "80s REBORN",
      subtitle: "Presets for Vital",
      vendor: "Rhythm Factory",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ADSR-Neon-80s-for-Vital-Cover-Sticker.jpg-6hIoJrBBDTsasjtH2nIY32KVHG5qQF.jpeg",
      onSale: true,
      discount: 50,
    },
  ],
];

let currentSetIndex = 0;
let mobileIndex = 0;

// DOM Elements
const desktopGrid = document.getElementById("desktopGrid");
const mobileView = document.getElementById("mobileView");
const prevSetButton = document.getElementById("prevSet");
const nextSetButton = document.getElementById("nextSet");
const prevMobileButton = document.getElementById("prevMobile");
const nextMobileButton = document.getElementById("nextMobile");

// Function to render desktop grid
function renderDesktopGrid() {
  const samplePacks = allSamplePacks[currentSetIndex];
  desktopGrid.innerHTML = samplePacks
    .map(
      (pack) => `
      <div class="cursor-pointer group">
        <div class="aspect-square rounded-md overflow-hidden relative">
          <img src="${pack.image}" alt="${pack.title}" class="object-cover w-full h-full">
          ${
            pack.onSale
              ? `<div class="absolute top-0 right-0 bg-red-500 text-white px-3 py-1 font-bold text-sm">${pack.discount}% OFF</div>`
              : ""
          }
          <div class="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-between p-4">
            <div>
              <h3 class="font-bold text-base leading-tight mb-1">${pack.title}</h3>
              <p class="text-xs text-gray-300 mb-1">${pack.subtitle}</p>
              <p class="text-xs text-gray-400">${pack.vendor}</p>
            </div>
            <div class="flex justify-between items-center">
              <button class="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors">
                <i data-lucide="play" class="h-4 w-4 text-white"></i>
              </button>
              <div class="flex gap-2">
                <button class="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors">
                  <i data-lucide="shopping-cart" class="h-4 w-4 text-white"></i>
                </button>
                <button class="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors">
                  <i data-lucide="eye" class="h-4 w-4 text-white"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    `
    )
    .join("");
}

// Function to render mobile view
function renderMobileView() {
  const pack = allSamplePacks[currentSetIndex][mobileIndex];
  mobileView.innerHTML = `
    <div class="cursor-pointer group">
      <div class="aspect-square rounded-md overflow-hidden relative max-w-[320px] mx-auto">
        <img src="${pack.image}" alt="${pack.title}" class="object-cover w-full h-full">
        ${
          pack.onSale
            ? `<div class="absolute top-0 right-0 bg-red-500 text-white px-3 py-1 font-bold text-sm">${pack.discount}% OFF</div>`
            : ""
        }
        <div class="absolute bottom-0 left-0 right-0 bg-black/70 p-4">
          <h3 class="font-bold text-base leading-tight mb-1">${pack.title}</h3>
          <p class="text-xs text-gray-300 mb-1">${pack.subtitle}</p>
          <p class="text-xs text-gray-400">${pack.vendor}</p>
        </div>
      </div>
    </div>
  `;
}

// Navigation functions
function nextSet() {
  currentSetIndex = (currentSetIndex === allSamplePacks.length - 1) ? 0 : currentSetIndex + 1;
  renderDesktopGrid();
}

function prevSet() {
  currentSetIndex = (currentSetIndex === 0) ? allSamplePacks.length - 1 : currentSetIndex - 1;
  renderDesktopGrid();
}

function nextMobile() {
  mobileIndex = (mobileIndex === allSamplePacks[currentSetIndex].length - 1) ? 0 : mobileIndex + 1;
  renderMobileView();
}

function prevMobile() {
  mobileIndex = (mobileIndex === 0) ? allSamplePacks[currentSetIndex].length - 1 : mobileIndex - 1;
  renderMobileView();
}

// Event listeners
prevSetButton.addEventListener("click", prevSet);
nextSetButton.addEventListener("click", nextSet);

// Plugins js 
// Plugins data
const allPlugins = [
  [
    {
      id: 1,
      title: "DRUM MACHINE",
      subtitle: "Advanced Drum Sequencer",
      vendor: "ADSR",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ADSR%20-%20Drum%20Machine.jpg-nVWUXNI96Ng6Pz0sQGpQ69wcyJSmjf.jpeg",
      onSale: true,
      discount: 29,
    },
    {
      id: 2,
      title: "MIDIGRID",
      subtitle: "Grid MIDI Sequencer",
      vendor: "ADSR",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ADSR%20-%20MIDIGRiD.jpg-3OHAk5N3Gpbpfuxc1Ke3aqyYCaIvPZ.jpeg",
      onSale: true,
      discount: 24,
    },
    {
      id: 3,
      title: "SOFT CLIPPER",
      subtitle: "Audio Processing Tool",
      vendor: "AIR Music Tech",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Air%20Music%20Tech%20-%20Soft%20Clipper%402x.jpg-CtGtzbmK51UOJOUgvliacGbQWX9MAu.jpeg",
      onSale: true,
      discount: 33,
    },
    {
      id: 4,
      title: "ORBIT",
      subtitle: "Pattern Sequencer",
      vendor: "ADSR",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ADSR%20-%20Orbit.jpg-JcSnQtsv5SJRlmW4N8SPKyMOSTbjqO.jpeg",
      onSale: true,
      discount: 24,
    },
    {
      id: 5,
      title: "ESSENTIAL SYNTHS PACK",
      subtitle: "Synth Collection",
      vendor: "AIR Music Tech",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Air%20Music%20Tech%20-%20AIR%20Essential%20Synths%20Pack.jpg-DcrGRQ0epzvG7ZBrDzI4iptQySmviY.jpeg",
      onSale: true,
      discount: 95,
    },
    {
      id: 6,
      title: "HEXCEL",
      subtitle: "MIDI Production Tool",
      vendor: "ADSR",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ADSR%20-%20Hexcel.jpg-AQihIFt6AhfwOCrulcaI6Zw9hyguCB.jpeg",
      onSale: true,
      discount: 24,
    },
    {
      id: 7,
      title: "THE RISER",
      subtitle: "Transition Designer",
      vendor: "AIR Music Tech",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Air%20Music%20Tech%20-%20The%20Riser.jpg-s28kWkL5cwJG8suBfpEcfC8ut6RGUX.jpeg",
      onSale: true,
      discount: 88,
    },
    {
      id: 8,
      title: "POWER PACK",
      subtitle: "Classic Synth Bundle",
      vendor: "AIR Music Tech",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Air%20Music%20Tech%20-%20AIR%20Power%20Pack.jpg-2pRTQjrjSsuN8o7xPZVmNZ3zBJHVNy.jpeg",
      onSale: true,
      discount: 93,
    },
    {
      id: 9,
      title: "DRUM MACHINE PACK",
      subtitle: "Drum Synthesis Bundle",
      vendor: "AIR Music Tech",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Air%20Music%20Tech%20-%20AIR%20Drum%20Machine%20Pack.jpg-vITXDJ0Oajw9INraTRE3CRfkwl6Lin.jpeg",
      onSale: true,
      discount: 93,
    },
    {
      id: 10,
      title: "LEGENDS PACK",
      subtitle: "Vintage Instruments",
      vendor: "AIR Music Tech",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Air%20Music%20Tech%20-%20AIR%20Legends%20Pack.jpg-g4aeBBXVUwMCe4oErbcFHzscol0XI5.jpeg",
      onSale: true,
      discount: 93,
    },
  ],
  [
    {
      id: 11,
      title: "OMNISPHERE 2",
      subtitle: "Power Synth",
      vendor: "Spectrasonics",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/omnisphere-2-plugin-cover-Yd9Ij9Yd9Ij9Yd9Ij9.jpeg",
      onSale: true,
      discount: 20,
    },
    {
      id: 12,
      title: "NEUTRON 4",
      subtitle: "Mixing Assistant",
      vendor: "iZotope",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/izotope-neutron-4-plugin-cover-Yd9Ij9Yd9Ij9Yd9Ij9.jpeg",
      onSale: true,
      discount: 45,
    },
    {
      id: 13,
      title: "DECAPITATOR",
      subtitle: "Analog Saturation",
      vendor: "Soundtoys",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/soundtoys-decapitator-plugin-cover-Yd9Ij9Yd9Ij9Yd9Ij9.jpeg",
      onSale: false,
    },
    {
      id: 14,
      title: "GUITAR RIG 6",
      subtitle: "Guitar & Bass FX",
      vendor: "Native Instruments",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/guitar-rig-6-plugin-cover-Yd9Ij9Yd9Ij9Yd9Ij9.jpeg",
      onSale: true,
      discount: 30,
    },
    {
      id: 15,
      title: "PRO-L 2",
      subtitle: "Limiter Plugin",
      vendor: "FabFilter",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/fabfilter-pro-l2-plugin-cover-Yd9Ij9Yd9Ij9Yd9Ij9.jpeg",
      onSale: true,
      discount: 25,
    },
    {
      id: 16,
      title: "ABBEY ROAD",
      subtitle: "Studio Reverb",
      vendor: "Waves Audio",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/waves-abbey-road-plugin-cover-Yd9Ij9Yd9Ij9Yd9Ij9.jpeg",
      onSale: true,
      discount: 60,
    },
    {
      id: 17,
      title: "PIGMENTS 4",
      subtitle: "Advanced Synth",
      vendor: "Arturia",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/arturia-pigments-4-plugin-cover-Yd9Ij9Yd9Ij9Yd9Ij9.jpeg",
      onSale: false,
    },
    {
      id: 18,
      title: "CONSOLE 1",
      subtitle: "Channel Strip",
      vendor: "Softube",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/softube-console-1-plugin-cover-Yd9Ij9Yd9Ij9Yd9Ij9.jpeg",
      onSale: true,
      discount: 40,
    },
    {
      id: 19,
      title: "LUNA",
      subtitle: "Recording System",
      vendor: "Universal Audio",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/universal-audio-luna-plugin-cover-Yd9Ij9Yd9Ij9Yd9Ij9.jpeg",
      onSale: false,
    },
    {
      id: 20,
      title: "FRESH AIR",
      subtitle: "High Frequency Enhancer",
      vendor: "Slate Digital",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/slate-digital-fresh-air-plugin-cover-Yd9Ij9Yd9Ij9Yd9Ij9.jpeg",
      onSale: true,
      discount: 50,
    },
  ],
];

// let currentSetIndex = 0;
// let mobileIndex = 0;

// DOM Elements
// const desktopGrid = document.getElementById("desktopGrid");
// const mobileView = document.getElementById("mobileView");
// const prevSetButton = document.getElementById("prevSet");
// const nextSetButton = document.getElementById("nextSet");
// const prevMobileButton = document.getElementById("prevMobile");
// const nextMobileButton = document.getElementById("nextMobile");

// Function to render desktop grid
function renderDesktopGrid() {
  const plugins = allPlugins[currentSetIndex];
  desktopGrid.innerHTML = plugins
    .map(
      (plugin) => `
      <div class="cursor-pointer group">
        <div class="aspect-square rounded-md overflow-hidden relative">
          <img src="${plugin.image}" alt="${plugin.title}" class="object-cover w-full h-full">
          ${
            plugin.onSale
              ? `<div class="absolute top-0 right-0 bg-red-500 text-white px-3 py-1 font-bold text-sm">${plugin.discount}% OFF</div>`
              : ""
          }
          <div class="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-between p-4">
            <div>
              <h3 class="font-bold text-base leading-tight mb-1">${plugin.title}</h3>
              <p class="text-xs text-gray-300 mb-1">${plugin.subtitle}</p>
              <p class="text-xs text-gray-400">${plugin.vendor}</p>
            </div>
            <div class="flex justify-between items-center">
              <button class="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors">
                <i data-lucide="play" class="h-4 w-4 text-white"></i>
              </button>
              <div class="flex gap-2">
                <button class="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors">
                  <i data-lucide="shopping-cart" class="h-4 w-4 text-white"></i>
                </button>
                <button class="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors">
                  <i data-lucide="eye" class="h-4 w-4 text-white"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    `
    )
    .join("");
}

// Function to render mobile view
function renderMobileView() {
  const plugin = allPlugins[currentSetIndex][mobileIndex];
  mobileView.innerHTML = `
    <div class="cursor-pointer group">
      <div class="aspect-square rounded-md overflow-hidden relative max-w-[320px] mx-auto">
        <img src="${plugin.image}" alt="${plugin.title}" class="object-cover w-full h-full">
        ${
          plugin.onSale
            ? `<div class="absolute top-0 right-0 bg-red-500 text-white px-3 py-1 font-bold text-sm">${plugin.discount}% OFF</div>`
            : ""
        }
        <div class="absolute bottom-0 left-0 right-0 bg-black/70 p-4">
          <h3 class="font-bold text-base leading-tight mb-1">${plugin.title}</h3>
          <p class="text-xs text-gray-300 mb-1">${plugin.subtitle}</p>
          <p class="text-xs text-gray-400">${plugin.vendor}</p>
        </div>
      </div>
    </div>
  `;
}

// Navigation functions
function nextSet() {
  currentSetIndex = (currentSetIndex === allPlugins.length - 1) ? 0 : currentSetIndex + 1;
  renderDesktopGrid();
}

function prevSet() {
  currentSetIndex = (currentSetIndex === 0) ? allPlugins.length - 1 : currentSetIndex - 1;
  renderDesktopGrid();
}

function nextMobile() {
  mobileIndex = (mobileIndex === allPlugins[currentSetIndex].length - 1) ? 0 : mobileIndex + 1;
  renderMobileView();
}

function prevMobile() {
  mobileIndex = (mobileIndex === 0) ? allPlugins[currentSetIndex].length - 1 : mobileIndex - 1;
  renderMobileView();
}

// Event listeners
prevSetButton.addEventListener("click", prevSet);
nextSetButton.addEventListener("click", nextSet);
prevMobileButton.addEventListener("click", prevMobile);
nextMobileButton.addEventListener("click", nextMobile);

// Initialize Lucide icons and render views
document.addEventListener("DOMContentLoaded", () => {
  lucide.createIcons();
  renderDesktopGrid();
  renderMobileView();
});