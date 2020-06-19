console.log('Single responsibility principle');

console.log('------ Bad practice ------')
class Contractor {
  cook() {
    console.log('Cook tasty food')
  }

  fix() {
    console.log('Fix water leak');
  }
}

const contractor = new Contractor();
contractor.cook()
contractor.fix()

console.log('')
console.log('------ Good practice ------')
class Chef {
  cook() {
    return 'Cook tasty food'
  }
}

class Plumber {
  fix() {
    return 'Fix water leak'
  }
}

const chef = new Chef();
const plumber = new Plumber();

chef.cook();
plumber.fix();




