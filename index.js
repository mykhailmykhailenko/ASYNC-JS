const API_BASE = 'https://dummyjson.com/products';
const root = document.querySelector('#root');

fetch(API_BASE)
.then((responce)=>{
   return responce.json();
})
.then((data)=>{
   const liArray = data.products.map(createCard);
   const ul = document.createElement('ul');
   ul.append(...liArray);
   root.append(ul);
})


function createCard(obj){
    const li = document.createElement('li');
    li.append(obj.title);
    return li;
}