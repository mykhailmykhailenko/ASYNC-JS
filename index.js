/* async/await */

async function loadImage() {
    // const promise = await fetch('https://dummyjson.com/products/1');
    const promise = await Promise.resolve(5);
    ///// цей код буде відкладено
    console.log(promise)
}

const result = loadImage();

console.log('Sync code');