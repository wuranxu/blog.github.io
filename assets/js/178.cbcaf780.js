(window.webpackJsonp=window.webpackJsonp||[]).push([[178],{580:function(t,a,s){"use strict";s.r(a);var _=s(2),v=Object(_.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("blockquote",[a("p",[t._v("大家好~我是"),a("code",[t._v("米洛")]),t._v("！"),a("br"),t._v("\n我正在从0到1打造一个开源的接口测试平台, 也在编写一套与之对应的完整"),a("code",[t._v("教程")]),t._v("，希望大家多多支持。"),a("br"),t._v("\n欢迎关注我的公众号"),a("code",[t._v("米洛的测开日记")]),t._v("，获取最新文章教程!")])]),t._v(" "),a("h3",{attrs:{id:"回顾"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#回顾"}},[t._v("#")]),t._v(" 回顾")]),t._v(" "),a("p",[t._v("上一节我们粗略介绍了下怎么设计"),a("code",[t._v("前端")]),t._v("页面。时隔一日，博主已经把代码码好了。")]),t._v(" "),a("p",[t._v("不得不说，前端代码还是非常非常难写的，感觉同样是crud，却比后端"),a("code",[t._v("复杂许多")]),t._v("。这一节我们继续补充这块内容。")]),t._v(" "),a("p",[t._v("恭喜EDG获取S11冠军，"),a("code",[t._v("EDG")]),t._v("牛皮！蹭个热度~")]),t._v(" "),a("h3",{attrs:{id:"细节"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#细节"}},[t._v("#")]),t._v(" 细节")]),t._v(" "),a("p",[t._v("细节部分大家可以参看具体的"),a("code",[t._v("代码逻辑")]),t._v("，我这边稍微介绍下页面的调整。")]),t._v(" "),a("h3",{attrs:{id:"数据构造器-前置条件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数据构造器-前置条件"}},[t._v("#")]),t._v(" 数据构造器（前置条件）")]),t._v(" "),a("p",[t._v("这块采用了"),a("code",[t._v("Antd pro Components")]),t._v("，也就是专业级的Card组件。看起来确实比我自己写的好上100个档次:")]),t._v(" "),a("p",[t._v("前后对比:")]),t._v(" "),a("ul",[a("li",[t._v("改造前")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://static.pity.fun/picture/2021-11-7/1636295495969-image.png",alt:"说实话，非常地不专业"}})]),t._v(" "),a("p",[t._v("配色也不知道怎么配，我一直觉得前端很难，css是门学问。")]),t._v(" "),a("ul",[a("li",[t._v("改造后")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://static.pity.fun/picture/2021-11-7/1636295569329-image.png",alt:"改造后层次分明，风格也统一"}})]),t._v(" "),a("p",[t._v("来看看ProCard的代码:")]),t._v(" "),a("ul",[a("li",[t._v("安装ProCard")])]),t._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--save")]),t._v(" @ant-design/pro-card\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("ul",[a("li",[t._v("使用")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://static.pity.fun/picture/2021-11-7/1636295700274-image.png",alt:""}})]),t._v(" "),a("p",[t._v("可以看到api比较简单，avatar就是卡片的图标，title是标题，description是描述。很习惯的antd风格。")]),t._v(" "),a("h3",{attrs:{id:"用例列表部分"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#用例列表部分"}},[t._v("#")]),t._v(" 用例列表部分")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://static.pity.fun/picture/2021-11-7/1636295826113-image.png",alt:""}})]),t._v(" "),a("p",[t._v("我们都知道测试计划就是为了组装"),a("code",[t._v("测试用例")]),t._v("的，所以我们这边给出了一组数据，可以通过项目获取到该项目下的"),a("code",[t._v("测试用例")]),t._v("树。")]),t._v(" "),a("p",[t._v("选中以后，下方会出现一个可拖拽的case列表，如果对于顺序有严格要求的，可以拖动列表，改变case的执行顺序。")]),t._v(" "),a("p",[t._v("与之对应的，需要通过项目获取到case数据:")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://static.pity.fun/picture/2021-11-7/1636295961723-image.png",alt:"这个组件用的是TreeSelect"}})]),t._v(" "),a("p",[t._v("也可以通过目录来选择case。")]),t._v(" "),a("p",[t._v("后端改动如下:")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://static.pity.fun/picture/2021-11-7/1636296045538-image.png",alt:"改造了get_directory方法"}})]),t._v(" "),a("p",[t._v("因为我们是有通过项目获取case目录的方法的，现在缺的就是是否要继续获取目录下的case。")]),t._v(" "),a("p",[t._v("所以定义了一个case_node的参数（参数是一个方法，获取子节点的方法）。")]),t._v(" "),a("p",[t._v("如果有该方法，则调用之获取对应的节点。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://static.pity.fun/picture/2021-11-7/1636296148830-image.png",alt:""}})]),t._v(" "),a("p",[t._v("由于select数据比较奇怪，我们的数据库存的"),a("code",[t._v("case_list")]),t._v("又是id，所以我们想知道case名字并不是很容易。")]),t._v(" "),a("p",[t._v("于是这里带出项目树的同事，带出了case_id => case_name的映射关系: case_map。")]),t._v(" "),a("p",[t._v("这样做肯定会有问题，特别是数据量多的情况下。但一个project下的case有这么大规模的时候，也可以"),a("code",[t._v("重构")]),t._v("了。")]),t._v(" "),a("p",[t._v("最后，编写该接口:")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://static.pity.fun/picture/2021-11-7/1636296272109-image.png",alt:""}})]),t._v(" "),a("h3",{attrs:{id:"前端通知部分"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前端通知部分"}},[t._v("#")]),t._v(" 前端通知部分")]),t._v(" "),a("p",[t._v("通知部分很简单，也是常规表单，给它们加上图标会更友好:")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://static.pity.fun/picture/2021-11-7/1636296320981-image.png",alt:""}})]),t._v(" "),a("p",[a("img",{attrs:{src:"https://static.pity.fun/picture/2021-11-7/1636296342015-image.png",alt:""}})]),t._v(" "),a("p",[t._v("通知具体的逻辑还没有做，这涉及到人员的手机号，邮箱等。肯定是需要一个用户管理页面，用户也需要更新资料的页面。")]),t._v(" "),a("h3",{attrs:{id:"apscheduler的坑"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#apscheduler的坑"}},[t._v("#")]),t._v(" APScheduler的坑")]),t._v(" "),a("p",[t._v("不得不说，这个库还真的是有一些问题。虽然看起来是比较美好，但现实给人当头一棒。")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("踩坑")]),t._v(" "),a("p",[t._v("当编辑测试计划的时候，使用scheduler.modify_job，就算你改变了trigger，也不会使cron表达式更新。")])])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://static.pity.fun/picture/2021-11-7/1636296490485-image.png",alt:"这边需要先编辑，再暂停，再恢复即可生效"}})]),t._v(" "),a("p",[t._v("最后来张稳定运行测试计划的图:")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://static.pity.fun/picture/2021-11-7/1636296534033-image.png",alt:"1分钟一次，非常稳定，数据也跑了很多了"}})]),t._v(" "),a("p",[t._v("最新的代码，我已经部署了。")]),t._v(" "),a("p",[a("a",{attrs:{href:"http://test.pity.fun",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://test.pity.fun"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("欢迎大家提各种建议和意见。")])])}),[],!1,null,null,null);a.default=v.exports}}]);