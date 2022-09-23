(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{452:function(t,s,a){"use strict";a.r(s);var n=a(2),r=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"刷题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#刷题"}},[t._v("#")]),t._v(" 刷题")]),t._v(" "),s("p",[t._v("关于刷题的重要程度，我想大家都是明白的。不管大大小小的公司，都或多或少有这样的"),s("strong",[t._v("考核要求")]),t._v("。大家也跟着饭佬了解过相应的情况，如果有一定的兴趣和基础，就别犹豫，开始慢慢刷起来。")]),t._v(" "),s("p",[t._v("先说明这是一个不会经常更新的系列，因为我今天纯粹是因为比较闲的星号疼。")]),t._v(" "),s("h3",{attrs:{id:"今日打卡20210412"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#今日打卡20210412"}},[t._v("#")]),t._v(" 今日打卡20210412")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://static.pity.fun/picture/2021-4-12/1618240613946-image.png",alt:""}})]),t._v(" "),s("p",[s("img",{attrs:{src:"https://static.pity.fun/picture/2021-4-12/1618240631208-image.png",alt:""}})]),t._v(" "),s("p",[t._v('题意大家看一眼基本上就都知道了，大意是说这些数组有很多个数字，你把这些数字组成最大的数，注意，是以每个数字为单位，所以对于"205"这种数字你不能把它变为"520"。')]),t._v(" "),s("h3",{attrs:{id:"想法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#想法"}},[t._v("#")]),t._v(" 想法")]),t._v(" "),s("p",[t._v("我一开始是"),s("strong",[t._v("没看答案")]),t._v("的，想法也就是"),s("strong",[t._v("排序")]),t._v("嘛，社会很单纯，复杂的是leetcode.")]),t._v(" "),s("p",[t._v("排序了之后来一发"),s("code",[t._v('"".join()')]),t._v("不是美滋滋吗？")]),t._v(" "),s("p",[t._v("于是我开始写排序的算法，首先想到的是a和b用zip一起遍历，于是我写了这样的代码:")]),t._v(" "),s("blockquote",[s("p",[t._v("错误示范")])]),t._v(" "),s("p",[s("img",{attrs:{src:"https://static.pity.fun/picture/2021-4-12/1618240941454-image.png",alt:""}})]),t._v(" "),s("p",[t._v("当然首先要先把数字都转为"),s("strong",[t._v("字符串")]),t._v("，然后编写"),s("strong",[t._v("比较方法")]),t._v('。这边想的是用zip，如果前面的数字大的话，直接return 1 也就是a > b。如果比完了，比如"35"和"35"，他们在第一和第二个数字都没有分出高下，那么随便返回一个即可。')]),t._v(" "),s("p",[t._v('如果b的数字更长，比如"355"和"3552"，那么我就用'),s("code",[t._v("2")]),t._v("和"),s("code",[t._v("5")]),t._v("进行对比，看起来想法没问题，提交的时候就"),s("strong",[t._v("报错")]),t._v("了。")]),t._v(" "),s("p",[t._v("当我纠结犹豫的时候，我想到，我何必去"),s("strong",[t._v("人肉比较")]),t._v("这2个数字的大小呢？对于2个数字而言，他们只有"),s("strong",[t._v("ab")]),t._v("和"),s("strong",[t._v("ba")]),t._v("的组合，那么我比较"),s("strong",[t._v("ab")]),t._v("和"),s("strong",[t._v("ba")]),t._v("不就好了？")]),t._v(" "),s("p",[t._v("于是我又写出了这样的代码:")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://static.pity.fun/picture/2021-4-12/1618241232293-image.png",alt:""}})]),t._v(" "),s("p",[t._v("但是这儿遇到一个特别的用例:")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://static.pity.fun/picture/2021-4-12/1618241260628-image.png",alt:""}})]),t._v(" "),s("p",[t._v('这可让人发愁了！其实不难，只要你排好序后，判断第一个数字是不是"0"，如果是的话直接return "0"就可以了，就可以绕过这样的用例了。')]),t._v(" "),s("h3",{attrs:{id:"最后的代码"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#最后的代码"}},[t._v("#")]),t._v(" 最后的代码")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://static.pity.fun/picture/2021-4-12/1618241337123-image.png",alt:""}})]),t._v(" "),s("p",[t._v("当然这边我因为是小->大的顺序排列，所以我用了[::-1]，还是有优化空间的。")]),t._v(" "),s("p",[t._v("最后，做完以后去官方看有没有更优解，发现官方就是这个解法，好了不说了，我要去"),s("strong",[t._v("通宵自律")]),t._v("了！")]),t._v(" "),s("div",{staticClass:"language-Python line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Solution")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("largestNumber")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" nums"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" List"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("str")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        compare "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("lambda")]),t._v(" x"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" y"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("y"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("x"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("y"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        nums "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("sorted")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("str")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" x "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" nums"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" key"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("cmp_to_key"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("compare"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"0"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("len")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("nums"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("and")]),t._v(" nums"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"0"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("join"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("nums"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br")])])])}),[],!1,null,null,null);s.default=r.exports}}]);