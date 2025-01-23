import Layout from '@/Component/Layout';
import React from 'react'

function GalleryScreen({gallery}) {

  const data = [
    {
      imageLink:
        "https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        title:"The road at Bukasa",
    },
    {
      imageLink:
        "https://images.unsplash.com/photo-1432462770865-65b70566d673?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
        title:"The road at Bukasa",
    },
    {
      imageLink:
        "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80",
        title:"The road at Bukasa",
    },
    {
      imageLink:
        "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80",
        title:"The road at Bukasa",
    },
    {
      imageLink:
        "https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80",
        title:"The road at Bukasa",
    },
    {
      imageLink:
        "https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80",
        title:"The road at Bukasa",
    },
    {
      imageLink:
        "https://demos.creative-tim.com/material-kit-pro/assets/img/examples/blog5.jpg",
        title:"The road at Bukasa",
    },
    {
      imageLink:
        "https://material-taillwind-pro-ct-tailwind-team.vercel.app/img/content2.jpg",
        title:"The road at Bukasa",
    },
    {
      imageLink:
        "https://images.unsplash.com/photo-1620064916958-605375619af8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1493&q=80",
        title:"The road at Bukasa",
    },
  ];
  
  return (
    <div>
      <div className="pt-6 max-w-xl mx-auto text-center" data-aos='fade-down'>
          <div className="w-24 h-2 bg-primary mb-4 mx-auto "></div>
          <h3 className=" text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight text-secondary ">
            Our<span className="text-primary"> Gallery</span>
          </h3>
        </div>
    
    <div className="p-5 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
  {gallery.data && gallery.data.map(( gal, index) => (
    <div key={index} className="relative group">
      <img
        className="h-40 w-full max-w-full rounded-lg object-cover object-center"
        src={gal.imageurl}
        alt="gallery-photo"
      />
      <div className="absolute bottom-0 left-0 right-0 h-16 flex items-center justify-center bg-gradient-to-t from-black to-transparent text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-lg">
        <span className="text-sm font-medium">{gal.name}</span>
      </div>
    </div>
  ))}
</div>
</div>
  )
}
GalleryScreen.layout = page => <Layout children={page} />

export default GalleryScreen