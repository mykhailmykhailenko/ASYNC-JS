const API_BASE = 'https://dummyjson.com/products';
const root = document.querySelector('#root');

const spinner = document.createElement('div');
spinner.classList.add('loader');
/* <div class="loader">Loading...</div> */

root.append(spinner);

fetch(API_BASE)
.then((responce)=>{
   return responce.json()
})
.then((data)=>{
   const liArray = data.products.map(createCard);
   const ul = document.createElement('ul');
   ul.append(...liArray);
   root.append(ul);
})
.catch((error)=>{
    root.append('Some error happening')
})
.finally(()=>{
    spinner.remove();
})


function createCard(obj){
    const li = document.createElement('li');
    li.append(obj.title);
    return li;
}