import{W as d,j as e}from"./app-D78OuiK5.js";import{r as n}from"./index-QTCyWyVW.js";import{L as m}from"./Layout-Cjq2GsIC.js";function x(){const{data:s,setData:r,processing:l,post:i,reset:o,errors:t}=d(),c=a=>{a.preventDefault(),i("",{preserveScroll:!0,preserveState:!0,onSuccess:()=>{o(),r({})}})};return e.jsx("div",{children:e.jsx("div",{children:e.jsx("section",{className:"p-6",children:e.jsxs("div",{className:"container grid gap-6 mx-auto text-center lg:grid-cols-2 xl:grid-cols-5",children:[e.jsx("img",{src:"/images/gallery/kiru-03.jpg",alt:"",className:"object-cover w-full rounded-md xl:col-span-3 dark:bg-gray-500"}),e.jsxs("div",{className:"w-full px-6 rounded-md sm:px-12 md:px-16 xl:col-span-2 ",children:[e.jsx("div",{className:"text-center",children:e.jsxs("h3",{className:"text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight text-gray-900",children:["Water and",e.jsx("span",{className:"text-primary",children:" Sanitation"})]})}),e.jsx("p",{className:"my-5 w-full text-start",children:"Reliable water infrastructure is the backbone of any thriving community or development project. At Kiru General Services, we specialize in designing, constructing, and maintaining water systems that ensure the efficient delivery and management of water resources. Our services include the installation of pipelines, construction of reservoirs, and development of water treatment facilities. With a focus on sustainability and innovation, we create water solutions that meet the needs of today while preserving resources for future generations. Trust us to provide dependable water works that support growth and improve lives."}),e.jsx("form",{onSubmit:c,className:"self-stretch ng-untouched ng-pristine ng-valid",children:e.jsxs("div",{children:[e.jsxs("div",{className:"my-2",children:[e.jsx(n.Input,{color:"green",label:"Name",value:s.name??"",onChange:a=>r("name",a.target.value),error:t.name}),t.name&&e.jsx("span",{className:"text-xs text-red-500",children:t.name})]}),e.jsxs("div",{className:"my-2",children:[e.jsx(n.Input,{color:"green",label:"Email",value:s.email??"",onChange:a=>r("email",a.target.value),error:t.email}),t.email&&e.jsx("span",{className:"text-xs text-red-500",children:t.email})]}),e.jsxs("div",{className:"my-2",children:[e.jsx(n.Input,{color:"green",label:"Phone",value:s.phone??"",onChange:a=>r("phone",a.target.value),error:t.phone}),t.phone&&e.jsx("span",{className:"text-xs text-red-500",children:t.phone})]}),e.jsxs("div",{className:"my-2",children:[e.jsx(n.Textarea,{color:"green",label:"Extra Details",value:s.details??"",onChange:a=>r("details",a.target.value),error:t.details}),t.details&&e.jsx("span",{className:"text-xs text-red-500",children:t.details})]}),e.jsx("button",{type:"submit",disabled:l,className:"w-full py-2 font-semibold bg-primary text-white rounded ",children:"Send Request"})]})})]})]})})})})}x.layout=s=>e.jsx(m,{children:s});export{x as default};
