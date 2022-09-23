(window.webpackJsonp=window.webpackJsonp||[]).push([[147],{548:function(t,s,a){"use strict";a.r(s);var n=a(2),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"配置flask-sqlalchemy"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#配置flask-sqlalchemy"}},[t._v("#")]),t._v(" 配置flask-sqlalchemy")]),t._v(" "),s("p",[t._v("说到"),s("strong",[t._v("flask-sqlalchemy")]),t._v("，有些人可能不太清楚是什么东西。简单的说，他就是一个orm库，帮助咱们能够更好地跟"),s("strong",[t._v("db")]),t._v("打交道的。笔者有一篇"),s("a",{attrs:{href:"https://www.jianshu.com/p/73071abb607e",target:"_blank",rel:"noopener noreferrer"}},[t._v("文章"),s("OutboundLink")],1),t._v("有略微的介绍，可以速览一遍了解一下（其实主要是笔者才疏学浅，讲不出什么深奥的。")]),t._v(" "),s("p",[t._v("既然是登录，那么肯定需要有持久化的数据。那么我们肯定需要建立用户相关的表。")]),t._v(" "),s("h3",{attrs:{id:"前置准备"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#前置准备"}},[t._v("#")]),t._v(" 前置准备")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("安装MySQL")]),t._v(" "),s("p",[t._v("根据自己的系统(Windows/Mac/Linux)安装好对应的MySQL并设置好账号密码，这里就不教育大家怎么安装了。端口号用默认的3306即可，并且确保服务要启动成功哦！")])]),t._v(" "),s("li",[s("p",[t._v("安装mysql-connector-python(mysql官方驱动)")]),t._v(" "),s("p",[t._v("cmd窗口执行")])])]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("pip3 install mysql-connector-python\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("h3",{attrs:{id:"配置mysql连接信息"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#配置mysql连接信息"}},[t._v("#")]),t._v(" 配置MySQL连接信息")]),t._v(" "),s("ul",[s("li",[t._v("pity/config.py配置mysql连接信息")])]),t._v(" "),s("p",[s("img",{attrs:{src:"https://static.pity.fun/picture/2021-3-7/1615128242749-image.png",alt:"MySQL配置"}})]),t._v(" "),s("p",[s("em",[t._v("注意: 一定要确保MySQL的库存在哦, 没有的话可以用Navicat或Datagrip新建。")])]),t._v(" "),s("p",[t._v("可以看出以上包含了5个重点内容，mysql的地址，端口号，用户名，密码和库名。接下来的SQLALCHEMY_DATABASE_URI代表了sql的连接信息，"),s("strong",[t._v("flask_sqlalchemy")]),t._v("会自动根据这个变量去获取db连接等。其中"),s("code",[t._v("mysql+mysqlconnector")]),t._v("，代表的是试用mysql连接的方式，大家都知道Python连接mysql有很多库比如pymysql，mysqldb等。这里就是一个说明。")]),t._v(" "),s("p",[t._v("至于后面的警告大家可加可不加，如果被警告得太烦了可以这样解决。")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("SQLALCHEMY_DATABASE_URI = 'mysql+mysqlconnector://{}:{}@{}:{}/{}'.format(\n                                    MYSQL_USER, MYSQL_PWD, MYSQL_HOST, MYSQL_PORT, DBNAME)\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br")])]),s("ul",[s("li",[t._v("在"),s("code",[t._v("pity/app/models/__init__.py")]),t._v("初始化db")])]),t._v(" "),s("p",[t._v("代码很简单，就是将app赋给SQLAlchemy从而生成一个db对象。")]),t._v(" "),s("div",{staticClass:"language-Python line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" flask_sqlalchemy "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" SQLAlchemy\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" app "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" pity\n\ndb "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" SQLAlchemy"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("pity"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br")])]),s("h3",{attrs:{id:"配备用户类"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#配备用户类"}},[t._v("#")]),t._v(" 配备用户类")]),t._v(" "),s("ul",[s("li",[t._v("在models目录建立用户表")])]),t._v(" "),s("p",[t._v("首先咱们这个平台肯定不是那种不需要登录的，因为会做一小部分的"),s("strong",[t._v("权限控制")]),t._v("，但是肯定也不会很复杂化。所以我们可以先简略设计一下"),s("strong",[t._v("用户表")]),t._v("。")]),t._v(" "),s("p",[t._v("既然是Orm，那么咱们的"),s("strong",[t._v("User表")]),t._v("的体现即是"),s("strong",[t._v("Python")]),t._v("中的一个类。")]),t._v(" "),s("p",[t._v("因为目前，还不太了解用户表的具体需要字段。但是我们能大概设计一下这个表，首先需要的字段肯定有用户名，密码，用户id，邮箱，团队id，职位等。其他的信息比如enable(是否可用)，create_time(创建时间)等信息暂时先不考虑了。后续可以随意添加。")]),t._v(" "),s("p",[t._v("那么"),s("strong",[t._v("User表")]),t._v("我的大概设计如下:")]),t._v(" "),s("p",[t._v("大致讲一下吧，大概就创建了以上几个字段。unique是字段是否唯一(可重复)，primary key自然就是主键，db.String对应varchar，db.INT对应int，也就是说。现在我们要操作数据表，只需要对这个User类操作就行了，因为sqlalchemy会自动映射到对应库--对应表进行操作。")]),t._v(" "),s("div",{staticClass:"language-Python line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" app"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("models "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" db\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" datetime "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" datetime\n\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("User")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("db"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Model"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("id")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" db"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Column"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("db"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("INT"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" primary_key"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("True")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    username "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" db"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Column"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("db"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("String"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("16")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" unique"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("True")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" index"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("True")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    name "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" db"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Column"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("db"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("String"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("16")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" index"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("True")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    password "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" db"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Column"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("db"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("String"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("32")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" unique"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("False")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    email "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" db"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Column"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("db"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("String"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("64")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" unique"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("True")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" nullable"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("False")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    role "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" db"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Column"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("db"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("INT"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" default"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" comment"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"0: 普通用户 1: 组长 2: 超级管理员"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    created_at "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" db"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Column"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("db"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("DATETIME"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" nullable"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("False")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    updated_at "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" db"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Column"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("db"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("DATETIME"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" nullable"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("False")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    deleted_at "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" db"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Column"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("db"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("DATETIME"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    last_login_at "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" db"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Column"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("db"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("DATETIME"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("__init__")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" username"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" password"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" email"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        self"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("username "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" username\n        self"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("password "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" password\n        self"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("email "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" email\n        self"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" name\n        self"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("created_at "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" datetime"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("now"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        self"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("updated_at "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" datetime"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("now"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        self"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("role "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("__repr__")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'<User %r>'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),t._v(" self"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("username\n\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br"),s("span",{staticClass:"line-number"},[t._v("16")]),s("br"),s("span",{staticClass:"line-number"},[t._v("17")]),s("br"),s("span",{staticClass:"line-number"},[t._v("18")]),s("br"),s("span",{staticClass:"line-number"},[t._v("19")]),s("br"),s("span",{staticClass:"line-number"},[t._v("20")]),s("br"),s("span",{staticClass:"line-number"},[t._v("21")]),s("br"),s("span",{staticClass:"line-number"},[t._v("22")]),s("br"),s("span",{staticClass:"line-number"},[t._v("23")]),s("br"),s("span",{staticClass:"line-number"},[t._v("24")]),s("br"),s("span",{staticClass:"line-number"},[t._v("25")]),s("br"),s("span",{staticClass:"line-number"},[t._v("26")]),s("br"),s("span",{staticClass:"line-number"},[t._v("27")]),s("br"),s("span",{staticClass:"line-number"},[t._v("28")]),s("br")])]),s("ul",[s("li",[t._v("在引入models的地方初始化数据表")])]),t._v(" "),s("p",[t._v("我们在"),s("code",[t._v("pity/dao/__init__.py")]),t._v(" dao层初始化所有表，以后新增一个表都需要在这儿import一次")]),t._v(" "),s("div",{staticClass:"language-Python line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" app"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("models "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" db\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" app"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("models"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("user "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" User\n\ndb"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("create_all"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br")])]),s("ul",[s("li",[t._v("在run.py引入dao包使得建表语句db.create_all()生效")])]),t._v(" "),s("p",[s("img",{attrs:{src:"https://static.pity.fun/picture/2021-3-7/1615129480793-image.png",alt:""}})]),t._v(" "),s("p",[t._v("重启服务后可以看到出现了user表:")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://static.pity.fun/picture/2021-3-7/1615129558074-image.png",alt:""}})]),t._v(" "),s("h2",{attrs:{id:"广告时间"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#广告时间"}},[t._v("#")]),t._v(" 广告时间")]),t._v(" "),s("p",[t._v("后端代码地址: "),s("a",{attrs:{href:"https://github.com/wuranxu/pity",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/wuranxu/pity"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("前端代码地址: "),s("a",{attrs:{href:"https://github.com/wuranxu/pityWeb",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/wuranxu/pityWeb"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("欢迎关注公众号"),s("strong",[t._v("测试开发入坑")]),t._v("，还有加群一起讨论相关问题呀！如果群二维码过期了，可以加我个人微信: "),s("code",[t._v("wuranxu")]),t._v(" 我拉你进群~")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://static.pity.fun/picture/2021-3-10/1615391632083-image.png",alt:""}})]),t._v(" "),s("p",[s("img",{attrs:{src:"https://static.pity.fun/picture/2021-3-10/1615390951439-image.png",alt:""}})])])}),[],!1,null,null,null);s.default=e.exports}}]);