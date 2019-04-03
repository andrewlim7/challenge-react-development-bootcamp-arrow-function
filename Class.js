class Car {
    constructor(owner) {
      this.brand = 'Tesla'
      this.model = 'Model X'
      this.owner = owner
    }
  
    drive() {
      console.log(`${this.owner.name} is driving ${this.owner.gender == 'male' ? 'his' : 'her'} ${this.brand}`)
    }
  }

  const hisCar = new Car({
    name: 'Nicholas',
    age: 21,
    gender: 'male'
  })

  hisCar.drive() // Nicholas is driving his Tesla
console.log(hisCar.brand) // Tesla
console.log(hisCar.model) // Model X
console.log(hisCar.owner) // { name: 'Nicholas', age: 21, gender: 'male' }