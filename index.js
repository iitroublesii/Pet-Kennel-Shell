//  Make a pet object 
const pet = {

  name: "Benji",      // The pet's name
  species: "Cat",      // The type of animal
  happiness: 50,       // Initial happiness level

  // Playing with the pet, Increases happiness by 10
  play: function () {
    this.happiness += 10;
    return `You played with ${this.name}! Happiness is now ${this.happiness}.`;
},
   // Feeding the pet, Increases happiness by 20
  feed: function () {
    this.happiness += 20;
    return `You fed ${this.name}! Happiness is now ${this.happiness}.`;
  },

  // Show the pet's status right now
  status: function () {
    console.log(`Pet Name: ${this.name}, Species: ${this.species}, Happiness: ${this.happiness}`);
  },
};

pet.play()
pet.feed()
pet.status()
