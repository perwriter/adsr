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