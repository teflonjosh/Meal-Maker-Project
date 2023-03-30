// Meal Maker Project https://www.codecademy.com/

// Create Object
const menu = {
  // Meal and Price Objects.
  _plate: " ",
  _price: " ",

  // Verify PLATE is a string
  set plate(plateToCheck) {
    if (typeof plateToCheck === "String") {
      this._plate = plateToCheck;
      return this._plate;
    }
  },

  // Verify PRICE is a Number
  set price(priceToCheck) {
    if (typeof priceToCheck === number) {
      this._price = priceToCheck;
      return this._price;
    }
  },

  // Log Results to Console
  get todaysSpecial() {
    if (this._plate && this._price) {
      return `The Daily Special for Today is ${this._plate} for $${this._price}`;
    } else {
      return "Meal or price was not set correctly! ";
    }
  },
};

// Enter PLATE and PRICE objects
menu._plate = "Taco";
menu._price = 10;

// Log Specials
console.log(menu.todaysSpecial);
