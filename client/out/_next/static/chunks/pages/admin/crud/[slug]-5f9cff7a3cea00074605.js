_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[19],{AhMt:function(e,t,r){"use strict";var n=r("KQm4"),a=r("rePB"),c=r("q1tI"),o=r.n(c),l=(r("YFqc"),r("nOHt")),u=r.n(l),s=r("a6RD"),i=r.n(s),m=r("wxrb"),f=r("e/mI"),b=r("y5DQ"),d=r("zdbK"),p=r("9vCM"),h=(r("AveT"),r("91UR"),o.a.createElement);function O(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function g(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?O(Object(r),!0).forEach((function(t){Object(a.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):O(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var v=i()((function(){return Promise.all([r.e(0),r.e(13),r.e(5),r.e(14)]).then(r.t.bind(null,"rmP6",7))}),{ssr:!1,loadableGenerated:{webpack:function(){return["rmP6"]},modules:["react-quill"]}});t.a=Object(l.withRouter)((function(e){var t=e.router,r=Object(c.useState)(""),l=r[0],s=r[1],i=Object(c.useState)({error:"",success:"",formData:"",title:""}),O=i[0],j=i[1],y=Object(c.useState)([]),N=y[0],w=y[1],_=Object(c.useState)([]),x=_[0],P=_[1],k=Object(c.useState)([]),D=k[0],E=k[1],q=Object(c.useState)([]),S=q[0],C=q[1],T=(O.error,O.success,O.formData),F=O.title,I=Object(m.c)("token");Object(c.useEffect)((function(){j(g(g({},O),{},{formData:new FormData})),M(),A(),B()}),[t]);var M=function(){t.query.slug&&Object(d.g)(t.query.slug).then((function(e){e.error?console.log(e.error):(j(g(g({},O),{},{title:e.title})),s(e.body),Y(e.categories),z(e.tags))}))},Y=function(e){var t=[];e.map((function(e,r){t.push(e._id)})),w(t)},z=function(e){var t=[];e.map((function(e,r){t.push(e._id)})),P(t)},A=function(){Object(f.b)().then((function(e){e.error?E(g(g({},O),{},{error:e.error})):E(e)}))},B=function(){Object(b.b)().then((function(e){e.error?C(g(g({},O),{},{error:e.error})):C(e)}))},G=function(e){return function(){j(g(g({},O),{},{error:""}));var t=N.indexOf(e),r=Object(n.a)(N);-1===t?r.push(e):r.splice(t,1),console.log(r),w(r),T.set("categories",r)}},R=function(e){return function(){j(g(g({},O),{},{error:""}));var t=x.indexOf(e),r=Object(n.a)(x);-1===t?r.push(e):r.splice(t,1),console.log(r),P(r),T.set("tags",r)}},U=function(e){return-1!==N.indexOf(e)},H=function(e){return-1!==x.indexOf(e)},J=function(e){return function(t){var r,n="photo"===e?t.target.files[0]:t.target.value;T.set(e,n),j(g(g({},O),{},(r={},Object(a.a)(r,e,n),Object(a.a)(r,"formData",T),Object(a.a)(r,"error",""),r)))}},K=function(e){s(e),T.set("body",e)},Q=function(e){e.preventDefault(),Object(d.h)(T,I,t.query.slug).then((function(e){e.error?j(g(g({},O),{},{error:e.error})):(j(g(g({},O),{},{title:"",success:"Blog Titled '".concat(e.title,"' is successfully Created!")})),Object(m.e)()&&1===Object(m.e)().role?u.a.replace("/blogs/".concat(t.query.slug)):Object(m.e)()&&0===Object(m.e)().role&&u.a.replace("/blogs/".concat(t.query.slug)))}))};return h(o.a.Fragment,null,h("div",{className:"container-fluid"},h("div",{className:"row"},h("div",{className:"col-md-4"},h("div",{className:"form-group pb-2"},h("h5",null,"Featured Image"),h("hr",null),h("small",{className:"text-muted mr-5"},"Max Size : 1mb"),h("label",{className:"btn btn-info"},"Upload Featured Image",h("input",{onChange:J("photo"),hidden:!0,accept:"image/*",type:"file"}))),h("div",null,h("h5",null,"Categories"),h("hr",null),h("ul",{style:{height:"120px",overflowY:"scroll"}},D&&D.map((function(e,t){return h("li",{key:t,className:"list-unstyled"},h("input",{checked:U(e._id),onChange:G(e._id),type:"checkbox",className:"mr-2"}),h("label",{className:"form-check-label"},e.name))})))),h("div",null,h("h5",{className:"mt-5"},"Tags"),h("hr",null),h("ul",{style:{height:"120px",overflowY:"scroll"}},S&&S.map((function(e,t){return h("li",{key:t,className:"list-unstyled"},h("input",{checked:H(e._id),onChange:R(e._id),type:"checkbox",className:"mr-2"}),h("label",{className:"form-check-label"},e.name))}))))),h("div",{className:"col-md-8"},h("p",null,"create blog form"),h("form",{onSubmit:Q},h("div",{className:"form-group"},h("label",{className:"text-muted"},"Title"),h("input",{type:"text",className:"form-control",value:F,onChange:J("title")})),h("div",{className:"form-group"},h(v,{modules:p.b,formats:p.a,value:l,placeholder:"write something ...",onChange:K})),h("div",null,h("div",{className:"pt-3"}),h("button",{type:"submit",className:"btn btn-primary"},"Update"))),h("div",{className:"pt-3"})))))}))},iT7G:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin/crud/[slug]",function(){return r("we8M")}])},md0z:function(e,t,r){"use strict";var n=r("q1tI"),a=r.n(n),c=r("nOHt"),o=r.n(c),l=r("wxrb"),u=a.a.createElement;t.a=function(e){var t=e.children;return Object(n.useEffect)((function(){Object(l.e)()?1!==Object(l.e)().role&&o.a.push("/"):o.a.push("/signin")}),[]),u(a.a.Fragment,null,t)}},we8M:function(e,t,r){"use strict";r.r(t);var n=r("q1tI"),a=r.n(n),c=r("5Yp1"),o=r("md0z"),l=r("AhMt"),u=(r("YFqc"),a.a.createElement);t.default=function(){return u(c.a,null,u(o.a,null,u("div",{className:"container-fluid"},u("div",{className:"row"},u("div",{className:"col-md-12 pt-5 pb-5"},u("h2",null,"Create a New Blog")),u("div",{className:"col-md-12"},u(l.a,null))))))}}},[["iT7G",1,0,2,3,10,11]]]);