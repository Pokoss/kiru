import{W as d,j as e}from"./app-BA03G-Gy.js";import{r,L as m}from"./Layout-BxjTp6Ro.js";function x(){const{data:t,setData:l,processing:n,post:i,reset:o,errors:s}=d(),c=a=>{a.preventDefault(),i("",{preserveScroll:!0,preserveState:!0,onSuccess:()=>{o(),l({})}})};return e.jsx("div",{children:e.jsx("div",{children:e.jsx("section",{className:"p-6",children:e.jsxs("div",{className:"container grid gap-6 mx-auto text-center lg:grid-cols-2 xl:grid-cols-5",children:[e.jsx("img",{src:"/images/gallery/kiru-06.JPG",alt:"",className:"object-cover w-full rounded-md xl:col-span-3 dark:bg-gray-500"}),e.jsxs("div",{className:"w-full px-6 rounded-md sm:px-12 md:px-16 xl:col-span-2 ",children:[e.jsx("div",{className:"text-center",children:e.jsxs("h3",{className:"text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight text-gray-900",children:["Building",e.jsx("span",{className:"text-primary",children:" Construction"})]})}),e.jsx("p",{className:"my-5",children:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit, nulla? Velit nostrum iusto qui laborum possimus incidunt inventore veritatis magni corporis quam, ab sint voluptas quis voluptatum amet, fuga tempora?"}),e.jsx("form",{onSubmit:c,className:"self-stretch ng-untouched ng-pristine ng-valid",children:e.jsxs("div",{children:[e.jsxs("div",{className:"my-2",children:[e.jsx(r.Input,{color:"green",label:"Name",value:t.name??"",onChange:a=>l("name",a.target.value),error:s.name}),s.name&&e.jsx("span",{className:"text-xs text-red-500",children:s.name})]}),e.jsxs("div",{className:"my-2",children:[e.jsx(r.Input,{color:"green",label:"Email",value:t.email??"",onChange:a=>l("email",a.target.value),error:s.email}),s.email&&e.jsx("span",{className:"text-xs text-red-500",children:s.email})]}),e.jsxs("div",{className:"my-2",children:[e.jsx(r.Input,{color:"green",label:"Phone",value:t.phone??"",onChange:a=>l("phone",a.target.value),error:s.phone}),s.phone&&e.jsx("span",{className:"text-xs text-red-500",children:s.phone})]}),e.jsxs("div",{className:"my-2",children:[e.jsx(r.Textarea,{color:"green",label:"Extra Details",value:t.details??"",onChange:a=>l("details",a.target.value),error:s.details}),s.details&&e.jsx("span",{className:"text-xs text-red-500",children:s.details})]}),e.jsx("button",{type:"submit",disabled:n,className:"w-full py-2 font-semibold bg-primary text-white rounded ",children:"Send Request"})]})})]})]})})})})}x.layout=t=>e.jsx(m,{children:t});export{x as default};
