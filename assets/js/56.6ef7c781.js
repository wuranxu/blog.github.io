(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{457:function(t,s,a){"use strict";a.r(s);var n=a(2),r=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("blockquote",[s("p",[t._v("大家好~我是"),s("code",[t._v("米洛")]),t._v("！"),s("br"),t._v("\n我正在从0到1打造一个开源的接口测试平台, 也在编写一套与之对应的"),s("code",[t._v("教程")]),t._v("，希望大家多多支持。"),s("br"),t._v("\n欢迎关注我的公众号"),s("code",[t._v("米洛的测开日记")]),t._v("，获取最新文章教程!")])]),t._v(" "),s("h3",{attrs:{id:"回顾"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#回顾"}},[t._v("#")]),t._v(" 回顾")]),t._v(" "),s("p",[t._v("上一节，咱们编写了"),s("code",[t._v("系统设置")]),t._v("页面的相关功能，这一节呢，我们来优化一下用例目录和用例页面的显示。")]),t._v(" "),s("p",[t._v("我们来研究下怎么实现一个"),s("code",[t._v("分屏功能")]),t._v("。")]),t._v(" "),s("h3",{attrs:{id:"什么是分屏"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#什么是分屏"}},[t._v("#")]),t._v(" 什么是分屏")]),t._v(" "),s("p",[t._v("我们现在的"),s("code",[t._v("用例列表页")]),t._v("就不支持分屏，只因左右侧"),s("code",[t._v("卡片")]),t._v("的宽度都是相对固定的，也就是不能左右拖拽放大/缩小的。")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://static.pity.fun/picture/2022-1-23/1642912473432-image.png",alt:""}})]),t._v(" "),s("p",[t._v("如图所示，假设现在我的目录名字很长，那可能"),s("code",[t._v("显示效果")]),t._v("就会很差。（因为左边宽度不够用呀）")]),t._v(" "),s("p",[t._v("再来看看分屏了的组件，我们用一个gif来展示:")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://static.pity.fun/picture/2022-1-23/1642913857667-gif3.gif",alt:""}})]),t._v(" "),s("h3",{attrs:{id:"组件调研"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#组件调研"}},[t._v("#")]),t._v(" 组件调研")]),t._v(" "),s("p",[t._v("起初踩了不少坑，也不知道该怎么在"),s("code",[t._v("github")]),t._v("搜索对应的组件，当然，要自己写是不可能的（毕竟不会）。")]),t._v(" "),s("p",[t._v("后来在ant.design官网看到了一些推荐的组件:")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://static.pity.fun/picture/2022-1-23/1642913948880-image.png",alt:""}})]),t._v(" "),s("p",[s("strong",[t._v("这就是生态的力量吗！")])]),t._v(" "),s("p",[t._v("接着我们从里面找到了不起眼的分屏组件:")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://static.pity.fun/picture/2022-1-23/1642913980675-image.png",alt:""}})]),t._v(" "),s("h3",{attrs:{id:"看看官网的demo"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#看看官网的demo"}},[t._v("#")]),t._v(" 看看官网的demo")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://static.pity.fun/picture/2022-1-23/1642914016463-image.png",alt:""}})]),t._v(" "),s("p",[t._v("官网的demo给的真的是，相当的"),s("code",[t._v("粗糙")]),t._v("，连import都没有写。这不禁让我想起某个star第一的Java操作excel的库，连maven/gradle依赖都没有给出来。")]),t._v(" "),s("p",[t._v("简单讲下他的api:")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("split")]),t._v(" "),s("p",[t._v("分割的模式，有vertical和horizontal，即垂直和水平，即左右分屏和上下分屏，我们这里需要采用vertical。")])]),t._v(" "),s("li",[s("p",[t._v("minSize")]),t._v(" "),s("p",[t._v("最小尺寸，一般以左侧的div为主。")])]),t._v(" "),s("li",[s("p",[t._v("defaultSize")]),t._v(" "),s("p",[t._v("默认尺寸")])]),t._v(" "),s("li",[s("p",[t._v("maxSize")]),t._v(" "),s("p",[t._v("最大尺寸，也就是左边div可以拖到的最大宽度。")])])]),t._v(" "),s("h3",{attrs:{id:"注意事项"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#注意事项"}},[t._v("#")]),t._v(" 注意事项")]),t._v(" "),s("p",[t._v("在图中，可以看到SplitPane包裹的2个div进行了分屏操作，那我们要对"),s("code",[t._v("antd")]),t._v("的Col进行同样的操作可行吗？")]),t._v(" "),s("p",[t._v("博主亲自试了一下，不可以，这样会导致"),s("code",[t._v("页面错乱")]),t._v("。所以我们还是按照他的意思，使用div标签。")]),t._v(" "),s("h3",{attrs:{id:"运用到pity中"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#运用到pity中"}},[t._v("#")]),t._v(" 运用到pity中")]),t._v(" "),s("ol",[s("li",[t._v("安装依赖")])]),t._v(" "),s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--save")]),t._v(" react-split-pane\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("我们主要是想让case和目录进行分离，所以我们找到目录那块jsx: src/pages/ApiTest/TestCaseDirectory.jsx调整以下内容:")]),t._v(" "),s("ol",{attrs:{start:"2"}},[s("li",[t._v("新增引用")])]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("import SplitPane from 'react-split-pane';\n\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br")])]),s("ol",{attrs:{start:"3"}},[s("li",[t._v("修改case和用例视图")])]),t._v(" "),s("p",[s("img",{attrs:{src:"https://static.pity.fun/picture/2022-1-23/1642916657637-image.png",alt:""}})]),t._v(" "),s("p",[t._v("找到此处的Row，并在下面加入SplitPane组件，把2个Col的组件改为"),s("code",[t._v("div")]),t._v("。")]),t._v(" "),s("p",[t._v("我们看下效果:")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://static.pity.fun/picture/2022-1-23/1642916738716-image.png",alt:""}})]),t._v(" "),s("p",[t._v("可以看到样式变了，但是实际上并未生效。")]),t._v(" "),s("h3",{attrs:{id:"排查问题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#排查问题"}},[t._v("#")]),t._v(" 排查问题")]),t._v(" "),s("p",[t._v("所以这就是我说官网的demo不是太好，因为我们还需要额外写一些css样式。")]),t._v(" "),s("ul",[s("li",[t._v("编写src/pages/ApiTest/TestCaseDirectory.less文件(没有则新建)")])]),t._v(" "),s("div",{staticClass:"language-css line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".Resizer")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("background")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" #000"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("opacity")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 0.2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("z-index")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("-moz-box-sizing")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" border-box"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("-webkit-box-sizing")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" border-box"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("box-sizing")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" border-box"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("-moz-background-clip")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" padding"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("-webkit-background-clip")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" padding"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("background-clip")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" padding-box"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".Resizer:hover")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("-webkit-transition")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" all 2s ease"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("transition")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" all 2s ease"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".Resizer.horizontal")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("height")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 11px"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("margin")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" -5px 0"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("border-top")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 5px solid "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("rgba")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("255"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 255"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 255"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 0"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("border-bottom")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 5px solid "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("rgba")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("255"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 255"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 255"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 0"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("cursor")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" row-resize"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 100%"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".Resizer.horizontal:hover")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("border-top")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 5px solid "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("rgba")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("0"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 0"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 0"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 0.5"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("border-bottom")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 5px solid "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("rgba")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("0"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 0"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 0"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 0.5"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".Resizer.vertical")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 11px"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("margin")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 0 -5px"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("border-left")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 5px solid "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("rgba")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("255"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 255"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 255"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 0"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("border-right")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 5px solid "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("rgba")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("255"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 255"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 255"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 0"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("cursor")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" col-resize"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".Resizer.vertical:hover")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("border-left")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 5px solid "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("rgba")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("0"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 0"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 0"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 0.5"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("border-right")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 5px solid "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("rgba")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("0"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 0"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 0"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 0.5"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".Resizer.disabled")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("cursor")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" not-allowed"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".Resizer.disabled:hover")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("border-color")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" transparent"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br"),s("span",{staticClass:"line-number"},[t._v("16")]),s("br"),s("span",{staticClass:"line-number"},[t._v("17")]),s("br"),s("span",{staticClass:"line-number"},[t._v("18")]),s("br"),s("span",{staticClass:"line-number"},[t._v("19")]),s("br"),s("span",{staticClass:"line-number"},[t._v("20")]),s("br"),s("span",{staticClass:"line-number"},[t._v("21")]),s("br"),s("span",{staticClass:"line-number"},[t._v("22")]),s("br"),s("span",{staticClass:"line-number"},[t._v("23")]),s("br"),s("span",{staticClass:"line-number"},[t._v("24")]),s("br"),s("span",{staticClass:"line-number"},[t._v("25")]),s("br"),s("span",{staticClass:"line-number"},[t._v("26")]),s("br"),s("span",{staticClass:"line-number"},[t._v("27")]),s("br"),s("span",{staticClass:"line-number"},[t._v("28")]),s("br"),s("span",{staticClass:"line-number"},[t._v("29")]),s("br"),s("span",{staticClass:"line-number"},[t._v("30")]),s("br"),s("span",{staticClass:"line-number"},[t._v("31")]),s("br"),s("span",{staticClass:"line-number"},[t._v("32")]),s("br"),s("span",{staticClass:"line-number"},[t._v("33")]),s("br"),s("span",{staticClass:"line-number"},[t._v("34")]),s("br"),s("span",{staticClass:"line-number"},[t._v("35")]),s("br"),s("span",{staticClass:"line-number"},[t._v("36")]),s("br"),s("span",{staticClass:"line-number"},[t._v("37")]),s("br"),s("span",{staticClass:"line-number"},[t._v("38")]),s("br"),s("span",{staticClass:"line-number"},[t._v("39")]),s("br"),s("span",{staticClass:"line-number"},[t._v("40")]),s("br"),s("span",{staticClass:"line-number"},[t._v("41")]),s("br"),s("span",{staticClass:"line-number"},[t._v("42")]),s("br"),s("span",{staticClass:"line-number"},[t._v("43")]),s("br"),s("span",{staticClass:"line-number"},[t._v("44")]),s("br"),s("span",{staticClass:"line-number"},[t._v("45")]),s("br"),s("span",{staticClass:"line-number"},[t._v("46")]),s("br"),s("span",{staticClass:"line-number"},[t._v("47")]),s("br"),s("span",{staticClass:"line-number"},[t._v("48")]),s("br"),s("span",{staticClass:"line-number"},[t._v("49")]),s("br"),s("span",{staticClass:"line-number"},[t._v("50")]),s("br")])]),s("ul",[s("li",[t._v("引入")])]),t._v(" "),s("p",[s("img",{attrs:{src:"https://static.pity.fun/picture/2022-1-23/1642916850097-image.png",alt:""}})]),t._v(" "),s("h3",{attrs:{id:"最终效果"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#最终效果"}},[t._v("#")]),t._v(" 最终效果")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://static.pity.fun/picture/2022-1-23/1642918494628-gif3.gif",alt:""}})]),t._v(" "),s("p",[t._v("有了这个功能之后，我们就可以轻松编写"),s("code",[t._v("类似")]),t._v("的组件了，这样就可以轻松分割其他页面的div啦。")])])}),[],!1,null,null,null);s.default=r.exports}}]);