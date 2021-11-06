# React-udemy

[Getting Started](#getting-started)

[Next-Generation JavaScript](#next-generation-javascript)

[React Basics & Working With Components](#react-basics-and-working-with-components)

[React State & Working with Events](#react-state-and-working-with-events)

[Rendering Lists & Conditional Content](#rendering-lists-and-conditional-content)

[Styling React Components](#styling-react-components)

[Debugging React App](#debugging-react-app)

[Fragments, Portals and Rfs](#fragments-portals-and-rfs)

[Handling Side Effect, Using reducer and Using the Context API](#handling-side-effect-using-reducer-and-using-the-context-api)

## **Getting Started**

### **Intro**

**React** - js библиотека
React приложения запускаются в браузере, позволяет строить странички по частям, компонентам, которые легко переиспользовать.
Reactjs.org
http://codepen.io/ - песочница
react-dom - для рендеринга компонент react в real Dom
Babel - тулза, которая компилирует next-generation js code в код, который запустится в браузере

### **Компонент**

**Компонент** - это функция, возвращает код, который рендерится в DOM-е
Возвращаемый код, то что в скобках return () ,похож на HTML разметку, это **JSX** синтакс, сахар.
Babel преобразует **JSX** в JS.
Имена функций с большой буквы

```js
ReactDOM.render(<Person />, document.querySelector('#p1'));
```

эта запись обозначает, что компонент Person я хочу срендерить в место в HTML страничке, где находитcя p1.

Чтобы можно было динамически подставлять данные в компонент:

- добавить в компонент параметр, назовём его props
- внутри компонента использовать {props.name}
- при рендере задать свойства:

```javascript
ReactDOM.render(<Person name="Max" age="28" />, document.querySelector('#p1'));
```

чтобы не вызывать ReactDOM.render много раз:

- создали переменную app;
- присвоили ей div с Person (несколькими разными)
- в HTML файле оставили только <div id="app"></div>
- ReactDOM.render(app, document.querySelector('#app'));

  2020.02.05. Видео 6-10

Ещё причины использовать React:

- в большом js проекте сложно управлять UI state-ами, наверняка придется вручную менять способы обращения к элементам, с React всё динамически и изи
- позволяет сфокусироваться на бизнес-логике приложения, а не на том как это реализовать

Альтернативы React-а:

- Angular
- Vue
- JQuery - не совсем альтернатива, JQuary про traversing the DOM и про обращение к элементам в DOM

2 типа приложений:

- Single page application - юзер заходит на страничку, мы передает только 1 html страничку сразу, а дальше всё разруливается js(React) на стороне юзера, не нужно ходить на сервер и обновлять страницы. Вся страница состоит из компонентов управляется root компонентом
- Multi page application - когда разные странички имеют свой ulr каждая, каждая подружается отдельно
  страницы состоят из html и css, некоторые виджеты могут быть сделаны с помощью react. Страница целиком не управляется React-ом, виджеты не знают друг про друга.

на курсе делаем single page application => имеем один ReactDOM.render вызов

## **Next-Generation JavaScript**

### **let & const**

- var - create variables in js, we don't encourage to use it
- let - modern var
- const - can't change it, if you try to reassign you'll get an error

http://jsbin.com/ - sandbox

### **Arrow Functions**

Normal js functions:

```javascript
function myFunc(){
    ...
}
```

Arrow functions:

```javascript
const myFuc=()=>{
    ...
}
```

- arrow functions решает проблемки с ключевым словом this. This внутри arrow функций всегда содержит её контекст и не изменит его в runtime.
- c 1 аргументом круглые скобки можно опустить, с 0 и больше 1 скобки обязательны.
- если тело функции состорит из 1 строки return, можно опустить фигурные скобки и само слово return

```javascript
const multiply = (number) => number * 2;
```

### **Exprort & Import (Modules)**

Examples

person.js file:

```javascript
export default person;
```

'default' means while importing from file person.js ti would be this component by default

utility.js file:

```javascript
export const clean = () => {...}
export const baseData = 10
```

app.js file:

```javascript
import person from './person.js'        // person is just alias, we import default
import prs from './person.js'           // it's the same lime with alias prs
import { baseDate } from './ulitity.js'   // inside P{} the name of what we import
import {clean as cln} fsom './utility.js'   //cln is alias
// or
import * as all fsom './utility.js' // we do import everything from utility.js with allias 'all'
```

### **Classes**

- templates for objects
- class has properties (class variables) and methods (class functions)

```javascript
class Person {
	name = 'Max'
	call = () =>{...}

}
```

initialisation:

```javascript
const myPerson = new Person();
myPerson.call();
console.log(myPerson.name);
```

support inheritance:

```javascript
class Person extends Human
```

example:

```javascript
class Person {
  constructor() {
    this.name = 'Max';
  }

  printMyName() {
    console.log(this.name);
  }
}

const person = new Person();
person.printMyName();
```

If we extend the class and we use a constructor then we must call super constructor in the derived class:

```javascript
class Human {
  constructor() {
    this.gender = 'male';
  }

  printGender() {
    console.log(this.gender);
  }
}

class Person extends Human {
  constructor() {
    super();
    this.name = 'Max';
  }

  printMyName() {
    console.log(this.name);
  }
}

const person = new Person();
person.printMyName();
person.printGender();
```

ES6 variable:

```javascript
constructor(){
	this.myProperty = 'value'
}
```

ES7 variable:

```javascript
myProperty = 'value';
```

ES6 method:

```javascript
myMethod(){...}
```

ES7 method:

```js
myMethod = ()=>{...}
```

method - is like a variable which store function

### **Spread and Rest Operator**

Both are ...

- Spread - tp split up array elements OR object property

```js
const newArray = [...oldArray,1,2]  // we take all elements from oldArray and add elements 1, 2 and put all these to newArray
const newObject = {..oldObject, newProp: 5}  // we create a new object with {} and we pull all properties from oldObject andtheir values and add the as key-value pairs to newObject. If oldObject had newProp in newObject it would be overwriten with newProp: 5
```

- Rest - for merge a list of function arguments into array

```js
function sortArgs(...args) {
  return args.sort();
}
```

sortArgs получает неограниченное кол-во аргументов, с ... мы записали только 1 аргумент args, но функция может принять больше, чем 1 аргумент и ... склеит их в массив

Examples Spread in sanbox jsbin.com:

```js
const number = [1, 2, 3];
const newNumbers = [...numbers, 4];
const newNumbers2 = [numbers, 4];

console.log(newNumbers); // [1,2,3,4]
console.log(newNumbers2); //[[1,2,3],4]
```

```js
const person = (name: 'Max');

const newPerson = {
  ...person,
  age: 28,
};

consloe.log(newPerson);
// [object Object]{
// age:28
//name: "Max"
//}
```

Examples Rest in sandbox:

```js
const filter = (...args) => {
	return args.filter(el => el === 1);// === сравнение типа и значения

console.log(filter()1,2,3)); // [1]
}
```

### **Destructuring**

**Destructuring** - allows extract array elements or object properties and store them in variables. It sound like Spread operator, but Spread takes out all elements and all properties and distribute them in new array or object, wherever Destructuring allows you to pull out singleelement or property and store them in variables.

Array Destructuring:

```js
[a, b] = ['Hello', 'Max'];
console.log(a); //Hello
console.log(b); //Max
```

Object Destructuring:

```js
{name} = {name:'Max', age:28}
console.log(name)//Max
console.log(age)//undefined
```

examples for sandbox:

```js
const numbers = [1, 2, 3];
[num1, num2] = numbers;
console.log(num1, num2); //1,2
```

```js
const numbers = [1, 2, 3];
[num1, , num3] = numbers;
console.log(num1, num3); //1,3
```

### **Reference and primitive types**

Objects and arrays - reference types

```js
const number = 1; //primitive
const num2 = number; //create a real copy of number

console.log(num2);
```

```js
const person = {
  //const person - is a pointer to a place in the memory, where object person is stored
  name: 'Max',
};
const secondPerson = person; //it copy the pointer, not the object, now const person and secondPerson refer to the sameobject
person.name = 'Manu';
console.log(secondPerson); //Manu
```

```js
const person = {
  name: 'Max',
};
const secondPerson = {
  ...person,
}; //it creates a new object with copied values
person.name = 'Manu';
console.log(secondPerson); //Max
```

### **Array functions**

```js
const numbers = [1, 2, 3];

const doubleNumbers = numbers.map((arg) => {
  return arg * 2;
});

console.log(numbers); // [1, 2, 3]
console.log(doubleNumbers); //[2, 4, 6]
```

## **React Basics and Working With Components**

### **Component**

**React** - JavaScropt library for building userinterfaces.

**Component** - combination og HTML code, CSS code for styling and js code for some logic. It's a special kind of js function.

- reusability
- separation of concerns

### **Declarative approach**

You will not tell React that a certain HTML element should be created and inserted in a specific place on a UI as you would be doing it with vanila JS. With React we will always define the desired end state, the target state and under wich condition which state should be used and then React will do the rest under the hood.

### **Creating a new React Project**

**Create React App** - tool to create react projects which preconfigured project folders. It also gives a nice development invironment with a development web server which allows you to preview the application locally on your machine.
https://github.com/facebook/create-react-app

```
npx create-react-app my-app
cd my-app
npm start
```

to execute those steps we need to visit https://nodejs.org
NodeJS - runtime for JS, which allows to run js code outside of the browser

What do we need:

- npm & yarn - dependency manager tool
- webpack - упаковщик (bundler), мы пишем код в разных файлах, а в конце упаковщик как-то склеивает их, потому что некоторые браузеры, особенно старые не поддерживают раздельные файлы
- babel - compiler, translate next-gen-js to old one.
- development server - the same is web-server, but local

All these tools we install with one command.
Steps:

- скачали npm с сайте
- nmp install - установили npm
- Google "create react app". In facebook git there is an instruction.
- npx create-react-app react-complete-guide - создали дефолтное приложение в папке react-complete-guide
- npm start - запустили проект, то есть стартовали development server, открывается новая закладка в браузере http://localhost:3000/

- go to project folder and run
- > cd react-complete-guide
- install all third party libraries
- > npm install

### **Folder Structure**

из чего состоит дефолтное приложение:

- yarn.lock и package-lock.json- можно игнорить, в них фиксируются версии используемых зависимостей
- package.json - holds all dependencies. "create-react-app" created several dependencies:
  - "react": "^16.12.0",
  - "react-dom": "^16.12.0",
  - "react-scripts": "3.4.0"
  - так же тут определены скрипты, которые можно запускать так: npm run <Имя скрипта>
    например npm run start Или npm start, эта команда запустит команду "react-scripts start", которая стартует development server, скомпилирует код, соптимизирует код
    когда будем готовы деплоить приложение, запустим mpn built, не запуская development server, но вместо этого получим оптимизированный код в папке, на этом этапе все происходит в памяти, не увидим скомпилированный код.
- папка node_modules - хранит все зависимости и подзавиисмости.
- папка public -
  index.html, других html страничек не будет, куда будет вставлять
  manifest.json - метаданные о нашем приложении
- папка source -
  index.js - имеет доступ к root элементу нашего DOM из html файла, и рендерит приложение с помощью метода render(), рендерит элемент App, который импортируем из файла ./App, расширение \*.js можно опускать
  App.js - тут наш единственный на данный момент компонент.
  App.css - стили
  serviceWorker.js - делает прекэш наших скриптов
  App.test.js -позволяет создавать тесты для приложения

```js
ReactDOM.render(<App />, document.getElementById('root'));
//вместо компонента мы можем рендерить html элементы
ReactDOM.render(<h1>Test</h1>, document.getElementById('root'));
//можем рендерить сколько угодно html компонент, только это не будет react приложением,
//обычно принято рендерить 1 компонент из файла App.js
```

### Component Basics

из чего состоит React компонент

- class App extends Component {}
  Component тут из библиотеки React, которую заимпортили выше.
- класс имеет 1 метод render.
  !Каждый компонент должен возвращать или рендерить некий html код, который можно отрендерить в DOM на экране.
- export default app - чтоб потом этот компонент могли импортить
- то, что возвращается компонентом - JSX, не HTML, но очень похоже, это автоматом транспайлится в js

### **JSX**

JSX - JavaScript HTML, it's literally HTML inside js

```js
//вместо
return (
  <div className="App">
    {' '}
     <-- именно className -->
    <h1>Hi</h1>
  </div>
);
//можно сделать так
return React.createElement('div', null, 'h1', "Hi, I'm a React App!!!");
//createElement миинимум имеет 3 аргумента
//первый аргумент - элемент, который рендерим в DOM, компонент или html элемент
//второй - конфигурация, это js объект, если конфинурации нет, null
//далее любое кол-во потомков первого элемента через зпт
//h1 интерпретировался как текст, чтобы h1 был элементом сделаем так:

return React.createElement(
  'div',
  null,
  React.createElement('h1', null, "Hi, I'm a React App!!!")
);
//а чтобы добавить css вместо null пишем className
return React.createElement(
  'div',
  { className: 'App' },
  React.createElement('h1', null, "Hi, I'm a React App!!!")
);
```

### JSX Restrictions

- className, because "class" is reserved in js
- JSX expression should have only 1 root element,

example with error:

```js
return (
  <div class="App"> //should be className
    <h1>Hi</h1>
  </div>
  <h1>Another heading</h1>
  );
```

correct example:

```js
return (
  <div>
    <div className="App">
      <h1>Hi</h1>
    </div>
    <h1>Another heading</h1>
  </div>
);
```

### Create Functioncal Component

при импорте имя компонента выбираем сами, но обязательно с большой буквы.

```js
import Person from './Person/Person';
```

### **Working with Props**

- props - object which give access to attributes which we pass to our component

### **The Concept of "Composition" ("children props")**

- **composition** - approach to build an app from smaller building blocks

In some companent it's possible to pass content between opening and closing tags of this compomemt

- **children** - reserved word, related to everything between opening and closing tags.
- **Card** - common name for components which serve just as shell around any other content

```js
import './Card.css';

function Card(props) {
  const classes = 'card ' + props.className;

  return <div className={classes}>{props.children}</div>;
}

export default Card;
```

### **Arrow functions**

just Function

```js
function App() {
  ...
  return ()
}
```

arrow Function

```js
const App = () => {
  ...
  return ()
}
```

### **Imperative approach**

**Declarative approach** - describing the sequense of actions which are necessary to reach the goal

**Imperative approach** - describing the end goal and React define the way in which js goes to the goal

## **React State and Working with Events**

### **Listening to Events & Working with Event Handlers**

```js
const ExpenseItem = (props) => {
  const clickHandler = () => {
    console.log('Clicked!!!!!');
  };
  return (
    <Card className="expense-item">
      <button onClick={clickHandler}>Change title</button>
    </Card>
  );
};
```

We don't call function here `onClick={clickHandler}`, we just point at it. If we make a call `onClick={clickHandler()}` js will excecute clickHandler function when this line of code is being parsed, it happeneds when JSX code is returned. That would be too early. To excecute clickHandler when we click the button we should use the pointer (whithout parenthesis)

React hoock

start from 'use\*'
must be called inside React component, not outside, not inside nested functions

```js
const [title, setTitle] = useState(props.title);
```

useState() - registered some value for their copmponent (specific instance) where it was called
useState(props.title) - we set an initial value. U seState() always returnes array with 2 values:

- title - value itself, a pointer at that managed value, initially at value stored at props.title
- setTitle - updating function, a function which we will later call

## **Working with Multiple States**

**Multiple States**

```js
import { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = () => {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  return (
    <form>
      <div className="new-expense__controls">
        <div className="nex-expense__control">
          <label>Title</label>
          <input type="text" onChange={titleChangeHandler} />
        </div>
        <div className="nex-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
          />
        </div>
        <div className="nex-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
```

**One State Instead**

```js
import { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = () => {
  const [userInput, setUserInput] = useState({
    enteredTitle: '',
    enteredAmount: '',
    enteredDate: '',
  });

  const titleChangeHandler = (event) => {
    setUserInput({
      ...userInput,
      enteredTitle: event.target.value,
    });
  };

  const amountChangeHandler = (event) => {
    setUserInput({
      ...userInput,
      enteredAmount: event.target.value,
    });
  };

  const dateChangeHandler = (event) => {
    setUserInput({
      ...userInput,
      enteredDate: event.target.value,
    });
  };

  return (
    <form>
      <div className="new-expense__controls">
        <div className="nex-expense__control">
          <label>Title</label>
          <input type="text" onChange={titleChangeHandler} />
        </div>
        <div className="nex-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
          />
        </div>
        <div className="nex-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
```

**Updating State That DependsOn The Previous State** whenevery we update state and we depend on the previous state you should use Lambda function with a parametr of previous state value

React schedules states update, it doesn't perform them instantly. Theoretically, if we schedule many state updates simultaneously, we could be depending on outdated or incorrect state snapshots using the previous approach. Using the next approach react guarantee the latest state snapshot

```js
import { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = () => {
  const [userInput, setUserInput] = useState({
    enteredTitle: '',
    enteredAmount: '',
    enteredDate: '',
  });

  const titleChangeHandler = (event) => {
    setUserInput((prevState) => {
      return { ...prevState, enteredTitle: event.target.value };
    });
  };

  const amountChangeHandler = (event) => {
    setUserInput((prevState) => {
      return { ...prevState, enteredAmount: event.target.value };
    });
  };

  const dateChangeHandler = (event) => {
    setUserInput((prevState) => {
      return { ...prevState, enteredDate: event.target.value };
    });
  };

  return (
    <form>
      <div className="new-expense__controls">
        <div className="nex-expense__control">
          <label>Title</label>
          <input type="text" onChange={titleChangeHandler} />
        </div>
        <div className="nex-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
          />
        </div>
        <div className="nex-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
```

### **Two way binding**

For inputs we don't just listen to changes, but we also can pass a new value back into the input
We add property `value`

```js
<input type="text" value={enteredAmount} onChange={titleChangeHandler} />
```

### **Child-to-Parent Component Communication (Bottom-up)**

ParentComponent

```js
const ParentComponent = () => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    console.log(expenseData);
  };

  return (
    <div className="new-expense">
      <ChildComponent onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
};

export default ParentComponent;
```

ChildComponent

```js
const ChildComponent = (props) => {
  const submitHandler = (event) => {
    event.preventDefault(); // to prevent updating the page

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
    };

    props.onSaveExpenseData(expenseData);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="nex-expense__control">
          <label>Title</label>
          <input type="text" value={enteredTitle} />
        </div>
        <div className="nex-expense__control">
          <label>Amount</label>
          <input type="number" min="0.01" step="0.01" value={enteredAmount} />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ChildComponent;
```

**Controlled component** - when the value and changes to the value are not handled in a component itself, but on a parent component

**Presentational** or **Stateless** or **Dumm** component

## **Rendering Lists and Conditional Content**

### **Keys**

```
Warning: Each child in a list should have a unique "key" prop.

Check the render method of `Expenses`. See https://reactjs.org/link/warning-keys for more information.
    at ExpenseItem (http://localhost:3001/static/js/main.chunk.js:700:19)
    at Expenses (http://localhost:3001/main.8640a67a92b2f0b359ba.hot-update.js:37:97)
    at div
    at App (http://localhost:3001/static/js/main.chunk.js:230:89)
```

When we use array of elements we should define the unique key to help react identify aech element. Without the key react could mix up states of elements

### **Conditional Content**

Different approaches

Ternary operator

```js
return (
  <Card className="expenses">
    <ExpensesFilter
      selected={filteredYear}
      onChangeFilter={filterChangeHandler}
    />
    {filteredExpenses.length === 0 ? (
      <p>No expenses found</p>
    ) : (
      filteredExpenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))
    )}
  </Card>
);
```

&& operator

```js
return (
  <Card className="expenses">
    <ExpensesFilter
      selected={filteredYear}
      onChangeFilter={filterChangeHandler}
    />
    {filteredExpenses.length === 0 && <p>No expenses found</p>}
    {filteredExpenses.length > 0 &&
      filteredExpenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
  </Card>
);
```

More refactoring

```js
let expensesContent = <p>No expenses found</p>;

if (filteredExpenses.length > 0) {
  expensesContent = filteredExpenses.map((expense) => (
    <ExpenseItem
      key={expense.id}
      title={expense.title}
      amount={expense.amount}
      date={expense.date}
    />
  ));
}

return (
  <Card className="expenses">
    <ExpensesFilter
      selected={filteredYear}
      onChangeFilter={filterChangeHandler}
    />
    {expensesContent}
  </Card>
);
```

## **Styling React Components**

Inline styling has the highest priority

https://styled-components.com/

```
npm install --save styled-components
```

This called attacked template - It's a default JavaScript feature, it's not specific to this package, not specific to react.

```js
const Button = styled.button``;
```

Button is special kind of method on this styled object.
Button method returns a new button component.

## **Debugging React App**

- fn+F12 -> Source tab -> Users../src/project file -> put breake point on the left

  you can debug code that you write

- React DevTools: two additional tabs
  - Components. You can see component tree, props of each component, who render this component, hooks
  - Profiler

## **Fragments, Portals and Rfs**

**JSX Limitation**

- you can't return more than one root element

workaround: use a native js array

though we will get a warning, as React wants a key when it works with an array of jsx-elements (as well as it wants a key if you map dynamicly through a list of data and map that data to JSX elements)

```js
index.js:1 Warning: Each child in a list should have a unique "key" prop. See https://reactjs.org/link/warning-keys for more information.
    at AddUser (http://localhost:3001/static/js/main.chunk.js:1025:103)
    at div
    at App
```

it's just easier to have a wrapping `<div>`

- "`<div>` soup" - when you have a lot of wrapping `<div>`s

instead we can you WrapperComponent with returns props.children

```js
const Wrapper = (props) => {
  return props.childern;
};
```


**REFs**


If we access values with a 'ref' this is uncontrolled components, as their internal state (the value which is reflected in it) is not controlled by React
TH
```js
          <input
            id="username"
            type="text"
            ref={nameInputRef}
          />
```


## **Handling Side Effect, Using reducer and Using the Context API**

Main job of React: render UI & react to user input 

**Effect or Side Effect** - evethything else what might be happening in our application besides bringing smt onto the screen. It could be anything, whenever you have an action that should be executed in response to some other action. And that is where useEffect is able to help

**useEffect()** hook - special React hook. 
```js
useEffect(()=>{}, [])
```
It is called with 2 parameters. Firts: a function that should be executed AFTER every component evaluation IF the specified dependencies changed. Second: list of specified dependencied. If list is empty, function will run only once, when application starts.

<br/>

This will store data in browser:
```js 
localStorage.setItem('isLoggedIn','1');
```
You can see it in DevTool->Application tab-> Local storage -> choose application port and you'll see Key-Value pair