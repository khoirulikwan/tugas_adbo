class Guitar {
  constructor(
    serialNumber,
    price,
    builder,
    model,
    type,
    backWood,
    topWood
  ) {
    this.serialNumber = serialNumber;
    this.price = price;
    this.builder = builder;
    this.model = model;
    this.type = type;
    this.backWood = backWood;
    this.topWood = topWood;
  }

  getSerialNumber() {
    return this.serialNumber;
  }

  getPrice() {
    return this.price;
  }

  setPrice(price) {
    this.price = price;
  }

  getBuilder() {
    return this.builder;
  }

  getModel() {
    return this.model;
  }

  getType() {
    return this.type;
  }

  getBackWood() {
    return this.backWood;
  }

  getTopWood() {
    return this.topWood;
  }
}

class Inventory {
  constructor() {
    this.guitars = [];
  }

  addGuitar(
    serialNumber,
    price,
    builder,
    model,
    type,
    backWood,
    topWood
  ) {
    const guitar = new Guitar(
      serialNumber,
      price,
      builder,
      model,
      type,
      backWood,
      topWood
    );
    this.guitars.push(guitar);
  }

  getGuitar(serialNumber) {
    for (const guitar of this.guitars) {
      if (guitar.getSerialNumber() === serialNumber) {
        return guitar;
      }
    }
    return null;
  }

  searchGuitar(searchGuitar) {
    for (const guitar of this.guitars) {
      if (
        (searchGuitar.builder && guitar.getBuilder() !== searchGuitar.builder) ||
        (searchGuitar.model && guitar.getModel() !== searchGuitar.model) ||
        (searchGuitar.type && guitar.getType() !== searchGuitar.type) ||
        (searchGuitar.backWood && guitar.getBackWood() !== searchGuitar.backWood) ||
        (searchGuitar.topWood && guitar.getTopWood() !== searchGuitar.topWood)
      ) {
        continue;
      }
      return guitar;
    }
    return null;
  }
}

// Contoh penggunaan:
const inventory = new Inventory();
inventory.addGuitar("SN001", 1500, "Fender", "Stratocaster", "Electric", "Alder", "Maple");

const foundGuitar = inventory.searchGuitar({ builder: "Fender", model: "Stratocaster" });
console.log(foundGuitar);
