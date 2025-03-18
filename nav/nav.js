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