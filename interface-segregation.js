console.log('Interface segregation principle');

console.log('------ Bad practice ------')

class Animal {
  eat() {
    return 'om nom nom'
  }

  fly() {
    return 'flappy flappy'
  }

  swim() {
    return 'Splish splash'
  }

  run() {
    return 'cloppety clop'
  }
}

class Bird extends Animal {}
class Fish extends Animal {}
class Horse extends Animal {}

console.log('')
console.log('------ Good practice ------')

class Animal {
  eat() {
    return 'om nom nom'
  }
}

class Bird extends Animal {
  fly() {
    return 'flappy flappy'
  }
}

class Fish extends Animal {
  swim() {
    return 'Splish splash'
  }
}

class Horse {  
  run() {
    return 'cloppety clop'
  }
}