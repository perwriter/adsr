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
    button.className = "category-button";
  
    const type = document.createElement("div");
    type.className = "category-type";
    type.textContent = category.type;
  
    const name = document.createElement("div");
    name.className = "category-name";
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