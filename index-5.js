function createPet(name, species) {
  // Random energy 0-50
  const initialEnergy = Math.floor(Math.random() * 51); 
  const maxEnergy = 100;

  return {
    name,
    species,
    happiness: 50,
    energy: initialEnergy,
    maxEnergy,

    // Pet's status
    status() {
      console.log(
        `Pet Name: ${this.name}, Species: ${this.species}, Happiness: ${this.happiness}, Energy: ${this.energy}`
      );
    },

    // Playing decreases energy and increases happiness
    play() {
      if (this.energy >= 15) {
        this.energy -= 15;
        this.happiness += 10;
        if (this.happiness > 100) this.happiness = 100;
        return `You played with ${this.name}! Happiness is now ${this.happiness}, Energy is now ${this.energy}.`;
      } else {
        return `${this.name} is too tired to play!`;
      }
    },

    // Feeding increases energy and happiness
    feed() {
      this.happiness += 20;
      this.energy += 20;
      if (this.happiness > 100) this.happiness = 100;
      if (this.energy > this.maxEnergy) this.energy = this.maxEnergy;
      return `Feeding ${this.name}! Happiness is now ${this.happiness}, Energy is now ${this.energy}.`;
    },
  };
}

// Kennels
let dogKennel = [
  createPet("Oreo", "Dog"),
  createPet("Max", "Dog"),
  createPet("Fred", "Dog"),
  createPet("Charlie", "Dog"),
  createPet("Bella", "Dog"),
];

let catKennel = [
  createPet("Midnight", "Cat"),
  createPet("Benji", "Cat"),
  createPet("Shadow", "Cat"),
  createPet("Jinx", "Cat"),
  createPet("Luna", "Cat"),
];

let fishTank = [
  createPet("Rio", "Fish"),
  createPet("Bubbles", "Fish"),
  createPet("Nemo", "Fish"),
  createPet("Dory", "Fish"),
  createPet("Fin", "Fish"),
];

// Play with dogs: first pet 3, second pet once...
console.log("\n=== Playing with Dogs ===");
for (let i = 0; i < dogKennel.length; i++) {
  const times = i === 0 ? 3 : i === 1 ? 1 : 2; // Example variation
  for (let j = 0; j < times; j++) {
    console.log(dogKennel[i].play());
  }
  dogKennel[i].status();
}

// Play with cats: random 
console.log("\n=== Playing with Cats ===");
for (let i = 0; i < catKennel.length; i++) {
  const times = Math.floor(Math.random() * 3) + 1;
  for (let j = 0; j < times; j++) {
    console.log(catKennel[i].play());
  }
  catKennel[i].status();
}

// Play with fish: random 
console.log("\n=== Playing with Fish ===");
for (let i = 0; i < fishTank.length; i++) {
  const times = Math.floor(Math.random() * 3);
  for (let j = 0; j < times; j++) {
    console.log(fishTank[i].play());
  }
  fishTank[i].status();
}

//Feed Pets if energy is less than 30
console.log("\n=== Feeding Low-Energy Pets ===");

// Dogs
for (let i = 0; i < dogKennel.length; i++) {
  if (dogKennel[i].energy < 30) {
    console.log(dogKennel[i].feed());
    dogKennel[i].status();
  }
}

// Cats
for (let i = 0; i < catKennel.length; i++) {
  if (catKennel[i].energy < 30) {
    console.log(catKennel[i].feed());
    catKennel[i].status();
  }
}

// Fish
for (let i = 0; i < fishTank.length; i++) {
  if (fishTank[i].energy < 30) {
    console.log(fishTank[i].feed());
    fishTank[i].status();
  }
}
