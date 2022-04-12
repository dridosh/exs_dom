//1
console.log(document.head);
//2
console.log(document.body);
//3
console.log(document.body.children);
//4.а
console.log(document.body.firstElementChild);
console.log(document.body.firstElementChild.children);
// 4.б
const div = document.body.firstElementChild;
// При помощи оператора ... мы получаем из коллекции массив который фильтруем сравнивая каждый элемент с первым и последним элементом в div. 
const filteredArticles = [...div.children].filter(p => p !== div.firstElementChild && p !== div.lastElementChild);
console.log(filteredArticles);