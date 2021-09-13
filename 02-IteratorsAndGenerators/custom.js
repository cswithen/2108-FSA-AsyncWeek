export default function customDemo() {
  console.group('Custom Iterable Demo');
  // We can make our own iterable objects
  // Although generators will make this easier
    const counter = {
    // iterator protocol
    [Symbol.iterator]: function () {
      let count = 0;
      return {
        // iterable protocol
        next: function () {
          if (count >= 10) {
            return {
              done: true,
              value: undefined
            }
          }
          count++;
          return {
            done: false,
            value: count
          }
        }
      }
    }
  }

  // We can get the iterator function by calling it
  const i = counter[Symbol.iterator]();
  // We can now iterate through this by continually calling next()
  console.log(i.next());
  console.log(i.next());
  console.log(i.next());
  console.log(i.next());
  console.log(i.next());
  console.log(i.next());
  console.log(i.next());
  console.log(i.next());
  console.log(i.next());
  console.log(i.next());
  // This one will be done
  console.log(i.next());

  // The for.. of loop uses this mechanism
  for (const count of counter) {
    console.log(count);
  }

  // Array Spreading also uses this mechanism
  const counterNumbers = [...counter];

  console.log(counterNumbers);

  console.groupEnd();
}