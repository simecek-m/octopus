// import
import { IShape } from "shape";

// constant
const foo: string = "bar";
const bar: number = 123;
const isActive: boolean = true;

// function
function sum(a: number, b: number): number {
  if (isActive) {
    return a + b;
  } else {
    throw Error("Math module is not active!");
  }
}

// fat arrow function
const multiply = (a: number, b: number): number => {
  console.log(`multiplying ${a} * ${b}`);
  return a * b;
};

// interface
interface Circle extends IShape {
  name: string;
  radius: number;
  stroke: number;
  draw: () => void;
}

// type
type ShapeType = "square" | "rectangle" | "triangle" | "circle";

// export
export { foo, bar, sum, multiply, Circle, ShapeType };
