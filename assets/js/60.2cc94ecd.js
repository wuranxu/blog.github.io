(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{458:function(s,t,a){"use strict";a.r(t);var n=a(2),r=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("blockquote",[t("p",[s._v("大家好~我是"),t("code",[s._v("米洛")]),s._v("！"),t("br"),s._v("\n我正在从0到1打造一个开源的接口测试平台, 也在编写一套与之对应的"),t("code",[s._v("教程")]),s._v("，希望大家多多支持。"),t("br"),s._v("\n欢迎关注我的公众号"),t("code",[s._v("米洛的测开日记")]),s._v("，获取最新文章教程!")])]),s._v(" "),t("h3",{attrs:{id:"回顾"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#回顾"}},[s._v("#")]),s._v(" 回顾")]),s._v(" "),t("p",[s._v("上一节我们完成了"),t("code",[s._v("用例统计")]),s._v("相关内容，随着功能点的渐渐完善。我们也得更注重一下"),t("code",[s._v("用户体验")]),s._v("，今天我们就来讲下如何完成全局顶部进度条功能。")]),s._v(" "),t("h3",{attrs:{id:"顶部进度条"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#顶部进度条"}},[s._v("#")]),s._v(" 顶部进度条")]),s._v(" "),t("p",[s._v("经常逛github的朋友，应该都看到过这样的"),t("code",[s._v("进度条")]),s._v("，我们来看看gif回忆下:")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://static.pity.fun/picture/2022-1-31/1643603250239-33.gif",alt:""}})]),s._v(" "),t("p",[s._v("注意到顶部的"),t("code",[s._v("蓝色进度条")]),s._v("了吗？这个就是我们今天要搞定的部分。")]),s._v(" "),t("p",[t("strong",[s._v("虽然Ant Design Pro已经有了全局的loading，但是其实我个人是觉得那个效果太"),t("code",[s._v("粗鲁")]),s._v("了，顶部进度条相对来说会温和一点。")])]),s._v(" "),t("h3",{attrs:{id:"组件选型"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#组件选型"}},[s._v("#")]),s._v(" 组件选型")]),s._v(" "),t("p",[s._v("其实在antd官网有个"),t("code",[s._v("精选组件")]),s._v("的页面，大家有类似需求都可以去那边看看有没有合适的，毕竟人官网都推荐的，那肯定不会差到哪去。")]),s._v(" "),t("p",[s._v("我们在推荐组件里面找到这样一个组件: nprogress")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://static.pity.fun/picture/2022-1-31/1643603447718-image.png",alt:""}})]),s._v(" "),t("p",[s._v("既然只有一个，那就它了。（毕竟也好像没得选了）")]),s._v(" "),t("h3",{attrs:{id:"研究下api"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#研究下api"}},[s._v("#")]),s._v(" 研究下api")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://static.pity.fun/picture/2022-1-31/1643604112286-image.png",alt:""}})]),s._v(" "),t("p",[s._v("api很简单:")]),s._v(" "),t("p",[s._v("import后start，等页面加载完毕了调用done方法即可。")]),s._v(" "),t("h3",{attrs:{id:"改造basiclayout"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#改造basiclayout"}},[s._v("#")]),s._v(" 改造BasicLayout")]),s._v(" "),t("p",[s._v("因为我们整个页面虽然看起来是"),t("code",[s._v("动态")]),s._v("的，但其实是在不断更换BasicLayout的chidren，而登录页面虽然是UserLayout，但好像也没啥好loading的，所以我们只需要改造BasicLayout这个基本组件即可。")]),s._v(" "),t("p",[s._v("思路也很简单，设定一个href变量，判断当前的路由与href是否相等，如果不相等则"),t("code",[s._v("说明url在变化，也就是页面在切换")]),s._v("，这样的话就调用滚动条的start和done方法。")]),s._v(" "),t("p",[s._v("那什么时候调用done呢？")]),s._v(" "),t("p",[t("strong",[s._v("我们知道用dva的connect连接起来的组件，天然就带有dispatch方法。")])]),s._v(" "),t("p",[s._v("而我们loading也是自带的组件，在loading变量里面有个global变量，如果为true代表页面整体还未"),t("code",[s._v("加载完成")]),s._v("。")]),s._v(" "),t("p",[s._v("所以简单点说的话，我们通过设置一个变量href检测是否有页面更新操作，有的话立马调用start方法，接着等global为false，则调用done方法。")]),s._v(" "),t("h3",{attrs:{id:"开始改造"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#开始改造"}},[s._v("#")]),s._v(" 开始改造")]),s._v(" "),t("p",[s._v("如果没有安装的话，可以先安装一下nprogress:")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" nprogress "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--save")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("ol",[t("li",[s._v("在src/layout/BasicLayout.jsx引入Nprogress")])]),s._v(" "),t("div",{staticClass:"language-jsx line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-jsx"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" NProgress "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"nprogress"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'nprogress/nprogress.css'")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("引入核心方法和"),t("code",[s._v("样式")]),s._v("。")]),s._v(" "),t("ol",{attrs:{start:"2"}},[t("li",[s._v("配置loading标志")])]),s._v(" "),t("div",{staticClass:"language-jsx line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-jsx"}},[t("code",[s._v("NProgress"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("configure")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("showSpinner")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("这一步的目的是为了在进度条最右侧展示loading标志，更明显一点，不加这步也没问题。")]),s._v(" "),t("ol",{attrs:{start:"3"}},[t("li",[s._v("在connect处带入loading")])]),s._v(" "),t("div",{staticClass:"language-jsx line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-jsx"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("default")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("connect")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token parameter"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("global"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" settings"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" loading"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("collapsed")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" global"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("collapsed"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  settings"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("ld")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" loading"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("BasicLayout"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("p",[s._v("注意，我这里用ld变量替代了loading，因为发现变量名叫loading的话可能和umi默认的值产生冲突（umi也有全局loading判断），所以我换成ld了之后正常了。")]),s._v(" "),t("ol",{attrs:{start:"4"}},[t("li",[s._v("方法体里面加入如下代码")])]),s._v(" "),t("div",{staticClass:"language-jsx line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-jsx"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 设置当前路由的值，默认为空字符串")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 为空字符串的话，肯定和url不一致，所以第一次肯定会生效，后续就是修改生效")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("currentHref"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" setCurrentHref"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("useState")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("''")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 从props获取到loading->ld")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("ld"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" props"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 获取当前路由")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("href"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" window"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("location"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("currentHref "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!==")]),s._v(" href"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 加载进度条")]),s._v("\n  NProgress"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("start")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 当global为false，说明加载完毕，直接done")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("ld"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("global"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    NProgress"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("done")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 更新当前路径")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("setCurrentHref")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("href"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br")])]),t("p",[s._v("我们来看下效果，主要也就是看"),t("code",[s._v("切换菜单")]),s._v("和"),t("code",[s._v("刷新页面")]),s._v("的时候，进度条是否正常:")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://static.pity.fun/picture/2022-1-31/1643616583941-4.gif",alt:""}})]),s._v(" "),t("p",[s._v("大致上没啥出入，作为一个要求不是很高的"),t("code",[s._v('"前端"')]),s._v("，做到这个效果已经可以了。")]),s._v(" "),t("p",[s._v("想起之前是每个请求前start，请求结束执行done，对比起来确实也方便多了。")]),s._v(" "),t("p",[s._v("今天的内容就分享到这里了，"),t("code",[s._v("感谢")]),s._v("大家的收看。")])])}),[],!1,null,null,null);t.default=r.exports}}]);