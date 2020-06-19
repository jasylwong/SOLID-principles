console.log('Dependency inversion principle');

console.log('------ Bad practice ------')

class Fisherman {
  get_fish() {
    const net = new Net();
    net.catch_fish
  }
}

class Net {
  catch_fish() {
    return fish;
  }
}

console.log('')
console.log('------ Good practice ------')

// This method needs reworking
const use_tool = (Tool, method) => {
  const tool = new Tool
  tool.method
}

class Fisherman {
  get_fish() {
    const net = new Net();
    net.catch(fish)
  }
}

class Net {
  catch(item) {
    return item;
  }
}
