(window.webpackJsonp=window.webpackJsonp||[]).push([[136],{537:function(t,_,v){"use strict";v.r(_);var e=v(2),a=Object(e.a)({},(function(){var t=this,_=t._self._c;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("blockquote",[_("p",[t._v("大家好，我是米洛，一个"),_("code",[t._v("测试开发")]),t._v("博主，world很大， 你应该去看看！")])]),t._v(" "),_("p",[t._v("欢迎大家关注我的公众号: "),_("strong",[t._v("米洛的测开日记")]),t._v("。")]),t._v(" "),_("p",[t._v("这篇文章阅读需要一定的耐心，如果看的不爽可以"),_("code",[t._v("点个赞")]),t._v("提醒一下博主。")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://static.pity.fun/picture/2021-8-3/1628002485404-image.png",alt:""}})]),t._v(" "),_("h3",{attrs:{id:"回顾"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#回顾"}},[t._v("#")]),t._v(" 回顾")]),t._v(" "),_("p",[t._v("上篇已经找到了一个"),_("code",[t._v("可测")]),t._v("的项目，但是遇到了需要登录的问题。正常来说，我们如果写代码的话，肯定很方便，在setUp这类方法里"),_("code",[t._v("咔咔咔")]),t._v("登录一下，存储对应的JSESSIONID，然后测试函数就能够用JSESSIONID畅通无阻访问项目了。")]),t._v(" "),_("h3",{attrs:{id:"找个例子"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#找个例子"}},[t._v("#")]),t._v(" 找个例子")]),t._v(" "),_("p",[t._v("下面我们来看一个"),_("code",[t._v("简单")]),t._v("的例子:")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://static.pity.fun/picture/2021-8-3/1628001673787-image.png",alt:"由于这个项目很老了，很多图片过期了都"}})]),t._v(" "),_("p",[t._v("如图所示，我想测试一个"),_("code",[t._v("获取用户列表的接口")]),t._v("，对应这个页面。因为我们暂时没有整理出对应的接口文档，只能自己看代码或者"),_("code",[t._v("抓包")]),t._v("去了解这个请求。")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://static.pity.fun/picture/2021-8-3/1628001754056-image.png",alt:""}})]),t._v(" "),_("p",[t._v("好在这个请求比较简单，是个GET，并且接受一个"),_("code",[t._v("nickname")]),t._v("字段。根据"),_("code",[t._v("经验")]),t._v("，这个接口可以根据对应的用户名查询对应的用户信息。")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://static.pity.fun/picture/2021-8-3/1628001861004-image.png",alt:"可以看到这个接口是需要登录的"}})]),t._v(" "),_("h3",{attrs:{id:"平台化思路"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#平台化思路"}},[t._v("#")]),t._v(" 平台化思路")]),t._v(" "),_("p",[t._v("那么平台化的话，应该怎么做呢？我们刚才梳理了具体的过程。")]),t._v(" "),_("ol",[_("li",[t._v("设计用例")]),t._v(" "),_("li",[t._v("调用login接口，获取到凭据（token/cookie等）")]),t._v(" "),_("li",[t._v("根据凭据请求"),_("code",[t._v("获取用户列表接口")])]),t._v(" "),_("li",[t._v("根据对应的用例制造不同的请求参数（nickname）")]),t._v(" "),_("li",[t._v("根据用例编写对应的断言信息")])]),t._v(" "),_("p",[t._v("熟悉Python+excel的朋友，可能会在excel添加了好多条测试数据和期望结果了，其实"),_("code",[t._v("平台化")]),t._v("也是类似。")]),t._v(" "),_("p",[t._v("我们只需要关心一个用例的真正执行过程:")]),t._v(" "),_("ol",[_("li",[t._v("登录获取凭据")]),t._v(" "),_("li",[t._v("通过凭据请求接口")])]),t._v(" "),_("p",[t._v("明白这点的话，我们就开始改造我们的"),_("code",[t._v("Executor")]),t._v("类了。所以我们要做的就是先"),_("code",[t._v("执行登录用例")]),t._v("，再"),_("code",[t._v("执行测试用例")]),t._v("。换句话说，登录用例是该测试用例的"),_("code",[t._v("前置条件")]),t._v("(setUp/初始化数据操作)，我这里给他取了个名儿: "),_("code",[t._v("数据构造器")]),t._v("，因为我们常说的接口之间的依赖，常常是数据引起，如果登录后能拿到凭据，那么我们对登录的依赖就被解决了。")]),t._v(" "),_("p",[t._v("我们执行用例的时候，是这样的顺序，如果用例有"),_("code",[t._v("数据构造器")]),t._v("，那么我们先执行"),_("code",[t._v("数据构造器")]),t._v("方法，目的就是把"),_("code",[t._v("依赖数据")]),t._v("拿到。")]),t._v(" "),_("h3",{attrs:{id:"constructor表"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#constructor表"}},[t._v("#")]),t._v(" Constructor表")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://static.pity.fun/picture/2021-8-3/1628002646090-image.png",alt:"表设计"}})]),t._v(" "),_("p",[t._v("id,deleted_at,created_at,create_user,update_user这些字段都是老生常谈了，不赘述了。")]),t._v(" "),_("ul",[_("li",[_("p",[t._v("type")]),t._v(" "),_("p",[t._v("我们的数据可能来自一次http请求，redis操作，sql查询，其它测试用例等等。我暂时定了3个最常见的:")]),t._v(" "),_("h4",{attrs:{id:"_0-testcase-1-sql-2-redis"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_0-testcase-1-sql-2-redis"}},[t._v("#")]),t._v(" 0: testcase 1: sql 2: redis")]),t._v(" "),_("p",[_("code",[t._v("其他的我们后续遇到再补充，肯定会有的，比如py脚本等等")]),t._v("。")])]),t._v(" "),_("li",[_("p",[t._v("name：构造器的描述")])]),t._v(" "),_("li",[_("p",[t._v("enable: 是否开启")]),t._v(" "),_("p",[t._v("比如某天你暂时不需要进行这个操作了，你可以临时关闭，后续可以打开。")])]),t._v(" "),_("li",[_("p",[t._v("public: 是否公开，不公开就只能你自己舒服别人不能舒服")])]),t._v(" "),_("li",[_("p",[t._v("case_id: 这个构造器所属的case_id")])]),t._v(" "),_("li",[_("p",[t._v("value: 构造器的返回值")]),t._v(" "),_("p",[t._v("这个大家能理解吧，我构造了数据，是为了"),_("code",[t._v("让自己再取出来")]),t._v('。比如我set woody="帅哥"，后续我是要用这个'),_("code",[t._v("帅哥的")]),t._v("，那么此时的woody就是value了，或者叫return_value更方便理解。")])]),t._v(" "),_("li",[_("p",[t._v("constructor_json: 构造json")]),t._v(" "),_("p",[t._v("由于我们不同的数据，对应不同的数据格式。举个例子，如果我是个sql类型，我可能需要jdbcUrl（数据库连接地址），sql等关键信息，其实这种情况我们用"),_("code",[t._v("mongo")]),t._v("当数据库会更舒服。只不过为了降低系统复杂度，尽量少引入新的组件，能忍就忍了。")])])]),t._v(" "),_("h3",{attrs:{id:"定义造数器请求参数"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#定义造数器请求参数"}},[t._v("#")]),t._v(" 定义造数器请求参数")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://static.pity.fun/picture/2021-8-3/1628003228124-image.png",alt:"基本上没有什么大的区别"}})]),t._v(" "),_("h3",{attrs:{id:"编写新增数据构造器功能"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#编写新增数据构造器功能"}},[t._v("#")]),t._v(" 编写新增数据构造器功能")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://static.pity.fun/picture/2021-8-3/1628003268853-image.png",alt:"修改和删除的暂时还没完成"}})]),t._v(" "),_("h3",{attrs:{id:"页面操作"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#页面操作"}},[t._v("#")]),t._v(" 页面操作")]),t._v(" "),_("ol",[_("li",[t._v("为对应的用例添加构造器")])]),t._v(" "),_("p",[_("img",{attrs:{src:"https://static.pity.fun/picture/2021-8-3/1628003470563-image.png",alt:""}})]),t._v(" "),_("ol",{attrs:{start:"2"}},[_("li",[t._v("选择测试用例类型\n"),_("img",{attrs:{src:"https://static.pity.fun/picture/2021-8-3/1628003504608-image.png",alt:""}})])]),t._v(" "),_("p",[_("img",{attrs:{src:"https://static.pity.fun/picture/2021-8-3/1628003612754-image.png",alt:"提前准备好了一个正常登录的用例"}})]),t._v(" "),_("p",[t._v("最后的效果就是，"),_("code",[t._v("查询所有用户列表")]),t._v("用例拥有了一个"),_("code",[t._v("用户正常登录")]),t._v("的数据构造器。")]),t._v(" "),_("p",[t._v("这期的内容就到这里了，太多了我自己都消化不良。")]),t._v(" "),_("p",[t._v("在线演示地址: "),_("a",{attrs:{href:"http://47.112.32.195/",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://47.112.32.195/"),_("OutboundLink")],1)]),t._v(" "),_("p",[t._v("前端代码仓库: "),_("a",{attrs:{href:"https://github.com/wuranxu/pityWeb",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/wuranxu/pityWeb"),_("OutboundLink")],1)]),t._v(" "),_("p",[t._v("后端代码仓库: "),_("a",{attrs:{href:"https://github.com/wuranxu/pity",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/wuranxu/pity"),_("OutboundLink")],1)])])}),[],!1,null,null,null);_.default=a.exports}}]);