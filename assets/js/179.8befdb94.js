(window.webpackJsonp=window.webpackJsonp||[]).push([[179],{581:function(s,t,a){"use strict";a.r(t);var n=a(2),e=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("blockquote",[t("p",[s._v("大家好~我是"),t("code",[s._v("米洛")]),s._v("！"),t("br"),s._v("\n我正在从0到1打造一个开源的接口测试平台, 也在编写一套与之对应的完整"),t("code",[s._v("教程")]),s._v("，希望大家多多支持。"),t("br"),s._v("\n欢迎关注我的公众号"),t("code",[s._v("米洛的测开日记")]),s._v("，获取最新文章教程!")])]),s._v(" "),t("h3",{attrs:{id:"回顾"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#回顾"}},[s._v("#")]),s._v(" 回顾")]),s._v(" "),t("p",[s._v("上一节我们编写了"),t("code",[s._v("测试计划")]),s._v("相关功能。由于我们的数据构造器(前置条件)还有一些不完善的，所以我们这段时间要开始完善redis相关内容。")]),s._v(" "),t("p",[s._v("如果把redis看做数据库的话，我们也是需要编写对应的"),t("code",[s._v("连接配置")]),s._v("页面的，编写完以后我们需要接入"),t("code",[s._v("前置条件")]),s._v("，也得能够在页面上在线执行redis命令。这些都会是接下来几天的任务。")]),s._v(" "),t("h3",{attrs:{id:"成果图"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#成果图"}},[s._v("#")]),s._v(" 成果图")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://static.pity.fun/picture/2021-11-21/1637488109204-image.png",alt:""}})]),s._v(" "),t("h3",{attrs:{id:"设计redis配置表"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#设计redis配置表"}},[s._v("#")]),s._v(" 设计Redis配置表")]),s._v(" "),t("p",[s._v("redis和mysql比较类似，有一些共通的部分:")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("host")])]),s._v(" "),t("li",[t("p",[s._v("port")])]),s._v(" "),t("li",[t("p",[s._v("username")])]),s._v(" "),t("li",[t("p",[s._v("password")])]),s._v(" "),t("li",[t("p",[s._v("database")]),s._v(" "),t("p",[t("strong",[s._v("在redis中是一片一片的db，一般是0-15。而Mysql则是一个具体的库。")])]),s._v(" "),t("p",[s._v("除此之外，二者区别很小。主要提现在:")])]),s._v(" "),t("li",[t("p",[s._v("redis分为集群和单例模式，集群是可以不输入用户密码的")])]),s._v(" "),t("li",[t("p",[s._v("一般redis的连接串会把host和port合到一起，便于我们进行集群管理")]),s._v(" "),t("p",[s._v("所以总结起来就是，我们基本可以照搬MySQL配置表。")])])]),s._v(" "),t("div",{staticClass:"language-python line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-python"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" sqlalchemy "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" Column"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" INT"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" String"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" Boolean"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" UniqueConstraint\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" app"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("models"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("basic "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" PityBase\n\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("PityRedis")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("PityBase"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    __tablename__ "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"pity_redis_info"')]),s._v("\n    __table_args__ "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n        UniqueConstraint"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'env'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'name'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'deleted_at'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n    env "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" Column"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("INT"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" nullable"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("False")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 对应环境id")]),s._v("\n    name "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" Column"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("String"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("24")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" nullable"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("False")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# redis描述名称")]),s._v("\n    addr "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" Column"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("String"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("128")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" nullable"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("False")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    username "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" Column"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("String"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("36")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" nullable"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("False")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    password "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" Column"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("String"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("64")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" nullable"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("False")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    db "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" Column"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("INT"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" nullable"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("False")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 是否是集群，默认为false，集群可不输入用户密码")]),s._v("\n    cluster "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" Column"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("Boolean"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" default"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("False")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" nullable"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("False")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("__init__")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("self"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" env"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" name"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" addr"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" username"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" password"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" db"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" cluster"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" user"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("super")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("__init__"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("user"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        self"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("env "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" env\n        self"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("name "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" name\n        self"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("addr "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" addr\n        self"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("password "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" password\n        self"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("username "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" username\n        self"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("db "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" db\n        self"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("cluster "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" cluster\n\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br"),t("span",{staticClass:"line-number"},[s._v("29")]),t("br"),t("span",{staticClass:"line-number"},[s._v("30")]),t("br")])]),t("p",[s._v("可以看到，他几乎和MySQL差不多。那我们来按照管理编写"),t("code",[s._v("增删改查")]),s._v("接口。")]),s._v(" "),t("h3",{attrs:{id:"编写dao层"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#编写dao层"}},[s._v("#")]),s._v(" 编写Dao层")]),s._v(" "),t("p",[s._v("其实按照"),t("strong",[s._v("惯例")]),s._v("，我估计又从之前的DbConfigDao.py复制出代码然后改一改了。")]),s._v(" "),t("p",[s._v("但这次我不打算这么做了，因为其实每次写的"),t("code",[s._v("增删改查")]),s._v("代码虽然不完全一样，但都很像啊！！！")]),s._v(" "),t("p",[s._v("所以如果能有个办法可以省略这些操作，那么一个后端接口就很快能够写出来了~")]),s._v(" "),t("h2",{attrs:{id:"对于我们这样简易的接口测试平台-是事半功倍的。"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#对于我们这样简易的接口测试平台-是事半功倍的。"}},[s._v("#")]),s._v(" 对于我们这样简易的接口测试平台，是事半功倍的。")]),s._v(" "),t("p",[s._v("其实思路来源于"),t("code",[s._v("Mybatis Plus")]),s._v("，这个框架的好处就是封装了selectList，selectById等常用api，导致哥们都不需要编写具体的select方法，直接传入"),t("code",[s._v("查询条件")]),s._v("就可以了。")]),s._v(" "),t("p",[s._v("update更是离谱，传入一个新对象即可。")]),s._v(" "),t("p",[s._v("所以可以看到具体的mapper都是继承BaseMapper，就可以完成对应的操作。")]),s._v(" "),t("p",[s._v("可能大家没有具体的概念，我先给大家展示下半成品:")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://static.pity.fun/picture/2021-11-13/1636800595105-image.png",alt:"可以看到类里面都没有任何方法"}})]),s._v(" "),t("h3",{attrs:{id:"使用方式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用方式"}},[s._v("#")]),s._v(" 使用方式")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://static.pity.fun/picture/2021-11-13/1636801017999-image.png",alt:""}})]),s._v(" "),t("p",[t("strong",[s._v("可以看到，需要精确查找就直接传入，需要模糊查询的则加上like。")])]),s._v(" "),t("p",[s._v("看起来是非常美好，有兴趣的朋友可以测试一下。")]),s._v(" "),t("p",[s._v("今天的内容到这就结束了，下一节我们"),t("code",[s._v("继续完善")]),s._v("这个Mapper基类中的方法，并实现一个完整的demo简化开发。")]),s._v(" "),t("p",[t("strong",[s._v("思路虽然是原创，但难免和其他人碰到一起，其实大家做的测试平台思路大体都是一致的，所以如果遇到高度相似的，真的还是纯属巧合。")])])])}),[],!1,null,null,null);t.default=e.exports}}]);