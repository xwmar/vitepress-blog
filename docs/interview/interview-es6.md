
ECMAScript 6 具体参考: https://es6.ruanyifeng.com/

作者: 阮一峰

## 1. DOM的事件流是什么？

**事件流**

⼜称为事件传播，是⻚⾯中接收事件的顺序。DOM2级事件规定的事件流包括了3个阶段：

- 事件捕获阶段（capture phase）
- 处于⽬标阶段（target phase）
- 事件冒泡阶段（bubbling phase）

![](http://pic.qigou.top/dom-image-20210219222213633.png)

如上图所示，事件流的触发顺序是：

1. 事件捕获阶段，为截获事件提供了机会
2. 实际的⽬标元素接收到事件
3. 事件冒泡阶段，可在这个阶段对事件做出响应



**事件冒泡（Event Bubbling）**

事件开始由最具体的元素（⽂档中嵌套层次最深的那个节点）接收到后，开始逐级向上传播到较为不具体的节点。

```html
<html>
  
  <head> 
    <title>Document</title> 
  </head>
  
  <body> 
    <button>按钮</button> 
  </body> 
  
</html>
```

如果点击了上面页面代码中的 `<button>` 按钮，那么该 `click` 点击事件会沿着 DOM 树向上逐级传播，在途经的每个节点上都会发生，具体顺序如下：

1. button 元素
2. body 元素
3. html 元素
4. document 对象


**事件捕获（Event Capturing）**

事件开始由较为不具体的节点接收后，然后开始逐级向下传播到最具体的元素上。

事件捕获的最大作用在于：事件在到达预定⽬标之前就可以捕获到它。

如果仍以上面那段 HTML 代码为例，当点击按钮后，在事件捕获的过程中，document 对象会首先接收到这个 `click` 事件，然后再沿着 DOM 树依次向下，直到 `<button>`。具体顺序如下：

1. document 对象
2. html 元素
3. body 元素
4. button 元素

## 2. 说说什么是事件委托？

事件委托，就是利用了事件冒泡的机制，在较上层位置的元素上添加一个事件监听函数，

来管理该元素及其所有子孙元素上的某一类的所有事件。

**示例**

```html
<ul id="list">
    <li>111</li>
    <li>222</li>
    <li>333</li>
    <li>444</li>
    <li>555</li>
</ul>

<script type="text/javascript">
    // ⽗元素 
    var list = document.getElementById('list');

    // 为⽗元素绑定事件，委托管理它的所有⼦元素li的点击事件 
    list.onclick = function (event) {
        var currentTarget = event.target;
        if (currentTarget.tagName.toLowerCase() === 'li') {
            alert(currentTarget.innerText)
        }
    }
</script>
```

> 适用场景：在绑定大量事件的时候，可以选择事件委托

**优点**

- 事件委托可以减少事件注册数量，节省内存占⽤!
- 当新增⼦元素时，⽆需再次做事件绑定，因此非常适合动态添加元素   (vue解析模板时, 会对新创建的元素, 额外进行绑定的)


## 3. ES6新增的数组方法有哪些?
1. **`forEach()`**  遍历数组，无返回值，不改变原数组。
2. **`map()`**  遍历数组，返回一个新数组，不改变原数组的值。
3. **`filter()`**  过滤掉数组中不满足条件的值，返回一个符合条件的新数组，不改变原数组的值。
4. **`reduce()`**  接收一个函数作为累加器，数组中每个值(从左到右)开始缩减，最终为一个值。
5. **`every()`**  遍历数组每一项，每一项返回true，最终结果为true，有一项返回false，停止遍历,结果返回为false，不改变原数组。
6. **`some()`**  遍历数组每一项,有一项返回true,则停止遍历，结果返回true。不改变原数组。


## 4. ES6新特性有哪些？
1. 变量定义： let、const
2. 解构赋值： const [a, b, c, d] = [1, 2, 3, 4] // 1,2,3,4
3. 扩展运算符：{...obj}
4. 箭头函数； const fn () => {}
5. 模版字符串、对象属性简写、参数默认值
5. Promise、Class、Proxy、import导入、export导出
6. Set 和 Map 数据结构
