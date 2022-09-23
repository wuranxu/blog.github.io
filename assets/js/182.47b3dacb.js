(window.webpackJsonp=window.webpackJsonp||[]).push([[182],{583:function(t,s,a){"use strict";a.r(s);var e=a(2),r=Object(e.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("blockquote",[s("p",[t._v("大家好~我是"),s("code",[t._v("米洛")]),t._v("！"),s("br"),t._v("\n我正在从0到1打造一个开源的接口测试平台, 也在编写一套与之对应的完整"),s("code",[t._v("教程")]),t._v("，希望大家多多支持。"),s("br"),t._v("\n欢迎关注我的公众号"),s("code",[t._v("米洛的测开日记")]),t._v("，获取最新文章教程!")])]),t._v(" "),s("h3",{attrs:{id:"回顾"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#回顾"}},[t._v("#")]),t._v(" 回顾")]),t._v(" "),s("p",[t._v("上一节我们"),s("code",[t._v("牛刀小试")]),t._v("，编写了redisManager，并且成功执行了redis命令。")]),t._v(" "),s("p",[t._v("那这一节，就让我们来折腾下在线执行Redis命令。")]),t._v(" "),s("p",[s("strong",[t._v("由于某些特定的原因，在使用aredis的时候有了一些不好的体验，主要是以下几个方面, 所以我打算弃坑了。")])]),t._v(" "),s("ul",[s("li",[t._v("get和set操作没有支持中文，非常难受")]),t._v(" "),s("li",[t._v("对于报错信息不是那么友好，因为我这边出现了一个连接出错的问题，发现对方的error是ConnectionError，里面毫无内容")]),t._v(" "),s("li",[t._v("之前也说了，迁移成本巨低，所以我们可以完美切回用户最多的同步库（如果踩坑也有人一起想办法）")])]),t._v(" "),s("h3",{attrs:{id:"安装redis和redis-py-cluster"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装redis和redis-py-cluster"}},[t._v("#")]),t._v(" 安装redis和redis-py-cluster")]),t._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("pip3 "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" redis redis-py-cluster\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("h3",{attrs:{id:"改写manager类"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#改写manager类"}},[t._v("#")]),t._v(" 改写Manager类")]),t._v(" "),s("p",[t._v("其实要改变的并不多，看下git的改动就知道了:")]),t._v(" "),s("ul",[s("li",[t._v("修改引入路径")])]),t._v(" "),s("p",[s("img",{attrs:{src:"https://static.pity.fun/picture/2021-11-15/1636987195952-image.png",alt:""}})]),t._v(" "),s("ul",[s("li",[t._v("修复之前的bug")])]),t._v(" "),s("p",[s("img",{attrs:{src:"https://static.pity.fun/picture/2021-11-15/1636987244980-image.png",alt:"之前的获取单实例从集群中拿数据了，大错特错了"}})]),t._v(" "),s("ul",[s("li",[t._v("改写cluster")])]),t._v(" "),s("p",[s("img",{attrs:{src:"https://static.pity.fun/picture/2021-11-15/1636987283198-image.png",alt:"换个名字而已，从StrictCluster改为Cluster"}})]),t._v(" "),s("h3",{attrs:{id:"完善在线执行命令的方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#完善在线执行命令的方法"}},[t._v("#")]),t._v(" 完善在线执行命令的方法")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://static.pity.fun/picture/2021-11-15/1636987464416-image.png",alt:"做一个判断，如果是cluster则获取集群客户端，否则获取实例客户端"}})]),t._v(" "),s("p",[t._v("这样我们的后端接口就编写完毕了，因为我们想做的是类似redis-cli的功能。")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("寻找前端组件")]),t._v(" "),s("p",[t._v("我们需要一个web版本的终端，所以我在github寻找了很久，找到了这样一款质量还不错的:")])])]),t._v(" "),s("p",[s("img",{attrs:{src:"https://static.pity.fun/picture/2021-11-15/1636987570005-image.png",alt:"到时候我们的页面上，就让用户输入这个了"}})]),t._v(" "),s("ul",[s("li",[t._v("最终效果")])]),t._v(" "),s("p",[s("img",{attrs:{src:"https://static.pity.fun/picture/2021-11-15/1636987626286-image.png",alt:"最终显示效果"}})]),t._v(" "),s("p",[t._v("还是比较丑，左侧是现有的redis连接配置，右侧是类似redis-cli的客户端页面。")]),t._v(" "),s("p",[t._v("在右侧执行语句以后，就会调用我们刚才编写的"),s("code",[t._v("redis在线执行接口")]),t._v("。")]),t._v(" "),s("p",[t._v("凑合能用就行。给大家看看使用gif:")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://static.pity.fun/picture/2021-11-15/1636988970815-Kapture%202021-11-15%20at%2023.08.38.gif",alt:""}})]),t._v(" "),s("p",[t._v("目前只支持基础的操作，包括常见的:")]),t._v(" "),s("p",[s("code",[t._v("get")]),t._v(" "),s("code",[t._v("set")]),t._v(" "),s("code",[t._v("hget")]),t._v(" "),s("code",[t._v("hset")]),t._v(" "),s("code",[t._v("hgetall")]),t._v("等等")]),t._v(" "),s("h3",{attrs:{id:"自动更新redis"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#自动更新redis"}},[t._v("#")]),t._v(" 自动更新Redis")]),t._v(" "),s("p",[t._v("每当配置有变更的时候，我们都需要"),s("code",[t._v("变更RedisManager中的数据")]),t._v("，所以我们之前为之编写了Refresh方法。")]),t._v(" "),s("p",[t._v("我们修改update/delete方法:")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://static.pity.fun/picture/2021-11-15/1636990192940-image.png",alt:"删除client也编写了一个方法"}})]),t._v(" "),s("p",[t._v("这里的background_tasks是来自fastapi的后台任务，如果大家了解go的话，这里就等于:")]),t._v(" "),s("div",{staticClass:"language-go line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-go"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("test")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 业务逻辑")]),t._v("\n    result "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" xxx\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("go")]),t._v(" RedisManager"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("delete")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" result\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br")])]),s("p",[t._v("其实就是一个后台任务，咱们的主体方法可以直接return了。")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://static.pity.fun/picture/2021-11-15/1636990310406-image.png",alt:"删除客户端的方法，如果是集群则pop集群字典"}})]),t._v(" "),s("p",[t._v("今天的内容就到这了，下期我们解决APScheduler"),s("code",[t._v("重复执行")]),t._v("的问题。")])])}),[],!1,null,null,null);s.default=r.exports}}]);