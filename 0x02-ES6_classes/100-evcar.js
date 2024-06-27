/* eslint-disable class-methods-use-this */
import Car from './10-car';

export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this._range = range;
  }

  /**
   * Override cloneCar method to clone an EVCar instance.
   * @returns {EVCar} Cloned EVCar instance with the same properties.
   */
  cloneCar() {
    // Create a new EVCar instance with current attributes
    return new EVCar(this._brand, this._motor, this._color, this._range);
  }
}
