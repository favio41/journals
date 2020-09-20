(this.webpackJsonpjournal=this.webpackJsonpjournal||[]).push([[0],{19:function(e,t,a){e.exports=a(84)},24:function(e,t,a){},25:function(e,t){Object.isEmptyObject=function(e){return 0===Object.keys(e).length&&e.constructor===Object},String.prototype.capitalize=function(){return this.length>1?this.charAt(0).toUpperCase()+this.slice(1):1===this.length?this.charAt(0).toUpperCase():this},Date.prototype.getWeek=function(e){var t=new Date(this.getFullYear(),0,1);if(void 0!==e&&("number"!==typeof e||e%1!==0||e<0||e>6))throw new Error("Wrong argument. Must be an integer between 0 and 6.");return e=e||0,Math.floor(((this-t)/864e5+t.getDay()-e)/7)},Promise.delay=function(e){return new Promise((function(t){setTimeout(t,e)}))}},83:function(e,t,a){},84:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(16),l=a.n(o),c=(a(24),a(2));var s=r.a.createContext({}),i=(a(25),r.a.createContext({}));function u(e,t){var a=e.description,n=e.position,r=t.description,o=t.position;return void 0!==n&&void 0!==o?n-o:"number"===typeof n?-1:"number"===typeof o||a>r?1:r>a?-1:0}var m=function(){var e=Object(n.useContext)(s).setMode,t=Object(n.useContext)(i),a=t.categories,o=t.selectedCategory,l=t.setSelectedCategory;return r.a.createElement("header",{className:"bg-blue-600 text-white"},r.a.createElement("div",{className:"max-w-6xl m-auto"},r.a.createElement("div",{className:"px-3 border-primary flex items-center justify-between"},r.a.createElement("div",{className:"py-2 flex items-end"},r.a.createElement("h1",{className:"days-one text-2xl text-primary px-2"},"Journal"),r.a.createElement("small",{className:"block pb-1"},"2.2.2")),r.a.createElement("div",{className:"flex justify-end"},r.a.createElement("button",{onClick:function(){return e("edit")},className:"block border rounded-lg text-sm px-2 py-1 mr-2 text-blue-600 bg-white"},"Compose"))),r.a.createElement("div",{className:"flex flex-wrap justify-around"},a.map((function(e,t){return r.a.createElement("button",{key:t,onClick:function(){return function(e){l(e)}(e)},className:"focus:outline-none p-3 block flex-initial capitalize text-sm ".concat(e===o?"font-extrabold":"")},e.description)})))))},d=a(17),b=a.n(d),p=r.a.createContext({});function f(e){var t=e.selectedCategory,a=Object(n.useState)([]),r=Object(c.a)(a,2),o=r[0],l=r[1],s=Object(n.useState)({}),i=Object(c.a)(s,2),u=i[0],m=i[1];function d(e){Object.entries(e).forEach((function(t){var a=Object(c.a)(t,2),n=a[0];""===a[1]&&delete e[n]}));var t={TableName:"journal-posts",Item:e};return console.log("Saving",t),window.dynamoDB.documentClient.put(t).promise()}return Object(n.useEffect)((function(){t&&t.id&&function(e){return console.log("Fetching posts",e),window.dynamoDB.documentClient.query({TableName:"journal-posts",KeyConditionExpression:"category = :category",ExpressionAttributeValues:{":category":e},ScanIndexForward:!1}).promise()}(t.id).then((function(e){var t=e.Items;l(t),m(t[0])}))}),[t]),{posts:o,selectedPost:u,setSelectedPost:m,patchPost:function(e){var t=o.findIndex((function(t){return t.timestamp===e.timestamp}));return d(e).then((function(){o.splice(t,1,e),l(o),m(o[t])}))},postPost:function(e){return d(e).then((function(){o.unshift(e),l(o),m(o[0])}))}}}var g=b()();function v(e){var t=e.post,a=(e.selected,Object(n.useContext)(p)),o=a.selectedPost,l=a.setSelectedPost;return r.a.createElement("div",{className:"p-4 border-b-2 last:border-b-0 ".concat(t===o?"bg-grayext-eee":""),onClick:function(){return l(t)}},r.a.createElement("h5",{className:"uppercase text-sm text-grayext-nine font-medium leading-3 font-sans block"},t.subtitle),r.a.createElement("h4",{className:"capitalize text-base font-bold leading-7 pb-1"},t.title),r.a.createElement("p",{className:"overflow-hidden text-xs text-grayext-three leading-4",style:{WebkitLineClamp:2,display:"-webkit-box",WebkitBoxOrient:"vertical"}},t.markdown))}function E(e){var t,a=e.post,o=Object(n.useContext)(s).setMode;return r.a.createElement("div",null,r.a.createElement("div",{className:"px-8 py-4 border-b-2 border-t-2 border-blue-200 bg-blue-100 cursor-pointer",onClick:function(){return o("edit",{post:a})}},r.a.createElement("h1",{className:"text-2xl uppercase font-medium text-blue-900"},a.title),r.a.createElement("h2",{className:"block text-xl capitalize font-normal leading-5 text-blue-300"},a.subtitle)),r.a.createElement("div",{className:"basic-post p-8",dangerouslySetInnerHTML:(t=a.markdown,{__html:g.render(t||"")})}))}var x=function(){var e=Object(n.useContext)(p),t=e.selectedPost,a=e.posts;return r.a.createElement("div",{className:"text-grayext-three m-auto xl:flex"},r.a.createElement("div",{className:"xl:max-w-md border-t-2 border-t-blue-200 border-r-2 border-r-gray-200 max-h-80 xl:max-h-full overflow-y-auto"},a.map((function(e,t){return r.a.createElement(v,{post:e,key:t})}))),r.a.createElement("div",{className:"xl:flex-grow"},r.a.createElement(E,{post:t||{}})))};function w(e,t){var a=Object(n.useState)(t[e]||""),r=Object(c.a)(a,2),o=r[0],l=r[1];return{value:o,onChange:function(e){l(e.target.value)},placeholder:e.capitalize()}}var y=function(){var e,t=Object(n.useContext)(s),a=t.setMode,o=t.data,l=Object(n.useContext)(p),u=l.patchPost,m=l.postPost,d=Object(n.useState)("edit"),b=Object(c.a)(d,2),f=b[0],g=b[1],v=Object(n.useContext)(i),E=v.categories,x=v.selectedCategory;o&&o.post?e=JSON.parse(JSON.stringify(o.post)):(e={timestamp:(new Date).toISOString(),category:x.id},"daily"===x.description.toLowerCase()&&(e.subtitle=(new Date).toISOString().split("T")[0]),"weekly"===x.description.toLowerCase()&&(e.subtitle=(new Date).getFullYear()+"-"+(new Date).getWeek(1)));var y=Object(n.useState)(e.category),h=Object(c.a)(y,2),O=h[0],j=h[1],N={value:O,onChange:function(e){j(e.target.value)}},C=w("title",e),S=w("subtitle",e),k=w("markdown",e);return Object(n.useEffect)((function(){o&&o.post?g("edit"):g("new")}),[]),Object(n.useEffect)((function(){console.log("Editor");var e=function(e){var t="You will losse all your changes. Are you sure you want to leave?";return(e||window.event).returnValue=t,t};return window.addEventListener("beforeunload",e),function(){window.removeEventListener("beforeunload",e)}}),[]),r.a.createElement("div",{className:"border-t-4 border-blue-600 lg:border-t-8"},r.a.createElement("div",{className:"max-w-5xl m-auto xl:my-10"},r.a.createElement("form",{className:"px-8 pt-6 pb-8 mb-4 xl/",onSubmit:function(t){t.preventDefault();var n,r={timestamp:e.timestamp,title:C.value,subtitle:S.value,category:N.value,markdown:k.value};if("edit"===f&&r.category!==o.post.category)return alert("We can't move posts yet"),void a("view");if(console.log(r),"new"===f)n=m;else{if("edit"!==f)throw new Error("Unexpected editorMode"+f);n=u}n(r).then((function(){a("view")}))}},r.a.createElement("div",{className:"mb-4"},r.a.createElement("label",{className:"block text-blue-600 text-sm font-bold mb-2"},"Category"),r.a.createElement("div",{className:"inline-block relative w-full"},r.a.createElement("select",Object.assign({},N,{className:"block capitalize appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded leading-tight"}),E.map((function(e,t){return r.a.createElement("option",{key:t,className:"capitalize",value:e.id},e.description)}))),r.a.createElement("div",{className:"pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"},r.a.createElement("svg",{className:"fill-current h-4 w-4",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},r.a.createElement("path",{d:"M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"}))))),r.a.createElement("div",{className:"mb-4"},r.a.createElement("label",{className:"block text-blue-600 text-sm font-bold mb-2"},C.placeholder),r.a.createElement("input",Object.assign({className:"appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight"},C))),r.a.createElement("div",{className:"mb-4"},r.a.createElement("label",{className:"block text-blue-600 text-sm font-bold mb-2"},S.placeholder),r.a.createElement("input",Object.assign({className:"appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight",type:"text"},S))),r.a.createElement("div",{className:"mb-4"},r.a.createElement("label",{className:"block text-blue-600 text-sm font-bold mb-2"},k.placeholder),r.a.createElement("textarea",Object.assign({},k,{className:"appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight h-64"}))),r.a.createElement("div",{className:"flex justify-center"},r.a.createElement("button",{className:"font-medium py-2 px-4 appearance-none rounded block border mr-5 text-white bg-blue-600",type:"submit"},"Save"),r.a.createElement("button",{className:"font-medium py-1 px-2 appearance-none rounded block border bg-grayext-ddd",type:"button",onClick:function(){return a("view")}},"cancel")))))},h=a(6),O=a.n(h),j=a(18);function N(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=Object(n.useState)(localStorage.getItem(e)||t.def||""),r=Object(c.a)(a,2),o=r[0],l=r[1];function s(t){var a=t.target.value;l(a),localStorage.setItem(e,a)}return t.def&&!localStorage.getItem(e)&&localStorage.setItem(e,t.def),{name:e,key:e,value:o,onChange:s,allowEmpty:t.allowEmpty}}var C=function(){var e=Object(n.useContext)(s).setMode,t={awsAccessKey:N("awsAccessKey"),awsSecretAccess:N("awsSecretAccess")},a=Object.values(t);function o(){return a.filter((function(e){return!0!==e.allowEmpty})).every((function(e){var t=localStorage.getItem(e.key);return console.log(e.key,t),t}))}function l(){return c.apply(this,arguments)}function c(){return(c=Object(j.a)(O.a.mark((function a(){return O.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:window.AWS.config.update({region:"eu-west-1",credentials:new window.AWS.Credentials(t.awsAccessKey.value,t.awsSecretAccess.value)}),window.dynamoDB={documentClient:new window.AWS.DynamoDB.DocumentClient({endpoint:Object({NODE_ENV:"production",PUBLIC_URL:"/journals",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,REACT_APP_FEATURE_GOOGLE_PHOTOS:"disable",REACT_APP_GOOGLE_API_KEY:"AIzaSyBEc95r5CJp3Tn5NKsd6HF9UIlgnokSY8M",REACT_APP_GOOGLE_CLIENT_ID:"138313950233-cqvcghodumb0rub19404dnj132r8nnm9.apps.googleusercontent.com",REACT_APP_VERSION:"2.2.2"}).REACT_APP_DYNAMODB_ENDPOINT,maxRetries:5})},a.next=5;break;case 5:e("view");case 6:case"end":return a.stop()}}),a)})))).apply(this,arguments)}return Object(n.useEffect)((function(){console.log("Setup load"),o()&&l()}),[]),r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),o()&&l(),console.log("Missing a entry")}},a.map((function(e,t){return r.a.createElement("label",{key:t},e.name,":",r.a.createElement("input",{value:e.value,onChange:e.onChange}))})),r.a.createElement("input",{type:"submit",value:"Submit"}))};a(83);function S(e){var t=function(){var e=Object(n.useState)([]),t=Object(c.a)(e,2),a=t[0],r=t[1],o=Object(n.useState)({}),l=Object(c.a)(o,2),s=l[0],i=l[1];return Object(n.useEffect)((function(){console.log("Fetch categories"),window.dynamoDB.documentClient.scan({TableName:"journal-categories"}).promise().then((function(e){var t=e.Items;t.sort(u),r(t),Object.isEmptyObject(s)&&i(t[0])}))}),[]),{categories:a,selectedCategory:s,setSelectedCategory:i}}(),a=f(t);return r.a.createElement(i.Provider,{value:t},r.a.createElement(p.Provider,{value:a},e.children))}function k(){var e=Object(n.useContext)(s).mode;return"setup"===e?r.a.createElement(C,null):"view"===e?r.a.createElement(S,null,r.a.createElement(m,null),r.a.createElement(x,null)):"edit"===e?r.a.createElement(S,null,r.a.createElement(y,null)):void 0}function P(){return null}var A=function(){var e=function(){var e=["setup","view","edit"],t=Object(n.useState)(e[0]),a=Object(c.a)(t,2),r=a[0],o=a[1],l=Object(n.useState)(),s=Object(c.a)(l,2),i=s[0],u=s[1];return{mode:r,setMode:function(t,a){if(console.log("Setting mode",{newMode:t,newData:a}),-1===e.indexOf(t))throw new Error("Unknow ".concat(r));u(a),o(t)},data:i}}();return r.a.createElement(s.Provider,{value:e},r.a.createElement(P,null),r.a.createElement(k,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(A,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[19,1,2]]]);
//# sourceMappingURL=main.a9ceb1d9.chunk.js.map