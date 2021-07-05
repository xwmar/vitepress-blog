## 1. 解释下什么是变量声明提升？

变量提升（hoisting），是负责解析执行代码的 JavaScript 引擎的工作方式产生的一个特性。
JS引擎在运行一份代码的时候，会按照下面的步骤进行工作：
1. 首先，对代码进行预解析，并获取声明的所有变量
2. 然后，将这些变量的声明语句统一放到代码的最前面
3. 最后，开始一行一行运行代码

我们通过一段代码来解释这个运行过程：
```js
console.log(a) 

var a = 1 

function b() { 
  console.log(a) 
}

b() // 1
```

上⾯这段代码的实际执⾏顺序为:
1. JS引擎将 `var a = 1` 分解为两个部分：变量声明语句 `var a = undefined` 和变量赋值语句 `a = 1` 
2. JS引擎将 `var a = undefined` 放到代码的最前面，而 `a = 1` 保留在原地
也就是说经过了转换，代码就变成了:
```js
var a = undefined

console.log(a) // undefined 

a = 1

function b() { 
  console.log(a) 
}

b() // 1
```

变量的这一转换过程，就被称为变量的声明提升。

而这是不规范, 不合理的, 我们用的  let 就没有这个变量提升的问题

## 2. JS 的参数是以什么方式进行传递的？
基本数据类型和复杂数据类型的数据在传递时，会有不同的表现。

**基本类型：是值传递**！
基本类型的传递方式比较简单，是按照 `值传递` 进行的。

