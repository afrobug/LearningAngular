// Primitives: number, string, boolean
// More complex types: arrays, objects
// Function types, parameters

// Primitives

let age: number;

age = 12;

let userName: string | string[];

userName = 'Max';

let isInstructor: boolean;

isInstructor = true;

// More complex types

let hobbies: string[];

hobbies = ['Sports', 'Cooking'];

type Person = {
  name: string;
  age: number;
};
//added by TypeScript 

let person: Person;

//default type is any - which means anything is allowed


person = {
  name: 'Max',
  age: 32,
};

// person = {
//   isEmployee: true
// };

let people: Person[];

// Type inference

let course: string | number = 'React - The Complete Guide';
//Union types string | number

course = 12341;

// Functions & types

function addNumbers(a: number, b: number) {
  return a + b;
}
//addNumbers(a: number, b: number): number > infered return type

function printOutput(value: any) {
  console.log(value);
}
//function does not have return value hence void
// printOutput(value: any): void

// Generics

function insertAtBeginning<T>(array: T[], value: T) {
  const newArray = [value, ...array];
  return newArray;
}

const demoArray = [1, 2, 3];

const updatedArray = insertAtBeginning(demoArray, -1); // [-1, 1, 2, 3]
const stringArray = insertAtBeginning(['a', 'b', 'c'], 'd');

// updatedArray[0].split('');

class Student {
  // firstName: string;
  // lastName: string;
  // age: number;
  // private courses: string[];

  constructor(
    public firstName: string,
    public lastName: string,
    public age: number,
    private courses: string[]
  ) {}

  enrol(courseName: string) {
    this.courses.push(courseName);
  }

  listCourses() {
    return this.courses.slice();
  }
}

const student = new Student('Max', 'Schwarz', 32, ['Angular']);
student.enrol('React');
// student.listCourses(); => Angular, React

// student.courses => Angular, React


interface Human {
  firstName: string;
  age: number;

  greet: () => void;
}

//alternate to type in line no 25

let max: Human;

max = {
  firstName: 'Max',
  age: 32,
  greet() {
    console.log('Hello!');
  },
};

class Instructor implements Human {
  firstName: string;
  age: number;
  greet() {
    console.log('Hello!!!!');
  }
}