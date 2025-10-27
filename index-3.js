// Function to create a pet object
function createPet(name, species, happiness = 50, energy = 100) {
  
    // Each pet has a different energy
  const maxEnergy = energy;

  return {
    name: name,
    species: species,
    happiness: happiness,
    energy: energy,
    maxEnergy: maxEnergy,

    // Current pet's condition
    status: function () {
      console.log(
        `Pet Name: ${this.name}, Species: ${this.species}, Happiness: ${this.happiness}, Energy: ${this.energy}`
      );
    },

    // Playing decreases energy but increases happiness
    play: function () {
      if (this.energy >= 20) {
        this.energy -= 20;
        this.happiness += 10;
        if (this.happiness > 100) this.happiness = 100;
        return `You played with ${this.name}! Happiness: ${this.happiness}, Energy: ${this.energy}`;
      } else {
        return `${this.name} is too tired to play. Let them rest!`;
      }
    },

    // Feeding increases happiness and energy
    feed: function () {
      this.happiness += 10;
      this.energy += 20;
      if (this.happiness > 100) this.happiness = 100;
      if (this.energy > this.maxEnergy) this.energy = this.maxEnergy;
      return `You fed ${this.name}! Happiness: ${this.happiness}, Energy: ${this.energy}`;
    },

    // Restores energy to the pet's maximum energy
    rest: function () {
      this.energy = this.maxEnergy;
      console.log(`${this.name} has rested. Energy is now fully restored to ${this.energy}.`);
    },

    // Boredom — happiness drops if energy is low
    tick: function () {
      if (this.energy < 40) {
        this.happiness -= 5;
        if (this.happiness < 0) this.happiness = 0;
      }
    },
  };
}

// Creating pets
let pet1 = createPet("Benji", "Cat", 60, 120);
let pet2 = createPet("Bella", "Dog", 50, 90);
let pet3 = createPet("Oscar", "Fish", 40, 80);
let pet4 = createPet("Luna", "Bird", 70, 100);
let pet5 = createPet("Betsy", "Cow", 55, 75);
let pet6 = createPet("Izzy", "Iguana", 45, 85);

// Kennel
let kennel = [];

// Add pets 
kennel.push(pet1);
kennel.push(pet2);
kennel.push(pet3);
kennel.push(pet4);
kennel.push(pet5);

// Add another pet
kennel[kennel.length] = pet6;

// Log Kennel
console.log("=== Kennel Contents ===");

// Testign the pet's behaviors
console.log(pet1.play());
console.log(pet1.feed());
pet1.status();

// Decrease happiness over time
kennel.forEach(pet => pet.tick());

// All pets resting
kennel.forEach(pet => pet.rest());

// Log kennel after resting
console.log("=== After Resting ===");
