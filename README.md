# React-udemy

[Getting Started](#getting-started)

[Next-Generation JavaScript](#next-generation-javascript)

[Understanding the Base Features & Syntax](#understanding-the-base-features-and-syntax)

## Getting Started

### Intro
2020.02.04. Видео 1-5

React - js библиотека
React приложения запускаются в браузере, позволяет строить странички по частям, компонентам, которые легко переиспользовать.
Reactjs.org
http://codepen.io/ - песочница
react-dom - для рендеринга компонент react в real Dom
Babel - тулза, которая компилирует next-generation js code в код, который запустится в браузере


### Компонент

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

### Классы
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


### Spread and Rest Operator
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

### Destructuring

позволяет извлекать элементы массива и свойств объекта и хранить в переменных, звучит похоже на spread, но не совсем, разница в том, что каждый хранится в своей переменных

Array Destructuring
```js
[a,b] = ['Hello','Max']
console.log(a)//Hello
console.log(b)//Max
```
Object Destructuring
```js
{name} = {name:'Max', age:28}
console.log(name)//Max
console.log(age)//undefined
```
 в песочнице:
 ```js
 const numbers = [1,2,3];
 [num1,num2]=numbers;
 console.log(num1,num2) //1,2
 ```

 ```js
 const numbers = [1,2,3];
 [num1,,num3]=numbers;
 console.log(num1,num3) //1,3
 ```

 ### Reference and primative types

Объекты и массивы - ссылочные типы
 ```js
 const number = 1;      //примитивный
 const num2 = number;   //создает реальную копию number

 console.log(num2);

 const person = { //const person - указатель на место в памяти, где хранится объект person
     name: 'Max'
 };
 const secondPerson = person;//копируется указатель, а не объект, теперь const person and secondPerson ссылаются на один объект
 person.name = 'Manu'
 console.log(secondPerson);//Menu
 ```
 
 ## Understanding the Base Features and Syntax

### The Build Workflow
 Что нужно для приложения:
 * npm & yarn - dependency manager tool
 * webpack - упаковщик (bundler), мы пишем код в разных файлах, а в конце упаковщик как-то склеивает их, потому что некоторые браузеры, особенно старые не поддерживают раздельные файлы
 * babel - компилятор, переводит из next-gen-js to old one.
 * development server - тоже что и web-server, но локальный

все эти штуки устанавливаются одной командой. Google "create react app". В facebook git страничке есть инструкция.
 * скачали npm с сайте
 * nmp install - установили npm
 * npx create-react-app react-guide-app - создали дефолтное приложение в папке react-guide-app
 * npm start - запустили проект, то есть стартовали development server, открывается новая закладка в браузере http://localhost:3000/


из чего состоит дефолтное приложение:
 * yarn.lock и package-lock.json- можно игнорить, в них фиксируются версии используемых зависимостей
 * package.json - зависимости определены тут, create-react-app создало 3 зависимости, 
    "react": "^16.12.0",
    "react-dom": "^16.12.0",
    "react-scripts": "3.4.0" 
	так же тут определены скрипты, которые можно запускать так: npm run <Имя скрипта>
	например npm run start Или npm start, эта команда запустит команду "react-scripts start", которая  стартует development server, скомпилирует код, соптимизирует код
	когда будем готовы деплоить приложение, запустим mpn built, не запуская development server, но вместо этого получим оптимизированный код в папке, на этом этапе все происходит в памяти, не увидим скомпилированный код.
 * папка node_modules - хранит все зависимости и подзавиисмости.
 * папка public - 
 	index.html, других html страничек не будет, куда будет вставлять 
	manifest.json - метаданные о нашем приложении
 * папка source - 
	index.js - имеет доступ к root элементу нашего DOM из html файла, и рендерит приложение с помощью метода render(), рендерит элемент App, который импортируем из файла ./App, расширение *.js можно опускать
	App.js - тут наш единственный на данный момент компонент.
	App.css - стили
	serviceWorker.js - делает прекэш наших скриптов
	App.test.js -позволяет создавать тесты для приложения

```js
ReactDOM.render(<App />, document.getElementById('root'));
//вместо компонента мы можем рендерить html элементы 
ReactDOM.render(<h1>Test</h1>, document.getElementById('root'));
//можем рендерить сколько угодно html компонент, только это не будет react приложением, обычно принято рендерить 1 компонент из файла App.js
```

из чего состоит React компонент
 * class App extends Component {}
	Component тут из библиотеки React, которую заимпортили выше.
 * класс имеет 1 метод render. 
	!Каждый компонент должен возвращать или рендерить некий html код, который можно отрендерить в DOM на экране.
 * export default app - чтоб потом этот компонент могли импортить
 * то, что возвращается компонентом - JSX, не HTML, но очень похоже, это автоматом транспайлится в js


### JSX

```js
//вместо 
  return (
    <div className="App"> //именно className
      <h1>Hi</h1>
    </div>
  );
//можно сделать так
  return React.createElement('div',null,'h1', 'Hi, I\'m a React App!!!')
  //createElement миинимум имеет 3 аргумента
  //первый аргумент - элемент, который рендерим в DOM, компонент или html элемент
  //второй - конфигурация, это js объект, если конфинурации нет, null
  //далее любое кол-во потомков первого элемента через зпт
  //h1 интерпретировался как текст, чтобы h1 был элементом сделаем так:
  return React.createElement('div',null, React.createElement('h1', null, 'Hi, I\'m a React App!!!'))
  //а чтобы добавить css вместо null пишем className
  return React.createElement('div',{className: 'App'}, React.createElement('h1', null, 'Hi, I\'m a React App!!!'))
```

### JSX Restrictions

* className, потому что слово class уже зарезервировано в js, где-то может не работать слово class
* JSX вырадение должно иметь 1 корневой элемент, так нельзя:
```js
  return (
    <div className="App"> //именно className
      <h1>Hi</h1>
	</div>
	<h1>Another heading</h1>
  );
  ```


  ### Create Functioncal Component

  при импорте имя компонента выбираем сами, но обязательно с большой буквы.
  ```js
  import Person from './Person/Person'
  ```
  
  
 props - объект, дающий доступ к атрибутам, которым мы передали в наш компонент.

специальное свойство  children - зарезервированное слово, относится ко всему, что между открывающим и закрываюзим тегом компонента

<Person name="Manu" age="29" >My Hobbies: Racing</Person>

в данном случае это: "My Hobbies: Racing"
это может быть не только текст, может быть html




Если нам не нужна информация извне, а мы хотим хранить информацию внутри компонента, и менять её внутри,
то можем использовать свойства класса
В классах, которые экстендят Component есть зарезервированное слово state. Но такого нет в функциях. State использовать осторожно, лучше использовать фунциональные компоненты.

  state = { //зарезервированное слово
    persons: [
      {name: 'Max', age: 28},
      {name: 'Manu', age: 29},
      {name: 'Stephanie', age: 26}
    ]
  }

заменяем
    <Person name="Max" age="28" />
на
    <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
