"# React-udemy" 

[Getting Started](#getting-started)
[Next-Generation JavaScript](#next-generation-javascript)

## Getting Started

### Intro
2020.02.04. Видео 1-5

React - js библиотека
React приложения запускаются в браузере, позволяет строить странички по частям, компонентам, которые легко переиспользовать.
Reactjs.org
http://codepen.io/ - песочница
react-dom - для рендеринга компонент react в real Dom
Babel - тулза, которая компилирует next-generation js code в код, который запустится в браузере


#### Компонент

Компонент - это функция, возвращает код, который рендерится в DOM-е
Возвращаемый код, то что в скобках return () ,похож на HTML разметку, это **JSX** синтакс, сахар.
Babel преобразует **JSX** в JS.
Имена функций с большой буквы

```javascript
ReactDOM.render(<Person/>, document.querySelector('#p1'));
```
эта запись обозначает, что компонент Person я хочу срендерить в место в HTML страничке, где находитcя p1.

Чтобы можно было динамически подставлять данные в компонент:
 * добавить в компонент параметр, назовём его props
 * внутри компонента использовать {props.name}
 * при рендере задать свойства: 
```javascript 
 ReactDOM.render(<Person name="Max" age="28"/>, document.querySelector('#p1'));
 ```

чтобы не вызывать ReactDOM.render много раз:
 * создали переменную app;
 * присвоили ей div с Person (несколькими разными)
 * в HTML файле оставили только <div id="app"></div>
 * ReactDOM.render(app, document.querySelector('#app'));

2020.02.05. Видео 6-10

Ещё причины использовать React:
 * в большом js проекте сложно управлять UI state-ами, наверняка придется вручную менять способы обращения к элементам, с React всё динамически и изи
 * позволяет сфокусироваться на бизнес-логике приложения, а не на том как это реализовать

Альтернативы React-а: 
 * Angular
 * Vue
 * JQuery - не совсем альтернатива, JQuary про traversing the DOM и про обращение к элементам в DOM

2 типа приложений: 
 * Single page application  - юзер заходит на страничку, мы передает только 1 html страничку сразу, а дальше всё разруливается js(React) на стороне юзера, не нужно ходить на сервер и обновлять страницы. Вся страница состоит из компонентов управляется root компонентом
 * Multi page application - когда разные странички имеют свой ulr каждая, каждая подружается отдельно 
страницы состоят из html и css, некоторые виджеты могут быть сделаны с помощью react. Страница целиком не управляется React-ом, виджеты не знают друг про друга.

на курсе делаем single page application => имеем один ReactDOM.render вызов


## Next-Generation JavaScript
2020.02.05. Видео 12-

### let & const

 * var - способ задавать переменный в js, 
 * let -те же переменные, как var
 * const - неизменяемые, при попытке изменить такую переменную, будет ошибка

 http://jsbin.com/ - ещё песочница

### Arrow Functions

 обычные js функции выглядят так:
 ```javascript
 function myFunc(){
     ...
 }
 ```
Arrow functions выглядят так:
```javascript
const myFuck=()=>{
    ...
}
```
 * arrow functions решает проблемки с ключевым словом this. This внутри arrow функций всегда содержит её контекст и не изменит его в runtime.
 * c 1 аргументом круглые скобки можно опустить, с 0 и больше 1 скобки обязательны.
 * если тело функции состорит из 1 строки return, можно опустить фигурные скобки и само слово return
 ```javascript
 const multiply = number => number*2;
```

### Exprort & Import (Modules)
в файле person.js
```javascript
export default person
```
default значит, если импортируем из файла person.js то по умолчанию это будет компонент person

в файле utility.js
```javascript
export const clean = () => {...}
export const baseData = 10
```

в файле app.js
```javascript
import person from './person.js'        // person тут прост алиас, импортируется дефолтный компонент
import prs from './person.js'           // тоже самое, только алиас prs
import {baseDate} from './ulitity.js'   //в фигурных скобках имя импорта
import {clean as cln} fsom './utility.js'   //cln тут алиас
или
import * as all fsom './utility.js' - импортим все из utility.js, обозвав это 'all'
```

#### Классы
- шаблоны для объектов
класс имеет свойства (переменный класса) и методы (функции класса)

```javascript
class Person {
	name = 'Max'
	call = () =>{...}

}
```

инициализация
```javascript
const myPerson = new Person ()
	myPerson.call()
	console.log(myPerson.name)
```

поддерживается наследование

```javascript
class Person extends Master
```

в песочнице
```javascript
class Person {
	constructor(){
		this.name = 'Max'
	}
	
	printMyName(){
		console.log(this.name)
	}
}

const person = new Person;
person.printMyName();
```

если расширяем класс и используем конструктор, то обязательно нужно вызвать конструктор родителя вначале, иначе ругнётся.

ES6
```javascript
constructor(){
	this.myProperty = 'value'
}
```

ES7
```javascript
myProperty = 'value'
```

ES6
```javascript
myMethod(){...}
```

ES7
```javascript
myMethod = ()=>{...}
```

метод - как переменная, в которой хранится функция


#### Spread and Rest Operator
... 

Spread - для разделения элементов массива или свойств объекта

```JS
const newArray = [...oldArray,1,2]  // перед массивом берут все элементы из старого массива и кладут их в новый, далее добавляются элементы 1 и 2 
const newObject = {..Object, newProp: 5}  //
```

Rest - для склеивания списка аргументов функции в массив
```js
function sortArgs(...args){
    return args.sort()
}
```
sortArgs получает неограниченное кол-во аргументов, с ... мы записали только 1 аргумент args, но функция может принять больше, чем 1 аргумент и ... склеит их в массив



Пример Spread в песочницке jsbin.com
```js
const number = [1,2,3];
const newNumbers = [...numbers,4];
const newNumbers2 = [numbers, 4]

console.log(newNumbers); // [1,2,3,4]
console.log(newNumbers2); //[[1,2,3],4]
```

```js
const person = (
	name: 'Max'
);

const newPerson = {
	...person,
	age: 28
}

consloe.log(newPerson);// [object Object]{
						// age:28
						//name: "Max"
						//}
```

Примеры Rest в песочнице
```JS
const filter = (...args) => {
	return args.filter(el => el === 1);// === сравнение типа и значения

console.log(filter()1,2,3)); // [1]
}
```

#### Destructuring
Spread берет все элементы, destructuring - один

Array destructuring
```js
[a,b] = ['Hello','Max'];
console.log(a);// Hello
console.log(b); //Max
```

Object destructuring
```js
(name) = {name: 'Max', age: 28}
console.log(name);//Max
console.log(age);//underfined
```




