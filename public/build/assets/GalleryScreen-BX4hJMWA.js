import{j as t}from"./app-tfRdyDYt.js";import{L as s}from"./Layout-B9mzHSbw.js";import"./index-C5nqKmtP.js";function l({gallery:e}){return t.jsxs("div",{children:[t.jsxs("div",{className:"pt-6 max-w-xl mx-auto text-center","data-aos":"fade-down",children:[t.jsx("div",{className:"w-24 h-2 bg-primary mb-4 mx-auto "}),t.jsxs("h3",{className:" text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight text-secondary ",children:["Our",t.jsx("span",{className:"text-primary",children:" Gallery"})]})]}),t.jsx("div",{className:"p-5 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3",children:e.data&&e.data.map((a,r)=>t.jsxs("div",{className:"relative group",children:[t.jsx("img",{className:"h-40 w-full max-w-full rounded-lg object-cover object-center",src:a.imageurl,alt:"gallery-photo"}),t.jsx("div",{className:"absolute bottom-0 left-0 right-0 h-16 flex items-center justify-center bg-gradient-to-t from-black to-transparent text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-lg",children:t.jsx("span",{className:"text-sm font-medium",children:a.name})})]},r))})]})}l.layout=e=>t.jsx(s,{children:e});export{l as default};
