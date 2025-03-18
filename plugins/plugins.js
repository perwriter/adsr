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