```js
let a = 1

function test(x) { 
  x = 10  // 并不会改变实参的值
  console.log(x)
}

test(a) // 10 
console.log(a) // 1
```
**复杂类型: 传递的是地址! (变量中存的就是地址)**
![](http://pic.qigou.top/image20210705000443.png)

来看下面的代码：

```js
let a = {
  count: 1 
}

function test(x) { 
  x.count = 10
  console.log(x)
}

test(a) // { count: 10 }
console.log(a) // { count: 10 }
```

从运行结果来看，函数内改变了参数对象内的 `count` 后，外部的实参对象 `a` 的内容也跟着改变了，所以传递的是地址。

思考题:

```js
let a = {
  count: 1 
}; 

function test(x) { 
  x = { count: 20 };
  console.log(x); 
}

test(a); // { count: 20 }
console.log(a); // { count: 1 }
```
![](http://pic.qigou.top/image20210705000059.png)

我们会发现外部的实参对象 `a` 并没有因为在函数内对形参的重新赋值而被改变！

因为当我们直接为这个形参变量重新赋值时，其实只是让形参变量指向了别的堆内存地址，而外部实参变量的指向还是不变的。

下图展示的是复杂类型参数传递后的状态：
![](http://pic.qigou.top/imageimage-20210218233241397.png)
下图展示的是重新为形参赋值后的状态：
![](http://pic.qigou.top/imageimage-20210218233343016.png)

## 3. JavaScript垃圾回收是怎么做的？

JS中内存的分配和回收都是自动完成的，内存在不使用的时候会被垃圾回收器自动回收。

正因为垃圾回收器的存在，许多人认为JS不用太关心内存管理的问题，

但如果不了解JS的内存管理机制，我们同样非常容易成内存泄漏（内存无法被回收）的情况。

###  3.1 内存的生命周期

JS环境中分配的内存, 一般有如下生命周期：

1. 内存分配：当我们声明变量、函数、对象的时候，系统会自动为他们分配内存

2. 内存使用：即读写内存，也就是使用变量、函数等

3. 内存回收：使用完毕，由垃圾回收自动回收不再使用的内存

   全局变量一般不会回收, 一般局部变量的的值, 不用了, 会被自动回收掉

内存分配:

```jsx
// 为变量分配内存
let i = 11
let s = "ifcode"

// 为对象分配内存
let person = {
    age: 22,
    name: 'ifcode'
}

// 为函数分配内存
function sum(a, b) {
    return a + b;
}
```

### 3.2 垃圾回收算法说明

所谓垃圾回收, 核心思想就是如何判断内存是否已经不再会被使用了, 如果是, 就视为垃圾, 释放掉

下面介绍两种常见的浏览器垃圾回收算法: 引用计数 和 标记清除法

### 3.3 引用计数

IE采用的引用计数算法, 定义“内存不再使用”的标准很简单，就是看一个对象是否有指向它的引用。

如果没有任何变量指向它了，说明该对象已经不再需要了。

```jsx
// 创建一个对象person, person指向一块内存空间, 该内存空间的引用数 +1
let person = {
    age: 22,
    name: 'ifcode'
}

let p = person   // 两个变量指向一块内存空间, 该内存空间的引用数为 2
person = 1       // 原来的person对象被赋值为1，对象内存空间的引用数-1,
                 // 但因为p指向原person对象，还剩一个对于对象空间的引用, 所以对象它不会被回收

p = null         // 原person对象已经没有引用，会被回收
```

由上面可以看出，引用计数算法是个简单有效的算法。

**但它却存在一个致命的问题：循环引用。**

如果两个对象相互引用，尽管他们已不再使用，垃圾回收器不会进行回收，导致内存泄露。

```jsx
function cycle() {
    let o1 = {}
    let o2 = {}
    o1.a = o2
    o2.a = o1 
    return "Cycle reference!"
}

cycle()
```

![](http://pic.qigou.top/image20210705000856.png)

### 3.4 标记清除算法

现代的浏览器已经不再使用引用计数算法了。

现代浏览器通用的大多是基于标记清除算法的某些改进算法，总体思想都是一致的。

标记清除法:

- 标记清除算法将“不再使用的对象”定义为“无法达到的对象”。

- 简单来说，就是从根部（在JS中就是全局对象）出发定时扫描内存中的对象。

- 凡是能从根部到达的对象，都是还需要使用的。那些无法由根部出发触及到的对象被标记为不再使用，稍后进行回收。

从这个概念可以看出，无法触及的对象包含了没有引用的对象这个概念（没有任何引用的对象也是无法触及的对象）。

根据这个概念，上面的例子可以正确被垃圾回收处理了。

参考文章：[JavaScript内存管理](https://www.jianshu.com/p/84a8fd5fa0ee)

## 4. 谈谈你对 JavaScript 作用域链的理解？
JavaScript 在执⾏过程中会创建一个个的**可执⾏上下⽂**。 (每个函数执行都会创建这么一个可执行上下文)

每个可执⾏上下⽂的词法环境中包含了对外部词法环境的引⽤，可通过该引⽤来获取外部词法环境中的变量和声明等。

这些引⽤串联起来，⼀直指向全局的词法环境，形成一个链式结构，被称为作⽤域链。

简而言之: 函数内部 可以访问到 函数外部作用域的变量,  而外部函数还可以访问到全局作用域的变量,

这样的变量作用域访问的链式结构, 被称之为作用域链

```js
let num = 1

function fn () {
  let a = 100
  function inner () {
    console.log(a)
    console.log(num)
  }
  inner()
}
fn()
```

下图为由多个可执行上下文组成的调用栈：

- 栈最底部为`全局可执行上下文`
- `全局可执行上下文` 之上有多个 `函数可执行上下文`
- 每个可执行上下文中包含了指向外部其他可执行上下文的引用，直到 `全局可执行上下文` 时它指向 `null`
  ![](http://pic.qigou.top/imageimage-20210218143938843.png)
  ![](http://pic.qigou.top/imageimage-20210306093300970.png)
  
  js全局有全局可执行上下文, 每个函数调用时, 有着函数的可执行上下文, 会入js调用栈

每个可执行上下文, 都有者对于外部上下文词法作用域的引用, 外部上下文也有着对于再外部的上下文词法作用域的引用
**=> 就形成了作用域链**

## 5. 谈谈你对闭包的理解？

这个问题想考察的主要有两个方面：

- 对闭包的基本概念的理解
- 对闭包的作用的了解

**什么是闭包？**

MDN的官方解释：

> 闭包是函数和声明该函数的词法环境的组合

更通俗一点的解释是：

> 内层函数, 引用外层函数上的变量, 就可以形成闭包

需求: 定义一个计数器方法, 每次执行一次函数, 就调用一次进行计数

```js
let count = 0
function fn () {
  count++
  console.log('fn函数被调用了' + count + '次')
}
fn()
```

这样不好! count 定义成了全局变量, 太容易被别人修改了,  我们可以利用闭包解决

闭包实例:

```jsx
function fn () {
  let count = 0

  function add () {
    count++
    console.log('fn函数被调用了' + count + '次')
  }

  return add
}
const addFn = fn()
addFn()
addFn()
addFn()
```

**闭包的主要作用是什么？**

在实际开发中，闭包最大的作用就是用来 **变量私有**。

下面再来看一个简单示例：

```js
function Person() {
  // 以 let 声明一个局部变量，而不是 this.name
  // this.name = 'zs'     =>  p.name
  let name = 'hm_programmer' // 数据私有
  
  this.getName = function(){ 
    return name
  }
  
  this.setName = function(value){ 
    name = value
  }
}

// new:
// 1. 创建一个新的对象
// 2. 让构造函数的this指向这个新对象
// 3. 执行构造函数
// 4. 返回实例
const p = new Person()
console.log(p.getName()) // hm_programmer

p.setName('Tom')
console.log(p.getName()) // Tom

p.name // 访问不到 name 变量：undefined
```

在此示例中，变量 `name` 只能通过 Person 的实例方法进行访问，外部不能直接通过实例进行访问，形成了一个私有变量。

## 6. JavaScript中数据类型的隐式转换规则(了解)
在if语句、逻辑语句、数学运算逻辑、== 等情况下都可能出现隐式类型转换。

下表展示了一系列原始值，通过隐式转换成数字、字符串、布尔类型后所得到的值：
![](http://pic.qigou.top/imageimage-20210218171603780.png)
坑: 判断时,  尽量不要用 `= =` , 要用 `= = =` ( 两个等号判断,  如果类型不同,  默认会进行隐式类型转换再比较)

## 7. 谈谈你对原型链的理解？
要讲清楚这个问题，主要着重这几个方面：

- 什么是原型对象
- 构造函数, 原型对象, 实例的三角关系图
- 原型链如何形成

![](http://pic.qigou.top/imageimage-20210306104516852.png)
  
**原型对象**

在 JavaScript 中，除去一部分内建函数，绝大多数的函数都会包含有一个叫做 `prototype` 的属性，指向原型对象，

基于构造函数创建出来的实例, 都可以共享访问原型对象的属性。

例如我们的 `hasOwnProperty`, `toString` ⽅法等其实是 Obejct 原型对象的方法，它可以被任何对象当做⾃⼰的⽅法来使⽤。

`hasOwnProperty` 用于判断, 某个属性, 是不是自己的  (还是原型链上的)

来看一段代码：

```js
let person = { 
  name: "Tom", 
  age: 18, 
  job: "student"
}

console.log(person.hasOwnProperty("name")) // true 
console.log(person.hasOwnProperty("hasOwnProperty")) // false 
console.log(Object.prototype.hasOwnProperty("hasOwnProperty")) // true
```

可以看到，`hasOwnProperty` 并不是 `person` 对象的属性，但是 `person` 却能调用它。

那么 `person` 对象是如何找到 Object 原型中的 `hasOwnProperty` 的呢？这就要靠原型链的能力了。

需求: 简单绘制原型三角关系图!

**原型链**

在 JavaScript 中，每个对象中都有一个 `__proto__` 属性，这个属性指向了当前对象的构造函数的原型。

对象可以通过自身的 `__proto__`属性与它的构造函数的原型对象连接起来，

而因为它的原型对象也有 `__proto__`，因此这样就串联形成一个链式结构，也就是我们称为的原型链。

![](http://pic.qigou.top/imageimage-20210218212449526.png)

## 8. 谈谈对于继承的理解
**为什么要学习继承 ?**

写的构造函数, 定义了一个类型 (人类), 万一项目非常大, 又有了细化的多个类型 (老师, 工人, 学生)

学习继承, 可以让多个构造函数之间建立关联, 便于管理和复用

**什么是继承 ?**

继承: 从别人那里, 继承东西过来 (财产, 房产)

代码层面的继承: 继承一些属性构造的过程和方法

### 8.1 继承 - 原型继承

原型继承: 通过改造原型链, 利用原型链的语法, 实现继承方法!

分析需求:

​	人类, 属性: name, age

​	学生, 属性: name, age, className

​	工人, 属性: name, age, companyName

无论学生, 还是工人, => 都是人类, 所以人类原型上有的方法, 他们都应该要有

```js
// 1. 定义Person构造函数
function Person (name, age) {
  this.name = name
  this.age = age
}
Person.prototype.say = function () {
  console.log('人类会说话')
}

// 2. 定义Student构造函数
function Student (name, age, className) {
  this.name = name
  this.age = age
  this.className = className
}
// 3. 原型继承: 利用原型链, 继承于父级构造函数, 继承原型上的方法
// 语法: 子构造函数.prototype = new 父构造函数()
Student.prototype = new Person()
Student.prototype.study = function() {
  console.log('学生在学习')
}

let stu = new Student('张三', 18, '80期')
stu.say()
console.log(stu)
```

![](http://pic.qigou.top/imageimage-20210306111112493.png)

### 8.2 继承 - 组合继承

组合继承有时候也叫伪经典继承，指的是将原型链 和 借用构造函数 call 技术组合到一块，

从而发挥二者之长的一种继承模式，其背后的思路: **是使用原型链实现对原型属性和方法的继承 (主要是方法)，**

**而通过借用构造函数来实现对实例属性构造的继承**。这样既通过在原型上定义方法实现了函数复用，又能保证每个实例都有它的自己的属性。

```js
// 1. 定义Person构造函数
function Person (name, age) {
  this.name = name
  this.age = age
}
Person.prototype.say = function () {
  console.log('人类会说话')
}

// 2. 定义Student构造函数
function Student (name, age, className) {
  Person.call(this, name, age) // 实现构造属性的继承
  this.className = className
}

// 3. 原型继承: 利用原型链, 继承于父级构造函数, 继承原型上的方法
// 语法: 子构造函数.prototype = new 父构造函数()
Student.prototype = new Person()
Student.prototype.study = function() {
  console.log('学生在学习')
}

let stu = new Student('张三', 18, '80期')
stu.say()
console.log(stu)

// 方法通过 原型继承
// 属性通过 父构造函数的.call(this, name, age)
```

### 8.3 继承 - 寄生组合继承

student实例上有 name age,  而原型 `__proto__`上不需要再有这些属性, 所以利用 Object.create 改装下
Object.create(参数对象)

1. Object.create 会创建一个新对象,
2. 并且这个新对象的`__proto__` 会指向传入的参数对象

```js
// 1. 定义Person构造函数
function Person (name, age) {
  this.name = name
  this.age = age
}
Person.prototype.say = function () {
  console.log('人类会说话')
}

// 2. 定义Student构造函数
function Student (name, age, className) {
  Person.call(this, name, age)
  this.className = className
}

// 3. 原型继承: 利用原型链, 继承于父级构造函数, 继承原型上的方法
// 语法: 子构造函数.prototype = new 父构造函数()
Student.prototype = Object.create(Person.prototype)
Student.prototype.study = function() {
  console.log('学生在学习')
}

let stu = new Student('张三', 18, '80期')
stu.say()
console.log(stu)
// 总结:
// Object.create() 以参数的对象, 作为新建对象的__proto__属性的值, 返回新建的对象
```

![](http://pic.qigou.top/imageimage-20210306114638139.png)

### 8.4 es6 - class 实现继承 extends

```jsx
// 继承关键字 => extends
class Person {
  constructor (name, age) {
    this.name = name
    this.age = age
  }
  jump () {
    console.log('会跳')
  }
}

class Teacher extends Person {
  constructor (name, age, lesson) {
    super(name, age) // extends 中, 必须调用 super(), 会触发执行父类的构造函数
    this.lesson = lesson
    console.log('构造函数执行了')
  }
  sayHello () {
    console.log('会打招呼')
  }
}

let teacher1 = new Teacher('zs', 18, '体育')
console.log(teacher1)
```

## 10. 如何判断是否是数组？

方法一：使用 `toString` 方法

```js
function isArray(arg) {
	return Object.prototype.toString.call(arg) === '[object Array]'
}

let arr = [1,2,3]
isArray(arr)  // true
```

方法二：使用 ES6 新增的 `Array.isArray` 方法

```js
let arr = [1,2,3]
Array.isArray(arr) // true
```

## 9. 谈谈你对this的理解？

`this` 是一个在运行时才进行绑定的引用，在不同的情况下它可能会被绑定不同的对象。



**默认绑定** (指向window的情况)  (函数调用模式 fn() )

默认情况下，`this` 会被绑定到全局对象上，比如在浏览器环境中就为`window`对象，在node.js环境下为`global`对象。

如下代码展示了这种绑定关系：

```js
message = "Hello"; 

function test () { 
  console.log(this.message); 
}

test() // "Hello"
```



**隐式绑定** (谁调用, this指向谁) (方法调用模式 obj.fn() )

如果函数的调用是从对象上发起时，则该函数中的 `this` 会被自动隐式绑定为对象：

```js
function test() {
	console.log(this.message); 
}

let obj = {
  message: "hello,world",
  test: test
}

obj.test() // "hello,world"
```



**显式绑定** (又叫做硬绑定)  (上下文调用模式, 想让this指向谁, this就指向谁)

硬绑定 => call  apply  bind

可以显式的进行绑定：

```js
function test() {
	console.log(this.message); 
}

let obj1 = {
  message: "你好世界123"
}

let obj2 = {
  message: "你好世界456"
}

test.bind(obj1)() // "你好世界123"
test.bind(obj2)() // "你好世界456"
```

**new 绑定** (构造函数模式)

另外，在使用 `new` 创建对象时也会进行 `this` 绑定

当使用 `new` 调用构造函数时，会创建一个新的对象并将该对象绑定到构造函数的 `this` 上：

```js
function Greeting(message) {
	this.message = message;
}

var obj = new Greeting("hello,world")
obj.message // "hello,world"
```

小测试:

```jsx
let obj = {
    a: {
        fn: function () {
            console.log(this)
        },
        b: 10
    }
}
obj.a.fn()
let temp = obj.a.fn;
temp()

// -------------------------------------------------------------

function Person(theName, theAge){
    this.name = theName
    this.age = theAge
}
Person.prototype.sayHello = function(){ // 定义函数
    console.log(this)
}

let per = new Person("小黑", 18)
per.sayHello()
```

## 12. 箭头函数中的this指向什么？

箭头函数不同于传统函数，它其实没有属于⾃⼰的 `this`，

它所谓的 `this` 是, 捕获其外层  上下⽂的 `this` 值作为⾃⼰的 `this` 值。

并且由于箭头函数没有属于⾃⼰的 `this` ，它是不能被 `new` 调⽤的。

我们可以通过 Babel 转换前后的代码来更清晰的理解箭头函数:

```js
// 转换前的 ES6 代码
const obj = { 
  test() { 
    return () => { 
      console.log(this === obj)
    }
  } 
}
```

```js
// 转换后的 ES5 代码
var obj = { 
  test: function getArrow() { 
    var that = this
    return function () { 
      console.log(that === obj)
    }
  } 
}
```

这里我们看到，箭头函数中的 `this` 就是它上层上下文函数中的 `this`。

## 12. Promise 的静态方法

promise的三个状态: pending(默认)   fulfilled(成功)   rejected(失败)

1. resolve函数被执行时, 会将promise的状态从 pending 改成 fulfilled 成功
2. reject函数被执行时, 会将promise的状态从pending 改成 rejected 失败

Promise.reject()

```js
new Promise((resolve, reject) => {
	reject()
})
```

Promise.resolve()

```jsx
new Promise((resolve, reject) => {
	resolve()
})
```

**Promise.all([promise1, promise2, promise3])**  等待原则, 是在所有promise都完成后执行, 可以用于处理一些`并发的任务`

```jsx
// 后面的.then中配置的函数, 是在前面的所有promise都完成后执行, 可以用于处理一些并发的任务
Promise.all([promise1, promise2, promise3]).then((values) => {
  // values 是一个数组, 会收集前面promise的结果 values[0] => promise1的成功的结果
})
```

Promise.race([promise1, promise2, promise3]) 赛跑, 竞速原则, 只要三个promise中有一个满足条件, 就会执行.then(用的较少)
![](http://pic.qigou.top/image20210705002718.png)

## 13. 宏任务 微任务 是什么

小例题:

```jsx
console.log(1)

setTimeout(function() {
	console.log(2)
}, 0)

console.log(3)
```

宏任务: 主线程代码, setTimeout 等属于宏任务,  上一个宏任务执行完, 才会考虑执行下一个宏任务

微任务: promise .then .catch的需要执行的内容, 属于微任务, 满足条件的微任务, 会被添加到当前宏任务的最后去执行

![](http://pic.qigou.top/imageimage-20201208040306978.png)

**事件循环队列 eventLoop**

![](http://pic.qigou.top/imageimage-20201208040235602.png)

例题1:

```jsx
  console.log(1)

  setTimeout(function() {
    console.log(2) // 宏任务
  }, 0)

  const p = new Promise((resolve, reject) => {
    resolve(1000)
  })
  p.then(data => {
    console.log(data)  // 微任务
  })

  console.log(3)
```

![](http://pic.qigou.top/imageimage-20210306151137688.png)

例题2:

```jsx
async function fn () {
  console.log(111)
}
fn()
console.log(222)
```

例题3:

```jsx
async function fn () {
  const res = await 2
  console.log(res)
}
fn()
console.log(222)
```

例题4:

```jsx
async function fn () {
  console.log('嘿嘿')
  const res = await fn2()
  console.log(res)  // 微任务
}
async function fn2 () {
  console.log('gaga')
}
fn()
console.log(222)
```

![](http://pic.qigou.top/image20210705003049.png)

考察点: async 函数只有从 await 往下才是异步的开始

## 14. async/await是什么？

ES7 标准中新增的 `async` 函数，从目前的内部实现来说其实就是 `Generator` 函数的语法糖。

它基于 Promise，并与所有现存的基于Promise 的 API 兼容。
**async 关键字**

1. `async` 关键字用于声明⼀个异步函数（如 `async function asyncTask1() {...}`）

2. `async` 会⾃动将常规函数转换成 Promise，返回值也是⼀个 Promise 对象

3. `async` 函数内部可以使⽤ `await`

**await 关键字**

1. `await` 用于等待异步的功能执⾏完毕 `var result = await someAsyncCall()`

2. `await` 放置在 Promise 调⽤之前，会强制async函数中其他代码等待，直到 Promise 完成并返回结果

3. `await` 只能与 Promise ⼀起使⽤

4. `await` 只能在 `async` 函数内部使⽤ 

## 15. 相较于 Promise，async/await有何优势？

1. 同步化代码的阅读体验（Promise 虽然摆脱了回调地狱，但 then 链式调⽤的阅读负担还是存在的）
2. 和同步代码更一致的错误处理方式（ async/await 可以⽤成熟的 try/catch 做处理，比 Promise 的错误捕获更简洁直观）
3. 调试时的阅读性, 也相对更友好

## 15. 深拷贝 浅拷贝

引用类型, 进行赋值时, 赋值的是地址

1. 浅拷贝

   ```jsx
   let obj = {
   	name: 'zs',
   	age: 18
   }
   let obj2 = {
       ...obj
   }
   ```

2. 深拷贝

   ```jsx
   let obj = {
   	name: 'zs',
   	age: 18,
       car: {
           brand: '宝马',
           price: 100
       }
   }
   
   let obj2 = JSON.parse(JSON.stringify(obj))
   console.log(obj2)
   ```

   当然递归也能解决, 只是比较麻烦~

   ...

其他方案, 可以参考一些博客


<style>
.sidebar > .sidebar-links > .sidebar-link + .sidebar-link{
     padding-top: 0 !important ;
}
.sidebar > .sidebar-links > .sidebar-link > .sidebar-link-item{
    font-size: 1rem;
}
.sidebar[data-v-4e9236e4],
.sidebar[data-v-6b49cdcd]{
    width: 22rem;
}
</style>
