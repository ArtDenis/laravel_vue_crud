"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[433],{433:(t,e,s)=>{s.r(e),s.d(e,{default:()=>c});const n={name:"Get",data:function(){return{fruits:""}},mounted:function(){this.getFruits()},methods:{getFruits:function(){var t=this;axios.get("/api/get").then((function(e){t.fruits=e.data})).catch((function(t){console.log("ты чо э ты чо")}))}}};const c=(0,s(900).Z)(n,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("table",{staticClass:"table"},[t._m(0),t._v(" "),t.fruits?s("tbody",[t._v("\n        "+t._s(t.fruits)+"\n    ")]):t._e()])}),[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("thead",[s("tr",[s("td",{attrs:{scope:"col"}},[t._v("#")]),t._v(" "),s("td",{attrs:{scope:"col"}},[t._v("Название")]),t._v(" "),s("td",{attrs:{scope:"col"}},[t._v("Цена")])])])}],!1,null,"08c704cc",null).exports}}]);