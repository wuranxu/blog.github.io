(window.webpackJsonp=window.webpackJsonp||[]).push([[99],{524:function(t,s,a){"use strict";a.r(s);var _=a(2),v=Object(_.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"title"}),s("p",[t._v("上一节我们彻底完成了"),s("code",[t._v("录制生成")]),t._v("相关的功能，但其实在越来越多的人知道pity以后，有不少人遇到了"),s("code",[t._v("部署")]),t._v("相关的问题。")])]),t._v(" "),s("blockquote",[s("p",[t._v("大家好~我是"),s("code",[t._v("米洛")]),t._v("！"),s("br"),t._v("\n我正在从0到1打造一个开源的接口测试平台, 也在编写一套与之对应的"),s("code",[t._v("教程")]),t._v("，希望大家多多支持。"),s("br"),t._v("\n欢迎关注我的公众号"),s("code",[t._v("米洛的测开日记")]),t._v("，获取最新文章教程!")])]),t._v(" "),s("h2",{attrs:{id:"回顾"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#回顾"}},[t._v("#")]),t._v(" 回顾")]),t._v(" "),s("p",[t._v("上一节我们彻底完成了"),s("code",[t._v("录制生成")]),t._v("相关的功能，但其实在越来越多的人知道pity以后，有不少人遇到了"),s("code",[t._v("部署")]),t._v("相关的问题。")]),t._v(" "),s("p",[t._v("所以"),s("code",[t._v("卫衣哥")]),t._v("出面帮我编写了一个docker配置，里面不仅包含了MySQL，还包含了Redis，大大降低了部署中遇到的问题。")]),t._v(" "),s("h3",{attrs:{id:"隐藏bug"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#隐藏bug"}},[t._v("#")]),t._v(" 隐藏bug")]),t._v(" "),s("p",[t._v("不过就在他制作镜像的时候，遇到了一个"),s("code",[t._v("奇葩问题")]),t._v("：页面一直重复登录。")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://static.pity.fun/picture/146bug.gif",alt:""}})]),t._v(" "),s("p",[t._v("这可把我难倒了，我们总结一下现象: 页面好像判断用户已经登录了，又判断用户没登录，所以一下让用户到"),s("code",[t._v("主页")]),t._v("，一下又切到"),s("code",[t._v("登录页")]),t._v("，后端接口则一直在无限重复请求。")]),t._v(" "),s("p",[t._v("于是我开始"),s("code",[t._v("梳理")]),t._v("登录这块的逻辑，视图找到问题的关键所在:")]),t._v(" "),s("ul",[s("li",[s("ol",[s("li",[t._v("当用户进入页面的时候，尝试获取用户的登录态，如果是未登录则弹到登录页面")])])]),t._v(" "),s("li",[s("ol",{attrs:{start:"2"}},[s("li",[t._v("如果是已登录，进入页面后我们会再度校验用户的token是否已经过期，如果过期则又把他弹回登录页，或者token不存在也是如此")])])])]),t._v(" "),s("h3",{attrs:{id:"反复检查"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#反复检查"}},[t._v("#")]),t._v(" 反复检查")]),t._v(" "),s("p",[t._v("我一开始想到的是redis，因为我们的用户数据会缓存一层。如果redis开启，数据库没值，也会校验通过，但卫衣哥说redis早就清空缓存了。")]),t._v(" "),s("p",[t._v("不过他又给了我个提示: "),s("code",[t._v("他的数据库是没数据的")]),t._v("。")]),t._v(" "),s("p",[t._v("我反复检查了前端代码，基本判断不存在"),s("code",[t._v("死循环")]),t._v("的问题。那也就是说，只有这一种可能了？")]),t._v(" "),s("p",[t._v("token校验通过了，但是没有给出具体的返回，或者说没有报错，导致前端认为token还是ok的，进入主页"),s("code",[t._v("再次校验")]),t._v("，发现没拿到数据库的用户信息，就导致2个步骤，1个对1个不对，无限循环了？")]),t._v(" "),s("p",[t._v("我们看看后端代码，就恍然大悟了:")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://static.pity.fun/picture/20220627185649.png",alt:""}})]),t._v(" "),s("p",[t._v("之前没有这多余的2行，由于卫衣哥传入的token是确凿的，我们系统能解析的，解析完毕之后拿到了user_info，我们这边去db二次校验获取user，我们也没有检查user是否存在，也就是说接口"),s("code",[t._v("并不报错")]),t._v("。")]),t._v(" "),s("p",[t._v("最终就导致了悲剧的发生: 小区大门保安让进了，小区单元楼不让进，让你去保安那拿钥匙，"),s("code",[t._v("无限循环")]),t._v("了。")]),t._v(" "),s("p",[t._v("所以改善的地方就是: "),s("code",[t._v("加一个用户是否存在的判断即可:")])]),t._v(" "),s("div",{staticClass:"language-python line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" user "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("is")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("None")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" PityResponse"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("failed"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"用户不存在"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 或者直接抛出异常")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('# raise Exception("用户不存在")')]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br")])]),s("h3",{attrs:{id:"还有问题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#还有问题"}},[t._v("#")]),t._v(" 还有问题")]),t._v(" "),s("p",[t._v("还要记得，我们是有一个Depends的中间件的: Permission，这个里面同样需要改造一下:")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://static.pity.fun/picture/20220627190142.png",alt:""}})]),t._v(" "),s("p",[t._v("这里我们也是只解析了用户token，没有校验数据库是否真有这个"),s("code",[t._v("用户")]),t._v("。")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://static.pity.fun/picture/20220627190324.png",alt:""}})]),t._v(" "),s("h2",{attrs:{id:"也就是我们把-call-改成async模式-接着对用户查询一次即可。"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#也就是我们把-call-改成async模式-接着对用户查询一次即可。"}},[t._v("#")]),t._v(" 也就是我们把__call__改成async模式，接着对用户"),s("code",[t._v("查询一次")]),t._v("即可。")]),t._v(" "),s("p",[t._v("今天就是本节的bug案例了，最新的部署文档和代码都已经提交了，欢迎大家鞭打~其实这之后我又发现我们的response提取参数用不了了，我真的会谢。")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[t._v("                                                          不愧是bug王子\n")])])]),s("p",[t._v("我只想说："),s("code",[t._v("回归测试真的很重要，有时候我改着改着老功能就不行了，尽管你对系统再熟悉，也有疏忽的时候呀！！！")])]),t._v(" "),s("p",[t._v("希望大家引以为戒，认真对待测试~~")])])}),[],!1,null,null,null);s.default=v.exports}}]);