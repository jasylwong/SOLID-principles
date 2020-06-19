console.log('Single responsibility principle');

console.log('------ Bad practice ------')
class Worker {
  cook() {
    console.log('Cook tasty food')
  }

  fix() {
    console.log('Fix water leak');
  }
}

const contractor = new Worker();
contractor.cook()
contractor.fix()

console.log('')
console.log('------ Good practice ------')
class Chef extends Worker {
  cook() {
    return 'Cook tasty food'
  }
}

class Plumber {
  cook() {
    return 'Fix water leak'
  }
}

const chef = new Chef();
const plumber = new Plumber();

chef.cook();
plumber.cook();




