// ================================================= 
// Class Laptop
// =================================================

class Laptop {

  constructor(serialNumber, price, brand, model, type, processor, ram) {

    this.serialNumber = serialNumber;
    this.price        = price;
    this.brand        = brand;
    this.model        = model;
    this.type         = type;
    this.processor    = processor;
    this.ram          = ram;

  }

  getSerialNumber = () => this.serialNumber;
  getPrice        = () => this.price;
  setPrice        = (newPrice) => this.price = newPrice;
  getBrand        = () => this.brand;
  getModel        = () => this.model;
  getType         = () => this.type;
  getProcessor    = () => this.processor;
  getRam          = () => this.ram;
}



// =================================================
// Class Inventory
// =================================================

class Inventory {

  constructor() {
    this.laptops = [];
  }

  addLaptop = (sn, price, brand, model, type, processor, ram) => {
    this.laptops.push(
      new Laptop(sn, price, brand, model, type, processor, ram)
    );
  };

  getLaptop = (sn) =>
    this.laptops.find(l => l.getSerialNumber() === sn) || null;

  // Cari satu hasil (pertama cocok)
  searchOne = (spec) =>
    this.laptops.find(l =>
      (!spec.getBrand()     || spec.getBrand() === l.getBrand()) &&
      (!spec.getModel()     || spec.getModel().toLowerCase() === l.getModel().toLowerCase()) &&
      (!spec.getType()      || spec.getType() === l.getType()) &&
      (!spec.getProcessor() || spec.getProcessor() === l.getProcessor()) &&
      (!spec.getRam()       || spec.getRam() === l.getRam())
    ) || null;

  // Cari semua hasil (multiple match)
  searchMany = (spec) =>
    this.laptops.filter(l =>
      (!spec.getBrand()     || spec.getBrand() === l.getBrand()) &&
      (!spec.getModel()     || spec.getModel().toLowerCase() === l.getModel().toLowerCase()) &&
      (!spec.getType()      || spec.getType() === l.getType()) &&
      (!spec.getProcessor() || spec.getProcessor() === l.getProcessor()) &&
      (!spec.getRam()       || spec.getRam() === l.getRam())
    );
}



// =================================================
// Data Laptop
// =================================================

const inventory = new Inventory();

// ASUS Gaming
inventory.addLaptop("L001", 1800, "ASUS", "ROG Strix", "Gaming", "Intel i7", "16GB");

// Lenovo Office
inventory.addLaptop("L002", 1200, "Lenovo", "ThinkPad X1", "Office", "Intel i5", "16GB");

// HP Office
inventory.addLaptop("L003", 1100, "HP", "EliteBook", "Office", "Intel i5", "8GB");

// Acer Gaming
inventory.addLaptop("L004", 1500, "Acer", "Predator", "Gaming", "Intel i7", "16GB");

// Dell Multimedia
inventory.addLaptop("L005", 1400, "Dell", "XPS 13", "Multimedia", "Intel i7", "16GB");



// =================================================
// Contoh Pencarian
// =================================================

// Cari laptop Gaming merk ASUS
const findAsusGaming = new Laptop(null, null, "ASUS", null, "Gaming", null, null);
console.log("\n🔍 Hasil pencarian ASUS Gaming:");
console.log(inventory.searchOne(findAsusGaming));

// Cari semua laptop Office
const findOffice = new Laptop(null, null, null, null, "Office", null, null);
console.log("\n💼 Semua laptop Office:");
console.log(inventory.searchMany(findOffice));

// Cari laptop model tertentu (Dell XPS 13)
const findDell = new Laptop(null, null, "Dell", "XPS 13", null, null, null);
console.log("\n💻 Dell XPS 13 ditemukan:");
console.log(inventory.searchOne(findDell));