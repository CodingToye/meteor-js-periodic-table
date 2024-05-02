export const blocks = [
  {
    category: "string",
    element: "Ch",
    label: "charAt",
    purpose: "method",
    signature: "charAt(index)",
    sample: {
      implementation: "str.charAt(0)",
      return: "'F'",
      setup: "const str = 'Fizz'",
    },
    description:
      "The charAt() method of String values returns a new string consisting of the single UTF-16 implementation unit at the given index.",
  },
  {
    category: "string",
    element: "Co",
    label: "concat",
    purpose: "method",
    signature: "concat(...x)",
    sample: {
      implementation: "str.concat(' ', 'Buzz')",
      return: "'Fizz Buzz'",
      setup: "const str = 'Fizz'",
    },
    description:
      "The concat() method of String values concatenates the string arguments to this string and returns a new string.",
  },
  {
    category: "string",
    element: "Ic",
    label: "includes",
    purpose: "method",
    signature: "includes(searchString, position)",
    sample: {
      implementation: "str.includes('Fizz')",
      return: "true",
      setup: "const str = 'Fizz Buzz'",
    },
    description:
      "The includes() method of String values performs a case-sensitive search to determine whether a given string may be found within this string, returning true or false as appropriate.",
    optionalArgs: ["position"],
  },
  {
    category: "string",
    element: "Pr",
    label: "match",
    purpose: "method",
    signature: "match(regexp)",
    sample: {
      implementation: "str.match(/[A-Z]/g)",
      return: "['F', 'B']",
      setup: "const str = 'Fizz Buzz",
    },
    description:
      "The match() method of String values retrieves the result of matching this string against a regular expression.",
  },
  {
    category: "string",
    element: "Rp",
    label: "repeat",
    purpose: "method",
    signature: "repeat(count)",
    sample: {
      implementation: "str.repeat(2)",
      return: "'Fizz Fizz'",
      setup: "const str = 'Fizz '",
    },
    description:
      "The repeat() method of String values constructs and returns a new string which contains the specified number of copies of this string, concatenated together.",
  },
  {
    category: "string",
    element: "Re",
    label: "replace",
    purpose: "method",
    signature: "replace(pattern, replacement)",
    sample: {
      implementation: "str.replace('Fizz', 'Buzz')",
      return: "'Buzz Buzz'",
      setup: "const str = 'Fizz Buzz'",
    },
    description:
      "replace() method in Strings creates a new string by substituting a pattern with a replacement. The pattern can be a string or a RegExp, and the replacement can be a string or a function. For string patterns, only the first occurrence is replaced, keeping the original string.",
  },
  {
    category: "string",
    element: "Qu",
    label: "search",
    purpose: "method",
    signature: "search(regexp)",
    sample: {
      implementation: "str.search(/[A-Z]/)",
      return: "5",
      setup: "const str = 'fizz Buzz",
    },
    description:
      "The search() method of String values executes a search for a match between a regular expression and this string, returning the index of the first match in the string.",
  },
  {
    category: "string",
    element: "Sc",
    label: "slice",
    purpose: "method",
    signature: "slice(indexStart, indexEnd)",
    sample: {
      implementation: "str.slice(1, 3)",
      return: "'iz'",
      setup: "const str = 'Fizz",
    },
    description:
      "The slice() method of String values extracts a section of this string and returns it as a new string, without modifying the original string.",
    optionalArgs: ["indexEnd"],
  },
  {
    category: "string",
    element: "Sp",
    label: "split",
    purpose: "method",
    signature: "split(separator, limit)",
    sample: {
      implementation: "str.split('i', 2)",
      return: "['F', 'zz']",
      setup: "const str = 'Fizz'",
    },
    description:
      "The split() method of String values takes a pattern and divides this string into an ordered list of substrings by searching for the pattern, puts these substrings into an array, and returns the array.",
    optionalArgs: ["limit"],
  },
  {
    category: "string",
    element: "Lc",
    label: "toLowerCase",
    purpose: "method",
    signature: "toLowerCase()",
    sample: {
      implementation: "str.toLowerCase()",
      return: "'fizz buzz'",
      setup: "const str = 'Fizz BUZZ",
    },
    description:
      "The toLowerCase() method of String values returns this string converted to lower case.",
  },
  {
    category: "string",
    element: "Uc",
    label: "toUpperCase",
    purpose: "method",
    signature: "toUpperCase()",
    sample: {
      implementation: "str.toUpperCase()",
      return: "'FIZZ BUZZ'",
      setup: "const str = 'Fizz buzz",
    },
    description:
      "The toUpperCase() method of String values returns this string converted to upper case.",
  },
  {
    category: "string",
    element: "Ab",
    label: "trim",
    purpose: "method",
    signature: "trim()",
    sample: {
      implementation: "str.trim()",
      return: "'Fizz'",
      setup: "const str = ' Fizz '",
    },
    description:
      "The trim() method of String values removes whitespace from both ends of this string and returns a new string, without modifying the original string.",
  },
  {
    category: "number",
    element: "Fn",
    label: "isFinite",
    purpose: "method",
    signature: "Number.isFinite(value)",
    sample: {
      implementation: "Number.isFinite(0)",
      return: "true",
      setup: "",
    },
    description:
      "The Number.isFinite() static method determines whether the passed value is a finite number — that is, it checks that a given value is a number, and the number is neither positive Infinity, negative Infinity, nor NaN.",
  },
  {
    category: "number",
    element: "In",
    label: "isInteger",
    purpose: "method",
    signature: "Number.isInteger(value)",
    sample: {
      implementation: "Number.isInteger(0.1)",
      return: "false",
      setup: "",
    },
    description:
      "The Number.isInteger() static method determines whether the passed value is an integer.",
  },
  {
    category: "number",
    element: "Na",
    label: "isNaN",
    purpose: "method",
    signature: "Number.isNaN(value)",
    sample: {
      implementation: "Number.isNaN(37)",
      return: "false",
      setup: "",
    },
    description:
      "The Number.isNaN() static method determines whether the passed value is the number value NaN, and returns false if the input is not of the Number type. It is a more robust version of the original, global isNaN() function.",
  },
  {
    category: "number",
    element: "Ps",
    label: "parseFloat",
    purpose: "method",
    signature: "Number.parseFloat(string)",
    sample: {
      implementation: "Number.parseFloat('3.14')",
      return: "3.14 // typeof number",
      setup: "",
    },
    description:
      "The Number.parseFloat() static method parses an argument and returns a floating point number. If a number cannot be parsed from the argument, it returns NaN.",
  },
  {
    category: "number",
    element: "Pi",
    label: "parseInt",
    purpose: "method",
    signature: "Number.parseInt(string, radix)",
    sample: {
      implementation: "Number.parseInt('015', 10)",
      return: "15",
      setup: "",
    },
    description:
      "The Number.parseInt() static method parses a string argument and returns an integer of the specified radix or base.",
    optionalArgs: ["radix"],
  },
  {
    category: "number",
    element: "Tf",
    label: "toFixed",
    purpose: "method",
    signature: "toFixed(digits)",
    sample: {
      implementation: "num.toFixed()",
      return: "123",
      setup: "const num = 123.456",
    },
    description:
      "The toFixed() method of Number values formats this number using fixed-point notation.",
    optionalArgs: ["digits"],
  },
  {
    category: "number",
    element: "Tp",
    label: "toPrecision",
    purpose: "method",
    signature: "toPrecision(precision)",
    sample: {
      implementation: "num.toPrecision(3)",
      return: "5.12",
      setup: "const num = 5.123456",
    },
    description:
      "The toPrecision() method of Number values returns a string representing this number to the specified precision.",
    optionalArgs: ["precision"],
  },
  {
    category: "number",
    element: "Ts",
    label: "toString",
    purpose: "method",
    signature: "toString(radix)",
    sample: {
      implementation: "num.toString()",
      return: "'10'",
      setup: "const num = 10",
    },
    description:
      "The toString() method of Number values returns a string representing this number value.",
    optionalArgs: ["radix"],
  },
  {
    category: "array",
    element: "Or",
    label: "isArray",
    purpose: "method",
    signature: "Array.isArray(value)",
    sample: {
      implementation: "Array.isArray([1])",
      return: "true",
      setup: "",
    },
    description:
      "The Array.isArray() static method determines whether the passed value is an Array.",
  },
  {
    category: "array",
    element: "E",
    label: "from",
    purpose: "method",
    signature: "Array.from(arrayLike, mapFn, thisArg)",
    sample: {
      implementation: "Array.from('fizz')",
      return: "['f','i','z','z']",
      setup: "",
    },
    description:
      "The Array.from() static method creates a new, shallow-copied Array instance from an iterable or array-like object.",
    optionalArgs: ["mapFn", "thisArg"],
  },
  {
    category: "array",
    element: "O",
    label: "of",
    purpose: "method",
    signature: "Array.of(element1, elementN)",
    sample: {
      implementation: "Array.of(1, 2, 3)",
      return: "[1, 2, 3]",
      setup: "",
    },
    description:
      "The Array.of() static method creates a new Array instance from a setup number of arguments, regardless of number or type of the arguments.",
  },
  {
    category: "array",
    element: "Di",
    label: "push",
    purpose: "method",
    signature: "push(element1, elementN)",
    sample: {
      implementation: "arr.push('Pineapple')",
      return: "['Apple', 'Pear', 'Banana', 'Pineapple']",
      setup: "const arr = ['Apple', 'Pear', 'Banana']",
    },
    description:
      "The push() method of Array instances adds the specified elements to the end of an array and returns the new length of the array.",
  },
  {
    category: "array",
    element: "Pp",
    label: "pop",
    purpose: "method",
    signature: "pop()",
    sample: {
      implementation: "arr.pop()",
      return: "['Apple', 'Pear']",
      setup: "const arr = ['Apple', 'Pear', 'Banana']",
    },
    description:
      "The pop() method of Array instances removes the last element from an array and returns that element. This method changes the length of the array.",
  },
  {
    category: "array",
    element: "Tr",
    label: "shift",
    purpose: "method",
    signature: "shift()",
    sample: {
      implementation: "arr.shift()",
      return: "['Pear', 'Banana']",
      setup: "const arr = ['Apple', 'Pear', 'Banana']",
    },
    description:
      "The shift() method of Array instances removes the first element from an array and returns that removed element. This method changes the length of the array.",
  },
  {
    category: "array",
    element: "Us",
    label: "unshift",
    purpose: "method",
    signature: "unshift(element1, elementN)",
    sample: {
      implementation: "arr.unshift('Grape', 'Orange')",
      return: "['Grape', 'Orange', 'Apple', 'Pear', 'Banana']",
      setup: "const arr = ['Apple', 'Pear', 'Banana']",
    },
    description:
      "The unshift() method of Array instances adds the specified elements to the beginning of an array and returns the new length of the array.",
  },
  {
    category: "array",
    element: "Fe",
    label: "forEach",
    purpose: "method",
    signature: "forEach(callbackFn, thisArg)",
    sample: {
      implementation: "arr.forEach((element) => console.log(element)",
      return: "'Apple'",
      setup: "const arr = ['Apple']",
    },
    description:
      "The forEach() method of Array instances executes a provided function once for each array element.",
    optionalArgs: ["thisArg"],
  },
  {
    category: "array",
    element: "Mp",
    label: "map",
    purpose: "method",
    signature: "map(callbackFn, thisArg)",
    sample: {
      implementation: "arr.map((x) => x * 2)",
      return: "[2, 4, 6]",
      setup: "const arr = [1, 2, 3]",
    },
    description:
      "The map() method of Array instances creates a new array populated with the results of calling a provided function on every element in the calling array.",
    optionalArgs: ["thisArg"],
  },
  {
    category: "array",
    element: "Fi",
    label: "filter",
    purpose: "method",
    signature: "filter(callbackFn, thisArg)",
    sample: {
      implementation: "arr.filter((x) => x.length > 4)",
      return: "['Apple', 'Banana']",
      setup: "const arr = ['Apple', 'Pear', 'Banana']",
    },
    description:
      "The filter() method of Array instances creates a shallow copy of a portion of a given array, filtered down to just the elements from the given array that pass the test implemented by the provided function.",
    optionalArgs: ["thisArg"],
  },
  {
    category: "array",
    element: "Rd",
    label: "reduce",
    purpose: "method",
    signature: "reduce(callbackFn, initialValue)",
    sample: {
      implementation: "arr.reduce((acc, cur) => acc + cur, initialValue)",
      return: "10",
      setup: "const arr = [1, 2, 3, 4]",
    },
    description:
      "The reduce() method of Array instances executes a user-supplied 'reducer' callback function on each element of the array, in order, passing in the return value from the calculation on the preceding element. The final result of running the reducer across all elements of the array is a single value.",
    optionalArgs: ["initialValue"],
  },
  {
    category: "array",
    element: "Sl",
    label: "slice",
    purpose: "method",
    signature: "slice(start, end)",
    sample: {
      implementation: "arr.slice(1)",
      return: "['Pear', 'Banana']",
      setup: "const arr = ['Apple', 'Pear', 'Banana']",
    },
    description:
      "The slice() method of Array instances returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified.",
    optionalArgs: ["start", "end"],
  },
  {
    category: "array",
    element: "Si",
    label: "splice",
    purpose: "method",
    signature: "splice(start, deleteCount, item1, itemN)",
    sample: {
      implementation: "arr.splice(1, 0, Peach)",
      return: "['Apple', 'Peach', 'Pear', 'Banana']",
      setup: "const arr = ['Apple', 'Pear', 'Banana']",
    },
    description:
      "The splice() method of Array instances changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.",
    optionalArgs: ["deleteCount", "item1", "itemN"],
  },
  {
    category: "array",
    element: "Iv",
    label: "find",
    purpose: "method",
    signature: "find(callbackFn, thisArg)",
    sample: {
      implementation: "arr.find((element) => element > 5)",
      return: "8",
      setup: "const arr = [5, 12, 8, 75]",
    },
    description:
      "The find() method of Array instances returns the first element in the provided array that satisfies the provided testing function. If no values satisfy the testing function, undefined is returned.",
    optionalArgs: ["thisArg"],
  },
  {
    category: "array",
    element: "I",
    label: "findIndex",
    purpose: "method",
    signature: "findIndex(callbackFn, thisArg)",
    sample: {
      implementation: "arr.findIndex((element) => element > 12)",
      return: "3",
      setup: "const arr = [5, 12, 8, 75]",
    },
    description:
      "The findIndex() method of Array instances returns the index of the first element in an array that satisfies the provided testing function. If no elements satisfy the testing function, -1 is returned.",
    optionalArgs: ["thisArg"],
  },
  {
    category: "array",
    element: "So",
    label: "sort",
    purpose: "method",
    signature: "sort(compareFn)",
    sample: {
      implementation: "arr.sort()",
      return: "['Apple', 'Banana', Pear']",
      setup: "const arr = ['Pear', 'Apple', 'Banana']",
    },
    description:
      "The sort() method of Array instances sorts the elements of an array in place and returns the reference to the same array, now sorted. The default sort order is ascending, built upon converting the elements into strings, then comparing their sequences of UTF-16 implementation units values.",
    optionalArgs: ["compareFn"],
  },
  {
    category: "array",
    element: "Cn",
    label: "concat",
    purpose: "method",
    signature: "concat(value1, value2, valueN)",
    sample: {
      implementation: "arr.concat(['Peach', 'Apricot']",
      return: "['Pear', 'Apple', 'Banana', 'Peach', 'Apricot']",
      setup: "const arr = ['Pear', 'Apple', 'Banana']",
    },
    description:
      "The concat() method of Array instances is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.",
    optionalArgs: ["value1", "value2", "valueN"],
  },
  {
    category: "object",
    element: "Cr",
    label: "create",
    purpose: "method",
    signature: "Object.create(proto, propertiesObject)",
    sample: {
      implementation:
        "const personPrototype = {\n  greet() {\n    console.log(`Hi, I am ${this.name}`);\n  },\n};\n\nconst person1 = Object.create(personPrototype);\nperson1.name = 'Nick';\nperson1.greet();",
      return: "Hi I am Nick",
      setup: "",
    },
    description:
      "The Object.create() static method creates a new object, using an existing object as the prototype of the newly created object.",
    optionalArgs: ["propertiesObject"],
  },
  {
    category: "object",
    element: "Cl",
    label: "keys",
    purpose: "method",
    signature: "Object.keys(obj)",
    sample: {
      implementation: "Object.keys(obj1)",
      return: "['a', 'b', 'c']",
      setup: "const obj1 = {\n  a: 'Apple',\n  b: 7,\n  c: false,\n}",
    },
    description:
      "The Object.keys() static method returns an array of a given object's own enumerable string-keyed property names.",
  },
  {
    category: "object",
    element: "Vl",
    label: "values",
    purpose: "method",
    signature: "Object.values(obj)",
    sample: {
      implementation: "Object.values(obj1)",
      return: "['Apple', 7, false]",
      setup: "const obj1 = {\n  a: 'Apple',\n  b: 7,\n  c: false,\n}",
    },
    description:
      "The Object.values() static method returns an array of a given object's own enumerable string-keyed property values.",
  },
  {
    category: "object",
    element: "En",
    label: "entries",
    purpose: "method",
    signature: "Object.entries(obj)",
    sample: {
      implementation:
        "for (const [key, value] of Object.entries(obj1)) {\n  console.log(`${key}: ${value}`);\n}",
      return: "'a: apple'\n'b: 7'\n'c: false'",
      setup: "const obj1 = {\n  a: 'Apple',\n  b: 7,\n  c: false,\n}",
    },
    description:
      "The Object.entries() static method returns an array of a given object's own enumerable string-keyed property key-value pairs.",
  },
  {
    category: "object",
    element: "As",
    label: "assign",
    purpose: "method",
    signature: "Object.assign(target, source1, sourceN)",
    sample: {
      implementation: "Object.assign(target, source)",
      return: "{ a: 1, b: 4, c: 5 }",
      setup: "const target = { a: 1, b: 2 }\nconst source = { b: 4, c: 5 }\n",
    },
    description:
      "The Object.assign() static method copies all enumerable own properties from one or more source objects to a target object. It returns the modified target object.",
    optionalArgs: ["source1", "sourceN"],
  },
  {
    category: "object",
    element: "Du",
    label: "freeze",
    purpose: "method",
    signature: "Object.freeze(obj)",
    sample: {
      implementation: "obj.prop",
      return: "42",
      setup: "const obj = {\n  prop: 42,\n}\n\nObject.freeze(obj)",
    },
    description:
      "Object.freeze() method freezes an object, preventing extensions and making properties non-writable and non-configurable. Once frozen, the object cannot be changed: no new properties, modifications to existing properties, or re-assignment of prototype. It returns the original object",
  },
  {
    category: "object",
    element: "Se",
    label: "seal",
    purpose: "method",
    signature: "Object.seal(obj)",
    sample: {
      implementation: "obj1.property1",
      return: "33",
      setup:
        "const obj1 = {\n  property: 42,\n}\n\nObject.seal(obj1)\n\nobj1.property1 = 33",
    },
    description:
      "Object.seal() method seals an object, disallowing extensions and making properties non-configurable. Sealed objects have a fixed set of properties: no new properties, removal of existing ones, or changes to enumerability and configurability. However, existing property values can still be modified if writable. It returns the original object.",
  },
  {
    category: "object",
    element: "Op",
    label: "hasOwnProperty",
    purpose: "method",
    signature: "hasOwnProperty(prop)",
    sample: {
      implementation: "obj1.hasOwnProperty('property1)",
      return: "true",
      setup: "const obj1 = {}\nobj1.property1 = 42",
    },
    description:
      "The hasOwnProperty() method of Object instances returns a boolean indicating whether this object has the specified property as its own property (as opposed to inheriting it).",
  },
  {
    category: "object",
    element: "Tn",
    label: "toString",
    purpose: "method",
    signature: "Object.toString()",
    sample: {
      implementation: "dog1.toString()",
      return: "Ted",
      setup:
        "function Dog(name) {\n  this.name = name\n}\n\nconst dog1 = new Dog('Ted')\n\nDog.prototype.toString = function dogToString() {\n  return `${this.name}`\n}",
    },
    description:
      "The toString() method of Object instances returns a string representing this object. This method is meant to be overridden by derived objects for custom type coercion logic.",
  },
  {
    category: "async",
    element: "Pt",
    label: "Promise",
    purpose: "construct",
    signature: "Promise(executor)",
    sample: {
      implementation: "promise1",
      return: "'fizz'",
      setup:
        "const promise1 = new Promise((resolve, reject) => {\n  setTimeout(() => {\n    resolve('fizz')\n  }, 300)\n})\n\npromise1.then((value) => {\n  console.log(value)\n})",
    },
    description:
      "The Promise() constructor creates Promise objects. It is primarily used to wrap callback-based APIs that do not already support promises.",
  },
  {
    category: "async",
    element: "Aa",
    label: "async/await",
    purpose: "construct",
    signature: "async/await",
    sample: {
      implementation:
        "async function myFunc(params) {\n  // Async code here\n  await asyncOperation()\n  return result\n}",
      return: "",
      setup: "",
    },
    description:
      "async/await simplifies asynchronous JavaScript, using async to define asynchronous functions and await to pause execution until promises resolve. It improves readability and error handling, resembling synchronous code with try/catch blocks.",
  },
  {
    category: "async",
    element: "Tu",
    label: "Promise.then",
    purpose: "method",
    signature: "Promise.then(onFulfilled, onRejected)",
    sample: {
      implementation: "promise1.then((value) => {\n  console.log(value)\n})",
      return: "success",
      setup:
        "const promise1 = new Promise((resolve, reject) => {\n  resolve('success')\n})",
    },
    description:
      "The then() method of Promise instances takes up to two arguments: callback functions for the fulfilled and rejected cases of the Promise. It immediately returns an equivalent Promise object, allowing you to chain calls to other promise methods.",
    optionalArgs: ["onRejected"],
  },
  {
    category: "async",
    element: "Ca",
    label: "Promise.catch",
    purpose: "method",
    signature: "Promise.catch(onRejected)",
    sample: {
      implementation: "promise1.catch((error) => {\n  console.error(error)\n})",
      return: "failure",
      setup:
        "const promise1 = new Promise((resolve, reject) => {\n  throw new Error('failure')\n})",
    },
    description:
      "The catch() method of Promise instances schedules a function to be called when the promise is rejected. It immediately returns an equivalent Promise object, allowing you to chain calls to other promise methods. It is a shortcut for Promise.prototype.then(undefined, onRejected).",
  },
  {
    category: "async",
    element: "Po",
    label: "Promise.finally",
    purpose: "method",
    signature: "promiseInstance.finally(onFinally)",
    sample: {
      implementation:
        "checkMail()\n  .then((mail) => {\n    console.log(mail)\n  })\n  .catch((err) => {\n    console.error(err)\n  })\n  .finally(() => {\n    console.log('Experiment completed')\n  })",
      return: "",
      setup:
        "function checkMail() {\n  return new Promise((resolve, reject) => {\n    if (Math.random() > 0.5) {\n      resolve('Mail has arrived')\n    } else {\n      reject(new Error('failed to arrive'))\n    }\n  })\n}",
    },
    description:
      "The finally() method of Promise instances schedules a function to be called when the promise is settled (either fulfilled or rejected). It immediately returns an equivalent Promise object, allowing you to chain calls to other promise methods.",
  },
  {
    category: "async",
    element: "Om",
    label: "Promise.all",
    purpose: "method",
    signature: "Promise.all(iterable)",
    sample: {
      implementation:
        "Promise.all([promise1, promise2, promise3]).then((values) => {\n  console.log(values)\n})",
      return: "[3, 42, 'fizz']",
      setup:
        "const promise1 = Promise.resolve(3)\nconst promise2 = 42\nconst promise3 = new Promise((resolve, reject) => {\n  setTimeout(resolve, 100, 'fizz')\n})",
    },
    description:
      "The Promise.all() static method takes an iterable of promises as input and returns a single Promise. This returned promise fulfills when all of the input's promises fulfill (including when an empty iterable is passed), with an array of the fulfillment values. It rejects when any of the input's promises rejects, with this first rejection reason.",
  },
  {
    category: "async",
    element: "Ge",
    label: "Promise.race",
    purpose: "method",
    signature: "Promise.race(iterable)",
    sample: {
      implementation:
        "Promise.race([promise1, promise2]).then((value) => {\n  console.log(value)\n})",
      return: "two",
      setup:
        "const promise1 = new Promise((resolve, reject) => {\n  setTimeout(resolve, 500, 'one')\n})\n\nconst promise2 = new Promise((resolve, reject) => {\n  setTimeout(resolve, 100, 'two')\n})",
    },
    description:
      "The Promise.race() static method takes an iterable of promises as input and returns a single Promise. This returned promise settles with the eventual state of the first promise that settles.",
  },
  {
    category: "async",
    element: "Ha",
    label: "Promise.allSettled",
    purpose: "method",
    signature: "Promise.allSettled(iterable)",
    sample: {
      implementation:
        "Promise.allSettled(promises).then((results) =>\n  results.forEach((result) => console.log(result.status))\n)",
      return: "'fulfilled'\n'rejected'",
      setup:
        "const promise1 = Promise.resolve(3)\nconst promise2 = new Promise((resolve, reject) =>\n  setTimeout(reject, 100, 'fizz'),\n)\n\nconst promises = [promise1, promise2]",
    },
    description:
      "The Promise.allSettled() static method takes an iterable of promises as input and returns a single Promise. This returned promise fulfills when all of the input's promises settle (including when an empty iterable is passed), with an array of objects that describe the outcome of each promise.",
  },
  {
    category: "async",
    element: "Qi",
    label: "Promise.any",
    purpose: "method",
    signature: "Promise.any(iterable)",
    sample: {
      implementation:
        "Promise.any(promises).then((value) => console.log(value))",
      return: "'quick'",
      setup:
        "const promise1 = Promise.reject(0)\nconst promise2 = new Promise((resolve) => setTimeout(resolve, 100, 'quick'))\nconst promise3 = new Promise((resolve) => setTimeout(resolve, 500, 'slow'))\n\nconst promises = [promise1, promise2, promise3]",
    },
    description:
      "The Promise.any() static method takes an iterable of promises as input and returns a single Promise. This returned promise fulfills when any of the input's promises fulfills, with this first fulfillment value. It rejects when all of the input's promises reject (including when an empty iterable is passed), with an AggregateError containing an array of rejection reasons.",
  },
];
