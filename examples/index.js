// import
import { IShape } from "shape";

// constant
const foo = "bar";
const bar = 123;

// function
function sum(a, b) {
  return a + b;
}

// fat arrow function
const multiply = (a, b) => {
  return a * b;
};

// class
export class Rectangle extends IShape {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }

  draw() {
    console.log("Feature is not implemented yed!");
  }
}

export { foo, bar, sum, multiply };
