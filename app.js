// 1. head

// 2. body

// 3. все дочерние элементы body и вывести их в консоль.

// 4. первый div и все его дочерние узлы

// а) вывести все дочерние узлы в консоль

// б) вывести в консоль все дочерние узлы, кроме первого и последнего


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

// При помощи оператора ... получаем из коллекции массив который фильтруем сравнивая каждый элемент с первым и последним элементом в div. 
const filteredArticles = [...div.children].filter(p => p !== div.firstElementChild && p !== div.lastElementChild);
console.lo


// функция, которая принимает два элемента. 
// Функция проверяет, является ли первый элемент родителем для второго:
//Функция принимает только DOM объекты. 

function isParent(parent, child) {
  // Проверяем что переданные элементы являются HTML элементами
  if (!(parent instanceof HTMLElement) || !(child instanceof HTMLElement)) return;

  let isParent = false;
  let currentParent = child.parentElement;
  
  while(currentParent) {
    isParent = currentParent === parent
    if (isParent) {
      break;
    }

    currentParent = currentParent.parentElement;
  }

  return isParent;
}

isParent(document.body.children[0], document.querySelector('mark'));


console.log(isParent(document.body.children[0], document.querySelector('a')));






