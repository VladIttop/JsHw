//* _.chunk(array, [size=1])
//? Розподіляє масив на стільки масивів скільки прописано
const arrChunk = _.chunk(["1", "2", "3", "4"], 2);
console.log(arrChunk);
// (2) ['1', '2'] (2) ['3', '4']

//* _.join(array, [separator=','])
//? Прописує всі елементи масиву в рядок зі вказаним роздільником
const arrJoin = _.join(["a", "b", "c"], ",")
console.log(arrJoin);
// a,b,c

//* _.last(array)
//? Дає останній елемент масиву
const arrLast = _.last(["a", "b", "c"])
console.log(arrLast);
// c

//* _.size(collection)
//?  Дає розмір масиву, строки, обєкту тд.
const arrSize = _.size('Влад');
console.log(arrSize);
//  4

//* _.add(augend, addend)
//? Додає числа
const add = _.add(5, 5);
console.log(add);
//10

//* _.camelCase([string=''])
//? Переписує текст в camel case
const camelCase = _.camelCase('Foo Bar');
console.log(camelCase);
// fooBar

//* _.take(array, [n=1])
//? Вибирає n перших елементів масиву
const take = _.take(['a', 'b', 'c'], 2);
console.log(take);
// ['a', 'b']

//* _.compact(array)
//? Видаляє всі false значення
const compact = _.compact([1, 2, false, 3, null, 'hello']);
console.log(compact);
// [1, 2, 3, 'hello']

//* _.difference(array, [values])
//? Видає різницю чисел
const difference = _.difference([2, 1], [2, 3]);
console.log(difference);
// [1]

//* _.zip([arrays])
//? Об'єднує масиви true та false
const zip = _.zip(['a', 'b'], [1, 2], [true, false]);
console.log(zip);
// [['a', 1, true], ['b', 2, false]]
