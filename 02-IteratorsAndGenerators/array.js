export default function arrayDemo() {
  console.group("Array Demo");
  // Array
  const numbers = [4, 8, 15, 16, 23, 42]
  // You can get the interator for an array by calling the Symbol.iterator on it
  const numbersIterator = numbers[Symbol.iterator]();
  // Then we can manually call next
  console.log(numbersIterator.next());
  console.log(numbersIterator.next());
  console.log(numbersIterator.next());
  console.log(numbersIterator.next());
  console.log(numbersIterator.next());
  console.log(numbersIterator.next());
  // Done
  console.log(numbersIterator.next());

  // Being an iterable means we can use for..of loops
  for (const number of numbers) {
    console.log(number);
  }

  // We can also use array spread, but the reason this
  // works is because Array is iterable

  const copyOfNumbers = [...numbers];
  console.log(copyOfNumbers);

  console.groupEnd();
}


