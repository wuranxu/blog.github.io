(window.webpackJsonp=window.webpackJsonp||[]).push([[206],{607:function(t,s,a){"use strict";a.r(s);var n=a(2),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("blockquote",[s("p",[t._v("大家好，我是米洛，求三连！关注"),s("code",[t._v("米洛的测开日记")]),t._v("，每天解锁一个小知识！")])]),t._v(" "),s("h3",{attrs:{id:"mdnice"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mdnice"}},[t._v("#")]),t._v(" mdnice")]),t._v(" "),s("p",[t._v("官网: "),s("a",{attrs:{href:"https://mdnice.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://mdnice.com/"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("mdnice是一款非常好看的"),s("code",[t._v("Markdown编辑器")]),t._v("，它为大家提供了很漂亮显示效果。但是非常遗憾的是，对于typora用户，或者习惯本地编写.md文件的朋友们来说，这个web版的编辑器，始终好像"),s("code",[t._v("缺了点")]),t._v("什么。")]),t._v(" "),s("p",[t._v("回首望去，这"),s("code",[t._v("半年的时间")]),t._v("，本卷魔已经肝了很多文章了，用一个汽车品牌形容我就是"),s("code",[t._v("日产")]),t._v("！")]),t._v(" "),s("p",[t._v("所以无敌卷魔也积累了许多文章，但自己的文章都放到别人那里，始终是不太放心，如果能定期"),s("code",[t._v("同步到本地")]),t._v("，那将是极好的。")]),t._v(" "),s("h3",{attrs:{id:"那么该怎么做呢"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#那么该怎么做呢"}},[t._v("#")]),t._v(" 那么该怎么做呢？")]),t._v(" "),s("p",[t._v("其实mdnice一眼看上去，是可以"),s("code",[t._v("看到")]),t._v("文章列表和文章内容的。")]),t._v(" "),s("p",[t._v("首先我们得先拿到文章列表，再拿到"),s("code",[t._v("每一篇文章")]),t._v("里面的内容，根据文章标题+文本内容，就可以写入到我们本地了。")]),t._v(" "),s("p",[t._v("先来看看mdnice的关键接口:")]),t._v(" "),s("h2",{attrs:{id:"文章列表"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#文章列表"}},[t._v("#")]),t._v(" 文章列表")]),t._v(" "),s("p",[t._v("打开"),s("code",[t._v("F12")]),t._v("，鼠标在左侧文章滚动几下，可以看到F12里面请求文章列表的接口。")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://static.pity.fun/picture/2021-8-23/1629725340020-image.png",alt:"一目了然"}})]),t._v(" "),s("p",[t._v("可以看到他们的url是"),s("code",[t._v("https://api.mdnice.com/articles?currentPage=2&pageSize=20")]),t._v(", 敏锐的我们可以知道，后面的"),s("code",[t._v("currentPage")]),t._v("和"),s("code",[t._v("pageSize")]),t._v("分别是一页的数量和当前的页数。")]),t._v(" "),s("p",[t._v("仔细检查接口返回，发现并没有total这样的字段，所以我们请求的时候，一次性拉个500，1000条的，"),s("code",[t._v("基本上")]),t._v("就能把文章拉完。")]),t._v(" "),s("h2",{attrs:{id:"获取文本内容"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#获取文本内容"}},[t._v("#")]),t._v(" 获取文本内容")]),t._v(" "),s("p",[t._v("因为文章列表接口里面没有带上文本内容信息，所以我们继续"),s("code",[t._v("暗中观察")]),t._v("。")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://static.pity.fun/picture/2021-8-23/1629725545526-image.png",alt:"当我们切换文章时，会调用具体的文本接口"}})]),t._v(" "),s("p",[s("img",{attrs:{src:"https://static.pity.fun/picture/2021-8-23/1629725599168-image.png",alt:"后面的一串是文章的id"}})]),t._v(" "),s("h2",{attrs:{id:"绕过登录部分"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#绕过登录部分"}},[t._v("#")]),t._v(" 绕过登录部分")]),t._v(" "),s("p",[t._v("由于每个人文章都不一样，所以他的"),s("code",[t._v("获取文章列表")]),t._v("接口必须是要"),s("code",[t._v("登录")]),t._v("的。")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://static.pity.fun/picture/2021-8-23/1629725656035-image.png",alt:"根据我们的直觉，在他请求的headers里面发现了Auth相关的信息"}})]),t._v(" "),s("p",[s("img",{attrs:{src:"https://static.pity.fun/picture/2021-8-23/1629725687037-image.png",alt:"拿到postman进行测试，测试成功"}})]),t._v(" "),s("p",[t._v("但是我们要做免登陆还算"),s("code",[t._v("麻烦")]),t._v("，因为他是微信扫码登录，没有提供直接的"),s("code",[t._v("登录接口")]),t._v("，所以我们的脚本还得用户输入一下"),s("code",[t._v("authorization")]),t._v("。")]),t._v(" "),s("h3",{attrs:{id:"话不投机-干就完事"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#话不投机-干就完事"}},[t._v("#")]),t._v(" 话不投机，干就完事")]),t._v(" "),s("ul",[s("li",[s("ol",[s("li",[t._v("初始化Markdown类")])]),t._v(" "),s("p",[t._v("初始化一个markdown类，把用户要保存的目录和认证信息传进来。")])])]),t._v(" "),s("p",[s("img",{attrs:{src:"https://static.pity.fun/picture/2021-8-23/1629725798133-image.png",alt:"并且存放2个关键接口"}})]),t._v(" "),s("ul",[s("li",[s("ol",{attrs:{start:"2"}},[s("li",[t._v("编写获取文章列表方法")])])])]),t._v(" "),s("p",[s("img",{attrs:{src:"https://static.pity.fun/picture/2021-8-23/1629725844984-image.png",alt:"通过aiohttp来执行操作"}})]),t._v(" "),s("p",[t._v("我们用aiohttp加快读取速度，如果不看async with，他和requests.get"),s("code",[t._v("没啥区别")]),t._v("，大家不要想的太难了。")]),t._v(" "),s("ul",[s("li",[s("ol",{attrs:{start:"3"}},[s("li",[t._v("编写写入文本内容的方法")])])])]),t._v(" "),s("p",[s("img",{attrs:{src:"https://static.pity.fun/picture/2021-8-23/1629725930849-image.png",alt:""}})]),t._v(" "),s("p",[t._v("利用os.path.join拼接目录，给文件加上"),s("code",[t._v("md")]),t._v("后缀。")]),t._v(" "),s("ul",[s("li",[s("ol",{attrs:{start:"4"}},[s("li",[t._v("编写获取文本内容并写入的方法")])])])]),t._v(" "),s("p",[s("img",{attrs:{src:"https://static.pity.fun/picture/2021-8-23/1629725908094-image.png",alt:""}})]),t._v(" "),s("p",[t._v("挨个儿获取文本内容，并写入到文件里面去。整个过程"),s("code",[t._v("一气呵成")]),t._v("，轻松写意。")]),t._v(" "),s("p",[s("code",[t._v("这边文本列表的每一条数据，文章名称是title，outid则用来查询文本具体内容。")])]),t._v(" "),s("ul",[s("li",[s("ol",{attrs:{start:"5"}},[s("li",[t._v("编写主方法")])])])]),t._v(" "),s("p",[s("img",{attrs:{src:"https://static.pity.fun/picture/2021-8-23/1629726010953-image.png",alt:"建立N个协程，大家一起齐心协力"}})]),t._v(" "),s("p",[t._v("因为获取文件列表的数据在data字段里面，所以这边定义了data变量。")]),t._v(" "),s("ul",[s("li",[s("ol",{attrs:{start:"6"}},[s("li",[t._v("编写获取参数的方法")])])])]),t._v(" "),s("p",[s("img",{attrs:{src:"https://static.pity.fun/picture/2021-8-23/1629726146552-image.png",alt:"最上面哪一行不加的话会报event loop的错"}})]),t._v(" "),s("p",[t._v("获取输入的文件目录+auth信息，组成最强"),s("code",[t._v("战斗机")]),t._v("！")]),t._v(" "),s("h3",{attrs:{id:"看看时间和效果"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#看看时间和效果"}},[t._v("#")]),t._v(" 看看时间和效果")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://static.pity.fun/picture/2021-8-23/1629726325418-%E5%8A%A8%E7%94%BB.gif",alt:"刷新一下有点慢，老爷机见谅一下"}})]),t._v(" "),s("p",[s("img",{attrs:{src:"https://static.pity.fun/picture/2021-8-23/1629726378053-image.png",alt:"可以看到文本内容齐全，一共拿到了100多文件"}})]),t._v(" "),s("p",[s("img",{attrs:{src:"https://static.pity.fun/picture/2021-8-23/1629726429918-image.png",alt:""}})]),t._v(" "),s("p",[t._v("帅就完事儿了~")]),t._v(" "),s("h3",{attrs:{id:"脚本给有需要的人"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#脚本给有需要的人"}},[t._v("#")]),t._v(" 脚本给有需要的人")]),t._v(" "),s("p",[t._v("记得安装"),s("code",[t._v("aiohttp")]),t._v("和"),s("code",[t._v("aiofiles")])]),t._v(" "),s("div",{staticClass:"language-Python line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" asyncio\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" os\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" sys\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" time\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" aiofiles\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" aiohttp\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" requests\n\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Markdown")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("object")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    article_list_url "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://api.mdnice.com/articles?currentPage=1&pageSize=1000"')]),t._v("\n    article_detail "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://api.mdnice.com/articles/{}"')]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("__init__")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" authorization"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" directory"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        self"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("directory "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" directory\n        self"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("headers "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Authorization"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" authorization"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("write_file")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" filename"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" content"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        filepath "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" os"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("path"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("join"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("directory"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string-interpolation"}},[s("span",{pre:!0,attrs:{class:"token string"}},[t._v('f"')]),s("span",{pre:!0,attrs:{class:"token interpolation"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("filename"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('.md"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("with")]),t._v(" aiofiles"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("open")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("filepath"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'w'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" encoding"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'utf-8'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" f"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" f"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("write"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("content"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("get_articles")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("try")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("with")]),t._v(" aiohttp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ClientSession"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("headers"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("self"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("headers"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" session"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("with")]),t._v(" session"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("get"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("article_list_url"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" headers"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("self"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("headers"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" response"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n                    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" response"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("json"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("encoding"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'utf-8'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("except")]),t._v(" Exception "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" e"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string-interpolation"}},[s("span",{pre:!0,attrs:{class:"token string"}},[t._v('f"获取用户文章列表失败"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("raise")]),t._v(" e\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("get_article_content")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" title"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" article_id"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        url "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" self"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("article_detail"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("format")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("article_id"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("try")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("with")]),t._v(" aiohttp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ClientSession"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" session"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("with")]),t._v(" session"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("get"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("url"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" headers"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("self"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("headers"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" response"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n                    data "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" response"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("json"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("encoding"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'utf-8'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n                    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" self"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("write_file"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("title"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("replace"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("get"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"data"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("get"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"markdown"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("except")]),t._v(" Exception "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" e"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string-interpolation"}},[s("span",{pre:!0,attrs:{class:"token string"}},[t._v('f"写入文章: ')]),s("span",{pre:!0,attrs:{class:"token interpolation"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("title"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v(" 失败, error: ")]),s("span",{pre:!0,attrs:{class:"token interpolation"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("e"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("auth"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" directory_path"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    before "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" time"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("perf_counter"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    m "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Markdown"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("auth"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" directory_path"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    articles "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" m"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("get_articles"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    data "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" articles"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("get"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"data"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" asyncio"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("gather"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("m"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("get_article_content"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("get"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"title"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" x"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("get"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"outId"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" x "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("time"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("perf_counter"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" before"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" __name__ "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"__main__"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    asyncio"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("set_event_loop_policy"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("asyncio"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("WindowsSelectorEventLoopPolicy"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    directory "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("input")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"请输入要写入的目录, 不输入则为当前目录:"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    directory_path "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" directory "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" directory "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"./"')]),t._v("\n    auth "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("input")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"请输入mdnice官网headers中的Authorization: \\n"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    asyncio"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("run"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("main"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("auth"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" directory_path"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br"),s("span",{staticClass:"line-number"},[t._v("16")]),s("br"),s("span",{staticClass:"line-number"},[t._v("17")]),s("br"),s("span",{staticClass:"line-number"},[t._v("18")]),s("br"),s("span",{staticClass:"line-number"},[t._v("19")]),s("br"),s("span",{staticClass:"line-number"},[t._v("20")]),s("br"),s("span",{staticClass:"line-number"},[t._v("21")]),s("br"),s("span",{staticClass:"line-number"},[t._v("22")]),s("br"),s("span",{staticClass:"line-number"},[t._v("23")]),s("br"),s("span",{staticClass:"line-number"},[t._v("24")]),s("br"),s("span",{staticClass:"line-number"},[t._v("25")]),s("br"),s("span",{staticClass:"line-number"},[t._v("26")]),s("br"),s("span",{staticClass:"line-number"},[t._v("27")]),s("br"),s("span",{staticClass:"line-number"},[t._v("28")]),s("br"),s("span",{staticClass:"line-number"},[t._v("29")]),s("br"),s("span",{staticClass:"line-number"},[t._v("30")]),s("br"),s("span",{staticClass:"line-number"},[t._v("31")]),s("br"),s("span",{staticClass:"line-number"},[t._v("32")]),s("br"),s("span",{staticClass:"line-number"},[t._v("33")]),s("br"),s("span",{staticClass:"line-number"},[t._v("34")]),s("br"),s("span",{staticClass:"line-number"},[t._v("35")]),s("br"),s("span",{staticClass:"line-number"},[t._v("36")]),s("br"),s("span",{staticClass:"line-number"},[t._v("37")]),s("br"),s("span",{staticClass:"line-number"},[t._v("38")]),s("br"),s("span",{staticClass:"line-number"},[t._v("39")]),s("br"),s("span",{staticClass:"line-number"},[t._v("40")]),s("br"),s("span",{staticClass:"line-number"},[t._v("41")]),s("br"),s("span",{staticClass:"line-number"},[t._v("42")]),s("br"),s("span",{staticClass:"line-number"},[t._v("43")]),s("br"),s("span",{staticClass:"line-number"},[t._v("44")]),s("br"),s("span",{staticClass:"line-number"},[t._v("45")]),s("br"),s("span",{staticClass:"line-number"},[t._v("46")]),s("br"),s("span",{staticClass:"line-number"},[t._v("47")]),s("br"),s("span",{staticClass:"line-number"},[t._v("48")]),s("br"),s("span",{staticClass:"line-number"},[t._v("49")]),s("br"),s("span",{staticClass:"line-number"},[t._v("50")]),s("br"),s("span",{staticClass:"line-number"},[t._v("51")]),s("br"),s("span",{staticClass:"line-number"},[t._v("52")]),s("br"),s("span",{staticClass:"line-number"},[t._v("53")]),s("br"),s("span",{staticClass:"line-number"},[t._v("54")]),s("br"),s("span",{staticClass:"line-number"},[t._v("55")]),s("br"),s("span",{staticClass:"line-number"},[t._v("56")]),s("br"),s("span",{staticClass:"line-number"},[t._v("57")]),s("br"),s("span",{staticClass:"line-number"},[t._v("58")]),s("br")])])])}),[],!1,null,null,null);s.default=e.exports}}]);