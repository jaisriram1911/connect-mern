_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[21],{Hde0:function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),o=n.n(r),c=n("5Yp1"),a=n("md0z"),u=n("rePB"),i=(n("YFqc"),n("nOHt"),n("wxrb")),s=n("e/mI"),l=o.a.createElement;function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function m(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(Object(n),!0).forEach((function(t){Object(u.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var d=function(){var e=Object(r.useState)({name:"",error:!1,success:!1,categories:[],removed:!1,reload:!1}),t=e[0],n=e[1],c=t.name,a=t.error,u=t.success,f=t.categories,d=t.removed,p=t.reload,b=Object(i.c)("token");Object(r.useEffect)((function(){g()}),[p]);var g=function(){Object(s.b)().then((function(e){e.error?console.log(e.error):n(m(m({},t),{},{categories:e}))}))},O=function(e){window.confirm("Are you sure you want to delete this category?")&&j(e)},j=function(e){Object(s.c)(e,b).then((function(e){e.error?console.log(e.error):n(m(m({},t),{},{error:!1,success:!1,name:"",removed:!d,reload:!p}))}))},y=function(e){e.preventDefault(),Object(s.a)({name:c},b).then((function(e){e.error?n(m(m({},t),{},{error:e.error,success:!1})):n(m(m({},t),{},{error:!1,success:!0,name:"",removed:"",reload:!p}))}))},h=function(e){n(m(m({},t),{},{name:e.target.value,error:!1,success:!1,removed:""}))};return l(o.a.Fragment,null,function(){if(u)return l("p",{className:"text-success"},"Category is created")}(),function(){if(a)return l("p",{className:"text-danger"},"Category already exist")}(),function(){if(d)return l("p",{className:"text-danger"},"Category is removed")}(),l("div",{onMouseMove:function(e){n(m(m({},t),{},{error:!1,success:!1,removed:""}))}},l("form",{onSubmit:y},l("div",{className:"form-group"},l("label",{className:"text-muted"},"Name"),l("input",{type:"text",className:"form-control",onChange:h,value:c,required:!0})),l("div",null,l("button",{type:"submit",className:"btn btn-primary"},"Create"))),f.map((function(e,t){return l("button",{onDoubleClick:function(){return O(e.slug)},title:"Double click to delete",key:t,className:"btn btn-outline-primary mr-1 ml-1 mt-3"},e.name)}))))},p=n("y5DQ"),b=o.a.createElement;function g(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function O(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?g(Object(n),!0).forEach((function(t){Object(u.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):g(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var j=function(){var e=Object(r.useState)({name:"",error:!1,success:!1,tags:[],removed:!1,reload:!1}),t=e[0],n=e[1],c=t.name,a=t.error,u=t.success,s=t.tags,l=t.removed,f=t.reload,m=Object(i.c)("token");Object(r.useEffect)((function(){d()}),[f]);var d=function(){Object(p.b)().then((function(e){e.error?console.log(e.error):n(O(O({},t),{},{tags:e}))}))},g=function(e){window.confirm("Are you sure you want to delete this Tag?")&&j(e)},j=function(e){Object(p.c)(e,m).then((function(e){e.error?console.log(e.error):n(O(O({},t),{},{error:!1,success:!1,name:"",removed:!l,reload:!f}))}))},y=function(e){e.preventDefault(),Object(p.a)({name:c},m).then((function(e){e.error?n(O(O({},t),{},{error:e.error,success:!1})):n(O(O({},t),{},{error:!1,success:!0,name:"",removed:"",reload:!f}))}))},h=function(e){n(O(O({},t),{},{name:e.target.value,error:!1,success:!1,removed:""}))};return b(o.a.Fragment,null,function(){if(u)return b("p",{className:"text-success"},"Tag is created!")}(),function(){if(a)return b("p",{className:"text-danger"},"Tag already exist!")}(),function(){if(l)return b("p",{className:"text-danger"},"Tag is removed!")}(),b("div",{onMouseMove:function(e){n(O(O({},t),{},{error:!1,success:!1,removed:""}))}},b("form",{onSubmit:y},b("div",{className:"form-group"},b("label",{className:"text-muted"},"Name"),b("input",{type:"text",className:"form-control",onChange:h,value:c,required:!0})),b("div",null,b("button",{type:"submit",className:"btn btn-primary"},"Create"))),s.map((function(e,t){return b("button",{onDoubleClick:function(){return g(e.slug)},title:"Double click to delete",key:t,className:"btn btn-outline-primary mr-1 ml-1 mt-3"},e.name)}))))},y=o.a.createElement;t.default=function(){return y(c.a,null,y(a.a,null,y("div",{className:"container-fluid"},y("div",{className:"row"},y("div",{className:"col-md-12 pt-5 pb-5"},y("h2",null,"Manage Categories and Tags")),y("div",{className:"col-md-6"},y("p",null,"Categories"),y(d,null)),y("div",{className:"col-md-6"},y("p",null,"Tags"),y(j,null))))))}},"e/mI":function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"d",(function(){return i})),n.d(t,"b",(function(){return s})),n.d(t,"c",(function(){return l}));var r=n("LpSC"),o=n.n(r),c=n("obyI"),a=n("wxrb"),u=function(e,t){return o()("".concat(c.a,"/category"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(t)},body:JSON.stringify(e)}).then((function(e){return Object(a.d)(e),e.json()})).catch((function(e){return console.log(e)}))},i=function(e){return o()("".concat(c.a,"/category/").concat(e),{method:"GET"}).then((function(e){return e.json()})).catch((function(e){return console.log(e)}))},s=function(){return o()("".concat(c.a,"/categories"),{method:"GET"}).then((function(e){return e.json()})).catch((function(e){return console.log(e)}))},l=function(e,t){return o()("".concat(c.a,"/category/").concat(e),{method:"DELETE",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(t)}}).then((function(e){return Object(a.d)(e),e.json()})).catch((function(e){return console.log(e)}))}},md0z:function(e,t,n){"use strict";var r=n("q1tI"),o=n.n(r),c=n("nOHt"),a=n.n(c),u=n("wxrb"),i=o.a.createElement;t.a=function(e){var t=e.children;return Object(r.useEffect)((function(){Object(u.e)()?1!==Object(u.e)().role&&a.a.push("/"):a.a.push("/signin")}),[]),i(o.a.Fragment,null,t)}},nxd4:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin/crud/category-tag",function(){return n("Hde0")}])},y5DQ:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"d",(function(){return i})),n.d(t,"b",(function(){return s})),n.d(t,"c",(function(){return l}));var r=n("LpSC"),o=n.n(r),c=n("obyI"),a=n("wxrb"),u=function(e,t){return o()("".concat(c.a,"/tag"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(t)},body:JSON.stringify(e)}).then((function(e){return Object(a.d)(e),e.json()})).catch((function(e){return console.log(e)}))},i=function(e){return o()("".concat(c.a,"/tag/").concat(e),{method:"GET"}).then((function(e){return e.json()})).catch((function(e){return console.log(e)}))},s=function(){return o()("".concat(c.a,"/tags"),{method:"GET"}).then((function(e){return e.json()})).catch((function(e){return console.log(e)}))},l=function(e,t){return o()("".concat(c.a,"/tag/").concat(e),{method:"DELETE",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(t)}}).then((function(e){return Object(a.d)(e),e.json()})).catch((function(e){return console.log(e)}))}}},[["nxd4",1,0,2,3]]]);