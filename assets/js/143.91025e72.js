(window.webpackJsonp=window.webpackJsonp||[]).push([[143],{544:function(t,_,v){"use strict";v.r(_);var e=v(2),a=Object(e.a)({},(function(){var t=this,_=t._self._c;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("blockquote",[_("p",[t._v("大家好，我是米洛，求三连！求关注"),_("code",[t._v("米洛的测开日记")]),t._v("!")])]),t._v(" "),_("p",[t._v("如果阅读完毕后想和作者有更多交流，可以点击"),_("code",[t._v("阅读原文")]),t._v("找到底部评论区，给作者留言啦！")]),t._v(" "),_("p",[t._v("项目地址: "),_("a",{attrs:{href:"https://pity.readthedocs.io/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://pity.readthedocs.io/"),_("OutboundLink")],1)]),t._v(" "),_("h3",{attrs:{id:"回顾"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#回顾"}},[t._v("#")]),t._v(" 回顾")]),t._v(" "),_("p",[t._v("其实我不用回顾啦，我上篇讲的是怎么生成"),_("code",[t._v("构建数据")]),t._v("，毕竟我是连续写作😁。")]),t._v(" "),_("h3",{attrs:{id:"编写获取-查询报告接口"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#编写获取-查询报告接口"}},[t._v("#")]),t._v(" 编写获取/查询报告接口")]),t._v(" "),_("p",[t._v("报告的数据是有了，我们思考一下我们需要怎么去查找到我们想要的那次"),_("code",[t._v("构建记录")]),t._v("。")]),t._v(" "),_("ul",[_("li",[_("p",[t._v("时间维度")]),t._v(" "),_("p",[t._v("比如我想查找这2天的。")])]),t._v(" "),_("li",[_("p",[t._v("执行人维度")]),t._v(" "),_("p",[t._v("我想查刚才团队里面xxx执行的过的数据。")])]),t._v(" "),_("li",[_("p",[t._v("测试计划级别（这里还没支持呀，因为还只是手动）")]),t._v(" "),_("p",[t._v("我想知道我这个测试计划跑的咋样了，我只"),_("code",[t._v("盯着他")]),t._v("看。")])]),t._v(" "),_("li",[_("p",[t._v("等等等等，有需要可以继续加")])])]),t._v(" "),_("p",[_("img",{attrs:{src:"https://static.pity.fun/picture/2021-8-15/1629013107911-image.png",alt:"我这里支持了2个维度，时间和执行人"}})]),t._v(" "),_("p",[t._v("这异步写起来也慢慢开始"),_("code",[t._v("顺手")]),t._v("了，不过因为sqlalchemy还不太支持这块。我查询了很久也没找到好的"),_("code",[t._v("分页查询")]),t._v("方式。只能用了土方法了:")]),t._v(" "),_("ol",[_("li",[t._v("根据条件查询数量")]),t._v(" "),_("li",[t._v("根据条件分页查询")])]),t._v(" "),_("p",[t._v("返回2个参数，分别是具体的数据和总的查询数量，这个构建记录比较大，做分页会比较合适。而且时间参数是"),_("code",[t._v("必传")]),t._v("，这里如果做好一点可以显示时间范围，比如只能查询"),_("code",[t._v("1个月")]),t._v("之内的数据，不然数据多了会"),_("code",[t._v("忒慢")]),t._v("。")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://static.pity.fun/picture/2021-8-15/1629013291467-image.png",alt:"接着就是编写report/list接口了"}})]),t._v(" "),_("h3",{attrs:{id:"聊聊前端"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#聊聊前端"}},[t._v("#")]),t._v(" 聊聊前端")]),t._v(" "),_("p",[t._v("其实前端就是个很简单的"),_("code",[t._v("查询操作")]),t._v("，经过这么多年我实践我是发现，前端难在设计和样式上，逻辑处理并不复杂。所以我还是觉得大家能用这种"),_("code",[t._v("现成")]),t._v("的UI组件就用，不然写原生的"),_("code",[t._v("又不好看又麻烦")]),t._v("。")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://static.pity.fun/picture/2021-8-15/1629013429006-image.png",alt:"报告列表页面整体长这样"}})]),t._v(" "),_("p",[_("img",{attrs:{src:"https://static.pity.fun/picture/2021-8-15/1629013493769-image.png",alt:"具体数据页面"}})]),t._v(" "),_("p",[t._v("构建id左边的✔和✖是类似jenkins的"),_("code",[t._v("成功")]),t._v("还是"),_("code",[t._v("失败")]),t._v("的状态。")]),t._v(" "),_("h2",{attrs:{id:"然后上方就是报告查询维度了-并不算难。"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#然后上方就是报告查询维度了-并不算难。"}},[t._v("#")]),t._v(" 然后上方就是"),_("code",[t._v("报告查询维度")]),t._v("了，并不算难。")]),t._v(" "),_("p",[t._v("今天的内容就到这里吧，大家可能也发现了。我们这只有汇总的数据，博主并没有存储"),_("code",[t._v("每条用例")]),t._v("的执行结果，那这算什么报告？")]),t._v(" "),_("p",[t._v("没事儿，下一节我们就来讲"),_("code",[t._v("如何写入/获取case执行报告")]),t._v("。")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://static.pity.fun/picture/2021-8-15/1629013883177-image.png",alt:"图中就是最终报告效果图了"}})])])}),[],!1,null,null,null);_.default=a.exports}}]);