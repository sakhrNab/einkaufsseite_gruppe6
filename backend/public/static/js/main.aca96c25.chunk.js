(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{27:function(e,t,a){e.exports=a(66)},40:function(e,t,a){},66:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(15),l=a.n(c),o=a(2),i=a(9),s=a(5),m=a(3),u=a(1),d="https://ecommerce-feature3-gruppe6.herokuapp.com/",f=function(){return"undefined"!=typeof window&&(!!localStorage.getItem("jwt")&&JSON.parse(localStorage.getItem("jwt")))},p=function(e,t){return e.location.pathname===t?{color:"#ff9900"}:{color:"#ffffff"}},E=Object(i.f)(function(e){var t=e.history;return r.a.createElement("div",null,r.a.createElement("ul",{className:"nav nav-tabs bg-primary"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(o.b,{className:"nav-link",style:p(t,"/"),to:"/"},"Hauptseite")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(o.b,{className:"nav-link",style:p(t,"/shop"),to:"/shop"},"Shop")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(o.b,{className:"nav-link",style:p(t,"/cart"),to:"/cart"},"Einkaufswagen"," ",r.a.createElement("sup",null,r.a.createElement("small",{className:"cart-badge"},"undefined"!==typeof window&&localStorage.getItem("cart")?JSON.parse(localStorage.getItem("cart")).length:0)))),f()&&0===f().user.role&&r.a.createElement("li",{className:"nav-item"},r.a.createElement(o.b,{className:"nav-link",style:p(t,"/user/dashboard"),to:"/user/dashboard"},"Dashboard")),f()&&1===f().user.role&&r.a.createElement("li",{className:"nav-item"},r.a.createElement(o.b,{className:"nav-link",style:p(t,"/admin/dashboard"),to:"/admin/dashboard"},"Dashboard")),!f()&&r.a.createElement(n.Fragment,null,r.a.createElement("li",{className:"nav-item"},r.a.createElement(o.b,{className:"nav-link",style:p(t,"/signin"),to:"/signin"},"Einloggen")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(o.b,{className:"nav-link",style:p(t,"/signup"),to:"/signup"},"Registerieren"))),f()&&r.a.createElement("li",{className:"nav-item"},r.a.createElement("span",{className:"nav-link",style:{cursor:"pointer",color:"#ffffff"},onClick:function(){return function(e){if("undefined"!==typeof window)return localStorage.removeItem("jwt"),e(),fetch("".concat(d,"/signout"),{method:"GET"}).then(function(e){console.log("signout",e)}).catch(function(e){return console.log(e)})}(function(){t.push("/")})}},"Ausloggen"))))}),g=(a(40),function(e){var t=e.title,a=void 0===t?"Title":t,n=e.description,c=void 0===n?"Description":n,l=e.className,o=e.children;return r.a.createElement("div",null,r.a.createElement(E,null),r.a.createElement("div",{className:"jumbotron"},r.a.createElement("h2",null,a),r.a.createElement("p",{className:"lead"},c)),r.a.createElement("div",{className:l},o))}),h=function(){var e=Object(n.useState)({name:"",email:"",password:"",error:"",success:!1}),t=Object(u.a)(e,2),a=t[0],c=t[1],l=a.name,i=a.email,f=a.password,p=a.success,E=a.error,h=function(e){return function(t){c(Object(m.a)({},a,Object(s.a)({error:!1},e,t.target.value)))}},b=function(e){var t;e.preventDefault(),c(Object(m.a)({},a,{error:!1})),(t={name:l,email:i,password:f},fetch("".concat(d,"/signup"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(t)}).then(function(e){return e.json()}).catch(function(e){console.log(e)})).then(function(e){e.error?c(Object(m.a)({},a,{error:e.error,success:!1})):c(Object(m.a)({},a,{name:"",email:"",password:"",error:"",success:!0}))})};return r.a.createElement(g,{title:"Registerieren",description:"Registerieren Sie sich zum Florentina",className:"container col-md-8 offset-md-2"},r.a.createElement("div",{className:"alert alert-info",style:{display:p?"":"none"}},"Ein neues Konto wurde erstellt. Bitte ",r.a.createElement(o.b,{to:"/signin"},"Loggen Sie ein")),r.a.createElement("div",{className:"alert alert-danger",style:{display:E?"":"none"}},E),r.a.createElement("form",null,r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{className:"text-muted"},"Name"),r.a.createElement("input",{onChange:h("name"),type:"text",className:"form-control",value:l})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{className:"text-muted"},"Email"),r.a.createElement("input",{onChange:h("email"),type:"email",className:"form-control",value:i})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{className:"text-muted"},"Passwort"),r.a.createElement("input",{onChange:h("password"),type:"password",className:"form-control",value:f})),r.a.createElement("button",{onClick:b,className:"btn btn-primary"},"Einreichen")))},b=function(){var e=Object(n.useState)({email:"s0562218@htw-berlin.de",password:"s123456789",error:"",loading:!1,redirectToReferrer:!1}),t=Object(u.a)(e,2),a=t[0],c=t[1],l=a.email,o=a.password,p=a.loading,E=a.error,h=a.redirectToReferrer,b=f().user,N=function(e){return function(t){c(Object(m.a)({},a,Object(s.a)({error:!1},e,t.target.value)))}},v=function(e){var t;e.preventDefault(),c(Object(m.a)({},a,{error:!1,loading:!0})),(t={email:l,password:o},fetch("".concat(d,"/signin"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(t)}).then(function(e){return e.json()}).catch(function(e){console.log(e)})).then(function(e){e.error?c(Object(m.a)({},a,{error:e.error,loading:!1})):function(e,t){"undefined"!==typeof window&&(localStorage.setItem("jwt",JSON.stringify(e)),t())}(e,function(){c(Object(m.a)({},a,{redirectToReferrer:!0}))})})};return r.a.createElement(g,{title:"Einloggen",description:"Loggen Sie sich zum Florentina ein",className:"container col-md-8 offset-md-2"},p&&r.a.createElement("div",{className:"alert alert-info"},r.a.createElement("h2",null,"Bitte Warten...")),r.a.createElement("div",{className:"alert alert-danger",style:{display:E?"":"none"}},E),r.a.createElement("form",null,r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{className:"text-muted"},"Email"),r.a.createElement("input",{onChange:N("email"),type:"email",className:"form-control",value:l})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{className:"text-muted"},"Passwort"),r.a.createElement("input",{onChange:N("password"),type:"password",className:"form-control",value:o})),r.a.createElement("button",{onClick:v,className:"btn btn-primary"},"Einreichen")),h?b&&1===b.role?r.a.createElement(i.a,{to:"/admin/dashboard"}):r.a.createElement(i.a,{to:"/user/dashboard"}):f()?r.a.createElement(i.a,{to:"/"}):void 0)},N=a(25),v=a.n(N),y=function(e){return fetch("".concat(d,"/products?sortBy=").concat(e,"&order=desc&limit=6"),{method:"GET"}).then(function(e){return e.json()}).catch(function(e){return console.log(e)})},j=function(){return fetch("".concat(d,"/categories"),{method:"GET"}).then(function(e){return e.json()}).catch(function(e){return console.log(e)})},O=function(e,t){var a={limit:t,skip:e,filters:arguments.length>2&&void 0!==arguments[2]?arguments[2]:{}};return fetch("".concat(d,"/products/by/search"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(a)}).then(function(e){return e.json()}).catch(function(e){console.log(e)})},w=function(e){var t=e.item,a=e.url;return r.a.createElement("div",{className:"product-img"},r.a.createElement("img",{src:"".concat(d,"/").concat(a,"/photo/").concat(t._id),alt:t.name,className:"mb-3",style:{maxHeight:"100%",maxWidth:"100%"}}))},k=a(17),S=a.n(k),x=function(e){var t=e.product,a=e.showViewProductButton,c=void 0===a||a,l=e.showAddToCartButton,s=void 0===l||l,d=e.cartUpdate,f=void 0!==d&&d,p=e.showRemoveProductButton,E=void 0!==p&&p,g=Object(n.useState)(!1),h=Object(u.a)(g,2),b=h[0],N=h[1],v=Object(n.useState)(t.count),y=Object(u.a)(v,2),j=y[0],O=y[1],k=function(){!function(e,t){var a=[];"undefined"!==typeof window&&(localStorage.getItem("cart")&&(a=JSON.parse(localStorage.getItem("cart"))),a.push(Object(m.a)({},e,{count:1})),a=Array.from(new Set(a.map(function(e){return e._id}))).map(function(e){return a.find(function(t){return t._id===e})}),localStorage.setItem("cart",JSON.stringify(a)),t())}(t,function(){N(!0)})},x=function(e){return function(t){O(t.target.value<1?1:t.target.value),t.target.value>=1&&function(e,t){var a=[];"undefined"!==typeof window&&(localStorage.getItem("cart")&&(a=JSON.parse(localStorage.getItem("cart"))),a.map(function(n,r){n._id===e&&(a[r].count=t)}),localStorage.setItem("cart",JSON.stringify(a)))}(e,t.target.value)}};return r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-header name"},t.name),r.a.createElement("div",{className:"card-body"},function(e){if(e)return r.a.createElement(i.a,{to:"/cart"})}(b),r.a.createElement(w,{item:t,url:"product"}),r.a.createElement("p",{className:"lead mt-2"},t.description.substring(0,100)),r.a.createElement("p",{className:"black-10"},t.price," \u20ac"),r.a.createElement("p",{className:"black-9"},"Kategorie: ",t.category&&t.category.name),r.a.createElement("p",{className:"black-8"},"Hinzugef\xfcgt vor ",(S.a.locale("de"),S()(t.createdAt).fromNow())),t.quantity>0?r.a.createElement("span",{className:"badge badge-primary badge-pill"},"Im Lager"):r.a.createElement("span",{className:"badge badge-primary badge-pill"},"Nicht im Lager"),r.a.createElement("br",null),function(e){return e&&r.a.createElement(o.b,{to:"/product/".concat(t._id),className:"mr-2"},r.a.createElement("button",{className:"btn btn-outline-primary mt-2 mb-2"},"Produkt anzeigen"))}(c),function(e){return e&&r.a.createElement("button",{onClick:k,className:"btn btn-outline-warning mt-2 mb-2"},"zum Einkaufswagen hinzuf\xfcgen")}(s),function(e){return e&&r.a.createElement("button",{onClick:function(){return function(e){var t=[];return"undefined"!==typeof window&&(localStorage.getItem("cart")&&(t=JSON.parse(localStorage.getItem("cart"))),t.map(function(a,n){a._id===e&&t.splice(n,1)}),localStorage.setItem("cart",JSON.stringify(t))),t}(t._id)},className:"btn btn-outline-danger mt-2 mb-2"},"Produkt entfernen")}(E),function(e){return e&&r.a.createElement("div",null,r.a.createElement("div",{className:"input-group mb-3"},r.a.createElement("div",{className:"input-group-prepend"},r.a.createElement("span",{className:"input-group-text"},"Quantit\xe4t bearbeiten")),r.a.createElement("input",{type:"number",className:"form-control",value:j,onChange:x(t._id)})))}(f)))},T=function(){var e=Object(n.useState)({categories:[],category:"",search:"",results:[],searched:!1}),t=Object(u.a)(e,2),a=t[0],c=t[1],l=a.categories,o=a.category,i=a.search,f=a.results,p=a.searched;Object(n.useEffect)(function(){j().then(function(e){e.error?console.log(e.error):c(Object(m.a)({},e,{categories:e}))})},[]);var E=function(){i&&function(e){var t=v.a.stringify(e);return console.log("query",t),fetch("".concat(d,"/products/search?").concat(t),{method:"GET"}).then(function(e){return e.json()}).catch(function(e){return console.log(e)})}({search:i||void 0,category:o}).then(function(e){e.error?console.log(e.error):c(Object(m.a)({},a,{results:e,searched:!0}))})},g=function(e){e.preventDefault(),E()},h=function(e){return function(t){var n;c(Object(m.a)({},a,(n={},Object(s.a)(n,e,t.target.value),Object(s.a)(n,"searched",!1),n)))}};return r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"container mb-3"},r.a.createElement("form",{onSubmit:g},r.a.createElement("span",{className:"input-group-text"},r.a.createElement("div",{className:"input-group input-group-lg"},r.a.createElement("div",{className:"input-group-prepend"},r.a.createElement("select",{className:"btn mr-2",onChange:h("category")},r.a.createElement("option",{value:"All"},"Alle"),l.map(function(e,t){return r.a.createElement("option",{key:t,value:e._id},e.name)}))),r.a.createElement("input",{type:"search",className:"form-control",onChange:h("search"),placeholder:"Search by name"})),r.a.createElement("div",{className:"btn input-group-append",style:{border:"none"}},r.a.createElement("button",{className:"input-group-text"},"Suchen"))))),r.a.createElement("div",{className:"container-fluid mb-3"},function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return r.a.createElement("div",null,r.a.createElement("h2",{className:"mt-4 mb-4"},function(e,t){return e&&1===t.length?"".concat(t.length," Produkt wurde gefunden"):e&&t.length>1?"".concat(t.length," Produkte wurden gefunden"):e&&t.length<1?"Keine Produkte wurden gefunden":void 0}(p,e)),r.a.createElement("div",{className:"row"},e.map(function(e,t){return r.a.createElement(x,{key:t,product:e})})))}(f)))},P=function(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)([]),o=Object(u.a)(l,2),i=o[0],s=o[1],m=Object(n.useState)(!1),d=Object(u.a)(m,2),f=(d[0],d[1]);return Object(n.useEffect)(function(){y("createdAt").then(function(e){e.error?f(e.error):s(e)}),y("sold").then(function(e){e.error?f(e.error):c(e)})},[]),r.a.createElement(g,{title:"Hauptseite",description:"Florentina Einkaufsseite",className:"container-fluid"},r.a.createElement(T,null),r.a.createElement("h2",{className:"mb-4"},"Zuletzt angekommen"),r.a.createElement("div",{className:"row"},i.map(function(e,t){return r.a.createElement("div",{key:t,className:"col-4 mb-3"},r.a.createElement(x,{product:e}))})),r.a.createElement("h2",{className:"mb-4"},"Best verkaufte Produkte"),r.a.createElement("div",{className:"row"},a.map(function(e,t){return r.a.createElement("div",{key:t,className:"col-4 mb-3"},r.a.createElement(x,{product:e}))})))},C=a(13),I=function(e){var t=e.component,a=Object(C.a)(e,["component"]);return r.a.createElement(i.b,Object.assign({},a,{render:function(e){return f()?r.a.createElement(t,e):r.a.createElement(i.a,{to:{pathname:"/signin",state:{from:e.location}}})}}))},z=function(){var e=f().user,t=(e._id,e.name),a=e.email,n=e.role;return r.a.createElement(g,{title:"Dashboard",description:"Guten Tag ".concat(t,"!"),className:"container-fluid"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-3"},r.a.createElement("div",{className:"card"},r.a.createElement("h4",{className:"card-header"},"Benutzer Links"),r.a.createElement("ul",{className:"list-group"},r.a.createElement("li",{className:"list-group-item"},r.a.createElement(o.b,{className:"nav-link",to:"/cart"},"Mein Einkaufswagen")),r.a.createElement("li",{className:"list-group-item"},r.a.createElement(o.b,{className:"nav-link",to:"/profile/update"},"Profil bearbeiten"))))),r.a.createElement("div",{className:"col-9"},r.a.createElement("div",{className:"card mb-5"},r.a.createElement("h3",{className:"card-header"},"Benutzerinformationen"),r.a.createElement("ul",{className:"list-group"},r.a.createElement("li",{className:"list-group-item"},t),r.a.createElement("li",{className:"list-group-item"},a),r.a.createElement("li",{className:"list-group-item"},1===n?"Admin":"Registered User"))),r.a.createElement("div",{className:"card mb-5"},r.a.createElement("h3",{className:"card-header"},"Einkaufsverlauf"),r.a.createElement("ul",{className:"list-group"},r.a.createElement("li",{className:"list-group-item"},"verlauf"))))))},A=function(e){var t=e.component,a=Object(C.a)(e,["component"]);return r.a.createElement(i.b,Object.assign({},a,{render:function(e){return f()&&1===f().user.role?r.a.createElement(t,e):r.a.createElement(i.a,{to:{pathname:"/signin",state:{from:e.location}}})}}))},_=function(){var e=f().user,t=(e._id,e.name),a=e.email,n=e.role;return r.a.createElement(g,{title:"Dashboard",description:"Guten Tag ".concat(t,"!"),className:"container-fluid"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-3"},r.a.createElement("div",{className:"card"},r.a.createElement("h4",{className:"card-header"},"Admin Links"),r.a.createElement("ul",{className:"list-group"},r.a.createElement("li",{className:"list-group-item"},r.a.createElement(o.b,{className:"nav-link",to:"/create/category"},"Kategorie erstellen")),r.a.createElement("li",{className:"list-group-item"},r.a.createElement(o.b,{className:"nav-link",to:"/create/product"},"Produkt erstellen"))))),r.a.createElement("div",{className:"col-9"},r.a.createElement("div",{className:"card mb-5"},r.a.createElement("h3",{className:"card-header"},"Benutzerinformationen"),r.a.createElement("ul",{className:"list-group"},r.a.createElement("li",{className:"list-group-item"},t),r.a.createElement("li",{className:"list-group-item"},a),r.a.createElement("li",{className:"list-group-item"},1===n?"Admin":"Registered User"))))))},B=function(){var e=Object(n.useState)(""),t=Object(u.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(!1),i=Object(u.a)(l,2),s=i[0],m=i[1],p=Object(n.useState)(!1),E=Object(u.a)(p,2),h=E[0],b=E[1],N=f(),v=N.user,y=N.token,j=function(e){m(""),c(e.target.value)},O=function(e){e.preventDefault(),m(""),b(!1),function(e,t,a){return fetch("".concat(d,"/category/create/").concat(e),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(t)},body:JSON.stringify(a)}).then(function(e){return e.json()}).catch(function(e){console.log(e)})}(v._id,y,{name:a}).then(function(e){e.error?m(e.error):(m(""),b(!0))})};return r.a.createElement(g,{title:"F\xfcge eine neue Katogerie hinzu",description:"Guten Tag ".concat(v.name,", sind Sie bereit eine neue Kategorie hinzuf\xfcgen?")},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-8 offset-md-2"},function(){if(h)return r.a.createElement("h3",{className:"text-success"},a," wurde erstellt")}(),function(){if(s)return r.a.createElement("h3",{className:"text-danger"},"Kategorie soll einzigartig sein")}(),r.a.createElement("form",{onSubmit:O},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{className:"text-muted"},"Name"),r.a.createElement("input",{type:"text",className:"form-control",onChange:j,value:a,autoFocus:!0,required:!0})),r.a.createElement("button",{className:"btn btn-outline-primary"},"Kategorie erstellen")),r.a.createElement("div",{className:"mt-5"},r.a.createElement(o.b,{to:"/admin/dashboard",className:"text-warning"},"Zur\xfcck zum Dashboard")))))},J=function(){var e=Object(n.useState)({name:"",description:"",price:"",categories:[],category:"",shipping:"",quantity:"",photo:"",loading:!1,error:"",createdProduct:"",redirectToProfile:!1,formData:""}),t=Object(u.a)(e,2),a=t[0],c=t[1],l=f(),o=l.user,i=l.token,p=a.name,E=a.description,h=a.price,b=a.categories,N=(a.category,a.shipping,a.quantity),v=a.loading,y=a.error,j=a.createdProduct,O=(a.redirectToProfile,a.formData),w=function(){fetch("".concat(d,"/categories"),{method:"GET"}).then(function(e){return e.json()}).catch(function(e){return console.log(e)}).then(function(e){e.error?c(Object(m.a)({},a,{error:e.error})):c(Object(m.a)({},a,{categories:e,formData:new FormData}))})};Object(n.useEffect)(function(){w()},[]);var k=function(e){return function(t){var n="photo"===e?t.target.files[0]:t.target.value;O.set(e,n),c(Object(m.a)({},a,Object(s.a)({},e,n)))}},S=function(e){e.preventDefault(),c(Object(m.a)({},a,{error:"",loading:!0})),function(e,t,a){return fetch("".concat(d,"/product/create/").concat(e),{method:"POST",headers:{Accept:"application/json",Authorization:"Bearer ".concat(t)},body:a}).then(function(e){return e.json()}).catch(function(e){console.log(e)})}(o._id,i,O).then(function(e){e.error?c(Object(m.a)({},a,{error:e.error})):c(Object(m.a)({},a,{name:"",description:"",photo:"",price:"",quantity:"",loading:!1,createdProduct:e.name}))})};return r.a.createElement(g,{title:"F\xfcge ein neues Produkt hinzu",description:"Guten Tag ".concat(o.name,", Sind Sie bereit ein neues Produkt hinzuf\xfcgen?")},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-8 offset-md-2"},v&&r.a.createElement("div",{className:"alert alert-success"},r.a.createElement("h2",null,"Bitte Warten...")),r.a.createElement("div",{className:"alert alert-info",style:{display:j?"":"none"}},r.a.createElement("h2",null,"".concat(j)," wurde erstellt!")),r.a.createElement("div",{className:"alert alert-danger",style:{display:y?"":"none"}},y),r.a.createElement("form",{className:"mb-3",onSubmit:S},r.a.createElement("h4",null,"Foto hochladen"),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{className:"btn btn-secondary"},r.a.createElement("input",{onChange:k("photo"),type:"file",name:"photo",accept:"image/*"}))),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{className:"text-muted"},"Name"),r.a.createElement("input",{onChange:k("name"),type:"text",className:"form-control",value:p})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{className:"text-muted"},"Beschreibung"),r.a.createElement("textarea",{onChange:k("description"),className:"form-control",value:E})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{className:"text-muted"},"Preis"),r.a.createElement("input",{onChange:k("price"),type:"number",className:"form-control",value:h})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{className:"text-muted"},"Kategorie"),r.a.createElement("select",{onChange:k("category"),className:"form-control"},r.a.createElement("option",null,"Bitte ausw\xe4hlen"),b&&b.map(function(e,t){return r.a.createElement("option",{key:t,value:e._id},e.name)}))),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{className:"text-muted"},"Versand"),r.a.createElement("select",{onChange:k("shipping"),className:"form-control"},r.a.createElement("option",null,"Bite ausw\xe4hlen"),r.a.createElement("option",{value:"0"},"Nein"),r.a.createElement("option",{value:"1"},"Ja"))),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{className:"text-muted"},"Quantit\xe4t"),r.a.createElement("input",{onChange:k("quantity"),type:"number",className:"form-control",value:N})),r.a.createElement("button",{className:"btn btn-outline-primary"},"Produkt erstellen")))))},D=a(11),F=function(e){var t=e.categories,a=e.handleFilters,c=Object(n.useState)([]),l=Object(u.a)(c,2),o=l[0],i=l[1],s=function(e){return function(){var t=o.indexOf(e),n=Object(D.a)(o);-1===t?n.push(e):n.splice(t,1),i(n),a(n)}};return t.map(function(e,t){return r.a.createElement("li",{key:t,className:"list-unstyled"},r.a.createElement("input",{onChange:s(e._id),value:o.indexOf(-1===e._id),type:"checkbox",className:"form-check-input"}),r.a.createElement("label",{className:"form-check-label"},e.name))})},G=function(e){var t=e.prices,a=e.handleFilters,c=Object(n.useState)(0),l=Object(u.a)(c,2),o=(l[0],l[1]),i=function(e){a(e.target.value),o(e.target.value)};return t.map(function(e,t){return r.a.createElement("div",{key:t},r.a.createElement("input",{onChange:i,value:"".concat(e._id),name:e,type:"radio",className:"mr-2 ml-4"}),r.a.createElement("label",{className:"form-check-label"},e.name))})},K=[{_id:0,name:"Any",array:[]},{_id:1,name:"0 \u20ac to 9 \u20ac",array:[0,9]},{_id:2,name:"10 \u20ac to 19 \u20ac",array:[10,19]},{_id:3,name:"20 \u20ac to 29 \u20ac",array:[20,29]},{_id:4,name:"30 \u20ac to 39 \u20ac",array:[30,39]},{_id:5,name:"More than 40 \u20ac",array:[40,99]}],R=function(){var e=Object(n.useState)({filters:{category:[],price:[]}}),t=Object(u.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)([]),o=Object(u.a)(l,2),i=o[0],s=o[1],d=Object(n.useState)(!1),f=Object(u.a)(d,2),p=(f[0],f[1]),E=Object(n.useState)(6),h=Object(u.a)(E,2),b=h[0],N=(h[1],Object(n.useState)(0)),v=Object(u.a)(N,2),y=v[0],w=v[1],k=Object(n.useState)(0),S=Object(u.a)(k,2),T=S[0],P=S[1],C=Object(n.useState)([]),I=Object(u.a)(C,2),z=I[0],A=I[1],_=function(e){O(y,b,e).then(function(e){e.error?p(e.error):(A(e.data),P(e.size),w(0))})},B=function(){var e=y+b;O(e,b,a.filters).then(function(t){t.error?p(t.error):(A([].concat(Object(D.a)(z),Object(D.a)(t.data))),P(t.size),w(e))})};Object(n.useEffect)(function(){j().then(function(e){e.error?p(e.error):s(e)}),_(y,a.filters)},[]);var J=function(e,t){var n=Object(m.a)({},a);if(n.filters[t]=e,"price"===t){var r=R(e);n.filters[t]=r}_(a.filters),c(n)},R=function(e){var t=K,a=[];for(var n in t)t[n]._id===parseInt(e)&&(a=t[n].array);return a};return r.a.createElement(g,{title:"Shop Seite",description:"Suchen Sie und finden Sie Ihr lieblings Produkt",className:"container-fluid"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-4"},r.a.createElement("h4",null,"Mit Kategorien filtern"),r.a.createElement("ul",null,r.a.createElement(F,{categories:i,handleFilters:function(e){return J(e,"category")}})),r.a.createElement("h4",null,"Mit Preispanne filtern"),r.a.createElement("div",null,r.a.createElement(G,{prices:K,handleFilters:function(e){return J(e,"price")}}))),r.a.createElement("div",{className:"col-8"},r.a.createElement("h2",{className:"mb-4"},"Produkte"),r.a.createElement("div",{className:"row"},z.map(function(e,t){return r.a.createElement("div",{key:t,className:"col-4 mb-3"},r.a.createElement(x,{product:e}))})),r.a.createElement("hr",null),T>0&&T>=b&&r.a.createElement("button",{onClick:B,className:"btn btn-warning mb-5"},"Mehr zeigen..."))))},q=function(e){var t=Object(n.useState)({}),a=Object(u.a)(t,2),c=a[0],l=a[1],o=Object(n.useState)([]),i=Object(u.a)(o,2),s=i[0],m=i[1],f=Object(n.useState)(!1),p=Object(u.a)(f,2),E=(p[0],p[1]),h=function(e){(function(e){return fetch("".concat(d,"/product/").concat(e),{method:"GET"}).then(function(e){return e.json()}).catch(function(e){return console.log(e)})})(e).then(function(e){var t;e.error?E(e.error):(l(e),(t=e._id,fetch("".concat(d,"/products/related/").concat(t),{method:"GET"}).then(function(e){return e.json()}).catch(function(e){return console.log(e)})).then(function(e){e.error?E(e.error):m(e)}))})};return Object(n.useEffect)(function(){var t=e.match.params.productId;h(t)},[e]),r.a.createElement(g,{title:c&&c.name,description:c&&c.description&&c.description.substring(0,100),className:"container-fluid"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-8"},c&&c.description&&r.a.createElement(x,{product:c,showViewProductButton:!1})),r.a.createElement("div",{className:"col-4"},r.a.createElement("h4",null,"\xc4hnliche Produkte"),s.map(function(e,t){return r.a.createElement("div",{className:"mb-3"},r.a.createElement(x,{key:t,product:e}))}))))},L=a(26),M=a.n(L),W=function(e){var t=e.products,a=Object(n.useState)({loading:!1,success:!1,clientToken:null,error:"",instance:{},address:""}),c=Object(u.a)(a,2),l=c[0],i=c[1],s=f()&&f().user._id,p=f()&&f().token,E=function(e,t){(function(e,t){return fetch("".concat(d,"/braintree/getToken/").concat(e),{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(t)}}).then(function(e){return e.json()}).catch(function(e){return console.log(e)})})(e,t).then(function(e){e.error?i(Object(m.a)({},e,{error:e.error})):i({clientToken:e.clientToken})})};Object(n.useEffect)(function(){E(s,p)},[]);var g,h,b=function(){return t.reduce(function(e,t){return e+t.count*t.price},0)},N=function(){i({loading:!0}),l.instance.requestPaymentMethod().then(function(e){var t={paymentMethodNonce:e.nonce,amount:b()};(function(e,t,a){return fetch("".concat(d,"/braintree/payment/").concat(e),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(t)},body:JSON.stringify(a)}).then(function(e){return e.json()}).catch(function(e){return console.log(e)})})(s,p,t).then(function(t){var a;console.log(t),i(Object(m.a)({},e,{success:t.success})),a=function(){console.log("payment success and empty cart"),i({loading:!1})},"undefined"!==typeof window&&(localStorage.removeItem("cart"),a())}).catch(function(e){console.log(e),i({loading:!1})})}).catch(function(e){i(Object(m.a)({},l,{error:e.message}))})},v=function(){return r.a.createElement("div",{onBlur:function(){return i(Object(m.a)({},l,{error:""}))}},null!==l.clientToken&&t.length>0?r.a.createElement("div",null,r.a.createElement(M.a,{options:{authorization:l.clientToken,paypal:{flow:"vault"}},onInstance:function(e){return l.instance=e}}),r.a.createElement("button",{onClick:N,className:"btn btn-success btn-block"},"Zahlen")):null)};return r.a.createElement("div",null,r.a.createElement("h2",null,"Summe: $",b()),l.loading&&r.a.createElement("h2",{className:"text-danger"},"Bitte Warten..."),(h=l.success,r.a.createElement("div",{className:"alert alert-info",style:{display:h?"":"none"}},"Danke! Ihre Zahlung war erfolgreich!")),(g=l.error,r.a.createElement("div",{className:"alert alert-danger",style:{display:g?"":"none"}},g)),f()?r.a.createElement("div",null,v()):r.a.createElement(o.b,{to:"/signin"},r.a.createElement("button",{className:"btn btn-primary"},"Loggen Sie ein, um auszuchecken")))},H=function(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),a=t[0],c=t[1];Object(n.useEffect)(function(){c("undefined"!==typeof window&&localStorage.getItem("cart")?JSON.parse(localStorage.getItem("cart")):[])},[a]);return r.a.createElement(g,{title:"Einkaufswagen",description:"Einkaufswagen-Artikeln bearbeiten. Auschecken entfernen hinzuf\xfcgen oder weiter einkaufen.",className:"container-fluid"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-6"},a.length>0?function(e){return r.a.createElement("div",null,r.a.createElement("h2",null,"Ihr Einkaufswagen hat ","".concat(e.length)," Artikeln"),r.a.createElement("hr",null),e.map(function(e,t){return r.a.createElement(x,{key:t,product:e,showAddToCartButton:!1,cartUpdate:!0,showRemoveProductButton:!0})}))}(a):r.a.createElement("h2",null,"Ihr Einkaufswagen ist leer. ",r.a.createElement("br",null)," ",r.a.createElement(o.b,{to:"/shop"},"Weiter einkaufen"))),r.a.createElement("div",{className:"col-6"},r.a.createElement("h2",{className:"mb-4"},"Ihr Einkaufswagen-\xfcbersicht"),r.a.createElement("hr",null),r.a.createElement(W,{products:a}))))},U=function(){return r.a.createElement(o.a,null,r.a.createElement(i.d,null,r.a.createElement(i.b,{path:"/",exact:!0,component:P}),r.a.createElement(i.b,{path:"/shop",exact:!0,component:R}),r.a.createElement(i.b,{path:"/signin",exact:!0,component:b}),r.a.createElement(i.b,{path:"/signup",exact:!0,component:h}),r.a.createElement(I,{path:"/user/dashboard",exact:!0,component:z}),r.a.createElement(A,{path:"/admin/dashboard",exact:!0,component:_}),r.a.createElement(A,{path:"/create/category",exact:!0,component:B}),r.a.createElement(A,{path:"/create/product",exact:!0,component:J}),r.a.createElement(i.b,{path:"/product/:productId",exact:!0,component:q}),r.a.createElement(i.b,{path:"/cart",exact:!0,component:H})))};l.a.render(r.a.createElement(U,null),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.aca96c25.chunk.js.map