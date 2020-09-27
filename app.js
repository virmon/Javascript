let dinoData = [];

// Create Dino Constructor
function Creature(data) {
    this.species = data.species;
    this.weight = data.weight;
    this.height = data.height;
    this.diet = data.diet;
    this.where = data.where;
    this.when = data.when;
    this.fact = [ data.fact ];
}

// Create Dino Objects
fetch('./dino.json')
    .then(res => res.json())
    .then(data => {
        dinoData = data.Dinos.map(dino => new Creature(dino));
    });

// Create Human Object
const human = new Creature({ 
    species: 'Human',
    name: document.getElementById('name').value,
    height: parseInt(document.getElementById('inches').value),
    weight: parseInt(document.getElementById('weight').value),
    diet: document.getElementById('diet').value,
    where: '',
    when: '',
    fact: ''
});

// Use IIFE to get human data from form
let getHumanData = (function () {
    const compareBtn = document.getElementById('btn');
    compareBtn.addEventListener('click', function() {
        if (!validInput()) {
            alert("All Fields are Required");
        } else {
            removeForm();
            human.name = document.getElementById('name').value;
            human.height = parseInt(document.getElementById('inches').value);
            human.weight = parseInt(document.getElementById('weight').value);
            human.diet = document.getElementById('diet').value;
            compareFacts();
            generateGrid();
        }
    });
})();

// Create Dino Compare Method 1
// NOTE: Weight in JSON file is in lbs, height in inches. 
Creature.prototype.compareHeight = function () {
    let diff = 0;
    if (this.height > human.height) {
        diff = this.height - human.height;
        this.fact.push(`${this.species} is taller than you in ${diff} inches`);
    } else if (this.height < human.height) {
        diff = human.height - this.height;
        this.fact.push(`You are taller in ${diff} inches`);
    } else {
        this.fact.push(`You have the same height!`);
    }
}

// Create Dino Compare Method 2
// NOTE: Weight in JSON file is in lbs, height in inches.
Creature.prototype.compareWeight = function () {
    let diff = 0;
    if (this.weight > human.weight) {
        diff = this.weight - human.weight;
        this.fact.push(`${this.species} is heavier than you in ${diff} lbs`);
    } else if (this.weight < human.weight) {
        diff = human.weight - this.weight;
        this.fact.push(`You are heavier in ${diff} lbs`);
    } else {
        this.fact.push(`You have the same weight!`);
    }
}

// Create Dino Compare Method 3
// NOTE: Weight in JSON file is in lbs, height in inches.
Creature.prototype.compareDiet = function () {
    if (this.diet.toLowerCase() === human.diet.toLowerCase()) {
        this.fact.push(`Both of you are ${this.diet}`);
    } else {
        this.fact.push(`${this.species} are ${this.diet}`);
    }
}

/**
 * @description Generate Tiles for each Dino in Array
 */
function generateGrid() {
    // insert human into dinoData array
    dinoData.splice(4, 0, human);
    let i = getRandomInt(0, dinoData[0].fact.length - 1);
    dinoData.map(data => {
        addTiles(data, i);
    })
}

/**
 * @description Add tiles to DOM; On button click, prepare and display infographic
 */
function addTiles(data, i) {
    const mainGrid = document.getElementById('grid');

    // Create new elements
    const newTile = document.createElement('div');
    const gridItemHeader = document.createElement('h3');
    const img = document.createElement('img');
    const para = document.createElement('p');

    gridItemHeader.textContent = data.species;
    para.textContent = data.species === 'Pigeon' ? data.fact[0] : data.fact[i];
    img.setAttribute('src', `./images/${data.species}.png`)
    // Add class to new tile
    newTile.setAttribute('class', 'grid-item');

    // Add to grid
    newTile.appendChild(gridItemHeader);
    newTile.appendChild(img);
    if (data.species !== 'Human') {
        newTile.appendChild(para);
    }
    mainGrid.appendChild(newTile);
}

/**
 * @description Remove form from screen
 */
function removeForm() {
    document.getElementById('dino-compare').style.display = "none";
}

/**
 * @description Map dinoData then instantiate compare methods
 */
function compareFacts() {
    dinoData.map(data => {
        data.compareDiet();
        data.compareHeight();
        data.compareWeight();
    })
}

/**
 * @retrivedFrom https://stackoverflow.com/questions/1527803/generating-random-whole-numbers-in-javascript-in-a-specific-range
 * @description Randomize integer
 * @param {number} min - minimum possible number
 * @param {number} max - maximum possible number
 * @returns {number} Random integer from min to max
 */
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function validInput() {
    let name = document.getElementById('name').value;
    let height = parseInt(document.getElementById('inches').value);
    let weight = parseInt(document.getElementById('weight').value);
    let diet = document.getElementById('diet').value;
    if (!name || !height || !weight || !diet) {
        return false;
    }
    return true;
}