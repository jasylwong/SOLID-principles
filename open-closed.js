console.log('Open-closed principle');

console.log('------ Bad practice ------')

class Chef {
  fry() {
    return 'Fry an egg'
  }
}

// becomes
class Chef {
  bake() {
    return 'Bake a cake'
  }
}

console.log('')
console.log('------ Good practice ------')

class Chef {
  fry() {
    return 'Fry an egg'
  }
}

// becomes
class Chef {
  fry() {
    return 'Fry an egg'
  }

  bake() {
    return 'Bake a cake'
  }
}

const chef = new Chef()
chef.fry()
chef.bake()