export default async function asyncGeneratorDemo() {
  console.group("Async Generator Demo");

  const dogDiv = document.getElementById('dogImages');
  dogDiv.innerHTML = '';

  async function* asyncGenerator() {
    let dogCount = 0;
    while (dogCount < 5) {
      const response = await fetch('https://dog.ceo/api/breeds/image/random');
      const dog = await response.json();
      dogCount++
      yield dog.message;
    }
  }
  
  for await (const dog of asyncGenerator()) {
    console.log(dog);
    const image = document.createElement('img');
    image.src = dog;
    dogDiv.append(image);
  }

  console.groupEnd();
}