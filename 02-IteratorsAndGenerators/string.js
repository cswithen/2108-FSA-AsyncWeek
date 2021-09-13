export default function stringDemo() {
  console.group("String Demo");

  // String
  const message = "Hello World";
  const messageIterator = message[Symbol.iterator]();
  console.log(messageIterator.next());
  console.log(messageIterator.next());
  console.log(messageIterator.next());
  console.log(messageIterator.next());
  console.log(messageIterator.next());
  console.log(messageIterator.next());
  console.log(messageIterator.next());
  console.log(messageIterator.next());
  console.log(messageIterator.next());
  console.log(messageIterator.next());
  console.log(messageIterator.next());
  // Now we are done.
  console.log(messageIterator.next());

  for (const letter of message) {
    console.log(letter);
  }

  const letterArray = [...message];
  console.log('letterArray', letterArray);

  console.groupEnd();
}