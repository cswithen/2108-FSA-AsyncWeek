export default function generatorDemo() {
  console.group('Generator Demo');
  // This is how we define a generator.
  // It returns a generator object, which is 
  // both an interable and an iterator
  function* counter() {
    let count = 0;
    while (count < 10) {
      // yield means to advance the iterator,
      // the value yielded ends up in the iterator object
      // the function PAUSES here until .next() is called
      yield count++;
    }
  }

  const counterIterator = counter();
  console.log(counterIterator.next());
  console.log(counterIterator.next());
  console.log(counterIterator.next());
  console.log(counterIterator.next());
  console.log(counterIterator.next());
  console.log(counterIterator.next());
  console.log(counterIterator.next());
  console.log(counterIterator.next());
  console.log(counterIterator.next());
  console.log(counterIterator.next());
  // This one will be done.
  console.log(counterIterator.next());


  for (const number of counter()) {
    console.log(number);
  }

  const numbers = [...counter()];
  console.log('numbers', numbers);

  console.groupEnd();
}