(this["webpackJsonpreact-portfolio"]=this["webpackJsonpreact-portfolio"]||[]).push([[0],{24:function(e,t,s){},31:function(e,t,s){},32:function(e,t,s){},33:function(e,t,s){},34:function(e,t,s){},35:function(e,t,s){},36:function(e,t,s){},37:function(e,t,s){},39:function(e,t,s){"use strict";s.r(t);var c=s(1),a=s.n(c),i=s(14),r=s.n(i),n=(s(24),s(15)),l=s.n(n),o=s(17),j=s.n(o),d=s(0);function m(){return Object(d.jsx)("div",{className:"topbar active",children:Object(d.jsxs)("div",{className:"wrapper",children:[Object(d.jsxs)("div",{className:"topbar-left",children:[Object(d.jsx)("a",{href:"#intro",className:"logo",children:"Portfolio."}),Object(d.jsxs)("div",{className:"itemContainer",children:[Object(d.jsx)(l.a,{className:"icon"}),Object(d.jsx)("span",{className:"leftSpan",children:"+1 (214) 616 0791"})]}),Object(d.jsxs)("div",{className:"itemContainer",children:[Object(d.jsx)(j.a,{className:"icon"}),Object(d.jsx)("span",{className:"leftSpan",children:"gavinreid94@gmail.com"})]})]}),Object(d.jsx)("div",{className:"topbar-right",children:Object(d.jsxs)("div",{className:"hamburger active",children:[Object(d.jsx)("span",{className:"line line1"}),Object(d.jsx)("span",{className:"line line2"}),Object(d.jsx)("span",{className:"line line3"})]})}),Object(d.jsx)("div",{className:"menu",children:Object(d.jsxs)("div",{className:"menu-center",children:[Object(d.jsxs)("div",{className:"menu-item",children:[Object(d.jsx)("i",{className:"fas fa-home"}),Object(d.jsx)("a",{href:"#intro",className:"topbarA",children:"About Me"})]}),Object(d.jsx)("div",{className:"menu-item",children:Object(d.jsx)("a",{href:"#portfolio",className:"topbarA",children:"Portfolio"})}),Object(d.jsx)("div",{className:"menu-item",children:Object(d.jsx)("a",{href:"#works",className:"topbarA",children:"Works"})}),Object(d.jsx)("div",{className:"menu-item",children:Object(d.jsx)("a",{href:"#resume",className:"topbarA",children:"Resume"})}),Object(d.jsx)("div",{className:"menu-item",children:Object(d.jsx)("a",{href:"#contact",className:"topbarA",children:"Contact"})})]})})]})})}s(31);var b=s(18);function h(){var e=Object(c.useRef)();return Object(c.useEffect)((function(){Object(b.a)(e.current,{showCursor:!0,backDelay:1500,backSpeed:60,strings:["Software Developer","Designer","Full-Stack Web Developer"]})}),[]),Object(d.jsxs)("div",{className:"intro",id:"intro",children:[Object(d.jsx)("div",{className:"left",children:Object(d.jsx)("div",{className:"imgContainer",children:Object(d.jsx)("img",{src:"assets/man.png",alt:""})})}),Object(d.jsxs)("div",{className:"right",children:[Object(d.jsxs)("div",{className:"introWrapper",children:[Object(d.jsx)("h2",{children:"Hi There, I'm"}),Object(d.jsx)("h1",{children:"Gavin Reid"}),Object(d.jsxs)("h3",{children:["Freelance ",Object(d.jsx)("span",{className:"introSpan",ref:e})]})]}),Object(d.jsx)("a",{href:"#portfolio",children:Object(d.jsx)("img",{className:"downImg",src:"assets/down.png",alt:""})})]})]})}var p=s(3);s(32);function f(e){var t=e.id,s=e.title,c=e.active,a=e.setSelected;return Object(d.jsx)("li",{className:c?"portfolioList active":"portfolioList",onClick:function(){return a(t)},children:s})}s(33);var O=[{id:1,title:"Palete Cleanser",img:"https://raw.githubusercontent.com/gavinreid0/Palette-Cleanser/main/public/img/SCREENSHOT-FOR-PALLETE.png"},{id:2,title:"Explore Mars",img:""},{id:3,title:"E-commerce Web Design",img:""},{id:4,title:"Mobile App",img:""},{id:5,title:"Web Design",img:""},{id:6,title:"App",img:""}];function u(){var e=Object(c.useState)("featured"),t=Object(p.a)(e,2),s=t[0],a=t[1],i=Object(c.useState)([]),r=Object(p.a)(i,2),n=r[0],l=r[1];return Object(c.useEffect)((function(){l(O)}),[s]),Object(d.jsxs)("div",{className:"portfolio",id:"portfolio",children:[Object(d.jsx)("h1",{className:"portfolioH1",children:"Portfolio"}),Object(d.jsx)("ul",{className:"portfolioUl",children:[{id:"featured",title:"Featured"}].map((function(e){return Object(d.jsx)(f,{title:e.title,active:s===e.id,setSelected:a,id:e.id})}))}),Object(d.jsx)("div",{className:"container",children:n.map((function(e){return Object(d.jsxs)("div",{className:"item",children:[Object(d.jsx)("img",{className:"portfolioImg",src:e.img,alt:""}),Object(d.jsx)("h3",{className:"portfolioH3",children:e.title})]})}))})]})}s(34);function x(){var e=Object(c.useState)(0),t=Object(p.a)(e,2),s=t[0],a=t[1],i=[{id:"1",icon:"./assets/color-palette.png",title:"Palette Cleanser",desc:"A palette cleanser app created in order to fulfill a need for various font colors and font types in projects. The user can create an account, log into the web app, select the font types and font colors they want for the header, body, and footer of their webpage. ",img:"https://raw.githubusercontent.com/gavinreid0/Palette-Cleanser/main/public/img/SCREENSHOT-FOR-PALLETE.png",href:"https://github.com/gavinreid0/Palette-Cleanser",href2:"https://palette-cleanser.herokuapp.com/"},{id:"2",icon:"./assets/globe.png",title:"Explore Mars",desc:"Educational web application utilizing NASA Open APIs to display mars rover images, as well as the NASA astronomy photo of the day. Made using: -HTML -CSS - materialize -Javascript - JQuery - moment.js",img:"https://i.pinimg.com/originals/e9/c9/2f/e9c92f7869d682a6fa5a97fb8a298f30.jpg",href:"https://github.com/gavinreid0/ExploreMars",href2:"https://jamesj995.github.io/ExploreMars/"},{id:"3",icon:"./assets/writing.png",title:"Note Taker",desc:"",img:"https://i.pinimg.com/originals/a9/f6/94/a9f69465d972a004ad581f245d6ad581.jpg",href:"https://github.com/gavinreid0/noteTaker",href2:"https://note-taker-gr.herokuapp.com/"}],r=function(e){a("left"===e?s>0?s-1:2:s<i.length-1?s+1:0)};return Object(d.jsxs)("div",{className:"works",id:"works",children:[Object(d.jsx)("div",{className:"slider",style:{transform:"translateX(-".concat(100*s,"vw)")},children:i.map((function(e){return Object(d.jsx)("div",{className:"worksContainer",children:Object(d.jsxs)("div",{className:"worksItem",children:[Object(d.jsx)("div",{className:"worksLeft",children:Object(d.jsxs)("div",{className:"leftContainer",children:[Object(d.jsx)("div",{className:"worksImgContainer",children:Object(d.jsx)("img",{className:"worksImg",src:e.icon,alt:""})}),Object(d.jsx)("h2",{className:"worksH2",children:e.title}),Object(d.jsx)("p",{className:"pWorks",children:e.desc}),Object(d.jsx)("a",{href:e.href,className:"worksSpan",children:"Click Here for Github Repository:"}),Object(d.jsx)("a",{href:e.href2,className:"worksSpan",children:"Link to Deployed Application:"})]})}),Object(d.jsx)("div",{className:"worksRight",children:Object(d.jsx)("img",{src:e.img,alt:""})})]})})}))}),Object(d.jsx)("img",{src:"assets/arrow.png",className:"arrow arrowLeft",alt:"",onClick:function(){return r("left")}}),Object(d.jsx)("img",{src:"assets/arrow.png",className:"arrow arrowRight",alt:"",onClick:function(){return r()}})]})}s(35);function g(){return Object(d.jsx)("div",{className:"resume",id:"resume"})}s(36);function N(){var e=Object(c.useState)(!1),t=Object(p.a)(e,2),s=t[0],a=t[1];return Object(d.jsxs)("div",{className:"contact",id:"contact",children:[Object(d.jsx)("div",{className:"contactLeft",children:Object(d.jsx)("img",{className:"shakeImg",src:"assets/shake.svg",alt:""})}),Object(d.jsxs)("div",{className:"contactRight",children:[Object(d.jsx)("h2",{className:"contactH2",children:"Contact."}),Object(d.jsxs)("form",{onSubmit:function(e){e.preventDefault(),a(!0)},children:[Object(d.jsx)("input",{type:"text",placeholder:"Email"}),Object(d.jsx)("textarea",{placeholder:"Message"}),Object(d.jsx)("button",{type:"submit",children:"Send"}),s&&Object(d.jsx)("span",{className:"contactSpan",children:"Thanks, I'll reply ASAP :)"})]})]})]})}s(37);var v=function(){return Object(d.jsxs)("div",{className:"app",children:[Object(d.jsx)(m,{}),Object(d.jsxs)("div",{className:"sections",children:[Object(d.jsx)(h,{}),Object(d.jsx)(u,{}),Object(d.jsx)(x,{}),Object(d.jsx)(g,{}),Object(d.jsx)(N,{})]})]})};r.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(v,{})}),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.7ca4522a.chunk.js.map