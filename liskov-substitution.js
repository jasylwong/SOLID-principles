// Check this

console.log('Liskov substitution principle');

console.log('------ Bad practice ------')

class Chef {
  bakeCake(type) {
    return `Bake ${type} cake`
  }
}

class Apprentice extends Chef {
  bakeCake() {
    return 'Fry an egg'
  }
}

console.log('')
console.log('------ Good practice ------')

class Chef {
  bakeCake(type) {
    return `Bake ${type} cake`
  }
}

class Apprentice extends Chef {
  bakeChocolateCake() {
    return 'Bake chocolate cake'
  }
}