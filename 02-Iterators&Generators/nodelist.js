export default function nodelistDemo() {
  console.group("Nodelist Demo");
  // Node List
  const fruits = document.querySelectorAll('.fruit');
  const fruitIterator = fruits[Symbol.iterator]();
  console.log(fruitIterator.next());
  console.log(fruitIterator.next());
  console.log(fruitIterator.next());
  console.log(fruitIterator.next());
  console.log(fruitIterator.next());
  console.log(fruitIterator.next());
  // Now we are done.
  console.log(fruitIterator.next());

  for (const fruit of fruits) {
    console.log(fruit);
  }

  const fruitList = [...fruits];

  console.log('fruitList', fruitList);

  console.groupEnd();
}