(window.webpackJsonp=window.webpackJsonp||[]).push([[70],{470:function(e,t,s){"use strict";s.r(t);var a=s(2),_=Object(a.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("hr"),e._v(" "),t("p",[e._v("highlight: atom-one-dark\ntheme: vuepress---\n一起养成写作习惯！这是我参与「掘金日新计划 · 4 月更文挑战」的第7天，"),t("a",{attrs:{href:"https://juejin.cn/post/7080800226365145118",title:"https://juejin.cn/post/7080800226365145118",target:"_blank",rel:"noopener noreferrer"}},[e._v("点击查看活动详情"),t("OutboundLink")],1),e._v("。")]),e._v(" "),t("blockquote",[t("p",[e._v("大家好~我是"),t("code",[e._v("米洛")]),e._v("！"),t("br"),e._v("\n我正在从0到1打造一个开源的接口测试平台, 也在编写一套与之对应的"),t("code",[e._v("教程")]),e._v("，希望大家多多支持。"),t("br"),e._v("\n欢迎关注我的公众号"),t("code",[e._v("米洛的测开日记")]),e._v("，一起交流学习!")])]),e._v(" "),t("h3",{attrs:{id:"回顾"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#回顾"}},[e._v("#")]),e._v(" 回顾")]),e._v(" "),t("p",[e._v("上一节我们把"),t("code",[e._v("请求地址")]),e._v("给优化了一顿，今天群里的一个测友给了点建议，说我查询个人信息的接口暴露的"),t("code",[e._v("字段")]),e._v("太多了。啥密码、邮箱、手机都给展示了出来，那么这一节我们专门针对这个，来改造一番。")]),e._v(" "),t("h3",{attrs:{id:"现有的response"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#现有的response"}},[e._v("#")]),e._v(" 现有的Response")]),e._v(" "),t("p",[e._v("我们之前封装过一个"),t("code",[e._v("PityResponse")]),e._v("，里面有一些基础功能，咱们看看:")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://files.mdnice.com/user/11504/929db29e-f639-47d5-b9fd-eff7b1bd5d05.png",alt:""}})]),e._v(" "),t("p",[e._v("可以看到，我们就是"),t("code",[e._v("包了一层")]),e._v("，把原先的dict给包装了起来，新增了一些默认参数比如msg和code，定义了不同的方法，等于是简化了"),t("code",[e._v("api")]),e._v("。但我们其实一直有个很大的弊端，往下看:")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://files.mdnice.com/user/11504/eac53bc5-e62a-4851-81ad-ed279235237f.png",alt:""}})]),e._v(" "),t("p",[e._v("我们有个model_to_list的方法，里面的操作呢，就是去遍历数组，再把sqlalchemy的对象转换为字典。也就是有2层for循环，第一层是数组的循环，第二层是字典的key-value。")]),e._v(" "),t("p",[e._v("第二层的话，由于一个对象一般不会有很多字段，有也不会超过100个那么多，所以还是可以接受的。但如果list有1000条数据，比如操作记录啊啥的分分钟过1000（不考虑分页的情况下），那这样序列化的速度就会"),t("code",[e._v("明显变慢")]),e._v("。")]),e._v(" "),t("p",[e._v("所以今天我们就顺势而为，解决这个问题。")]),e._v(" "),t("h3",{attrs:{id:"json-encoder"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#json-encoder"}},[e._v("#")]),e._v(" json_encoder")]),e._v(" "),t("p",[e._v("之所以我自己写一个"),t("code",[e._v("model_to_dict")]),e._v("的方法，是因为我对"),t("code",[e._v("时间格式")]),e._v("有着洁癖，我希望的时间格式是: "),t("code",[e._v("2022-04-06 12:11:11")]),e._v("，如果有"),t("code",[e._v("2022-04-06T12:11:11")]),e._v("，我都会觉得辣眼睛（焦躁）。")]),e._v(" "),t("p",[e._v("那有没有"),t("code",[e._v("更简单")]),e._v("的办法呢？肯定有的啦，fastapi作为一个新生代的框架，这点东西还是能想到的。")]),e._v(" "),t("p",[e._v("我们来看官网给的例子:")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://files.mdnice.com/user/11504/1acecb9f-87ed-4748-addc-3d987f57a9cb.png",alt:""}})]),e._v(" "),t("p",[t("code",[e._v("官网就是官网，还是一如既往的简洁(粗糙)。")])]),e._v(" "),t("p",[e._v("简单的说，就是引入"),t("code",[e._v("json_encoder")]),e._v("方法，接着调用它，传入你要序列化的数据（字典，pydantic的model，sqlalchemy的model都可以），最后就会如意如意按你心意进行序列化了。")]),e._v(" "),t("h3",{attrs:{id:"熟悉它的api"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#熟悉它的api"}},[e._v("#")]),e._v(" 熟悉它的api")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://files.mdnice.com/user/11504/eaacdfdc-7ee0-4934-aabe-7bc40914470e.png",alt:""}})]),e._v(" "),t("p",[t("code",[e._v("参数很多，但没啥描述！")])]),e._v(" "),t("p",[e._v("根据语义，我们可以推断出，obj就是要序列化的对象，include就是要包括的字段（不传就是所有咯），exclude是不包含的字段，记得我们前面的需求吗？我们需要排除"),t("code",[e._v("password")]),e._v("等字段。")]),e._v(" "),t("p",[e._v("custom_encoder这个参数就比较过分了，完美实现我们对时间格式的要求，它的作用是(认真听):")]),e._v(" "),t("p",[t("code",[e._v("接受一个字典，key呢，是对应的类型，value是一个方法，方法的参数是属性的value，返回值是你要变成的value")]),e._v("。")]),e._v(" "),t("p",[e._v("举个例子: 我们的object里面有个datetime类型，所以我们可以这么写:")]),e._v(" "),t("div",{staticClass:"language-python line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-python"}},[t("code",[e._v("jsonable_encoder"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("data"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" custom_encoder"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n            datetime"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("lambda")]),e._v(" x"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" x"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("strftime"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"%Y-%m-%d %H:%M:%S"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br")])]),t("h3",{attrs:{id:"开始改造"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#开始改造"}},[e._v("#")]),e._v(" 开始改造")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://files.mdnice.com/user/11504/202d31c6-a59b-49bb-9be6-2c184662ed89.png",alt:""}})]),e._v(" "),t("p",[e._v("我们定义一个encode_json的方法，传入exclude和custom_encoder，接着套到success里面，以往我们这样的api，就可以进行替换了.")]),e._v(" "),t("ul",[t("li",[e._v("替换前(真的**)")])]),e._v(" "),t("p",[t("img",{attrs:{src:"https://files.mdnice.com/user/11504/1bb99e9b-6cd5-419f-b162-ec098c8a9751.png",alt:""}})]),e._v(" "),t("ul",[t("li",[e._v("替换后")])]),e._v(" "),t("p",[t("img",{attrs:{src:"https://files.mdnice.com/user/11504/40ccb2cd-a02f-4e92-8c73-f8e65ab665d8.png",alt:""}})]),e._v(" "),t("p",[e._v("清爽一点点，还增加了排除的"),t("code",[e._v("字段")]),e._v("。")]),e._v(" "),t("h3",{attrs:{id:"看看效果"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#看看效果"}},[e._v("#")]),e._v(" 看看效果")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://files.mdnice.com/user/11504/92baba5f-2421-4d27-8e03-1eccc30b083e.png",alt:""}})]),e._v(" "),t("p",[e._v("密码无了，嘿嘿，搞定。")]),e._v(" "),t("h3",{attrs:{id:"bonus"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#bonus"}},[e._v("#")]),e._v(" Bonus")]),e._v(" "),t("p",[e._v("其实吧，这里面有坑，如果你跟着写下来的话会发现exclude不会真的生效，因为json_encoder的源码只有第一层是接受了exclude参数的，递归的部分是没有的。那么怎么解决呢？")]),e._v(" "),t("p",[t("code",[e._v("还是看看pity源代码吧~")])])])}),[],!1,null,null,null);t.default=_.exports}}]);