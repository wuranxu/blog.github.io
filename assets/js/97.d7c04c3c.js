(window.webpackJsonp=window.webpackJsonp||[]).push([[97],{499:function(t,s,a){"use strict";a.r(s);var n=a(2),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("blockquote",[s("p",[t._v("大家好~我是"),s("code",[t._v("米洛")]),t._v("！"),s("br"),t._v("\n我正在从0到1打造一个开源的接口测试平台, 也在编写一套与之对应的"),s("code",[t._v("教程")]),t._v("，希望大家多多支持。"),s("br"),t._v("\n欢迎关注我的公众号"),s("code",[t._v("米洛的测开日记")]),t._v("，获取最新文章教程!")])]),t._v(" "),s("h3",{attrs:{id:"回顾"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#回顾"}},[t._v("#")]),t._v(" 回顾")]),t._v(" "),s("p",[t._v("上一节我们梳理了代理的难题，这一节就让我们来解决"),s("code",[t._v("证书下载")]),t._v("问题。其实可能这个功能不是很紧急，但起码目前pity要想做一个完整版的演示功能，这个功能是必不可少的。")]),t._v(" "),s("h3",{attrs:{id:"找规律"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#找规律"}},[t._v("#")]),t._v(" 找规律")]),t._v(" "),s("p",[t._v("我们需要先找到各个证书的下载地址规律，从而根据"),s("code",[t._v("规律")]),t._v("拼凑出新的url。先挂上代理，然后看看对应的mitm.it：")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://static.pity.fun/picture/20220623215627.png",alt:""}})]),t._v(" "),s("p",[t._v("注意这个后缀，分别是p12,pem和cer。接着我们来看看F12，对应的链接:")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://static.pity.fun/picture/20220623215715.png",alt:""}})]),t._v(" "),s("p",[t._v("其实前面都是固定的，也就是:")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("http://mitm.it/cert/\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("根据pem，p12等所有区分，所以我们写定对应的规律即可。话不多说，开始编码:")]),t._v(" "),s("h3",{attrs:{id:"设置枚举类"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#设置枚举类"}},[t._v("#")]),t._v(" 设置枚举类")]),t._v(" "),s("p",[t._v("新建app/enums/CertEnum.py文件")]),t._v(" "),s("div",{staticClass:"language-python line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" enum "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" IntEnum\n\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("CertType")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("IntEnum"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    windows "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n    linux "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n    macos "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("\n    ios "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v("\n    android "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("get_suffix")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" self "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" CertType"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("windows"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"p12"')]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" self "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("CertType"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("linux"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" CertType"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("macos"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" CertType"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ios"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"pem"')]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" self "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" CertType"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("android"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"cer"')]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("raise")]),t._v(" Exception"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"unsupported cert type"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br"),s("span",{staticClass:"line-number"},[t._v("16")]),s("br"),s("span",{staticClass:"line-number"},[t._v("17")]),s("br"),s("span",{staticClass:"line-number"},[t._v("18")]),s("br"),s("span",{staticClass:"line-number"},[t._v("19")]),s("br")])]),s("p",[t._v("除了定义windows这些枚举值以外，我们还需要把他们和pem/p12/cer对应起来，所以我们需要写一个get_url的方法，给他们自动"),s("code",[t._v("归类")]),t._v("。")]),t._v(" "),s("h3",{attrs:{id:"编写下载证书接口"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#编写下载证书接口"}},[t._v("#")]),t._v(" 编写下载证书接口")]),t._v(" "),s("p",[t._v("修改app/routers/request/http.py，我们加入以下代码。")]),t._v(" "),s("div",{staticClass:"language-python line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token decorator annotation punctuation"}},[t._v("@router"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("get")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/cert"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("http_request")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("cert"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" CertType"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("try")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        suffix "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" cert"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("get_suffix"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        client "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" AsyncRequest"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("CERT_URL "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" suffix"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        content "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" client"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("download"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        shuffle "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("list")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("range")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("9")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        random"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("shuffle"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("shuffle"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        filename "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string-interpolation"}},[s("span",{pre:!0,attrs:{class:"token string"}},[t._v('f"')]),s("span",{pre:!0,attrs:{class:"token interpolation"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("join"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("map")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("lambda")]),t._v(" x"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("str")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" shuffle"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("mitmproxy.")]),s("span",{pre:!0,attrs:{class:"token interpolation"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("suffix"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"')])]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("with")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("open")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("filename"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'wb'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" f"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            f"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("write"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("content"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" PityResponse"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("file")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("filename"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string-interpolation"}},[s("span",{pre:!0,attrs:{class:"token string"}},[t._v('f"mitmproxy.')]),s("span",{pre:!0,attrs:{class:"token interpolation"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("suffix"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("except")]),t._v(" Exception "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" e"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" PityResponse"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("failed"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br")])]),s("p",[t._v("首先我们先获取cert枚举，然后获取到对应的"),s("code",[t._v("后缀")]),t._v("，接着我们本地下载这个文件，随机生成文件名，最后写入并返回response。")]),t._v(" "),s("p",[t._v("整个过程很简单，这里就不多介绍了。下面我们来看看前端部分。")]),t._v(" "),s("h3",{attrs:{id:"编写前端"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#编写前端"}},[t._v("#")]),t._v(" 编写前端")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://static.pity.fun/picture/20220623220440.png",alt:""}})]),t._v(" "),s("p",[t._v("前端我们需要加入一个Dropdown(下拉菜单)，这样下拉能展示所有"),s("code",[t._v("类型")]),t._v("的证书，接着我们编写menu:")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://static.pity.fun/picture/20220623220528.png",alt:""}})]),t._v(" "),s("p",[t._v("其实也就是5个链接，点击分别进入5个不同的url下载证书，我们来看看效果:")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://static.pity.fun/picture/%E5%8A%A87.gif",alt:""}})]),t._v(" "),s("p",[t._v("证书我们是下载好了，接着我们拿到mac试试！~")]),t._v(" "),s("h3",{attrs:{id:"测试mac"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#测试mac"}},[t._v("#")]),t._v(" 测试mac")]),t._v(" "),s("p",[t._v("老规矩，我们先下载mac用的证书，接着信任之。")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://static.pity.fun/picture/20220623234514.png",alt:""}})]),t._v(" "),s("p",[t._v("接着我们配置好http/https的代理，然后开启录制过程了~")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://static.pity.fun/picture/20220623234607.png",alt:""}})]),t._v(" "),s("p",[t._v("这里其实不是本地哈，截图有点误差，没有显示url。")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://static.pity.fun/picture/20220623234705.png",alt:""}})]),t._v(" "),s("p",[t._v("后续我又测试了"),s("code",[t._v("安卓")]),t._v("，(IOS很遗憾没搞定，我太菜了。。。）遗憾的是部分app并不能被抓到"),s("code",[t._v("请求")]),t._v("。")]),t._v(" "),s("p",[t._v("上次我们那个录制的问题，是因为我们的"),s("code",[t._v("url")]),t._v("里面带有regex也就是具体的正则:")]),t._v(" "),s("p",[s("strong",[t._v("start?regex=api.juejin.cn")])]),t._v(" "),s("p",[t._v("所以也被误伤了，录制了下来，虽然挺不应该的。不过我们加一个，不录制包含pity.fun的url即可。")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://static.pity.fun/picture/20220624003747.png",alt:""}})]),t._v(" "),s("p",[t._v("这样基本上就能解决录制的一大部分问题了，还有个"),s("code",[t._v("多设备")]),t._v("录制的问题，我们暂时先不解决，因为真的有点麻烦了。")]),t._v(" "),s("p",[s("code",[t._v("大家有兴趣的可以进入pity.fun下载证书，安装后开启pity.fun,端口7778的代理，尝试录制用例啦~")])])])}),[],!1,null,null,null);s.default=e.exports}}]);