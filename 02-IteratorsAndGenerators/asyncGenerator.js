export default async function asyncGeneratorDemo() {
  console.group("Async Generator Demo");

  const dogDiv = document.getElementById('dogImages');
  dogDiv.innerHTML = '';

  // We can make an object here and return an async generator function, 
  // and then everytime we for await of the dogFetcher object, we fetch the dogs
  // in a loop
  const dogFetcher = {
    [Symbol.asyncIterator]: async function* () {
      let dogCount = 0;
      while (dogCount < 5) {
        const response = await fetch('https://dog.ceo/api/breeds/image/random');
        const dog = await response.json();
        dogCount++
        yield dog.message;
      }
    }    
  }

  // Note: if you just need to fetch a bunch of URLs at once, you can just use 
  // Promise.all() and not mess with this
 
  // You must use for await of in an async function
  for await (const dog of dogFetcher) {
    console.log(dog);
    const image = document.createElement('img');
    image.src = dog;
    dogDiv.append(image);
  }

  console.groupEnd();
}