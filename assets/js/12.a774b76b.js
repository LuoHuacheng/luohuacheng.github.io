(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{214:function(t,_,v){"use strict";v.r(_);var e=v(0),l=Object(e.a)({},(function(){var t=this,_=t.$createElement,v=t._self._c||_;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h1",{attrs:{id:"页面性能"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#页面性能"}},[t._v("#")]),t._v(" 页面性能")]),t._v(" "),v("div",{staticClass:"custom-block tip"},[v("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),v("p",[t._v("如何优化页面性能？浏览器缓存？")])]),t._v(" "),v("h2",{attrs:{id:"常用优化方法"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#常用优化方法"}},[t._v("#")]),t._v(" 常用优化方法")]),t._v(" "),v("ol",[v("li",[t._v("资源压缩合并，减少 HTTP 请求")]),t._v(" "),v("li",[t._v("非核心代码异步加载")])]),t._v(" "),v("ul",[v("li",[t._v("动态脚本加载，动态创建 script 节点")]),t._v(" "),v("li",[v("code",[t._v("defer")]),t._v("，HTML 解析完再执行，按照加载顺序依次执行")]),t._v(" "),v("li",[v("code",[t._v("async")]),t._v("，脚本加载完立即执行，执行顺序与加载顺序无关")])]),t._v(" "),v("ol",{attrs:{start:"3"}},[v("li",[t._v("浏览器缓存")]),t._v(" "),v("li",[t._v("CDN")]),t._v(" "),v("li",[t._v("预解析 DNS")])]),t._v(" "),v("ul",[v("li",[v("code",[t._v('<meta http-equiv="x-dns-predetch-control" content = "on">')]),t._v("，一般默认打开，HTTPS 默认关闭，此处可以强制打开 dns 预解析")]),t._v(" "),v("li",[v("code",[t._v('<link rel="dns-prefetch" href="//host_name_to_prefetch">')]),t._v("预解析 dns")])]),t._v(" "),v("h2",{attrs:{id:"缓存"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#缓存"}},[t._v("#")]),t._v(" 缓存")]),t._v(" "),v("ul",[v("li",[v("p",[t._v("强制缓存")]),t._v(" "),v("ul",[v("li",[t._v("服务器通知浏览器一个缓存时间，在缓存时间内，下次请求，直接用缓存，不在时间内，执行协商缓存策略")]),t._v(" "),v("li",[v("code",[t._v("Cache-Control: max-age")]),t._v(" 相对时间长度")]),t._v(" "),v("li",[v("code",[t._v("Expires")]),t._v(" 服务器绝对时间点")])])]),t._v(" "),v("li",[v("p",[t._v("协商缓存")]),t._v(" "),v("ul",[v("li",[t._v("将缓存信息中的 Etag 和 Last-Modified 通过请求发送给服务器，由服务器校验，返回 304 状态码时，浏览器直接使用缓存")]),t._v(" "),v("li",[v("code",[t._v("If-None-Match(Etag)")]),t._v(" tag 唯一哈希值")]),t._v(" "),v("li",[v("code",[t._v("If-Modified-Since(Last-Modified)")]),t._v(" 修改时间")])])])])])}),[],!1,null,null,null);_.default=l.exports}}]);