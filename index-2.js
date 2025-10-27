function createPet(name, species) {
  return {
    name: name,
    species: species,
    happiness: 50,
    energy: 100,

    // Playing with pet
    play: function () {
      this.energy -= 20;
      this.happiness += 10;
      return `You played with ${this.name}! Happiness is now ${this.happiness}, and energy is now ${this.energy}.`;
    },

    // Fedding the pet
    feed: function () {
      this.happiness += 20;
      this.energy += 20;
      // Cap values at 100
      if (this.energy > 100) this.energy = 100;
      if (this.happiness > 100) this.happiness = 100;
      return `You fed ${this.name}! Happiness is now ${this.happiness}, and energy is now ${this.energy}.`;
    },

    // Status of pet
    status: function () {
      console.log(
        `Pet Name: ${this.name}, Species: ${this.species}, Happiness: ${this.happiness}, Energy: ${this.energy}`
      );
    },

    // Rest
    rest: function () {
      this.energy = 100;
      return `${this.name} has rested. Energy is now fully restored to 100.`;
    },
  };
}


let pet1 = createPet("Benji", "Cat");
let pet2 = createPet("Bella", "Dog");
let pet3 = createPet("Oscar", "Fish");

// pet1 test
pet1.status();
console.log(pet1.play());
pet1.status();
console.log(pet1.feed());
pet1.status();

// pet2 test
pet2.status();
console.log(pet2.play());
console.log(pet2.feed());
pet2.status();

// pet3 test
pet3.status();
console.log(pet3.play());
pet3.status();
console.log(pet3.feed());
pet3.status();

// Rest test
console.log(pet1.rest());
pet1.status();