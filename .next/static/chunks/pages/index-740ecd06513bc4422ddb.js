(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{9825:function(e,t,l){"use strict";l.r(t),l.d(t,{default:function(){return z}});var i=l(5893),n=l(1664),s=function(e){return(0,i.jsx)("h4",{className:" mb-5 text-xl text-white font-ubuntu font-bold text-center md:text-left",children:e.children})},r=function(e){return(0,i.jsx)("ul",{className:"flex flex-col items-center justify-center md:items-start",children:e.items.map((function(e,t){return(0,i.jsx)("li",{className:"font-ubuntu text-[#c8c8cb] mb-3 las:mb-0 cursor-pointer hover:text-white",children:e},t)}))})},a=function(){return(0,i.jsxs)("footer",{className:"py-24 flex flex-col w-full items-center justify-center bg-[#25252d] rounded-tr-[8rem] md:flex-row md:justify-evenly md:items-start md:py-12",children:[(0,i.jsx)(n.default,{href:"/",children:(0,i.jsx)("a",{className:"no-underline font-ubuntu\r font-bold text-3xl text-white text-center mb-12",children:"Blogr"})}),(0,i.jsxs)("div",{className:"flex flex-col my-8 md:my-0",children:[(0,i.jsx)(s,{children:"Product"}),(0,i.jsx)(r,{items:["Overview","Pricing","Marketplace","Features","Integrations"]})]}),(0,i.jsxs)("div",{className:"flex flex-col my-8 md:my-0",children:[(0,i.jsx)(s,{children:"Company"}),(0,i.jsx)(r,{items:["About","Team","Blog","Careers"]})]}),(0,i.jsxs)("div",{className:"flex flex-col my-8 md:my-0",children:[(0,i.jsx)(s,{children:"Connect"}),(0,i.jsx)(r,{items:["Contact","Newsletter","LinkedIn"]})]})]})},o={src:"/_next/static/image/public/images/icon-arrow-dark.5215f8d979a83644d14e8b69f6ee4633.svg",height:7,width:10},c={src:"/_next/static/image/public/images/icon-arrow-light.9ba0f38e6df41815773e653d50260ecd.svg",height:7,width:10},d=l(5675),m=l(7294);function x(){var e=(0,m.useState)({width:void 0,height:void 0}),t=e[0],l=e[1];return(0,m.useEffect)((function(){var e=function(){l({width:window.innerWidth,height:window.innerHeight})};return window.addEventListener("resize",e),e(),function(){return window.removeEventListener("resize",e)}}),[]),t}var f=function(e){var t=x().width>1024?c:o,l=e.activeChild===e.id?"rotate-[-180deg]":"rotate-0",s=e.activeChild===e.id?" max-h-[500px] opacity-100 ":" max-h-[0px] opacity-0 ",r=(0,m.useRef)();return(0,m.useEffect)((function(){var t=function(t){r.current.contains(t.target)||t.target.classList.contains("dropdown")||e.setActive(0)};return document.addEventListener("mousedown",t),function(){document.removeEventListener("mousedown",t)}}),[]),(0,i.jsxs)("div",{className:"mb-7 lg:mb-0 lg:mt-2 lg:mx-5 relative",children:[(0,i.jsxs)("div",{className:"flex w-[fit-content] mx-auto items-center cursor-pointer dropdown",onClick:function(){e.setActive(e.id),e.activeChild===e.id&&e.setActive(0)},ref:r,children:[(0,i.jsx)("span",{className:"font-overpass font-bold text-lg text-[#1f3f5b] mr-2 \r lg:text-white lg:font-ubuntu lg:font-normal dropdown",children:e.title}),(0,i.jsx)(d.default,{src:t,alt:"arrow",layout:"fixed",width:13,height:9,className:l+" transition-transform dropdown"})]}),(0,i.jsx)("div",{className:"flex flex-col bg-gray-200 w-full rounded-lg mt-5 lg:bg-white lg:mt-0 lg:absolute lg:rounded-md lg:top-9 lg:min-w-[125px] transition-all overflow-hidden duration-300 "+s,children:e.dropDown.map((function(e,t){return(0,i.jsx)(n.default,{href:"#",children:(0,i.jsx)("a",{className:"py-4 text-[#393957a9] text-center text-base font-bold \r font-overpass hover:text-black",children:e})},t)}))})]})},u=function(){return(0,i.jsxs)("div",{className:"w-min flex flex-col items-center mt-10 mx-auto\r lg:flex-row lg:mt-0 lg:mr-0 ",children:[(0,i.jsx)(n.default,{href:"#",children:(0,i.jsx)("a",{className:"font-overpass text-lg \r inline-block \r text-center font-bold text-[#1f3f5b] mb-2 py-3 lg:text-white\r lg:font-ubuntu lg:font-normal lg:mr-8 ",children:"Login"})}),(0,i.jsx)(n.default,{href:"#",children:(0,i.jsx)("a",{className:"text-center font-overpass text-lg \r inline-block w-[150px] bg-gray-800 text-white\r rounded-full bg-gradient-to-r \r from-[#ff8f70] to-[#ff3d54] font-bold py-3\r lg:text-[#ff3d54] lg:bg-none lg:bg-white\r lg:font-ubuntu lg:font-bold ",children:"Sign Up"})})]})},h=function(){var e=(0,m.useState)(!1),t=e[0],l=e[1],s=(0,m.useState)(0),r=s[0],a=s[1],o=x().width,c=o<=1024&&t?"tham-active":"";return(0,i.jsxs)("nav",{className:"flex items-center justify-between relative z-10 \r lg:items-start",children:[(0,i.jsx)(n.default,{href:"/",children:(0,i.jsx)("a",{className:"no-underline font-ubuntu\r font-bold text-3xl text-white",children:"Blogr"})}),(0,i.jsxs)("div",{className:"bg-white rounded-xl absolute w-full top-16 px-7 py-10 shadow-2xl  duration-[400ms] max-h-[800px] overflow-y-hidden lg:overflow-y-visible "+(o>1024?"opacity-100 transition-none ":t?"max-h-[800px] opacity-100 transition-all":"max-h-[0px] opacity-0 transition-all")+" lg:static lg:flex lg:bg-transparent lg:px-0 lg:py-0 lg:shadow-none lg:ml-6 lg:justify-evenly lg:max-h-full",children:[(0,i.jsx)("div",{className:"lg:flex",children:[{title:"Product",dropDown:["Overview","Pricing","Marketplace","Features","Integrations"]},{title:"Company",dropDown:["About","Team","Blog","Careers"]},{title:"Connect",dropDown:["Contact","Newsletter","Linkedin"]}].map((function(e,t){return(0,i.jsx)(f,{title:e.title,dropDown:e.dropDown,setActive:function(e){a(e)},activeChild:r,id:t+1},t+1)}))}),(0,i.jsx)("div",{className:"w-full h-[1.5px] bg-gray-200 lg:hidden"}),(0,i.jsx)(u,{})]}),(0,i.jsx)("div",{className:c+" lg:hidden tham tham-e-squeeze tham-w-6",onClick:function(){l(!t)},children:(0,i.jsx)("div",{className:"tham-box",children:(0,i.jsx)("div",{className:"tham-inner bg-white"})})})]})},g={src:"/_next/static/image/public/images/bg-pattern-intro.bf6b3e1b727eabeffdc535d0d6a5f268.svg",height:3174,width:3175},b=function(){return(0,i.jsxs)("div",{className:"flex flex-col\r py-8 px-6 h-[500px] rounded-bl-[8rem] lg:px-36 bg-gradient-to-b \r from-[#ff8f70] to-[#ff3d54] relative",children:[(0,i.jsx)("div",{className:"absolute top-0 left-0 w-full rounded-bl-[8rem] h-full overflow-hidden z-[1]",children:(0,i.jsx)(d.default,{src:g,alt:"asd",layout:"fill",objectFit:"cover",className:"scale-[1.7]"})}),(0,i.jsx)(h,{}),(0,i.jsxs)("div",{className:" flex flex-col\r px-6 items-center my-auto z-[1]",children:[(0,i.jsx)("h4",{className:"font-overpass font-bold text-white text-center text-3xl sm:text-5xl",children:"A modern publishing platform"}),(0,i.jsx)("p",{className:"text-center text-white font-overpass mt-4 text-base sm:text-xl ",children:"Grow your audience and build your online brand"}),(0,i.jsxs)("div",{className:"mt-8 w-full flex flex-col items-center sm:flex-row justify-center",children:[(0,i.jsx)(n.default,{href:"/",children:(0,i.jsx)("a",{className:"inline-block w-[130px] text-center p-3 bg-white rounded-full text-sm border-2 border-white \r font-ubuntu font-bold text-[#ff525d] mb-4 sm:mr-9 sm:mb-0 ",children:"Start For Free"})}),(0,i.jsx)(n.default,{href:"/",children:(0,i.jsx)("a",{className:"inline-block w-[130px] text-center p-3 rounded-full border-white  text-sm border-2  font-ubuntu font-bold text-white",children:"Learn More"})})]})]})]})},p=function(e){var t=e.white?"text-white":"text-[#1f3f5b]";return(0,i.jsx)("h4",{className:t+" font-overpass font-bold mb-4 text-2xl text-center lg:text-left lg:mx-0",children:e.children})},w=function(e){var t=e.white?"text-[#c8c8cb]":"text-[#4b5862]";return(0,i.jsx)("p",{className:t+" font-light font-overpass text-sm text-center lg:text-left leading-7 lg:mx-0",children:e.children})},v={src:"/_next/static/image/public/images/illustration-editor-desktop.c6c8050aa4dcf0c64b4406570c970d2b.svg",height:882,width:925},j={src:"/_next/static/image/public/images/illustration-editor-mobile.b9c7941a96d06832fa27673be37499a4.svg",height:331,width:406},y=function(){var e=x().width>1024?v:j;return(0,i.jsxs)("section",{className:"flex flex-col lg:flex-row lg:items-center relative",children:[(0,i.jsx)("div",{className:"w-4/5 mt-12 md:w-3/5 mx-auto lg:w-[43.75rem] lg:absolute lg:-right-48 -top-20",children:(0,i.jsx)(d.default,{src:e,layout:"responsive",alt:"editor",objectFit:"cover"})}),(0,i.jsxs)("div",{className:"max-w-[650px] px-12 mx-auto lg:px-24 lg:mt-14 lg:mx-0",children:[(0,i.jsxs)("div",{className:"mt-16",children:[(0,i.jsx)(p,{children:"Introducing an extensible editor"}),(0,i.jsx)(w,{children:"Blogr features an exceedingly intuitive interface which lets you focus on one thing: creating content. The editor supports management of multiple blogs and allows easy manipulation of embeds such as images, videos, and Markdown. Extensibility with plugins and themes provide easy ways to add funcitonality or change the looks of blog."})]}),(0,i.jsxs)("div",{className:"mt-16",children:[(0,i.jsx)(p,{children:"Robust content management"}),(0,i.jsx)(w,{children:"Flexible content management ebales users to easily move through posts. Increase the usability of your blog by adding customized vategories, sections, format, or flow. With this functionalitu, you're in full control."})]})]})]})},N={src:"/_next/static/image/public/images/illustration-phones.fd23559f1d2f81f9e3f3340eeaf2467c.svg",height:579,width:552},k={src:"/_next/static/image/public/images/bg-pattern-circles.bae804b8cc1519f26c944365280d192b.svg",height:1018,width:1014},_=function(){return(0,i.jsxs)("section",{className:"relative mt-36 mb-20 h-[31.25rem] md:h-[28.125rem] lg:h-[18.75rem]",children:[(0,i.jsx)("div",{className:"w-full h-full bg-gradient-to-b from-[#2c2d3f] to-[#3f4164] rounded-bl-[8rem] rounded-tr-[8rem] overflow-hidden",children:(0,i.jsx)("div",{className:"w-full -translate-y-24 lg:w-1/2 lg:-translate-y-96 lg:-translate-x-36",children:(0,i.jsx)(d.default,{src:k,layout:"responsive",alt:"editor",objectFit:"cover"})})}),(0,i.jsxs)("div",{className:"flex flex-col lg:flex-row items-center absolute -top-28 lg:-top-0 w-full lg:h-full",children:[(0,i.jsx)("div",{className:"w-[70%] sm:w-3/5 md:w-1/3 mx-auto lg:min-w-[25rem] lg:max-w-[26rem] lg:mx-0 lg:ml-24",children:(0,i.jsx)(d.default,{src:N,layout:"responsive",alt:"editor",objectFit:"cover"})}),(0,i.jsxs)("div",{className:"max-w-[720px] px-12 mx-auto lg:px-24 lg:mx-0 lg:ml-auto",children:[(0,i.jsx)(p,{white:!0,children:"State of the Art Infrastructure"}),(0,i.jsx)(w,{white:!0,children:"With reliability and speed in mind, worldwide data centers provide the backbone for ultra-fast connectivity. This ensures your site will load instantly, no matter where your readers are, keeping your site competitive."})]})]})]})},C={src:"/_next/static/image/public/images/illustration-laptop-desktop.799209c2628b1f244e1512cc686f0162.svg",height:786,width:974},E={src:"/_next/static/image/public/images/illustration-laptop-mobile.fe1ec0f05da01bb067fa78fca0b79d76.svg",height:359,width:498},F=function(){var e=x().width>1024?C:E;return(0,i.jsxs)("section",{className:"flex flex-col lg:flex-row lg:items-center relative",children:[(0,i.jsx)("div",{className:"w-full mb-12 md:w-3/5 mx-auto lg:absolute lg:-left-52 lg:w-[43.75rem] lg:-top-20 lg:my-0 ",children:(0,i.jsx)(d.default,{src:e,layout:"responsive",alt:"editor",objectFit:"cover"})}),(0,i.jsxs)("div",{className:"max-w-[720px] px-12 mx-auto lg:px-24 lg:mt-14 lg:ml-auto lg:mx-0",children:[(0,i.jsxs)("div",{className:"mt-0",children:[(0,i.jsx)(p,{children:"Free, open, simple"}),(0,i.jsx)(w,{children:"Blogr is a free and open source application backed by a large community of helpful developers. It supports features such as code syntax highlighting, RSS feeds, social media integration, third-party commenting tools, and works seamlessly with Google Analytics. The architecture is clean and is relatively easy to learn."})]}),(0,i.jsxs)("div",{className:"mt-12",children:[(0,i.jsx)(p,{children:"Powerful tooling"}),(0,i.jsx)(w,{children:"Batteris included. We built a simple straightforward CLI tool that makes customization and deployment a breeze, but capable of producing even the most complicated sites."})]})]})]})},L=function(){return(0,i.jsxs)("main",{className:"py-20 overflow-hidden relative",children:[(0,i.jsx)("h3",{className:"text-[#1f3f5b] font-overpass font-bold text-4xl text-center",children:"Designed for the future"}),(0,i.jsx)(y,{}),(0,i.jsx)(_,{}),(0,i.jsx)(F,{})]})};function z(){return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(b,{}),(0,i.jsx)(L,{}),(0,i.jsx)(a,{})]})}},8581:function(e,t,l){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return l(9825)}])}},function(e){e.O(0,[61,774,888,179],(function(){return t=8581,e(e.s=t);var t}));var t=e.O();_N_E=t}]);