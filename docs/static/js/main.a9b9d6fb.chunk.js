(this["webpackJsonpmy-react-project"]=this["webpackJsonpmy-react-project"]||[]).push([[0],{12:function(e,t,c){},13:function(e,t,c){},15:function(e,t,c){},16:function(e,t,c){"use strict";c.r(t);var a=c(1),n=c.n(a),s=c(6),l=c.n(s),r=(c(12),c(7)),i=c(2),o=(c(13),c(0)),j=function(e){var t=Object(a.useState)(""),c=Object(i.a)(t,2),n=c[0],s=c[1],l=Object(a.useState)(""),j=Object(i.a)(l,2),d=j[0],h=j[1],b=Object(a.useState)(""),u=Object(i.a)(b,2),m=u[0],x=u[1],O=Object(a.useState)("A"),g=Object(i.a)(O,2),p=g[0],v=g[1],y=Object(a.useState)([]),N=Object(i.a)(y,2),k=N[0],f=N[1],C=function(e){("radio"===e.target.type?function(e){e.target.checked&&v(e.target.value)}:function(e){var t=e.target.name;"title"===t?s(e.target.value):"description"===t?h(e.target.value):"language"===t&&x(e.target.value)})(e)},F=function(e){console.log(e.target.name,e.target.value,e.target.checked),e.target.checked&&k.length<3?f([].concat(Object(r.a)(k),[e.target.value])):f(k.filter((function(t){return e.target.value!==t})))};return Object(o.jsxs)("div",{className:"movieForm",children:[Object(o.jsxs)("form",{className:"form",action:"",children:[Object(o.jsxs)("div",{className:"info",children:[Object(o.jsx)("input",{className:"inputTitle",type:"text",name:"title",placeholder:"movie title",onChange:C,value:n}),Object(o.jsx)("textarea",{className:"textArea",name:"description",id:"description",cols:"30",rows:"7",placeholder:"movie description",onChange:C,value:d}),Object(o.jsxs)("select",{className:"select",name:"language",id:"select",onChange:C,value:m,children:[Object(o.jsx)("option",{value:"Igl\xe9s",children:"GB"}),Object(o.jsx)("option",{value:"Espa\xf1ol",children:"ES"}),Object(o.jsx)("option",{value:"Euskera",children:"EA"})]})]}),Object(o.jsxs)("div",{className:"wrap",children:[Object(o.jsxs)("div",{className:"age",children:[Object(o.jsxs)("label",{htmlFor:"age-A",children:[Object(o.jsx)("input",{name:"age",id:"age-A",type:"radio",value:"A",checked:"A"===p,onChange:C}),"A"]}),Object(o.jsxs)("label",{htmlFor:"age-7",children:[Object(o.jsx)("input",{name:"age",id:"age-7",type:"radio",value:"7",checked:"7"===p,onChange:C}),"7"]}),Object(o.jsxs)("label",{htmlFor:"age-12",children:[Object(o.jsx)("input",{name:"age",id:"age-12",type:"radio",value:"12",checked:"12"===p,onChange:C}),"12"]}),Object(o.jsxs)("label",{htmlFor:"age-16",children:[Object(o.jsx)("input",{name:"age",id:"age-16",type:"radio",value:"16",checked:"16"===p,onChange:C}),"16"]}),Object(o.jsxs)("label",{htmlFor:"age-18",children:[Object(o.jsx)("input",{name:"age",id:"age-18",type:"radio",value:"18",checked:"18"===p,onChange:C}),"18"]})]}),Object(o.jsxs)("div",{className:"genres",children:[Object(o.jsxs)("label",{htmlFor:"comedy",children:[Object(o.jsx)("input",{name:"genre",id:"comedy",type:"checkbox",value:"comedy",checked:k.includes("comedy"),onChange:F}),"comedy"]}),Object(o.jsxs)("label",{htmlFor:"drama",children:[Object(o.jsx)("input",{name:"genre",id:"drama",type:"checkbox",value:"drama",checked:k.includes("drama"),onChange:F}),"drama"]}),Object(o.jsxs)("label",{htmlFor:"fantasy",children:[Object(o.jsx)("input",{name:"genre",id:"fantasy",type:"checkbox",value:"fantasy",checked:k.includes("fantasy"),onChange:F}),"fantasy"]}),Object(o.jsxs)("label",{htmlFor:"action",children:[Object(o.jsx)("input",{name:"genre",id:"action",type:"checkbox",value:"action",checked:k.includes("action"),onChange:F}),"action"]}),Object(o.jsxs)("label",{htmlFor:"family",children:[Object(o.jsx)("input",{name:"genre",id:"family",type:"checkbox",value:"family",checked:k.includes("family"),onChange:F}),"family"]}),Object(o.jsxs)("label",{htmlFor:"horror",children:[Object(o.jsx)("input",{name:"genre",id:"horror",type:"checkbox",value:"horror",checked:k.includes("horror"),onChange:F}),"horror"]})]})]})]}),Object(o.jsxs)("article",{className:"article",children:[Object(o.jsx)("button",{className:"resetBtn",type:"button",onClick:function(){s(""),h(""),x(""),v(""),f([])},children:"Reset Info"}),Object(o.jsxs)("h2",{className:"text",children:["TITLE: ",n]}),Object(o.jsxs)("p",{className:"text",children:["Description: ",d]}),Object(o.jsxs)("p",{className:"text",children:["Language: ",m]}),Object(o.jsxs)("p",{className:"text",children:["Rating: ",p]}),Object(o.jsxs)("ul",{className:"text",children:["Genres (max.3): ",k.join(", ")]})]})]})},d=(c(15),function(){var e=Object(a.useState)(""),t=Object(i.a)(e,2),c=t[0],n=t[1],s=Object(a.useState)(""),l=Object(i.a)(s,2),r=l[0],j=l[1],d=Object(a.useState)(""),h=Object(i.a)(d,2),b=h[0],u=h[1],m=function(e){n(e.currentTarget.value),j(e.currentTarget.className),u(e.currentTarget.name)};return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("h3",{className:"titleColor",children:"Choose your favorite color"}),Object(o.jsxs)("div",{className:"container",children:[Object(o.jsxs)("form",{className:"colorForm",children:[Object(o.jsxs)("label",{htmlFor:"pink",className:"label",children:[Object(o.jsx)("input",{id:"pink",type:"radio",name:"You've chosen Pink",className:"pink",value:"1",onChange:m,checked:"1"===c}),Object(o.jsx)("p",{className:"textColor",children:"Color 1: Pink"})]}),Object(o.jsxs)("label",{className:"label",children:[Object(o.jsx)("input",{type:"radio",name:"You've chosen Blue",className:"blue",value:"2",onChange:m,checked:"2"===c}),Object(o.jsx)("p",{className:"textColor",children:"Color 2: Blue"})]}),Object(o.jsxs)("label",{className:"label",children:[Object(o.jsx)("input",{type:"radio",name:"You've chosen Green",className:"green",value:"3",onChange:m,checked:"3"===c}),Object(o.jsx)("p",{className:"textColor",children:"Color 3: Green"})]})]}),Object(o.jsxs)("section",{className:"results",children:[Object(o.jsx)("div",{className:"resultColor ".concat(r),children:c}),Object(o.jsx)("p",{clasName:"namePalette",children:b})]}),Object(o.jsxs)("div",{children:[Object(o.jsx)("button",{className:"resetColors",type:"button",onClick:function(){j(""),u("")},children:"Reset Color"}),Object(o.jsx)("button",{className:"resetColors",type:"button",onClick:function(){n("")},children:"Reset Number"})]})]})]})});var h=function(){return Object(o.jsxs)("div",{children:[Object(o.jsx)("h2",{className:"title",children:" Formularios"}),Object(o.jsx)(d,{}),Object(o.jsx)(j,{})]})};l.a.render(Object(o.jsx)(n.a.StrictMode,{children:Object(o.jsx)(h,{})}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.a9b9d6fb.chunk.js.map