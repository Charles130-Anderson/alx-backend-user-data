export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  cloneCar() {
    const current = this;
    // Create a new object with the same prototype as current object
    const cloned = Object.create(Object.getPrototypeOf(current));
    // Copy over specific attributes
    cloned._brand = current._brand;
    cloned._motor = current._motor;
    cloned._color = current._color;
    return cloned;
  }
}
