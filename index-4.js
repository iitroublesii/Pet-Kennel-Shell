function createPet(name, species, happiness = 50, energy = 100) {
  const maxEnergy = energy;

  return {
    name,
    species,
    happiness,
    energy,
    maxEnergy,

    // Pet's  status
    status() {
      console.log(
        `Pet Name: ${this.name}, Species: ${this.species}, Happiness: ${this.happiness}, Energy: ${this.energy}`
      );
    },

    // Playing decreases energy and increases happiness
    play() {
      const energyCost = Math.floor(Math.random() * 15) + 10; // Random energy cost 10-24
      if (this.energy >= energyCost) {
        this.energy -= energyCost;
        const happinessGain = Math.floor(Math.random() * 15) + 5; // Random happiness 5-19
        this.happiness += happinessGain;
        if (this.happiness > 100) this.happiness = 100;
        return `You played with ${this.name}! Happiness is now ${this.happiness}, Energy is now ${this.energy}.`;
      } else {
        return `${this.name} is too tired to play. Let them rest!`;
      }
    },

    // Feeding increases happiness and energy
    feed() {
      const happinessGain = Math.floor(Math.random() * 15) + 5;
      const energyGain = Math.floor(Math.random() * 10) + 10;
      this.happiness += happinessGain;
      this.energy += energyGain;

      if (this.happiness > 100) this.happiness = 100;
      if (this.energy > this.maxEnergy) this.energy = this.maxEnergy;

      return `Feeding ${this.name}! Happiness is now ${this.happiness}, Energy is now ${this.energy}.`;
    },

    // Resting restores energy
    rest() {
      this.energy = this.maxEnergy;
      console.log(`${this.name} has rested. Energy is now ${this.energy}.`);
    },

    // Boredom reduces happiness
    tick() {
      if (this.energy < 40) {
        this.happiness -= 5;
        if (this.happiness < 0) this.happiness = 0;
      }
    },
  };
}

// Dog Kennel
let dogKennel = [
  createPet("Rover", "Dog"),
  createPet("Max", "Dog"),
  createPet("Buddy", "Dog"),
  createPet("Charlie", "Dog"),
  createPet("Rocky", "Dog"),
];

// Cat Kennel
let catKennel = [
  createPet("Whiskers", "Cat"),
  createPet("Mittens", "Cat"),
  createPet("Shadow", "Cat"),
  createPet("Simba", "Cat"),
  createPet("Luna", "Cat"),
];

// Fish Tank
let fishTank = [
  createPet("Goldie", "Fish"),
  createPet("Bubbles", "Fish"),
  createPet("Nemo", "Fish"),
  createPet("Dory", "Fish"),
  createPet("Fin", "Fish"),
];

// Feed dogs
for (let i = 0; i < dogKennel.length; i++) {
  console.log(dogKennel[i].feed());
}

// Feed cats
for (let i = 0; i < catKennel.length; i++) {
  console.log(catKennel[i].feed());
}

// Feed fish
for (let i = 0; i < fishTank.length; i++) {
  console.log(fishTank[i].feed());
}

// Final status
console.log("\n=== Dog Kennel Status ===");
dogKennel.forEach(pet => pet.status());

console.log("\n=== Cat Kennel Status ===");
catKennel.forEach(pet => pet.status());

console.log("\n=== Fish Tank Status ===");
fishTank.forEach(pet => pet.status());