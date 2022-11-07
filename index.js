/* async/await */

async function loadImage() {
    try {
      const responce = await fetch('https');
     const result = await responce.json();
     console.log(result);
    } catch(error) {
         console.log(error.message);
     }
     console.log('Another code')
 }
 
 
 const result = loadImage();
 
 console.log('Sync code');