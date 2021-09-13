export default async function asyncIterableDemo() {

  console.group("Async Iterable Demo");

  const dogDiv = document.getElementById('dogImages');
  dogDiv.innerHTML = '';

  const asyncIterable = {
    [Symbol.asyncIterator]: function () {
      let dogCount = 0;
      return {
        next: async function () {
          if (dogCount >= 5) {
            return {
              done: true,
              value: undefined
            }
          }
          const response = await fetch('https://dog.ceo/api/breeds/image/random');
          const dog = await response.json();
          dogCount++;
          return {
            done: false,
            value: dog.message
          }
        }
      }
    }
  };

  // Now we can use the for await .. of loop
  for await (const dog of asyncIterable) {
    console.log(dog);
    const image = document.createElement('img');
    image.src = dog;
    dogDiv.append(image);
  }

  console.groupEnd();
}