import{W as d,j as e}from"./app-BA03G-Gy.js";import{r as l,L as m}from"./Layout-BxjTp6Ro.js";function x(){const{data:r,setData:t,processing:n,post:i,reset:c,errors:a}=d(),o=s=>{s.preventDefault(),i("",{preserveScroll:!0,preserveState:!0,onSuccess:()=>{c(),t({})}})};return e.jsx("div",{children:e.jsx("div",{children:e.jsx("section",{className:"p-6",children:e.jsxs("div",{className:"container grid gap-6 mx-auto text-center lg:grid-cols-2 xl:grid-cols-5",children:[e.jsx("img",{src:"/images/gallery/kiru-02.JPG",alt:"",className:"object-cover w-full rounded-md xl:col-span-3 dark:bg-gray-500"}),e.jsxs("div",{className:"w-full px-6 rounded-md sm:px-12 md:px-16 xl:col-span-2 ",children:[e.jsx("div",{className:"text-center",children:e.jsxs("h3",{className:"text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight text-gray-900",children:["Road and",e.jsx("span",{className:"text-primary",children:" Drainage Construction"})]})}),e.jsx("p",{className:"my-5",children:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam earum amet rerum beatae, recusandae alias optio nobis deserunt repellendus, accusamus praesentium porro quia magnam inventore dicta in impedit saepe nesciunt?"}),e.jsx("form",{onSubmit:o,className:"self-stretch ng-untouched ng-pristine ng-valid",children:e.jsxs("div",{children:[e.jsxs("div",{className:"my-2",children:[e.jsx(l.Input,{color:"green",label:"Name",value:r.name??"",onChange:s=>t("name",s.target.value),error:a.name}),a.name&&e.jsx("span",{className:"text-xs text-red-500",children:a.name})]}),e.jsxs("div",{className:"my-2",children:[e.jsx(l.Input,{color:"green",label:"Email",value:r.email??"",onChange:s=>t("email",s.target.value),error:a.email}),a.email&&e.jsx("span",{className:"text-xs text-red-500",children:a.email})]}),e.jsxs("div",{className:"my-2",children:[e.jsx(l.Input,{color:"green",label:"Phone",value:r.phone??"",onChange:s=>t("phone",s.target.value),error:a.phone}),a.phone&&e.jsx("span",{className:"text-xs text-red-500",children:a.phone})]}),e.jsxs("div",{className:"my-2",children:[e.jsx(l.Textarea,{color:"green",label:"Extra Details",value:r.details??"",onChange:s=>t("details",s.target.value),error:a.details}),a.details&&e.jsx("span",{className:"text-xs text-red-500",children:a.details})]}),e.jsx("button",{type:"submit",disabled:n,className:"w-full py-2 font-semibold bg-primary text-white rounded ",children:"Send Request"})]})})]})]})})})})}x.layout=r=>e.jsx(m,{children:r});export{x as default};