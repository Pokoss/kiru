import Events from '@/Component/Events'
import Layout from '@/Component/Layout'
import React from 'react'

function ProjectlistScreen({projects}) {

  console.log(projects)
  // const projects =[
  //   {
  //     'title':'Busega',
  //     'progress':'Ongoing',
  //     'type':'ROAD',
  //     'imageurl':'/images/projects/busega.jpg',
  //   },
  //   {
  //     'title':'Mukono ODP',
  //     'progress':'Complete',
  //     'type':'Building',
  //     'imageurl':'/images/projects/mukono-odp.jpg',
  //   },
  //   {
  //     'title':'Kizanyiro',
  //     'progress':'Complete',
  //     'type':'ROAD',
  //     'imageurl':'/images/projects/kizanyiro-road.jpg',
  //   },
  // ] 

  return (
    <div>
      <div className="pt-6 max-w-xl mx-auto text-center" data-aos='fade-down'>
        <div className="w-24 h-2 bg-primary mb-4 mx-auto "></div>
        <h3 className=" text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight text-secondary ">
          Our<span className="text-primary"> Projects</span>
        </h3>
      </div>

      <div className="p-5 grid gap-8 lg:grid-cols-3 md:grid-cols-2 md:max-w-full sm:max-w-sm sm:mx-auto lg:max-w-full">
        {projects.data && projects.data.map((project, index) => (
                <Events project={project}/>
                ))}
      </div>
    </div>
  )
}
ProjectlistScreen.layout = page => <Layout children={page} />

export default ProjectlistScreen