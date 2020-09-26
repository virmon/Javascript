// fetch('./dino.json')
//     .then(res => res.json())
//     .then((data) => {
//         console.log(data['Dinos'])
//     });

// Create Dino Constructor
function Dino(data) {
    this.species = data.species;
    this.weight = data.weight;
    this.height = data.height;
    this.diet = data.diet;
    this.where = data.where;
    this.when = data.when;
    this.fact = data.fact;
}

// Create Dino Objects
const dino = {
    name: "Dino"
}

// Create Human Object
const human = {
    name: document.getElementById('name').value,
    height: document.getElementById('feet').value,
    weight: document.getElementById('weight').value,
    diet: document.getElementById('diet').value
}

// Use IIFE to get human data from form
let getHumanData = (function () {
    const compareBtn = document.getElementById('btn');
    compareBtn.addEventListener('click', function() {
        // hide form
        removeForm();
        human.species = document.getElementById('name').value;
        human.height = document.getElementById('feet').value;;
        human.weight = document.getElementById('weight').value;;
        human.diet = document.getElementById('diet').value;
        generateGrid();
        console.log(human);
    });
})();

// Create Dino Compare Method 1
// NOTE: Weight in JSON file is in lbs, height in inches. 


// Create Dino Compare Method 2
// NOTE: Weight in JSON file is in lbs, height in inches.


// Create Dino Compare Method 3
// NOTE: Weight in JSON file is in lbs, height in inches.


// Generate Tiles for each Dino in Array
function generateGrid() {
    for (let i = 1; i < 10; i++) {
        if (i === 5) {
            addTiles(human);
        } else {
            addTiles(dino);
        }
    }
}

// Add tiles to DOM
function addTiles(data) {
    const mainGrid = document.getElementById('grid');
    const newTile = document.createElement('div');
    const gridItemHeader = document.createElement('h3');
    const img = document.createElement('img');
    const para = document.createElement('p');

    gridItemHeader.textContent = data.species;
    para.textContent = "Facts Here";
    newTile.setAttribute('class', 'grid-item');
    newTile.appendChild(gridItemHeader);
    newTile.appendChild(img);
    newTile.appendChild(para);
    mainGrid.appendChild(newTile);
}

// Remove form from screen
function removeForm() {
    document.getElementById('dino-compare').style.display = "none";
}

// On button click, prepare and display infographic
