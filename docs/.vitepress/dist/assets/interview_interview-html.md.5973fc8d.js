import{o as a,c as t,d as n}from"./app.fbdbcb16.js";const s='{"title":"1. HTML 文件中的 DOCTYPE 是什么作用？","description":"","frontmatter":{},"headers":[{"level":2,"title":"1. HTML 文件中的 DOCTYPE 是什么作用？","slug":"_1-html-文件中的-doctype-是什么作用？"},{"level":2,"title":"2. HTML、XML、XHTML 之间有什么区别？","slug":"_2-html、xml、xhtml-之间有什么区别？"},{"level":2,"title":"3. 前缀为 data- 开头的元素属性是什么？","slug":"_3-前缀为-data-开头的元素属性是什么？"},{"level":2,"title":"4. 谈谈你对 HTML 语义化的理解？","slug":"_4-谈谈你对-html-语义化的理解？"},{"level":2,"title":"5. HTML5 对比 HTML4 有哪些不同之处？","slug":"_5-html5-对比-html4-有哪些不同之处？"},{"level":2,"title":"6. meta 标签有哪些常用用法？","slug":"_6-meta-标签有哪些常用用法？"},{"level":2,"title":"7. img 标签的 srcset 的作用是什么？","slug":"_7-img-标签的-srcset-的作用是什么？"},{"level":2,"title":"8. 响应式图片处理优化: Picture 标签","slug":"_8-响应式图片处理优化-picture-标签"},{"level":2,"title":"9. 在 script 标签上使用 defer 和 async 的区别是什么？","slug":"_9-在-script-标签上使用-defer-和-async-的区别是什么？"},{"level":2,"title":"10. 前端做本地数据存储的方式有哪些？","slug":"_10-前端做本地数据存储的方式有哪些？"},{"level":2,"title":"11. 以上几种前端存储的区别是什么？","slug":"_11-以上几种前端存储的区别是什么？"}],"relativePath":"interview/interview-html.md","lastUpdated":1625585162332}',p={},e=n('<h2 id="_1-html-文件中的-doctype-是什么作用？"><a class="header-anchor" href="#_1-html-文件中的-doctype-是什么作用？" aria-hidden="true">#</a> 1. HTML 文件中的 DOCTYPE 是什么作用？</h2><p>HTML超文本标记语言: 是一个标记语言, 就有对应的语法标准</p><p>DOCTYPE 即 Document Type，网页文件的文档类型标准。</p><p>主要作用是告诉浏览器的解析器要使用哪种 <strong>HTML规范</strong> 或 <strong>XHTML规范</strong> 来解析页面。</p><p>DOCTYPE 需要放置在 HTML 文件的 <code>&lt;html&gt;</code>标签之前，如：</p><div class="language-html"><pre><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">&gt;</span></span>\n  ...\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span> (目前主流)\n</code></pre></div><div class="language-html"><pre><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">HTML</span> <span class="token name">PUBLIC</span> <span class="token string">&quot;-//W3C//DTD HTML 4.01//EN&quot;</span> <span class="token string">&quot;http://www.w3.org/TR/html4/strict.dtd&quot;</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">&gt;</span></span>\n  ...\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span> (早期)\n</code></pre></div><h2 id="_2-html、xml、xhtml-之间有什么区别？"><a class="header-anchor" href="#_2-html、xml、xhtml-之间有什么区别？" aria-hidden="true">#</a> 2. HTML、XML、XHTML 之间有什么区别？</h2><p>它们都属于标记语言。</p><table><thead><tr><th>语言</th><th>中文名</th><th>说明</th></tr></thead><tbody><tr><td>HTML4</td><td>超文本标记语言</td><td>主要用于做界面呈现。HTML 是先有实现，后面才慢慢制定标准的，导致HTML⾮常混乱和松散，语法非常的不严谨。</td></tr><tr><td>XML</td><td>可扩展标记语言</td><td>主要⽤于存储数据和结构。语法严谨，可扩展性强。由于 JSON 也有类似作⽤但更轻量⾼效， XML 的市场变得越来越⼩。</td></tr><tr><td>XHTML</td><td>可扩展超文本标记语言</td><td>属于加强版 HTML，为解决 HTML 的混乱问题而生，在语法方面变得和 XML 一样严格。另外，XHTML 的出现也催生了 HTML 5，让HTML向规范化严谨化过渡。</td></tr><tr><td>HTML5</td><td>超文本标记语言</td><td>在HTML的基础上进行拓展，用于页面呈现 (目前标准)</td></tr></tbody></table><p>XML的要求会比较严格:</p><ol><li><p>有且只能有一个根元素</p></li><li><p>大小写敏感</p></li><li><p>正确嵌套</p></li><li><p>必须双引号</p></li><li><p>必须闭合标签</p><p>...</p></li></ol><div class="language-jsx"><pre><code><span class="token prolog">&lt;?xml version=&quot;1.0&quot; encoding=&quot;utf-8&quot;?&gt;</span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>root</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">\n  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>father</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>box<span class="token punctuation">&#39;</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">\n    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>child</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">小张</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>child</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">\n    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>child</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">小王</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>child</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">\n  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>father</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">\n</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>root</span><span class="token punctuation">&gt;</span></span>\n</code></pre></div><p>XHTML 和 HTML5 的历史延展: <a href="https://www.cnblogs.com/my-freedom/p/5796915.html" target="_blank" rel="noopener noreferrer">https://www.cnblogs.com/my-freedom/p/5796915.html</a></p><p><strong>番外:</strong> 所以 HTML5 是HTML的新一代标准, 所谓的 H5 工程师这一词, 其实是国产词, 泛指新一代的web开发工程师,</p><p>具体H5工程师, 做什么工作方向, 还是要看需求 (比如: 移动端开发, PC端网页开发, H5小游戏开发....)</p><h2 id="_3-前缀为-data-开头的元素属性是什么？"><a class="header-anchor" href="#_3-前缀为-data-开头的元素属性是什么？" aria-hidden="true">#</a> 3. 前缀为 <code>data-</code> 开头的元素属性是什么？</h2><p>这是一种为 HTML 元素添加额外数据信息的方式，被称为 <strong>自定义属性</strong>。</p><p>我们可以直接在元素标签上声明这样的数据属性：</p><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>mydiv<span class="token punctuation">&quot;</span></span> <span class="token attr-name">data-message</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Hello,world<span class="token punctuation">&quot;</span></span> <span class="token attr-name">data-num</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>123<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n</code></pre></div><p>也可以使用 JavaScript 来操作元素的数据属性：</p><div class="language-js"><pre><code><span class="token keyword">let</span> mydiv <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;mydiv&#39;</span><span class="token punctuation">)</span>\n\n<span class="token comment">// 读取</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>mydiv<span class="token punctuation">.</span>dataset<span class="token punctuation">.</span>message<span class="token punctuation">)</span>\n\n<span class="token comment">// 写入</span>\nmydiv<span class="token punctuation">.</span>dataset<span class="token punctuation">.</span>foo <span class="token operator">=</span> <span class="token string">&quot;bar!!!&quot;</span>\n</code></pre></div><p><strong>注意：在各种现代前端框架出现后，这种原生的自定义属性已经变得不太常用了, 以前的使用频率非常高, 所以我们知道即可。</strong></p><p>例如: vue实现删除功能时需要 id, 可以直接传值</p><div class="language-jsx"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tr</span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>item in list<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>item.id<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">\n  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">张三</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">\n  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">18</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">\n  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">体育好</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">\n  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">\n    &lt;button @click=&quot;del(item.id)&quot;&gt;删除</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">\n    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">编辑</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">\n  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">\n</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tr</span><span class="token punctuation">&gt;</span></span>\n</code></pre></div><h2 id="_4-谈谈你对-html-语义化的理解？"><a class="header-anchor" href="#_4-谈谈你对-html-语义化的理解？" aria-hidden="true">#</a> 4. 谈谈你对 HTML 语义化的理解？</h2><p>考察核心点: 语义化的好处 (利于SEO, 可阅读性更好)</p><p><strong>语义化之前：</strong></p><p>在提倡语义化之前，你可能会使用各种各样的标签去实现同样的功能，比如：</p><ul><li>使用 span、div、p、a 等做文字, 做按钮</li><li>使用 div 做一切</li></ul><p>从功能方面来说，这确实是不存在什么问题的，完全可以达到功能效果。但这不符合直觉，非常不友好：</p><ul><li>对人不友好：阅读代码的人不能一眼看出代码的功能</li><li>对机器不友好：解析代码的程序不能很好的对这些元素进行分类处理</li></ul><p><strong>语义化之后：</strong></p><p>为了解决上面说的问题，HTML5 规范提倡语义化标签，即使⽤恰当语义的 HTML 标签让⻚⾯具有良好的结构与含义，⽐如：</p><ul><li><code>&lt;p&gt;</code> 标签就代表段落</li><li><code>&lt;article&gt;</code> 代表正⽂内容</li><li><code>&lt;button&gt; </code>代表按钮</li><li><code>&lt;header&gt;</code> 代表头部</li><li>等等...</li></ul><p>语义化的好处：</p><table><thead><tr><th>对开发者的好处</th><th>对机器/程序的好处</th></tr></thead><tbody><tr><td>使⽤了语义化标签的程序，可读性明显增强，开发者可以比容易和清晰地看出⽹⻚的结构；这也更利于整个开发团队的协作开发和后续维护工作</td><td>带有语义的网页代码在⽂字类应用上的表现⼒丰富，利于搜索引擎爬⾍程序来爬取和提取出有效的信息；语义化标签还⽀持读屏软件，根据⽂章可以⾃动⽣成⽬录等，方便特殊人群无障碍的使用这些网页程序。</td></tr></tbody></table><p><strong>语义化的适用性：</strong></p><p>语义化适合内容型的网站来使用（如简书、知乎），对其⽹站内容的传播有很⼤帮助。</p><h2 id="_5-html5-对比-html4-有哪些不同之处？"><a class="header-anchor" href="#_5-html5-对比-html4-有哪些不同之处？" aria-hidden="true">#</a> 5. HTML5 对比 HTML4 有哪些不同之处？</h2><p><strong>考察点: 是否了解 html5 新增的一些新特性</strong></p><table><thead><tr><th>不同点</th><th>备注说明</th></tr></thead><tbody><tr><td>只有一种 DOCTYPE ⽂件类型声明(统一标准)</td><td><code>&lt;!DOCTYPE html&gt;</code></td></tr><tr><td>增加了一些新的标签元素(功能, 语义化)</td><td><strong>section</strong>, <strong>video</strong>, progress, <strong>nav</strong>, meter, time, <strong>aside</strong>, <br><strong>canvas</strong>, command, datalist, details, embed, figcaption, <br>figure, <strong>footer</strong>, <strong>header</strong>, hgroup...</td></tr><tr><td>input 支持了几个新的类型值</td><td><code>date, email, url</code> 等等</td></tr><tr><td>新增了一些标签属性</td><td>charset（⽤于 meta 标签）；async（⽤于 script 标签）</td></tr><tr><td>新增的全域属性</td><td>contenteditable, draggable... <br>hidden...</td></tr><tr><td>新增API</td><td>本地存储, 地理定位, Canvas绘图, 拖拽API, 即时通信WebSocket...</td></tr></tbody></table><p>获取地理定位: navigator.geolocation.getCurrentPosition(successCallback, errorCallback) (为了安全, 需要在 https 网站使用)</p><p>记忆角度: 更标准, 新增标签, 新增type表单属性, 新增全域属性, 新增API...</p><h2 id="_6-meta-标签有哪些常用用法？"><a class="header-anchor" href="#_6-meta-标签有哪些常用用法？" aria-hidden="true">#</a> 6. meta 标签有哪些常用用法？</h2><p><code>&lt;meta&gt;</code> 标签的具体功能一般由 name/http-equiv 和 content 两部分属性来定义。</p><ul><li>如果设置 name 属性，则它描述的是网页文档的信息（例如：作者、⽇期和时间、⽹⻚描述、 关键词）</li><li>如果设置 http-equiv 属性，则它描述的相当于是 HTTP 响应头信息（例如：网页内容信息, 网页缓存等）</li></ul><p><strong>一些常用的功能及写法：</strong></p><ol><li>设置网页关键词 (SEO)</li></ol><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>keywords<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>电商,好货,便宜<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n</code></pre></div><ol start="2"><li>设置网页视口（viewport）控制视⼝的⼤⼩、缩放和⽐例等 (移动端开发)</li></ol><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>viewport<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>width=device-width, initial-scale=1, maximum-scale=1<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n</code></pre></div><ol start="3"><li>设置 http 响应头：Content-Type 网页内容类型 (字符集)</li></ol><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">http-equiv</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>content-type<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text/html;charset=utf-8<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n\n<span class="token comment">&lt;!-- 设置字符集可简写为 --&gt;</span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>utf-8<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n</code></pre></div><h2 id="_7-img-标签的-srcset-的作用是什么？"><a class="header-anchor" href="#_7-img-标签的-srcset-的作用是什么？" aria-hidden="true">#</a> 7. img 标签的 srcset 的作用是什么？</h2><p><strong>考察点: 处理响应式图片的方式</strong> (css媒体查询换的是背景图片, 而不是 img 标签的 src)</p><p>开发者和设计师们竞相寻求 <strong>处理响应式图片</strong> 的方法。这的确是一个<a href="https://css-tricks.com/responsive-images-hard/" target="_blank" rel="noopener noreferrer">棘手的问题</a> ，因为我们对同一个网站在众多设备宽度下，</p><p>使用同一图像源。你愿意在一个大显示屏上显示模糊地、马赛克状的图像？</p><p>你愿意在你的手机上加载一个巨大的（虽然更漂亮的）图像？这个问题令人左右为难。 <a href="https://www.jiangweishan.com/article/response-srcset-sizes.html" target="_blank" rel="noopener noreferrer">博客链接</a></p><p>其实通过使用 img 标签的 srcset 属性，可定义一组额外的图片集合，让浏览器根据不同的屏幕状况选取合适的图片来显示。</p><blockquote><p>也就是图片的响应式处理能力。</p></blockquote><p>如果你的响应式需求比较简单，只需要针对屏幕的不同 dpr （device pixel ratio，设备像素比）来决定图片的显示的话，</p><p>dpr 设备像素比, 越高, 能够显示的越清晰 (dpr: 2, dpr: 3)</p><p>那么就只要这么写：</p><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">srcset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>320.png 1x, 640.png 2x, 960.png 3x<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>\n</code></pre></div><p>对于可变宽度的图像，我们使用<code>srcset</code>搭配<code>w</code>描述符以及<code>sizes</code>属性 。</p><ul><li><p><code>w</code>描述符告诉浏览器列表中的每个图象的宽度。</p></li><li><p><code>sizes</code>属性需要至少包含两个值，是由逗号分隔的列表。</p></li></ul><p>根据最新规范，如果<code>srcset</code>中任何图像使用了<code>w</code>描述符，那么必须要设置<code>sizes</code>属性。</p><p><code>sizes</code>属性有两个值：</p><ol><li><p>第一个是媒体查询条件；</p></li><li><p>第二个是图片对应的尺寸值，</p><p>在特定媒体条件下，此值决定了图片的宽度。</p><p>需要注意是，源图尺寸值不能使用百分比，如果要用100%, <code>vw</code>是唯一可用的CSS单位。</p></li></ol><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>img元素srcset属性浅析<span class="token punctuation">&quot;</span></span>\n  <span class="token attr-name">srcset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>\n    320.png 320w, \n    480.png 480w, \n    640.png 640w<span class="token punctuation">&quot;</span></span>\n  <span class="token attr-name">sizes</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>\n    (max-width: 320px) 100vw, \n    (max-width: 360px) 320px,\n    (max-width: 480px) 360px,\n    (max-width: 640px) 480px,\n    640px<span class="token punctuation">&quot;</span></span>\n  <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>640.png<span class="token punctuation">&quot;</span></span>\n<span class="token punctuation">/&gt;</span></span>\n</code></pre></div><p>为 img 定义以上属性后，浏览器的工作流程如下：</p><ol><li>检查设备的实际宽度</li><li>检查 img 标签的 sizes 属性中定义的媒体查询条件列表，并计算哪个条件最先匹配到</li><li>得到图片此时的响应式宽度</li><li>加载 srcset 中最接近, 最适合媒体查询匹配到的宽度的图片</li></ol><p>注意: 测试时, 清除缓存测试, 因为一旦加载了高清图, 就不会也没有必要, 回过去再用小图替换了</p><p>且我们无法确定究竟显示哪张图像，因为每个浏览器根据我们提供的信息挑选适当图像的算法是有差异的。</p><p>(译者注：srcset和size列表是对浏览器的一个建议(hint)，而非指令。由浏览器根据其能力、网络等因素来决定。)</p><h2 id="_8-响应式图片处理优化-picture-标签"><a class="header-anchor" href="#_8-响应式图片处理优化-picture-标签" aria-hidden="true">#</a> 8. 响应式图片处理优化: Picture 标签</h2><p><strong>考察点: 响应式图片处理</strong></p><p><code>picture</code>元素就像是图像和其源的容器。浏览器仍然需要<code>img</code>元素，用来表明需要加载的图片</p><p>在 <code>&lt;picture&gt;</code> 下可放置零个或多个<code>&lt;source&gt;</code>标签、以及一个<code>&lt;img&gt;</code>标签，为不同的屏幕设备和场景显示不同的图片。</p><p>如果source匹配到了, 就会优先用匹配到的, 如果没有匹配到会往下继续找</p><p>使用<code>picture</code>元素选择图像，不会有歧义。</p><p>浏览器的工作流程如下：</p><ul><li><p>浏览器会先根据当前的情况，去匹配和使用<code>&lt;source&gt;</code>提供的图片</p></li><li><p>如果未匹配到合适的<code>&lt;source&gt;</code>，就使用<code>&lt;img&gt;</code>标签提供的图片</p></li></ul><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>picture</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>source</span> <span class="token attr-name">srcset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>640.png<span class="token punctuation">&quot;</span></span> <span class="token attr-name">media</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>(min-width: 640px)<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>source</span> <span class="token attr-name">srcset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>480.png<span class="token punctuation">&quot;</span></span> <span class="token attr-name">media</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>(min-width: 480px)<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>320.png<span class="token punctuation">&quot;</span></span> <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>picture</span><span class="token punctuation">&gt;</span></span>\n</code></pre></div><h2 id="_9-在-script-标签上使用-defer-和-async-的区别是什么？"><a class="header-anchor" href="#_9-在-script-标签上使用-defer-和-async-的区别是什么？" aria-hidden="true">#</a> 9. 在 script 标签上使用 defer 和 async 的区别是什么？</h2><p><strong>明确: defer 和 async 的使用, 可以用于提升网页性能</strong></p><p>script标签存在两个属性，defer和async，因此 script标签 的使用分为三种情况：</p><ol><li><p><code>&lt;script src=&quot;example.js&quot;&gt;&lt;/script&gt;</code></p><p>没有defer或async属性，浏览器会立即加载并执行相应的脚本。</p><p>不等待后续加载的文档元素，读到就开始加载和执行，此举会阻塞后续文档的加载</p></li><li><p><code>&lt;script async src=&quot;example.js&quot;&gt;&lt;/script&gt;</code></p><p>有了async属性，表示后续文档的加载和渲染与js脚本的加载和执行是并行进行的，即异步执行；</p></li><li><p><code>&lt;script defer src=&quot;example.js&quot;&gt;&lt;/script&gt;</code></p><p>有了defer属性，加载后续文档的过程和js脚本的加载是并行进行的(异步)，此时的js脚本仅加载不执行, js脚本的执行需要等到文档所有元素解析完成之后，DOMContentLoaded事件触发执行之前。</p></li></ol><p>下图是使用了 defer、async、和未使用时的运行情况对比：</p><p><img src="http://pic.qigou.top/html-image-20210209172314832.png" alt=""></p><blockquote><p>【上图的图例说明】</p><p>绿线：HTML 的解析时间</p><p>蓝线：JS 脚本的加载时间</p><p>红色：JS 脚本的执行时间</p></blockquote><p>从图中我们可以明确一下几点：</p><p>1.defer和async在网络加载过程是一致的，都是异步执行的；(放在页面顶部, 也不会阻塞页面的加载, 与页面加载同时进行)</p><p>2.两者的区别, 脚本加载完成之后, async是立刻执行, defer会等一等 (等前面的defer脚本执行, 等dom的加载)</p><p>所以, js脚本加上 async 或 defer, 放在头部可以减少网页的下载加载时间, 如果不考虑兼容性, 可以用于优化页面加载的性能</p><div class="language-jsx"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://cdn.bootcdn.net/ajax/libs/vue/2.6.12/vue.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://cdn.bootcdn.net/ajax/libs/element-ui/2.15.0/index.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n</code></pre></div><h2 id="_10-前端做本地数据存储的方式有哪些？"><a class="header-anchor" href="#_10-前端做本地数据存储的方式有哪些？" aria-hidden="true">#</a> 10. 前端做本地数据存储的方式有哪些？</h2><p><img src="http://pic.qigou.top/html-image-20210209174438863.png" alt=""></p><ol><li>Cookies</li><li>localStorage</li><li>sessionStorage</li><li>Web SQL</li><li>IndexedDB</li></ol><h2 id="_11-以上几种前端存储的区别是什么？"><a class="header-anchor" href="#_11-以上几种前端存储的区别是什么？" aria-hidden="true">#</a> 11. 以上几种前端存储的区别是什么？</h2><table><thead><tr><th>方式名称</th><th>标准说明</th><th>功能说明</th></tr></thead><tbody><tr><td>Cookies</td><td>HTML5 前加入</td><td>1.会为每个请求自动携带所有的Cookies数据，比较方便，但是也是缺点，浪费流量；<br>2.每个domain(站点)限制存储20个cookie；<br>3.容量只有4K<br>4.浏览器API比较原始，需要自行封装操作。 (js-cookie)</td></tr><tr><td>localStorage</td><td>HTML5 加入</td><td>1.兼容IE8+，操作方便；<br>2.永久存储，除非手动删除；<br>3.容量为5M</td></tr><tr><td>sessionStorage</td><td>HTML5 加入</td><td>1.功能基本与 localStorage 相似，但当前页面关闭后即被自动清理；<br>2.与Cookies、localStorage 不同点是不能在所有同源窗口间共享，属于会话级别的存储</td></tr><tr><td>Web SQL</td><td>非标准功能</td><td>1.2010年已被废弃，但一些主流浏览器中都有相关的实现；<br>2.类似于 SQLite 数据库，是一种真正意义上的关系型数据库，⽤SQL进⾏操作；</td></tr><tr><td>IndexedDB</td><td>HTML5 加入</td><td>1.是一种 NoSQL 数据库，⽤键值对进⾏储存，可进⾏快速读取操作；<br>2.适合复杂 Web存储场景，⽤JS操作⽅便 (前端大量存数据的场景较少, 如果有, 可以用) <br>3.存储空间容量, 大于等于 250MB，甚至没有上限</td></tr></tbody></table>',102);p.render=function(n,s,p,o,c,l){return a(),t("div",null,[e])};export default p;export{s as __pageData};
