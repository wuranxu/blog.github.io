(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{429:function(a,e,s){"use strict";s.r(e);var t=s(2),v=Object(t.a)({},(function(){var a=this,e=a._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("blockquote",[e("p",[a._v("大家好，这里是阔别已久的技巧君。今天给大家带来的是一种Python超强玩法之: 同步方法异步化。")])]),a._v(" "),e("h3",{attrs:{id:"背景"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#背景"}},[a._v("#")]),a._v(" 背景")]),a._v(" "),e("p",[a._v("在我们平时的"),e("code",[a._v("FastApi")]),a._v("工作中，经常会用到一些"),e("code",[a._v("异步的")]),a._v("操作，为了保持一致，我们一般会编写配套的异步代码。")]),a._v(" "),e("p",[a._v("但如果"),e("code",[a._v("我们提供了")]),a._v("类似jmeter BeanShell的可执行代码的功能给用户，那用户"),e("code",[a._v("还能给你编写异步代码吗？")]),a._v("那显然是不可能的事情。")]),a._v(" "),e("p",[a._v("还有一种情况，当我们引入第三方包，比如一些oss的库，里面天然是同步方法，有内置的requests请求，你想不阻塞整个fastapi服务，也是需要将他们异步化的。")]),a._v(" "),e("h3",{attrs:{id:"怎么做"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#怎么做"}},[a._v("#")]),a._v(" 怎么做？")]),a._v(" "),e("p",[a._v("这块先给我点时间去调研，我暂时还没有完全玩明白里面的内容。初步的设想是通过loop.run_in_executor执行同步代码，让他超乎三界之外，不让其阻塞"),e("code",[a._v("事件循环")]),a._v("。")]),a._v(" "),e("p",[a._v("由于还不是很确定，所以会在后面理解清楚了补充进来。那就没有现成的方案吗？答案是有的，想做这件事情的，不只是我哦！")]),a._v(" "),e("p",[a._v("为此我调研了几个库，它们都能很好地解决这个问题。下面我们来一一介绍。")]),a._v(" "),e("h3",{attrs:{id:"asyncer"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#asyncer"}},[a._v("#")]),a._v(" Asyncer")]),a._v(" "),e("p",[a._v("先上地址: "),e("a",{attrs:{href:"https://asyncer.tiangolo.com/",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://asyncer.tiangolo.com/"),e("OutboundLink")],1)]),a._v(" "),e("p",[a._v("这是大名鼎鼎的FastApi的作者，休闲娱乐的时候写的一款工具，它不仅可以把同步代码异步化，还可以把异步代码同步化，我们来看看介绍。")]),a._v(" "),e("p",[e("img",{attrs:{src:"https://files.mdnice.com/user/11504/4bb63e02-2465-4394-91a4-3ae6ed78c240.png",alt:""}})]),a._v(" "),e("p",[a._v("简单看下，上面的同步方法（内部用了sleep）在asyncify的包裹下，变成了awaitable的方法，即"),e("code",[a._v("异步化")]),a._v("。不过由于我没有真实使用，看在作者的面上，给个推荐。")]),a._v(" "),e("p",[a._v("AnyIO.run，因为这个库基于AnyIO而编写的（又是个奇怪的知识点），我想应该和asyncio.run差不多疗效。")]),a._v(" "),e("p",[a._v("总之，既然作者的介绍是符合我们预期的，我们就推荐一下。")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("pip install asyncer\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("h3",{attrs:{id:"awaitable"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#awaitable"}},[a._v("#")]),a._v(" awaitable")]),a._v(" "),e("p",[a._v("这个库挺不错的，是一个"),e("code",[a._v("乌拉")]),a._v("老哥写的。里面充斥着我看不懂的俄语注释，但我试过功能比较完善，也很容易上手，不信咱们看看:")]),a._v(" "),e("ul",[e("li",[a._v("安装")])]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("pip install awaits\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("ul",[e("li",[a._v("使用")])]),a._v(" "),e("p",[e("img",{attrs:{src:"https://files.mdnice.com/user/11504/d8a5bc3d-3101-404d-b6f7-3a2684dd9499.png",alt:""}})]),a._v(" "),e("p",[a._v("和上面的区别在于，他只是把同步方法装饰起来，就可以当异步方法用了，是不是"),e("code",[a._v("非常神奇")]),a._v("！")]),a._v(" "),e("p",[a._v("我测试过，"),e("code",[a._v("疗效不错")]),a._v("。因为它也具备异步方法的其他特性，比如取消。具体可以参考下我对下面那个库介绍的图片示例代码。")]),a._v(" "),e("h3",{attrs:{id:"aioify"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#aioify"}},[a._v("#")]),a._v(" aioify")]),a._v(" "),e("p",[a._v("这个是我接触过的第一个同步转异步的库，为此我还为它提过issue。图里面是我测试一个同步方法异步化以后，能不能做"),e("code",[a._v("取消")]),a._v("类似的操作。这个是我用来判断它是否阻塞的一个因素。")]),a._v(" "),e("p",[e("img",{attrs:{src:"https://files.mdnice.com/user/11504/0aff629a-3057-4990-a2a9-59575e28ae15.png",alt:""}})]),a._v(" "),e("p",[a._v("最开始我是发现，如果遇到"),e("code",[a._v("time.sleep")]),a._v("这样的同步方法，这个方法似乎没有起到作用，也就是依旧会阻塞，后面这个库的作者给我答复，大意是重新搞了一下，我可以按照预期去做了。不过我现在还没有尝试过，试着阅读过源码，"),e("code",[a._v("无疾而终")]),a._v("了。")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("pip install aioify\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("hr"),a._v(" "),e("p",[a._v("最后，我仔细阅读了awaitable的源码，比较简短，如果有时间我会仔细讲一下。更重点的是，我要去调研下开篇说的部分。大家也可以勇敢点尝试下文中介绍的几个库。")]),a._v(" "),e("p",[e("strong",[a._v('我是米洛，欢迎关注我，我会继续在掘金"进货"！')])])])}),[],!1,null,null,null);e.default=v.exports}}]);