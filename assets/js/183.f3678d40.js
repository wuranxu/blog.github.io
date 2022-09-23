(window.webpackJsonp=window.webpackJsonp||[]).push([[183],{585:function(t,s,a){"use strict";a.r(s);var n=a(2),r=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("blockquote",[s("p",[t._v("大家好~我是"),s("code",[t._v("米洛")]),t._v("！"),s("br"),t._v("\n我正在从0到1打造一个开源的接口测试平台, 也在编写一套与之对应的完整"),s("code",[t._v("教程")]),t._v("，希望大家多多支持。"),s("br"),t._v("\n欢迎关注我的公众号"),s("code",[t._v("米洛的测开日记")]),t._v("，获取最新文章教程!")])]),t._v(" "),s("h3",{attrs:{id:"回顾"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#回顾"}},[t._v("#")]),t._v(" 回顾")]),t._v(" "),s("p",[t._v("上一节我们编写了在线执行Redis命令的功能，页面也勉强能用了。对于前置条件这块来说，就好像沙鲁吞了17号，已经算半个"),s("code",[t._v("完全体")]),t._v("了。")]),t._v(" "),s("p",[t._v("我们趁热打铁，解决一下因为部署多机器引发的Apscheduler重复执行的问题。")]),t._v(" "),s("h3",{attrs:{id:"apscheduler带来的问题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#apscheduler带来的问题"}},[t._v("#")]),t._v(" APScheduler带来的问题")]),t._v(" "),s("p",[t._v("APScheduler其实本质上还是一个"),s("code",[t._v("定时任务组件")]),t._v("，它并没有celery那么强大复杂的系统。针对多台机器，或者uvicorn(gunicorn)的多个worker，它是会"),s("code",[t._v("重复执行")]),t._v("的。")]),t._v(" "),s("p",[t._v("这里感谢一下小右君，他告诉我前面有大坑。")]),t._v(" "),s("p",[t._v("像我们平时那么启动:")]),t._v(" "),s("div",{staticClass:"language-python line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" __name__ "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"__main__"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    uvicorn"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("run"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("app"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'main:pity'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" host"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'0.0.0.0'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" port"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("7777")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br")])]),s("p",[t._v("这样"),s("code",[t._v("其实只开了1个worker")]),t._v("，你想呀，1个工人执行定时任务，当然不存在竞争的问题，但多个工人一起执行，你就存在"),s("code",[t._v("信息不对称")]),t._v("的问题。")]),t._v(" "),s("p",[t._v("工人A到点了，要干活了，他不知道B也准备干同样的活儿，所以任务重复执行的问题，就出现了。")]),t._v(" "),s("h3",{attrs:{id:"解决问题的方向"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#解决问题的方向"}},[t._v("#")]),t._v(" 解决问题的方向")]),t._v(" "),s("ol",[s("li",[s("code",[t._v("我只启动1个worker")])])]),t._v(" "),s("p",[t._v("有点傻，而且性能不好使，多台机器部署依然有问题。")]),t._v(" "),s("p",[t._v("推荐指数: 0颗星")]),t._v(" "),s("ol",{attrs:{start:"2"}},[s("li",[t._v("初始化sceduler的时候，利用socket占据一个固定的端口比如2333")])]),t._v(" "),s("p",[t._v("端口号只能被1个worker占领，其他worker拿不到，也就起不来了。但还是不能支持多节点部署，实际上只有1个worker使用，浪费了1个"),s("code",[t._v("端口")]),t._v("。")]),t._v(" "),s("p",[t._v("推荐指数: ⭐⭐⭐")]),t._v(" "),s("ol",{attrs:{start:"3"}},[s("li",[t._v("分布式锁")])]),t._v(" "),s("p",[t._v("不够轻量，需要引入第三方组件如: Redis/Zookeeper/"),s("code",[t._v("Etcd")]),t._v("。但能很好解决多worker和多节点的问题。")]),t._v(" "),s("h2",{attrs:{id:"推荐指数-⭐⭐⭐"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#推荐指数-⭐⭐⭐"}},[t._v("#")]),t._v(" 推荐指数: ⭐⭐⭐")]),t._v(" "),s("p",[t._v("办法很多，但是好用的"),s("code",[t._v("真不多")]),t._v("。由于我们本身就需要引入Redis，还是秉着不滥用中间件的原则，所以我们打算用Redis的分布式锁。")]),t._v(" "),s("p",[t._v("而关于redis分布式锁，有很多介绍。我们用牛人们封装好的RedLock来帮我们解决同时执行问题。")]),t._v(" "),s("h3",{attrs:{id:"redlock"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#redlock"}},[t._v("#")]),t._v(" Redlock")]),t._v(" "),s("p",[t._v("比起自己setnx+用lua脚本保障分布式锁执行，官方后面给出了redlock的解决方案。更多这些细节可以自行搜索"),s("code",[t._v("Redlock")]),t._v("。")]),t._v(" "),s("p",[t._v("我们这边采用第三方的库: Redlock来简化我们的开发。")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://static.pity.fun/picture/2021-11-16/1637051120581-image.png",alt:"它的api比较简单"}})]),t._v(" "),s("p",[t._v("基本上用with获取lock，传入redis节点信息即可，接着我们就可以编写相关代码了。")]),t._v(" "),s("p",[t._v("我们还是用装饰器的方法，在想要加锁的方法引入此装饰器。key是自己定义的执行key，用于确定锁的唯一性。")]),t._v(" "),s("p",[s("strong",[t._v("分布式锁的原理就是多台设备同时去试图创建key，先创建成功的就执行对应的操作。所以对于所有节点来说，key必须都统一起来，并且不能和其他分布式锁的key冲突。")])]),t._v(" "),s("div",{staticClass:"language-python line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" functools\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" os\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" redlock "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" RedLock"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" RedLockError\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" config "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Config\n\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("lock")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("key"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("decorator")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("func"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token decorator annotation punctuation"}},[t._v("@functools"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("wraps")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("func"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("wrapper")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("args"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("**")]),t._v("kwargs"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("try")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 试图获取分布式锁，如果没有获取到则会抛出RedLockError，所以我们这里捕获它")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("with")]),t._v(" RedLock"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string-interpolation"}},[s("span",{pre:!0,attrs:{class:"token string"}},[t._v('f"distributed_lock:')]),s("span",{pre:!0,attrs:{class:"token interpolation"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("func"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("__name__"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token interpolation"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("key"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token interpolation"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("str")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("args"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                             connection_details"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("Config"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("RedisCluster"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                             "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n                    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" func"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("args"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("**")]),t._v("kwargs"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("except")]),t._v(" RedLockError"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string-interpolation"}},[s("span",{pre:!0,attrs:{class:"token string"}},[t._v('f"进程: ')]),s("span",{pre:!0,attrs:{class:"token interpolation"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("os"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("getpid"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('获取任务失败, 不用担心，还有其他哥们给你执行了"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" wrapper\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" decorator\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br"),s("span",{staticClass:"line-number"},[t._v("16")]),s("br"),s("span",{staticClass:"line-number"},[t._v("17")]),s("br"),s("span",{staticClass:"line-number"},[t._v("18")]),s("br"),s("span",{staticClass:"line-number"},[t._v("19")]),s("br"),s("span",{staticClass:"line-number"},[t._v("20")]),s("br"),s("span",{staticClass:"line-number"},[t._v("21")]),s("br"),s("span",{staticClass:"line-number"},[t._v("22")]),s("br"),s("span",{staticClass:"line-number"},[t._v("23")]),s("br"),s("span",{staticClass:"line-number"},[t._v("24")]),s("br")])]),s("p",[t._v("关于唯一key的确认，我这边首先加上了"),s("code",[t._v("distributed_lock")]),t._v("的前缀，是因为方便区分其他key，接着通过函数名称+唯一key确认分布式key，但由于有的方法是带"),s("code",[t._v("参数")]),t._v("的，所以我选择再加一个args，来支持那些"),s("strong",[t._v("同方法不同参数的任务")]),t._v("。")]),t._v(" "),s("h3",{attrs:{id:"运用到pity之中"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#运用到pity之中"}},[t._v("#")]),t._v(" 运用到pity之中")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://static.pity.fun/picture/2021-11-16/1637051675473-image.png",alt:"在装饰器文件中添加lock装饰器"}})]),t._v(" "),s("p",[s("img",{attrs:{src:"https://static.pity.fun/picture/2021-11-16/1637051857013-image.png",alt:""}})]),t._v(" "),s("p",[t._v("我们只需要在run_test_plan方法加上lock这个装饰器即可，总体来说还是"),s("code",[t._v("非常方便")]),t._v("的。")]),t._v(" "),s("p",[t._v("如果需要测试的话，大家可以用以下命令启动pity:")]),t._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("uvicorn main:pity "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--host")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.0")]),t._v(".0.0 "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--port")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("7777")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--workers")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[s("img",{attrs:{src:"https://static.pity.fun/picture/2021-11-16/1637051979050-image.png",alt:""}})]),t._v(" "),s("p",[t._v("可以看到，日志都输出了4份，因为有4个worker。用这个模式启动"),s("code",[t._v("PITY")]),t._v("的话，可以看到对应的效果。")]),t._v(" "),s("p",[t._v("关于Redlock，这节就介绍到这里了。下一节我们要在前置条件中支持Redis语句，敬请期待吧。")])])}),[],!1,null,null,null);s.default=r.exports}}]);