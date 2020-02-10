(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{223:function(t,s,e){"use strict";e.r(s);var r=e(0),v=Object(r.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"安全"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安全"}},[t._v("#")]),t._v(" 安全")]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),e("p",[t._v("常见的安全问题及解决方法？")])]),t._v(" "),e("h2",{attrs:{id:"csrf"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#csrf"}},[t._v("#")]),t._v(" CSRF")]),t._v(" "),e("p",[t._v("CSRF(Cross-site Request forgery) 跨站请求伪造是挟制用户在当前已登录的 Web 应用程序上执行非本意的操作的攻击方法，因为简单的身份验证只能保证请求发自某个用户的浏览器，却不能保证请求本身是用户自愿发出的")]),t._v(" "),e("p",[t._v("解决方法：")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("检查 Referer 字段")]),t._v(" "),e("ul",[e("li",[t._v("HTTP 头中的 Referer 字段用以标明请求来源于哪个地址，在处理敏感数据请求时，通常来说，Referer 字段应和请求的地址位于同一域名下")])])]),t._v(" "),e("li",[e("p",[t._v("添加 Token 验证")]),t._v(" "),e("ul",[e("li",[t._v("由于 CSRF 的本质在于攻击者欺骗用户去访问自己设置的地址，所以如果要求在访问敏感数据请求时，要求用户浏览器提供不保存在 cookie 中，并且攻击者无法伪造的数据作为校验，则 CSRF 无法进行")])])])]),t._v(" "),e("h2",{attrs:{id:"xss"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#xss"}},[t._v("#")]),t._v(" XSS")]),t._v(" "),e("p",[t._v("XSS(Cross-site Scripting) 跨站脚本注入是利用网页开发时留下的漏洞，注入恶意指令代码到网页，使用户加载并执行攻击者恶意制造的网页程序的方法")]),t._v(" "),e("p",[t._v("解决方法：")]),t._v(" "),e("ul",[e("li",[t._v("过滤特殊字符")]),t._v(" "),e("li",[t._v("使用 HTTP 头指定类型")])])])}),[],!1,null,null,null);s.default=v.exports}}]);