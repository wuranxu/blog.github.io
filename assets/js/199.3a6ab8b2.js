(window.webpackJsonp=window.webpackJsonp||[]).push([[199],{599:function(t,s,a){"use strict";a.r(s);var n=a(2),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("blockquote",[s("p",[t._v("大家好~我是"),s("code",[t._v("米洛")]),t._v("！"),s("br"),t._v("\n我正在从0到1打造一个开源的接口测试平台, 也在编写一套与之对应的"),s("code",[t._v("教程")]),t._v("，希望大家多多支持。"),s("br"),t._v("\n欢迎关注我的公众号"),s("code",[t._v("米洛的测开日记")]),t._v("，获取最新文章教程!")])]),t._v(" "),s("h3",{attrs:{id:"回顾"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#回顾"}},[t._v("#")]),t._v(" 回顾")]),t._v(" "),s("p",[t._v("上一节我们完善了"),s("code",[t._v("根据环境执行case")]),t._v("功能，也差不多是有了在线调试的功能。随着我们的系统功能陆续完善，那数据清理器(后置条件)这个我们一直"),s("code",[t._v("没解决")]),t._v("的一个点，就不得不搞定之了。")]),t._v(" "),s("p",[t._v("由于前置条件/后置条件差异很小，并且模式也都接近，所以为了避免重复开发，我决定改造Constructor类，将后置条件并入之。")]),t._v(" "),s("h3",{attrs:{id:"设计思路"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#设计思路"}},[t._v("#")]),t._v(" 设计思路")]),t._v(" "),s("p",[t._v("在此，我决定不玩非主流，恢复"),s("code",[t._v("前置/后置条件")]),t._v("的叫法，方便大家理解。但已经定义好的类: Constructor我也不改名了。")]),t._v(" "),s("p",[t._v("前置条件表如何支持后置条件: "),s("code",[t._v("加个标志位")])]),t._v(" "),s("p",[t._v("我们可以为constructor表定义一个"),s("code",[t._v("suffix")]),t._v("字段，这个字段是个bool值，默认为false。")]),t._v(" "),s("p",[t._v("这样原先有的数据，就都是false，也就代表都是前置条件（能不影响到之前case）。新加的条件，我们用suffix区分它是"),s("code",[t._v("前置")]),t._v("还是"),s("code",[t._v("后置")]),t._v("。")]),t._v(" "),s("p",[t._v("说到"),s("code",[t._v("数据库的变更")]),t._v("，sqlalchemy没有提供特别方便的方式。我一般是用datagrip去修改:")]),t._v(" "),s("ol",[s("li",[t._v("选择表，进入编辑表功能")])]),t._v(" "),s("p",[s("img",{attrs:{src:"https://static.pity.fun/picture/2021-12-19/1639883680787-image.png",alt:""}})]),t._v(" "),s("ol",{attrs:{start:"2"}},[s("li",[t._v("新增一个字段")])]),t._v(" "),s("p",[s("img",{attrs:{src:"https://static.pity.fun/picture/2021-12-19/1639883714653-image.png",alt:""}})]),t._v(" "),s("p",[t._v("点击+号，接着编辑字段信息。")]),t._v(" "),s("ol",{attrs:{start:"4"}},[s("li",[t._v("编辑字段信息并选择execute")])]),t._v(" "),s("p",[s("img",{attrs:{src:"https://static.pity.fun/picture/2021-12-19/1639883755875-image.png",alt:""}})]),t._v(" "),s("p",[t._v("其实下面已经给出了具体的sql，直接执行也一样。")]),t._v(" "),s("div",{staticClass:"language-sql line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("alter")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("table")]),t._v(" pity_constructor\n\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("add")]),t._v(" suffix "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("boolean")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("not")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br")])]),s("p",[t._v("其他的包括索引啥的，都是可以这样编辑的。（如果对建表，加字段等sql不太熟悉的，可以用用这个工具，pycharm就集成了datagrip）")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://static.pity.fun/picture/2021-12-19/1639883864983-image.png",alt:"知道数据库连接信息即可"}})]),t._v(" "),s("h3",{attrs:{id:"动手实战"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#动手实战"}},[t._v("#")]),t._v(" 动手实战")]),t._v(" "),s("p",[t._v("说完了核心思路，但其实修改过程中发现不少变化，可能还有一些"),s("code",[t._v("遗漏")]),t._v("。本次修改我可能只展示一部分，更多修改请参考git本次commit:")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://github.com/wuranxu/pity/commit/743afc1c88c6e32d194800a5ef6861ed1bdf488e",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/wuranxu/pity/commit/743afc1c88c6e32d194800a5ef6861ed1bdf488e"),s("OutboundLink")],1)]),t._v(" "),s("ul",[s("li",[t._v("修改model")])]),t._v(" "),s("div",{staticClass:"language-python line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" sqlalchemy "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Column"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" INT"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" String"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" BOOLEAN"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" UniqueConstraint"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" TEXT"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" select"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" desc\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" app"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("models"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("basic "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" PityBase\n\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Constructor")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("PityBase"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    __tablename__ "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'pity_constructor'")]),t._v("\n    __table_args__ "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n        UniqueConstraint"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'case_id'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'suffix'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'name'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'deleted_at'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("type")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Column"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("INT"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" default"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" comment"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"0: testcase 1: sql 2: redis 3: py脚本 4: 其它"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    name "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Column"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("String"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("64")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" comment"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"数据初始化描述"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    enable "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Column"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("BOOLEAN"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" default"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("True")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" nullable"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("False")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    constructor_json "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Column"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("TEXT"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" nullable"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("False")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    value "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Column"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("String"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("16")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" comment"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"返回值"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    case_id "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Column"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("INT"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" nullable"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("False")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" comment"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"所属用例id"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    public "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Column"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("BOOLEAN"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" default"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("False")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" comment"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"是否共享"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    index "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Column"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("INT"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" comment"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"前置条件顺序"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 2021-12-18 是否是后置条件")]),t._v("\n    suffix "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Column"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("BOOLEAN"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" default"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("False")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" comment"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"是否是后置条件，默认为否"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("__init__")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("type")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" enable"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" constructor_json"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" case_id"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" public"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" user"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" value"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" suffix"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("False")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("id")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("None")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("super")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("__init__"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("user"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("id")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        self"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("type")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("type")]),t._v("\n        self"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" name\n        self"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("enable "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" enable\n        self"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("constructor_json "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" constructor_json\n        self"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("case_id "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" case_id\n        self"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("public "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" public\n        self"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("value "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" value\n        self"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("suffix "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" suffix\n\n    "),s("span",{pre:!0,attrs:{class:"token decorator annotation punctuation"}},[t._v("@staticmethod")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("get_index")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("session"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" case_id"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" suffix"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("False")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        sql "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" select"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Constructor"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("where"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n            Constructor"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("deleted_at "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Constructor"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("case_id "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" case_id"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            Constructor"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("suffix "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" suffix"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("order_by"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("desc"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Constructor"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("index"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        data "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" session"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("execute"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("sql"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        query "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("scalars"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("first"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 如果没有查出来前/后置条件，那么给他0")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" query "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("is")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("None")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" query"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("index "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("__str__")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string-interpolation"}},[s("span",{pre:!0,attrs:{class:"token string"}},[t._v('f"[')]),s("span",{pre:!0,attrs:{class:"token interpolation"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'后置条件'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" self"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("suffix "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'前置条件'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v(": ")]),s("span",{pre:!0,attrs:{class:"token interpolation"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("self"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("](")]),s("span",{pre:!0,attrs:{class:"token interpolation"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("self"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("id")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('))"')])]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br"),s("span",{staticClass:"line-number"},[t._v("16")]),s("br"),s("span",{staticClass:"line-number"},[t._v("17")]),s("br"),s("span",{staticClass:"line-number"},[t._v("18")]),s("br"),s("span",{staticClass:"line-number"},[t._v("19")]),s("br"),s("span",{staticClass:"line-number"},[t._v("20")]),s("br"),s("span",{staticClass:"line-number"},[t._v("21")]),s("br"),s("span",{staticClass:"line-number"},[t._v("22")]),s("br"),s("span",{staticClass:"line-number"},[t._v("23")]),s("br"),s("span",{staticClass:"line-number"},[t._v("24")]),s("br"),s("span",{staticClass:"line-number"},[t._v("25")]),s("br"),s("span",{staticClass:"line-number"},[t._v("26")]),s("br"),s("span",{staticClass:"line-number"},[t._v("27")]),s("br"),s("span",{staticClass:"line-number"},[t._v("28")]),s("br"),s("span",{staticClass:"line-number"},[t._v("29")]),s("br"),s("span",{staticClass:"line-number"},[t._v("30")]),s("br"),s("span",{staticClass:"line-number"},[t._v("31")]),s("br"),s("span",{staticClass:"line-number"},[t._v("32")]),s("br"),s("span",{staticClass:"line-number"},[t._v("33")]),s("br"),s("span",{staticClass:"line-number"},[t._v("34")]),s("br"),s("span",{staticClass:"line-number"},[t._v("35")]),s("br"),s("span",{staticClass:"line-number"},[t._v("36")]),s("br"),s("span",{staticClass:"line-number"},[t._v("37")]),s("br"),s("span",{staticClass:"line-number"},[t._v("38")]),s("br"),s("span",{staticClass:"line-number"},[t._v("39")]),s("br"),s("span",{staticClass:"line-number"},[t._v("40")]),s("br"),s("span",{staticClass:"line-number"},[t._v("41")]),s("br"),s("span",{staticClass:"line-number"},[t._v("42")]),s("br"),s("span",{staticClass:"line-number"},[t._v("43")]),s("br"),s("span",{staticClass:"line-number"},[t._v("44")]),s("br"),s("span",{staticClass:"line-number"},[t._v("45")]),s("br"),s("span",{staticClass:"line-number"},[t._v("46")]),s("br"),s("span",{staticClass:"line-number"},[t._v("47")]),s("br"),s("span",{staticClass:"line-number"},[t._v("48")]),s("br")])]),s("p",[t._v("修改点在于:")]),t._v(" "),s("ol",[s("li",[t._v("唯一索引新增suffix字段")]),t._v(" "),s("li",[t._v("新增suffix字段")]),t._v(" "),s("li",[t._v("表继承自PityBase")]),t._v(" "),s("li",[t._v("get_index中对删除的判断改为deleted_at == 0而不是None")])]),t._v(" "),s("p",[t._v("这其中还引发了一个事情，"),s("strong",[t._v("数据库中deleted_at字段要从datetime类型改为bigint")]),t._v("，因为历史原因，我们的deleted_at都是datetime，现在我们要一并调整。")]),t._v(" "),s("p",[t._v("可回顾第66节: "),s("em",[t._v("测试平台系列(66) 数据驱动之基础Model")])]),t._v(" "),s("p",[s("a",{attrs:{href:"https://mp.weixin.qq.com/s?__biz=MzIyMjUwOTk5Mw==&mid=2247485632&idx=2&sn=8f3f4e1f8098c3718ce7d9c4783476bb&chksm=e82d2606df5aaf10fc1426430f2dcb301f6923264ed2d2836c6aa5ecd8e8882b098aa39c1840&token=1149953909&lang=zh_CN#rd",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://mp.weixin.qq.com/s?__biz=MzIyMjUwOTk5Mw==&mid=2247485632&idx=2&sn=8f3f4e1f8098c3718ce7d9c4783476bb&chksm=e82d2606df5aaf10fc1426430f2dcb301f6923264ed2d2836c6aa5ecd8e8882b098aa39c1840&token=1149953909&lang=zh_CN#rd"),s("OutboundLink")],1)]),t._v(" "),s("h3",{attrs:{id:"需要调整的地方"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#需要调整的地方"}},[t._v("#")]),t._v(" 需要调整的地方")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://static.pity.fun/picture/2021-12-19/1639884333174-image.png",alt:""}})]),t._v(" "),s("p",[t._v("可以看到引用的地方非常之多，大概就下面几个方向。")]),t._v(" "),s("ol",[s("li",[t._v("遇到Constructor.deleted_at == None的("),s("code",[t._v("判断条件是否被删除")]),t._v(")，要改为等于0")])]),t._v(" "),s("p",[t._v("对应功能: "),s("code",[t._v("获取前后置条件，删除前后置条件等")])]),t._v(" "),s("ol",{attrs:{start:"2"}},[s("li",[t._v("执行case的日志，要能够区分前后置条件")])]),t._v(" "),s("p",[t._v("对应功能: "),s("code",[t._v("用例执行前后置条件")])]),t._v(" "),s("ol",{attrs:{start:"3"}},[s("li",[t._v("接受ConstructorForm字段要加上suffix，并且必填")])]),t._v(" "),s("p",[t._v("对应功能: "),s("code",[t._v("新增/编辑前后置条件")])]),t._v(" "),s("ol",{attrs:{start:"4"}},[s("li",[t._v("查询前后置条件的时候，要带上suffix")])]),t._v(" "),s("p",[t._v("对应功能: "),s("code",[t._v("前后置条件的复制")])]),t._v(" "),s("p",[s("strong",[t._v("这一波改动挺大，也可能出现一些问题。如果有问题可以及时留言反馈。")])]),t._v(" "),s("h3",{attrs:{id:"前端改动"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#前端改动"}},[t._v("#")]),t._v(" 前端改动")]),t._v(" "),s("p",[t._v("前端改动相对较小，只是在切换tab的时候多了一个suffix字段的维护:")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://static.pity.fun/picture/2021-12-19/1639884886849-image.png",alt:""}})]),t._v(" "),s("p",[t._v("切换到后置条件，把suffix变为true，切换到前置条件则改为false。这样编辑前后置条件的时候，只需要读取那个suffix字段即可。")]),t._v(" "),s("p",[t._v("当然还有一点微调，这里由于篇幅问题就不展示了。参考commit:")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://github.com/wuranxu/pityWeb/commit/86af44531c500c7acb22f2fb7a386ab00598551c",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/wuranxu/pityWeb/commit/86af44531c500c7acb22f2fb7a386ab00598551c"),s("OutboundLink")],1)]),t._v(" "),s("h3",{attrs:{id:"看看最终的效果"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#看看最终的效果"}},[t._v("#")]),t._v(" 看看最终的效果")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://static.pity.fun/picture/2021-12-19/1639885327101-1639885298(1).png",alt:""}})])])}),[],!1,null,null,null);s.default=e.exports}}]);