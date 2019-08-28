export default (function() {
  // console.log(greetNamed("John"));
  // console.log(greetUnnamed("John"));

  function greetNamed(name: string) : string {
    if (name) {
      return `Hello, ${name}`;
    }
  }

  let greetUnnamed = function(name: string) : string {
    if (name) {
      return `Hello, ${name}`;
    }
  }

  // console.log(greetNamed('Vasily'));

  let add: (foo: number, bar: number, foobar: number) => number;

  add = function add (foo: number, bar: number, foobar: number): number {
    return foo + bar + foobar;
  }

  function advancedAdd(numbers: number[]): string {
    return `${numbers.reduce((prev, current) => {
      return prev + current;
    }, 0)}`
  }



  console.log(add(1, 5, 7));

  console.log(advancedAdd([5, 34]))

interface OverloadingInterface {
  someMethod(someParameter: "string"): string;
  someMethod(someParameter: "number"): number;
  someMethod(someParameter: boolean): boolean;
}

class OverloadedClass implements OverloadingInterface {
  someMethod(param: "string");
  someMethod(param: "number");
  someMethod(param: boolean);
  someMethod(param: "string" | "number" | boolean) {
    if (param === 'string') {
      return 'string';
    } else if (param === 'number') {
      return '10';
    } else if (typeof param === 'boolean') {
      return [1, 5, 10];
    }
  }
}

new OverloadedClass().someMethod('number').toLowerCase();

})();