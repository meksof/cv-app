(function(t){function e(e){for(var s,r,l=e[0],o=e[1],c=e[2],u=0,f=[];u<l.length;u++)r=l[u],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&f.push(i[r][0]),i[r]=0;for(s in o)Object.prototype.hasOwnProperty.call(o,s)&&(t[s]=o[s]);p&&p(e);while(f.length)f.shift()();return n.push.apply(n,c||[]),a()}function a(){for(var t,e=0;e<n.length;e++){for(var a=n[e],s=!0,l=1;l<a.length;l++){var o=a[l];0!==i[o]&&(s=!1)}s&&(n.splice(e--,1),t=r(r.s=a[0]))}return t}var s={},i={app:0},n=[];function r(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=t,r.c=s,r.d=function(t,e,a){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)r.d(a,s,function(e){return t[e]}.bind(null,s));return a},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],o=l.push.bind(l);l.push=e,l=l.slice();for(var c=0;c<l.length;c++)e(l[c]);var p=o;n.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"0e9d":function(t,e,a){"use strict";var s=a("cfc5"),i=a.n(s);i.a},"32d7":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("f751"),a("097d");var s=a("2b0e"),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container",attrs:{id:"app"}},[a("router-view")],1)},n=[],r=a("bc3a"),l=a.n(r),o={name:"app",created:function(){l.a.interceptors.request.use((function(t){return t}),(function(t){return Promise.reject(t)})),l.a.interceptors.response.use((function(t){return t}),(function(t){return Promise.reject(t)}))}},c=o,p=(a("5c0b"),a("2877")),u=Object(p["a"])(c,i,n,!1,null,null,null),f=u.exports,d=a("8c4f"),m=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home",class:{"user-is-typing":t.userIsTyping}},[a("appHeader",{attrs:{profileInfo:t.profile}}),a("div",{staticClass:"content mx-auto"},[a("div",{staticClass:"sidebar"},[a("div",{staticClass:"s-card s-card-top bg-deep-purple"},[a("div",{staticClass:"profile-image"},[t.profile.image?a("img",{staticClass:"d-block mx-auto",attrs:{src:t.baseUrl+t.profile.image.url,alt:"Photo profil "+t.profile.fullName}}):t._e()]),a("h1",{staticClass:"page-title"},[t._v(t._s(t.profile.fullName)),a("span",{staticClass:"subtitle"},[t._v(t._s(t.profile.jobTitle))])]),a("em",{staticClass:"ff-c fz-12"},[t._v("("+t._s(t.profile.expertiseDomain)+")")]),a("br"),t._v("\n        "+t._s(t.profile.experience)+" "+t._s("ans d'expérience")+"\n      ")]),a("appSkills",{attrs:{skills:t.mySkills}})],1),a("div",{staticClass:"main"},[a("appSearchbox",{on:{typing:function(e){return t.filterCards(e)}}}),t.profile.summary?a("appSummary",{attrs:{summary:t.profile.summary}}):t._e(),t.myProjects.length>0?a("appCards",{attrs:{"card-items":t.myProjects,appliedFilter:t.searchKeyword,skills:t.mySkills}}):t._e()],1)])],1)},g=[],h=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"header"},[a("div",{staticClass:"card card-top d-flex bg-deep-purple mx-auto"},[a("div",{staticClass:"profile-image"},[t.profileInfo.image?a("img",{staticClass:"img-fluid",attrs:{src:t.baseUrl+t.profileInfo.image.url,alt:"Photo profil "+t.profileInfo.fullName}}):t._e()]),a("div",{staticClass:"my-auto mx-auto"},[a("h1",{staticClass:"page-title"},[t._v(t._s(t.profileInfo.fullName)),a("span",{staticClass:"subtitle"},[t._v(t._s(t.profileInfo.jobTitle))])]),a("em",{staticClass:"ff-c fz-12"},[t._v("("+t._s(t.profileInfo.expertiseDomain)+")")]),a("br"),t._v("\n      "+t._s(t.profileInfo.experience)+" "+t._s("ans d'expérience")+"\n    ")])])])},v=[],_="production",y={env:_,WEBSITE_URL:"development"==_?"http://localhost:1337":Object({NODE_ENV:"production",VUE_APP_GA_ID:"UA-119526762-1",VUE_APP_TITLE:"CV MEKSI Sofiane - Développeur Front",VUE_APP_VERSION:"0.17.0",BASE_URL:"/"}).PRODUCTION_URL},C=y;console.log(Object({NODE_ENV:"production",VUE_APP_GA_ID:"UA-119526762-1",VUE_APP_TITLE:"CV MEKSI Sofiane - Développeur Front",VUE_APP_VERSION:"0.17.0",BASE_URL:"/"}).PRODUCTION_URL);var b={name:"appHeader",props:{profileInfo:Object},data:function(){return{baseUrl:C.WEBSITE_URL}}},k=b,S=(a("0e9d"),Object(p["a"])(k,h,v,!1,null,"3e570d06",null)),x=S.exports,I=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"summary"},[t._m(0),a("blockquote",[a("p",[t._v("\n            "+t._s(t._f("truncate")(t.summary,t.maxSummaryTextLength,t.moreInfo))+"\n        ")]),t.summary&&t.summary.length>t.maxSummaryTextLength?a("a",{staticClass:"read-more",on:{click:function(e){return t.toggleMoreInfo(t.summary)}}},[t._v(t._s(t.moreInfo?"Voir moins":"Voir plus"))]):t._e()])])},j=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"section-title"},[a("h3",[t._v("\n            Résumé\n        ")])])}],E={name:"appSummary",props:{summary:String},data:function(){return{moreInfo:!1,maxSummaryTextLength:104}},methods:{toggleMoreInfo:function(){this.moreInfo=!this.moreInfo}}},P=E,O=Object(p["a"])(P,I,j,!1,null,null,null),w=O.exports,T=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"search-box mt-3"},[a("input",{attrs:{type:"text"},on:{keyup:function(e){return t.imTyping(e)}}})])},L=[],U={name:"appSearchbox",props:[],mounted:function(){},data:function(){return{}},methods:{imTyping:function(t){this.$emit("typing",t.target.value),""!==t.target.value?this.$parent.userIsTyping=!0:this.$parent.userIsTyping=!1}},computed:{}},F=U,M=Object(p["a"])(F,T,L,!1,null,null,null),$=M.exports,A=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"mt-4"},[t._m(0),t._l(t.cardItems,(function(e){return a("div",{key:e.id,staticClass:"card mt-3",class:{highlighted:void 0!==t.appliedFilter&&t.appliedFilter.length>1},attrs:{hidden:void 0!==t.appliedFilter&&t.appliedFilter.length>1&&!t.cardHasKeyword(e,t.appliedFilter)}},[a("div",{staticClass:"card-header row"},[a("div",{staticClass:"col-5 col-sm-5"},[a("h3",{staticClass:"card-title",domProps:{innerHTML:t._s(t.highlight(e.title,t.appliedFilter))}}),a("span",{staticClass:"card-subtitle no-wrap",domProps:{innerHTML:t._s(t.highlight(e.client,t.appliedFilter))}})]),a("div",{staticClass:"col-3 col-sm-3 d-flex align-items-start"},[a("i",{staticClass:"icon stopwatch"}),a("span",{staticClass:"ff-c light-gray"},[t._v(t._s(e.duration))])]),a("div",{staticClass:"col-4 col-sm-4 d-flex align-items-start"},[a("i",{staticClass:"icon group"}),a("span",{staticClass:"ff-c light-gray"},[t._v(t._s(e.team))])])]),a("div",{staticClass:"card-content mt-2"},[a("div",{staticClass:"description",domProps:{innerHTML:t._s(t.highlight(e.description,t.appliedFilter))}}),a("div",{staticClass:"more-info mt-2"},[e.roleList&&0!==Object.keys(e.roleList).length?a("div",{staticClass:"more-info-trigger",class:{open:e.moreInfo||t.appliedFilter&&t.appliedFilter.length>1},attrs:{title:"Plus d'info"},on:{click:function(a){return t.toggleMoreInfo(e)}}}):t._e(),e.roleList&&0!=e.roleList.length?a("ul",{staticClass:"role"},t._l(e.roleList,(function(e){return a("li",{key:e,domProps:{innerHTML:t._s(t.highlight(e,t.appliedFilter))}})})),0):t._e()])]),a("div",{staticClass:"tags mt-2"},t._l(e.tags,(function(e){return a("div",{key:e.name,staticClass:"tag",domProps:{innerHTML:t._s(t.highlight(e.name,t.appliedFilter))}})})),0)])})),a("appSkills",{staticClass:"d-xl-none d-lg-none",attrs:{skills:t.skills}})],2)},R=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"section-title"},[a("h3",[t._v("Missions / Projets")])])}],V=(a("7f7f"),a("a481"),a("3b2b"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t.skills.technicalSkills&&0!=t.skills.technicalSkills.length?a("div",[t._m(0),a("div",{staticClass:"s-card mt-2 text-center text-lg-left"},t._l(t.skills.technicalSkills,(function(e){return a("div",{key:e.name,staticClass:"skill"},[a("h4",[t._v(t._s(e.name))]),a("div",{staticClass:"progress mb-15"},[a("div",{staticClass:"progressbar",style:{width:e.level/t.maxSkillLevel*100+"%"}}),t._e()])])})),0)]):t._e(),t.skills.languageSkills&&0!=t.skills.languageSkills.length?a("div",[t._m(1),a("div",{staticClass:"s-card mt-2 row no-gutters"},t._l(t.skills.languageSkills,(function(e){return a("div",{key:e.name,staticClass:"col-6 col-lg-12 mb-2 pl-2 pl-lg-0"},[a("h4",[t._v(t._s(e.name))]),a("div",{staticClass:"block-level"},[a("span",{staticClass:"text"},[t._v("Oral")]),a("div",{staticClass:"progress mini"},[a("div",{staticClass:"progressbar",style:{width:e.spoken_level/t.maxSkillLevel*100+"%"}}),t._e()])]),a("div",{staticClass:"block-level"},[a("span",{staticClass:"text"},[t._v("Ecrit")]),a("div",{staticClass:"progress mini pull-right"},[a("div",{staticClass:"progressbar",style:{width:e.written_level/t.maxSkillLevel*100+"%"}}),t._e()])])])})),0)]):t._e()])}),D=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"section-title"},[a("h3",[t._v("Compétences techniques")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"section-title"},[a("h3",[t._v("Langues")])])}],N={name:"appSkill",data:function(){return{maxSkillLevel:5}},props:{skills:Object}},H=N,K=(a("97fc"),Object(p["a"])(H,V,D,!1,null,"75660452",null)),q=K.exports,B={components:{appSkills:q},name:"appCards",props:{cardItems:Array,appliedFilter:String,skills:Object},methods:{toggleMoreInfo:function(t){t.moreInfo=!t.moreInfo},highlight:function(t,e){if(!t)return"";if(!e||e.length<2)return t;var a=new RegExp("("+e+")","ig");return t.replace(a,'<span class="il">$1</span>')},cardHasKeyword:function(t,e){if(e.length<2)return!1;var a=new RegExp(e,"i"),s=W(t,["title","description","roleList","tags","client"],"|");return a.test(s)}}};function W(t,e,a){return e.map((function(e){if("tags"==e){var s=t[e].map((function(t){return t.name}));return s.join(a)}return t[e]})).filter((function(t){return t})).join(a)}var z=B,G=Object(p["a"])(z,A,R,!1,null,null,null),J=G.exports,Q={name:"home",components:{appHeader:x,appSummary:w,appSearchbox:$,appCards:J,appSkills:q},data:function(){return{userIsTyping:!1,searchKeyword:"",profile:{},myProjects:[],baseUrl:C.WEBSITE_URL,mySkills:{technicalSkills:[],languageSkills:[]}}},methods:{fetchData:function(){var t=this;l.a.post(this.baseUrl+"/graphql",{query:'query getCVDATA {\n  profiles (limit: 1) {\n    summary\n    experience\n    fullName\n    jobTitle\n    expertiseDomain\n    image {\n      url\n    }\n  }\n  projects (sort: "start_date:desc") { \n    title\n    client\n    duration\n    team\n    description\n    roleList\n    tags {\n      name\n    }\n  }\n  technicalSkills: skills (sort: "level:desc",where: { type: technique }){ \n    name\n    level\n  } \n  languageSkills: skills (where: { type: langue }){ \n    name\n    spoken_level\n    written_level\n  } \n}'}).then((function(e){if(200==e.status&&e.data){if(e.data.data.projects&&e.data.data.projects.length>0){var a=e.data.data.projects;t.myProjects=a.map((function(t){var e=Object.assign({},t);return e.moreInfo=!1,e}))}e.data.data.technicalSkills&&e.data.data.technicalSkills.length>0&&(t.mySkills.technicalSkills=e.data.data.technicalSkills),e.data.data.languageSkills&&e.data.data.languageSkills.length>0&&(t.mySkills.languageSkills=e.data.data.languageSkills),e.data.data.profiles&&(t.profile=e.data.data.profiles[0])}}))},filterCards:function(t){this.searchKeyword=t}},created:function(){this.fetchData()}},X=Q,Y=Object(p["a"])(X,m,g,!1,null,null,null),Z=Y.exports;s["a"].use(d["a"]);var tt=new d["a"]({routes:[{path:"/",name:"home",component:Z}]});a("6b54");s["a"].filter("uppercase",(function(t){return t?(t=t.toString(),t.toUpperCase()):""})),s["a"].filter("highlightSearchKeyword",(function(t,e){if(!t)return"";if(!e)return t;var a=new RegExp(e,"g");return t.replace(a,'<span class="il">'+e+"</span>")})),s["a"].filter("truncate",(function(t,e,a){return t||"string"===typeof t?a?t:t.replace(t.substr(e+1),""):""}));s["a"],a("944d");s["a"].config.productionTip=!1,new s["a"]({router:tt,render:function(t){return t(f)}}).$mount("#app")},"5c0b":function(t,e,a){"use strict";var s=a("e332"),i=a.n(s);i.a},"944d":function(t,e,a){},"97fc":function(t,e,a){"use strict";var s=a("32d7"),i=a.n(s);i.a},cfc5:function(t,e,a){},e332:function(t,e,a){}});
//# sourceMappingURL=app.6eb3e368.js.map