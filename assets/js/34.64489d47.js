(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{436:function(s,t,a){"use strict";a.r(t);var n=a(2),e=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("blockquote",[t("p",[s._v("大家好~我是"),t("code",[s._v("米洛")]),s._v("！"),t("br"),t("br"),s._v("\n我正在从0到1打造一个开源的"),t("code",[s._v("接口测试平台")]),s._v(", 也在编写与之配套的一套完整"),t("code",[s._v("教程")]),s._v("，希望大家能够多多支持。"),t("br"),s._v(" "),t("br"),s._v("\n欢迎关注我的公众号"),t("code",[s._v("米洛的测开日记")]),s._v("，获取最新文章教程!")])]),s._v(" "),t("h3",{attrs:{id:"装饰器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#装饰器"}},[s._v("#")]),s._v(" 装饰器")]),s._v(" "),t("p",[s._v("装饰器，很多人都会被这个名词震慑住，那它究竟是干嘛的，"),t("code",[s._v("怎么使用")]),s._v("，"),t("code",[s._v("原理")]),s._v("是什么呢？")]),s._v(" "),t("p",[s._v("先聊聊装饰器，装饰器我个人理解是Python的一种"),t("code",[s._v("语法糖")]),s._v("，它常常用于方法调用之前/之后做的一些处理操作。")]),s._v(" "),t("h2",{attrs:{id:"举个栗子🌰"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#举个栗子🌰"}},[s._v("#")]),s._v(" 举个栗子🌰")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("计算方法执行时间")]),s._v(" "),t("p",[s._v("如果我要计算一个方法的执行时间，那我可以在方法调用之前记录下时间，执行完成后用"),t("code",[s._v("当前时间")]),s._v(" - "),t("code",[s._v("之前记录的时间")]),s._v("，这样就能拿到方法的"),t("code",[s._v("执行时间")]),s._v("。")])]),s._v(" "),t("li",[t("p",[s._v("日志、操作记录")]),s._v(" "),t("p",[s._v("我这个方法我想知道什么时候被调用了，有谁调用了，我都要记到"),t("code",[s._v("小本本")]),s._v("上，我们就可以用装饰器来帮我们做这个事情。")])]),s._v(" "),t("li",[t("p",[s._v("判断用户是否登录")]),s._v(" "),t("p",[s._v("我们编写web系统常常会判断用户登录与否，没登录就不调用接口方法了，直接给他一个"),t("code",[s._v("需要登录")]),s._v("的提示，或者将用户跳转回"),t("code",[s._v("登录页")]),s._v("。---")]),s._v(" "),t("p",[s._v("所以呢，装饰器一般是在方法"),t("code",[s._v("执行之前")]),s._v("，"),t("code",[s._v("执行之后")]),s._v("帮忙做一些工作。")])])]),s._v(" "),t("h2",{attrs:{id:"先来看一个最简单的装饰器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#先来看一个最简单的装饰器"}},[s._v("#")]),s._v(" 先来看一个最简单的装饰器")]),s._v(" "),t("p",[s._v("我们想在方法执行之前打印一些话，执行之后也打印一些话。")]),s._v(" "),t("div",{staticClass:"language-Python line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-python"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("simple")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("func"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("wrapper")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"开始了"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        func"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"结束了"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" wrapper\n\n\n"),t("span",{pre:!0,attrs:{class:"token decorator annotation punctuation"}},[s._v("@simple")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("func")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"方法正在执行中"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    \n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" __name__ "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"__main__"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    func"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br")])]),t("p",[s._v("先看下结果:")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://static.pity.fun/picture/2021-9-5/1630816141763-image.png",alt:""}})]),s._v(" "),t("h2",{attrs:{id:"解释"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#解释"}},[s._v("#")]),s._v(" 解释")]),s._v(" "),t("p",[s._v("定义了一个simple方法，方法里面套了一层"),t("code",[s._v("wrapper")]),s._v("方法，wrapper里面执行了func()，并在func"),t("code",[s._v("执行之前/之后")]),s._v("都输出了对应的语句，最后返回了wrapper。")]),s._v(" "),t("p",[s._v("在对应的"),t("code",[s._v("func")]),s._v("方法下面加上@simple，代表simple成为了func的一个装饰器。"),t("code",[s._v("@")]),s._v("这个是装饰器的固定写法，大家不要惊慌，我们来拆解一下:")]),s._v(" "),t("ol",[t("li",[s._v("func挂载了@simple，其实这一步等于:")])]),s._v(" "),t("p",[t("code",[s._v("simple(func)()")]),s._v("，不信我们去掉@simple，换成simple(func)试试。")]),s._v(" "),t("div",{staticClass:"language-Python line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-python"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("simple")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("func"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("wrapper")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"开始了"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        func"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"结束了"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" wrapper\n\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("func")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"方法正在执行中"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" __name__ "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"__main__"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    simple"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("func"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br")])]),t("p",[t("img",{attrs:{src:"https://static.pity.fun/picture/2021-9-5/1630816269341-image.png",alt:"可以看到效果是一样的"}})]),s._v(" "),t("p",[t("code",[s._v("simple(func)()")]),s._v("我们进一步进行拆分，simple(func)这个返回了一个wrapper，而"),t("code",[s._v("wrapper")]),s._v("还是一个方法！("),t("code",[s._v("看simple里面的def wrapper")]),s._v(")")]),s._v(" "),t("p",[s._v("所以我们拆分一下:")]),s._v(" "),t("div",{staticClass:"language-Python line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-python"}},[t("code",[s._v("f "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" simple"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("func"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nf"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("simple(func)返回了一个f方法，f()则执行了返回的"),t("code",[s._v("f")]),s._v("方法，所以合并到一起就是"),t("code",[s._v("simple(func)()")]),s._v("，这样拆出来就更好理解了。")]),s._v(" "),t("p",[s._v("所以"),t("code",[s._v("装饰器")]),s._v("的本质就是一个function而已，只不过@的写法会"),t("code",[s._v("便捷很多")]),s._v("。不要再认为"),t("code",[s._v("装饰器")]),s._v("是什么很高深的写法了，其实理解下来就是个"),t("code",[s._v("套娃儿")]),s._v("的操作。")]),s._v(" "),t("h2",{attrs:{id:"带参数的装饰器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#带参数的装饰器"}},[s._v("#")]),s._v(" 带参数的装饰器")]),s._v(" "),t("p",[s._v("关于"),t("code",[s._v("带参数")]),s._v("的装饰器，其实原理也一样。")]),s._v(" "),t("div",{staticClass:"language-Python line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-python"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("simple")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("func"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("wrapper")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("args"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("**")]),s._v("kwargs"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"开始了"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        func"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("args"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("**")]),s._v("kwargs"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"结束了"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" wrapper\n\n\n"),t("span",{pre:!0,attrs:{class:"token decorator annotation punctuation"}},[s._v("@simple")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("func")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("a"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" b"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" key"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"lihai"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("a"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" b"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" key"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"方法正在执行中"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" __name__ "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"__main__"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    func"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br")])]),t("p",[t("img",{attrs:{src:"https://static.pity.fun/picture/2021-9-5/1630816828541-image.png",alt:"执行结果，可以看到参数正常传递了"}})]),s._v(" "),t("p",[s._v("可以看到，区别就是wrapper那儿加上了"),t("code",[s._v("*args和**kwargs")]),s._v("，"),t("strong",[s._v("有这2个参数在，就可以囊括包裹方法的所有参数了")]),s._v("。")]),s._v(" "),t("p",[s._v("之所以这么写，是为了让"),t("code",[s._v("装饰器")]),s._v("能适配更多方法，其实我这么写，只对我一个方法生效，也是"),t("code",[s._v("没问题")]),s._v("的，但是通用性就很差。")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://static.pity.fun/picture/2021-9-5/1630816892253-image.png",alt:"所以这就解释了，为啥一般装饰器都是*args, **kwargs"}})]),s._v(" "),t("p",[s._v("遇到参数不是a,b,key的，直接GG，装饰器"),t("code",[s._v("无法继续使用")]),s._v("。")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://static.pity.fun/picture/2021-9-5/1630816975754-image.png",alt:""}})]),s._v(" "),t("h3",{attrs:{id:"更多装饰器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#更多装饰器"}},[s._v("#")]),s._v(" 更多装饰器")]),s._v(" "),t("p",[s._v("相信大家一下子也不能"),t("code",[s._v("轻易消化")]),s._v("，其实装饰器还有其他变种，比如"),t("code",[s._v("类装饰器")]),s._v("，又或者装饰类的"),t("code",[s._v("装饰器")]),s._v("。原来基本都类似。大家掌握了这里面的内容以后，就可以去了解下更多"),t("code",[s._v("装饰器")]),s._v("的用法了，下一篇教大家怎么用"),t("code",[s._v("装饰器")]),s._v("处理"),t("code",[s._v("异步方法")]),s._v("。")]),s._v(" "),t("p",[s._v("觉得有用的话🔥记得点个关注❤️‍ 哦~")]),s._v(" "),t("h3",{attrs:{id:"进阶的小作业"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#进阶的小作业"}},[s._v("#")]),s._v(" 进阶的小作业")]),s._v(" "),t("p",[s._v("我想要一个循环执行N次方法的装饰器，命名为loop，如果@loop形式，则不进行循环，如果是"),t("code",[s._v("@loop(5)")]),s._v("，则要循环方法5次，你可以试试吗？")]),s._v(" "),t("div",{staticClass:"language-Python line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-python"}},[t("code",[t("span",{pre:!0,attrs:{class:"token decorator annotation punctuation"}},[s._v("@loop")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("func1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("pass")]),s._v("\n    \n"),t("span",{pre:!0,attrs:{class:"token decorator annotation punctuation"}},[s._v("@loop")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("func2")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("pass")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br")])])])}),[],!1,null,null,null);t.default=e.exports}}]);