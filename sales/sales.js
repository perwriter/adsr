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